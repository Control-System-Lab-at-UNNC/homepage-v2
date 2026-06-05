---
# ============================================================
# Control System Lab Website - Content Management Guide
# ============================================================

# _hidden [Internal]: Hide this file from all content queries
_hidden: true

# This file serves as the main documentation for content management.
# It is excluded from all content listings by the _hidden property.
---

# Content Overview

This directory contains all the content for the Control System Lab website at the University of Nottingham Ningbo China. Content is managed using Nuxt Content v2, which allows for easy editing of Markdown files with YAML frontmatter.

## Directory Structure

```bash
content/
├── readme.md                 # This file - Content management guide
├── main.css                  # Global styles (design system, layout, components)
├── carousel-manifest.json    # Homepage carousel slide definitions
├── i18n/                     # Internationalization dictionaries
│   ├── en.json               # English UI strings
│   └── zh-CN.json            # Simplified Chinese UI strings
├── members/                  # Team member profiles (single-file pattern)
│   ├── readme.md             # Member frontmatter template
│   ├── staff/                # Faculty and staff
│   │   └── assets/           # Staff photos (WebP/JPG)
│   ├── research-students/    # PhD and research students
│   │   └── assets/           # Student photos (JPG/PNG)
│   ├── research-assistants/  # Research assistants
│   │   └── assets/           # RA photos (JPG/PNG)
│   └── alumni/               # Former members
├── news/                     # News and announcements (single-file pattern)
│   └── readme.md             # News frontmatter template
├── publications/             # Research publications (single-file pattern)
│   ├── readme.md             # Publication frontmatter template
│   ├── 2022/                 # Publications by year
│   └── 2024/
├── projects/                 # Research projects (folder + index.md pattern)
│   ├── readme.md             # Project frontmatter template
│   └── {project-slug}/       # Each project is a directory
│       ├── index.md          # Project content
│       └── assets/           # Project images, SVGs, videos
└── positions/                # Open positions (single-file pattern)
    └── readme.md             # Position frontmatter template
```

### Asset Co-location

Images and media are stored alongside the content that uses them, inside `assets/` subdirectories. There are two patterns:

**Shared category assets** — used by single-file content types (members, publications, news):

```bash
content/members/staff/
  salman-ijaz.md           # References image via frontmatter: image: assets/salman-ijaz.webp
  assets/
    salman-ijaz.webp        # Shared across all staff in this category
```

**Per-content assets** — used by folder-based content (projects):

```bash
content/projects/2026-omnicopter-control-research/
  index.md                  # References: image: assets/omnicopter_banner.svg
  assets/
    omnicopter_banner.svg   # Scoped to this project only
    hardware_prototype.jpg
```

In Markdown, reference co-located assets with relative paths:

```markdown
<!-- Inside a project's index.md -->
![Omnicopter Banner](./assets/omnicopter_banner.svg)
```

## Content Types

### 1. Members (`/members`)

Team member profiles organized by category:

- **staff**: Faculty and staff members
- **research-students**: PhD and research students
- **research-assistants**: Research assistants
- **alumni**: Former lab members

**Key fields**: `name`, `role`, `email`, `image`, `category`, `order`

### 2. News (`/news`)

News articles and announcements.

**Key fields**: `title`, `date`, `tags`, `description`

### 3. Publications (`/publications`)

Research publications organized by year.

**Key fields**: `title`, `authors`, `year`, `doi`, `venue`, `keywords`

### 4. Projects (`/projects`)

Research projects with status tracking.

**Key fields**: `title`, `description`, `status`, `year`, `image`, `funded`

**Status options**: `open`, `ongoing`, `completed`, `maintained`

### 5. Positions (`/positions`)

Open positions for recruitment.

**Key fields**: `title`, `description`, `type`, `requirements`, `email`

## Adding New Content

1. Navigate to the appropriate content directory
2. Create a new `.md` file with a descriptive filename
3. Copy the frontmatter template from the corresponding `readme.md`
4. Fill in the required and optional fields
5. Write your content in Markdown below the frontmatter
6. The content will automatically appear on the website

### Single-file vs. Folder Content

