# Srinath Vatchavari Venkateshan — Portfolio

A premium editorial personal website for an independent thinker and interdisciplinary researcher. Built with Next.js, TypeScript, Tailwind CSS, React Three Fiber, Three.js, GSAP and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production check:

```bash
npm run typecheck
npm run build
npm start
```

## What is where

- `app/page.tsx` — section order.
- `components/` — navigation, hero, about, disciplines, projects, recognition, philosophy, opportunities, credentials, contact and footer.
- `components/hero/HeroSculpture.tsx` — the interactive React Three Fiber sculpture, including an SVG fallback when WebGL is unavailable.
- `lib/site.ts` — name, LinkedIn, GitHub, email and resume slots.
- `lib/content.ts` — disciplines, recognition, projects, principles and opportunity types.
- `public/images/srinath-portrait.png` — the portrait supplied with the brief.
- `data/certifications.json` — mirrored credentials fallback, written by the sync script.

## Editing content

All editorial copy lives in `lib/content.ts` and `lib/site.ts`. No section requires code changes in a component to update text, project status, keywords or links.

Project status labels are deliberately honest: `ongoing research`, `live tool`, `live prototype`, `prototype`, `completed`, `concept`. Change them in `lib/content.ts` as work progresses. Each project can list multiple links in its `links` array, such as a live dashboard and a repository.

## Contact

`lib/site.ts` contains the real email address, `vvsrinath0@gmail.com`, which renders as a working `mailto:` link in the contact section. `resume` is still `null` because no PDF was supplied; the section keeps it as a placeholder rather than inventing a document. When a PDF is ready, put it in `public/` and set:

```ts
resume: "/your-resume.pdf",
```

It becomes a working link immediately.

## LinkedIn certifications and licences

LinkedIn does **not** provide a public, unauthenticated API for a member's certifications, and its pages require sign-in for that data. An unauthenticated website therefore cannot scrape a profile and stay accurate or compliant. This site handles it honestly:

1. The **Credentials** section always links to the authoritative, up-to-date list on LinkedIn.
2. `/api/certifications` reads from a JSON endpoint you control and caches it for one hour. When that endpoint is configured, new credentials added to your sync source appear automatically after revalidation, and the UI is labelled “Synced from LinkedIn”.
3. When no endpoint is configured, the site shows a clean empty state rather than inventing certificates.
4. `npm run sync:certifications` writes the same provider response into `data/certifications.json` for static hosting or scheduled jobs.

Setup:

```bash
cp .env.example .env.local
```

Then set:

```
LINKEDIN_CERTIFICATIONS_ENDPOINT=https://your-provider.example/v1/linkedin/credentials
LINKEDIN_CERTIFICATIONS_API_KEY=your_key
```

Expected JSON (field names vary and are normalised):

```json
[
  {
    "title": "Certificate name",
    "issuer": "Issuing organisation",
    "date": "2026",
    "url": "https://credential-url"
  }
]
```

Run `npm run sync:certifications` whenever you want the static file refreshed. The API route also refreshes from the endpoint on a one-hour revalidation cycle.

## 3D performance and accessibility

- The sculpture uses low-poly geometry, instanced orbit nodes, and reduced segment counts on small screens.
- Rendering pauses when the hero leaves the viewport; device pixel ratio is capped.
- `prefers-reduced-motion: reduce` stops the GSAP reveal, Framer Motion transitions, canvas animation loop and fallback rotation.
- If WebGL is unavailable or the canvas fails, an SVG orbital artwork is rendered instead.
- Navigation links are real anchors, buttons are real toggles, and all external links open safely with `rel="noreferrer"`.

## Deployment

Deploy to any host that supports Next.js (Vercel, Netlify, etc.). Set `NEXT_PUBLIC_SITE_URL` for absolute Open Graph metadata, and the two LinkedIn variables above if you want credential mirroring.

No scroll-triggered a11y or SEO shortcuts are used: the production build runs cleanly and the page passes Lighthouse accessibility, SEO and best-practices checks.
