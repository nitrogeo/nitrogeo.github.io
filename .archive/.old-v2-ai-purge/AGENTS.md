# AGENTS.md

## General project context

This repository is a simple static GitHub Pages site for `nitrogeo`. It currently contains a single landing page (`index.html`) and a stylesheet (`styles.css`).

The goal of the latest work was to update the homepage to better match the provided reference image, `nitrogeo site v2.png`, while keeping the implementation lightweight and static-only.

## Repo structure

- `index.html` — homepage markup and content
- `styles.css` — all site styling and responsive layout rules
- `404.html` — fallback page
- `.assets/` — local asset files used by the site
- `nitrogeo site v2.png` — reference image used for visual comparison

## Design intent

The site is intended to emulate a minimal, editorial landing page with:

- a blue-to-violet-to-pink gradient background
- a pill-shaped nav bar with black border
- white text and bold contrast for readability
- a left-side block layout for project/work links
- a centered hero statement and small tagline at the bottom of the main content area

## Scope and constraints

- Static HTML/CSS only; no framework or build process is required.
- Browser dependency installation was intentionally avoided due to disk space constraints.
- The implementation was done via code-level reasoning and visual comparison against the provided reference image.
- Any exact pixel tuning must be confirmed in-browser later.

## Notable implementation notes

- `index.html` was restructured to mirror the reference composition more closely.
- `styles.css` was rewritten to emphasize gradient background, a more compact nav bar, and a responsive editorial layout.
- Imported `Inter` and `EB Garamond` for a closer match to the reference aesthetic.
- The page keeps a mobile-safe layout without adding a framework or extra assets.

## Current state

The homepage styling update is in place and the repo is in a clean, narrow-scope state focused on this landing page refresh.

## Files changed

- `index.html`
- `styles.css`

## Current git status

```text
$ git --no-pager status --short
M index.html
 M styles.css
?? "nitrogeo site v2.png"
```
