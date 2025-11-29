# TrueBridge AI - Complete Marketing Website

**A conversion-optimized, enterprise-level marketing website for an AI consulting & automation agency.**

This is a fully functional, production-ready website built with HTML, Tailwind CSS, and vanilla JavaScript. No frameworks, no build steps—just open and run.

---

## 📦 What's Included

This package contains everything you need to launch a professional AI consulting agency website:

### ✅ 6 Complete Pages
- **index.html** - Home page with hero, services overview, FAQ, CTAs
- **services.html** - Detailed service offerings with pricing
- **process.html** - 5-phase process breakdown
- **about.html** - Brand story, founder bio, principles
- **resources.html** - Resource library with lead magnets
- **contact.html** - Contact form with qualification questions

### ✅ Features Built-In
- 🌓 **Dark/Light mode** toggle (saves preference in localStorage)
- 📱 **Fully responsive** design (mobile, tablet, desktop)
- ♿ **Accessibility-focused** (WCAG-compliant structure, ARIA attributes)
- 🎨 **Professional design system** (consistent colors, typography, spacing)
- 📋 **Working contact form** (with validation and success state)
- 🧭 **FAQ accordions** (smooth animations)
- 🍔 **Mobile navigation** (hamburger menu)

### ✅ Strategic Content
- Conversion-optimized copywriting
- Pain-point focused messaging
- Clear value propositions
- Trust-building elements
- SEO-friendly structure

---

## 🚀 Quick Start Guide (For Beginners)

### Step 1: You Already Have the Files!

All 6 HTML files are already in this folder:
- `index.html`
- `services.html`
- `process.html`
- `about.html`
- `resources.html`
- `contact.html`

### Step 2: Add Your Logos

1. Create your logo files (or use placeholders):
   - `logo-light.png` (for light backgrounds / dark mode)
   - `logo-dark.png` (for dark backgrounds / light mode)
2. Save both logo files in **this same folder**

**Logo Requirements:**
- Format: PNG with transparent background
- Recommended size: 200-300px wide, height proportional
- Light logo: Dark-colored logo for light backgrounds
- Dark logo: Light-colored logo for dark backgrounds

### Step 3: Open the Website

**Option A: Double-Click (Easiest)**
1. Find `index.html` in this folder
2. Double-click it
3. It will open in your default web browser

**Option B: Right-Click**
1. Right-click on `index.html`
2. Select "Open With"
3. Choose your browser (Chrome, Firefox, Edge, Safari, etc.)

**That's it!** Your website is now running locally.

---

## 📝 How to Edit Content

### Finding What to Edit

Each HTML file has **clear comments** that look like this:

```html
<!-- HOME: HERO SECTION -->
<!-- SERVICES: SERVICE CARDS -->
<!-- CONTACT: FORM -->
```

Use your browser's Find function (Ctrl+F or Cmd+F) to search for these comments and jump directly to the section you want to edit.

### Editing Text

**Example: Changing the homepage headline**

1. Open `index.html` in a text editor (Notepad, TextEdit, VS Code, etc.)
2. Search for `<!-- HOME: HERO SECTION -->`
3. Find the `<h1>` tag below it
4. Change the text between `<h1>` and `</h1>`

```html
<!-- Before -->
<h1 class="text-4xl...">
    Stop Drowning in Manual Work. Start Building with AI.
</h1>

<!-- After (your custom headline) -->
<h1 class="text-4xl...">
    Your Custom Headline Goes Here
</h1>
```

**⚠️ Important:**
- Only edit text **between** the opening and closing tags
- Don't delete or modify anything inside `class="..."`
- Don't remove the `<h1>` or `</h1>` tags themselves

### Editing Links/CTAs

All "Book a Call" buttons link to `contact.html` by default. To link to Calendly or another booking tool:

**Find this:**
```html
<a href="contact.html" class="...">
    Book a Free Call
</a>
```

**Change to:**
```html
<a href="https://calendly.com/your-link" class="...">
    Book a Free Call
</a>
```

### Adding Your Email Address

**Find all instances of:**
```html
hello@truebridge.ai
```

**Replace with your actual email:**
```html
youremail@yourdomain.com
```

(Use Find & Replace in your text editor to change all at once)

---

## 🎨 How to Customize Colors

All colors use Tailwind CSS classes. Here's how to change them:

### Common Color Classes

| Current Color | Class Name | How to Change |
|---------------|-----------|---------------|
| Blue (Primary) | `bg-blue-500` | Change `blue` to: `purple`, `green`, `red`, `indigo`, `pink` |
| Background Dark | `bg-slate-900` | Change `900` to lighter: `800`, `700`, `600` |
| Text Color | `text-slate-900` | Change `slate` to: `gray`, `zinc`, `neutral` |

