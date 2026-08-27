# Cesar Ramos — AI Enablement Lab

An interactive portfolio designed to let hiring managers experience Cesar Ramos's AI enablement method instead of reading long case studies. The experience moves visitors through four choices — friction, solution, adoption, and impact — then connects those decisions to real examples of learning transformation, participation design, adaptive assessment, and AI-supported coaching.

## Technology

- React
- TypeScript
- Vite
- Modern CSS
- Local component state only
- Static, GitHub Pages-compatible architecture
- No backend, authentication, or paid services required

## Local installation

```bash
npm install
npm run dev
```

## Development commands

```bash
npm run dev
npm run typecheck
npm test
npm run build
npm run preview
```

## Production build

```bash
npm run build
```

Vite outputs the static production bundle to `dist/`.

## GitHub Pages deployment

The Vite base path is already configured for the repository name:

```ts
base: '/cesar-ai-enablement/'
```

After Cesar approves the content, enable GitHub Pages through a GitHub Actions workflow or deploy the contents of `dist/` to a Pages branch. Do **not** publish before reviewing the draft portfolio figures.

## Editing portfolio content

All résumé facts, proof-strip content, challenge metrics, case-study facts, status labels, and About-section content are centralized in:

`src/data/portfolioData.ts`

That file begins with the reminder:

`Draft portfolio figures — review with Cesar before production publishing.`

The verified result that should remain unchanged is:

**Reduced pool-side employee turnover by 10% within three months.**

Other prototype figures should be reviewed with Cesar before public production publishing.

## Assets

- Optimized headshot: `src/assets/cesar-headshot.webp`
- Downloadable résumé: `public/Cesar_Ramos_AI_Enablement_Resume.docx`

The headshot is cropped and optimized only; facial appearance is not altered.

## Accessibility

The prototype includes semantic sections and headings, keyboard-operable controls, visible focus states, ARIA labels for interactive challenge progress and tabs, accessible pressed/selected states, meaningful alt text, high-contrast text and controls, responsive typography, a skip link, and `prefers-reduced-motion` support.

## Content and naming safeguards

- The project consistently uses **Event App** for the event participation project.
- The existing `cesar-instructional-design` repository must not be modified.
- Work should remain on the `ai-enablement-lab` feature branch until Cesar approves it.
- Do not merge to `main` or publish GitHub Pages without explicit approval.
