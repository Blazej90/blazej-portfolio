# Błażej Bartoszewski — Portfolio

Personal portfolio website showcasing my projects, tech stack and a contact form.
Live content is bilingual (PL/EN) with the language preference persisted in a cookie.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components, Turbopack)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui + Aceternity UI components
- **Animations:** Framer Motion, react-scroll-parallax, canvas-confetti
- **Backend:** Next.js Route Handlers — contact form (Nodemailer/Gmail) and a likes counter (Supabase)
- **Tooling:** TypeScript, ESLint 9 (flat config), pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Environment variables

Create a `.env.local` file in the project root:

```bash
# Contact form (/api/contact) — Gmail account used to send emails
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_RECEIVER=where-messages-should-arrive@example.com

# Likes counter (/api/likes) — Supabase project with a "likes" table
# (columns: id text, count int)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

> `EMAIL_PASS` is a Gmail *App Password*, not the account password
> (requires 2FA enabled on the Google account).

### Run

```bash
pnpm install
pnpm dev        # dev server on http://localhost:3000
```

Other scripts:

```bash
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # ESLint
pnpm test       # data & locale integrity tests (node:test)
```

## Project Structure

```
src/
├── app/            # App Router: layout (server, SEO metadata), page, API routes
├── components/     # page sections (hero, about, projects, contact, footer, navbar)
│   └── ui/         # reusable UI primitives (shadcn/Aceternity based)
├── context/        # language context (PL/EN, cookie persistence)
├── data/           # single source of truth for projects (urls + pl/en copy)
├── lib/            # supabase client, utils
└── locales/        # UI translations per section
```

## Deployment

The app deploys cleanly to Vercel (recommended) — remember to configure the
environment variables listed above in the project settings.
