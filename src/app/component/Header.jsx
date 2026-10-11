"use client"; // লাইভ ডেট ব্যবহারের জন্য ক্লায়েন্ট কম্পোনেন্ট

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Header = () => {
    // লাইভ বাংলা তারিখ স্টেট
    const [bengaliDate, setBengaliDate] = useState("");

    useEffect(() => {
        const updateDate = () => {
            const date = new Intl.DateTimeFormat("bn-BD", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "Asia/Dhaka",
            }).format(new Date());
            setBengaliDate(date);
        };

        updateDate();
        // প্রতি মিনিটে তারিখ আপডেট হবে (যদিও দিন পরিবর্তন ছাড়া মূলত একই থাকে)
        const interval = setInterval(updateDate, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        // হালকা গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড
        <div className='bg-gradient-to-b from-emerald-50/60 to-white py-4 md:py-8'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* মডার্ন শ্যাডো ও বর্ডার সহ কার্ড */}
                <div className='bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-emerald-50/50 p-6 md:p-8 overflow-hidden relative'>
                    
                    {/* ডেকোরেটিভ হালকা গ্লো (Background Glow) */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

                    <div className='flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 relative z-10'>

                        {/* Left side - Content (স্ট্রাকচার অপরিবর্তিত) */}
                        <div className='flex-1 space-y-4 w-full text-center md:text-left'>
                            
                            {/* Date badge - এখন লাইভ ও সুন্দর ডিজাইন */}
                            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-100 bg-emerald-50/80 shadow-sm transition-all hover:bg-emerald-100'>
                                {/* ক্যালেন্ডার আইকন */}
                                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span className='text-emerald-700 font-semibold text-xs md:text-sm tracking-wide'>
                                    {bengaliDate || "তারিখ লোড হচ্ছে..."}
                                </span>
                            </div>

                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight'>
                                আজকের বাজারের দাম <span className="text-emerald-600">এক নজরে</span>
                            </h1>

                            <p className='text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0'>
                                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                                বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                            </p>

                            {/* মডার্ন গ্রেডিয়েন্ট বাটন */}
                            <button className='bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold px-8 py-3 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 active:scale-95 text-sm sm:text-base w-full sm:w-auto mt-2'>
                                সব পণ্য দেখুন
                            </button>
                        </div>

                        {/* Right side - Image (স্ট্রাকচার অপরিবর্তিত) */}
                        <div className='flex-1 flex justify-center md:justify-end w-full relative'>
                            <Image
                                src="/bazar-hero.png"
                                alt="আজকের বাজার"
                                height={280}
                                width={400}
                                className='w-full max-w-[240px] sm:max-w-xs md:max-w-md h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 ease-out'
                                priority
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;