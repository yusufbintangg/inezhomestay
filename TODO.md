# INEZ Homestay Project Documentation

## Project Overview

INEZ Homestay is a modern, responsive website built with Next.js for a homestay service located in Yogyakarta, Indonesia. The website showcases two types of accommodations: a Studio 1 Bedroom and a Residential House with 2 Bedrooms. It features a booking system integrated with WhatsApp, image galleries, facility listings, customer testimonials, and comprehensive SEO optimization. The site aims to provide an authentic Indonesian hospitality experience with comfortable, home-like accommodations.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Geist Sans, Geist Mono, Cabin
- **Build Tools**: PostCSS, ESLint
- **Deployment**: Optimized for Vercel

## Key Features

- **Homepage**: Hero section with image slider, booking form, about section, facilities showcase, and customer testimonials
- **Booking System**: Integrated WhatsApp booking with availability checking and form validation
- **Room Listings**: Detailed pages for Studio 1 Bedroom and Residential House 2 Bedrooms with image galleries and facility lists
- **About Page**: Company information, features list, and photo galleries of both room types
- **Contact Page**: Contact information and booking inquiries
- **SEO Optimization**: Comprehensive metadata, robots.txt, sitemap.xml, and social media tags
- **PWA Support**: Web app manifest for installable experience
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance**: Optimized fonts, images, and lazy loading

## File Structure

### Root Directory Files

- **README.md**: Standard Next.js project README with getting started instructions, tech stack overview, and deployment info
- **package.json**: Project dependencies (Next.js, React, Tailwind, Lucide), scripts (dev, build, start, lint), and devDependencies (ESLint, PostCSS)
- **next.config.mjs**: Next.js configuration file for build and runtime settings
- **postcss.config.mjs**: PostCSS configuration for Tailwind CSS processing
- **tailwind.config.js**: Tailwind CSS configuration with custom theme settings
- **eslint.config.mjs**: ESLint configuration for code linting and quality
- **jsconfig.json**: JavaScript project configuration for path resolution
- **.gitignore**: Git ignore patterns for Next.js projects

### src/app/ Directory

- **layout.js**: Root layout component containing HTML structure, metadata (SEO tags, Open Graph, Twitter cards), font loading (Geist, Cabin), and global components (Header, Footer)
- **page.js**: Homepage component featuring hero section with image carousel, booking form with WhatsApp integration, about section, facilities grid, and testimonials
- **globals.css**: Global CSS with Tailwind imports, custom CSS variables for colors, and font family definitions
- **favicon.ico**: Website favicon
- **robots.js**: Robots.txt configuration for search engine crawling rules, disallowing sensitive paths and allowing public content
- **sitemap.js**: XML sitemap generation for SEO, including all main pages and room detail pages
- **about/page.js**: About page with welcome text, feature checklist, and image galleries for both room types
- **contact/page.js**: Contact page with company information, address, phone, email, and social media links
- **rooms/page.js**: Rooms listing page displaying both accommodation types with pricing, specifications, and "More Details" buttons
- **rooms/residential-house-2-bedroom/page.js**: Detailed page for Residential House with image gallery and facilities list
- **rooms/studio-1-bedroom/page.js**: Detailed page for Studio with image carousel, booking form, customer reviews, and review submission form

### src/components/ Directory

- **header.jsx**: Navigation header with logo, desktop/mobile menu, scroll effects, and contact CTA button
- **footer.jsx**: Site footer with logo, contact information, newsletter signup, social media links, and copyright notice

### public/ Directory

- **manifest.json**: Progressive Web App manifest with app metadata, icons, shortcuts, and PWA configuration
- **herohome/**: Hero section images (5 JPEG files) for homepage carousel
- **logo/**: Logo files (ICO and PNG formats) for branding
- **rooms/**: Room images organized by type:
  - **residentialhouse2bedrooms/**: 13 images of the residential house interior and exterior
  - **studio1Bedroom/**: 5 images of the studio room
- **file.svg, globe.svg, next.svg, vercel.svg, window.svg**: Default Next.js SVG assets

## Setup Instructions

1. **Prerequisites**: Node.js 18+, npm or yarn
2. **Clone Repository**: `git clone <repository-url>`
3. **Install Dependencies**: `npm install`
4. **Development Server**: `npm run dev`
5. **Build for Production**: `npm run build`
6. **Start Production Server**: `npm start`
7. **Linting**: `npm run lint`
8. **Access Site**: Open [http://localhost:3000](http://localhost:3000) in browser

## TODO List

### High Priority
- [ ] Implement backend API for real-time booking management and availability checking
- [ ] Add database integration for storing bookings, reviews, and user data
- [ ] Integrate payment gateway (Stripe, PayPal, or local Indonesian options)
- [ ] Implement user authentication and account management
- [ ] Add email notification system for booking confirmations

### Medium Priority
- [ ] Create admin dashboard for managing bookings and content
- [ ] Add more room types and dynamic room management
- [ ] Implement calendar integration for availability visualization
- [ ] Add multi-language support (Indonesian/English)
- [ ] Optimize images and implement lazy loading for better performance

### Low Priority
- [ ] Add review moderation system
- [ ] Implement loyalty program or discount codes
- [ ] Add blog/news section about local attractions
- [ ] Integrate with local tourism APIs for recommendations
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Implement analytics tracking (Google Analytics, etc.)

### Future Enhancements
- [ ] Mobile app development (React Native)
- [ ] Chatbot integration for instant customer support
- [ ] Virtual tour feature using 360° images
- [ ] Partnership integrations with local services
- [ ] Sustainability features (carbon footprint calculator)
