"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Userinfo from "./Userinfo";

const Navbar = () => {
  const [banglaDate, setBanglaDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const date = new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      }).format(new Date());

      setBanglaDate(date);
    };

    updateDate();

    const interval = setInterval(updateDate, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Sticky Navbar with modern glassmorphism effect
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-emerald-100/60 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* Brand / Logo Section */}
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            {/* Modern Icon Box */}
            <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-2 sm:p-2.5 rounded-xl shadow-md shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <span className="text-xl sm:text-2xl drop-shadow-sm">🛒</span>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-tight">
                বাজার দর
              </span>
              
              {/* Mobile-e date hide kora hoyeche jate layout na bhange */}
              <span className="hidden sm:block text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                {banglaDate}
              </span>
            </div>
          </div>
        </Link>

        {/* User Info Section */}
        <div>
          <Userinfo />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;