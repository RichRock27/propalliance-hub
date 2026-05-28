/**
 * PropAlliance Identity & Routing MVP service layer.
 *
 * Intended deployment:
 * - Keep this code in the central identity/routing Apps Script project or library.
 * - Operational projects should call these approved functions.
 * - Operational projects should not read the source spreadsheet directly.
 *
 * Setup:
 * - Script property PA_IDENTITY_ROUTING_SPREADSHEET_ID must point to the MVP source-of-truth Sheet.
 */

var PA_IDENTITY_ROUTING = {
  SPREADSHEET_ID_PROPERTY: 'PA_IDENTITY_ROUTING_SPREADSHEET_ID',
  CACHE_KEY: 'pa_identity_routing_mvp_v1',
  CACHE_TTL_SECONDS: 600,
  ADMIN_ROLE_ID: 'role-admin',
  PROPERTY_MANAGER_ROLE_ID: 'role-property-manager',
  LEADERSHIP_ROLE_ID: 'role-leadership',
  REQUIRED_SHEETS: [
    'Users',
    'Roles',
    'UserRoles',
    'Properties',
    'UserProperties',
    'ProjectCategories',
    'Projects',
    'ProjectPermissions',
    'RoutingRules'
  ]
};

function getUserByEmail(email) {
  var normalizedEmail = normalizeRoutingText_(email);
  if (!normalizedEmail) return null;
  var data = getIdentityRoutingData_();
  for (var i = 0; i < data.users.length; i++) {
    var user = data.users[i];
    if (normalizeRoutingText_(user.primaryEmail) === normalizedEmail) return user;
    if (normalizeRoutingText_(user.secondaryEmail) === normalizedEmail) return user;
  }
  return null;
}

function getUsersByRole(roleId) {
  var data = getIdentityRoutingData_();
  var roleUserIds = {};
  data.userRoles.forEach(function(userRole) {
    if (userRole.active !== false && userRole.roleId === roleId) {
      roleUserIds[userRole.userId] = true;
    }
  });
  return data.users.filter(function(user) {
    return user.active !== false && roleUserIds[user.userId] === true;
  });
}

function getUsersByProperty(propertyId) {
  var data = getIdentityRoutingData_();
  var propertyUserIds = {};
  data.userProperties.forEach(function(userProperty) {
    if (userProperty.active !== false && userProperty.propertyId === propertyId) {
      propertyUserIds[userProperty.userId] = true;
    }
  });
  return data.users.filter(function(user) {
    return user.active !== false && propertyUserIds[user.userId] === true;
  });
}

function getActiveIdentityUsers() {
  var data = getIdentityRoutingData_();
  return data.users.filter(function(user) {
    return user.active !== false;
  });
}

function getNotificationRecipients(routeConfig) {
  return resolveNotificationRecipients_(routeConfig || {}, false);
}

function previewNotificationRecipients(routeConfig) {
  return resolveNotificationRecipients_(routeConfig || {}, true);
}

function clearIdentityRoutingCache() {
  CacheService.getScriptCache().remove(PA_IDENTITY_ROUTING.CACHE_KEY);
  return {
    ok: true,
    message: 'Identity routing cache cleared.'
  };
}

function getIdentityRoutingHealth() {
  var data = getIdentityRoutingData_(true);
  var warnings = [];
  var userIds = indexByKey_(data.users, 'userId');
  var roleIds = indexByKey_(data.roles, 'roleId');
  var propertyIds = indexByKey_(data.properties, 'propertyId');

  data.userRoles.forEach(function(row) {
    if (!userIds[row.userId]) warnings.push('UserRoles references missing userId: ' + row.userId);
    if (!roleIds[row.roleId]) warnings.push('UserRoles references missing roleId: ' + row.roleId);
  });

  data.userProperties.forEach(function(row) {
    if (!userIds[row.userId]) warnings.push('UserProperties references missing userId: ' + row.userId);
    if (!propertyIds[row.propertyId]) warnings.push('UserProperties references missing propertyId: ' + row.propertyId);
  });

  data.routingRules.forEach(function(row) {
    if (row.targetRoleId && !roleIds[row.targetRoleId]) warnings.push('RoutingRules references missing roleId: ' + row.targetRoleId);
    if (row.projectId && !data.projectsById[row.projectId]) warnings.push('RoutingRules references missing projectId: ' + row.projectId);
  });

  return {
    ok: warnings.length === 0,
    users: data.users.length,
    roles: data.roles.length,
    userRoles: data.userRoles.length,
    properties: data.properties.length,
    userProperties: data.userProperties.length,
    projects: data.projects.length,
    routingRules: data.routingRules.length,
    warnings: warnings
  };
}

