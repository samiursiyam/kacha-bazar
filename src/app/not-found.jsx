// app/not-found.tsx

import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8F9FA] to-[#E8F5E9] font-sans">
      
      {/* Background Decorative Blobs (সুন্দর ব্যাকগ্রাউন্ড ইফেক্ট) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#198754] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-2xl w-full px-6 text-center">
        
        {/* Illustration Section */}
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
            {/* Custom Premium SVG Illustration */}
            <svg 
              viewBox="0 0 200 200" 
              className="w-32 h-32"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Basket Body */}
              <path d="M50,100 L150,100 L140,170 L60,170 Z" fill="#E8D1B5" />
              <path d="M45,100 L155,100 L148,115 L52,115 Z" fill="#D2B48C" />
              {/* Basket Handle */}
              <path d="M70,100 C70,55 130,55 130,100" fill="none" stroke="#D2B48C" strokeWidth="8" strokeLinecap="round"/>
              {/* Veggies/Leaves */}
              <path d="M60,90 Q80,50 100,90 Q80,105 60,90" fill="#20c997" />
              <path d="M100,90 Q120,40 140,90 Q120,105 100,90" fill="#198754" />
              <path d="M80,95 Q100,65 120,95 Q100,110 80,95" fill="#F59E0B" opacity="0.8" />
              {/* Magnifying Glass */}
              <circle cx="130" cy="135" r="28" fill="rgba(255,255,255,0.9)" stroke="#198754" strokeWidth="6" />
              <line x1="150" y1="155" x2="170" y2="175" stroke="#198754" strokeWidth="8" strokeLinecap="round" />
              {/* Question Mark inside Glass */}
              <text x="130" y="147" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#198754" textAnchor="middle">?</text>
            </svg>
          </div>
        </div>

        {/* Text Section */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#198754] to-[#20c997] mb-2 drop-shadow-sm">
          ৪০৪
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          ওহো! পেজটি খুঁজে পাওয়া যায়নি।
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed max-w-md mx-auto">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে, অথবা লিংকটি ভুল। 
          চিন্তা করবেন না, আমরা আবার শুরু করতে পারি!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#198754] rounded-full hover:bg-[#157347] hover:shadow-lg hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            হোম পেজে ফিরে যান
          </Link>
          
          <Link 
            href="/" // আপনার বাজারের পেজের সঠিক লিংকটি এখানে দিন
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#198754] bg-white border-2 border-[#198754] rounded-full hover:bg-green-50 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            বাজার দেখুন
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;