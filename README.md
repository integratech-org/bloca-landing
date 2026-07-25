# Bloca Landing Page (`bloca-landing`)

Part of the **BLOCA** ecosystem — an IoT-monitored plastic-to-brick compactor with machine learning-based grading.

`bloca-landing` is the official marketing and public web portal for Bloca, showcasing how plastic waste is transformed into construction-ready building blocks through IoT monitoring and AI grading.

## Features

- **Product Showcase:** Interactive overview of the plastic compaction and brick grading technology.
- **Impact Metrics:** Real-time or illustrative statistics on plastic diverted from landfills and bricks produced.
- **Responsive Design:** Mobile-first, high-performance UI styled with Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 with React 19 & TypeScript
- **Styling:** Tailwind CSS v4 with Shadcn UI & Next Themes
- **Quality Control:** ESLint, Prettier, TypeScript, and Husky pre-commit hooks

## Project Structure

```text
bloca-landing/
├── public/            # Static images and icons
├── src/
│   ├── app/           # Next.js App Router (layout, page, styles)
│   ├── components/    # Reusable UI components & theme provider
│   └── lib/           # Utility functions
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Related Repositories

- [`bloca-admin`](https://github.com/integratech-org/bloca-admin) - Admin dashboard web UI
- [`bloca-mobile`](https://github.com/integratech-org/bloca-mobile) - Cross-platform mobile app