function resolveNotificationRecipients_(routeConfig, dryRun) {
  var data = getIdentityRoutingData_();
  var diagnostics = [];
  var warnings = [];
  var eventType = routeConfig.eventType || '';
  var projectId = routeConfig.projectId || '';
  var propertyId = routeConfig.propertyId || '';
  var matchingRules = findMatchingRoutingRules_(data.routingRules, eventType, projectId, propertyId);
  var toEmails = [];
  var sourceParts = [];

  diagnostics.push('Event: ' + (eventType || '(missing)'));
  diagnostics.push('Project: ' + (projectId || '(not provided)'));
  diagnostics.push('Property: ' + (propertyId || '(not provided)'));

  if (!eventType) warnings.push('Missing eventType.');
  if (propertyId && !data.propertiesById[propertyId]) warnings.push('Invalid propertyId: ' + propertyId);
  if (!matchingRules.length) warnings.push('No active routing rule matched.');

  matchingRules.forEach(function(rule) {
    var resolved = resolveRuleRecipients_(rule, propertyId, data, warnings);
    toEmails = toEmails.concat(resolved.to);
    sourceParts.push(resolved.source);
  });

  toEmails = uniqueStrings_(toEmails);

  if (!toEmails.length) {
    warnings.push('Empty recipient list. Using Admin fallback.');
    var adminEmails = usersToEmails_(getUsersByRoleFromData_(PA_IDENTITY_ROUTING.ADMIN_ROLE_ID, data));
    toEmails = uniqueStrings_(adminEmails);
    sourceParts.push('Admin fallback');
  }

  if (!toEmails.length) {
    warnings.push('Admin fallback produced no recipients. Check Users/UserRoles.');
  }

  var result = {
    ok: warnings.length === 0,
    dryRun: dryRun === true,
    to: toEmails,
    cc: [],
    bcc: [],
    warnings: warnings,
    source: uniqueStrings_(sourceParts).join(' + '),
    diagnostics: diagnostics
  };

  if (dryRun === true) {
    result.preview = [
      'Event: ' + (eventType || '(missing)'),
      'Property: ' + (propertyId || '(not provided)'),
      'Resolved recipient: ' + (toEmails.length ? toEmails.join(', ') : '(none)'),
      'Source: ' + (result.source || '(none)'),
      warnings.length ? 'Warnings: ' + warnings.join(' | ') : 'Warnings: none'
    ].join('\n');
  }

  return result;
}

function findMatchingRoutingRules_(routingRules, eventType, projectId, propertyId) {
  var matches = routingRules.filter(function(rule) {
    if (rule.active === false) return false;
    if (rule.eventType !== eventType) return false;
    if (rule.projectId && projectId && rule.projectId !== projectId) return false;
    if (rule.projectId && !projectId) return false;
    if (rule.scopeType === 'Property' && !propertyId) return false;
    if (rule.scopeType === 'PropertyAndProject' && (!propertyId || !projectId)) return false;
    return true;
  });
  if (projectId) {
    var projectMatches = matches.filter(function(rule) {
      return rule.projectId === projectId;
    });
    if (projectMatches.length) return projectMatches;
  }
  return matches;
}

function resolveRuleRecipients_(rule, propertyId, data, warnings) {
  if (rule.recipientType === 'AdminOnly') {
    return {
      to: usersToEmails_(getUsersByRoleFromData_(PA_IDENTITY_ROUTING.ADMIN_ROLE_ID, data)),
      source: 'RoutingRules + Admin role'
    };
  }

  if (rule.recipientType === 'CustomEmail') {
    return {
      to: splitEmails_(rule.customEmails),
      source: 'RoutingRules customEmails'
    };
  }

  if (rule.recipientType !== 'Role') {
    warnings.push('Unsupported recipientType: ' + rule.recipientType);
    return { to: [], source: 'Unsupported route' };
  }

  if (!rule.targetRoleId) {
    warnings.push('Routing rule missing targetRoleId: ' + rule.ruleId);
    return { to: [], source: 'RoutingRules missing targetRoleId' };
  }

  if (rule.targetRoleId === PA_IDENTITY_ROUTING.PROPERTY_MANAGER_ROLE_ID && propertyId) {
    return {
      to: usersToEmails_(getUsersByRoleAndPropertyFromData_(rule.targetRoleId, propertyId, data)),
      source: 'UserProperties + UserRoles + RoutingRules'
    };
  }

  return {
    to: usersToEmails_(getUsersByRoleFromData_(rule.targetRoleId, data)),
    source: 'UserRoles + RoutingRules'
  };
}

