# Shadab Hussain | Portfolio

Personal portfolio for Shadab Hussain, a frontend-focused engineer building
production React and Next.js applications, performance-focused interfaces,
and full-stack features with Node.js, Express, and MongoDB.

The site presents professional experience, selected projects, technical
skills, and contact links in a responsive single-page experience.

## Features

- Responsive portfolio built with the Next.js App Router
- Sections for about, skills, experience, projects, and contact
- Filterable projects by production and personal work
- Animated role text, technology marquee, and scroll reveals
- Reduced-motion support for users who prefer less animation
- SEO metadata, sitemap, robots file, and a static favicon
- Generated project covers that can be replaced with real screenshots

## Tech stack

- Next.js 14 and React 18
- TypeScript
- Tailwind CSS
- React Icons and React Scroll
- ESLint with the Next.js configuration

## Getting started

### Requirements

- Node.js 18.17 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

Run the available code-quality check with:

```bash
npm run lint
```

## Updating the portfolio

Most portfolio content is centralized in [lib/data.ts](lib/data.ts). Update
that file to change the profile, contact details, statistics, skills,
experience, projects, and navigation links.

Before deploying, also:

1. Add the resume PDF at `public/Shadab_Hussain_Frontend_Resume.pdf`.
2. Replace `your-domain.com` in `app/layout.tsx`, `app/sitemap.ts`, and
   `app/robots.ts` with the real production domain.
3. Confirm that project URLs and social links in `lib/data.ts` are current.
4. Add `public/og.png` and reference it in the Open Graph and Twitter metadata
   if the site needs a custom social sharing preview.

## Project structure

```text
app/          Next.js routes, metadata, global styles, sitemap, and robots
components/   Portfolio sections and reusable UI components
lib/data.ts   Portfolio content and navigation data
lib/fonts.ts  Local font configuration
public/       Static assets such as the resume and social preview image
```

## Deployment

The project can be deployed to [Vercel](https://vercel.com/) without extra
configuration. It can also run on any Node.js host that supports the standard
Next.js production commands:

```bash
npm run build
npm run start
```
