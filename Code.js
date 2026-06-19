/**
 * PropAlliance Admin Hub - Backend Engine
 * Version 1.0
 */

const CONFIG = {
  MASTER_HUB_ID: "1_DrJDsrRv69hYBu99PUdsOZJRgI5Aos4",
  MANIFEST_FILENAME: "freshness_manifest.json",
  MASTER_API_URL: "https://script.google.com/a/macros/propalliance.com/s/AKfycbzwArfpLNQnQIOgwuBKFeeCbdmc4m39kksuNL7TDF6_ljgGKdGoHgOGbEWuku8jbAdZag/exec"
};

const HUB_WORKSTATE_PREFIX = 'HUB_WORKSTATE_V1__';
const HUB_PROMOTION_STATES = [
  'In Sync',
  'DEV In Progress',
  'Awaiting Approval',
  'Ready to Promote',
  'Approved but not promoted',
  'LIVE Only',
  'Missing DEV',
  'Blocked',
  'Unknown'
];
const HUB_WORKING_TRUTHS = ['DEV', 'LIVE', 'Unknown'];
const HUB_SYNC_STATES = ['Current', 'Behind', 'Unknown', 'Missing'];
const HUB_CONFIDENCE_STATES = ['High', 'Medium', 'Low', 'Unknown'];

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
  var memoryMap = getHubProjectMemoryMap_();
  var enrichedProjects = enrichHubProjects_(snapshot.projects || [], memoryMap, user);
  var projects = filterProjectsForRole_(enrichedProjects, user);

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
    summary: buildHubSummary_(projects),
    projects: projects
  };
}

function saveProjectWorkState(payload) {
  var input = payload || {};
  var slug = String(input.projectSlug || '').trim();
  if (!slug) throw new Error('projectSlug is required.');

  var snapshot = getRegistrySnapshot();
  var project = (snapshot.projects || []).filter(function(item) {
    return String(item.projectSlug || '') === slug;
  })[0];
  if (!project) throw new Error('Unknown projectSlug: ' + slug);

  var user = getCurrentHubUser_();
  var memory = normalizeHubWorkStateInput_(input, user);
  PropertiesService.getScriptProperties().setProperty(
    HUB_WORKSTATE_PREFIX + slug,
    JSON.stringify(memory)
  );

  var map = getHubProjectMemoryMap_();
  map[slug] = memory;
  return enrichHubProject_(project, map[slug], user);
}

function getHubProjectWorkStateOptions() {
  return {
    promotionStates: HUB_PROMOTION_STATES.slice(),
    workingTruths: HUB_WORKING_TRUTHS.slice(),
    syncStates: HUB_SYNC_STATES.slice(),
    confidenceStates: HUB_CONFIDENCE_STATES.slice()
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
    backupsMissing: 0,
    recentlyActive: 0,
    awaitingApproval: 0,
    outOfSync: 0,
    blocked: 0,
    githubMissing: 0,
    inSync: 0
  };

  projects.forEach(function(project) {
    if (project.liveUrl) summary.liveProjects++;
    if (project.devUrl || project.devScriptUrl) summary.devProjects++;
    if (project.governance && project.governance.missingDev) summary.missingDev++;
    if (project.governance && project.governance.legacy) summary.legacy++;
    if (project.governance && project.governance.staleLive) summary.staleLive++;
    if (project.governance && project.governance.manualReviewRequired) summary.manualReview++;
    if (project.governance && project.governance.backupMissing) summary.backupsMissing++;
    if (project.workState && project.workState.lastWorkedAt) summary.recentlyActive++;
    if (project.derived && project.derived.awaitingApproval) summary.awaitingApproval++;
    if (project.derived && project.derived.outOfSync) summary.outOfSync++;
    if (project.derived && project.derived.blocked) summary.blocked++;
    if (project.derived && project.derived.githubMissing) summary.githubMissing++;
    if (project.derived && project.derived.syncOverview === 'DEV matches LIVE') summary.inSync++;
  });

  return summary;
}

function getHubProjectMemoryMap_() {
  var props = PropertiesService.getScriptProperties().getProperties() || {};
  var map = {};
  Object.keys(props).forEach(function(key) {
    if (key.indexOf(HUB_WORKSTATE_PREFIX) !== 0) return;
    var slug = key.substring(HUB_WORKSTATE_PREFIX.length);
    try {
      map[slug] = JSON.parse(props[key]);
    } catch (err) {
      map[slug] = {};
    }
  });
  return map;
}