### Example: Change Primary Color from Blue to Purple

**Find:**
```html
<a href="#" class="bg-blue-500 hover:bg-blue-600">
```

**Replace with:**
```html
<a href="#" class="bg-purple-500 hover:bg-purple-600">
```

Do this across all pages for consistency.

### Color Reference

See the **Design System** section below for the complete color palette.

---

## 🖼️ Design System Reference

### Color Palette

| Color Name | HEX Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| Background Dark | `#0f172a` | `bg-slate-900` | Dark mode backgrounds |
| Background Light | `#ffffff` | `bg-white` | Light mode backgrounds |
| Surface Dark | `#1e293b` | `bg-slate-800` | Cards in dark mode |
| Surface Light | `#f8fafc` | `bg-slate-50` | Cards in light mode |
| Primary Accent | `#3b82f6` | `bg-blue-500` | CTA buttons, links |
| Primary Text (Light) | `#0f172a` | `text-slate-900` | Headings on light bg |
| Primary Text (Dark) | `#f1f5f9` | `text-slate-100` | Headings on dark bg |
| Muted Text | `#64748b` | `text-slate-600` | Supporting text |
| Border | `#e2e8f0` | `border-slate-200` | Card borders, dividers |
| Success | `#10b981` | `bg-emerald-500` | Success states |
| Error | `#ef4444` | `bg-red-500` | Error states |

### Typography Scale

| Element | Tailwind Classes | Usage |
|---------|------------------|-------|
| Hero H1 | `text-4xl md:text-5xl lg:text-6xl font-bold` | Homepage main headline |
| Section H2 | `text-3xl md:text-4xl font-bold` | Section headings |
| Subsection H3 | `text-2xl md:text-3xl font-semibold` | Card titles, subsections |
| Body Text | `text-base md:text-lg` | Paragraphs |
| Small Text | `text-sm` | Labels, metadata |

### Spacing

| Element | Mobile | Desktop |
|---------|--------|---------|
| Section Padding | `py-12` | `py-20` or `py-24` |
| Container Width | `max-w-7xl mx-auto px-4` | Same (responsive) |
| Card Padding | `p-6` | `p-8` |
| Card Radius | `rounded-xl` (12px) | Same |

---

## 📱 Responsive Design

The website automatically adapts to different screen sizes:

- **Mobile (< 768px):** Single column, hamburger menu, larger touch targets
- **Tablet (768px - 1024px):** 2-column grids, larger text
- **Desktop (1024px+):** Full navigation, 3-column grids, maximum content width

No additional configuration needed—it just works!

---

## 🔧 Customization Guide

### Replace Placeholder Content

#### 1. Founder Bio (about.html)

**Find:**
```html
[FOUNDER_NAME]
```

**Replace with:**
```html
Jane Smith
```

Do this for all placeholders:
- `[FOUNDER_NAME]`
- `[TYPE_OF_COMPANY]`
- `[X]` (years of experience, revenue figures)

#### 2. Case Studies (index.html)

Currently showing placeholder/anonymized case studies. Replace with your real client stories once available.

**Find:**
```html
<!-- HOME: CASE STUDY / STORY PLACEHOLDERS -->
```

Edit the content while keeping the structure intact.

#### 3. Metrics (index.html)

**Find:**
```html
<p class="text-4xl font-bold text-blue-500 mb-2">2,400+</p>
<p class="text-slate-600 dark:text-slate-400">Hours saved for clients in 2024</p>
```

**Replace with your actual metrics.**

---

## 🌐 Publishing Your Website

### Option 1: Use a Hosting Service (Recommended for Beginners)

