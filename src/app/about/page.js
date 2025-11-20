'use client';

import React from 'react';
import { Check } from 'lucide-react';

export default function AboutUsPage() {
  const features = [
    'Strategic location',
    'Affordable prices',
    'Complete facilities',
    'Friendly & personal service',
    'Close to tourist attractions',
    'Peaceful & comfortable atmosphere'
  ];
  const residentialGallery = [
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.25 PM.jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.27 PM (1).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.27 PM (2).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.27 PM.jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.28 PM.jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.29 PM (1).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.29 PM.jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.30 PM (1).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.30 PM.jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.31 PM (1).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.31 PM (2).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.32 PM (1).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.32 PM (2).jpeg'
  ];

  const studioGallery = [
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-08 at 2.07.52 PM.jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-08 at 2.07.53 PM (1).jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-08 at 2.07.53 PM.jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-08 at 2.07.54 PM (1).jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-08 at 2.07.54 PM.jpeg',
  ];

  return (
    <div className="bg-white min-h-screen mx-4 md:mx-8 lg:mx-16 xl:mx-32">
      {/* Header Section */}
      <section className="relative bg-white py-35">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-gray-800">About Us</h1>
          <p className="text-gray-500">
            <a href="/" className="hover:text-gray-800 transition-colors">Home</a>
            <span className="mx-3">›</span>
            <span className="text-gray-800">About Us</span>
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
                Welcome To INEZ Homestay.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Built in 2022, INEZ Homestay is located in the heart of Yogyakarta, with easy access to the city&apos;s tourist attractions. INEZ Homestay is designed to make you feel at home — comfortable rooms, clean spaces, and friendly hospitality that comes straight from the heart. Whether you&apos;re here for a short getaway or a longer stay, our goal is to make your visit easy, happy, and memorable.
              </p>
            </div>

            {/* Right Column - Features List */}
            <div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Residential Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-500 uppercase tracking-widest text-sm mb-4">Residential Gallery</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">Residential House 2 Bedrooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
            {residentialGallery.map((image, index) => (
              <div key={index} className="aspect-block overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Residential Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Studio Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-500 uppercase tracking-widest text-sm mb-4">Studio Gallery</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">Studio 1 Bedroom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
            {studioGallery.map((image, index) => (
              <div key={index} className="aspect-block overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Studio Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}