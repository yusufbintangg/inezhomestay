import { Geist, Geist_Mono, Cabin } from "next/font/google";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://inezhomestay.com'),
  title: {
    default: "INEZ Homestay - Feels Like Home",
    template: "%s | INEZ Homestay"
  },
  description: "Experience authentic Indonesian hospitality at INEZ Homestay. Comfortable rooms, local culture, and warm welcome in the heart of Indonesia.",
  keywords: ["homestay in Yogyakarta",
             "Yogyakarta accommodation",
             "vacation rental in Yogyakarta",
             "family-friendly homestay",
             "studio room Yogyakarta",
             "two-bedroom house Yogyakarta",
             "affordable homestay in Yogyakarta",
             "homestay near Malioboro",
             "private homestay with kitchen",
             "long stay accommodation Yogyakarta",
             "short-term rental Yogyakarta",
             "best homestay for tourists in Indonesia",
             "traditional Indonesian hospitality",
             "holiday home in Yogyakarta"
  ],
  authors: [{ name: "INEZ Homestay Team" }],
  creator: "INEZ Homestay",
  publisher: "INEZ Homestay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "accommodation",
  classification: "homestay services",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inezhomestay.com',
    siteName: 'INEZ Homestay',
    title: 'INEZ Homestay - Feels Like Home',
    description: 'Experience authentic Indonesian hospitality at INEZ Homestay. Comfortable rooms, local culture, and warm welcome.',
    images: [
      {
        url: 'https://inezhomestay.com/OG/Logo%20INEZ%20Homestay%20-%20ARIEF%20DARU.png',
        width: 1200,
        height: 630,
        alt: 'INEZ Homestay Logo',
      },
      {
        url: 'https://inezhomestay.com/OG/WhatsApp%20Image%202025-11-08%20at%202.07.52%20PM.jpeg',
        width: 1200,
        height: 630,
        alt: 'INEZ Homestay Hero Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@inezhomestay',
    creator: '@inezhomestay',
    title: 'INEZ Homestay - Feels Like Home',
    description: 'Experience authentic Indonesian hospitality at INEZ Homestay. Comfortable rooms, local culture, and warm welcome.',
    images: ['/logo/Logo INEZ Homestay - ARIEF DARU.png'],
  },
  verification: {
    bing: 'your-bing-site-verification-code', // Ganti dengan Bing verification code
    yandex: 'your-yandex-verification-code', // Ganti dengan Yandex verification code
    baidu: 'your-baidu-verification-code', // Ganti dengan Baidu verification code
  },
  alternates: {
    canonical: 'https://inezhomestay.com',
    languages: {
      'en-US': 'https://inezhomestay.com',
      'id-ID': 'https://inezhomestay.com/id', // Jika ada versi bahasa Indonesia
    },
  },
  manifest: '/manifest.json', // Jika ada PWA manifest
  icons: {
    icon: '/logo/Logo%20INEZ%20Homestay%20-%20ARIEF%20DARU.png',
    shortcut: '/logo/Logo%20INEZ%20Homestay%20-%20ARIEF%20DARU.png',
    apple: '/logo/Logo%20INEZ%20Homestay%20-%20ARIEF%20DARU.png',
  },
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light',
    'viewport': 'width=device-width, initial-scale=1',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml', // Jika ada
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cabin.variable} font-sans bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
