# Minimalist Personal Developer Portfolio

A modern developer portfolio website designed for software engineers. Built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Features

- **Premium Dark Aesthetic**: Refined zinc/slate color palette, subtle borders, high-contrast typography, and delicate ambient backdrops.
- **Single Configuration File**: Every piece of information (name, bio, links, tech stack, featured projects, learning items) is managed in `src/config/portfolio.ts`.
- **Complete Sections**:
  1. **Hero**: Headline (*"Building digital experiences through code."*), professional introduction, availability badge, CTA buttons, social links, and quick email copy.
  2. **About Me**: Narrative, engineering philosophy, and core principles.
  3. **Tech Stack**: Interactive categorized showcase (React, Next.js, Node.js, Express, MongoDB, Git, GitHub, Tailwind CSS, TypeScript, etc.) with custom vector icons.
  4. **Featured Projects**: Filterable project cards with descriptions, key metrics, technical highlights, GitHub repository, and live demo links.
  5. **Currently Learning**: Tracking real-world progress across System Design, DSA, AI Engineering, and Full-Stack development.
  6. **Contact**: Interactive message form, instant email copy with feedback toast & confetti, mailto fallback, and social cards.
  7. **Footer**: Navigation links, copyright, tech stack attribution, and smooth scroll to top.
- **Framer Motion Animations**: Micro-interactions, smooth scroll spy, layout tab transitions, and entrance animations.
- **Responsive & Accessible**: Fully optimized for mobile, tablet, and desktop screens with semantic HTML5 landmarks and keyboard navigation.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

The production assets will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Personalize Your Portfolio

All your data lives in one centralized file:
👉 **[`src/config/portfolio.ts`](src/config/portfolio.ts)**

Simply open this file and update:
- `personal.name`: Your full name
- `personal.role`: Your title (e.g. "Full-Stack Engineer")
- `personal.location`: Your location or "Remote"
- `personal.email`: Your contact email
- `personal.bio`: Array of bio paragraphs
- `personal.philosophy`: Your engineering philosophy
- `socials`: Your GitHub, LinkedIn, X, and Email links
- `techStack`: Add, remove, or modify your tech skills
- `projects`: Add your own projects with GitHub and live URLs
- `learning`: Customize your current learning tracks and focus areas

---

## 📁 Project Structure

```
├── src/
│   ├── config/
│   │   └── portfolio.ts       # Centralized configuration (single source of truth)
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces for portfolio data
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Floating header with active section indicator & mobile drawer
│   │   │   └── Footer.tsx     # Clean footer with back-to-top & copyright
│   │   ├── sections/
│   │   │   ├── Hero.tsx       # Intro, headline, CTAs, social links, copy email
│   │   │   ├── About.tsx      # Bio, engineering philosophy & principles
│   │   │   ├── TechStack.tsx  # Filterable tech grid with custom vector icons
│   │   │   ├── Projects.tsx   # Filterable project cards with metrics & links
│   │   │   ├── Learning.tsx   # Continuous growth cards with progress bars
│   │   │   └── Contact.tsx    # Contact form, mail links, copy email with toast
│   │   └── ui/
│   │       ├── BackgroundGlow.tsx  # Subtle ambient grid & spotlight
│   │       ├── SectionHeading.tsx  # Minimalist typography section headings
│   │       ├── TechIcon.tsx        # Crisp SVG icons for technologies
│   │       └── Toast.tsx           # Non-intrusive notification toast
│   ├── utils/
│   │   └── cn.ts              # Tailwind merge utility
│   ├── App.tsx                # Main application wrapper
│   ├── index.css              # Global styles, dark grid pattern, scrollbar
│   └── main.tsx               # Application entrypoint
├── index.html                 # HTML shell with SEO meta tags & font links
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
└── vite.config.ts             # Vite build configuration
```

---

## 🌐 Deployment

### Vercel / Netlify / Cloudflare Pages
1. Push this repository to GitHub.
2. Import the project in Vercel or Netlify.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
