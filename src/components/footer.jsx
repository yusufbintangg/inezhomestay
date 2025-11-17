'use client';

import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-4 md:mx-8 lg:mx-16 xl:mx-32 px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 - About */}
          <div>
            <div className="duration-300 group-hover:scale-105">
                <img src="/logo/Logo INEZ Homestay - ARIEF DARU.png" alt="INEZ Homestay Logo" className="h-20 w-20" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              offers a cozy tropical ambiance with natural tones and warm lighting — creating a relaxing home-away-from-home atmosphere perfect for travelers seeking peace and comfort
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Contact Us */}
          <div>
            <h4 className="text-amber-500 uppercase tracking-widest text-sm mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <p>08112871237</p>
              <p>arief_daru@yahoo.com</p>
              <p>Jl. Veteran No.32, Pandeyan,<br />Umbulharjo, Yogyakarta</p>
            </div>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h4 className="text-amber-500 uppercase tracking-widest text-sm mb-4">New Latest</h4>
            <p className="text-gray-400 mb-4">Get the latest updates and offers.</p>
            <div className="flex">
              <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
              <button 
                onClick={handleSubscribe}
                className="bg-amber-500 px-4 hover:bg-amber-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Footer Links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of use</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#environmental" className="hover:text-white transition-colors">Environmental Policy</a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © Copyright 2025 INEZ Homestay Yogyakarta. All Rights Reserved | Powered By <strong> <a href="https://stardevcreative.vercel.app/">StarDev Creative</a></strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}