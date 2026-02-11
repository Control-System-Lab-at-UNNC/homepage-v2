# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 static site for the Control System Lab at the University of Nottingham Ningbo China (UNNC). The site uses Nuxt Content v2 for Markdown-based content management and is deployed to GitHub Pages.

**Tech Stack:** Nuxt 3, TypeScript, Vue 3, Nuxt Content, custom CSS design system

## Development Commands

```bash
# Install dependencies (pnpm is recommended)
pnpm install

# Start development server (http://localhost:3000)
pnpm run dev

# Generate static site for production
pnpm run generate

# Preview production build locally
npx serve .output/public
```

## Architecture

### Directory Structure

```bash
src/
├── assets/css/main.css       # Global CSS with design system variables
├── components/               # Vue components
├── composables/              # Vue composables (currently empty)
├── content/                  # Nuxt Content markdown files
│   ├── members/{category}/   # Member profiles by category
│   ├── publications/{year}/   # Research publications by year
│   ├── projects/             # Project information
│   ├── positions/            # Open positions
│   └── news/                 # News and blog posts
├── layouts/default.vue       # Main layout with header/footer
├── pages/                    # File-based routing
│   ├── index.vue            # Homepage
│   ├── members/             # Members listing and detail pages
│   ├── news/                # News listing and detail pages
│   ├── publications.vue      # Publications page
│   ├── projects.vue         # Projects page
│   └── positions.vue        # Open positions page
└── public/                   # Static assets (images, favicon)
```

### Nuxt Content Routing

The site uses Nuxt Content's file-based routing. Content files in `src/content/` are automatically queried and the filename (without extension) becomes the route:

- **Members:** `src/content/members/{category}/{filename}.md` - Accessible via `/members/{category}/{filename}`
- **News:** `src/content/news/{filename}.md` - Accessible via `/news/{filename}`
- **Publications:** `src/content/publications/{year}/{filename}.md`

Dynamic pages use `[slug].vue` to catch these routes (e.g., `src/pages/members/[slug].vue` maps to member filenames).

### Image Path Handling

The project supports both root and subdirectory deployments. Images must use the `useRuntimeConfig()` pattern in components:

```ts
const config = useRuntimeConfig()
const imagePath = computed(() => {
  const basePath = config.app.baseURL || '/'
  return basePath + props.member.image
})
```

The `NUXT_PUBLIC_BASE_URL` environment variable controls deployment:

- Root deployment: `/` or unset
- Subdirectory deployment: `/homepage-v2/`

### Content Frontmatter Schema

**Members** (`src/content/members/{category}/*.md`):

```yaml
---
name: Full Name
role: Display Role
title: Academic Title
email: email@example.com
scholar: https://scholar.google.com/...
image: /images/people/filename.webp
category: staff|research-students|research-assistants|alumni
order: 1  # For sorting
---
```

**News** (`src/content/news/*.md`):

```yaml
---
title: Headline
date: 2024-06-01
tags: [announcement]
description: Brief description
---
```

**Publications** (`src/content/publications/{year}/*.md`):

```yaml
---
title: Paper Title
authors:
  - Author, Name
  - Another, Author
year: 2024
doi: https://doi.org/...
keywords: [keyword1, keyword2]
venue: Conference Name
---
```

### Design System

The site uses a custom CSS design system defined in `src/assets/css/main.css`:

- **Colors:** `--color-primary`, `--color-accent`, `--color-secondary`, `--color-bg`, etc.
- **Typography:** Fraunces (display), DM Sans (body)
- **Spacing:** `--spacing-xs` through `--spacing-4xl`
- **Components:** `.btn`, `.card`, `.badge`, `.container`, `.section`

All components use scoped styles and reference these CSS variables for consistency.

### Type Patterns

Members content uses a flexible `Member` interface with optional fields. The `name` field may be stored as either `name` or `title` in frontmatter - components handle this with fallbacks:

```ts
const processedMembers = computed(() => {
  return members.map(member => ({
    ...member,
    name: member.name || member.title || 'Unknown'
  }))
})
```

## Deployment

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` when pushing to `main`. To change the deployment base URL, modify `NUXT_PUBLIC_BASE_URL` in the workflow file.

## Notices

Do not disable typecheck or linting rules. All code should adhere to the project's TypeScript and ESLint configurations. Run `pnpm build` locally to verify after changes.
