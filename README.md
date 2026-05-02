# INEZ Homestay Website

A Next.js-powered accommodation website for INEZ Homestay in Yogyakarta, Indonesia. Enables guests to browse room listings, check availability, and submit booking inquiries directly via WhatsApp.

**Live Demo**: [https://inezhomestay.com](https://inezhomestay.com)

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16.0.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.0.2 |
| Language | JavaScript |
| UI Library | React 19.2.0 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React 0.553.0 |
| Fonts | Google Fonts (Geist, Geist Mono, Cabin) |

---

## Key Features

- **Room Listings**: Studio and Residential House options with detailed specifications
- **Booking System**: Check-in/check-out date selection with availability checking
- **WhatsApp Integration**: Direct booking inquiries via WhatsApp messaging
- **Image Galleries**: Carousel galleries for each room type
- **Guest Reviews**: Review submission and display system
- **Contact Form**: Multi-field contact form with booking details
- **Google Maps**: Embedded location map
- **SEO Optimized**: Meta tags, OpenGraph, robots.txt, and sitemap.xml
- **PWA Ready**: manifest.json for progressive web app support

---

## Project Structure

```
inezhomestay/
├── public/
│   ├── logo/
│   ├── herohome/
│   ├── rooms/
│   │   ├── studio1Bedroom/
│   │   └── residentialhouse2bedrooms/
│   └── manifest.json
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── rooms/
│   │   │   ├── studio-1-bedroom/
│   │   │   └── residential-house-2-bedroom/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── robots.js
│   │   ├── sitemap.js
│   │   └── globals.css
│   └── components/
│       ├── header.jsx
│       └── footer.jsx
├── package.json
├── next.config.mjs
└── tailwind.config.js
```

---

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd inezhomestay

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Environment Variables

This project does not require environment variables for development. All configuration is handled through the codebase.

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| NEXT_PUBLIC_SITE_URL | Production website URL | No | https://inezhomestay.com |

Create a `.env.local` file for production:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run export` | Export static HTML |

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Static Export

For hosting on any static hosting service:

```bash
npm run export
```

The static files will be generated in the `out` directory.

---

## Screenshots

| Page | Description |
|------|-------------|
| Homepage | Hero section with booking form, services display, testimonials |
| Rooms | Room listings with prices and specifications |
| Room Detail | Image carousel, facilities, reviews, booking form |
| About | Company info and image galleries |
| Contact | Contact form, map, payment details |

---

## License

Copyright © 2025 INEZ Homestay Yogyakarta. All Rights Reserved.
