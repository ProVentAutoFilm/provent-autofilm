# ProVent AutoFilm

Static, buildless website for https://proventautofilm.github.io/provent-autofilm/.

All deployment files sit at the repository root, with relative asset paths that work under /provent-autofilm/.
No dependencies, backend, form storage or tracking scripts. Quotations open WhatsApp; the visitor reviews and sends the message, and attaches a photo within WhatsApp.

## Updating on an Android phone

1. Download and extract the supplied ZIP using your phone’s Files app.
2. In Chrome, sign in to GitHub and open https://github.com/ProVentAutoFilm/provent-autofilm . If necessary, select Desktop site in Chrome’s menu.
3. On the Code tab, choose Add file → Upload files → choose your files.
4. Select the files INSIDE the extracted folder, including index.html, styles.css, script.js and every image. Do not upload the ZIP itself. All files belong at the repository root.
5. Commit the upload to the branch currently used by GitHub Pages. Existing index.html and README.md will be replaced.
6. Check Settings → Pages to confirm the actual source branch/folder. For a branch-based root deployment, the folder is / (root). If Pages uses Actions, inspect that workflow rather than changing settings blindly.
7. Wait for the Pages deployment to finish, then reload the live URL in an incognito tab.
8. Check the logo, gallery, mobile menu, quotation form, WhatsApp number and email on your phone. Confirm that the WhatsApp conversation is with the correct business account and that the prefilled text appears. Photos must be attached manually within WhatsApp.

robots.txt in this project folder does not control the entire github.io host; search engines look for robots.txt at the host root. The project sitemap is directly accessible and can be submitted separately to Search Console.

## Maintenance

Edit business copy in index.html, appearance in styles.css, and interactions in script.js. Supplied photographs are represented as individual full-frame WebP assets with 768px responsive alternatives. The social preview uses a JPEG for compatibility. Original uploads remain unchanged.
The gallery wording deliberately does not assert that every image depicts a genuine customer job. Film specifications, warranties, opening times, street address and legal compliance claims are not invented.
