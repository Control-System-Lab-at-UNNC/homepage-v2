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
├── readme.md              # This file - Content management guide
├── members/               # Team member profiles
│   ├── readme.md          # Member frontmatter template
│   ├── staff/             # Faculty and staff
│   ├── research-students/ # PhD and research students
│   ├── research-assistants/# Research assistants
│   └── alumni/            # Former members
├── news/                  # News and announcements
│   └── readme.md          # News frontmatter template
├── publications/          # Research publications
│   ├── readme.md          # Publication frontmatter template
│   ├── 2022/              # Publications by year
│   └── 2024/
├── projects/              # Research projects
│   └── readme.md          # Project frontmatter template
└── positions/             # Open positions
    └── readme.md          # Position frontmatter template
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

## Hiding Content

To hide a file from the content listing (e.g., template files):

```yaml
---
_hidden: true
---
```

## Image Guidelines

- **Members**: 400x400px (square), WebP recommended
- **Projects**: 800x600px or 1200x800px, WebP recommended
- **News**: 800x450px (16:9), WebP recommended
- **Location**: `/public/images/` directory

## Best Practices

1. Use consistent naming conventions for filenames
2. Include all required frontmatter fields
3. Keep descriptions concise (under 160 characters for SEO)
4. Use proper Markdown formatting
5. Test changes locally before deploying

## Deployment

Content changes are automatically deployed when pushed to the `main` branch via GitHub Actions.
