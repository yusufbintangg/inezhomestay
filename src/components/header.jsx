"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'House', href: '/rooms' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-4' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="duration-300 group-hover:scale-105">
                <img src="/logo/inezhomestaylogo.ico" alt="INEZ Homestay Logo" className="h-12 w-20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-black hover:text-blue-600 transition-colors duration-300 text-base font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 text-base font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 text-base font-medium text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}