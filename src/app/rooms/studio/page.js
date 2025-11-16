'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function RoomDetailPage() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('3 ADULTS');
  const [rooms, setRooms] = useState('1 ROOM');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(4);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const images = [
    '/rooms/studio1Bedroom/740618415.jpg',
    '/rooms/studio1Bedroom/740618453.jpg',
    '/rooms/studio1Bedroom/740618457.jpg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-13 at 8.34.07 PM.jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-13 at 8.34.08 PM (2).jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-13 at 8.34.08 PM.jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-13 at 8.34.09 PM (1).jpeg',
    '/rooms/studio1Bedroom/WhatsApp Image 2025-11-13 at 8.34.09 PM.jpeg'
  ];

  const roomData = {
    name: 'Studio House with 1 Bedrooms',
    price: '800.000',
    image: images[0], // Use first image as default
    size: '4x6',
    capacity: 'Max person 2',
    bed: 'Queen Bed',
    totalSize: '40 m²',
    rating: 5,
    facilities: [
      'Entire holiday home',
      '40 m²',
      'AC',
      'Private bathroom',
      'Flat screen TV',
      'Terrace',
      'Free Wi-Fi'
    ],
    bedroom: '1 large double',
    description: 'Featuring a private entrance, this air-conditioned holiday home comprises 1 bedroom and 1 bathroom with a shower and a bidet. Boasting a terrace, this holiday home also provides a seating area, a wardrobe and a flat-screen TV with streaming services. The unit offers 1 bed.'
  };

  const reviews = [
    {
      name: 'Stefan',
      date: '5 Juli 2024',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=12',
      comment: 'Nice place to stay for days. Extremely friendly owner, correct description. Many restaurants, travel agents, ATMs and a supermarket are just in a walking distance.Nearly complete kitchen equipment provided including fridge, also free coffee and tea. Nice beds and bathrooms. Best place on our trip.'
    },
    {
      name: 'Anna',
      date: '20 Februari 2024',
      rating: 4.5,
      avatar: 'https://i.pravatar.cc/150?img=43',
      comment: 'A very cozy and beautiful house, downstairs there is a spacious dining room and kitchen, on the 2nd floor there are 2 cozy bedrooms with air conditioning and shower. The kitchen has all the necessary utensils, appliances and a free cooler with clean water on both floors. The owner is very kind, helped us in all matters, quickly resolved all issues around the house and promptly advised us on sights. The house is perfect for both a family and a group of friends. Very convenient location in the city center, there are many shops and a variety of cafes with delicious food nearby. We are very grateful to the owner of the house for his care and cozy home.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I would like to book the ${roomData.name} Name : ${name}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nRooms: ${rooms}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281128712370?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-amber-400 text-amber-400 opacity-50" />);
    }
    return stars;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative bg-white py-35">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-gray-800">Our Rooms</h1>
          <p className="text-gray-500">
            <a href="/home" className="hover:text-gray-800 transition-colors">Home</a>
            <span className="mx-3">›</span>
            <a href="/rooms" className="hover:text-gray-800 transition-colors">House</a>
            <span className="mx-3">›</span>
            <a href="/rooms/residential" className="text-gray-600 hover:text-gray-800 transition-colors">Studio House with 1 Bedrooms</a>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column - Room Details */}
            <div className="lg:col-span-2 order-1">
              {/* Room Image Carousel */}
              <div className="mb-6 md:mb-8 relative">
                <img
                  src={images[currentIndex]}
                  alt={roomData.name}
                  className="w-full h-auto"
                />
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                >
                  ›
                </button>
              </div>

              {/* Room Title & Price */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">{roomData.name}</h2>
                  <div className="text-3xl md:text-4xl font-bold text-amber-500">
                    {roomData.price}<span className="text-sm font-normal text-gray-600">/Pernight</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex gap-1 justify-center md:justify-start">
                    {renderStars(roomData.rating)}
                  </div>
                  <button className="bg-amber-500 text-white px-6 py-2.5 hover:bg-amber-600 transition-colors uppercase text-sm font-semibold tracking-wider w-full md:w-auto">
                    Booking Now
                  </button>
                </div>
              </div>

              {/* Room Info Grid */}
              <div className="grid grid gap-y-4 mb-8 text-sm">
                <div className="flex justify-between md:block">
                  <span className="text-gray-600">Size:</span>
                  <span className="text-gray-800 font-medium md:ml-16">{roomData.size}</span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-600">Bed:</span>
                  <span className="text-gray-800 font-medium md:ml-16">{roomData.bed}</span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="text-gray-800 font-medium md:ml-9">{roomData.capacity}</span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-600">Services:</span>
                  <span className="text-gray-800 font-medium md:ml-10">{roomData.facilities.join(', ')}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {roomData.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {roomData.bedroom}
                </p>
              </div>

              {/* Reviews Section */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-8">Reviews</h3>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="flex gap-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                          <div>
                            <p className="text-xs text-gray-400 mb-1">{review.date}</p>
                            <h4 className="text-base md:text-lg font-semibold text-gray-800">{review.name}</h4>
                          </div>
                          <div className="flex gap-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Review Form */}
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">Add Review</h3>
                <div className="grid text-black grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                  <input 
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">You Rating:</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-5 h-5 cursor-pointer ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>

                <textarea 
                  placeholder="Your Review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows="6"
                  className="w-full text-gray-600 border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500 mb-4"
                ></textarea>

                <button className="bg-amber-500 text-white px-8 py-3 hover:bg-amber-600 transition-colors uppercase text-sm font-semibold tracking-wider w-full md:w-auto">
                  Submit Now
                </button>
              </div>
            </div>

               {/* Right Column - Reservation Form */}
            <div className="lg:col-span-1 order-2">
              <div className="bg-white border border-gray-200 p-6 md:p-8 lg:sticky lg:top-8">
                <h3 className="text-xl md:text-2xl font-serif text-gray-800 mb-6">Your Reservation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                   <div>
                    <label className="block text-sm text-gray-600 mb-2">Name :</label>
                    <input 
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-gray-600 border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Check In:</label>
                    <input 
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-gray-600 border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Check Out:</label>
                    <input 
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-gray-600 border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Guests:</label>
                    <select 
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full text-gray-600 text-gray-600 border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500 appearance-none bg-white"
                    >
                      <option>1 ADULT</option>
                      <option>2 ADULTS</option>
                      <option>3 ADULTS</option>
                      <option>4 ADULTS</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Room:</label>
                    <select 
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      className="w-full text-gray-600 border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500 appearance-none bg-white"
                    >
                      <option>1 ROOM</option>
                    </select>
                  </div>

                  <button className="w-full bg-amber-500 text-white py-3 hover:bg-amber-600 transition-colors uppercase text-sm font-semibold tracking-wider">
                    Booking Now
                  </button>

                  <button className="w-full border border-gray-300 text-gray-700 py-3 hover:bg-gray-50 transition-colors uppercase text-sm font-semibold tracking-wider">
                    Check Availability
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
