# Contributing

This guide covers how to manage content for the Control System Lab website.

## Directory Structure

```bash
src/
├── i18n/                     # Internationalization dictionaries
│   ├── en.json               # English UI strings
│   └── zh-CN.json            # Simplified Chinese UI strings
├── members/                  # Team member profiles
│   ├── staff/                # Faculty and staff
│   │   └── assets/           # Staff photos (WebP/JPG)
│   ├── research-students/    # PhD and research students
│   │   └── assets/           # Student photos
│   ├── research-assistants/  # Research assistants
│   │   └── assets/           # RA photos
│   └── alumni/               # Former members
├── news/                     # News and announcements
├── publications/             # Research publications by year
├── projects/                 # Research projects
│   └── {project-slug}/
│       ├── index.md          # Project content
│       └── assets/           # Project images, SVGs, videos
├── positions/                # Open positions
└── public/
    └── images/               # Static images (logo, carousel, etc.)
```

### Asset Co-location

Images and media are stored alongside the content that uses them, inside `assets/` subdirectories.

**Shared category assets** — used by single-file content types (members, publications, news):

```bash
src/members/staff/
  salman-ijaz.md           # image: assets/salman-ijaz.webp
  assets/
    salman-ijaz.webp
```

**Per-content assets** — used by folder-based content (projects):

```bash
src/projects/2026-omnicopter-control-research/
  index.md                  # image: assets/omnicopter_banner.svg
  assets/
    omnicopter_banner.svg
    hardware_prototype.jpg
```

In Markdown, reference co-located assets with relative paths:

```markdown
![Omnicopter Banner](./assets/omnicopter_banner.svg)
```

## Content Types

### Members (`/members`)

Team member profiles organized by category: **staff**, **research-students**, **research-assistants**, **alumni**.

**Key fields**: `name`, `role`, `email`, `image`, `category`, `order`

### News (`/news`)

News articles and announcements.

**Key fields**: `title`, `date`, `tags`, `description`

### Publications (`/publications`)

Research publications organized by year.

**Key fields**: `title`, `authors`, `year`, `doi`, `venue`, `keywords`

### Projects (`/projects`)

Research projects with status tracking.

**Key fields**: `title`, `description`, `status`, `year`, `image`, `funded`

**Status options**: `open`, `ongoing`, `completed`, `maintained`

### Positions (`/positions`)

Open positions for recruitment.

**Key fields**: `title`, `description`, `type`, `requirements`, `email`

## Adding New Content

1. Navigate to the appropriate content directory
2. Create a new `.md` file with a descriptive filename
3. Copy the frontmatter template from existing files
4. Fill in the required and optional fields
5. Write your content in Markdown below the frontmatter
6. Commit and push — changes are automatically deployed

### Single-file vs. Folder Content

| Pattern               | When to use                                 | Examples                    |
|-----------------------|---------------------------------------------|-----------------------------|
| Single `.md` file     | Text-only content, shared category assets   | Members, Publications, News |
| Folder + `index.md`   | Content with its own images/videos/diagrams | Projects                    |

## Hiding Content

To hide a file from the content listing (e.g. template files):

```yaml
---
_hidden: true
---
```

## Image Guidelines

- **Members**: 400×400px (square), WebP preferred
- **Projects**: 800×600px or 1200×800px, SVG for diagrams, WebP/JPG for photos
- **News**: 800×450px (16:9), WebP recommended
- **Naming**: Use lowercase, hyphenated filenames matching the content slug

## Internationalization (i18n)

The site supports English (`en`) and Simplified Chinese (`zh-CN`). Language is auto-detected from the browser and can be switched via the header toggle.

### UI Strings

All UI strings are stored in `src/i18n/`:

- `en.json` — English
- `zh-CN.json` — Simplified Chinese

To add or update a UI string, edit both files. Keys use dot-namespace convention (e.g. `nav.home`, `footer.tagline`, `members.staff`).

### Content Locale

Markdown content files can be localized by adding a locale suffix:

| Filename        | Locale             |
|-----------------|--------------------|
| `page.md`       | English (default)  |
| `page.zh-CN.md` | Simplified Chinese |

**Localizing a member profile:**

```bash
src/members/staff/
  salman-ijaz.md           # English (default)
  salman-ijaz.zh-CN.md     # Chinese translation
  assets/
    salman-ijaz.webp       # Shared photo
```

**Localizing a project:**

```bash
src/projects/2026-omnicopter-control-research/
  index.md                 # English (default)
  index.zh-CN.md           # Chinese translation
  assets/                  # Shared assets
    omnicopter_banner.svg
```

## Deployment

Content changes are automatically deployed when pushed to the `main` branch via GitHub Actions.
