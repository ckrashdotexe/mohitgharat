# Mohit Gharat Cinematography Portfolio

A premium, minimal cinematography website for Mohit Gharat built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion. The experience features a reels-style video gallery, infinite cinematic stills grid, marquee clients, testimonial slider, and a contact form wired to Formspree.

## Tech Stack
- Next.js App Router (React 19, TypeScript)
- Tailwind CSS 4 (utility-first styling)
- Framer Motion (micro-interactions + overlay transitions)
- React Player (lazy YouTube embeds with viewport autoplay)
- Email via Formspree

## Project Structure
```
src/
├─ app/
│  ├─ page.tsx            # Page composition
│  └─ layout.tsx          # Fonts + metadata
├─ components/            # Modular sections and UI widgets
└─ data/                  # JSON data sources (portfolio, cinematics, clients, testimonials)
```

## Available Scripts
| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Start local dev server on http://localhost:3000 |
| `npm run build` | Create production build                         |
| `npm start`     | Serve the production build                      |
| `npm run lint`  | Run ESLint                                      |

## Editing Content
- **Portfolio videos**: `src/data/portfolio.json`
- **Cinematic stills**: `src/data/cinematics.json`
- **Client logos**: `src/data/clients.json`
- **Testimonials**: `src/data/testimonials.json`

Each JSON entry is referenced on the page automatically, so updating or adding records requires no code changes.

## SEO & Performance
- Custom metadata, OG, and Twitter tags configured in `src/app/layout.tsx`
- Lazy-loaded images and YouTube embeds
- Remote image domains defined in `next.config.ts`

## Deployment
Deploy seamlessly to Vercel or any Node-compatible host:
```
npm run build
npm start
```

## License
All footage, imagery, and logos belong to Mohit Gharat and their respective owners.
