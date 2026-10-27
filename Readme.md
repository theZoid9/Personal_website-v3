# Zaid Akhalwaya — Portfolio

A React portfolio built with Vite. Desktop uses horizontal panels; mobile uses a vertical layout. The application showcase, project archive, screenshot galleries, typing headings, and interactive coffee cup are maintained as separate features.

## Local development

Use Node.js 22.12 or newer (or a supported newer LTS).

```sh
npm ci
npm run dev
```

Vite prints the local preview URL. To check changes:

```sh
npm run format        # Format maintained source files
npm run check         # Check formatting, content/assets, and production build
npm run preview       # Serve the production build
```

## Project structure

```text
src/
  main.jsx                 React mounting and global CSS import only
  App.jsx                  Compose sections and connect shared state
  data/
    profile.js             Contact details, portrait, CV, social links
    applications.js        Project content, screenshots, categories
    skills.js              Skills and supporting project IDs
    panels.js              Navigation labels and panel metadata
  sections/                Home, About, Applications, Projects, Skills, Contact
  components/
    layout/                Fixed branding and floating navigation
    projects/              Project cards, screenshot galleries, app previews
    headings/              Home and About typing effects
    coffee/                Interactive coffee widget and its SVG artwork
  hooks/
    usePanelNavigation.js  Scrolling, responsive navigation, wheel handling
    useApplicationCarousel.js
  styles/
    index.css              Ordered stylesheet imports
    base.css               Fonts, colors, reset
    layout.css             Shared panel geometry and responsive layout
    accessibility.css      Focus states, skip link, screen-reader utilities
    components/            Styles for reusable UI
    sections/              Section styles with their responsive rules
public/                    Assets copied unchanged into the production build
tests/                     Content, reference, and public-asset checks
```

## Common edits

- **Change the CV or contact information:** edit `src/data/profile.js`. Put the file in `public/files/` and use a URL beginning with `/files/`. Both download buttons share this configuration. Files in the root `files/` folder are not copied into the production build.
- **Add or edit a project:** edit `src/data/applications.js`. Give each project a unique `id`, category, title, description, stack, and case study. For image-backed projects, provide an image, descriptive imageAlt, and screenshots. Optional href/action fields add an external link. Categories are derived from the data.
- **Connect a skill to a project:** set `projectId` in `src/data/skills.js` to the project's stable ID. Reordering the applications array will not break these links.
- **Change section content:** edit the corresponding file in `src/sections/`. Keep reusable UI in `components/`.
- **Change appearance:** use the matching component or section stylesheet. Shared colors live in `styles/base.css`. Keep the mobile breakpoint in `usePanelNavigation.js` aligned with the CSS breakpoint at 680px.
- **Add a panel:** add its component to `App.jsx` and its metadata to `data/panels.js` in the same order. A hidden navigation panel can use `navigationId` to highlight its parent link.

## State ownership

`App.jsx` connects only the state shared across sections: panel navigation and the selected application. The project archive owns its filter. Each gallery owns its selected screenshot. The coffee widget owns its fill, finish, and rotation. Typing effects own and clean up their timers or observers.

Keep content out of the entry point. Keep styles out of JSX except runtime CSS variables and values such as progress, rotation, or animation delays.

## Assets and deployment

Vite builds into `dist/`; deploy that directory. Set `VITE_SITE_URL` to the public site origin for social preview metadata; the existing Render environment fallback is preserved.

The selected CV is `public/files/Zaid_Akhalwaya_Junior_Software_Developer.pdf`. The original root copy is retained. Existing project images, animation previews, and the portrait remain in `public/`.

This project uses root-relative asset URLs and is configured for hosting at a domain root. Deployment under a subdirectory requires coordinating Vite's base with the asset URLs and metadata.

## Verification

`npm test` checks stable project references, gallery assets, navigation aliases, and the deployable CV. `npm run check` also enforces formatting and builds production output.

For interactive changes, check desktop and phone layouts, floating navigation, next/previous application cycling, archive filters, screenshot controls, skill-to-project links, coffee controls, both CV downloads, and reduced-motion preferences.

An inactive GitHub Actions template is saved at `docs/ci/validate.yml.example`. To enable automatic checks, copy it to `.github/workflows/validate.yml` and push using credentials permitted to update workflows. Until then, run `npm run check` locally. React versions are pinned, and the lockfile records the tested dependency versions.

## Browser UI checks

Run `npx playwright install chromium` once, then `npm run test:ui`. The browser tests cover direct section links, viewport resizing, all five screenshot galleries, image proportions, fullscreen preview controls, keyboard focus, and archive filtering on desktop, tablet, and phone sizes.

Screenshot dimensions are stored in each project's `screenshotSizes` array, in the same order as `screenshots`. Update these when replacing images so their space is reserved before loading. Clicking a screenshot opens its enlarged view. On desktop, the cooking app displays both phone screenshots together.
