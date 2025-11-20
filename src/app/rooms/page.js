'use client';

import React from 'react';

export default function RoomsPage() {
  const rooms = [
    {
      id: 2,
      name: 'Residential House',
      subtitle: 'with 2 Bedrooms',
      price: '800.000',
      size: '150 m²',
      capacity: 'Max person 6',
      bed: 'Queen Beds',
      roomSize: '4x6',
      image: 'rooms/residentialhouse2bedrooms/WhatsApp Image 2025-11-08 at 2.07.25 PM.jpeg',
      facilities: '1 holiday home, Private kitchen, Balcony, AC, Flat screen TV...'
    },
    {
      id: 1,
      name: 'Studio House',
      subtitle: 'with 1 Bedrooms',
      price: '400.000',
      size: '40 m²',
      capacity: 'Max person 3',
      bed: 'Queen Beds',
      roomSize: '4x6',
      image: 'rooms/studio1Bedroom/WhatsApp Image 2025-11-08 at 2.07.52 PM.jpeg',
      facilities: 'Entire holiday home, AC, Private bathroom, Flat screen TV...'
    }
  ];
  return (
    <div className="bg-white min-h-screen mx-4 md:mx-8 lg:mx-16 xl:mx-32">
      {/* Header Section */}
      <section className="relative bg-white py-35">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-gray-800">Our House</h1>
          <p className="text-gray-500">
            <a href="/" className="hover:text-gray-800 transition-colors">Home</a>
            <span className="mx-3">›</span>
            <span className="text-gray-800">house</span>
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                {/* Room Image */}
                <div className="relative h-104 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-gray-800 mb-2">
                    {room.name}
                    {room.subtitle && <><br/><span className="text-xl">{room.subtitle}</span></>}
                  </h2>
                  
                  <div className="text-3xl font-bold text-amber-500 mb-6">
                    {room.price}<span className="text-sm font-normal text-gray-600">/Pernight. Prices may vary depending on seasons</span>
                  </div>

                  {/* Room Info */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Size:</span>
                      <span className="text-gray-800 font-medium">{room.size}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="text-gray-800 font-medium">{room.capacity}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Bed:</span>
                      <span className="text-gray-800 font-medium">{room.bed}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-gray-600">Services:</span>
                      <span className="text-gray-800 font-medium text-right flex-1 ml-4">{room.facilities}</span>
                    </div>
                  </div>

                  {/* More Details Button */}
                  <button 
                    onClick={() => window.location.href = room.id === 1 ? '/rooms/studio-1-bedroom' : '/rooms/residential-house-2-bedroom'}
                    className="w-full border border-gray-800 text-gray-800 py-2.5 hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase tracking-wider text-xs font-semibold cursor-pointer"
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}

            {/* Empty card for grid alignment */}
            <div className="hidden md:block"></div>
          </div>

        </div>
      </section>
    </div>
  );
}
