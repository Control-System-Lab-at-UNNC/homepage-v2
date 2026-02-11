# Control System Lab Homepage

The official website for Control System Lab at the University of Nottingham Ningbo China.

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) with TypeScript
- **Content**: [Nuxt Content](https://content.nuxt.com/) v2 for Markdown-based content management
- **Deployment**: GitHub Pages via GitHub Actions
- **Design**: Custom CSS with "Modern Lab" design direction

## Development

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development Server

```bash
# Start development server
pnpm run dev
```

Visit `http://localhost:3000` to see the site.

### Building for Production

```bash
# Generate static site
pnpm run generate
```

The static files will be output to `.output/public/`.

### Preview Production Build

```bash
# Preview locally
npx serve .output/public
```

## Project Structure

```bash
├── .github/workflows/     # GitHub Actions deployment
├── src/                        # Source directory
│   ├── assets/               # Global styles
│   ├── components/            # Vue components
│   ├── composables/           # Vue composables
│   ├── content/              # Markdown content
│   │   ├── members/         # Member profiles
│   │   ├── publications/     # Research publications
│   │   ├── projects/        # Project information
│   │   ├── positions/       # Open positions
│   │   └── news/           # News and blog posts
│   ├── layouts/              # Nuxt layouts
│   ├── pages/               # Route pages
│   ├── public/              # Static assets
│   └── nuxt.config.ts      # Nuxt configuration
├── .github/
├── package.json
└── tsconfig.json
```

## Content Management

All content is managed through Markdown files in the `content/` directory:

### Adding a Member

Create a new file in `content/members/{category}/{name}.md`:

```markdown
---
name: Dr Jane Doe
role: PhD Student
title: PhD Student
email: jane.doe@nottingham.edu.cn
image: /images/people/jane-doe.webp
category: research-students
order: 1
---

Profile description here.

## Research Interests

- Topic 1
- Topic 2
```

### Adding a Publication

Create a new file in `content/publications/{year}/{title}.md`:

```markdown
---
title: Paper Title
authors:
  - Author, Name
  - Another, Author
year: 2024
doi: https://doi.org/...
keywords:
  - keyword1
  - keyword2
venue: Conference Name
---

Abstract here...
```

### Adding News

Create a new file in `content/news/{date}-{slug}.md`:

```markdown
---
title: News Headline
date: 2024-06-01
tags:
  - announcement
description: Brief description
---

News content here...
```

## Image Path Handling

The project uses dynamic base URL handling to support both root and subdirectory deployments:

- **Root deployment** (e.g., `https://control-system-lab-at-unnc.github.io/`):
  - Images resolve to `/images/uon-logo.png`, `/images/people/salman-ijaz.webp`

- **Subdirectory deployment** (e.g., `https://control-system-lab-at-unnc.github.io/homepage-v2/`):
  - Images resolve to `/homepage-v2/images/uon-logo.png`, `/homepage-v2/images/people/salman-ijaz.webp`

This is handled automatically via `useRuntimeConfig()` in components that reads `config.app.baseURL`.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

To configure subdirectory deployment, set `NUXT_PUBLIC_BASE_URL` in the GitHub Actions workflow (`.github/workflows/deploy.yml`).

## License

© 2024 Control System Lab, University of Nottingham Ningbo China. All rights reserved.
