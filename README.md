# Creative Corvus — Website

A React and Vite website for Creative Corvus Entertainment Private Limited,
a design and media school in Saligramam, Chennai.

## Running Locally

You need Node.js version 18 or later installed (download from nodejs.org).

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Then open the URL it prints, usually http://localhost:5173

## Building for Production

```bash
npm run build
```

This creates an optimized, production ready copy of the site in the `dist`
folder. You can preview that build locally with:

```bash
npm run preview
```

The contents of `dist` are what you upload to any static hosting provider
(Vercel, Netlify, Hostinger, GoDaddy, cPanel, or similar).

## Project Structure

```
src/
  components/     Reusable UI pieces (navbar, footer, forms, cards, etc.)
  pages/          One file per route (Home, About, Courses, Contact, etc.)
  data/           Course catalog, site config, FAQ, blog content
  lib/            Smooth scroll setup
public/           Logo, robots.txt, sitemap.xml
```

## How Enquiries Reach You

Every enquiry form and the scroll popup on this site open WhatsApp with a
prefilled message addressed to your business number (set in
src/data/siteConfig.js). There is no separate backend or database, no
Google Sheets setup needed, submissions go straight to your WhatsApp.

## Updating The Live Site After A Change

See UPDATING_THE_SITE.md in this project for a simple, repeatable way to
push changes to Hostinger without dealing with zip files or extraction.

## Editing Content

- Course details: edit src/data/courses.js. Every course from the fee
  structure PDF is already entered here, including duration, software,
  skills and career roles.
- Contact details, phone numbers, address, social links: edit
  src/data/siteConfig.js.
- FAQ questions: edit src/data/siteConfig.js (the faqs export).
- Blog articles: edit src/data/blog.js, or add a new object to the array
  following the same shape as the existing posts.
- Colors and fonts: edit the theme block at the top of src/index.css.

## Notes on Images

Hero and blog images currently use royalty free stock photography so the
site looks complete out of the box. Swap any image field in
src/components/HeroSlider.jsx or src/data/blog.js with your own campus or
student work photography whenever you have it ready, no code changes beyond
the URL are needed.

## Content Rule

Per project requirements, no hyphen or dash characters appear anywhere in
the website's visible text, only in code, URLs, and file names where they
are required to function. Keep this in mind if you add new content.
