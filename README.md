# Freya Wang's Portfolio

A single-page personal portfolio with a short bio, education, links and selected projects, built with React, Vite and Tailwind CSS.

**Live site:** https://wangye.site/

## Run locally

You need [Node.js](https://nodejs.org/) installed.

```
npm install
npm run dev
```

Then open http://127.0.0.1:3000.

## Update the content

| To change | Edit |
| --- | --- |
| Bio, education and links | `src/components/sections/Home.jsx` |
| Projects | `src/data/projects.js` |
| Headshot | `src/assets/profile.webp` |
| Project images | `public/media/` |

## Build and deploy

```
npm run build
npm run preview
```

`npm run build` creates the production site in `dist/`, and `npm run preview` serves it locally so you can check it.

The site is hosted on Vercel, which deploys it when changes reach `main`. Its settings are in `vercel.json`.
