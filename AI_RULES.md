# Local AI Rules - PropAlliance DEV Workspaces

These rules apply to any AI assistant, coding extension, local model, or human working in this folder.

## Allowed
- Work only in registered DEV_WORKSPACE folders.
- Read README.md, registry.json, NOTES.md, and project files before editing.
- Make local DEV changes for design, coding, testing, cleanup, and documentation.
- Summarize files changed, test steps, risks, and whether DEV push is needed.

## Not Allowed
- Do not edit LIVE_SOURCE.
- Do not edit cold backup folders.
- Do not push to LIVE.
- Do not deploy to LIVE.
- Do not create Apps Script projects.
- Do not create deployments or versions.
- Do not run clasp login.
- Do not change registry workbook files.
- Do not assume missing DEV is editable.

## Workflow
1. Confirm the current folder is a DEV_WORKSPACE.
2. Confirm the task is for DEV only.
3. Make the smallest safe change.
4. Test locally where possible.
5. Report exactly what changed and what remains untested.
6. Stop before push/deploy/promotion unless Rich explicitly approves.

## Important Paths
- DEV workspace root: /Users/richgreen/Dev/PA-Registry-DEV-Workspaces
- Cold backup root, do not edit: /Users/richgreen/Dev/PA-Registry-Local-Backup-2026-05-20-124556
- Navigation hub: /Users/richgreen/Dev/PA-Registry-DEV-Workspaces/PROJECT_NAVIGATION_HUB.html
- Hub guide: /Users/richgreen/Dev/PA-Registry-DEV-Workspaces/docs/PropAlliance_Hub_Guide_FAQ.pdf