Nuxt Content supports two ways to organize content. Choose based on whether you need co-located assets:

#### Single-file pattern (simple content)

For content that only needs text (no images or media), use a flat `.md` file:

```bash
content/members/staff/
  salman-ijaz.md          # Route: /members/staff/salman-ijaz
```

The route is derived from the file path. This pattern is used for **members**, **publications**, and **news** — content types where images are shared across a category's `assets/` folder.

#### Folder + `index.md` pattern (content with assets)

For content that has its own images, diagrams, or videos, create a folder with an `index.md` and an `assets/` subdirectory:

```bash
content/projects/2026-omnicopter-control-research/
  index.md                # Route: /projects/2026-omnicopter-control-research
  assets/
    omnicopter_banner.svg
    hardware_prototype.jpg
    bench_test_thumbnail.mp4
```

**Why use folders?**

- Assets are scoped to that specific content — no naming collisions with other content
- Relative paths in Markdown work naturally: `![Banner](./assets/omnicopter_banner.svg)`
- Adding localized versions is clean: add `index.zh-CN.md` alongside `index.md`

This pattern is used for **projects** — content that is media-heavy and self-contained.

#### How to choose

| Pattern             | When to use                                 | Examples                    |
|---------------------|---------------------------------------------|-----------------------------|
| Single `.md` file   | Text-only content, shared category assets   | Members, Publications, News |
| Folder + `index.md` | Content with its own images/videos/diagrams | Projects                    |

## Hiding Content

To hide a file from the content listing (e.g., template files):

```yaml
---
_hidden: true
---
```

## Image Guidelines

- **Members**: 400×400px (square), WebP preferred (JPG/PNG also accepted)
- **Projects**: 800×600px or 1200×800px, SVG for diagrams, WebP/JPG for photos
- **News**: 800×450px (16:9), WebP recommended
- **Location**: Place in the `assets/` folder next to the content file
- **Naming**: Use lowercase, hyphenated filenames matching the content slug (e.g., `salman-ijaz.md`)

## Best Practices

1. Use consistent naming conventions for filenames
2. Include all required frontmatter fields
3. Keep descriptions concise (under 160 characters for SEO)
4. Use proper Markdown formatting
5. Test changes locally before deploying

## Deployment

Content changes are automatically deployed when pushed to the `main` branch via GitHub Actions.

## Internationalization (i18n)

The site supports English (`en`) and Simplified Chinese (`zh-CN`). The language is auto-detected from the browser and can be switched via the language toggle in the header. No URL changes — the same routes serve both languages.

### UI Strings

All UI strings (navigation, labels, section titles, error messages, etc.) are stored in JSON dictionaries under `i18n/`:

- `i18n/en.json` — English strings
- `i18n/zh-CN.json` — Simplified Chinese strings

To add or update a UI string, edit both files. Keys use a dot-namespace convention (e.g., `nav.home`, `footer.tagline`, `members.staff`).

### Content Locale (Markdown Files)

Markdown content files can be localized by adding a locale suffix to the filename:

| Filename        | Locale             | Notes                 |
|-----------------|--------------------|-----------------------|
| `page.md`       | English (default)  | No suffix = English   |
| `page.en.md`    | English            | Explicit English      |
| `page.en-US.md` | English            | Explicit English (US) |
| `page.zh.md`    | Simplified Chinese | Short form            |
| `page.zh-CN.md` | Simplified Chinese | Full locale code      |

Files with the same base name are treated as translations of the same document. The site automatically shows the version matching the user's language, falling back to English if no translation exists.

**Localizing single-file content** (members, publications, news):

```bash
content/members/staff/
  salman-ijaz.md           # English (default)
  salman-ijaz.zh-CN.md     # Chinese translation
  assets/
    salman-ijaz.webp       # Shared photo (used by both locales)
```

**Localizing folder-based content** (projects):

```bash
content/projects/2026-omnicopter-control-research/
  index.md                 # English (default)
  index.zh-CN.md           # Chinese translation
  assets/                  # Shared assets (used by both locales)
    omnicopter_banner.svg
    hardware_prototype.jpg
```
