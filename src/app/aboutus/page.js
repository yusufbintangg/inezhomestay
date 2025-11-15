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

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
      title: 'Restaurants Services',
      overlay: true
    },
    {
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400',
      title: 'Travel & Camping',
      overlay: true
    },
    {
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400',
      title: 'Event & Party',
      overlay: true
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=200',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600'
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
                Built in 2022, INEZ Homestay is located in the heart of Yogyakarta, with easy access to the city's tourist attractions. INEZ Homestay is designed to make you feel at home — comfortable rooms, clean spaces, and friendly hospitality that comes straight from the heart. Whether you're here for a short getaway or a longer stay, our goal is to make your visit easy, happy, and memorable.
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

      {/* Services Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {service.overlay && (
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-serif text-center px-4">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-slate-900 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200')"}}
        ></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Discover Our Homestay & Services.
          </h2>
          <p className="text-gray-300 mb-8">
            Experience comfort and warmth in the heart of Yogyakarta
          </p>
          <button className="w-20 h-20 rounded-full border-2 border-amber-500 flex items-center justify-center mx-auto hover:bg-amber-500 transition-colors group">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-500 uppercase tracking-widest text-sm mb-4">Our Gallery</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">Discover Our Work</h2>
          
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
          </div>
        </div>
      </section>
    </div>
  );
}