function configurePropAllianceHubIdentityRoutingDev(spreadsheetId, fallbackEmail) {
  if (!spreadsheetId) throw new Error('Missing spreadsheetId.');
  if (!fallbackEmail) throw new Error('Missing fallbackEmail.');
  PropertiesService.getScriptProperties().setProperties({
    PA_IDENTITY_ROUTING_SPREADSHEET_ID: String(spreadsheetId).trim(),
    PA_ADMIN_FALLBACK_EMAIL: String(fallbackEmail).trim()
  }, false);
  clearIdentityRoutingCache();
  return {
    ok: true,
    spreadsheetId: String(spreadsheetId).trim(),
    fallbackEmailConfigured: true
  };
}

function previewPropAllianceHubAdminRoleDev() {
  return getUsersByRole('role-admin').map(function(user) {
    return {
      userId: user.userId,
      displayName: user.displayName,
      primaryEmail: user.primaryEmail
    };
  });
}
