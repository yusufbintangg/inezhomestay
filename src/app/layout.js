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
  title: "INEZ Homestay - Feels Like Home",
  description: "Feels Like Home",
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
