'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log({ name, email, message });
    alert('Message sent! We will contact you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-white min-h-screen mx-4 md:mx-8 lg:mx-16 xl:mx-32">

      {/* Contact Section */}
      <section className="py-20 px-4 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-4xl font-serif text-gray-800 mb-6">Contact Info</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                INEZ Homestay is located in the heart of Yogyakarta, offering comfortable and affordable accommodation. Feel free to reach out for bookings or inquiries. We&apos;re here to make your stay memorable.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-gray-800 font-medium">Address:</span>
                  <span className="ml-4 text-gray-600">Jl. Veteran No.32, Pandeyan, Umbulharjo, Yogyakarta</span>
                </div>
                <div>
                  <span className="text-gray-800 font-medium">Phone:</span>
                  <span className="ml-7 text-gray-600">08112871237</span>
                </div>
                <div>
                  <span className="text-gray-800 font-medium">Email:</span>
                  <span className="ml-9 text-gray-600">arief_daru@yahoo.com</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Transfer Bank (BCA, Mandiri, BRI, BNI)</li>
                  <li>• Cash</li>
                  <li>• Kartu Kredit/Debit</li>
                  <li>• E-wallet (GoPay, OVO, DANA, ShopeePay)</li>
                </ul>
              </div>

              {/* Bank Account */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bank Account for Transfer</h3>
                <p className="text-gray-700">
                  <span className="font-medium">BRI</span><br />
                  0340 0100 1472 561<br />
                  <span className="font-medium">a/n ARIF DARU WIBAWANTO</span>
                </p>
              </div>

              {/* Booking Terms */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Booking Terms</h3>
                <p className="text-gray-700">
                  Down Payment (DP) required: <span className="font-bold">50%</span> of total booking
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                  <input 
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                
                <textarea 
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="8"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-amber-500"
                ></textarea>

                <button 
                  onClick={handleSubmit}
                  className="bg-amber-500 text-white px-8 py-3 hover:bg-amber-600 transition-colors uppercase text-sm font-semibold tracking-wider"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0297729956383!2d110.36979327500891!3d-7.820618692212486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57928a000add%3A0xdd6c5b9ce1b40f62!2sINEZ%20Homestay!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="INEZ Homestay Location"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a 
              href="https://www.google.com/maps/place/INEZ+Homestay/@-7.8206187,110.3697933,17z/data=!3m1!4b1!4m9!3m8!1s0x2e7a57928a000add:0xdd6c5b9ce1b40f62!5m2!4m1!1i2!8m2!3d-7.8206187!4d110.3723682!16s%2Fg%2F11sj2hs125?entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              View larger map
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/6281128712370"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 group"
        title="Chat via WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </span>
      </a>
    </div>
  );
}