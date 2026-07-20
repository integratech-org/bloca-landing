# bloca-landing

Marketing/landing web app for BLOCA.

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui
- next-themes

## Prerequisites

- Bun 1.x

## Getting started

```bash
# install dependencies
bun install

# start development server
bun run dev
```

Open `http://localhost:3000`.

## Available scripts

- `bun run dev` — start local dev server
- `bun run build` — create production build
- `bun run start` — run production server
- `bun run lint` — run ESLint
- `bun run lint:fix` — run ESLint and auto-fix
- `bun run ts-check` — run TypeScript checks
- `bun run prettier:check` — verify formatting
- `bun run prettier:fix` / `bun run format` — format codebase

## Project structure

```txt
src/
  app/         # Next.js routes and layouts
  components/  # reusable UI components
  hooks/       # custom hooks
  lib/         # utility helpers
```

## Notes

- Current homepage is at `src/app/page.tsx`.
- Theme support is wired through `ThemeProvider` in `src/app/layout.tsx`.
