# CLAUDE.md - AI Assistant Guide for TrueBridge AI

> **Last Updated**: 2025-11-29
> **Purpose**: This document provides comprehensive guidance for AI assistants working on the TrueBridge AI codebase.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Codebase Architecture](#codebase-architecture)
4. [Development Workflow](#development-workflow)
5. [Coding Conventions](#coding-conventions)
6. [Component Patterns](#component-patterns)
7. [Styling Guidelines](#styling-guidelines)
8. [Common Tasks](#common-tasks)
9. [Git Workflow](#git-workflow)
10. [Performance & SEO](#performance--seo)
11. [Important Constraints](#important-constraints)

---

## Project Overview

**TrueBridge AI** is a high-converting, single-page marketing website for an AI consulting and automation agency targeting SMBs (Small to Medium Businesses).

### Key Characteristics
- **Type**: Single-page landing site (SPA with no routing)
- **Goal**: Lead generation and conversion optimization
- **Target Audience**: SMB decision-makers looking for AI automation solutions
- **Deployment**: Optimized for Vercel (can deploy to any Next.js host)
- **Current State**: Production-ready, fully functional

### Design Philosophy
- **Conversion-First**: Every element serves the conversion funnel
- **Dark Theme**: Modern, tech-forward aesthetic with blue/orange accents
- **Mobile-First**: Responsive design with touch-optimized interactions
- **Performance**: Fast load times, minimal JavaScript, optimized images
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels

---

## Tech Stack

### Core Framework
- **Next.js 16.0.5** - React framework with App Router, SSG
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety

### Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **@tailwindcss/postcss 4.1.17** - PostCSS plugin for Tailwind v4
- **Autoprefixer 10.4.22** - Browser compatibility

### Animation & Interactions
- **Framer Motion 12.23.24** - Declarative animations and scroll effects

### Forms & Validation
- **React Hook Form 7.67.0** - Performant form state management
- **Zod 4.1.13** - Schema validation
- **@hookform/resolvers 5.2.2** - Bridge between RHF and Zod

### UI & Icons
- **Lucide React 0.555.0** - SVG icon library (tree-shakeable)

### Utilities
- **clsx 2.1.1** - Conditional className construction
- **tailwind-merge 3.4.0** - Intelligent Tailwind class merging

### No External Libraries For
- ❌ State management (local state only)
- ❌ UI component libraries (all custom)
- ❌ Backend/API (form-only, no integration yet)
- ❌ Analytics (not yet integrated)
- ❌ Testing framework (not yet set up)

---

## Codebase Architecture

### Directory Structure

```
TrueBridge-AI/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles, Tailwind directives, custom utilities
│   ├── layout.tsx                # Root layout with SEO metadata
│   └── page.tsx                  # Main landing page (composes all sections)
│
├── components/
│   ├── ui/                       # Reusable atomic UI components
│   │   ├── Button.tsx            # Multi-variant button with loading states
│   │   ├── Card.tsx              # Flexible card wrapper
│   │   ├── Section.tsx           # Section container with layout management
│   │   ├── Input.tsx             # Form input with label and error display
│   │   ├── AnimatedCounter.tsx   # Number counter with intersection observer
│   │   └── index.ts              # Barrel exports
│   │
│   ├── sections/                 # Page sections (landing page structure)
│   │   ├── Hero.tsx              # Above-the-fold hero with dual CTAs
│   │   ├── ProblemStatement.tsx  # Pain points section
│   │   ├── SolutionOverview.tsx  # Solution benefits
│   │   ├── Services.tsx          # Service offerings with pricing
│   │   ├── HowItWorks.tsx        # Four-step process timeline
│   │   ├── SocialProof.tsx       # Statistics with animated counters
│   │   ├── FAQ.tsx               # Accordion-style Q&A
│   │   ├── LeadMagnet.tsx        # Free resource with email capture
│   │   ├── FinalCTA.tsx          # Calendar booking prompt
│   │   └── index.ts              # Barrel exports
│   │
│   ├── navigation/               # Layout components
│   │   ├── Navigation.tsx        # Sticky header with mobile menu
│   │   └── Footer.tsx            # Multi-column footer
│   │
│   ├── effects/                  # Visual effect components
│   │   ├── GradientMesh.tsx      # Animated gradient orbs
│   │   ├── GridPattern.tsx       # SVG grid overlay
│   │   └── index.ts              # Barrel exports
│   │
│   └── forms/                    # Form components
│       └── LeadMagnetForm.tsx    # Email capture with validation
│
├── lib/
│   └── utils.ts                  # Utility functions (cn, scrollToSection)
│
├── public/
│   └── images/                   # Static assets
│       ├── logo-light.svg        # Current logo (placeholder)
│       └── .gitkeep
│
└── Configuration Files
    ├── package.json              # Dependencies and scripts
    ├── tsconfig.json             # TypeScript config with path aliases
    ├── tailwind.config.ts        # Design system configuration
    ├── next.config.js            # Next.js config (image optimization)
    ├── postcss.config.js         # PostCSS with Tailwind plugin
    └── .gitignore                # Git exclusions
```

### Component Organization

Components are organized by **purpose and scope**:

1. **UI Components** (`components/ui/`)
   - Atomic, reusable building blocks
   - No business logic or external dependencies
   - Highly composable and generic
   - Use `React.forwardRef` for ref forwarding
   - Examples: Button, Card, Input, Section

2. **Section Components** (`components/sections/`)
   - Feature-focused, page-specific sections
   - Self-contained units with animations
   - Compose UI components
   - All marked `'use client'` for Framer Motion
   - Examples: Hero, Services, FAQ

3. **Navigation Components** (`components/navigation/`)
   - Layout and navigation elements
   - Sticky header, footer
   - Handle scroll state and mobile menus

4. **Effect Components** (`components/effects/`)
   - Visual enhancements and backgrounds
   - Animated gradients, patterns
   - Often position absolute/fixed

5. **Form Components** (`components/forms/`)
   - Form-specific components with validation
   - Integrate React Hook Form + Zod

### File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `Button.tsx`, `LeadMagnetForm.tsx` |
| Utilities | camelCase | `utils.ts` |
| Directories | kebab-case or camelCase | `ui/`, `sections/`, `forms/` |
| Types/Interfaces | PascalCase | `ButtonProps`, `FormData` |
| Variables | camelCase | `isLoading`, `handleSubmit` |
| Constants | UPPER_SNAKE_CASE or camelCase | `MAX_ITEMS` or `trustIndicators` |

### Import/Export Patterns

**Path Aliases** (configured in `tsconfig.json`):
```typescript
// Use @ for imports from root
import { Button, Section } from '@/components/ui'
import { scrollToSection } from '@/lib/utils'
```

**Barrel Exports** (index.ts files):
```typescript
// components/ui/index.ts
export { default as Button } from './Button'
export { default as Card } from './Card'
export { default as Section } from './Section'
// ... etc
```

**Component Exports**:
- All components use **default exports**
- Interfaces/types can use named exports from the same file
```typescript
export interface ButtonProps { ... }
export default Button
```

---

## Development Workflow

### Local Development

```bash
# Start development server
npm run dev
# → Opens http://localhost:3000

# Production build
npm run build

# Run production build locally
npm start

# Lint code
npm run lint
```

### Before Making Changes

1. **Read existing files first** - Never modify code you haven't read
2. **Understand the pattern** - Match existing coding style
3. **Check related components** - See how similar features are implemented
4. **Use TodoWrite tool** - Track multi-step tasks

### Key Development Practices

1. **Mobile-First Design**
   - Design for mobile, enhance for desktop
   - Use `md:`, `lg:` breakpoints for larger screens
   - Test responsiveness at 375px, 768px, 1024px, 1440px

2. **Performance Optimization**
   - Keep bundle size minimal
   - Lazy load below-fold content
   - Optimize images (use WebP, proper sizing)
   - Minimize client-side JavaScript

3. **Accessibility**
   - Provide ARIA labels for interactive elements
   - Ensure keyboard navigation works
   - Maintain color contrast ratios (WCAG AA)
   - Use semantic HTML

4. **SEO**
   - Maintain proper heading hierarchy (h1 → h2 → h3)
   - Add descriptive alt text to images
   - Update metadata in `app/layout.tsx` when needed

---

## Coding Conventions

### TypeScript

**Use strict typing**:
```typescript
// ✅ Good - Explicit types
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

// ❌ Avoid - Any types
const handleClick = (data: any) => { ... }
```

**Prefer interfaces over types for component props**:
```typescript
// ✅ Good
export interface CardProps {
  title: string
  description?: string
}

// ❌ Less preferred
export type CardProps = {
  title: string
  description?: string
}
```

### React Patterns

**Functional Components Only**:
```typescript
// ✅ Good - Modern functional component
export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  return <div>...</div>
}

// ❌ Avoid - Class components
class Hero extends React.Component { ... }
```

**Use ForwardRef for UI Components**:
```typescript
// ✅ Good - Forwarding refs for reusable UI
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return <button ref={ref} {...props} />
  }
)
Button.displayName = 'Button'
```

**Client-Side Interactivity**:
```typescript
// ✅ Mark components with client-side features
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  // ...
}
```

### State Management

**Local State Only** - No global state management:
```typescript
// ✅ Good - Local state
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const [openIndex, setOpenIndex] = useState<number | null>(null)

// ❌ Not Used - No Context/Redux/Zustand
const { state, dispatch } = useContext(GlobalContext)
```

### Error Handling

```typescript
// ✅ Good - Graceful error handling
const onSubmit = async (data: FormData) => {
  try {
    setIsSubmitting(true)
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Submission failed')
    }

    setIsSubmitted(true)
  } catch (error) {
    console.error('Form submission error:', error)
    setError('Something went wrong. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Comments

**Only add comments where logic isn't self-evident**:
```typescript
// ✅ Good - Complex logic explained
// Account for sticky header height when scrolling
const offset = 80

// ✅ Good - Important context
// This animation runs only once when element enters viewport
viewport: { once: true, margin: '-100px' }

// ❌ Avoid - Obvious comments
// Set loading to true
setIsLoading(true)
```

---

## Component Patterns

### UI Component Structure

**Standard Pattern**:
```typescript
import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = '...'
    const variants = { primary: '...', secondary: '...', ghost: '...' }
    const sizes = { sm: '...', md: '...', lg: '...' }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
export default Button
```

### Section Component Structure

**Standard Pattern**:
```typescript
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function MySection() {
  return (
    <Section id="my-section" background="default">
      <motion.div {...fadeInUp}>
        {/* Section content */}
      </motion.div>
    </Section>
  )
}
```

### Animation Patterns

**Standard Entrance Animations**:
```typescript
// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

// Staggered children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}
```

**Usage**:
```typescript
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Form Patterns

**React Hook Form + Zod**:
```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
})

type FormData = z.infer<typeof formSchema>

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    // Handle submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email')}
        label="Email"
        error={errors.email?.message}
      />
      <Button type="submit" isLoading={isSubmitting}>
        Submit
      </Button>
    </form>
  )
}
```

---

## Styling Guidelines

### Design System (tailwind.config.ts)

**Color Palette**:
```typescript
// Primary (Blue) - Trust, technology, primary actions
primary: {
  DEFAULT: '#2563eb',
  50-900: /* Full scale */
}

// Accent (Orange) - CTAs, energy, highlights
accent: {
  DEFAULT: '#f97316',
  400-600: /* Limited scale for CTAs */
}

// Backgrounds
bg: {
  dark: '#0a0f1a',           // Main background
  card: '#111827',            // Card backgrounds
  'card-hover': '#1f2937',    // Hover states
  'gradient-start': '#0f172a',
  'gradient-end': '#1e1b4b',
}

// Text
text: {
  primary: '#f8fafc',    // Main text
  secondary: '#94a3b8',  // Secondary text
  muted: '#64748b',      // Muted/disabled text
}
```

**Typography** (Fluid Responsive):
```typescript
fontSize: {
  'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
  'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
  'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
  'fluid-lg': 'clamp(1.125rem, 1rem + 0.6vw, 1.25rem)',
  'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
  'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
  'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
  'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)',
  'fluid-5xl': 'clamp(3rem, 2rem + 5vw, 4.5rem)',
}
```

**Custom Animations**:
```typescript
animation: {
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite',
}

keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  glow: {
    '0%, 100%': { opacity: '0.5' },
    '50%': { opacity: '1' },
  },
}
```

### Custom Utility Classes (globals.css)

```css
/* Container with responsive max-width */
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Section padding */
.section-padding {
  @apply py-12 sm:py-16 lg:py-20;
}

/* Gradient backgrounds */
.gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

.gradient-mesh {
  background: radial-gradient(at 0% 0%, #2563eb 0px, transparent 50%),
              radial-gradient(at 100% 100%, #f97316 0px, transparent 50%);
}

/* Glassmorphism effect */
.glass {
  @apply bg-white/5 backdrop-blur-sm border border-white/10;
}

/* Improved text balance */
.text-balance {
  text-wrap: balance;
}
```

### Styling Patterns

**1. Utility-First Approach**:
```tsx
// ✅ Good - Direct Tailwind classes
<div className="flex items-center gap-4 p-6 rounded-lg bg-bg-card hover:bg-bg-card-hover transition-colors">
  <h3 className="text-fluid-xl font-bold text-text-primary">Title</h3>
</div>
```

**2. Conditional Classes with cn()**:
```tsx
// ✅ Good - Conditional styling
<button
  className={cn(
    'px-6 py-3 rounded-lg font-semibold transition-all',
    variant === 'primary' && 'bg-accent text-white hover:bg-accent-dark',
    variant === 'secondary' && 'border-2 border-primary text-primary',
    isLoading && 'opacity-50 cursor-not-allowed',
    className // Allow prop overrides
  )}
>
```

**3. Responsive Design**:
```tsx
// ✅ Good - Mobile-first responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
  <h1 className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl">
    Responsive Heading
  </h1>
</div>
```

**4. Hover States and Transitions**:
```tsx
// ✅ Good - Smooth transitions
<button className="group relative overflow-hidden bg-accent hover:bg-accent-dark transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <span className="group-hover:text-white transition-colors">Hover Me</span>
</button>
```

**5. Color Usage**:
```tsx
// Text colors
text-text-primary      // Main text
text-text-secondary    // Supporting text
text-text-muted        // Disabled/placeholder

// Background colors
bg-bg-dark            // Main background
bg-bg-card            // Card background
bg-bg-card-hover      // Hover state

// Border colors
border-text-secondary/10   // Subtle borders
border-primary/30          // Colored borders with opacity
```

---

## Common Tasks

### Adding a New UI Component

1. **Create the file**:
   ```bash
   touch components/ui/NewComponent.tsx
   ```

2. **Follow the standard pattern**:
   ```typescript
   import React from 'react'
   import { cn } from '@/lib/utils'

   export interface NewComponentProps
     extends React.HTMLAttributes<HTMLDivElement> {
     variant?: 'default' | 'alternative'
     // ... other props
   }

   const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
     ({ className, variant = 'default', ...props }, ref) => {
       return (
         <div
           ref={ref}
           className={cn(
             'base-styles',
             variant === 'default' && 'default-styles',
             variant === 'alternative' && 'alternative-styles',
             className
           )}
           {...props}
         />
       )
     }
   )

   NewComponent.displayName = 'NewComponent'
   export default NewComponent
   ```

3. **Add to barrel export**:
   ```typescript
   // components/ui/index.ts
   export { default as NewComponent } from './NewComponent'
   ```

### Adding a New Section

1. **Create the section file**:
   ```bash
   touch components/sections/NewSection.tsx
   ```

2. **Use the section template**:
   ```typescript
   'use client'

   import React from 'react'
   import { motion } from 'framer-motion'
   import { Section } from '@/components/ui'

   const fadeInUp = {
     initial: { opacity: 0, y: 30 },
     whileInView: { opacity: 1, y: 0 },
     viewport: { once: true, margin: '-100px' },
     transition: { duration: 0.6 },
   }

   export default function NewSection() {
     return (
       <Section id="new-section" background="default">
         <motion.div {...fadeInUp} className="text-center">
           <h2 className="text-fluid-3xl font-bold text-text-primary mb-6">
             Section Title
           </h2>
           {/* Section content */}
         </motion.div>
       </Section>
     )
   }
   ```

3. **Add to barrel export**:
   ```typescript
   // components/sections/index.ts
   export { default as NewSection } from './NewSection'
   ```

4. **Add to page**:
   ```typescript
   // app/page.tsx
   import { NewSection } from '@/components/sections'

   // Add in the appropriate position
   <NewSection />
   ```

### Modifying the Design System

**Update colors**:
```typescript
// tailwind.config.ts
extend: {
  colors: {
    brand: {
      DEFAULT: '#your-color',
      light: '#lighter-shade',
      dark: '#darker-shade',
    },
  },
}
```

**Add custom animation**:
```typescript
// tailwind.config.ts
extend: {
  animation: {
    'slide-in': 'slideIn 0.5s ease-out',
  },
  keyframes: {
    slideIn: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(0)' },
    },
  },
}
```

### Adding Form Integration

**Update LeadMagnetForm.tsx**:
```typescript
const onSubmit = async (data: FormData) => {
  try {
    setIsSubmitting(true)

    // Add your API endpoint
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) throw new Error('Failed')

    setIsSubmitted(true)
  } catch (error) {
    console.error('Submission error:', error)
    // Handle error state
  } finally {
    setIsSubmitting(false)
  }
}
```

### Updating SEO Metadata

**Edit app/layout.tsx**:
```typescript
export const metadata: Metadata = {
  title: 'Your New Title',
  description: 'Your new description',
  keywords: ['keyword1', 'keyword2'],
  // Update OpenGraph and Twitter cards as needed
}
```

### Adding Environment Variables

1. **Create `.env.local`**:
   ```bash
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
   EMAIL_API_KEY=your_api_key
   ```

2. **Access in code**:
   ```typescript
   const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
   ```

3. **Add to `.gitignore`** (already included):
   ```
   .env*.local
   ```

---

## Git Workflow

### Branch Naming

**All branches must**:
- Start with `claude/`
- End with the session ID
- Example: `claude/claude-md-mijsyimmnjbys5aq-01FhDFNydA6uQRozXNi5R55L`

### Commit Messages

**Follow conventional commit format**:
```bash
# Format
<type>: <description>

# Examples
feat: Add new testimonials section
fix: Resolve mobile menu z-index issue
docs: Update setup documentation
refactor: Simplify button component variants
style: Update color scheme to match brand
perf: Optimize image loading in hero section
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `refactor`: Code refactoring (no behavior change)
- `style`: Code style/formatting
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Build process, dependencies

### Git Commands

**Push with retry logic**:
```bash
# Always use -u flag for first push
git push -u origin claude/your-branch-name

# If network errors occur, retry with exponential backoff:
# Wait 2s → retry → wait 4s → retry → wait 8s → retry → wait 16s
```

**Fetch/Pull with retry**:
```bash
# Fetch specific branch
git fetch origin claude/your-branch-name

# Pull with retry logic
git pull origin claude/your-branch-name
```

### Pre-Commit Checklist

Before committing:
- [ ] Code builds successfully (`npm run build`)
- [ ] No TypeScript errors (`npm run lint`)
- [ ] Changes are tested locally (`npm run dev`)
- [ ] No console errors in browser
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Animations work smoothly
- [ ] No accessibility regressions

---

## Performance & SEO

### Performance Targets

- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Lighthouse Score**: 90+

### Performance Best Practices

1. **Image Optimization**:
   ```tsx
   import Image from 'next/image'

   <Image
     src="/images/logo.png"
     alt="TrueBridge AI Logo"
     width={40}
     height={40}
     priority // For above-the-fold images
   />
   ```

2. **Lazy Loading**:
   ```tsx
   // For below-fold sections, Framer Motion handles this automatically
   <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true, margin: '-100px' }}
   >
   ```

3. **Code Splitting** (automatic with Next.js):
   - Each section is code-split automatically
   - Dynamic imports for heavy components if needed

### SEO Best Practices

1. **Semantic HTML**:
   ```tsx
   <header>...</header>
   <nav>...</nav>
   <main>
     <section>...</section>
     <article>...</article>
   </main>
   <footer>...</footer>
   ```

2. **Heading Hierarchy**:
   ```tsx
   <h1>Main Page Title</h1>       {/* Only one per page */}
   <h2>Section Title</h2>          {/* Main sections */}
   <h3>Subsection Title</h3>       {/* Subsections */}
   ```

3. **Alt Text**:
   ```tsx
   <img src="..." alt="Descriptive text explaining the image content" />
   ```

4. **Structured Data** (add if needed):
   ```typescript
   // app/layout.tsx or page.tsx
   const structuredData = {
     '@context': 'https://schema.org',
     '@type': 'Organization',
     name: 'TrueBridge AI',
     // ... more structured data
   }
   ```

---

## Important Constraints

### What to Avoid

1. **❌ Don't add external UI libraries**
   - All UI components are custom-built
   - Maintain consistency with existing patterns

2. **❌ Don't introduce global state management**
   - Keep state local to components
   - Use React Hook Form for form state

3. **❌ Don't create new pages/routes**
   - This is a single-page application
   - All content lives on the main landing page

4. **❌ Don't add testing libraries without discussion**
   - No testing framework is currently set up
   - Discuss testing strategy before implementing

5. **❌ Don't modify the design system without reason**
   - Colors, typography, and spacing are carefully chosen
   - Changes should align with brand guidelines

6. **❌ Don't use class components**
   - Use functional components with hooks
   - Follow React modern best practices

7. **❌ Don't skip accessibility**
   - Maintain WCAG 2.1 AA compliance
   - Add ARIA labels and keyboard navigation

8. **❌ Don't ignore mobile experience**
   - Mobile-first is non-negotiable
   - Test on small screens (375px+)

### What to Prioritize

1. **✅ Conversion optimization**
   - Every change should support lead generation goals
   - Clear CTAs, trust signals, social proof

2. **✅ Performance**
   - Fast load times are critical
   - Optimize images, minimize JavaScript

3. **✅ Consistency**
   - Follow existing patterns
   - Maintain visual and code consistency

4. **✅ Accessibility**
   - Ensure all users can interact with the site
   - Test with keyboard navigation

5. **✅ Type safety**
   - Leverage TypeScript fully
   - Avoid `any` types

6. **✅ Simplicity**
   - Don't over-engineer solutions
   - Keep code readable and maintainable

---

## Quick Reference

### Essential Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm start            # Run production build
npm run lint         # Lint code

# File Operations
# Use Read tool, not: cat, less, more
# Use Glob tool, not: find, ls -R
# Use Grep tool, not: grep, rg
# Use Edit/Write tools, not: sed, awk, echo >

# Git
git status
git add .
git commit -m "feat: Your message"
git push -u origin claude/your-branch-name
```

### Essential Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main landing page composition |
| `app/layout.tsx` | SEO metadata and root HTML |
| `app/globals.css` | Global styles and utilities |
| `tailwind.config.ts` | Design system configuration |
| `lib/utils.ts` | Utility functions |
| `components/ui/index.ts` | UI component exports |
| `components/sections/index.ts` | Section exports |

### Key Utilities

```typescript
// className merging
import { cn } from '@/lib/utils'
cn('base-class', condition && 'conditional-class', className)

// Smooth scrolling
import { scrollToSection } from '@/lib/utils'
scrollToSection('section-id')

// Form validation
import { z } from 'zod'
const schema = z.object({ email: z.string().email() })
```

### Design Tokens

```typescript
// Colors
text-text-primary       // #f8fafc - Main text
text-text-secondary     // #94a3b8 - Supporting text
bg-bg-dark             // #0a0f1a - Main background
bg-bg-card             // #111827 - Card background
border-text-secondary/10  // Subtle borders

// Typography
text-fluid-base        // Responsive body text
text-fluid-2xl         // Responsive large headings
font-bold              // 700 weight
font-extrabold         // 800 weight

// Spacing
gap-4                  // 1rem spacing
section-padding        // Responsive section padding
container-custom       // Max-width container
```

---

## Getting Help

### Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/
- **React Hook Form**: https://react-hook-form.com/
- **Zod**: https://zod.dev/

### Documentation Files

- `README.md` - Comprehensive project documentation
- `SETUP.md` - Setup instructions and final steps
- `CLAUDE.md` - This file (AI assistant guide)

### Common Issues

**Build fails**:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**TypeScript errors**:
```bash
# Check TypeScript
npm run lint
# Fix auto-fixable issues
npm run lint -- --fix
```

**Styling not applying**:
- Check Tailwind config includes correct paths
- Verify you're using correct class names
- Clear browser cache

---

## Changelog

- **2025-11-29**: Initial CLAUDE.md creation
  - Comprehensive codebase documentation
  - Development workflows and conventions
  - Component patterns and styling guidelines

---

**Remember**: This is a conversion-optimized, production-ready landing page. Every change should maintain or improve performance, accessibility, and conversion rates. When in doubt, follow existing patterns and prioritize simplicity over complexity.