**Netlify (Free, Easiest)**

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag your entire website folder into Netlify
4. Your site is live! (You'll get a URL like `yoursite.netlify.app`)
5. Optional: Connect a custom domain

**Vercel (Also Free)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket
3. Import your project
4. Deploy (takes ~30 seconds)

**GitHub Pages (Free)**

1. Create a GitHub account
2. Create a new repository called `yourcompany.github.io`
3. Upload all HTML files
4. Your site is live at `yourcompany.github.io`

### Option 2: Traditional Web Hosting

Upload files via FTP/SFTP to any web host:
- **Bluehost**
- **SiteGround**
- **HostGator**
- **Namecheap**

Instructions vary by host—search their help docs for "upload HTML files."

---

## 📧 Connecting the Contact Form

Currently, the contact form shows a success message but doesn't send data anywhere. To make it functional:

### Option 1: Formspree (Easiest, Free Tier Available)

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Copy your form endpoint URL
4. In `contact.html`, find the `<form>` tag
5. Change:
   ```html
   <form id="contact-form">
   ```
   To:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Netlify Forms (If using Netlify hosting)

1. Add `netlify` attribute to your form:
   ```html
   <form id="contact-form" netlify>
   ```
2. Deploy to Netlify
3. Forms automatically work!

### Option 3: Custom Backend

If you have a developer, you can:
- Connect to your CRM (HubSpot, Pipedrive, etc.)
- Send emails via SendGrid, Mailgun, etc.
- Store in a database

---

## 🔍 SEO Optimization

### Already Included
- ✅ Semantic HTML structure
- ✅ Descriptive page titles
- ✅ Meta descriptions
- ✅ Mobile-responsive
- ✅ Fast loading (no heavy scripts)

### To Add (Recommended)
1. **Google Analytics** - Track visitors
   ```html
   <!-- Paste this before </head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
   ```

2. **Favicon** - Add your logo icon
   ```html
   <!-- Paste this in <head> -->
   <link rel="icon" type="image/png" href="favicon.png">
   ```

3. **Open Graph Tags** - Better social media sharing
   ```html
   <meta property="og:title" content="TrueBridge AI - AI Consulting">
   <meta property="og:description" content="Your description">
   <meta property="og:image" content="https://yoursite.com/og-image.jpg">
   ```

---

## ♿ Accessibility Features

Already built-in:
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text placeholders for images
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators on buttons/links
- ✅ Color contrast meets WCAG AA standards

---

## 🐛 Troubleshooting

### "My logos aren't showing up"

**Check:**
1. Logo files are in the same folder as HTML files
2. Logo files are named exactly `logo-light.png` and `logo-dark.png`
3. File extensions are lowercase (.png, not .PNG)

### "Dark mode isn't working"

**Solution:**
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- Check JavaScript console for errors (F12 → Console tab)

### "Form doesn't submit"

**Expected:** The form currently just shows a success message—it's a demo. See "Connecting the Contact Form" section above to make it functional.

### "Mobile menu not working"

**Check:**
- JavaScript is enabled in your browser
- No browser extensions are blocking scripts
- Try opening in an incognito/private window

---

## 📊 Next Steps / Future Enhancements

Once your site is live, consider:

1. **Add real case studies** - Replace placeholders with actual client results
2. **Connect analytics** - Google Analytics, Plausible, or Fathom
3. **Set up email marketing** - ConvertKit, Mailchimp, or similar
4. **Create downloadable resources** - PDFs for lead magnets
5. **Add a blog** - Use a headless CMS like Contentful or Sanity
6. **A/B test headlines** - Use tools like Google Optimize
7. **Add live chat** - Intercom, Drift, or Crisp
8. **Implement retargeting pixels** - Facebook, Google Ads

---

## 🆘 Need Help?

### Common Questions

**Q: Can I use this commercially?**
A: Yes! This is your website. Modify it however you want.

**Q: Do I need to know how to code?**
A: No. You can edit text without coding knowledge. Use the comments to find sections.

**Q: Can I hire someone to customize this?**
A: Yes. Any web developer familiar with HTML/CSS/Tailwind can help.

**Q: What if I want to add new pages?**
A: Duplicate an existing HTML file, rename it, and edit the content. Make sure to update the navigation links.

**Q: How do I change fonts?**
A: The site uses system fonts by default. To use custom fonts, add Google Fonts:
```html
<!-- Add to <head> -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## 📄 File Structure

```
TrueBridge-AI/
│
├── index.html          # Home page
├── services.html       # Services page
├── process.html        # Process page
├── about.html          # About page
├── resources.html      # Resources page
├── contact.html        # Contact page
│
├── logo-light.png      # Logo for light backgrounds (you provide)
├── logo-dark.png       # Logo for dark backgrounds (you provide)
│
└── README.md           # This file
```

---

## 🎯 Built With

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks or dependencies
- **Best Practices** - Accessibility, SEO, performance-focused

---

## 📜 License

This website is yours to use and modify as needed for your business.

---

## ✨ Credits

Designed and developed with best practices in conversion optimization, user experience, and modern web standards.

Built for TrueBridge AI - Bridging the gap between your business and AI.

---

**Questions?** Email: hello@truebridge.ai

**Ready to launch?** Follow the Quick Start Guide above and you'll be live in minutes! 🚀
