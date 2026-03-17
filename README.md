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
├── src/                   # Source directory
│   ├── assets/            # Global styles
│   ├── components/        # Vue components
│   ├── composables/       # Vue composables
│   ├── content/           # Markdown content (see Content Management)
│   ├── layouts/           # Nuxt layouts
│   ├── pages/             # Route pages
│   ├── public/            # Static assets
│   └── nuxt.config.ts     # Nuxt configuration
├── package.json
└── tsconfig.json
```

## Content Management

> **See [`src/content/readme.md`](src/content/readme.md) for detailed content management guide.**

All website content is managed through Markdown files in the `src/content/` directory. Each content type has its own subdirectory with a `readme.md` template file.

### Quick Reference

| Content | Directory | Template |
|---------|-----------|----------|
| Members | `content/members/{category}/` | `content/members/readme.md` |
| News | `content/news/` | `content/news/readme.md` |
| Publications | `content/publications/{year}/` | `content/publications/readme.md` |
| Projects | `content/projects/` | `content/projects/readme.md` |
| Positions | `content/positions/` | `content/positions/readme.md` |

### Quick Start

1. Navigate to the appropriate content directory
2. Create a new `.md` file with a descriptive filename
3. Copy the frontmatter template from the corresponding `readme.md`
4. Fill in the required fields and write your content
5. Changes are automatically deployed when pushed to `main`

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

To configure subdirectory deployment, set `NUXT_PUBLIC_BASE_URL` in the GitHub Actions workflow (`.github/workflows/deploy.yml`).

## License

© 2024 Control System Lab, University of Nottingham Ningbo China. All rights reserved.