function normalizeHubWorkStateInput_(input, user) {
  function cleanValue(value) {
    return value == null ? '' : String(value).trim();
  }

  function pickEnum(value, allowed, fallback) {
    var normalized = cleanValue(value);
    return allowed.indexOf(normalized) !== -1 ? normalized : fallback;
  }

  var syncInput = input.syncState || {};
  return {
    projectSlug: cleanValue(input.projectSlug),
    lastWorkedAt: cleanValue(input.lastWorkedAt) || new Date().toISOString(),
    lastWorkedBy: cleanValue(input.lastWorkedBy) || cleanValue(user && user.email) || 'unknown',
    lastActionSummary: cleanValue(input.lastActionSummary) || cleanValue(input.currentFocus),
    nextActionSummary: cleanValue(input.nextActionSummary),
    currentFocus: cleanValue(input.currentFocus),
    workingTruth: pickEnum(input.workingTruth, HUB_WORKING_TRUTHS, 'Unknown'),
    promotionState: pickEnum(input.promotionState, HUB_PROMOTION_STATES, 'Unknown'),
    confidence: pickEnum(input.confidence, HUB_CONFIDENCE_STATES, 'Unknown'),
    syncState: {
      live: pickEnum(syncInput.live, HUB_SYNC_STATES, 'Unknown'),
      dev: pickEnum(syncInput.dev, HUB_SYNC_STATES, 'Unknown'),
      local: pickEnum(syncInput.local, HUB_SYNC_STATES, 'Unknown'),
      github: pickEnum(syncInput.github, HUB_SYNC_STATES, 'Unknown')
    },
    notes: cleanValue(input.notes),
    updatedAt: new Date().toISOString(),
    updatedBy: cleanValue(user && user.email) || 'unknown'
  };
}

function enrichHubProjects_(projects, memoryMap, user) {
  return (projects || []).map(function(project) {
    return enrichHubProject_(project, memoryMap[project.projectSlug] || {}, user);
  });
}

function enrichHubProject_(project, memory, user) {
  var copy = JSON.parse(JSON.stringify(project || {}));
  var workState = buildHubWorkState_(copy, memory || {});
  copy.workState = workState;
  copy.derived = buildHubDerivedState_(copy, workState, user);
  return copy;
}

function buildHubWorkState_(project, memory) {
  var hasDev = !!(project.devUrl || project.devScriptUrl);
  var hasLive = !!(project.liveUrl || project.liveScriptUrl);
  var repoPresent = projectHasGithubRepo_(project);
  var localConfigured = !!project.localDevPath;
  var syncState = memory.syncState || {};
  var promotionState = memory.promotionState || deriveHubDefaultPromotionState_(project);
  var autoLastWorkedAt = deriveHubAutoLastWorkedAt_(project, memory || {});
  var autoLastActionSummary = deriveHubAutoLastActionSummary_(project, memory || {});
  var autoNextActionSummary = deriveHubAutoNextActionSummary_(project, memory || {}, {
    hasDev: hasDev,
    hasLive: hasLive,
    repoPresent: repoPresent,
    localConfigured: localConfigured,
    promotionState: promotionState,
    syncState: syncState
  });
  var autoConfidence = deriveHubAutoConfidence_(project, memory || {});

  return {
    projectSlug: project.projectSlug,
    lastWorkedAt: memory.lastWorkedAt || autoLastWorkedAt,
    lastWorkedBy: memory.lastWorkedBy || '',
    lastActionSummary: memory.lastActionSummary || autoLastActionSummary,
    nextActionSummary: memory.nextActionSummary || autoNextActionSummary,
    currentFocus: memory.currentFocus || '',
    workingTruth: memory.workingTruth || (hasDev ? 'DEV' : (hasLive ? 'LIVE' : 'Unknown')),
    promotionState: promotionState,
    confidence: memory.confidence || autoConfidence,
    syncState: {
      live: syncState.live || (hasLive ? 'Unknown' : 'Missing'),
      dev: syncState.dev || (hasDev ? 'Unknown' : 'Missing'),
      local: syncState.local || (localConfigured ? 'Unknown' : 'Missing'),
      github: syncState.github || (repoPresent ? 'Unknown' : 'Missing')
    },
    notes: memory.notes || '',
    updatedAt: memory.updatedAt || '',
    updatedBy: memory.updatedBy || '',
    repoPresent: repoPresent,
    localConfigured: localConfigured
  };
}

