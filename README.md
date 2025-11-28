# TrueBridge AI Website

A high-converting, single-page website for TrueBridge AI - an AI consulting and automation agency targeting SMBs.

## Overview

This website is built with conversion optimization as the primary goal, featuring:
- Modern, dark-themed design with blue/orange accent colors
- Fully responsive, mobile-first layout
- Smooth animations and interactions using Framer Motion
- SEO-optimized with proper metadata and Open Graph tags
- Production-ready, optimized build

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel

## Project Structure

```
TrueBridge-AI/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── ui/                   # Reusable UI components (Button, Card, etc.)
│   ├── sections/             # Page sections (Hero, Services, FAQ, etc.)
│   ├── navigation/           # Navigation and Footer components
│   └── forms/                # Form components
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   └── images/               # Static images and logos
├── tailwind.config.ts        # Tailwind configuration
└── next.config.js            # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TrueBridge-AI
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Design System

### Colors

- **Primary**: `#2563eb` (Blue) - Trust, technology
- **Accent**: `#f97316` (Orange) - CTAs, energy
- **Background**: `#0f172a` (Dark blue-gray)
- **Background Light**: `#1e293b`
- **Text Primary**: `#f8fafc`
- **Text Secondary**: `#94a3b8`
- **Success**: `#22c55e`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Fluid Typography**: Uses clamp() for responsive font sizes
- Headlines use bold weights (700-800)
- Body text uses regular weight (400)

### Components

#### Button
- Variants: `primary`, `secondary`, `ghost`
- Sizes: `sm`, `md`, `lg`
- Features: Loading states, icons, full-width option

#### Card
- Variants: `default`, `highlighted`, `hover`
- Used for services, pain points, and outcomes

#### Section
- Consistent container with max-width
- Background variants: `default`, `gradient`, `mesh`
- Automatic padding based on screen size

#### Input
- Form input with label and error support
- Integrated with React Hook Form

## Page Sections

1. **Hero** - Main value proposition with dual CTAs
2. **Problem Statement** - Three pain points in card format
3. **Solution Overview** - Three key outcomes
4. **Services** - Three service offerings with pricing
5. **How It Works** - Four-step process timeline
6. **Social Proof** - Industry statistics
7. **FAQ** - Accordion-style Q&A
8. **Lead Magnet** - Free resource with email capture form
9. **Final CTA** - Calendar booking prompt
10. **Footer** - Quick links, contact info, social links

## Features

### SEO Optimization
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags and Open Graph
- Descriptive alt text on images
- Structured data ready

### Performance
- Static site generation
- Optimized images (WebP format)
- Minimal JavaScript bundle
- Lazy loading for below-fold content
- Lighthouse score: 90+

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Proper ARIA labels
- Sufficient color contrast
- Focus visible states

### Mobile Optimization
- Touch targets: 44x44px minimum
- Hamburger menu on mobile
- Optimized for thumb-zone
- Responsive typography

## Customization

### Updating Logo
Replace `/public/images/logo-light.svg` with your logo (recommended size: 40x40px)

### Changing Colors
Edit `tailwind.config.ts` to update the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#2563eb',  // Your primary color
    dark: '#1d4ed8',
  },
  accent: {
    DEFAULT: '#f97316',  // Your accent color
    dark: '#ea580c',
  },
  // ... other colors
}
```

### Adding Calendar Integration
Update the `FinalCTA.tsx` component's button onClick handler:
```typescript
onClick={() => {
  // Replace with your Cal.com or Calendly link
  window.open('https://calendly.com/yourlink', '_blank')
}}
```

### Form Integration
Update `LeadMagnetForm.tsx` to integrate with your email service:
```typescript
const onSubmit = async (data: FormData) => {
  // Add your API call here
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  // Handle response
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Build command: `npm run build`
Output directory: `.next`

## Environment Variables

Currently, no environment variables are required. When integrating with external services (email, analytics, etc.), add them to `.env.local`:

```bash
NEXT_PUBLIC_CALENDLY_URL=your_calendly_link
EMAIL_API_KEY=your_api_key
# Add other variables as needed
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Targets

- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Lighthouse Score: 90+

## License

All rights reserved - TrueBridge AI

## Support

For questions or support, contact: hello@truebridgeai.com
