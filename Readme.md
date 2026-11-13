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

```

#