function deriveHubAutoLastWorkedAt_(project, memory) {
  var explicit = String((memory && memory.lastWorkedAt) || '').trim();
  if (explicit) return explicit;
  var candidates = [
    normalizeHubDateCandidate_((memory && memory.updatedAt) || ''),
    extractHubDateFromText_(project.lastDevChange || ''),
    extractHubDateFromText_(project.readyForLive || ''),
    extractHubDateFromText_(project.promotionNotes || '')
  ].filter(Boolean);
  return candidates[0] || '';
}

function deriveHubAutoLastActionSummary_(project, memory) {
  var explicit = String((memory && memory.lastActionSummary) || '').trim();
  if (explicit) return explicit;
  var candidates = [
    String(project.lastDevChange || '').trim(),
    String(project.readyForLive || '').trim(),
    String(project.promotionNotes || '').trim()
  ].filter(Boolean);
  return candidates[0] || '';
}

function deriveHubAutoConfidence_(project, memory) {
  var explicit = String((memory && memory.confidence) || '').trim();
  if (explicit) return explicit;
  return project.lastVerified ? 'Medium' : 'Unknown';
}

function deriveHubAutoNextActionSummary_(project, memory, context) {
  var explicit = String((memory && memory.nextActionSummary) || '').trim();
  if (explicit) return explicit;

  var cfg = context || {};
  var hasDev = !!cfg.hasDev;
  var hasLive = !!cfg.hasLive;
  var repoPresent = !!cfg.repoPresent;
  var localConfigured = !!cfg.localConfigured;
  var promotionState = String(cfg.promotionState || 'Unknown');
  var sync = cfg.syncState || {};

  if (project.governance && project.governance.manualReviewRequired) {
    return 'Review governance notes before making more changes.';
  }
  if (!hasDev && hasLive) {
    return 'Create a DEV surface before making more changes.';
  }
  if (!hasDev && !hasLive) {
    return 'Confirm whether this project should exist in the registry and add its primary surface.';
  }
  if (!repoPresent) {
    return 'Add or verify the GitHub repo link for this project.';
  }
  if (!localConfigured) {
    return 'Confirm the local working path so DEV work has a clear home.';
  }
  if (promotionState === 'Awaiting Approval' || promotionState === 'Ready to Promote') {
    return 'Review DEV changes and decide whether to promote them to LIVE.';
  }
  if (promotionState === 'Approved but not promoted') {
    return 'Promote the approved DEV build to LIVE.';
  }
  if (promotionState === 'Blocked') {
    return 'Resolve the blocker called out in the project notes before continuing.';
  }
  if (sync.live === 'Behind') {
    return 'Check whether LIVE drifted and decide if DEV or LIVE is the source of truth.';
  }
  if (sync.github === 'Behind') {
    return 'Push the local project state to GitHub.';
  }
  if (sync.local === 'Current' && (sync.github === 'Missing' || !repoPresent)) {
    return 'Mirror the local project into GitHub so the record is complete.';
  }
  if (hasDev && hasLive) {
    return 'Keep working in DEV until the next approved promotion.';
  }
  if (hasDev && !hasLive) {
    return 'Continue building in DEV and publish to LIVE only after approval.';
  }
  return '';
}

function normalizeHubDateCandidate_(value) {
  var text = String(value || '').trim();
  if (!text) return '';
  var direct = new Date(text);
  if (!isNaN(direct.getTime())) return direct.toISOString();
  return extractHubDateFromText_(text);
}

function extractHubDateFromText_(text) {
  var value = String(text || '').trim();
  if (!value) return '';
  var isoMatch = value.match(/\b(20\d{2}-\d{2}-\d{2})(?:[T\s]\d{2}:\d{2}(?::\d{2})?(?:\.\d{3})?Z?)?\b/);
  if (isoMatch) {
    var isoDate = isoMatch[1];
    var parsedIso = new Date(isoDate + 'T12:00:00Z');
    if (!isNaN(parsedIso.getTime())) return parsedIso.toISOString();
  }
  var slashMatch = value.match(/\b(\d{1,2})\/(\d{1,2})\/(20\d{2})\b/);
  if (slashMatch) {
    var month = slashMatch[1].padStart(2, '0');
    var day = slashMatch[2].padStart(2, '0');
    var year = slashMatch[3];
    var parsedSlash = new Date(year + '-' + month + '-' + day + 'T12:00:00Z');
    if (!isNaN(parsedSlash.getTime())) return parsedSlash.toISOString();
  }
  return '';
}

