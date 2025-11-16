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

  const gallery = [
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-13 at 8.32.10 PM.jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-13 at 8.32.08 PM.jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-13 at 8.32.12 PM (1).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-13 at 8.34.06 PM (2).jpeg',
    '/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-13 at 8.32.09 PM.jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-13 at 8.34.08 PM (2).jpeg',
    '/rooms/studio1Bedroom/740618453.jpg',
    '/rooms/studio1Bedroom/740618457.jpg',
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative bg-white py-35">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-gray-800">About Us</h1>
          <p className="text-gray-500">
            <a href="/home" className="hover:text-gray-800 transition-colors">Home</a>
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

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-500 uppercase tracking-widest text-sm mb-4">Our Gallery</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">Discover Our Work
          </h2>
          <div className="grid grid-cols-12 gap-4">
            {/* Large image left */}
            <div className="col-span-12 md:col-span-6 row-span-2">
              <img 
                src={gallery[0]} 
                alt="Gallery 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Small images top right */}
            <div className="col-span-6 md:col-span-3">
              <img 
                src={gallery[1]} 
                alt="Gallery 2"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <img 
                src={gallery[2]} 
                alt="Gallery 3"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            {/* Large image bottom right */}
            <div className="col-span-12 md:col-span-6">
              <img 
                src={gallery[3]} 
                alt="Gallery 4"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            {/* Large image bottom right */}
            <div className="col-span-12 md:col-span-6">
              <img 
                src={gallery[4]} 
                alt="Gallery 5"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-6 row-span-2">
              <img 
                src={gallery[5]} 
                alt="Gallery 6"
                className="w-full h-full object-cover rounded-lg"
              />
            </div> {/* Small images bottom right */}
            <div className="col-span-6 md:col-span-3">
              <img 
                src={gallery[6]} 
                alt="Gallery 7"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <img 
                src={gallery[7]} 
                alt="Gallery 8"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}