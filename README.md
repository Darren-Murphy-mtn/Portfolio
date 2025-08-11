# Darren Murphy – Portfolio

A polished, formal, and fully–responsive personal portfolio built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.
lets try
---

## 1. Prerequisites

* **Node.js** ≥ 18
* **pnpm** (recommended) or npm / yarn

## 2. Install & Run

```bash
pnpm install         # or npm install / yarn
pnpm dev             # start local dev server on http://localhost:3000
```

Production build:

```bash
pnpm build           # next build
pnpm start           # next start
```

## 3. Adding / Editing Content

### Projects
1. Open `src/data/projects.ts`.
2. Each object inside the exported `projects` array represents one project.
3. Duplicate an item or edit existing properties (`label`, `summary`, `tags`, `images`, `links`, …).
4. Place screenshots inside `public/images/projects/` and reference the filename in the `images` array.

### Expeditions
1. Open `src/data/expeditions.ts` and follow the same steps.
2. Images belong in `public/images/expeditions/`.

> No code changes are necessary – grids & modals update automatically at runtime.

## 4. Changing Theme / Typography

* Update CSS variables in `src/styles/globals.css`.
* Tailwind colour shortcuts `accentProject` & `accentExpedition` are defined in `tailwind.config.ts`.
* Swap fonts in **globals.css** and adjust the Tailwind `fontFamily` extension.

## 5. Deploying to Vercel

1. Push the repo to GitHub.
2. Import into [Vercel](https://vercel.com).
3. Use default Next.js build settings. Environment vars not required.
4. Connect or purchase a custom domain in Vercel’s dashboard.

## 6. Accessibility Checklist

- [x] Keyboard-only navigation across all interactive elements.
- [x] Visible focus rings & focus trapped inside modals.
- [x] `aria-label` & roles on custom controls.
- [x] Reduced-motion friendly animations.
- [x] Semantic HTML sectioning and headings.

---

## Manual QA Checklist

1. **Keyboard** – Tab through nav → open / close modal (Enter / Esc) → focus returns.
2. **Dark mode** – Toggle via header, persists during session.
3. **Responsive** – Verify layouts at 320 px, 768 px, and ≥1280 px.
4. **Reduced Motion** – Enable OS *Reduce Motion*; hover animations should fade instantly.
5. **Lighthouse** – Run audit, expect scores ≥ 90 across categories.
