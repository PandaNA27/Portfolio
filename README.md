# Portfolio

A single-page game developer portfolio styled as a pastel desktop monitor. The screen has two rows, **Games I work on** and **What I do**. Clicking any card opens its own full-screen page, and a Summary and About section sit below the monitor.

It's plain HTML, CSS and JavaScript, so there's no build step. It runs directly on GitHub Pages.

## Editing the content

Everything you see on the site comes from **`js/content.js`**. You shouldn't need to touch the other files.

| Block | What it controls |
|---|---|
| `GAMES` | The game cards on the monitor and each game's page (cover, role, links, screenshots) |
| `SITE` | Name, tagline and year |
| `SUMMARY` | The stats, scrolling image strip, highlights and intro in the Summary section |
| `ABOUT` | The About text, "currently" list and fun facts |
| `SECTIONS` | The "What I do" cards and the projects on each one's page |

Each project can have:

```js
{ title: "Alarm clock", year: "2026", tags: ["Maya", "High poly"],
  thumb: "img/3d/clock-render.png",                 // main image
  images: ["img/3d/clock-wireframe.png"],           // extra close-ups
  video: "gdrive:FILE_ID",                          // or a YouTube ID, "vimeo:123", "tiktok:123" or an .mp4
  link: "https://...",                              // adds a "view project" link
  placeholder: "In development ✿",                  // label shown when there's no image yet
  desc: "One or two sentences about it." }
```

Tips:
- Put web-sized images in `img/`: JPG, about 1600 px wide and under 400 KB. Keep large originals out of the repo.
- Host videos on Google Drive (shared as *Anyone with the link*), YouTube or Vimeo. GitHub has a 100 MB file limit.
- Every card has its own link, e.g. `/#/game/rough-waters` or `/#/field/3d-modelling`.
- After editing, bump the `?v=` number on the three `<link>`/`<script>` tags in `index.html` so visitors get the new version instead of a cached one.

## Publishing

1. Create a public repo called `<your-username>.github.io`.
2. Upload `index.html`, `README.md`, `css/`, `js/` and `img/`.
3. Go to **Settings → Pages**, then set **Source: Deploy from a branch** and **Branch: `main` / root**.
4. The site goes live at `https://<your-username>.github.io` after a minute or two.

## Previewing locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
