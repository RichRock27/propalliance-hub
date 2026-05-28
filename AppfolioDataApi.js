/**
 * AppFolio Data API (v1) client utilities.
 *
 * Base host (tenant): https://propertyalliance.appfolio.com
 * Endpoints: GET /api/v1/reports/<report_name>.json
 * Auth: HTTP Basic Auth (Client ID / Client Secret)
 */

const APPFOLIO = {
  BASE_URL: "https://propertyalliance.appfolio.com",
  API_PATH_PREFIX: "/api/v1/reports/",
  DEFAULT_PAGE_SLEEP_MS: 250,

  SCRIPT_PROP: {
    CLIENT_ID: "APPFOLIO_CLIENT_ID",
    CLIENT_SECRET: "APPFOLIO_CLIENT_SECRET",
    PROPERTY_IDS: "APPFOLIO_PROPERTY_IDS"
  }
};

function appfolioGetBaseUrl_() {
  return String(APPFOLIO.BASE_URL || "").replace(/\/+$/g, "");
}

function appfolioGetReportUrl_(reportName) {
  var name = String(reportName || "").trim();
  if (!name) throw new Error("Missing AppFolio report name.");
  if (!/^[a-z0-9_]+$/i.test(name)) throw new Error("Invalid report name: " + name);
  return appfolioGetBaseUrl_() + APPFOLIO.API_PATH_PREFIX + encodeURIComponent(name) + ".json";
}

function appfolioGetScriptProps_() {
  return PropertiesService.getScriptProperties();
}

function appfolioGetClientId_() {
  return String(appfolioGetScriptProps_().getProperty(APPFOLIO.SCRIPT_PROP.CLIENT_ID) || "").trim();
}

function appfolioGetClientSecret_() {
  return String(appfolioGetScriptProps_().getProperty(APPFOLIO.SCRIPT_PROP.CLIENT_SECRET) || "").trim();
}

function appfolioGetDefaultPropertyIds_() {
  var raw = String(appfolioGetScriptProps_().getProperty(APPFOLIO.SCRIPT_PROP.PROPERTY_IDS) || "").trim();
  if (!raw) return [];
  return raw.split(/[,\s]+/g).map(function(s) {
    return String(s || "").trim();
  }).filter(Boolean);
}

function appfolioRequireCredentials_() {
  var id = appfolioGetClientId_();
  var secret = appfolioGetClientSecret_();
  if (!id || !secret) {
    throw new Error("Missing AppFolio credentials. Run setupCoreSyncAppfolioCredentials() first.");
  }
  return { clientId: id, clientSecret: secret };
}

function appfolioBuildAuthHeader_() {
  var creds = appfolioRequireCredentials_();
  return "Basic " + Utilities.base64Encode(creds.clientId + ":" + creds.clientSecret);
}

function appfolioBuildQueryString_(params) {
  var pairs = [];
  var obj = params && typeof params === "object" ? params : {};
  Object.keys(obj).forEach(function(k) {
    var v = obj[k];
    if (v === null || typeof v === "undefined" || v === "") return;
    pairs.push(encodeURIComponent(String(k)) + "=" + encodeURIComponent(String(v)));
  });
  return pairs.length ? "?" + pairs.join("&") : "";
}

function appfolioJoinUrl_(baseOrFullUrl, maybeRelativeUrl) {
  var base = String(baseOrFullUrl || "").trim();
  var rel = String(maybeRelativeUrl || "").trim();
  if (!rel) return base;
  if (/^https?:\/\//i.test(rel)) return rel;
  if (rel.indexOf("/") === 0) return appfolioGetBaseUrl_() + rel;
  return appfolioGetBaseUrl_() + "/" + rel.replace(/^\/+/g, "");
}

function appfolioFetchJson_(url) {
  var resp = UrlFetchApp.fetch(url, {
    method: "get",
    headers: {
      Authorization: appfolioBuildAuthHeader_(),
      Accept: "application/json"
    },
    muteHttpExceptions: true,
    followRedirects: true
  });

  var code = resp.getResponseCode();
  var text = resp.getContentText() || "";
  if (code < 200 || code >= 300) {
    throw new Error("AppFolio API request failed (" + code + "). URL=" + url + " Sample=" + text.slice(0, 300).replace(/\s+/g, " ").trim());
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error("AppFolio API returned non-JSON. URL=" + url + " Sample=" + text.slice(0, 300).replace(/\s+/g, " ").trim());
  }
}

function appfolioExtractRows_(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;

  var candidates = ["results", "data", "items", "rows", "records"];
  for (var i = 0; i < candidates.length; i++) {
    if (Array.isArray(payload[candidates[i]])) return payload[candidates[i]];
  }

  if (payload.report && typeof payload.report === "object") {
    for (var j = 0; j < candidates.length; j++) {
      if (Array.isArray(payload.report[candidates[j]])) return payload.report[candidates[j]];
    }
  }

  throw new Error("Could not find rows array in AppFolio API response.");
}

function appfolioExtractNextPageUrl_(payload) {
  if (!payload || typeof payload !== "object") return "";
  if (payload.next_page_url || payload.nextPageUrl) return String(payload.next_page_url || payload.nextPageUrl);
  if (payload.pagination && (payload.pagination.next_page_url || payload.pagination.nextPageUrl)) {
    return String(payload.pagination.next_page_url || payload.pagination.nextPageUrl);
  }
  return "";
}

function appfolioFetchReportAllPages_(reportName, params, options) {
  var opts = options && typeof options === "object" ? options : {};
  var sleepMs = typeof opts.sleepMs === "number" ? opts.sleepMs : APPFOLIO.DEFAULT_PAGE_SLEEP_MS;
  var baseUrl = appfolioGetReportUrl_(reportName);
  var url = baseUrl + appfolioBuildQueryString_(params);
  var out = [];
  var pages = 0;
  var seen = {};

  while (url) {
    if (seen[url]) break;
    seen[url] = true;

    var payload = appfolioFetchJson_(url);
    var rows = appfolioExtractRows_(payload);
    for (var i = 0; i < rows.length; i++) out.push(rows[i]);

    pages++;
    var next = appfolioExtractNextPageUrl_(payload);
    url = next ? appfolioJoinUrl_(baseUrl, next) : "";

    if (url && sleepMs > 0) Utilities.sleep(sleepMs);
    if (pages > 200) throw new Error("Pagination safety stop: >200 pages fetched for " + reportName);
  }

  return { rows: out, pagesFetched: pages, finalUrl: url || baseUrl };
}

