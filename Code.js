/**
 * PropAlliance Admin Hub - Backend Engine
 * Version 1.0
 */

const CONFIG = {
  MASTER_HUB_ID: "1_DrJDsrRv69hYBu99PUdsOZJRgI5Aos4",
  MANIFEST_FILENAME: "freshness_manifest.json",
  MASTER_API_URL: "https://script.google.com/a/macros/propalliance.com/s/AKfycbzwArfpLNQnQIOgwuBKFeeCbdmc4m39kksuNL7TDF6_ljgGKdGoHgOGbEWuku8jbAdZag/exec"
};

/**
 * Serves the Web App UI
 */
function doGet(e) {
  const params = (e && e.parameter) ? e.parameter : {};
  if (params.registry_hub === 'true') {
    return ContentService
      .createTextOutput(JSON.stringify(getRegistryHubData()))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (params.hub_data === 'true') {
    const target = params.target || 'all';
    const bypassCache = (params.cache === 'false');
    const payload = getHubData_(target, bypassCache);

    parseHubTargets_(target).forEach(function(t) {
      if (t !== 'all') recordHeartbeat_(t);
    });

    return ContentService
      .createTextOutput(JSON.stringify(payload))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (params.get_heartbeats === 'true') {
    return ContentService
      .createTextOutput(JSON.stringify({ heartbeats: getHeartbeatsFromProperties_() }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const mode = (e && e.parameter && e.parameter.mode) || 'admin';
  const template = HtmlService.createTemplateFromFile('index');
  
  template.mode = mode;
  template.isUser = (mode === 'user');
  
  return template.evaluate()
    .setTitle('PropAlliance Hub')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Returns project registry and data pulse status
 */
function getHubData() {
  return getRegistryHubData();
}

function getRegistryHubData() {
  var snapshot = getRegistrySnapshot();
  var user = getCurrentHubUser_();
  var projects = filterProjectsForRole_(snapshot.projects || [], user);

  return {
    generatedAt: snapshot.generatedAt,
    registrySourcePath: snapshot.registrySourcePath,
    registryHash: snapshot.registryHash,
    projectCount: snapshot.projectCount,
    assetCount: snapshot.assetCount,
    deploymentCount: snapshot.deploymentCount,
    phase: snapshot.phase,
    safety: snapshot.safety,
    user: user,
    summary: buildHubSummary_(snapshot.projects || []),
    projects: projects
  };
}

function getCurrentHubUser_() {
  var email = '';
  try {
    email = Session.getActiveUser().getEmail() || '';
  } catch (err) {
    email = '';
  }
  var effectiveEmail = '';
  try {
    effectiveEmail = Session.getEffectiveUser().getEmail() || '';
  } catch (err2) {
    effectiveEmail = '';
  }

  var normalizedEmail = String(email || '').toLowerCase();
  var normalizedEffectiveEmail = String(effectiveEmail || '').toLowerCase();
  var role = hubUserHasCentralRole_(normalizedEmail, 'role-admin') ||
    hubUserHasCentralRole_(normalizedEffectiveEmail, 'role-admin') ? 'ADMIN' : 'SUPERVISOR';

  return {
    email: email || effectiveEmail,
    role: role,
    isAdmin: role === 'ADMIN',
    viewMode: role,
    simulationOnly: false
  };
}

function hubUserHasCentralRole_(email, roleId) {
  if (!email) return false;
  try {
    return getUsersByRole(roleId).some(function(user) {
      return String(user.primaryEmail || '').toLowerCase() === email ||
        String(user.secondaryEmail || '').toLowerCase() === email;
    });
  } catch (err) {
    console.warn('Hub central role lookup failed: ' + err.message);
    return false;
  }
}

function filterProjectsForRole_(projects, user) {
  if (user && (user.isAdmin || user.role === 'SUPERVISOR')) return projects;

  return projects
    .filter(function(project) {
      return project.visibility && project.visibility.supervisor && project.liveUrl;
    })
    .map(function(project) {
      return {
        projectId: project.projectId,
        projectName: project.projectName,
        projectSlug: project.projectSlug,
        category: project.category,
        status: project.status,
        routerStatus: project.routerStatus,
        liveUrl: project.liveUrl,
        notes: project.notes,
        lastVerified: project.lastVerified,
        governance: {
          legacy: project.governance && project.governance.legacy,
          readOnly: project.governance && project.governance.readOnly,
          staleLive: project.governance && project.governance.staleLive
        }
      };
    });
}

function buildHubSummary_(projects) {
  var summary = {
    totalProjects: projects.length,
    liveProjects: 0,
    devProjects: 0,
    missingDev: 0,
    legacy: 0,
    staleLive: 0,
    manualReview: 0,
    backupsMissing: 0
  };

  projects.forEach(function(project) {
    if (project.liveUrl) summary.liveProjects++;
    if (project.devUrl || project.devScriptUrl) summary.devProjects++;
    if (project.governance && project.governance.missingDev) summary.missingDev++;
    if (project.governance && project.governance.legacy) summary.legacy++;
    if (project.governance && project.governance.staleLive) summary.staleLive++;
    if (project.governance && project.governance.manualReviewRequired) summary.manualReview++;
    if (project.governance && project.governance.backupMissing) summary.backupsMissing++;
  });

  return summary;
}

function getLegacyHubData_() {
  const syncStatus = getSyncStatus();
  const heartbeats = getHeartbeats_();
  const projects = getProjectRegistry().map(p => {
    if (heartbeats[p.id.toLowerCase()]) {
      p.lastHubSync = heartbeats[p.id.toLowerCase()];
    }
    return p;
  });
  
  return {
    syncStatus,
    projects
  };
}

/**
 * Reads the freshness manifest from the Master Hub
 */
function getSyncStatus() {
  try {
    const hub = DriveApp.getFolderById(CONFIG.MASTER_HUB_ID);
    const files = hub.getFilesByName(CONFIG.MANIFEST_FILENAME);
    
    if (files.hasNext()) {
      const content = files.next().getBlob().getDataAsString();
      return JSON.parse(content);
    }
  } catch (e) {
    Logger.log("Error reading manifest: " + e.toString());
  }
  return { system_last_run: null, reports: {} };
}

/**
 * Helper for HTML inclusion
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Fetches heartbeats from Master API
 */
function getHeartbeats_() {
  try {
    const url = CONFIG.MASTER_API_URL + "?get_heartbeats=true";
    const resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (resp.getResponseCode() === 200) {
      const data = JSON.parse(resp.getContentText());
      return data.heartbeats || {};
    }
  } catch (e) {
    Logger.log("Error fetching heartbeats: " + e.toString());
  }
  return {};
}

/**
 * Cross-project Hub API backed by AppFolio reports.
 * Supports comma-separated targets, e.g. ?hub_data=true&target=vacancies,moveouts,inspections,workorders
 */
function getHubData_(target, bypassCache) {
  const targets = parseHubTargets_(target);
  const cacheKey = 'HUB_DATA_SNAPSHOT_' + targets.join('_').toUpperCase();
  const cache = CacheService.getScriptCache();

  if (!bypassCache) {
    const cached = cache.get(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        parsed.fromCache = true;
        return parsed;
      } catch (e) {}
    }
  }

  const out = {
    status: 'success',
    timestamp: new Date().toISOString(),
    target: targets.join(','),
    data: {},
    debug: [],
    warnings: [],
    fromCache: false
  };

  try {
    if (hubTargetRequested_(targets, 'delinquency')) {
      loadHubReport_(out, 'delinquency', ['delinquency', 'ownerdashboard_-_delinquency'], mapDelinquencySchema_);
    }

    if (hubTargetRequested_(targets, 'properties') || hubTargetRequested_(targets, 'inventory')) {
      loadHubReport_(out, 'properties', ['unit_directory'], mapPropertyDirectorySchema_);
      out.data.inventory = out.data.properties || [];
    }

    if (hubTargetRequested_(targets, 'vacancies')) {
      loadHubReport_(out, 'vacancies', ['unit_vacancy', 'unit_vacancy_detail', 'ownerdashboard_-_unit_vacancy']);
    }

    if (hubTargetRequested_(targets, 'moveouts')) {
      loadHubReport_(out, 'moveouts', ['tenant_movement', 'moveouts', 'move_outs']);
    }

    if (hubTargetRequested_(targets, 'inspections')) {
      loadHubReport_(out, 'inspections', ['inspections', 'inspection']);
    }

    if (hubTargetRequested_(targets, 'leads')) {
      loadHubReport_(out, 'leads', ['guest_card_interests', 'guest_card', 'leads'], mapLeadsSchema_);
    }

    if (hubTargetRequested_(targets, 'owners')) {
      loadHubReport_(out, 'owners', ['owner_directory', 'owner_details'], mapOwnerDirectorySchema_);
    }

    if (hubTargetRequested_(targets, 'renewals')) {
      loadHubReport_(out, 'renewals', ['renewals', 'renewal_detail']);
    }

    if (hubTargetRequested_(targets, 'expirations')) {
      loadHubReport_(out, 'expirations', ['expiring_leases', 'expirations']);
    }

    if (hubTargetRequested_(targets, 'workorders')) {
      loadHubReport_(out, 'workorders', ['work_orders', 'workorders', 'work_order']);
    }

    if (hubTargetRequested_(targets, 'bill_detail')) {
      loadHubReport_(out, 'bill_detail', ['bill_detail', 'bills_detail', 'bill_details']);
    }

    if (hubTargetRequested_(targets, 'mrc')) {
      loadMrcBundle_(out);
    }

    if (hubTargetRequested_(targets, 'pmb')) {
      loadPmbBundle_(out);
    }

    if (out.warnings.length && Object.keys(out.data).length === 0) {
      out.status = 'error';
      out.message = 'No requested AppFolio reports could be loaded.';
    } else if (out.warnings.length) {
      out.status = 'partial';
    }

    if (targets.indexOf('all') === -1) {
      cache.put(cacheKey, JSON.stringify(out), 600);
    }
  } catch (err) {
    out.status = 'error';
    out.message = String(err);
    out.debug.push('Fatal Error: ' + (err && err.message ? err.message : err));
  }

  return out;
}

function parseHubTargets_(target) {
  var raw = String(target || 'all').split(',');
  var out = [];
  raw.forEach(function(part) {
    var t = String(part || '').trim().toLowerCase();
    if (!t) return;
    if (t === 'property') t = 'properties';
    if (t === 'directory') t = 'properties';
    if (t === 'unit_directory') t = 'properties';
    if (t === 'unit_vacancy') t = 'vacancies';
    if (t === 'vacancy') t = 'vacancies';
    if (t === 'moveout' || t === 'move_outs' || t === 'move-outs') t = 'moveouts';
    if (t === 'inspection') t = 'inspections';
    if (t === 'workorder' || t === 'work_orders' || t === 'work orders') t = 'workorders';
    if (t === 'bill detail' || t === 'bill-detail' || t === 'bill_details' || t === 'bills_detail') t = 'bill_detail';
    if (out.indexOf(t) === -1) out.push(t);
  });
  return out.length ? out : ['all'];
}

function hubTargetRequested_(targets, key) {
  return targets.indexOf('all') !== -1 || targets.indexOf(key) !== -1;
}

function loadHubReport_(out, dataKey, reportCandidates, mapper) {
  var result = appfolioFetchFirstAvailableReport_(reportCandidates);
  if (!result.ok) {
    out.warnings.push('Could not load ' + dataKey + ': ' + result.message);
    return [];
  }

  var rows = mapper ? mapper(result.rows) : result.rows;
  out.data[dataKey] = rows;
  out.debug.push('Loaded ' + dataKey + ' from AppFolio report ' + result.reportName + ': ' + rows.length + ' rows');
  return rows;
}

function appfolioFetchFirstAvailableReport_(reportCandidates) {
  var lastError = '';
  for (var i = 0; i < reportCandidates.length; i++) {
    var reportName = reportCandidates[i];
    try {
      var resp = appfolioFetchReportAllPages_(reportName);
      return { ok: true, reportName: reportName, rows: resp.rows || [] };
    } catch (err) {
      lastError = reportName + ': ' + String(err && err.message ? err.message : err);
    }
  }
  return { ok: false, reportName: '', rows: [], message: lastError || 'No report candidates configured.' };
}

function loadMrcBundle_(out) {
  var vacancies = out.data.vacancies || loadHubReport_(out, 'vacancies', ['unit_vacancy', 'unit_vacancy_detail', 'ownerdashboard_-_unit_vacancy']);
  var directoryRaw = appfolioFetchFirstAvailableReport_(['unit_directory']);
  if (!directoryRaw.ok) {
    out.warnings.push('Could not load mrc directory support data: ' + directoryRaw.message);
    out.data.mrc = vacancies || [];
    return;
  }

  out.data.mrc = mapMrcVacancySchema_(vacancies || [], directoryRaw.rows || []);
  out.debug.push('Built mrc bundle: ' + out.data.mrc.length + ' rows');
}

function loadPmbBundle_(out) {
  if (!out.data.delinquency) loadHubReport_(out, 'delinquency', ['delinquency', 'ownerdashboard_-_delinquency'], mapDelinquencySchema_);
  if (!out.data.properties) {
    loadHubReport_(out, 'properties', ['unit_directory'], mapPropertyDirectorySchema_);
    out.data.inventory = out.data.properties || [];
  }
  if (!out.data.vacancies) loadHubReport_(out, 'vacancies', ['unit_vacancy', 'unit_vacancy_detail', 'ownerdashboard_-_unit_vacancy']);
  if (!out.data.moveouts) loadHubReport_(out, 'moveouts', ['tenant_movement', 'moveouts', 'move_outs']);
  if (!out.data.inspections) loadHubReport_(out, 'inspections', ['inspections', 'inspection']);
  if (!out.data.workorders) loadHubReport_(out, 'workorders', ['work_orders', 'workorders', 'work_order']);
  if (!out.data.leads) loadHubReport_(out, 'leads', ['guest_card_interests', 'guest_card', 'leads'], mapLeadsSchema_);
  if (!out.data.renewals) loadHubReport_(out, 'renewals', ['renewals', 'renewal_detail']);
  if (!out.data.expirations) loadHubReport_(out, 'expirations', ['expiring_leases', 'expirations']);
  out.data.pmb = {
    delinquency: out.data.delinquency || [],
    properties: out.data.properties || [],
    inventory: out.data.inventory || [],
    vacancies: out.data.vacancies || [],
    moveouts: out.data.moveouts || [],
    inspections: out.data.inspections || [],
    workorders: out.data.workorders || [],
    leads: out.data.leads || [],
    renewals: out.data.renewals || [],
    expirations: out.data.expirations || []
  };
  out.debug.push('Built pmb bundle.');
}

function mapDelinquencySchema_(rows) {
  return rows.map(function(row) {
    return {
      'Property Name': String(row.PropertyName || row.property_name || ''),
      'Name': String(row.TenantName || row.tenant_name || row.Name || ''),
      'Unit': String(row.UnitName || row.unit_name || row.Unit || ''),
      'Amount Receivable': row.TotalBalance || row.total_balance || 0,
      '0-30': row.Aged0_30 || row.aged_0_30 || 0,
      '30-60': row.Aged31_60 || row.aged_31_60 || 0,
      '60+': (Number(row.Aged61_90 || 0) + Number(row.AgedOver90 || 0)),
      'Tenant Status': String(row.TenantStatus || row.tenant_status || ''),
      'Delinquency Notes': String(row.DelinquencyNotes || row.delinquency_notes || ''),
      'Last Payment Date': String(row.LastPaymentDate || row.last_payment_date || ''),
      'Lease End Date': String(row.LeaseEndDate || row.lease_end_date || '')
    };
  });
}

function mapLeadsSchema_(rows) {
  return rows.map(function(row) {
    return {
      'Property': String(row.PropertyName || row.property_name || row.Property || ''),
      'Status': String(row.Status || row.status || row.Result || 'New'),
      'Interest': String(row.Interest || row.interest || 'N/A'),
      'Type': String(row.Type || row.type || 'Lead'),
      'Source': String(row.Source || row.source || row.LeadType || 'Unknown'),
      'Created At': String(row.CreatedAt || row.created_at || row.Date || '')
    };
  });
}

function mapPropertyDirectorySchema_(rows) {
  const properties = {};
  rows.forEach(function(row) {
    const name = String(row.PropertyName || row.property_name || '').trim();
    if (!name) return;
    if (!properties[name]) {
      properties[name] = {
        'Property Name': name,
        'Property': String(row.Property || name).trim(),
        'Unit Count': 0
      };
    }
    properties[name]['Unit Count']++;
  });
  return Object.values(properties);
}

function mapOwnerDirectorySchema_(rows) {
  return rows.map(function(row) {
    return {
      'Name': String(row.OwnerName || row.name || row.owner_name || '').trim(),
      'Email': String(row.Email || row.email_address || row.email_1 || '').trim(),
      'Phone': String(row.Phone || row.work_phone || row.mobile || '').trim(),
      'Address': String(row.Address || row.mailing_address || '').trim(),
      'Properties Owned': String(row.PropertiesOwned || row.properties_owned || '').trim(),
      'AssignedManager': row.AssignedManager || row.assigned_manager || null
    };
  });
}

function mapMrcVacancySchema_(vacancies, directory) {
  var marketingLookup = {};
  (directory || []).forEach(function(row) {
    if (row.UnitId) marketingLookup[String(row.UnitId)] = row;
    if (row.PropertyName && row.UnitName) {
      marketingLookup[String(row.PropertyName) + '::' + String(row.UnitName)] = row;
    }
  });

  return (vacancies || []).map(function(v) {
    var d = {};
    if (v.UnitId && marketingLookup[String(v.UnitId)]) {
      d = marketingLookup[String(v.UnitId)];
    } else if (v.PropertyName && (v.Unit || v.UnitName)) {
      d = marketingLookup[String(v.PropertyName) + '::' + String(v.Unit || v.UnitName)] || {};
    }

    return {
      'Unit': String(v.Unit || v.UnitName || ''),
      'Tags': String(v.UnitTags || d.UnitTags || ''),
      'Bed/Bath': String(v.BedAndBath || ((d.Bedrooms || '') + '/' + (d.Bathrooms || '')) || ''),
      'Sqft': String(v.SqFt || d.SquareFt || ''),
      'Unit Status': String(v.UnitStatus || ''),
      'Rent Ready': String(v.RentReady || ''),
      'Days Vacant': String(v.DaysVacant || '0'),
      'Last Rent': String(v.LastRent || ''),
      'Scheduled Rent': String(v.SchdRent || ''),
      'New Rent': String(v.NewRent || ''),
      'Last Move In': String(v.LastMoveIn || ''),
      'Last Move Out': String(v.LastMoveOut || ''),
      'Available On': String(v.AvailableOn || ''),
      'Next Move In': String(v.NextMoveIn || ''),
      'Description': String(v.Description || d.Description || ''),
      'Advertised Rent': String(d.AdvertisedRent || ''),
      'Posted To Website': String(d.PostedToWebsite || 'No'),
      'Posted To Internet': String(d.PostedToInternet || 'No'),
      'Property': String(v.Property || ''),
      'Property Name': String(v.PropertyName || ''),
      'Unit Amenities': String(d.UnitAmenities || ''),
      'Lockbox Enabled': String(v.LockboxEnabled || ''),
      'Affordable Program': String(v.AffordableProgram || ''),
      'Address': String(v.Address || ''),
      'Street Address': String(v.UnitStreet1 || d.UnitStreet1 || ''),
      'City': String(v.UnitCity || d.UnitCity || ''),
      'State': String(v.UnitState || d.UnitState || ''),
      'Zip': String(v.UnitZip || d.UnitZip || ''),
      'Unit Type': String(v.UnitType || d.UnitType || ''),
      'Amenities Pnl': String(v.AmenitiesPrice || ''),
      'Computed Market Rent': String(v.ComputedMarketRent || d.ComputedMarketRent || ''),
      'Ready For Showing On': String(v.ReadyForShowingOn || ''),
      'Unit Turn Target Date': String(v.UnitTurnTargetDate || ''),
      'Property ID': String(v.PropertyId || ''),
      'Unit ID': String(v.UnitId || '')
    };
  });
}

function recordHeartbeat_(projectKey) {
  const props = PropertiesService.getScriptProperties();
  const key = 'HEARTBEAT_' + String(projectKey).toUpperCase();
  props.setProperty(key, new Date().toISOString());
  props.setProperty('SYSTEM_LAST_SYNC', new Date().toISOString());
}

function getHeartbeatsFromProperties_() {
  const props = PropertiesService.getScriptProperties().getProperties();
  const heartbeats = {};
  for (const key in props) {
    if (key.indexOf('HEARTBEAT_') === 0) {
      heartbeats[key.replace('HEARTBEAT_', '').toLowerCase()] = props[key];
    }
  }
  return heartbeats;
}
