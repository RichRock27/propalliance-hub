/**
 * Generated registry snapshot for PropAlliance Hub.
 * Source of truth: per-project registry.json files under /Users/richgreen/Dev/PA-Registry-DEV-Workspaces
 * Verified: 2026-07-01
 * Keep this snapshot aligned to the per-project registry.json files; the old Excel workbook path is not authoritative.
 */
function getRegistrySnapshot() {
  return {
  "generatedAt": "2026-07-01T00:00:00.000-06:00",
  "generator": "Codex registry cleanup from per-project registry.json files",
  "registrySourcePath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/[project-slug]/registry.json",
  "registryHash": "verified-against-project-registry-files-2026-07-01",
  "projectCount": 41,
  "assetCount": 141,
  "deploymentCount": 66,
  "phase": "Phase 1 Admin MVP",
  "safety": {
    "sourceOfTruth": "Per-project registry.json files under /Users/richgreen/Dev/PA-Registry-DEV-Workspaces are authoritative. The old Excel workbook path is not authoritative.",
    "noDeploymentActions": true,
    "nonAdminSanitizationRequired": true
  },
  "projects": [
    {
      "projectId": "delinquency_command_center",
      "projectName": "Delinquency Command Center",
      "projectSlug": "delinquency-command-center",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "LIVE v48 verified. DEV v3 verified. Official LIVE and DEV pair established. Governance normalization complete for current router batch.",
      "registryRow": 2,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbzKrlxJo7VuBIwJzJZqajrYyaSz9SqTqmB1_QYix7VhjBuRtN3YIJpjbzkgp_x9k22F/exec",
      "devUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbwxPFxhOY97gp-lr-I2Qt1xQZZWfiRKc3MbPDswCmZCNe7ooPy5E8yj2gLoTKL_FUBauQ/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/13IIWcmpOPXqW1SzMwZDdjp_8BQ31Ln6eU72hQf8qBMGKALuameT4Qyja/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1A6ceLO3jYHGIxyvqAk3d-bC9PHMyGehR8B-XTrzc9NKW_xlyHWFsW3Et/edit",
      "liveScriptId": "13IIWcmpOPXqW1SzMwZDdjp_8BQ31Ln6eU72hQf8qBMGKALuameT4Qyja",
      "devScriptId": "1A6ceLO3jYHGIxyvqAk3d-bC9PHMyGehR8B-XTrzc9NKW_xlyHWFsW3Et",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/16sCozujZVrlrNOYNcNVRc7TJ0Sqz1UUh",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/delinquency-command-center/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/delinquency-command-center",
      "missingItems": "",
      "lastVerified": "2026-05-27",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "",
      "lastDevChange": "Baseline release tracking initialized 2026-05-14.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "API: AppFolio signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Batch 1 governance normalization: LIVE v48 / DEV v3 verified.",
      "deployments": [
        {
          "registryRow": 2,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbzKrlxJo7VuBIwJzJZqajrYyaSz9SqTqmB1_QYix7VhjBuRtN3YIJpjbzkgp_x9k22F/exec",
          "deploymentId": "AKfycbzKrlxJo7VuBIwJzJZqajrYyaSz9SqTqmB1_QYix7VhjBuRtN3YIJpjbzkgp_x9k22F",
          "pinnedVersion": "48",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 3,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbwxPFxhOY97gp-lr-I2Qt1xQZZWfiRKc3MbPDswCmZCNe7ooPy5E8yj2gLoTKL_FUBauQ/exec",
          "deploymentId": "AKfycbwxPFxhOY97gp-lr-I2Qt1xQZZWfiRKc3MbPDswCmZCNe7ooPy5E8yj2gLoTKL_FUBauQ",
          "pinnedVersion": "3",
          "badge": "DEV",
          "lastVerified": "2026-05-10"
        }
      ],
      "assets": [
        {
          "registryRow": 2,
          "assetType": "Script",
          "name": "DCC - LIVE Script",
          "url": "https://script.google.com/home/projects/13IIWcmpOPXqW1SzMwZDdjp_8BQ31Ln6eU72hQf8qBMGKALuameT4Qyja/edit",
          "notes": "Source code - LIVE (pinned versions).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 3,
          "assetType": "Script",
          "name": "DCC - DEV Script",
          "url": "https://script.google.com/home/projects/1A6ceLO3jYHGIxyvqAk3d-bC9PHMyGehR8B-XTrzc9NKW_xlyHWFsW3Et/edit",
          "notes": "Source code - DEV (safe sandbox).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 7,
          "assetType": "Folder",
          "name": "DCC - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/16sCozujZVrlrNOYNcNVRc7TJ0Sqz1UUh",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Delinquency Command Center - GitHub Repo",
          "url": "https://github.com/RichRock27/dcc.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Batch 1 governance normalization: LIVE v48 / DEV v3 verified. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "propalliance_hub",
      "projectName": "PropAlliance Hub",
      "projectSlug": "propalliance-hub",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Authoritative Hub, governance center, router authority, and registry authority. Replaces The Workshop as authoritative infrastructure. CID registry cleanup deployed to LIVE v69 and DEV v70 on 2026-07-01.",
      "registryRow": 3,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbxGuAQHe9lVjTEBJBPwr9pVVV8WHyevHVC-XGBUgW7NHg6TLBAo_M0PMgx7PIAYUGZo/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbyogm2uig9R05iBjeI976boZzrgRJJ3yiLbWoMXdhYjLoAn5hfoE5Es2waXpuI3aSOsxg/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/14pg6QCx5W0K0inzIBRELLo5_rJgtsyglj6VfI0xkDJU4j13_CfViV_JJ/edit",
      "devScriptUrl": "https://script.google.com/home/projects/14s3xyW1nkk43905FZ4ABIuk8Xsi6Rt7DeDB3AYoHTp9V4Oq8Q6UJplVf/edit",
      "liveScriptId": "14pg6QCx5W0K0inzIBRELLo5_rJgtsyglj6VfI0xkDJU4j13_CfViV_JJ",
      "devScriptId": "14s3xyW1nkk43905FZ4ABIuk8Xsi6Rt7DeDB3AYoHTp9V4Oq8Q6UJplVf",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1uzN7sULrN8sL2lUCXMqtb549I0XDNCez",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/propalliance-hub/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/propalliance-hub",
      "missingItems": "",
      "lastVerified": "2026-07-01",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "",
      "lastDevChange": "",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "API: AppFolio signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Batch 1 governance normalization: PropAlliance Hub is authoritative hub/router/registry authority. Workshop references are legacy only. CID registry cleanup verified on 2026-07-01.",
      "deployments": [
        {
          "registryRow": 4,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxGuAQHe9lVjTEBJBPwr9pVVV8WHyevHVC-XGBUgW7NHg6TLBAo_M0PMgx7PIAYUGZo/exec",
          "deploymentId": "AKfycbxGuAQHe9lVjTEBJBPwr9pVVV8WHyevHVC-XGBUgW7NHg6TLBAo_M0PMgx7PIAYUGZo",
          "pinnedVersion": "69",
          "badge": "LIVE",
          "lastVerified": "2026-07-01"
        },
        {
          "registryRow": 5,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyogm2uig9R05iBjeI976boZzrgRJJ3yiLbWoMXdhYjLoAn5hfoE5Es2waXpuI3aSOsxg/exec",
          "deploymentId": "AKfycbyogm2uig9R05iBjeI976boZzrgRJJ3yiLbWoMXdhYjLoAn5hfoE5Es2waXpuI3aSOsxg",
          "pinnedVersion": "70",
          "badge": "DEV",
          "lastVerified": "2026-07-01"
        }
      ],
      "assets": [
        {
          "registryRow": 4,
          "assetType": "Script",
          "name": "Hub - LIVE Script",
          "url": "https://script.google.com/home/projects/14pg6QCx5W0K0inzIBRELLo5_rJgtsyglj6VfI0xkDJU4j13_CfViV_JJ/edit",
          "notes": "Source code - LIVE; deployed Start Here Hub is version 69 with CID registry cleanup.",
          "critical": true,
          "lastVerified": "2026-07-01"
        },
        {
          "registryRow": 5,
          "assetType": "Script",
          "name": "Hub - DEV Script",
          "url": "https://script.google.com/home/projects/14s3xyW1nkk43905FZ4ABIuk8Xsi6Rt7DeDB3AYoHTp9V4Oq8Q6UJplVf/edit",
          "notes": "Source code - DEV; deployed DEV Hub is version 70 with CID registry cleanup.",
          "critical": true,
          "lastVerified": "2026-07-01"
        },
        {
          "registryRow": 6,
          "assetType": "Folder",
          "name": "PropAlliance Hub - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1uzN7sULrN8sL2lUCXMqtb549I0XDNCez",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Hub LIVE v49 and DEV v39 are synchronized with the authoritative registry workbook."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "the_workshop",
      "projectName": "The Workshop",
      "projectSlug": "the-workshop",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Archived — Do Not Use",
      "routerStatus": "ARCHIVED",
      "notes": "ARCHIVED — DO NOT USE. Dead project replaced by PropAlliance Hub. Retained only for recovery and audit history. Do not edit, update, deploy, promote, or create a DEV copy.",
      "registryRow": 4,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "",
      "devUrl": "",
      "liveScriptUrl": "https://script.google.com/home/projects/1lVDvYwIJro89eVJrPgNhiHyrZlQkRSxR49URl3TfcixanrHUrhsXniH-/edit",
      "devScriptUrl": "",
      "liveScriptId": "1lVDvYwIJro89eVJrPgNhiHyrZlQkRSxR49URl3TfcixanrHUrhsXniH-",
      "devScriptId": "",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1rjIWodu31vZzISTuTy4bTTJMx0mV4pPO",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/the-workshop/DEV_BLOCKED.md",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/the-workshop",
      "missingItems": "None — archived project; no DEV required",
      "lastVerified": "2026-06-18",
      "readyForLive": "No — archived; do not edit or deploy",
      "promotionStatus": "ARCHIVED — BLOCKED",
      "lastDevChange": "Archived 2026-06-18. No further development allowed.",
      "promotionNotes": "Reactivation requires Rich Green's explicit approval.",
      "dataSourceAudit": "API: AppFolio signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "The Workshop is permanently archived and blocked from changes. Historical source and deployment references are retained only for cautious recovery.",
      "deployments": [
        {
          "registryRow": 6,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzBctPuerb-GjU3tcnH3mSTeMbNdauOnPk7XBD-jhNiGNtjX8DWd8Oga7XPTT9f_F76/exec",
          "deploymentId": "AKfycbzBctPuerb-GjU3tcnH3mSTeMbNdauOnPk7XBD-jhNiGNtjX8DWd8Oga7XPTT9f_F76",
          "pinnedVersion": "",
          "badge": "LIVE",
          "lastVerified": "2026-04-30"
        }
      ],
      "assets": [
        {
          "registryRow": 9,
          "assetType": "Script",
          "name": "The Workshop - LIVE Script",
          "url": "https://script.google.com/home/projects/1lVDvYwIJro89eVJrPgNhiHyrZlQkRSxR49URl3TfcixanrHUrhsXniH-/edit",
          "notes": "LIVE script from Hub registry. Audit: API: AppFolio signals found ARCHIVED REFERENCE ONLY — DO NOT USE OR EDIT.",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 10,
          "assetType": "Folder",
          "name": "The Workshop - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1rjIWodu31vZzISTuTy4bTTJMx0mV4pPO",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working). ARCHIVED REFERENCE ONLY — DO NOT USE OR EDIT.",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "The Workshop - GitHub Repo",
          "url": "https://github.com/RichRock27/The-Workshop.git",
          "notes": "Private GitHub source repo verified from the archived local project mirror. ARCHIVED REFERENCE ONLY — DO NOT USE OR EDIT.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": true,
        "readOnly": true,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Archived dead project. No active launch link. Historical records are retained only for recovery; edits and deployments are blocked.",
        "archived": true
      },
      "visibility": {
        "admin": true,
        "supervisor": false,
        "pm": false,
        "owner": false
      }
    },
    {
      "projectId": "tenant_action_sheet",
      "projectName": "Tenant Action Sheet",
      "projectSlug": "tenant-action-sheet",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 5,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbx6YOQK_v3yDhHoRkBNHoMhGumNpzMhevs0bZFqccfmaEPI3mi7OsMOdP3fAZ8fX9lm/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycby92wo5iz265AnyL0Svu9M2jW4oa8199Eaa7ZJOy8ELxQQ-7t0rhty8IFLEwhl6UJoPzg/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/10v5juYvhkGSINGFlezHOvb3m2ilNTzzRUUC8Ly10cDKoYmb-TJugjZJS/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1olaUgv9oV0XU_wEcJ04az233VftTz73-cf-UjNu2_9v6Wfw0Cu0Ma6nE/edit",
      "liveScriptId": "10v5juYvhkGSINGFlezHOvb3m2ilNTzzRUUC8Ly10cDKoYmb-TJugjZJS",
      "devScriptId": "1olaUgv9oV0XU_wEcJ04az233VftTz73-cf-UjNu2_9v6Wfw0Cu0Ma6nE",
      "anchorFolderUrl": "Tenant Action Sheet",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/tenant-action-sheet/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/tenant-action-sheet",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: manual review required before declaring official LIVE; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 7,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbx6YOQK_v3yDhHoRkBNHoMhGumNpzMhevs0bZFqccfmaEPI3mi7OsMOdP3fAZ8fX9lm/exec",
          "deploymentId": "AKfycbx6YOQK_v3yDhHoRkBNHoMhGumNpzMhevs0bZFqccfmaEPI3mi7OsMOdP3fAZ8fX9lm",
          "pinnedVersion": "",
          "badge": "LIVE",
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 38,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycby92wo5iz265AnyL0Svu9M2jW4oa8199Eaa7ZJOy8ELxQQ-7t0rhty8IFLEwhl6UJoPzg/exec",
          "deploymentId": "AKfycby92wo5iz265AnyL0Svu9M2jW4oa8199Eaa7ZJOy8ELxQQ-7t0rhty8IFLEwhl6UJoPzg",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 11,
          "assetType": "Script",
          "name": "Tenant Action Sheet - LIVE Script",
          "url": "https://script.google.com/home/projects/10v5juYvhkGSINGFlezHOvb3m2ilNTzzRUUC8Ly10cDKoYmb-TJugjZJS/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 12,
          "assetType": "Folder",
          "name": "Tenant Action Sheet - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1yJtYWH9NDu7yTGgu0khGran1fPNwzwNn",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 80,
          "assetType": "Script",
          "name": "Tenant Action Sheet - DEV Script",
          "url": "https://script.google.com/home/projects/1olaUgv9oV0XU_wEcJ04az233VftTz73-cf-UjNu2_9v6Wfw0Cu0Ma6nE/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: manual review required before declaring official LIVE; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "property_management_board_pmb",
      "projectName": "Property Management Board (PMB)",
      "projectSlug": "property-management-board-pmb",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "LIVE v305 verified. DEV v54 verified. PMB Dev now includes KOTM break-glass access, View As controls for KOTM, central identity territory access, removed sheet/admin sync buttons, and 4-hour automatic sync. Duplicate candidate IDs retained for manual review; do not delete or archive automatically.",
      "registryRow": 6,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbztHwLDlcs3aw1X5OV7U5sYNV-uua0ihza4Fx_oweCFf2xrW2vsM2Tj9JA6rQ0lNyuVbA/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbw6FNhsc6u-slaQ67Bwq_4AqDmvVT2EM-CcdWYgd9v6NpTf_HVHl_fyAKFNNVXNPsCa/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1rnQEXxDoEfmkBtZ3_08t36UsIF8BlCB5uBhXXIwdpPA3UEenLkNZH7_v/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1uKnCwfI0V_rY1FLbLQVjh-ZZgAYUEA3zdEYJG2OY0nNmF3MClSSUHfp1/edit",
      "liveScriptId": "1rnQEXxDoEfmkBtZ3_08t36UsIF8BlCB5uBhXXIwdpPA3UEenLkNZH7_v",
      "devScriptId": "1uKnCwfI0V_rY1FLbLQVjh-ZZgAYUEA3zdEYJG2OY0nNmF3MClSSUHfp1",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1np-BHHlChr5p5xt5bbneEsLXhLMWIpt1",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/property-management-board-pmb/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/property-management-board-pmb",
      "missingItems": "",
      "lastVerified": "2026-05-10",
      "readyForLive": "Pending user verification of DEV v54 KOTM and View As behavior",
      "promotionStatus": "",
      "lastDevChange": "Baseline release tracking initialized 2026-05-14.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: API AppFolio found, but CSV/legacy fallback signals also found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Batch 1 governance normalization: LIVE v305 verified. PMB DEV updated to v54 with KOTM and View As on 2026-07-01.",
      "deployments": [
        {
          "registryRow": 8,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbztHwLDlcs3aw1X5OV7U5sYNV-uua0ihza4Fx_oweCFf2xrW2vsM2Tj9JA6rQ0lNyuVbA/exec",
          "deploymentId": "AKfycbztHwLDlcs3aw1X5OV7U5sYNV-uua0ihza4Fx_oweCFf2xrW2vsM2Tj9JA6rQ0lNyuVbA",
          "pinnedVersion": "305",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 31,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbw6FNhsc6u-slaQ67Bwq_4AqDmvVT2EM-CcdWYgd9v6NpTf_HVHl_fyAKFNNVXNPsCa/exec",
          "deploymentId": "AKfycbw6FNhsc6u-slaQ67Bwq_4AqDmvVT2EM-CcdWYgd9v6NpTf_HVHl_fyAKFNNVXNPsCa",
          "pinnedVersion": "54",
          "badge": "DEV",
          "lastVerified": "2026-07-01"
        }
      ],
      "assets": [
        {
          "registryRow": 13,
          "assetType": "Script",
          "name": "Property Management Board (PMB) - LIVE Script",
          "url": "https://script.google.com/home/projects/1rnQEXxDoEfmkBtZ3_08t36UsIF8BlCB5uBhXXIwdpPA3UEenLkNZH7_v/edit",
          "notes": "LIVE script from Hub registry. Audit: API: AppFolio signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 14,
          "assetType": "Folder",
          "name": "Property Management Board (PMB) - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1np-BHHlChr5p5xt5bbneEsLXhLMWIpt1",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 68,
          "assetType": "Script",
          "name": "PMB - DEV Script",
          "url": "https://script.google.com/home/projects/1uKnCwfI0V_rY1FLbLQVjh-ZZgAYUEA3zdEYJG2OY0nNmF3MClSSUHfp1/edit",
          "notes": "DEV script reused from older Property Management Portal Test and overwritten from LIVE v305 with red DEV badge.",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 0,
          "assetType": "Other",
          "name": "PMB - GitHub Repo",
          "url": "https://github.com/RichRock27/property-management-board-pmb",
          "notes": "Private GitHub source for DEV_WORKSPACE. Initial push 2026-05-28.",
          "critical": true,
          "lastVerified": "2026-05-28"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": true,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Batch 1 governance normalization: LIVE v305 / DEV v34 verified; stale DEV v14 corrected. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "make_ready_board",
      "projectName": "Make Ready Board",
      "projectSlug": "make-ready-board",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 7,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbziipKaKwwdxEjwBBdnAVnqI788YLtsmmxgBKl43vLjDEJnpu2Y4lD3AMajPmGo_n2Q/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbzK8e_ejHatshmFqq9jSnPDHCa41UGearjxyfKeP16VKHUZNHxaOO3R4QLn7pvOsdDLzw/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1U1a-mOo995GvSqj3Ifhp44Rl0ZVdtWgF8VRzHo3DyZiLqgKGCmyyxOMH/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1la2xuAnaG_UvqLdIcwDWkljGV-eVRbmEVI6fYEW0niULgcrdF-C0BaWG/edit",
      "liveScriptId": "1U1a-mOo995GvSqj3Ifhp44Rl0ZVdtWgF8VRzHo3DyZiLqgKGCmyyxOMH",
      "devScriptId": "1la2xuAnaG_UvqLdIcwDWkljGV-eVRbmEVI6fYEW0niULgcrdF-C0BaWG",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1nROrgFlIt3z307xJd6FawAeC3EAworjl",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/make-ready-board/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/make-ready-board",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "API: AppFolio signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v3 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 9,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbziipKaKwwdxEjwBBdnAVnqI788YLtsmmxgBKl43vLjDEJnpu2Y4lD3AMajPmGo_n2Q/exec",
          "deploymentId": "AKfycbziipKaKwwdxEjwBBdnAVnqI788YLtsmmxgBKl43vLjDEJnpu2Y4lD3AMajPmGo_n2Q",
          "pinnedVersion": "3",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 39,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzK8e_ejHatshmFqq9jSnPDHCa41UGearjxyfKeP16VKHUZNHxaOO3R4QLn7pvOsdDLzw/exec",
          "deploymentId": "AKfycbzK8e_ejHatshmFqq9jSnPDHCa41UGearjxyfKeP16VKHUZNHxaOO3R4QLn7pvOsdDLzw",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 15,
          "assetType": "Script",
          "name": "Make Ready Board - LIVE Script",
          "url": "https://script.google.com/home/projects/1U1a-mOo995GvSqj3Ifhp44Rl0ZVdtWgF8VRzHo3DyZiLqgKGCmyyxOMH/edit",
          "notes": "LIVE script from Hub registry. Audit: API: AppFolio signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 16,
          "assetType": "Folder",
          "name": "Make Ready Board - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1nROrgFlIt3z307xJd6FawAeC3EAworjl",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 81,
          "assetType": "Script",
          "name": "Make Ready Board - DEV Script",
          "url": "https://script.google.com/home/projects/1la2xuAnaG_UvqLdIcwDWkljGV-eVRbmEVI6fYEW0niULgcrdF-C0BaWG/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Make Ready Board - GitHub Repo",
          "url": "https://github.com/RichRock27/mrb.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v3 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "utility_bill_back_tool",
      "projectName": "Utility Bill Back Tool",
      "projectSlug": "utility-bill-back-tool",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 8,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbyKrqJap-T99B76N0R2n9Hw1iD_C2-9e-kOdE-Dj4etbdJHMcGMutOuoObOwx8MekHK/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbw_m8gd6tKOP-CFSQWp7WfYRAvZPMvbEidftPzJ609RJFpnZ2Qr9U9H2K9S_n4SshXr/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1-fwIEM4RQXr0SL2AaAgwhLA-ElWLdwwWaTTVvq_cId6qr1Phzw8fHFWG/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1fDmuWSF_FGlCpyJ1S4fUQDGOv5kiNhCWCD44N5kydUs8DsjIVqsHFcTp/edit",
      "liveScriptId": "1-fwIEM4RQXr0SL2AaAgwhLA-ElWLdwwWaTTVvq_cId6qr1Phzw8fHFWG",
      "devScriptId": "1fDmuWSF_FGlCpyJ1S4fUQDGOv5kiNhCWCD44N5kydUs8DsjIVqsHFcTp",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1hVobgqFXq5LY0GtJtbKEL2Rd-gjunieJ",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/utility-bill-back-tool/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/utility-bill-back-tool",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE review required; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 10,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyKrqJap-T99B76N0R2n9Hw1iD_C2-9e-kOdE-Dj4etbdJHMcGMutOuoObOwx8MekHK/exec",
          "deploymentId": "AKfycbyKrqJap-T99B76N0R2n9Hw1iD_C2-9e-kOdE-Dj4etbdJHMcGMutOuoObOwx8MekHK",
          "pinnedVersion": "",
          "badge": "LIVE",
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 40,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbw_m8gd6tKOP-CFSQWp7WfYRAvZPMvbEidftPzJ609RJFpnZ2Qr9U9H2K9S_n4SshXr/exec",
          "deploymentId": "AKfycbw_m8gd6tKOP-CFSQWp7WfYRAvZPMvbEidftPzJ609RJFpnZ2Qr9U9H2K9S_n4SshXr",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 17,
          "assetType": "Script",
          "name": "Utility Bill Back Tool - LIVE Script",
          "url": "https://script.google.com/home/projects/1-fwIEM4RQXr0SL2AaAgwhLA-ElWLdwwWaTTVvq_cId6qr1Phzw8fHFWG/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 18,
          "assetType": "Folder",
          "name": "Utility Bill Back Tool - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1hVobgqFXq5LY0GtJtbKEL2Rd-gjunieJ",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 82,
          "assetType": "Script",
          "name": "Utility Bill Back Tool - DEV Script",
          "url": "https://script.google.com/home/projects/1fDmuWSF_FGlCpyJ1S4fUQDGOv5kiNhCWCD44N5kydUs8DsjIVqsHFcTp/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Utility Bill Back Tool - GitHub Repo",
          "url": "https://github.com/RichRock27/ubb.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE review required; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": true
      }
    },
    {
      "projectId": "team_tasks",
      "projectName": "Team Tasks",
      "projectSlug": "team-tasks",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 9,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbwcA09bxJbxlfNDImdUomtJ9BXhg-zMCa9K5BykTFutLw2Wm1l6CiqMDD5JLAluVEt3dg/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbxL0a2ppuDl6UNddblGdpAh0Pb6dTvEBdjl8Ojvy3opWeoAvjKQ28PdSd5aRGKxjChE/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1p-vccvA--EU-T3gpGkfPy0Nn6jh6wNFeQ6iO4L5UmUbbXNofjXDMJlBO/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1ewl7n-q4KJrwvPOBparlozwHi3e7k6nrYsGVA1Dhy6rqT35D5CGLzPtz/edit",
      "liveScriptId": "1p-vccvA--EU-T3gpGkfPy0Nn6jh6wNFeQ6iO4L5UmUbbXNofjXDMJlBO",
      "devScriptId": "1ewl7n-q4KJrwvPOBparlozwHi3e7k6nrYsGVA1Dhy6rqT35D5CGLzPtz",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1qR9gwQwOWaWHr662kLF6ebHoe3eVm2d0",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/team-tasks/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/team-tasks",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v15 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 11,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwcA09bxJbxlfNDImdUomtJ9BXhg-zMCa9K5BykTFutLw2Wm1l6CiqMDD5JLAluVEt3dg/exec",
          "deploymentId": "AKfycbwcA09bxJbxlfNDImdUomtJ9BXhg-zMCa9K5BykTFutLw2Wm1l6CiqMDD5JLAluVEt3dg",
          "pinnedVersion": "15",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 41,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxL0a2ppuDl6UNddblGdpAh0Pb6dTvEBdjl8Ojvy3opWeoAvjKQ28PdSd5aRGKxjChE/exec",
          "deploymentId": "AKfycbxL0a2ppuDl6UNddblGdpAh0Pb6dTvEBdjl8Ojvy3opWeoAvjKQ28PdSd5aRGKxjChE",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 19,
          "assetType": "Script",
          "name": "Team Tasks - LIVE Script",
          "url": "https://script.google.com/home/projects/1p-vccvA--EU-T3gpGkfPy0Nn6jh6wNFeQ6iO4L5UmUbbXNofjXDMJlBO/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 20,
          "assetType": "Folder",
          "name": "Team Tasks - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1qR9gwQwOWaWHr662kLF6ebHoe3eVm2d0",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 83,
          "assetType": "Script",
          "name": "Team Tasks - DEV Script",
          "url": "https://script.google.com/home/projects/1ewl7n-q4KJrwvPOBparlozwHi3e7k6nrYsGVA1Dhy6rqT35D5CGLzPtz/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Team Tasks - GitHub Repo",
          "url": "https://github.com/RichRock27/tt.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v15 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "utility_tracker_360",
      "projectName": "Utility Tracker 360",
      "projectSlug": "utility-tracker-360",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 10,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://docs.google.com/spreadsheets/d/14kGAQbX5m4qWPgkUJGPlZ08dIftOw23eRRdHb7H1QEQ/edit",
      "devUrl": "https://script.google.com/macros/s/AKfycbyXDXi4cT2bw0AZ7tzP1MnV2LYcpZ1ufxHXZH8BRL2ltBFZurUeWGtyC-Y7RaT_rbJhWQ/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1-2ZLfJ0lP7VDdG4U4fK7hQyTpS_fjbC8OcTQhH07G8TDv7_R9CxN1RRs/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1CoKtqWvZ08cs1WHNAaF_sT2qVZfXhlnh8MYj4JrOzb_Oz7ydQxkXogGN/edit",
      "liveScriptId": "1-2ZLfJ0lP7VDdG4U4fK7hQyTpS_fjbC8OcTQhH07G8TDv7_R9CxN1RRs",
      "devScriptId": "1CoKtqWvZ08cs1WHNAaF_sT2qVZfXhlnh8MYj4JrOzb_Oz7ydQxkXogGN",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1s3JM8uC1fwv_DBhjroPrfZhEcyRw9Zct",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/utility-tracker-360/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/utility-tracker-360",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "API: AppFolio signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE review required; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 12,
          "env": "LIVE",
          "webAppUrl": "https://docs.google.com/spreadsheets/d/14kGAQbX5m4qWPgkUJGPlZ08dIftOw23eRRdHb7H1QEQ/edit",
          "deploymentId": "",
          "pinnedVersion": "",
          "badge": "LIVE",
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 42,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyXDXi4cT2bw0AZ7tzP1MnV2LYcpZ1ufxHXZH8BRL2ltBFZurUeWGtyC-Y7RaT_rbJhWQ/exec",
          "deploymentId": "AKfycbyXDXi4cT2bw0AZ7tzP1MnV2LYcpZ1ufxHXZH8BRL2ltBFZurUeWGtyC-Y7RaT_rbJhWQ",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 21,
          "assetType": "Script",
          "name": "Utility Tracker 360 - LIVE Script",
          "url": "https://script.google.com/home/projects/1-2ZLfJ0lP7VDdG4U4fK7hQyTpS_fjbC8OcTQhH07G8TDv7_R9CxN1RRs/edit",
          "notes": "LIVE script from Hub registry. Audit: API: AppFolio signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 22,
          "assetType": "Folder",
          "name": "Utility Tracker 360 - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1s3JM8uC1fwv_DBhjroPrfZhEcyRw9Zct",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 84,
          "assetType": "Script",
          "name": "Utility Tracker 360 - DEV Script",
          "url": "https://script.google.com/home/projects/1CoKtqWvZ08cs1WHNAaF_sT2qVZfXhlnh8MYj4JrOzb_Oz7ydQxkXogGN/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Utility Tracker 360 - GitHub Repo",
          "url": "https://github.com/RichRock27/ut.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE review required; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": true
      }
    },
    {
      "projectId": "notice_to_vacate_manual_generation",
      "projectName": "Notice To Vacate - Manual Generation",
      "projectSlug": "notice-to-vacate-manual-generation",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 11,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycby0VeAikBLnTNfxVrSA5XZEw8oMQ9zs_qLM9RutcBPtYlg6qJF4Z5eAORLdyJop4U6a6A/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbyKzPPcTQ04YzbGjAqAhQuduXFSos0V6p55Ql9zH53hrlxcpO_xF4KdizbyMNYKpHb9/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1vqLnZ3k-98asa1-CR2vShpUnrwBA3I3C7UzC6Fjq8x4C3acnnRB2d0h2/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1_abqzaGFtPFjIIfhVnzfpLh-oRUA7vqaOIJrHITNh9zM9Xmp0R5dhcLR/edit",
      "liveScriptId": "1vqLnZ3k-98asa1-CR2vShpUnrwBA3I3C7UzC6Fjq8x4C3acnnRB2d0h2",
      "devScriptId": "1_abqzaGFtPFjIIfhVnzfpLh-oRUA7vqaOIJrHITNh9zM9Xmp0R5dhcLR",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/11D3ggzbCriwJ5uxGa4RUw4HLECqL1u5-",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/notice-to-vacate-manual-generation/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/notice-to-vacate-manual-generation",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE review required; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 13,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycby0VeAikBLnTNfxVrSA5XZEw8oMQ9zs_qLM9RutcBPtYlg6qJF4Z5eAORLdyJop4U6a6A/exec",
          "deploymentId": "AKfycby0VeAikBLnTNfxVrSA5XZEw8oMQ9zs_qLM9RutcBPtYlg6qJF4Z5eAORLdyJop4U6a6A",
          "pinnedVersion": "",
          "badge": "LIVE",
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 60,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyKzPPcTQ04YzbGjAqAhQuduXFSos0V6p55Ql9zH53hrlxcpO_xF4KdizbyMNYKpHb9/exec",
          "deploymentId": "AKfycbyKzPPcTQ04YzbGjAqAhQuduXFSos0V6p55Ql9zH53hrlxcpO_xF4KdizbyMNYKpHb9",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 23,
          "assetType": "Script",
          "name": "Notice To Vacate - Manual Generation - LIVE Script",
          "url": "https://script.google.com/home/projects/1vqLnZ3k-98asa1-CR2vShpUnrwBA3I3C7UzC6Fjq8x4C3acnnRB2d0h2/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 24,
          "assetType": "Folder",
          "name": "Notice To Vacate - Manual Generation - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/11D3ggzbCriwJ5uxGa4RUw4HLECqL1u5-",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 102,
          "assetType": "Script",
          "name": "Notice To Vacate - Manual Generation - DEV Script",
          "url": "https://script.google.com/home/projects/1_abqzaGFtPFjIIfhVnzfpLh-oRUA7vqaOIJrHITNh9zM9Xmp0R5dhcLR/edit",
          "notes": "Official DEV Apps Script project created from registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE review required; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "vacancy_tracker",
      "projectName": "Vacancy Tracker",
      "projectSlug": "vacancy-tracker",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 12,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbwXplNgWrue4ZmGTtWCUrRPwKeX20f8CZV9RbkICe1TYdUpBS_A4t6Qsi1ano__ZFL2Lg/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbxP6XOO_Q1xIMqXEYB3Ky5R3FIkwEHcM0MNhB2W4aOzUmtuYBoANVa8rVmh3EVOmllj/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1rTqwtcB0ylvWZlsGeAIFf56frVGCbYOr6k6RP8-2d1QEwrxdGT2U8C1y/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1VeZNhgLyb2_gTHqk5puVPpX7LOFiKGMsxELgCa7oRU06axcsdvQaONAm/edit",
      "liveScriptId": "1rTqwtcB0ylvWZlsGeAIFf56frVGCbYOr6k6RP8-2d1QEwrxdGT2U8C1y",
      "devScriptId": "1VeZNhgLyb2_gTHqk5puVPpX7LOFiKGMsxELgCa7oRU06axcsdvQaONAm",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1ld9vSWLYNJDIuxh2NeHBbEuAkTVj_Yy5",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/vacancy-tracker/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/vacancy-tracker",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "API: AppFolio signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v25 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 14,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwXplNgWrue4ZmGTtWCUrRPwKeX20f8CZV9RbkICe1TYdUpBS_A4t6Qsi1ano__ZFL2Lg/exec",
          "deploymentId": "AKfycbwXplNgWrue4ZmGTtWCUrRPwKeX20f8CZV9RbkICe1TYdUpBS_A4t6Qsi1ano__ZFL2Lg",
          "pinnedVersion": "25",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 43,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxP6XOO_Q1xIMqXEYB3Ky5R3FIkwEHcM0MNhB2W4aOzUmtuYBoANVa8rVmh3EVOmllj/exec",
          "deploymentId": "AKfycbxP6XOO_Q1xIMqXEYB3Ky5R3FIkwEHcM0MNhB2W4aOzUmtuYBoANVa8rVmh3EVOmllj",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 25,
          "assetType": "Script",
          "name": "Vacancy Tracker - LIVE Script",
          "url": "https://script.google.com/home/projects/1rTqwtcB0ylvWZlsGeAIFf56frVGCbYOr6k6RP8-2d1QEwrxdGT2U8C1y/edit",
          "notes": "LIVE script from Hub registry. Audit: API: AppFolio signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 26,
          "assetType": "Folder",
          "name": "Vacancy Tracker - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1ld9vSWLYNJDIuxh2NeHBbEuAkTVj_Yy5",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 85,
          "assetType": "Script",
          "name": "Vacancy Tracker - DEV Script",
          "url": "https://script.google.com/home/projects/1VeZNhgLyb2_gTHqk5puVPpX7LOFiKGMsxELgCa7oRU06axcsdvQaONAm/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Vacancy Tracker - GitHub Repo",
          "url": "https://github.com/RichRock27/vt.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v25 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": true
      }
    },
    {
      "projectId": "alias_database",
      "projectName": "Alias Database",
      "projectSlug": "alias-database",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 13,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "",
      "devUrl": "https://script.google.com/macros/s/AKfycbyRhaqsPw_HqjPXB5G5RdCW7l392O04Bk_tXOuTJUqLZ9YiwrRhISdi5Wya8Ae0SNec4Q/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1Gm-QqMztoM3B6OIuji-kTtl-2c8foOfq5XQ58FoZ8mC5T_4sGWtxxdeB/edit",
      "devScriptUrl": "https://script.google.com/home/projects/13kZ5-u7XKVIqSCdfZtFrtchg3r8PZHFe3USRIW1yI6HN8X_p0W9wYc5b/edit",
      "liveScriptId": "1Gm-QqMztoM3B6OIuji-kTtl-2c8foOfq5XQ58FoZ8mC5T_4sGWtxxdeB",
      "devScriptId": "13kZ5-u7XKVIqSCdfZtFrtchg3r8PZHFe3USRIW1yI6HN8X_p0W9wYc5b",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/13K9H6DoEdOBKmwSZT7BLd-EjYTSnJh6v",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/alias-database/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/alias-database",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "UNCLEAR / not data-driven",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 44,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyRhaqsPw_HqjPXB5G5RdCW7l392O04Bk_tXOuTJUqLZ9YiwrRhISdi5Wya8Ae0SNec4Q/exec",
          "deploymentId": "AKfycbyRhaqsPw_HqjPXB5G5RdCW7l392O04Bk_tXOuTJUqLZ9YiwrRhISdi5Wya8Ae0SNec4Q",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 27,
          "assetType": "Script",
          "name": "Alias Database - LIVE Script",
          "url": "https://script.google.com/home/projects/1Gm-QqMztoM3B6OIuji-kTtl-2c8foOfq5XQ58FoZ8mC5T_4sGWtxxdeB/edit",
          "notes": "LIVE script from Hub registry. Audit: UNCLEAR / not data-driven",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 28,
          "assetType": "Folder",
          "name": "Alias Database - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/13K9H6DoEdOBKmwSZT7BLd-EjYTSnJh6v",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 86,
          "assetType": "Script",
          "name": "Alias Database - DEV Script",
          "url": "https://script.google.com/home/projects/13kZ5-u7XKVIqSCdfZtFrtchg3r8PZHFe3USRIW1yI6HN8X_p0W9wYc5b/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Alias Database - GitHub Repo",
          "url": "https://github.com/RichRock27/ad.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": false,
        "pm": false,
        "owner": false
      }
    },
    {
      "projectId": "notice_to_vacate_forms",
      "projectName": "Notice To Vacate (Forms)",
      "projectSlug": "notice-to-vacate-forms",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 14,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "",
      "devUrl": "https://script.google.com/macros/s/AKfycbyjUbo0K5FO3C1DZ6UJLwx0EkOJ8LvcDpwMet4smbi618CkHLxhe-N_rUWSUfpOvVGu/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/15aneGBzgMZew1T55N8mKwaWTel17NOCP2gdbJjGqknObqKfnedrQExWo/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1E1lT0nbGRVU0CM7YA1x84pfPo-oqFVhKJfY93gnARn5cXaukCalLfTwz/edit",
      "liveScriptId": "15aneGBzgMZew1T55N8mKwaWTel17NOCP2gdbJjGqknObqKfnedrQExWo",
      "devScriptId": "1E1lT0nbGRVU0CM7YA1x84pfPo-oqFVhKJfY93gnARn5cXaukCalLfTwz",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1M23Yjj9RTgwRB7S-ISesXRl_3OnWspio",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/notice-to-vacate-forms/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/notice-to-vacate-forms",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 45,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyjUbo0K5FO3C1DZ6UJLwx0EkOJ8LvcDpwMet4smbi618CkHLxhe-N_rUWSUfpOvVGu/exec",
          "deploymentId": "AKfycbyjUbo0K5FO3C1DZ6UJLwx0EkOJ8LvcDpwMet4smbi618CkHLxhe-N_rUWSUfpOvVGu",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 29,
          "assetType": "Script",
          "name": "Notice To Vacate (Forms) - LIVE Script",
          "url": "https://script.google.com/home/projects/15aneGBzgMZew1T55N8mKwaWTel17NOCP2gdbJjGqknObqKfnedrQExWo/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 30,
          "assetType": "Folder",
          "name": "Notice To Vacate (Forms) - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1M23Yjj9RTgwRB7S-ISesXRl_3OnWspio",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 87,
          "assetType": "Script",
          "name": "Notice To Vacate (Forms) - DEV Script",
          "url": "https://script.google.com/home/projects/1E1lT0nbGRVU0CM7YA1x84pfPo-oqFVhKJfY93gnARn5cXaukCalLfTwz/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Notice To Vacate (Forms) - GitHub Repo",
          "url": "https://github.com/RichRock27/ntvform.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": false,
        "pm": false,
        "owner": false
      }
    },
    {
      "projectId": "vacancy_dashboard",
      "projectName": "Vacancy Dashboard",
      "projectSlug": "vacancy-dashboard",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 15,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "",
      "devUrl": "https://script.google.com/macros/s/AKfycbyidd_FAxtF0gVcHX_lZtcEjycyGuhdFe1GLI_WxdqC_dvSuQpBT95fWJNMr8WIPR7gDg/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/19sH9JmoilAPJDyGfF5q8VJJU-u9kxXyi5nVbr1Zc7nltevumoJLZC9ci/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1-xebHCk7E5qmLktv6rkWqPMmlKRmLwZVw4mQnu3S747Z22_yNP4_0JBm/edit",
      "liveScriptId": "19sH9JmoilAPJDyGfF5q8VJJU-u9kxXyi5nVbr1Zc7nltevumoJLZC9ci",
      "devScriptId": "1-xebHCk7E5qmLktv6rkWqPMmlKRmLwZVw4mQnu3S747Z22_yNP4_0JBm",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1nSTgSG2cvoAQExukjR2k3zKBbnonmgR4",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/vacancy-dashboard/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/vacancy-dashboard",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 46,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyidd_FAxtF0gVcHX_lZtcEjycyGuhdFe1GLI_WxdqC_dvSuQpBT95fWJNMr8WIPR7gDg/exec",
          "deploymentId": "AKfycbyidd_FAxtF0gVcHX_lZtcEjycyGuhdFe1GLI_WxdqC_dvSuQpBT95fWJNMr8WIPR7gDg",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 31,
          "assetType": "Script",
          "name": "Vacancy Dashboard - LIVE Script",
          "url": "https://script.google.com/home/projects/19sH9JmoilAPJDyGfF5q8VJJU-u9kxXyi5nVbr1Zc7nltevumoJLZC9ci/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 32,
          "assetType": "Folder",
          "name": "Vacancy Dashboard - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1nSTgSG2cvoAQExukjR2k3zKBbnonmgR4",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 88,
          "assetType": "Script",
          "name": "Vacancy Dashboard - DEV Script",
          "url": "https://script.google.com/home/projects/1-xebHCk7E5qmLktv6rkWqPMmlKRmLwZVw4mQnu3S747Z22_yNP4_0JBm/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Vacancy Dashboard - GitHub Repo",
          "url": "https://github.com/RichRock27/vd.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": false,
        "pm": false,
        "owner": false
      }
    },
    {
      "projectId": "marketing_readiness_checklist",
      "projectName": "Marketing Readiness Checklist",
      "projectSlug": "marketing-readiness-checklist",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 16,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbw71YExtpD3Ts225u1zbxg9DhFn52anNeG5OJ2-R644irnSsZ6dj8D7Exb7RReyvGFP/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbwFvMgOaxgRFABMTgKwZ25nemMSlx0VyXRNdFnPD-K7o1THm4awaZOpWq778nN3Rcrv/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1pR3y800ZLbJdmLXnsJPrdzYcG6tRSuzceZHmuvSCDeM2gF7_UTMb5gum/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1pqxSRGRFtlwxeuXpy_UV9QLxJRuEfydasatmLp6xO0SWkLlEKh2xhWnO/edit",
      "liveScriptId": "1pR3y800ZLbJdmLXnsJPrdzYcG6tRSuzceZHmuvSCDeM2gF7_UTMb5gum",
      "devScriptId": "1pqxSRGRFtlwxeuXpy_UV9QLxJRuEfydasatmLp6xO0SWkLlEKh2xhWnO",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1VmcBk6pU21HF7z3f6IyT2UuvqnSENriT",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/marketing-readiness-checklist/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/marketing-readiness-checklist",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "API: AppFolio signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v104 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 15,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbw71YExtpD3Ts225u1zbxg9DhFn52anNeG5OJ2-R644irnSsZ6dj8D7Exb7RReyvGFP/exec",
          "deploymentId": "AKfycbw71YExtpD3Ts225u1zbxg9DhFn52anNeG5OJ2-R644irnSsZ6dj8D7Exb7RReyvGFP",
          "pinnedVersion": "105",
          "badge": "LIVE",
          "lastVerified": "2026-05-11"
        },
        {
          "registryRow": 47,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwFvMgOaxgRFABMTgKwZ25nemMSlx0VyXRNdFnPD-K7o1THm4awaZOpWq778nN3Rcrv/exec",
          "deploymentId": "AKfycbwFvMgOaxgRFABMTgKwZ25nemMSlx0VyXRNdFnPD-K7o1THm4awaZOpWq778nN3Rcrv",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 33,
          "assetType": "Script",
          "name": "Marketing Readiness Checklist - LIVE Script",
          "url": "https://script.google.com/home/projects/1pR3y800ZLbJdmLXnsJPrdzYcG6tRSuzceZHmuvSCDeM2gF7_UTMb5gum/edit",
          "notes": "LIVE script from Hub registry. Audit: API: AppFolio signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 34,
          "assetType": "Folder",
          "name": "Marketing Readiness Checklist - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1VmcBk6pU21HF7z3f6IyT2UuvqnSENriT",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 89,
          "assetType": "Script",
          "name": "Marketing Readiness Checklist - DEV Script",
          "url": "https://script.google.com/home/projects/1pqxSRGRFtlwxeuXpy_UV9QLxJRuEfydasatmLp6xO0SWkLlEKh2xhWnO/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Marketing Readiness Checklist - GitHub Repo",
          "url": "https://github.com/RichRock27/mrc.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v104 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "owner_directory",
      "projectName": "Owner Directory",
      "projectSlug": "owner-directory",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "LIVE v15 and DEV v10 verified and synchronized. Owner Directory now uses AppFolio Reports API v2; Territory 18 Greenleaf/Villa Verde vacancy matching is fixed; local and GitHub main mirror the verified release.",
      "registryRow": 17,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbzB31GfdQiij6bLX1OhrC1vUTYyZDznvqb4Tv1jOD-UrVC5wNOjUCl2QHhQwVYhB7TxDw/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycby9oIrAWWQ7etI6_sF7aAG98PJNtd9wd-HzgRFL__DQ_m6tUZhr2nMfs9lASh4YteMtiA/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1e3u2luxnbdkGGpx90hkIimE-42ux-S90gMl65_URfpIyS5u-mf8b_6nm/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1k3EVld0YcO07DbeloPKBPUtwuiV4CYfIq6tKHSgmwq2mof-CfF92M3TU/edit",
      "liveScriptId": "1e3u2luxnbdkGGpx90hkIimE-42ux-S90gMl65_URfpIyS5u-mf8b_6nm",
      "devScriptId": "1k3EVld0YcO07DbeloPKBPUtwuiV4CYfIq6tKHSgmwq2mof-CfF92M3TU",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1h9a_-Sy6SiB7vFwxyKpQq-shrlqZQ02a",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/owner-directory/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/owner-directory",
      "missingItems": "",
      "lastVerified": "2026-06-18",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "",
      "promotionNotes": "LIVE v15, DEV v10, local workspace, and GitHub main are synchronized. GitHub PR #1 merged as c16b80a.",
      "dataSourceAudit": "API: AppFolio Reports API v2 verified; all six sources OK",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "LIVE v15 authenticated fetch/rebuild passed. Territory 18 now reports 86 units, 16 vacancies, and 81% occupied; Force Update and Exclude Evict defaults verified.",
      "deployments": [
        {
          "registryRow": 16,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzB31GfdQiij6bLX1OhrC1vUTYyZDznvqb4Tv1jOD-UrVC5wNOjUCl2QHhQwVYhB7TxDw/exec",
          "deploymentId": "AKfycbzB31GfdQiij6bLX1OhrC1vUTYyZDznvqb4Tv1jOD-UrVC5wNOjUCl2QHhQwVYhB7TxDw",
          "pinnedVersion": "15",
          "badge": "LIVE",
          "lastVerified": "2026-06-18"
        },
        {
          "registryRow": 48,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycby9oIrAWWQ7etI6_sF7aAG98PJNtd9wd-HzgRFL__DQ_m6tUZhr2nMfs9lASh4YteMtiA/exec",
          "deploymentId": "AKfycby9oIrAWWQ7etI6_sF7aAG98PJNtd9wd-HzgRFL__DQ_m6tUZhr2nMfs9lASh4YteMtiA",
          "pinnedVersion": "10",
          "badge": "DEV",
          "lastVerified": "2026-06-18"
        }
      ],
      "assets": [
        {
          "registryRow": 35,
          "assetType": "Script",
          "name": "Owner Directory - LIVE Script",
          "url": "https://script.google.com/home/projects/1e3u2luxnbdkGGpx90hkIimE-42ux-S90gMl65_URfpIyS5u-mf8b_6nm/edit",
          "notes": "Verified LIVE v15. AppFolio Reports API v2 migration and Territory 18 vacancy matching fix deployed successfully.",
          "critical": true,
          "lastVerified": "2026-06-18"
        },
        {
          "registryRow": 36,
          "assetType": "Folder",
          "name": "Owner Directory - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1h9a_-Sy6SiB7vFwxyKpQq-shrlqZQ02a",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working); DEV v10 mirrors verified LIVE v15.",
          "critical": true,
          "lastVerified": "2026-06-18"
        },
        {
          "registryRow": 90,
          "assetType": "Script",
          "name": "Owner Directory - DEV Script",
          "url": "https://script.google.com/home/projects/1k3EVld0YcO07DbeloPKBPUtwuiV4CYfIq6tKHSgmwq2mof-CfF92M3TU/edit",
          "notes": "DEV v10 mirrors verified LIVE v15, including AppFolio Reports API v2 and the Territory 18 vacancy fix.",
          "critical": true,
          "lastVerified": "2026-06-18"
        },
        {
          "registryRow": 108,
          "assetType": "Other",
          "name": "Owner Directory - GitHub Repo",
          "url": "https://github.com/RichRock27/od",
          "notes": "Canonical source mirror. PR #1 merged to main as commit c16b80a after synchronization with verified LIVE v15.",
          "critical": true,
          "lastVerified": "2026-06-18"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "LIVE v15, DEV v10, local workspace, and GitHub main commit c16b80a are verified and synchronized."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": true
      }
    },
    {
      "projectId": "new_hire_intro_builder",
      "projectName": "New Hire Intro Builder",
      "projectSlug": "new-hire-intro-builder",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 18,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbwig8XPh6uF5teEMRV04dM1Nyea_cq7feNpcIzuq10CzECtKhQ25qece0zLbdRQqbUK/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbwmnGggfEAUN_ZoI5k3nHLabdvIu4fehxjyMuZ8qfskoRbx39E4MkDGstciMeEoRaYzVQ/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/14SxalHP6fQW7D_-lgI5H110NlXAPDdV0lVpJmzHBk-j8U7MUe_FXqIef/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1fgDzYPY1i_WJT7oDIDKfnOyUPqdGXnEJua4_SppShzgXKVYapfqTt6Dw/edit",
      "liveScriptId": "14SxalHP6fQW7D_-lgI5H110NlXAPDdV0lVpJmzHBk-j8U7MUe_FXqIef",
      "devScriptId": "1fgDzYPY1i_WJT7oDIDKfnOyUPqdGXnEJua4_SppShzgXKVYapfqTt6Dw",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/17CW5mcoX-YMN9bdGIMdUTKrb1rzIHJZD",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/new-hire-intro-builder/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/new-hire-intro-builder",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v29 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 17,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwig8XPh6uF5teEMRV04dM1Nyea_cq7feNpcIzuq10CzECtKhQ25qece0zLbdRQqbUK/exec",
          "deploymentId": "AKfycbwig8XPh6uF5teEMRV04dM1Nyea_cq7feNpcIzuq10CzECtKhQ25qece0zLbdRQqbUK",
          "pinnedVersion": "29",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 49,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwmnGggfEAUN_ZoI5k3nHLabdvIu4fehxjyMuZ8qfskoRbx39E4MkDGstciMeEoRaYzVQ/exec",
          "deploymentId": "AKfycbwmnGggfEAUN_ZoI5k3nHLabdvIu4fehxjyMuZ8qfskoRbx39E4MkDGstciMeEoRaYzVQ",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 37,
          "assetType": "Script",
          "name": "New Hire Intro Builder - LIVE Script",
          "url": "https://script.google.com/home/projects/14SxalHP6fQW7D_-lgI5H110NlXAPDdV0lVpJmzHBk-j8U7MUe_FXqIef/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 38,
          "assetType": "Folder",
          "name": "New Hire Intro Builder - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/17CW5mcoX-YMN9bdGIMdUTKrb1rzIHJZD",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 91,
          "assetType": "Script",
          "name": "New Hire Intro Builder - DEV Script",
          "url": "https://script.google.com/home/projects/1fgDzYPY1i_WJT7oDIDKfnOyUPqdGXnEJua4_SppShzgXKVYapfqTt6Dw/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "New Hire Intro Builder - GitHub Repo",
          "url": "https://github.com/RichRock27/nhi.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v29 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "vacancy_scope",
      "projectName": "Vacancy Scope",
      "projectSlug": "vacancy-scope",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 19,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbxjr2zZlEzAeCga69Ylp0w2LlVpb2ZSwqR0vcHaxQelWd02yaH5E2oEbvJGiDCndbRUQg/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbwohT2Bo8Ss-EpaTkSRfIf5aYlVHx7ZQBZw9DYMe0Ife8flvybOPUSBBZyBUfeoZ8FF/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1ABPzIMhMJ72blESEjrhPGVtvq53PI1JzolL1rpyEwIeq5SBvfus_WhdZ/edit",
      "devScriptUrl": "https://script.google.com/home/projects/14dEEJBNJt2RO9myQWyZU_RRjZgJApKzCDBvPx-q7wN64SwkbIMqv2g60/edit",
      "liveScriptId": "1ABPzIMhMJ72blESEjrhPGVtvq53PI1JzolL1rpyEwIeq5SBvfus_WhdZ",
      "devScriptId": "14dEEJBNJt2RO9myQWyZU_RRjZgJApKzCDBvPx-q7wN64SwkbIMqv2g60",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1Wuibp1OoM296K-oHpbQyj43Jqs1UW6hR",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/vacancy-scope/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/vacancy-scope",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v22 identified; DEV missing; conflicting local references remain review-only. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 18,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxjr2zZlEzAeCga69Ylp0w2LlVpb2ZSwqR0vcHaxQelWd02yaH5E2oEbvJGiDCndbRUQg/exec",
          "deploymentId": "AKfycbxjr2zZlEzAeCga69Ylp0w2LlVpb2ZSwqR0vcHaxQelWd02yaH5E2oEbvJGiDCndbRUQg",
          "pinnedVersion": "22",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 50,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwohT2Bo8Ss-EpaTkSRfIf5aYlVHx7ZQBZw9DYMe0Ife8flvybOPUSBBZyBUfeoZ8FF/exec",
          "deploymentId": "AKfycbwohT2Bo8Ss-EpaTkSRfIf5aYlVHx7ZQBZw9DYMe0Ife8flvybOPUSBBZyBUfeoZ8FF",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 39,
          "assetType": "Script",
          "name": "Vacancy Scope - LIVE Script",
          "url": "https://script.google.com/home/projects/1ABPzIMhMJ72blESEjrhPGVtvq53PI1JzolL1rpyEwIeq5SBvfus_WhdZ/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 40,
          "assetType": "Folder",
          "name": "Vacancy Scope - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1Wuibp1OoM296K-oHpbQyj43Jqs1UW6hR",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 92,
          "assetType": "Script",
          "name": "Vacancy Scope - DEV Script",
          "url": "https://script.google.com/home/projects/14dEEJBNJt2RO9myQWyZU_RRjZgJApKzCDBvPx-q7wN64SwkbIMqv2g60/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Vacancy Scope - GitHub Repo",
          "url": "https://github.com/RichRock27/vs.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v22 identified; DEV missing; conflicting local references remain review-only. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": true
      }
    },
    {
      "projectId": "property_directory",
      "projectName": "Property Directory",
      "projectSlug": "property-directory",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 20,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbxpEmOxlPk1FihbC0SN781hqOSwdBakLevpFdeBneNkxT7T1AEHQjsBU8_R6Fx3ulOT/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbzI-ON6iafceOUJQ2A7vO8l8svQsuf8DO77hpkggI5aY1NCWCgwZ15aYqjTOpsHhwZW/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1aeyESH70zD4a6_AGES5OdSnF4JDj-kMqEAn1sTm0pQit4wMz30gNCbG6/edit",
      "devScriptUrl": "https://script.google.com/home/projects/14JcU5RHTBJnKsj-BV6JwNOuedbCSNbOszxdQ4-zJl6htFWSRdhe80AFs/edit",
      "liveScriptId": "1aeyESH70zD4a6_AGES5OdSnF4JDj-kMqEAn1sTm0pQit4wMz30gNCbG6",
      "devScriptId": "14JcU5RHTBJnKsj-BV6JwNOuedbCSNbOszxdQ4-zJl6htFWSRdhe80AFs",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1Afdn8yDW9s8qPnZ2fa0-WJDgT4_1_t-F",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/property-directory/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/property-directory",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v62 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 19,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxpEmOxlPk1FihbC0SN781hqOSwdBakLevpFdeBneNkxT7T1AEHQjsBU8_R6Fx3ulOT/exec",
          "deploymentId": "AKfycbxpEmOxlPk1FihbC0SN781hqOSwdBakLevpFdeBneNkxT7T1AEHQjsBU8_R6Fx3ulOT",
          "pinnedVersion": "62",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 51,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzI-ON6iafceOUJQ2A7vO8l8svQsuf8DO77hpkggI5aY1NCWCgwZ15aYqjTOpsHhwZW/exec",
          "deploymentId": "AKfycbzI-ON6iafceOUJQ2A7vO8l8svQsuf8DO77hpkggI5aY1NCWCgwZ15aYqjTOpsHhwZW",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 41,
          "assetType": "Script",
          "name": "Property Directory - LIVE Script",
          "url": "https://script.google.com/home/projects/1aeyESH70zD4a6_AGES5OdSnF4JDj-kMqEAn1sTm0pQit4wMz30gNCbG6/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 42,
          "assetType": "Folder",
          "name": "Property Directory - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1Afdn8yDW9s8qPnZ2fa0-WJDgT4_1_t-F",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 93,
          "assetType": "Script",
          "name": "Property Directory - DEV Script",
          "url": "https://script.google.com/home/projects/14JcU5RHTBJnKsj-BV6JwNOuedbCSNbOszxdQ4-zJl6htFWSRdhe80AFs/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Property Directory - GitHub Repo",
          "url": "https://github.com/RichRock27/pd.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v62 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": true
      }
    },
    {
      "projectId": "owner_board",
      "projectName": "Owner Specific Dashboard",
      "projectSlug": "owner-specific-dashboard",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 21,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbzcBbfeXancte7uirmlrSVMkBoZ8fcIePhlVVOOi_MQsWiE_C_gzooqD8FF3cN9xWSZNQ/exec?owner_board=true",
      "devUrl": "https://script.google.com/macros/s/AKfycbzh-62ttcvgabv12fftJOdDj_HLDft9mQ6Sv1vOcPhGmgE8B4jorFD5LtRc-Tek7rjOYQ/exec?owner_board=true",
      "liveScriptUrl": "https://script.google.com/home/projects/1rnQEXxDoEfmkBtZ3_08t36UsIF8BlCB5uBhXXIwdpPA3UEenLkNZH7_v/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1JNdfgyxo_aEZgCYPeCYSALzp_ZLxl5oLjfX8ywxabp9zEJprMGI4EbUQ/edit",
      "liveScriptId": "1rnQEXxDoEfmkBtZ3_08t36UsIF8BlCB5uBhXXIwdpPA3UEenLkNZH7_v",
      "devScriptId": "1JNdfgyxo_aEZgCYPeCYSALzp_ZLxl5oLjfX8ywxabp9zEJprMGI4EbUQ",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1xt5RKMPnNfiZrbi7y3kIQwaNUkfo1vvb",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/owner-specific-dashboard/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/owner-specific-dashboard",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "API: other external API signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE review required; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 20,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzcBbfeXancte7uirmlrSVMkBoZ8fcIePhlVVOOi_MQsWiE_C_gzooqD8FF3cN9xWSZNQ/exec?owner_board=true",
          "deploymentId": "AKfycbzcBbfeXancte7uirmlrSVMkBoZ8fcIePhlVVOOi_MQsWiE_C_gzooqD8FF3cN9xWSZNQ",
          "pinnedVersion": "",
          "badge": "LIVE",
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 61,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzh-62ttcvgabv12fftJOdDj_HLDft9mQ6Sv1vOcPhGmgE8B4jorFD5LtRc-Tek7rjOYQ/exec?owner_board=true",
          "deploymentId": "AKfycbzh-62ttcvgabv12fftJOdDj_HLDft9mQ6Sv1vOcPhGmgE8B4jorFD5LtRc-Tek7rjOYQ",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 43,
          "assetType": "Script",
          "name": "Owner Specific Dashboard - LIVE Script",
          "url": "https://script.google.com/home/projects/1rnQEXxDoEfmkBtZ3_08t36UsIF8BlCB5uBhXXIwdpPA3UEenLkNZH7_v/edit",
          "notes": "LIVE script from Hub registry. Audit: API: other external API signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 44,
          "assetType": "Folder",
          "name": "Owner Specific Dashboard - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1xt5RKMPnNfiZrbi7y3kIQwaNUkfo1vvb",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 103,
          "assetType": "Script",
          "name": "Owner Specific Dashboard - DEV Script",
          "url": "https://script.google.com/home/projects/1JNdfgyxo_aEZgCYPeCYSALzp_ZLxl5oLjfX8ywxabp9zEJprMGI4EbUQ/edit",
          "notes": "Official DEV Apps Script project created from registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Owner Specific Dashboard - GitHub Repo",
          "url": "https://github.com/RichRock27/Property_Dashboard.git",
          "notes": "Private GitHub source repo verified from the archived local project mirror.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE review required; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": true
      }
    },
    {
      "projectId": "key_keeper_2000",
      "projectName": "Key Inventory Database (KID)",
      "projectSlug": "key-keeper-2000",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "LIVE v21 verified on 2026-06-24 after overdue key list, manual overdue reminder action with routing fallback, Control Center confirm action fix, responsive narrow-browser layout, KID rename, AppFolio sync, KID/CIP user handling, and authorized-user manager updates.",
      "registryRow": 22,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbwvwKt7l0VA4WBD85_iGo2NCFnkVeEmwvCBQwRvPc0dcKFS8K1wyT80ST7OPgoCY1Et/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbxEwzljhyraLlp5eWDX7utt_ZmzsZB1XiSYLYxAZYducSoR-tGSas-r0nfCDTeNOpBGDg/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1Bm4bz3w0jyhHzJGk6wJ7QWgQAfeh78LifjU2G9pxZftsOhR_8584vdaY/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1h6PW2C4hbu56DKQ5J74uyq0RbHH1BXNUrrXUDLfxzHkxlQlF_Sm_Q_30/edit",
      "liveScriptId": "1Bm4bz3w0jyhHzJGk6wJ7QWgQAfeh78LifjU2G9pxZftsOhR_8584vdaY",
      "devScriptId": "1h6PW2C4hbu56DKQ5J74uyq0RbHH1BXNUrrXUDLfxzHkxlQlF_Sm_Q_30",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1QGClX9wLf_UfqFR7rat2tiZ_UXM-JNMf",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/key-keeper-2000/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/key-keeper-2000",
      "missingItems": "",
      "lastVerified": "2026-06-24",
      "readyForLive": "LIVE v21 verified on 2026-06-24; DEV source promoted",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "KID DEV promoted to LIVE v21 on 2026-06-24. LIVE source verified against DEV/local after promotion.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v3 identified; DEV missing; duplicate candidates remain review-only. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 21,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwvwKt7l0VA4WBD85_iGo2NCFnkVeEmwvCBQwRvPc0dcKFS8K1wyT80ST7OPgoCY1Et/exec",
          "deploymentId": "AKfycbwvwKt7l0VA4WBD85_iGo2NCFnkVeEmwvCBQwRvPc0dcKFS8K1wyT80ST7OPgoCY1Et",
          "pinnedVersion": "21",
          "badge": "LIVE",
          "lastVerified": "2026-06-24"
        },
        {
          "registryRow": 52,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxEwzljhyraLlp5eWDX7utt_ZmzsZB1XiSYLYxAZYducSoR-tGSas-r0nfCDTeNOpBGDg/exec",
          "deploymentId": "AKfycbxEwzljhyraLlp5eWDX7utt_ZmzsZB1XiSYLYxAZYducSoR-tGSas-r0nfCDTeNOpBGDg",
          "pinnedVersion": "21",
          "badge": "DEV",
          "lastVerified": "2026-06-24"
        }
      ],
      "assets": [
        {
          "registryRow": 45,
          "assetType": "Script",
          "name": "Key Inventory Database (KID) - LIVE Script",
          "url": "https://script.google.com/home/projects/1Bm4bz3w0jyhHzJGk6wJ7QWgQAfeh78LifjU2G9pxZftsOhR_8584vdaY/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-06-22"
        },
        {
          "registryRow": 46,
          "assetType": "Folder",
          "name": "Key Inventory Database (KID) - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1QGClX9wLf_UfqFR7rat2tiZ_UXM-JNMf",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-06-22"
        },
        {
          "registryRow": 94,
          "assetType": "Script",
          "name": "Key Inventory Database (KID) - DEV Script",
          "url": "https://script.google.com/home/projects/1h6PW2C4hbu56DKQ5J74uyq0RbHH1BXNUrrXUDLfxzHkxlQlF_Sm_Q_30/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-06-22"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Key Inventory Database (KID) - GitHub Repo",
          "url": "https://github.com/RichRock27/Key_Keeper.git",
          "notes": "Private GitHub source repo verified from the archived local project mirror.",
          "critical": true,
          "lastVerified": "2026-06-22"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v3 identified; DEV missing; duplicate candidates remain review-only. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "team_portal",
      "projectName": "Team Portal",
      "projectSlug": "team-portal",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 23,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbwpQPAKBmfxlJ-fMzcFyYoxIR57VY7Cbn1QnOADOOcdv2NN0Sz5cuEQzvC7XoC1JOng/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbzBONvtsDD7t7p_gvs8yg3Q5jayMHagDERfrp56tjUxcsfoqJSacnMfjymopLLxd-h6lg/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1Z0jmLeK32JEJ9oPcsuTNZj1FJebqOujekdM2BRV5RHMKzmWLRw2hU2Uj/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1qgOLBBVc3Y1bMcan2Jxb-CxnJ_cjMzHeiEXIzr3jBpjScpDNxPrrXAqf/edit",
      "liveScriptId": "1Z0jmLeK32JEJ9oPcsuTNZj1FJebqOujekdM2BRV5RHMKzmWLRw2hU2Uj",
      "devScriptId": "1qgOLBBVc3Y1bMcan2Jxb-CxnJ_cjMzHeiEXIzr3jBpjScpDNxPrrXAqf",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1XwbLS1f3L29XBif-a1LELzWyImhoMX93",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/team-portal/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/team-portal",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "UNCLEAR / not data-driven",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v2 identified; DEV missing; duplicate candidates remain review-only. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 22,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwpQPAKBmfxlJ-fMzcFyYoxIR57VY7Cbn1QnOADOOcdv2NN0Sz5cuEQzvC7XoC1JOng/exec",
          "deploymentId": "AKfycbwpQPAKBmfxlJ-fMzcFyYoxIR57VY7Cbn1QnOADOOcdv2NN0Sz5cuEQzvC7XoC1JOng",
          "pinnedVersion": "2",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 53,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzBONvtsDD7t7p_gvs8yg3Q5jayMHagDERfrp56tjUxcsfoqJSacnMfjymopLLxd-h6lg/exec",
          "deploymentId": "AKfycbzBONvtsDD7t7p_gvs8yg3Q5jayMHagDERfrp56tjUxcsfoqJSacnMfjymopLLxd-h6lg",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 47,
          "assetType": "Script",
          "name": "Team Portal - LIVE Script",
          "url": "https://script.google.com/home/projects/1Z0jmLeK32JEJ9oPcsuTNZj1FJebqOujekdM2BRV5RHMKzmWLRw2hU2Uj/edit",
          "notes": "LIVE script from Hub registry. Audit: UNCLEAR / not data-driven",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 48,
          "assetType": "Folder",
          "name": "Team Portal - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1XwbLS1f3L29XBif-a1LELzWyImhoMX93",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 95,
          "assetType": "Script",
          "name": "Team Portal - DEV Script",
          "url": "https://script.google.com/home/projects/1qgOLBBVc3Y1bMcan2Jxb-CxnJ_cjMzHeiEXIzr3jBpjScpDNxPrrXAqf/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Team Portal - GitHub Repo",
          "url": "https://github.com/RichRock27/Team_Portal_GAS.git",
          "notes": "Private GitHub source repo verified from the archived local project mirror.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v2 identified; DEV missing; duplicate candidates remain review-only. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "leasing_fee_audit",
      "projectName": "Leasing Fee Audit",
      "projectSlug": "leasing-fee-audit",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 24,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbyzLRh_NTcGJwQsY4If9raiL6j5tSY5Z4KZ_fP4JwU31i0wqp5qy8cR3-9JT7SidmZcQw/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbwmdHufyTf-VNQHiSiruna59_PJ3ckRFsR4I9fZDRVlkz6h6ZOqSQCHohqPsfJNmhMQ5w/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1CyQLPxltgr5IE_QbQKez8XP29PfnGUhkek4GoQmw30gNouNilUZS8WHj/edit",
      "devScriptUrl": "https://script.google.com/home/projects/12uezl6YJRMrF9zW_0_aMUUe01Sn9Q192CQbSAeGwQlZ-CYpVXQhyqv5B/edit",
      "liveScriptId": "1CyQLPxltgr5IE_QbQKez8XP29PfnGUhkek4GoQmw30gNouNilUZS8WHj",
      "devScriptId": "12uezl6YJRMrF9zW_0_aMUUe01Sn9Q192CQbSAeGwQlZ-CYpVXQhyqv5B",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1JPQnKnGvkxt6GfHBBLEclb0RyXdkBVrP",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/leasing-fee-audit/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/leasing-fee-audit",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "API: AppFolio signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Batch 1 governance normalization: LIVE v32 verified; DEV not established. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 23,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyzLRh_NTcGJwQsY4If9raiL6j5tSY5Z4KZ_fP4JwU31i0wqp5qy8cR3-9JT7SidmZcQw/exec",
          "deploymentId": "AKfycbyzLRh_NTcGJwQsY4If9raiL6j5tSY5Z4KZ_fP4JwU31i0wqp5qy8cR3-9JT7SidmZcQw",
          "pinnedVersion": "32",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 59,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwmdHufyTf-VNQHiSiruna59_PJ3ckRFsR4I9fZDRVlkz6h6ZOqSQCHohqPsfJNmhMQ5w/exec",
          "deploymentId": "AKfycbwmdHufyTf-VNQHiSiruna59_PJ3ckRFsR4I9fZDRVlkz6h6ZOqSQCHohqPsfJNmhMQ5w",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 49,
          "assetType": "Script",
          "name": "Leasing Fee Audit - LIVE Script",
          "url": "https://script.google.com/home/projects/1CyQLPxltgr5IE_QbQKez8XP29PfnGUhkek4GoQmw30gNouNilUZS8WHj/edit",
          "notes": "LIVE script from Hub registry. Audit: API: AppFolio signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 50,
          "assetType": "Folder",
          "name": "Leasing Fee Audit - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1JPQnKnGvkxt6GfHBBLEclb0RyXdkBVrP",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 101,
          "assetType": "Script",
          "name": "Leasing Fee Audit - DEV Script",
          "url": "https://script.google.com/home/projects/12uezl6YJRMrF9zW_0_aMUUe01Sn9Q192CQbSAeGwQlZ-CYpVXQhyqv5B/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Leasing Fee Audit - GitHub Repo",
          "url": "https://github.com/RichRock27/Unbilled_Fee_Audit.git",
          "notes": "Private GitHub source repo verified from the archived local project mirror.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Batch 1 governance normalization: LIVE v32 verified; DEV not established. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "demand_generator",
      "projectName": "Demand Generator",
      "projectSlug": "demand-generator",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 25,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbwVjS2wMi6N1KkC4onYy3Hi4OrES0vwC1yCqShN1nx4gfPPClhR1g4w6OEjmTH-BHA6/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycby8PdAOVjd9V47YTahn13-UNxri_rA2YH9l5jpUmd44cQUsKE11ice7i_cmzjuy2nbj/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1BNhn9j-06yzQwfsv7PXweWdsxj34FlSnYpNSeA54EtG_FRPmErlrd1ZE/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1yTqkThFxDsBdVbG032W5zGQ8uYAhnLVFljaZXx_6220bF6QzBtlTCaqn/edit",
      "liveScriptId": "1BNhn9j-06yzQwfsv7PXweWdsxj34FlSnYpNSeA54EtG_FRPmErlrd1ZE",
      "devScriptId": "1yTqkThFxDsBdVbG032W5zGQ8uYAhnLVFljaZXx_6220bF6QzBtlTCaqn",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1zRn-TFd-FXZDh2jticb5xrIu9UM7U80H",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/demand-generator/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/demand-generator",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v39 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 24,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwVjS2wMi6N1KkC4onYy3Hi4OrES0vwC1yCqShN1nx4gfPPClhR1g4w6OEjmTH-BHA6/exec",
          "deploymentId": "AKfycbwVjS2wMi6N1KkC4onYy3Hi4OrES0vwC1yCqShN1nx4gfPPClhR1g4w6OEjmTH-BHA6",
          "pinnedVersion": "39",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 54,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycby8PdAOVjd9V47YTahn13-UNxri_rA2YH9l5jpUmd44cQUsKE11ice7i_cmzjuy2nbj/exec",
          "deploymentId": "AKfycby8PdAOVjd9V47YTahn13-UNxri_rA2YH9l5jpUmd44cQUsKE11ice7i_cmzjuy2nbj",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 51,
          "assetType": "Script",
          "name": "Demand Generator - LIVE Script",
          "url": "https://script.google.com/home/projects/1BNhn9j-06yzQwfsv7PXweWdsxj34FlSnYpNSeA54EtG_FRPmErlrd1ZE/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 52,
          "assetType": "Folder",
          "name": "Demand Generator - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1zRn-TFd-FXZDh2jticb5xrIu9UM7U80H",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 96,
          "assetType": "Script",
          "name": "Demand Generator - DEV Script",
          "url": "https://script.google.com/home/projects/1yTqkThFxDsBdVbG032W5zGQ8uYAhnLVFljaZXx_6220bF6QzBtlTCaqn/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Demand Generator - GitHub Repo",
          "url": "https://github.com/RichRock27/dg.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v39 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "key_lookup_tool",
      "projectName": "Key Lookup Tool",
      "projectSlug": "key-lookup-tool",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 26,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbxTEB0brAZ8mcePUQJLHiUotFshC6JKTPLDvQu--pp5aN1R58eUhhIKbIV7KP36A7eM/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbxdiZkjfYU0eBS0eavqjt40yikFhNDsttf52NcCYREATh2fudUSOmch3yFhYT5fbL0v/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1S2l8tbMBOsdWmlM4hYmL-MWtkMlrgYqnPTcfKU6sdfdSIWcIiSbmspxY/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1gXyyEqnbAOkIYUHLMAzDIFZERMi5QLoyffSCbS_-5PsNAanBZTgxFif1/edit",
      "liveScriptId": "1S2l8tbMBOsdWmlM4hYmL-MWtkMlrgYqnPTcfKU6sdfdSIWcIiSbmspxY",
      "devScriptId": "1gXyyEqnbAOkIYUHLMAzDIFZERMi5QLoyffSCbS_-5PsNAanBZTgxFif1",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1yoT2Z5WE6SVRE2Dq506EArAQWa0GcOLD",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/key-lookup-tool/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/key-lookup-tool",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v35 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 25,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxTEB0brAZ8mcePUQJLHiUotFshC6JKTPLDvQu--pp5aN1R58eUhhIKbIV7KP36A7eM/exec",
          "deploymentId": "AKfycbxTEB0brAZ8mcePUQJLHiUotFshC6JKTPLDvQu--pp5aN1R58eUhhIKbIV7KP36A7eM",
          "pinnedVersion": "35",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 55,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxdiZkjfYU0eBS0eavqjt40yikFhNDsttf52NcCYREATh2fudUSOmch3yFhYT5fbL0v/exec",
          "deploymentId": "AKfycbxdiZkjfYU0eBS0eavqjt40yikFhNDsttf52NcCYREATh2fudUSOmch3yFhYT5fbL0v",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 53,
          "assetType": "Script",
          "name": "Key Lookup Tool - LIVE Script",
          "url": "https://script.google.com/home/projects/1S2l8tbMBOsdWmlM4hYmL-MWtkMlrgYqnPTcfKU6sdfdSIWcIiSbmspxY/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 54,
          "assetType": "Folder",
          "name": "Key Lookup Tool - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1yoT2Z5WE6SVRE2Dq506EArAQWa0GcOLD",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 97,
          "assetType": "Script",
          "name": "Key Lookup Tool - DEV Script",
          "url": "https://script.google.com/home/projects/1gXyyEqnbAOkIYUHLMAzDIFZERMi5QLoyffSCbS_-5PsNAanBZTgxFif1/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Key Lookup Tool - GitHub Repo",
          "url": "https://github.com/RichRock27/klt.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v35 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "ice_breakers",
      "projectName": "Ice Breakers",
      "projectSlug": "ice-breakers",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "LIVE Web App set to verified local HTML version 2026-05-10_FULL_TEST_220341/index.html on 2026-05-27. DEV Apps Script kept as registry DEV workspace.",
      "registryRow": 27,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "file:///Users/richgreen/Library/CloudStorage/GoogleDrive-rich@propalliance.com/My%20Drive/_ACTIVE_PROJECTS/_ACTIVE_PROJECTS/_GOVERNANCE_BACKUPS/LIVE_BACKUPS/2026-05-10_FULL_TEST_220341/AppsScript/Ice_Breakers/index.html",
      "devUrl": "https://script.google.com/macros/s/AKfycbxchNi2UPSv4bd0kCdt_CsQnUKmU9ZQtuOQ91wjDtsiU3xRXXFVgUrdywsHG1XUs-hv/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1Yrp_TI9ldAILKZG7id9GM7SM63nuI_KsCeXjvpEuHqe6QD2fv4HF6tsb/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1PkcwWNYm8m-V-viHworFvVxy3gHT6MKzjdn-lGsjTopDzHf3dU33ubP2/edit",
      "liveScriptId": "1Yrp_TI9ldAILKZG7id9GM7SM63nuI_KsCeXjvpEuHqe6QD2fv4HF6tsb",
      "devScriptId": "1PkcwWNYm8m-V-viHworFvVxy3gHT6MKzjdn-lGsjTopDzHf3dU33ubP2",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1Cg4CcU7mNLPlvzjSEu-YlFhorOkXDX48",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/ice-breakers/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Library/CloudStorage/GoogleDrive-rich@propalliance.com/My Drive/_ACTIVE_PROJECTS/_ACTIVE_PROJECTS/_GOVERNANCE_BACKUPS/LIVE_BACKUPS/2026-05-10_FULL_TEST_220341/AppsScript/Ice_Breakers/index.html",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "UNCLEAR / not data-driven",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v24 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. Verified LIVE HTML: /Users/richgreen/Library/CloudStorage/GoogleDrive-rich@propalliance.com/My Drive/_ACTIVE_PROJECTS/_ACTIVE_PROJECTS/_GOVERNANCE_BACKUPS/LIVE_BACKUPS/2026-05-10_FULL_TEST_220341/AppsScript/Ice_Breakers/index.html",
      "deployments": [
        {
          "registryRow": 26,
          "env": "LIVE",
          "webAppUrl": "file:///Users/richgreen/Library/CloudStorage/GoogleDrive-rich@propalliance.com/My%20Drive/_ACTIVE_PROJECTS/_ACTIVE_PROJECTS/_GOVERNANCE_BACKUPS/LIVE_BACKUPS/2026-05-10_FULL_TEST_220341/AppsScript/Ice_Breakers/index.html",
          "deploymentId": "LOCAL_HTML_2026-05-10_FULL_TEST_220341",
          "pinnedVersion": "2026-05-10_FULL_TEST_220341",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 56,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxchNi2UPSv4bd0kCdt_CsQnUKmU9ZQtuOQ91wjDtsiU3xRXXFVgUrdywsHG1XUs-hv/exec",
          "deploymentId": "AKfycbxchNi2UPSv4bd0kCdt_CsQnUKmU9ZQtuOQ91wjDtsiU3xRXXFVgUrdywsHG1XUs-hv",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 55,
          "assetType": "Script",
          "name": "Ice Breakers - LIVE Script",
          "url": "https://script.google.com/home/projects/1Yrp_TI9ldAILKZG7id9GM7SM63nuI_KsCeXjvpEuHqe6QD2fv4HF6tsb/edit",
          "notes": "LIVE script from Hub registry. Audit: UNCLEAR / not data-driven",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 56,
          "assetType": "Folder",
          "name": "Ice Breakers - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1Cg4CcU7mNLPlvzjSEu-YlFhorOkXDX48",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 9901,
          "assetType": "File",
          "name": "Ice Breakers - Verified LIVE HTML",
          "url": "file:///Users/richgreen/Library/CloudStorage/GoogleDrive-rich@propalliance.com/My%20Drive/_ACTIVE_PROJECTS/_ACTIVE_PROJECTS/_GOVERNANCE_BACKUPS/LIVE_BACKUPS/2026-05-10_FULL_TEST_220341/AppsScript/Ice_Breakers/index.html",
          "notes": "Exact local HTML version requested as Ice Breakers reference: 2026-05-10_FULL_TEST_220341 AppsScript/Ice_Breakers/index.html.",
          "critical": true,
          "lastVerified": "2026-05-27"
        },
        {
          "registryRow": 98,
          "assetType": "Script",
          "name": "Ice Breakers - DEV Script",
          "url": "https://script.google.com/home/projects/1PkcwWNYm8m-V-viHworFvVxy3gHT6MKzjdn-lGsjTopDzHf3dU33ubP2/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Ice Breakers - GitHub Repo",
          "url": "https://github.com/RichRock27/ib.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v24 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "fitz_make_ready_board",
      "projectName": "Fitz Make Ready Board",
      "projectSlug": "fitz-make-ready-board",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 28,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbzo6QsZtbbN_F15I3pkt9dSGL9rFRP1S6HKSuTDuuH6CLAMCLtK3C8Cl_vQeiOJVeh7/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbxqZe8ZwQHaGnRIKKl-M8iOxfMUGd1-zZZn0EU36eFFieBQGr7XaxXnINiwg_oQO9Ct/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1RjbHmVyFIi4HGre-1dVMBmA9Pvb6ZUdO8iMz_Byawbi-mgZN-YUE34iQ/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1AjvYBOaylwnHYBH2mILBVlowlWGzZWk6T2NeQ-NExwU6rEB8mvZaxRNi/edit",
      "liveScriptId": "1RjbHmVyFIi4HGre-1dVMBmA9Pvb6ZUdO8iMz_Byawbi-mgZN-YUE34iQ",
      "devScriptId": "1AjvYBOaylwnHYBH2mILBVlowlWGzZWk6T2NeQ-NExwU6rEB8mvZaxRNi",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/14WEbCzmm75cq2aXVbhzGtNwar-JgBHmv",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/fitz-make-ready-board/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/fitz-make-ready-board",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v61 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 27,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzo6QsZtbbN_F15I3pkt9dSGL9rFRP1S6HKSuTDuuH6CLAMCLtK3C8Cl_vQeiOJVeh7/exec",
          "deploymentId": "AKfycbzo6QsZtbbN_F15I3pkt9dSGL9rFRP1S6HKSuTDuuH6CLAMCLtK3C8Cl_vQeiOJVeh7",
          "pinnedVersion": "61",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 57,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxqZe8ZwQHaGnRIKKl-M8iOxfMUGd1-zZZn0EU36eFFieBQGr7XaxXnINiwg_oQO9Ct/exec",
          "deploymentId": "AKfycbxqZe8ZwQHaGnRIKKl-M8iOxfMUGd1-zZZn0EU36eFFieBQGr7XaxXnINiwg_oQO9Ct",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 57,
          "assetType": "Script",
          "name": "Fitz Make Ready Board - LIVE Script",
          "url": "https://script.google.com/home/projects/1RjbHmVyFIi4HGre-1dVMBmA9Pvb6ZUdO8iMz_Byawbi-mgZN-YUE34iQ/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 58,
          "assetType": "Folder",
          "name": "Fitz Make Ready Board - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/14WEbCzmm75cq2aXVbhzGtNwar-JgBHmv",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 99,
          "assetType": "Script",
          "name": "Fitz Make Ready Board - DEV Script",
          "url": "https://script.google.com/home/projects/1AjvYBOaylwnHYBH2mILBVlowlWGzZWk6T2NeQ-NExwU6rEB8mvZaxRNi/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Fitz Make Ready Board - GitHub Repo",
          "url": "https://github.com/RichRock27/fmrb.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v61 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "prospect_communication_dashboard",
      "projectName": "Prospect Communication Dashboard",
      "projectSlug": "prospect-communication-dashboard",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 29,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycby8omixzEndq_yb5ujtWqBdGfJn0gssSJZhdfaYp7PQAE6eIXfcxj_TwV3jYmY2rxYd4Q/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbxHkA8bfsDLgigdwIGIqKV0V1IkfIlLQeKo87_7Ty9ugF7OTUN8tu3g8pAWxru9fuh7/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1vGLgugHLD7GRwFJFB-0zbCrKJCpmJJTvhNuO4wl9MLYAvlBBZCwFZ9wE/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1xxBJA3qAbS4nin9CwrfvNL2jVsePUVHA03Rj7gdp1kP8-kIDSH4TPyCc/edit",
      "liveScriptId": "1vGLgugHLD7GRwFJFB-0zbCrKJCpmJJTvhNuO4wl9MLYAvlBBZCwFZ9wE",
      "devScriptId": "1xxBJA3qAbS4nin9CwrfvNL2jVsePUVHA03Rj7gdp1kP8-kIDSH4TPyCc",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1cGTzwYED812j3W5T92yfc1dUQ7jYCtT8",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/prospect-communication-dashboard/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/prospect-communication-dashboard",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: LIVE v32 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 28,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycby8omixzEndq_yb5ujtWqBdGfJn0gssSJZhdfaYp7PQAE6eIXfcxj_TwV3jYmY2rxYd4Q/exec",
          "deploymentId": "AKfycby8omixzEndq_yb5ujtWqBdGfJn0gssSJZhdfaYp7PQAE6eIXfcxj_TwV3jYmY2rxYd4Q",
          "pinnedVersion": "32",
          "badge": "LIVE",
          "lastVerified": "2026-05-10"
        },
        {
          "registryRow": 58,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxHkA8bfsDLgigdwIGIqKV0V1IkfIlLQeKo87_7Ty9ugF7OTUN8tu3g8pAWxru9fuh7/exec",
          "deploymentId": "AKfycbxHkA8bfsDLgigdwIGIqKV0V1IkfIlLQeKo87_7Ty9ugF7OTUN8tu3g8pAWxru9fuh7",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 59,
          "assetType": "Script",
          "name": "Prospect Communication Dashboard - LIVE Script",
          "url": "https://script.google.com/home/projects/1vGLgugHLD7GRwFJFB-0zbCrKJCpmJJTvhNuO4wl9MLYAvlBBZCwFZ9wE/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 60,
          "assetType": "Folder",
          "name": "Prospect Communication Dashboard - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1cGTzwYED812j3W5T92yfc1dUQ7jYCtT8",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 100,
          "assetType": "Script",
          "name": "Prospect Communication Dashboard - DEV Script",
          "url": "https://script.google.com/home/projects/1xxBJA3qAbS4nin9CwrfvNL2jVsePUVHA03Rj7gdp1kP8-kIDSH4TPyCc/edit",
          "notes": "Official DEV Apps Script project created from verified registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Prospect Communication Dashboard - GitHub Repo",
          "url": "https://github.com/RichRock27/pcb.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Governance normalization: LIVE v32 identified; DEV missing. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": true
      }
    },
    {
      "projectId": "ai_command_center",
      "projectName": "AI Command Center",
      "projectSlug": "ai-command-center",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live - Needs Review",
      "routerStatus": "BLOCKED",
      "notes": "LIVE reference exists and the DEV workspace is now recovered. Review before future feature work.",
      "registryRow": 30,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbxyXYNpMtlVlVQCdrDzwxADbyWoWkfzuNlito7e75E-9-ThpAR4dHi7JJDtH1Z37TSi/exec",
      "devUrl": "",
      "liveScriptUrl": "https://script.google.com/d/1BMdFWTuDCiblXH-QeDTAeylQvMLyFQZkTUKH-wuuCe3dFdARfwsM5vYF/edit",
      "devScriptUrl": "https://script.google.com/d/1BMdFWTuDCiblXH-QeDTAeylQvMLyFQZkTUKH-wuuCe3dFdARfwsM5vYF/edit",
      "liveScriptId": "1BMdFWTuDCiblXH-QeDTAeylQvMLyFQZkTUKH-wuuCe3dFdARfwsM5vYF",
      "devScriptId": "1BMdFWTuDCiblXH-QeDTAeylQvMLyFQZkTUKH-wuuCe3dFdARfwsM5vYF",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1_cthDmhjvhGNqMt-uGNnnlCLh8n358NI",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/ai-command-center/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/ai-command-center",
      "missingItems": "DEV Deployment",
      "lastVerified": "2026-05-10",
      "readyForLive": "DEV workspace recovered; deployment still pending",
      "promotionStatus": "",
      "lastDevChange": "",
      "promotionNotes": "DEV workspace recovered from the live project; deploy only after review.",
      "dataSourceAudit": "LOCAL DEV WORKSPACE recovered",
      "scriptAudit": "DEV_WORKSPACE_BOUND",
      "auditNotes": "DEV workspace recovered and clasp-bound to the live Apps Script project. Hub records now point to the editable DEV workspace instead of the blocked marker.",
      "deployments": [
        {
          "registryRow": 29,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbxyXYNpMtlVlVQCdrDzwxADbyWoWkfzuNlito7e75E-9-ThpAR4dHi7JJDtH1Z37TSi/exec",
          "deploymentId": "AKfycbxyXYNpMtlVlVQCdrDzwxADbyWoWkfzuNlito7e75E-9-ThpAR4dHi7JJDtH1Z37TSi",
          "pinnedVersion": "",
          "badge": "LIVE",
          "lastVerified": "2026-04-30"
        }
      ],
      "assets": [
        {
          "registryRow": 61,
          "assetType": "Folder",
          "name": "AI Command Center - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1_cthDmhjvhGNqMt-uGNnnlCLh8n358NI",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "DEV workspace recovered; deployment still pending | DEV workspace recovered and clasp-bound to the live Apps Script project. Hub records now point to the editable DEV workspace instead of the blocked marker."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "check_auditor",
      "projectName": "Check Auditor",
      "projectSlug": "check-auditor",
      "category": "Operations",
      "owner": "rich@propalliance.com",
      "status": "Manual Review",
      "routerStatus": "NEEDS LIVE/DEV",
      "notes": "No authoritative LIVE or DEV deployment is registered. Preserve row for review; do not delete.",
      "registryRow": 31,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "MANUAL_REFERENCE",
      "liveUrl": "",
      "devUrl": "",
      "liveScriptUrl": "",
      "devScriptUrl": "https://script.google.com/d/1BMdFWTuDCiblXH-QeDTAeylQvMLyFQZkTUKH-wuuCe3dFdARfwsM5vYF/edit",
      "liveScriptId": "",
      "devScriptId": "1BMdFWTuDCiblXH-QeDTAeylQvMLyFQZkTUKH-wuuCe3dFdARfwsM5vYF",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1WujuXtmg9DlkP-PTAztmRVg9_6YLwnVN",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/check-auditor/DEV_BLOCKED.md",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/check-auditor",
      "missingItems": "LIVE Deployment, DEV Deployment, LIVE Script, DEV Script",
      "lastVerified": "2026-05-10",
      "readyForLive": "Manual review",
      "promotionStatus": "",
      "lastDevChange": "",
      "promotionNotes": "No clean LIVE/DEV baseline yet.",
      "dataSourceAudit": "NO SCRIPT ID / not applicable",
      "scriptAudit": "NO_SCRIPT_ID",
      "auditNotes": "Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required.",
      "deployments": [],
      "assets": [
        {
          "registryRow": 62,
          "assetType": "Folder",
          "name": "Check Auditor - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1WujuXtmg9DlkP-PTAztmRVg9_6YLwnVN",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Check Auditor - GitHub Repo",
          "url": "https://github.com/RichRock27/check-auditor.git",
          "notes": "Private GitHub source repo verified from the archived local project mirror.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": true,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": true,
        "notes": "LIVE Deployment, DEV Deployment, LIVE Script, DEV Script | Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required. | No clean LIVE/DEV baseline yet."
      },
      "visibility": {
        "admin": true,
        "supervisor": false,
        "pm": false,
        "owner": false
      }
    },
    {
      "projectId": "reimbursement_review",
      "projectName": "Reimbursement Review",
      "projectSlug": "reimbursement-review",
      "category": "Financial / Owner",
      "owner": "rich@propalliance.com",
      "status": "Manual Review",
      "routerStatus": "NEEDS LIVE/DEV",
      "notes": "No authoritative LIVE or DEV deployment is registered. Preserve row for review; do not delete.",
      "registryRow": 32,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "MANUAL_REFERENCE",
      "liveUrl": "",
      "devUrl": "",
      "liveScriptUrl": "",
      "devScriptUrl": "",
      "liveScriptId": "",
      "devScriptId": "",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1KJSCWqmVCGYN2Y-356vauWLabWpoGe1j",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/reimbursement-review/DEV_BLOCKED.md",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/reimbursement-review",
      "missingItems": "LIVE Deployment, DEV Deployment, LIVE Script, DEV Script",
      "lastVerified": "2026-05-10",
      "readyForLive": "Manual review",
      "promotionStatus": "",
      "lastDevChange": "",
      "promotionNotes": "No clean LIVE/DEV baseline yet.",
      "dataSourceAudit": "NO SCRIPT ID / not applicable",
      "scriptAudit": "NO_SCRIPT_ID",
      "auditNotes": "Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required.",
      "deployments": [],
      "assets": [
        {
          "registryRow": 63,
          "assetType": "Folder",
          "name": "Reimbursement Review - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1KJSCWqmVCGYN2Y-356vauWLabWpoGe1j",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Reimbursement Review - GitHub Repo",
          "url": "https://github.com/RichRock27/Reimbursement_Review.git",
          "notes": "Private GitHub source repo verified from the archived local project mirror.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": true,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": true,
        "notes": "LIVE Deployment, DEV Deployment, LIVE Script, DEV Script | Governance normalization: no authoritative LIVE/DEV deployment registered; manual review required. | No clean LIVE/DEV baseline yet."
      },
      "visibility": {
        "admin": true,
        "supervisor": false,
        "pm": false,
        "owner": false
      }
    },
    {
      "projectId": "utility_tracker_legacy",
      "projectName": "Utility Tracker (Legacy)",
      "projectSlug": "utility-tracker-legacy",
      "category": "Financial / Owner",
      "owner": "rich@propalliance.com",
      "status": "Legacy / Reference Only",
      "routerStatus": "LEGACY",
      "notes": "LEGACY utility tracker reference. No authoritative LIVE or DEV deployment registered in router. Preserve for history/manual review; do not delete automatically.",
      "registryRow": 33,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "",
      "devUrl": "",
      "liveScriptUrl": "https://script.google.com/home/projects/1THz90W4EovYZoWET9wR3BCTaKGfvg9gsyWRGBnoXvjHI-q_3ReyKu4Ux/edit",
      "devScriptUrl": "",
      "liveScriptId": "1THz90W4EovYZoWET9wR3BCTaKGfvg9gsyWRGBnoXvjHI-q_3ReyKu4Ux",
      "devScriptId": "",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1lWN1AdBIi5axyLI8OZQdVnI227EWTQWl",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/utility-tracker-legacy/DEV_BLOCKED.md",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/utility-tracker-legacy",
      "missingItems": "Legacy only - review before use",
      "lastVerified": "2026-05-10",
      "readyForLive": "Do not promote",
      "promotionStatus": "",
      "lastDevChange": "",
      "promotionNotes": "Legacy/reference only.",
      "dataSourceAudit": "REVIEW: CSV/manual-upload signals found",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Governance normalization: legacy/reference only; no active LIVE/DEV registered.",
      "deployments": [],
      "assets": [
        {
          "registryRow": 64,
          "assetType": "Script",
          "name": "Utility Tracker (Legacy) - LIVE Script",
          "url": "https://script.google.com/home/projects/1THz90W4EovYZoWET9wR3BCTaKGfvg9gsyWRGBnoXvjHI-q_3ReyKu4Ux/edit",
          "notes": "LIVE script from Hub registry. Audit: REVIEW: CSV/manual-upload signals found",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 65,
          "assetType": "Folder",
          "name": "Utility Tracker (Legacy) - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1lWN1AdBIi5axyLI8OZQdVnI227EWTQWl",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 0,
          "assetType": "GitHub",
          "name": "Utility Tracker (Legacy) - GitHub Repo",
          "url": "https://github.com/RichRock27/utleg.git",
          "notes": "Private GitHub source repo mirrored from the verified local project workspace.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": true,
        "staleLive": false,
        "legacy": true,
        "readOnly": true,
        "backupMissing": false,
        "manualReviewRequired": true,
        "notes": "Legacy only - review before use | Governance normalization: legacy/reference only; no active LIVE/DEV registered. | Legacy/reference only."
      },
      "visibility": {
        "admin": true,
        "supervisor": false,
        "pm": false,
        "owner": false
      }
    },
    {
      "projectId": "sandbox_hub",
      "projectName": "Sandbox Hub",
      "projectSlug": "sandbox-hub",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live - Needs Review",
      "routerStatus": "BLOCKED",
      "notes": "LIVE reference exists but deployment/version was not fully verified. DEV environment missing. Script access previously returned invalid key; review before use.",
      "registryRow": 34,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbyD4-JTJsOyceMJTA3Ppy5RIZBGqxC05GxYoAXnXiNhnpyW0UFN8YjXHFLPDgpS59Tf6Q/exec",
      "devUrl": "",
      "liveScriptUrl": "https://script.google.com/home/projects/1uH0rX5pG5CebunA1R0S7c9E834L7K9m_5D2t1-z9GfS8F7HkQ7z6j4l6/edit",
      "devScriptUrl": "",
      "liveScriptId": "1uH0rX5pG5CebunA1R0S7c9E834L7K9m_5D2t1-z9GfS8F7HkQ7z6j4l6",
      "devScriptId": "",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1bYSKKWoX6D9j6q3FFbaAKCkn5uDKTJdi",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/sandbox-hub/DEV_BLOCKED.md",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/sandbox-hub",
      "missingItems": "Valid LIVE Script ID, DEV Deployment, DEV Script",
      "lastVerified": "2026-05-10",
      "readyForLive": "Manual source recovery required",
      "promotionStatus": "",
      "lastDevChange": "",
      "promotionNotes": "No safe DEV can be created until source/script access is recovered.",
      "dataSourceAudit": "NEEDS FIX: script not accessible for audit",
      "scriptAudit": "NOT_ACCESSIBLE",
      "auditNotes": "DEV creation attempted from registry LIVE script, but cloned registry script did not contain appsscript.json/source files; registry already notes invalid/inaccessible script key. No DEV registered.",
      "deployments": [
        {
          "registryRow": 30,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbyD4-JTJsOyceMJTA3Ppy5RIZBGqxC05GxYoAXnXiNhnpyW0UFN8YjXHFLPDgpS59Tf6Q/exec",
          "deploymentId": "AKfycbyD4-JTJsOyceMJTA3Ppy5RIZBGqxC05GxYoAXnXiNhnpyW0UFN8YjXHFLPDgpS59Tf6Q",
          "pinnedVersion": "",
          "badge": "LIVE",
          "lastVerified": "2026-04-30"
        }
      ],
      "assets": [
        {
          "registryRow": 66,
          "assetType": "Script",
          "name": "Sandbox Hub - LIVE Script",
          "url": "https://script.google.com/home/projects/1uH0rX5pG5CebunA1R0S7c9E834L7K9m_5D2t1-z9GfS8F7HkQ7z6j4l6/edit",
          "notes": "LIVE script from Hub registry but audit failed: invalid script key.",
          "critical": true,
          "lastVerified": "2026-04-30"
        },
        {
          "registryRow": 67,
          "assetType": "Folder",
          "name": "Sandbox Hub - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1bYSKKWoX6D9j6q3FFbaAKCkn5uDKTJdi",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working).",
          "critical": true,
          "lastVerified": "2026-04-30"
        }
      ],
      "governance": {
        "missingDev": true,
        "staleLive": false,
        "legacy": false,
        "readOnly": true,
        "backupMissing": false,
        "manualReviewRequired": true,
        "notes": "Valid LIVE Script ID, DEV Deployment, DEV Script | DEV creation attempted from registry LIVE script, but cloned registry script did not contain appsscript.json/source files; registry already notes invalid/inaccessible script key. No DEV registered. | No safe DEV can be created until source/script access is recovered."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "project_memories",
      "projectName": "Project Memories",
      "projectSlug": "project-memories",
      "category": "Property Operations",
      "owner": "rich@propalliance.com",
      "status": "Live - DEV Local / Needs Deploy",
      "routerStatus": "NEEDS DEV DEPLOY",
      "notes": "Local DEV working copy created from recovered Netlify baseline. Netlify DEV deployment still blocked because local Netlify config is root-owned/unreadable.",
      "registryRow": 35,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://project-memories-richgreen.netlify.app",
      "devUrl": "",
      "liveScriptUrl": "",
      "devScriptUrl": "",
      "liveScriptId": "",
      "devScriptId": "",
      "anchorFolderUrl": "https://project-memories-richgreen.netlify.app",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/project-memories/DEV_BLOCKED.md",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/project-memories",
      "missingItems": "DEV Deployment, GitHub Repo, Netlify config access",
      "lastVerified": "2026-05-20",
      "readyForLive": "Create Netlify DEV deploy after CLI config access is fixed",
      "promotionStatus": "DEV LOCAL ONLY",
      "lastDevChange": "Local DEV baseline initialized 2026-05-20.",
      "promotionNotes": "Local DEV baseline exists; deployment not created.",
      "dataSourceAudit": "External Netlify static app; local browser storage/export",
      "scriptAudit": "NON_APPS_SCRIPT",
      "auditNotes": "Local DEV baseline created at /Users/richgreen/Dev/PA-Registry-Verified-Local/project-memories-dev. Netlify CLI blocked by root-owned config at /Users/richgreen/Library/Preferences/netlify/config.json.",
      "deployments": [
        {
          "registryRow": 32,
          "env": "LIVE",
          "webAppUrl": "https://project-memories-richgreen.netlify.app",
          "deploymentId": "Netlify deploy 69ae0c7e39fdcddb7c8b0142",
          "pinnedVersion": "Recovered deploy ZIP",
          "badge": "LIVE",
          "lastVerified": "2026-05-11"
        }
      ],
      "assets": [
        {
          "registryRow": 105,
          "assetType": "Other",
          "name": "Project Memories - Local DEV Working Copy",
          "url": "/Users/richgreen/Dev/PA-Registry-Verified-Local/project-memories-dev",
          "notes": "Local DEV baseline copied from recovered Netlify source. Not a hosted deployment.",
          "critical": true,
          "lastVerified": "2026-05-20"
        }
      ],
      "governance": {
        "missingDev": true,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": true,
        "notes": "DEV Deployment, GitHub Repo, Netlify config access | Local DEV baseline created at /Users/richgreen/Dev/PA-Registry-Verified-Local/project-memories-dev. Netlify CLI blocked by root-owned config at /Users/richgreen/Library/Preferences/netlify/config.json. | Local DEV baseline exists; deployment not created."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "pma_generator",
      "projectName": "PMA Generator",
      "projectSlug": "pma-generator",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official DEV baseline created from registry LIVE source; DEV deployment pinned to v1. LIVE unchanged.",
      "registryRow": 36,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbzcGo7QXwJVA2-Z0tal2klJmVFsJx7cZPP-bzbMvt4UbY0Gv0bh9xLKh4tOoyNjlLiKrQ/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbyD1D2VsTIQfIg1iE9FTu10sOVLG8uJSGK7VE7TRyC9SXquBCbHcDn3Of8RXoxX6Dij/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1iRZdeJ3DpJSJXKol6ysDi92ZQZMsnGeiceUoQ8uCfucoQwWjk9ugAOJn/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1K3Hf1r5AXowndHVgaQjHrlnGmE88y8Kz1_L3G1FyCyjtTRGI6tw9Wyr9/edit",
      "liveScriptId": "1iRZdeJ3DpJSJXKol6ysDi92ZQZMsnGeiceUoQ8uCfucoQwWjk9ugAOJn",
      "devScriptId": "1K3Hf1r5AXowndHVgaQjHrlnGmE88y8Kz1_L3G1FyCyjtTRGI6tw9Wyr9",
      "anchorFolderUrl": "TBD - needs Drive anchor folder",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/pma-generator/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/pma-generator",
      "missingItems": "",
      "lastVerified": "2026-05-20",
      "readyForLive": "No pending DEV changes",
      "promotionStatus": "IN SYNC",
      "lastDevChange": "DEV baseline initialized 2026-05-20.",
      "promotionNotes": "LIVE and DEV baseline set to registry release v1.",
      "dataSourceAudit": "Unknown - team-used production app; LIVE deployment verified/updated to v122",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "LIVE links wired and official deployment made public/anonymous on 2026-05-15. Still needs DEV deployment/script, source backup, GitHub repo, and Drive anchor folder. Official DEV baseline created 2026-05-20; LIVE unchanged.",
      "deployments": [
        {
          "registryRow": 33,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzcGo7QXwJVA2-Z0tal2klJmVFsJx7cZPP-bzbMvt4UbY0Gv0bh9xLKh4tOoyNjlLiKrQ/exec",
          "deploymentId": "AKfycbzcGo7QXwJVA2-Z0tal2klJmVFsJx7cZPP-bzbMvt4UbY0Gv0bh9xLKh4tOoyNjlLiKrQ",
          "pinnedVersion": "123",
          "badge": "LIVE",
          "lastVerified": "2026-05-15"
        },
        {
          "registryRow": 62,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyD1D2VsTIQfIg1iE9FTu10sOVLG8uJSGK7VE7TRyC9SXquBCbHcDn3Of8RXoxX6Dij/exec",
          "deploymentId": "AKfycbyD1D2VsTIQfIg1iE9FTu10sOVLG8uJSGK7VE7TRyC9SXquBCbHcDn3Of8RXoxX6Dij",
          "pinnedVersion": "1",
          "badge": "DEV",
          "lastVerified": "2026-05-20"
        }
      ],
      "assets": [
        {
          "registryRow": 73,
          "assetType": "Script",
          "name": "PMA Generator - LIVE Script",
          "url": "https://script.google.com/home/projects/1iRZdeJ3DpJSJXKol6ysDi92ZQZMsnGeiceUoQ8uCfucoQwWjk9ugAOJn/edit",
          "notes": "Source code - LIVE Apps Script. Official LIVE deployment pinned to v122 on 2026-05-15.",
          "critical": true,
          "lastVerified": "2026-05-15"
        },
        {
          "registryRow": 104,
          "assetType": "Script",
          "name": "PMA Generator - DEV Script",
          "url": "https://script.google.com/home/projects/1K3Hf1r5AXowndHVgaQjHrlnGmE88y8Kz1_L3G1FyCyjtTRGI6tw9Wyr9/edit",
          "notes": "Official DEV Apps Script project created from registry LIVE source; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "LIVE links wired and official deployment made public/anonymous on 2026-05-15. Still needs DEV deployment/script, source backup, GitHub repo, and Drive anchor folder. Official DEV baseline created 2026-05-20; LIVE unchanged. | LIVE and DEV baseline set to registry release v1."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "rich_photo_zipper",
      "projectName": "Rich Photo Zipper",
      "projectSlug": "rich-photo-zipper",
      "category": "Marketing / Leasing",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Browser-only photo compression and AppFolio ZIP splitter. Official LIVE and DEV Apps Script web apps are established. Use DEV for experiments and promote to LIVE only after explicit approval.",
      "registryRow": 37,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycby0I4OJs4ubEOwJSIjXDsQjnGCHL2fec0G--gMG889qYmOBv2COQMeBndyV6CDem4_v/exec",
      "devUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbxtrtxvWs-KsA9zO5q1uC48eQ5KYwIFkuaCZ0p07rwNiatorVgJUunXQzryA4vx4E0/exec",
      "liveScriptUrl": "https://script.google.com/d/142acH-YQ5M3m4uNK3IBim0MNgOKzKxbWd1Fd3XdV8400NJ_QTHJyfuqE/edit",
      "devScriptUrl": "https://script.google.com/d/1VKyXOJfonQg7SS2o4NJbHocweXpGODRcTTVmj-SChnf5VnN842NDZ-50/edit",
      "liveScriptId": "142acH-YQ5M3m4uNK3IBim0MNgOKzKxbWd1Fd3XdV8400NJ_QTHJyfuqE",
      "devScriptId": "1VKyXOJfonQg7SS2o4NJbHocweXpGODRcTTVmj-SChnf5VnN842NDZ-50",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1eWNjEoP8A2pKXMoPjp9zLLCevjNbKplK",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/rich-photo-zipper/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556/rich-photo-zipper",
      "missingItems": "",
      "lastVerified": "2026-06-15",
      "readyForLive": "Promoted approved RRWW footer update to LIVE on 2026-06-15; DEV, LIVE, local, and GitHub mirrors aligned.",
      "promotionStatus": "",
      "lastDevChange": "RRWW footer logo updated with transparent treatment and spacing refinement; approved and promoted on 2026-06-15.",
      "promotionNotes": "LIVE and DEV now match the approved RRWW footer update promoted on 2026-06-15.",
      "dataSourceAudit": "Browser local image processing only; no backend storage",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Official LIVE/DEV pair established 2026-05-14. DEV baseline matches LIVE release v1; future changes should deploy to DEV first and promote to LIVE only after explicit approval.",
      "deployments": [
        {
          "registryRow": 34,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycby0I4OJs4ubEOwJSIjXDsQjnGCHL2fec0G--gMG889qYmOBv2COQMeBndyV6CDem4_v/exec",
          "deploymentId": "AKfycby0I4OJs4ubEOwJSIjXDsQjnGCHL2fec0G--gMG889qYmOBv2COQMeBndyV6CDem4_v",
          "pinnedVersion": "8",
          "badge": "LIVE",
          "lastVerified": "2026-06-15"
        },
        {
          "registryRow": 35,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbxtrtxvWs-KsA9zO5q1uC48eQ5KYwIFkuaCZ0p07rwNiatorVgJUunXQzryA4vx4E0/exec",
          "deploymentId": "AKfycbxtrtxvWs-KsA9zO5q1uC48eQ5KYwIFkuaCZ0p07rwNiatorVgJUunXQzryA4vx4E0",
          "pinnedVersion": "11",
          "badge": "DEV",
          "lastVerified": "2026-06-15"
        }
      ],
      "assets": [
        {
          "registryRow": 69,
          "assetType": "Script",
          "name": "Rich Photo Zipper - LIVE Script",
          "url": "https://script.google.com/d/142acH-YQ5M3m4uNK3IBim0MNgOKzKxbWd1Fd3XdV8400NJ_QTHJyfuqE/edit",
          "notes": "Apps Script source for LIVE RPZ web app. Client-side processing only; no Drive storage for generated ZIPs.",
          "critical": true,
          "lastVerified": "2026-06-15"
        },
        {
          "registryRow": 70,
          "assetType": "Folder",
          "name": "Rich Photo Zipper - DEV Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1eWNjEoP8A2pKXMoPjp9zLLCevjNbKplK",
          "notes": "Anchor folder under PA Projects (MASTER) / 02_DEV (working); contains source backup zip and README.",
          "critical": true,
          "lastVerified": "2026-06-15"
        },
        {
          "registryRow": 71,
          "assetType": "Other",
          "name": "Rich Photo Zipper - GitHub Backup",
          "url": "https://github.com/RichRock27/rich-photo-zipper",
          "notes": "Private GitHub code backup containing standalone app and Google Apps Script source.",
          "critical": true,
          "lastVerified": "2026-06-15"
        },
        {
          "registryRow": 72,
          "assetType": "Script",
          "name": "Rich Photo Zipper - DEV Script",
          "url": "https://script.google.com/d/1VKyXOJfonQg7SS2o4NJbHocweXpGODRcTTVmj-SChnf5VnN842NDZ-50/edit",
          "notes": "Apps Script source for official RPZ DEV web app. Use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-06-15"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Official LIVE/DEV pair established 2026-05-14. DEV baseline matches LIVE release v1; future changes should deploy to DEV first and promote to LIVE only after explicit approval. | LIVE and DEV now match the approved RRWW footer update promoted on 2026-06-15."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "vacancy_operations_system",
      "projectName": "Vacancy Operations System",
      "projectSlug": "vacancy-operations-system",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "DEV",
      "routerStatus": "READY",
      "notes": "Vacancy Operations System added 2026-05-26 as a separate AppFolio-backed vacancy operations and make-ready workflow platform.",
      "registryRow": null,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbyLlhh3ciO0xeA_WEDLhZwQUxtKAYtj_f2cJRNXCwEpfc_uZGJJA5pBwlBHr0xiTgh3tQ/exec",
      "devUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbx3CP9NhKYItHroaWsQUXIcH_v8fny7K4QBQVYTDoiW/dev",
      "liveScriptUrl": "",
      "devScriptUrl": "https://script.google.com/d/1oRBGrUeMPZoqY_AbNPa_R7zprsxALRgJJHRddgB588wG4hkI0Rz6bWxF/edit",
      "liveScriptId": "",
      "devScriptId": "1oRBGrUeMPZoqY_AbNPa_R7zprsxALRgJJHRddgB588wG4hkI0Rz6bWxF",
      "anchorFolderUrl": "",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/vacancy-operations-system/src",
      "backupPath": "",
      "missingItems": "",
      "lastVerified": "2026-05-26",
      "readyForLive": "Needs production verification before promotion.",
      "promotionStatus": "DEV ONLY",
      "lastDevChange": "Added to registry and hub 2026-05-26.",
      "promotionNotes": "Separate VOS project; not a replacement for RCA.",
      "dataSourceAudit": "API: AppFolio reports with manual maintenance overrides.",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "DEV web app, script, and data spreadsheet recorded.",
      "deployments": [
        {
          "registryRow": null,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbyLlhh3ciO0xeA_WEDLhZwQUxtKAYtj_f2cJRNXCwEpfc_uZGJJA5pBwlBHr0xiTgh3tQ/exec",
          "deploymentId": "AKfycbyLlhh3ciO0xeA_WEDLhZwQUxtKAYtj_f2cJRNXCwEpfc_uZGJJA5pBwlBHr0xiTgh3tQ",
          "pinnedVersion": "22",
          "badge": "DEV",
          "lastVerified": "2026-05-26"
        }
      ],
      "assets": [
        {
          "registryRow": null,
          "assetType": "Script",
          "name": "VOS - DEV Script",
          "url": "https://script.google.com/d/1oRBGrUeMPZoqY_AbNPa_R7zprsxALRgJJHRddgB588wG4hkI0Rz6bWxF/edit",
          "notes": "Apps Script source for Vacancy Operations System.",
          "critical": "Y",
          "lastVerified": "2026-05-26"
        },
        {
          "registryRow": null,
          "assetType": "Sheet",
          "name": "VOS - Data Spreadsheet",
          "url": "https://docs.google.com/spreadsheets/d/1XO6X0PLoif66YZnTA3TsWkkD6owsuUOL2S7Fb1k1ZJU/edit",
          "notes": "Vacancy operations data store.",
          "critical": "Y",
          "lastVerified": "2026-05-26"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": true,
        "manualReviewRequired": true,
        "notes": "DEV-only operational app added to registry and hub. Needs formal production promotion check before it is treated as live."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "rich_collections_app_rca",
      "projectName": "Rich Collections App (RCA)",
      "projectSlug": "rich-collections-app-rca",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Official RCA LIVE now runs from the working DEV script via pinned deployment v20 created 2026-06-12. DEV and LIVE share the same runtime state, snapshots, and trigger environment. Current official restore point refreshed 2026-06-14.",
      "registryRow": 38,
      "sourceAuthority": "PA WebApp Router Registry.xlsx",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbwJ9MtwBIuyKoesAlteM4ECaSoMJxShKr4uSZaJht6N9qn6rjpu3MvALE4NdSw9bDop5w/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbzXola33XPkVUy5sGUSBzE-JFUKATVeEYenflPAbPEx/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1klmBJGFpf6oBpKOo_mVt6I5mx9roNUlbhGecoDrFmutL1TnP45qqci5z/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1klmBJGFpf6oBpKOo_mVt6I5mx9roNUlbhGecoDrFmutL1TnP45qqci5z/edit",
      "liveScriptId": "1klmBJGFpf6oBpKOo_mVt6I5mx9roNUlbhGecoDrFmutL1TnP45qqci5z",
      "devScriptId": "1klmBJGFpf6oBpKOo_mVt6I5mx9roNUlbhGecoDrFmutL1TnP45qqci5z",
      "anchorFolderUrl": "https://drive.google.com/drive/folders/1vuW3vjfxnwD-L7n5Y2O-owZcnZRK2aCt",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/rich-collections-app-rca/DEV_WORKSPACE",
      "backupPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/rich-collections-app-rca/BEST_SO_FAR_RCA_DEV_20260614_OFFICIAL",
      "missingItems": "",
      "lastVerified": "2026-06-14",
      "readyForLive": "Official LIVE deployment already matches the approved working DEV build",
      "promotionStatus": "OFFICIAL LIVE/DEV IN SYNC",
      "lastDevChange": "Approved owner/property/admin build locked and mirrored on 2026-06-14.",
      "promotionNotes": "Primary LIVE is the pinned deployment on the shared DEV script. Legacy standalone LIVE retained only as historical fallback.",
      "dataSourceAudit": "API: AppFolio Rent Roll via AppFolio API; daily snapshots retained in Google Sheet",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Primary LIVE points at the approved shared-script deployment and should match current DEV behavior.",
      "deployments": [
        {
          "registryRow": 36,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbwJ9MtwBIuyKoesAlteM4ECaSoMJxShKr4uSZaJht6N9qn6rjpu3MvALE4NdSw9bDop5w/exec",
          "deploymentId": "AKfycbwJ9MtwBIuyKoesAlteM4ECaSoMJxShKr4uSZaJht6N9qn6rjpu3MvALE4NdSw9bDop5w",
          "pinnedVersion": "20",
          "badge": "LIVE",
          "lastVerified": "2026-06-14"
        },
        {
          "registryRow": 37,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbzXola33XPkVUy5sGUSBzE-JFUKATVeEYenflPAbPEx/exec",
          "deploymentId": "AKfycbzXola33XPkVUy5sGUSBzE-JFUKATVeEYenflPAbPEx",
          "pinnedVersion": "HEAD",
          "badge": "DEV",
          "lastVerified": "2026-06-14"
        }
      ],
      "assets": [
        {
          "registryRow": 74,
          "assetType": "Script",
          "name": "RCA - LIVE Script",
          "url": "https://script.google.com/home/projects/1klmBJGFpf6oBpKOo_mVt6I5mx9roNUlbhGecoDrFmutL1TnP45qqci5z/edit",
          "notes": "Primary LIVE now runs from the shared DEV Apps Script project through the approved pinned deployment.",
          "critical": true,
          "lastVerified": "2026-05-18"
        },
        {
          "registryRow": 75,
          "assetType": "Sheet",
          "name": "RCA - Data Spreadsheet",
          "url": "https://docs.google.com/spreadsheets/d/1b3qf0dI4OMxmtFYKVC2stvbUzpBFJl_NmcoIxuLCZ-A",
          "notes": "Dashboard data store: snapshots, KPIs, history, cache, and sync logs.",
          "critical": true,
          "lastVerified": "2026-05-18"
        },
        {
          "registryRow": 76,
          "assetType": "Folder",
          "name": "RCA - Drive Anchor Folder",
          "url": "https://drive.google.com/drive/folders/1vuW3vjfxnwD-L7n5Y2O-owZcnZRK2aCt",
          "notes": "Drive anchor folder for RCA governance and source-control references.",
          "critical": true,
          "lastVerified": "2026-05-18"
        },
        {
          "registryRow": 77,
          "assetType": "Other",
          "name": "RCA - GitHub Repo",
          "url": "https://github.com/RichRock27/rca",
          "notes": "Private GitHub source repository with Apps Script source, documentation, clasp config, and syntax-check workflow.",
          "critical": true,
          "lastVerified": "2026-05-18"
        },
        {
          "registryRow": 78,
          "assetType": "Other",
          "name": "RCA - Source Backup ZIP",
          "url": "https://drive.google.com/file/d/1aX5Ft70_6X5kao31FHvaaJLAKqygXXgD/view",
          "notes": "Point-in-time source backup uploaded during registry onboarding. GitHub remains primary source control.",
          "critical": true,
          "lastVerified": "2026-05-18"
        },
        {
          "registryRow": 79,
          "assetType": "Script",
          "name": "RCA - DEV Script",
          "url": "https://script.google.com/home/projects/1klmBJGFpf6oBpKOo_mVt6I5mx9roNUlbhGecoDrFmutL1TnP45qqci5z/edit",
          "notes": "Official DEV Apps Script project created from registry LIVE v35 source; DEV label added; use for experiments before LIVE promotion.",
          "critical": true,
          "lastVerified": "2026-05-20"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": false,
        "manualReviewRequired": false,
        "notes": "Primary LIVE now runs from the approved shared-script deployment and matches the working DEV build."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "property_alliance_collections_dashboard",
      "projectName": "Property Alliance Collections Dashboard",
      "projectSlug": "property-alliance-collections-dashboard",
      "category": "Core Operations",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Former tenant debt collections workflow app. Separate from Rich Collections App (RCA). Added to registry/Hub 2026-05-27.",
      "registryRow": 39,
      "sourceAuthority": "Local registry update 2026-05-27",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbyXA_q9q-YkxmoVHmqQwa_dLOMQdWedHJfHZyXLdARZ6a9vgeFU2FtsiCDoFsQmnWIi/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbyjqrr08C-it1T8hPFiFVcT5dgsrfv78ILFguF_ag4/dev",
      "liveScriptUrl": "https://script.google.com/home/projects/1rC2-xlzju5zSPv1X3SoDWUBw07ONmqz_0CNYsU3VsaX6fkg-OzuGbNcY/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1rC2-xlzju5zSPv1X3SoDWUBw07ONmqz_0CNYsU3VsaX6fkg-OzuGbNcY/edit",
      "liveScriptId": "1rC2-xlzju5zSPv1X3SoDWUBw07ONmqz_0CNYsU3VsaX6fkg-OzuGbNcY",
      "devScriptId": "1rC2-xlzju5zSPv1X3SoDWUBw07ONmqz_0CNYsU3VsaX6fkg-OzuGbNcY",
      "anchorFolderUrl": "",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/property-alliance-collections-dashboard/DEV_WORKSPACE",
      "backupPath": "",
      "missingItems": "Separate DEV script, cold backup, Drive anchor folder, GitHub repo",
      "lastVerified": "2026-05-27",
      "readyForLive": "Current live Apps Script deployment exists; DEV split still needed",
      "promotionStatus": "LIVE APP REGISTERED",
      "lastDevChange": "Registry/Hub onboarding 2026-05-27.",
      "promotionNotes": "PACD is separate from RCA. Current local source snapshot captured in DEV workspace.",
      "dataSourceAudit": "AppFolio API reports: eligible_debt_summary and tenant_tickler; merged into Collections_Master Google Sheet.",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Local source copied from current PACD working folder into registry DEV workspace.",
      "deployments": [
        {
          "registryRow": 3901,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/a/macros/propalliance.com/s/AKfycbyXA_q9q-YkxmoVHmqQwa_dLOMQdWedHJfHZyXLdARZ6a9vgeFU2FtsiCDoFsQmnWIi/exec",
          "deploymentId": "AKfycbyXA_q9q-YkxmoVHmqQwa_dLOMQdWedHJfHZyXLdARZ6a9vgeFU2FtsiCDoFsQmnWIi",
          "pinnedVersion": "47",
          "badge": "LIVE",
          "lastVerified": "2026-05-27"
        }
      ],
      "assets": [
        {
          "registryRow": 3902,
          "assetType": "Script",
          "name": "PACD - LIVE Script",
          "url": "https://script.google.com/home/projects/1rC2-xlzju5zSPv1X3SoDWUBw07ONmqz_0CNYsU3VsaX6fkg-OzuGbNcY/edit",
          "notes": "Apps Script source for Property Alliance Collections Dashboard.",
          "critical": true,
          "lastVerified": "2026-05-27"
        },
        {
          "registryRow": 3903,
          "assetType": "Sheet",
          "name": "PACD - Data Spreadsheet",
          "url": "https://docs.google.com/spreadsheets/d/1R8CyMq117tNx3AJrjt4c-Si9AFHVbfOgD8OKTfopBzY",
          "notes": "Collections data store with raw reports, master table, settings, templates, and sent-to-collections archive.",
          "critical": true,
          "lastVerified": "2026-05-27"
        }
      ],
      "governance": {
        "missingDev": true,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": true,
        "manualReviewRequired": true,
        "notes": "Registered as its own project. Needs separate DEV script/repo/backup hardening."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "rental_photo_enhancer",
      "projectName": "Rental Photo Enhancer (RPE)",
      "projectSlug": "rental-photo-enhancer",
      "category": "Marketing",
      "owner": "rich@propalliance.com",
      "status": "Live/Dev",
      "routerStatus": "READY",
      "notes": "Browser-based rental photo enhancement app for improving dark interior marketing photos. Added to managed Hub registry on 2026-06-23; LIVE now includes enhancement modes, working strength reprocessing, corrected preview slider direction, and Deep Enhance / Rescue mode.",
      "registryRow": 40,
      "sourceAuthority": "Manual Hub addition from existing Apps Script project",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://script.google.com/macros/s/AKfycbyyMbitqVvq4ooTjZO2cZ8VZBFzr1Npo7yEmF7hhkNWHyryhNdSIKwd_BXukt43PJJz/exec",
      "devUrl": "https://script.google.com/macros/s/AKfycbxDcANlEql4WLOady5Hi25RvOfKmmpZ3dEUZdCqT3wqyVW6FRjAk0isBGSindeweA_-Tw/exec",
      "liveScriptUrl": "https://script.google.com/home/projects/1BfAFeQN-5gK6D0TZ56BO5eSpKf1jMuBxwR1RJF0g9GjlRosiOuXc3DCR/edit",
      "devScriptUrl": "https://script.google.com/home/projects/1c1nRXW1fZiJ6Mf5O9aJ43nI7hTusR9SZD3ycudh_4fFvZDnPxftBaru2/edit",
      "liveScriptId": "1BfAFeQN-5gK6D0TZ56BO5eSpKf1jMuBxwR1RJF0g9GjlRosiOuXc3DCR",
      "devScriptId": "1c1nRXW1fZiJ6Mf5O9aJ43nI7hTusR9SZD3ycudh_4fFvZDnPxftBaru2",
      "anchorFolderUrl": "",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/rental-photo-enhancer/DEV_WORKSPACE",
      "backupPath": "",
      "missingItems": "Drive anchor folder, cold backup",
      "lastVerified": "2026-06-23",
      "readyForLive": "Promoted to LIVE on 2026-06-23. LIVE includes Auto/Bright Interior/Backlit/Exterior/Natural modes, Deep Enhance / Rescue mode, strength reprocessing after slider changes, and corrected Enhanced/Original preview direction.",
      "promotionStatus": "LIVE Current",
      "lastDevChange": "Managed DEV script and GitHub repo created 2026-06-23. DEV v13 added enhancement modes, strength reprocessing, corrected preview slider direction, and Deep Enhance / Rescue mode.",
      "promotionNotes": "LIVE promoted on 2026-06-23 after local and DEV testing. DEV remains available for future changes.",
      "dataSourceAudit": "Browser-only local image processing; no server-side image storage.",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "Existing RPE app discovered outside Hub and added as managed project with separate DEV, local, and GitHub source.",
      "deployments": [
        {
          "registryRow": 56,
          "env": "LIVE",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbyyMbitqVvq4ooTjZO2cZ8VZBFzr1Npo7yEmF7hhkNWHyryhNdSIKwd_BXukt43PJJz/exec",
          "deploymentId": "AKfycbyyMbitqVvq4ooTjZO2cZ8VZBFzr1Npo7yEmF7hhkNWHyryhNdSIKwd_BXukt43PJJz",
          "pinnedVersion": "3",
          "badge": "LIVE",
          "lastVerified": "2026-06-23"
        },
        {
          "registryRow": 57,
          "env": "DEV",
          "webAppUrl": "https://script.google.com/macros/s/AKfycbxDcANlEql4WLOady5Hi25RvOfKmmpZ3dEUZdCqT3wqyVW6FRjAk0isBGSindeweA_-Tw/exec",
          "deploymentId": "AKfycbxDcANlEql4WLOady5Hi25RvOfKmmpZ3dEUZdCqT3wqyVW6FRjAk0isBGSindeweA_-Tw",
          "pinnedVersion": "13",
          "badge": "DEV",
          "lastVerified": "2026-06-23"
        }
      ],
      "assets": [
        {
          "registryRow": 96,
          "assetType": "Script",
          "name": "Rental Photo Enhancer (RPE) - LIVE Script",
          "url": "https://script.google.com/home/projects/1BfAFeQN-5gK6D0TZ56BO5eSpKf1jMuBxwR1RJF0g9GjlRosiOuXc3DCR/edit",
          "notes": "Existing RPE Apps Script project discovered 2026-06-23.",
          "critical": true,
          "lastVerified": "2026-06-23"
        },
        {
          "registryRow": 97,
          "assetType": "Script",
          "name": "Rental Photo Enhancer (RPE) - DEV Script",
          "url": "https://script.google.com/home/projects/1c1nRXW1fZiJ6Mf5O9aJ43nI7hTusR9SZD3ycudh_4fFvZDnPxftBaru2/edit",
          "notes": "Managed DEV Apps Script project created from LIVE source; use for image enhancement improvements.",
          "critical": true,
          "lastVerified": "2026-06-23"
        },
        {
          "registryRow": 98,
          "assetType": "GitHub",
          "name": "Rental Photo Enhancer (RPE) - GitHub Repo",
          "url": "https://github.com/RichRock27/rental-photo-enhancer",
          "notes": "Private GitHub source repo mirrored from the managed DEV workspace.",
          "critical": true,
          "lastVerified": "2026-06-23"
        }
      ],
      "governance": {
        "missingDev": false,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": true,
        "manualReviewRequired": false,
        "notes": "LIVE unchanged. DEV v6 needs user review before promotion."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    },
    {
      "projectId": "central_identity_database",
      "projectName": "Central Identity Database (CID)",
      "projectSlug": "central-identity-database",
      "category": "Infrastructure",
      "owner": "rich@propalliance.com",
      "status": "Live - DEV Local / Needs Deploy",
      "routerStatus": "NEEDS DEV",
      "notes": "Official central identity, staff, role, territory, property, permission, and email routing database. Production is the bound Google Sheet/script. Local source exists; a separate DEV Sheet/script has not been created.",
      "registryRow": 39,
      "sourceAuthority": "per-project registry.json",
      "sourceOrigin": "GOOGLE_APPS_SCRIPT",
      "liveUrl": "https://docs.google.com/spreadsheets/d/1M_8Yln9yQLe6f2t5xmLf70bl2NYSipAgeX3ZKXdfsHA/edit",
      "devUrl": "",
      "liveScriptUrl": "https://script.google.com/home/projects/1KCSM8W7mTRjQ5sK6xK0z7wCuOsGlnR_JxeYTMDofQyzxqSUO3z2I53Ki/edit",
      "devScriptUrl": "",
      "liveScriptId": "1KCSM8W7mTRjQ5sK6xK0z7wCuOsGlnR_JxeYTMDofQyzxqSUO3z2I53Ki",
      "devScriptId": "",
      "anchorFolderUrl": "",
      "localDevPath": "/Users/richgreen/Dev/PA-Registry-DEV-Workspaces/central-email-database",
      "backupPath": "",
      "missingItems": "DEV Deployment, DEV Script, Drive anchor folder, cold backup",
      "lastVerified": "2026-06-18",
      "readyForLive": "No — create and test a separate bound DEV copy before promotion workflows.",
      "promotionStatus": "LIVE VERIFIED / DEV NOT CREATED",
      "lastDevChange": "Central routing integration completed 2026-06-18.",
      "promotionNotes": "Do not treat the production Sheet/script as DEV.",
      "dataSourceAudit": "Google Sheet is the canonical identity, role, property, territory, and routing-rule data source.",
      "scriptAudit": "ACCESSIBLE",
      "auditNotes": "LIVE Sheet and bound Apps Script verified. Staff sidebar loads and routing library v2 is in use by connected projects. No separate DEV environment exists.",
      "deployments": [
        {
          "registryRow": 63,
          "env": "LIVE",
          "webAppUrl": "https://docs.google.com/spreadsheets/d/1M_8Yln9yQLe6f2t5xmLf70bl2NYSipAgeX3ZKXdfsHA/edit",
          "deploymentId": "",
          "pinnedVersion": "2",
          "badge": "LIVE",
          "lastVerified": "2026-06-18"
        }
      ],
      "assets": [
        {
          "registryRow": 106,
          "assetType": "Script",
          "name": "Central Identity Database (CID) - LIVE Script",
          "url": "https://script.google.com/home/projects/1KCSM8W7mTRjQ5sK6xK0z7wCuOsGlnR_JxeYTMDofQyzxqSUO3z2I53Ki/edit",
          "notes": "Container-bound Apps Script source and shared library used by connected property-management projects.",
          "critical": true,
          "lastVerified": "2026-06-18"
        },
        {
          "registryRow": 107,
          "assetType": "Sheet",
          "name": "Central Identity Database (CID) - LIVE Sheet",
          "url": "https://docs.google.com/spreadsheets/d/1M_8Yln9yQLe6f2t5xmLf70bl2NYSipAgeX3ZKXdfsHA/edit",
          "notes": "Canonical staff, role, territory, property, permission, and routing-rule database.",
          "critical": true,
          "lastVerified": "2026-06-18"
        }
      ],
      "governance": {
        "missingDev": true,
        "staleLive": false,
        "legacy": false,
        "readOnly": false,
        "backupMissing": true,
        "manualReviewRequired": true,
        "notes": "Production is verified. Create a separate bound DEV Sheet/script before any experimental changes."
      },
      "visibility": {
        "admin": true,
        "supervisor": true,
        "pm": true,
        "owner": false
      }
    }
  ]
};
}
