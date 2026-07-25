# Setup Guide — Bloca Landing Page (`bloca-landing`)

Follow these instructions to set up, run, and develop the `bloca-landing` website locally.

## Prerequisites

- **Node.js**: Version 18.x or higher (Node 20+ recommended)
- **Package Manager**: `bun` (preferred) or `npm`

## Installation

1. Navigate to the project directory:

   ```bash
   cd bloca-landing
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

## Development

Start the Next.js development server:

```bash
bun run dev
# or
npm run dev
```

The site will be available at `http://localhost:3000`.

## Building for Production

Create an optimized production build:

```bash
bun run build
# or
npm run build
```

Start the production server:

```bash
bun run start
# or
npm run start
```

## Code Quality & Linting

- **Type Checking:**
  ```bash
  bun run ts-check
  ```
- **Linting:**
  ```bash
  bun run lint
  ```
- **Formatting (Prettier):**
  ```bash
  bun run prettier:check
  bun run prettier:write
  ```
