"use client";

import React, { useState, useEffect } from 'react';
import { Home, Bed, ShowerHead, Wifi, Utensils, MapPin} from "lucide-react";

export default function Homepage() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('2');
  const [rooms, setRooms] = useState('1');

  const images = [
    '/herohome/ZNH02290 - ARIEF DARU.jpg',
    '/herohome/ZNH02328 - ARIEF DARU.jpg',
    '/herohome/ZNH02407 - ARIEF DARU.jpg',
    '/herohome/ZNH02441 - ARIEF DARU.jpg',
    '/herohome/ZNH02489 - ARIEF DARU.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const services = [
      { icon: <Home size={48} />, title: 'Entire Place', desc: 'A private unit without sharing any space with other guests.' },
      { icon: <Bed size={48} />, title: 'Bedrooms', desc: '2 bedrooms equipped with comfortable beds.' },
      { icon: <ShowerHead size={48} />, title: 'Bathrooms', desc: '3 clean and fully functional bathrooms.' },
      { icon: <Wifi size={48} />, title: 'Free WiFi', desc: 'High-speed internet available throughout the property.' },
      { icon: <Utensils size={48} />, title: 'Kitchen Amenities', desc: 'Includes a fridge and basic cooking essentials.' },
      { icon: <MapPin size={48} />, title: 'Prime Location', desc: 'Located in the city center, close to various public facilities.' }
  ];
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`INEZ Homestay ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-2000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="relative text-black mx-4 md:mx-8 lg:mx-16 xl:mx-32 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-serif mb-6">
              INEZ Homestay <br/>Feels Like Home
            </h1>
            <p className="text-bold mb-8 text-gray-200 leading-relaxed">
            offers a cozy tropical ambiance with natural tones and warm lighting — creating a relaxing home-away-from-home atmosphere perfect for travelers seeking peace and comfort
            </p>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-wider text-sm font-medium">
              Discover More
            </button>
          </div>

          {/* Booking Form */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-2xl w-96 hidden lg:block">
            <h3 className="text-2xl font-serif mb-6 text-gray-800">Booking Your Homestay</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Check In</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Check Out</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Adults</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Rooms</label>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-amber-500 text-white py-3 rounded hover:bg-amber-600 transition-colors duration-300 font-medium">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Westlake City <br/>Homestay
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Experience modern comfort in the heart of the city. Our homestay offers clean, spacious rooms and a warm atmosphere—perfect for unwinding after a full day of exploring.            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Located just minutes away from restaurants, shopping centers, and major attractions, this is the ideal place for business travelers, couples, and families who value convenience and stylish comfort.            </p>
            <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm font-medium">
              Read More
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-13 at 8.32.08 PM (1).jpeg"
                 alt="Temple"
                 className="rounded-lg shadow-lg w-full h-84 object-cover" />
            <img src="/rooms/studio1Bedroom/740618453.jpg"
                 alt="Interior"
                 className="rounded-lg shadow-lg w-full h-94 object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50 mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-gray-800">Discover Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-amber-500 mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-serif mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-gray-50 mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-500 uppercase tracking-widest text-sm mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-gray-800">What Customers Say?</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8 italic">
            &ldquo;We really enjoyed our stay! The apartment is modern, with a very good air conditioning system and great shower. The location is excellent, close to everything we needed. The host was very responsive and easy to communicate with, which made everything smooth. Everything was great and we would happily stay here again..&rdquo;
          </p>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400 text-xl">★</span>
            ))}
          </div>
          <p className="text-gray-800 font-medium">-Moniek, Netherlands</p>
        </div>
      </section>
    </div>
  );
}
