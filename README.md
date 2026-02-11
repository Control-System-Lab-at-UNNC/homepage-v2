# Control System Lab Homepage

The official website for the Control System Lab at the University of Nottingham Ningbo China.

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) with TypeScript
- **Content**: [Nuxt Content](https://content.nuxt.com/) v2 for Markdown-based content management
- **Deployment**: GitHub Pages via GitHub Actions
- **Design**: Custom CSS with "Modern Lab" design direction

## Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Building for Production

```bash
# Generate static site
npm run generate
```

The static files will be output to `.output/public/`.

### Preview Production Build

```bash
# Preview the generated site
npm run preview
```

## Project Structure

```
├── .github/workflows/     # GitHub Actions deployment
├── content/               # Markdown content
│   ├── members/          # Member profiles
│   ├── publications/      # Research publications
│   ├── projects/         # Project information
│   ├── positions/        # Open positions
│   └── news/            # News and blog posts
├── components/           # Vue components
├── layouts/             # Nuxt layouts
├── pages/              # Route pages
├── public/             # Static assets
├── assets/css/          # Global styles
└── nuxt.config.ts      # Nuxt configuration
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

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

To configure deployment:

1. Go to repository **Settings** → **Pages**
2. Set source to **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` will handle the rest

## License

© 2024 Control System Lab, University of Nottingham Ningbo China. All rights reserved.