function deriveHubDefaultPromotionState_(project) {
  var hasDev = !!(project.devUrl || project.devScriptUrl);
  var hasLive = !!(project.liveUrl || project.liveScriptUrl);
  if (!hasDev && hasLive) return 'Missing DEV';
  if (hasDev && !hasLive) return 'DEV In Progress';
  if (!hasDev && !hasLive) return 'Unknown';
  return 'In Sync';
}

function buildHubDerivedState_(project, workState) {
  var hasDev = !!(project.devUrl || project.devScriptUrl);
  var hasLive = !!(project.liveUrl || project.liveScriptUrl);
  var githubMissing = !workState.repoPresent;
  var promotionState = workState.promotionState || 'Unknown';
  var syncOverview = deriveHubSyncOverview_(project, workState);
  var blocked = promotionState === 'Blocked' || !!(project.governance && project.governance.manualReviewRequired);
  var missingDev = !hasDev;
  var awaitingApproval = ['Awaiting Approval', 'Ready to Promote', 'Approved but not promoted'].indexOf(promotionState) !== -1;
  var outOfSync = ['DEV ahead of LIVE', 'LIVE ahead of DEV', 'GitHub behind Local', 'Local not mirrored'].indexOf(syncOverview) !== -1;
  var safeToEdit = hasDev && !blocked;

  return {
    hasDev: hasDev,
    hasLive: hasLive,
    missingDev: missingDev,
    githubMissing: githubMissing,
    blocked: blocked,
    awaitingApproval: awaitingApproval,
    outOfSync: outOfSync,
    syncOverview: syncOverview,
    safeToEdit: safeToEdit,
    operatingStateLabel: safeToEdit ? 'Safe to keep working in DEV' : (missingDev ? 'Needs DEV created' : 'Blocked / review needed'),
    promotionStateLabel: mapPromotionStateLabel_(promotionState)
  };
}

function deriveHubSyncOverview_(project, workState) {
  var hasDev = !!(project.devUrl || project.devScriptUrl);
  var hasLive = !!(project.liveUrl || project.liveScriptUrl);
  var sync = workState.syncState || {};
  var promotionState = workState.promotionState || 'Unknown';

  if (!hasDev && hasLive) return 'LIVE only';
  if (hasDev && !hasLive) return 'DEV only';
  if (!hasDev && !hasLive) return 'Unknown';
  if (['Awaiting Approval', 'Ready to Promote', 'Approved but not promoted'].indexOf(promotionState) !== -1) return 'DEV ahead of LIVE';
  if (sync.live === 'Behind') return 'LIVE ahead of DEV';
  if (sync.github === 'Behind') return 'GitHub behind Local';
  if (sync.local === 'Current' && (sync.github === 'Missing' || !workState.repoPresent)) return 'Local not mirrored';
  if (promotionState === 'In Sync' && sync.live === 'Current' && sync.dev === 'Current') return 'DEV matches LIVE';
  if (promotionState === 'In Sync') return 'DEV matches LIVE';
  return 'Unknown';
}

function mapPromotionStateLabel_(promotionState) {
  switch (promotionState) {
    case 'In Sync': return 'Promoted / matches LIVE';
    case 'DEV In Progress': return 'Safe to keep working in DEV';
    case 'Awaiting Approval': return 'Needs your review';
    case 'Ready to Promote': return 'Needs your review';
    case 'Approved but not promoted': return 'Approved but not promoted';
    case 'LIVE Only': return 'LIVE only';
    case 'Missing DEV': return 'Missing DEV governance';
    case 'Blocked': return 'Blocked';
    default: return 'Unknown';
  }
}

function projectHasGithubRepo_(project) {
  return (project.assets || []).some(function(asset) {
    var assetType = String(asset.assetType || '').toLowerCase();
    return (assetType === 'other' || assetType === 'github') &&
      /github\.com/i.test(String(asset.url || ''));
  });
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
