# Science Event Management website

The repository's production website is assembled from the nine root HTML entry
points and the compiled runtime bundles in `assets/`. The JSX files under
`pages/` are not the inputs to the current production build.

## Run locally

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

Vite writes the deployable static site to `dist/`. It contains the nine HTML
entry points, compiled JavaScript/CSS, runtime metadata script, media assets,
and the static-host redirect rules from `public/_redirects`.

Upload the **contents of `dist/`** to the hosting document root. Do not upload
the repository root or `node_modules/`. The redirect rules require a static
host that supports Netlify-style `_redirects` files; configure equivalent
rewrites on other hosts before deployment.

## Pages and routing

The Vite build produces a separate HTML entry point for each top-level page:
`index.html`, `about.html`, `services.html`, `work.html`, `case-studies.html`,
`experience.html`, `team.html`, `contact.html`, and `social.html`. Navigation
uses these files directly. The Apache and static-host redirect rules preserve
existing clean URLs and map detail URLs to the entry point for their section.
The rules are provided in `public/_redirects` for compatible static hosts.
