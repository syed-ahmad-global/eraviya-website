# Eraviya Solutions Website

> Modern corporate website for Eraviya Solutions - An AI and software development company specializing in AI Solutions, Full Stack Development, Mobile/Cross-Platform apps, and No-Code/Low-Code Automation.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Core Pages](#core-pages)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Environment Variables](#environment-variables)
- [Performance Targets](#performance-targets)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Project Overview

**Eraviya Solutions** is rebuilding their website using modern technologies to establish a professional web presence that reflects their expertise in:

- **AI Solutions Development** - Custom AI, NLP, Computer Vision, Predictive Analytics
- **Full Stack Development** - React/Next.js frontends, Node.js/Python backends
- **Mobile & Cross-Platform** - React Native apps, Progressive Web Apps
- **No-Code/Low-Code Automation** - n8n, Make.com, workflow automation

### Objectives

1. Generate quality leads from CTOs, Startup Founders, and Enterprise Managers
2. Showcase technical expertise through interactive portfolio/case studies
3. Establish thought leadership through active content marketing
4. Provide modern, enterprise-grade user experience

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Frontend Framework** | Next.js | 16.1.6 |
| **React** | React | 19.2.4 |
| **Styling** | Tailwind CSS | v4.1.9 |
| **UI Library** | shadcn/ui | (New York style) |
| **Theme** | next-themes | ^0.4.6 |
| **Fonts** | Inter, Space Grotesk, JetBrains Mono | via next/font/google |
| **TypeScript** | TypeScript | 5.7.3 |
| **Icons** | Lucide React | ^0.564.0 |
| **Analytics** | Vercel Analytics | ^1.6.1 |

### Key Dependencies

- **@radix-ui*** - Unstyled, accessible UI components
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Tailwind class merging
- **cmdk** - Command menu component
- **react-hook-form** - Form handling
- **zod** - Schema validation
- **recharts** - Data visualization

### Component Strategy

- **Server Components by default** - Improved performance, reduced client bundle
- **Client Components only when needed** - Hooks, event handlers, browser APIs

---

## Project Structure

```
eraviya-website/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with ThemeProvider, Navbar, Footer
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── blog/                    # Blog listing and individual posts
│   ├── contact/                 # Contact page with form
│   ├── portfolio/               # Portfolio and case studies
│   ├── services/                # Services pages
│   ├── technologies/            # Tech stack showcase
│   └── globals.css              # Global styles with Tailwind v4
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components (DO NOT edit manually)
│   ├── home/                    # Home page specific components
│   ├── navbar.tsx               # Navigation bar
│   ├── footer.tsx               # Site footer
│   ├── theme-provider.tsx       # Theme context for dark mode
│   ├── theme-toggle.tsx         # Dark mode toggle button
│   └── chat-widget.tsx          # AI chatbot for inquiries
├── lib/                          # Utility functions
│   ├── utils.ts                 # cn() utility for class merging
│   └── tech-icons.tsx           # Technology icon mappings
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Responsive detection hook
│   └── use-toast.ts             # Toast notifications
├── public/                       # Static assets
│   ├── eraviya-logo-lightMode.webp
│   ├── eraviya-logo-darkMode.webp
│   └── fav.webp
├── devInstructions/              # Development documentation
├── styles/                       # Additional global styles
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

---

## Core Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Overview with hero, services preview, portfolio teaser, social proof |
| **About** | `/about` | Company story, team, values |
| **Services** | `/services` | Detailed service offerings |
| **Portfolio** | `/portfolio` | Project showcase with case studies |
| **Technologies** | `/technologies` | Tech stack display |
| **Blog** | `/blog` | Articles and insights |
| **Contact** | `/contact` | Contact form and Calendly scheduling |

---

## Key Features

### Interactive Hero Components (Interchangeable)

> The home page hero section uses TWO interchangeable visual components. You can switch between them:

#### 1. ParticleField Component

- **Location:** `components/home/particle-field.tsx`
- Creates animated particles that respond to mouse movement
- Represents AI/technology with floating particles
- Alternative versions available in `particle-field-alternatives.tsx`

#### 2. InteractiveCodeVisual Component

- **Location:** `components/home/interactive-code-visual.tsx`
- Creates animated code/typing effects
- Represents software development
- Alternative versions available in `interactive-code-visual-alternatives.tsx`

**How to Switch:**

```typescript
// Option 1: Use ParticleField
import { ParticleField } from '@/components/home/particle-field'

// Option 2: Use InteractiveCodeVisual
import { InteractiveCodeVisual } from '@/components/home/interactive-code-visual'
```

Both components are responsive, optimized for performance, and support dark mode.

### Other Features

- **Dark/Light Mode Toggle** - Theme switcher with system preference detection
- **AI Chatbot** - Intelligent inquiry handling and lead capture (planned integration)
- **Responsive Design** - Mobile-first approach with optimized breakpoints
- **Portfolio Filtering** - Dynamic project showcase (to be implemented)
- **Calendly Integration** - Meeting scheduling (to be added)
- **SEO Optimized** - Meta tags, Open Graph, structured data (to be enhanced)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/syed-ahmad-global/eraviya-website.git
cd eraviya-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbo |
| `npm run dev:poll` | Start dev server with file polling (WSL/Docker) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Development Guidelines

### Adding New Pages

1. Create folder in `app/` with `page.tsx`
2. Export metadata for SEO
3. Follow Server Component pattern unless client interactivity is needed
4. Import Navbar and Footer via layout or directly

### Adding New Components

1. Use `'use client'` directive if using hooks, event handlers, or browser APIs
2. Define TypeScript interfaces for props
3. Use Tailwind classes with `cn()` utility for conditional styling
4. Export as named export (not default)
5. Place in appropriate `components/` subdirectory

### Using shadcn/ui Components

> **NEVER manually edit files in `components/ui/`**

To add new components:

```bash
npx shadcn@latest add <component-name>
```

### Styling Conventions

- Use Tailwind utility classes
- Use `cn()` from `@/lib/utils` for conditional class merging
- CSS variables for theming (defined in `app/globals.css`)
- Test in both light and dark modes

### Example Component Pattern

```typescript
'use client'

import { cn } from '@/lib/utils'
import { SomeIcon } from 'lucide-react'

interface MyComponentProps {
  className?: string
  title: string
  children?: React.ReactNode
}

export function MyComponent({ className, title, children }: MyComponentProps) {
  return (
    <div className={cn('base-classes p-4 rounded-lg', className)}>
      <SomeIcon className="h-5 w-5" />
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

---

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```bash
# Calendly
NEXT_PUBLIC_CALENDLY_URL=your_calendly_link

# OpenAI/Anthropic (for AI chatbot)
OPENAI_API_KEY=your_key
# or
ANTHROPIC_API_KEY=your_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | <1.5s |
| Largest Contentful Paint (LCP) | <2.5s |
| Cumulative Layout Shift (CLS) | <0.1 |
| Lighthouse Performance Score | >90 |
| Lighthouse Accessibility Score | >90 |

---

## Deployment

### Recommended Platform: Vercel

Vercel is the recommended hosting platform for optimal Next.js performance.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Links

- **Repository:** https://github.com/syed-ahmad-global/eraviya-website
- **Live Site:** https://eraviyasolutions.com

---

## Development Documentation

Additional documentation is available in the `devInstructions/` directory:

- `instructions.md` - Agent rules and development guidelines
- `eraviya-solutions-website-requirements.md` - Full project requirements
- `website-requirements-gathering-prompt.md` - Requirements gathering process

---

## Contact

**Eraviya Solutions**

- Email: syed.ahmad.global@gmail.com
- Phone: 03126084545
- Location: Sahiwal, Pakistan

---

## License

Proprietary - Eraviya Solutions © 2025

---

**Built with** - Next.js, React, Tailwind CSS, shadcn/ui
