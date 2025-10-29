# smart-employee-attendance

Prepared for GitHub Pages deployment under repository name **smart-employee-attendance**.

## How to publish

1. Create a new repository on GitHub named `smart-employee-attendance` under your account `mnaseralib-lgtm`.
2. Upload all files from this ZIP to the repository root (you can drag & drop or push via Git).
3. On GitHub, go to **Settings → Pages**, and select branch `main` (or `master`) and folder `/(root)` then Save.
4. Wait a few minutes. Your site will be available at: `https://mnaseralib-lgtm.github.io/smart-employee-attendance/`

## Notes and changes made

- Paths adjusted to be relative so the app works when served from `/smart-employee-attendance/`.
- `manifest.json` `start_url` and `scope` set to `/smart-employee-attendance/` to allow PWA install on GitHub Pages.
- Service worker registration paths adjusted to be relative.
- No icons, UI, or application logic were changed — assets preserved as requested.

If you prefer the site to be served from the repository root (https://mnaseralib-lgtm.github.io/) let me know and I will adjust `start_url` and `scope` accordingly.