function getUsersByRoleFromData_(roleId, data) {
  var roleUserIds = {};
  data.userRoles.forEach(function(userRole) {
    if (userRole.active !== false && userRole.roleId === roleId) roleUserIds[userRole.userId] = true;
  });
  return data.users.filter(function(user) {
    return user.active !== false && roleUserIds[user.userId] === true;
  });
}

function getUsersByRoleAndPropertyFromData_(roleId, propertyId, data) {
  var roleUsers = {};
  data.userRoles.forEach(function(userRole) {
    if (userRole.active !== false && userRole.roleId === roleId) roleUsers[userRole.userId] = true;
  });
  var propertyUsers = {};
  data.userProperties.forEach(function(userProperty) {
    if (userProperty.active !== false && userProperty.propertyId === propertyId) propertyUsers[userProperty.userId] = true;
  });
  return data.users.filter(function(user) {
    return user.active !== false && roleUsers[user.userId] === true && propertyUsers[user.userId] === true;
  });
}

function getIdentityRoutingData_(forceRefresh) {
  var cache = CacheService.getScriptCache();
  if (forceRefresh !== true) {
    var cached = cache.get(PA_IDENTITY_ROUTING.CACHE_KEY);
    if (cached) return JSON.parse(cached);
  }

  var spreadsheetId = PropertiesService.getScriptProperties().getProperty(PA_IDENTITY_ROUTING.SPREADSHEET_ID_PROPERTY);
  if (!spreadsheetId) {
    throw new Error('Missing script property ' + PA_IDENTITY_ROUTING.SPREADSHEET_ID_PROPERTY + '.');
  }

  var ss = SpreadsheetApp.openById(spreadsheetId);
  var data = {
    users: readSheetObjects_(ss, 'Users'),
    roles: readSheetObjects_(ss, 'Roles'),
    userRoles: readSheetObjects_(ss, 'UserRoles'),
    properties: readSheetObjects_(ss, 'Properties'),
    userProperties: readSheetObjects_(ss, 'UserProperties'),
    projectCategories: readSheetObjects_(ss, 'ProjectCategories'),
    projects: readSheetObjects_(ss, 'Projects'),
    projectPermissions: readSheetObjects_(ss, 'ProjectPermissions'),
    routingRules: readSheetObjects_(ss, 'RoutingRules')
  };

  data.usersById = indexByKey_(data.users, 'userId');
  data.rolesById = indexByKey_(data.roles, 'roleId');
  data.propertiesById = indexByKey_(data.properties, 'propertyId');
  data.projectsById = indexByKey_(data.projects, 'projectId');

  cache.put(PA_IDENTITY_ROUTING.CACHE_KEY, JSON.stringify(data), PA_IDENTITY_ROUTING.CACHE_TTL_SECONDS);
  return data;
}

function readSheetObjects_(ss, sheetName) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error('Missing required sheet: ' + sheetName);
  var values = sheet.getDataRange().getValues();
  if (values.length < 6) return [];
  var headers = values[4].map(function(header) {
    return String(header || '').trim();
  });
  var rows = [];
  for (var r = 5; r < values.length; r++) {
    var row = {};
    var hasValue = false;
    for (var c = 0; c < headers.length; c++) {
      if (!headers[c]) continue;
      var value = normalizeCellValue_(values[r][c]);
      if (value !== '') hasValue = true;
      row[headers[c]] = value;
    }
    if (hasValue) rows.push(row);
  }
  return rows;
}

function normalizeCellValue_(value) {
  if (value === null || value === undefined) return '';
  if (value === 'TRUE') return true;
  if (value === 'FALSE') return false;
  return value;
}

function usersToEmails_(users) {
  return uniqueStrings_(users.map(function(user) {
    return String(user.primaryEmail || '').trim();
  }).filter(Boolean));
}

function splitEmails_(value) {
  return uniqueStrings_(String(value || '').split(',').map(function(email) {
    return email.trim();
  }).filter(Boolean));
}

function uniqueStrings_(values) {
  var seen = {};
  var result = [];
  values.forEach(function(value) {
    var normalized = String(value || '').trim();
    var key = normalized.toLowerCase();
    if (!normalized || seen[key]) return;
    seen[key] = true;
    result.push(normalized);
  });
  return result;
}

function normalizeRoutingText_(value) {
  return String(value || '').trim().toLowerCase();
}

function indexByKey_(rows, key) {
  var index = {};
  rows.forEach(function(row) {
    if (row[key]) index[row[key]] = row;
  });
  return index;
}
