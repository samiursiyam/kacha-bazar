import React from 'react';

const Footer = () => {
  return (
    // একদম সিম্পল এবং স্লিক ডার্ক থিম
    <footer className="bg-[#061a11] text-gray-400 mt-12 border-t border-emerald-900/30">
      
      {/* শুধুমাত্র আপনার দেওয়া টেক্সটগুলো সেন্টারে রাখা হয়েছে */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          
          <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <span className="text-3xl">🛒</span> বাজার দর
          </h3>
          
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
            প্রতিদিনের বাজার দর, সহজে ও নির্ভুলভাবে।
          </p>
          
          <p className="text-xs sm:text-sm text-emerald-500 font-medium tracking-wide">
            আপনার বিশ্বস্ত বাজার সহকারী
          </p>
          
        </div>
      </div>

      {/* কপিরাইট সেকশন (স্ট্যান্ডার্ড হিসেবে রাখা হয়েছে) */}
      <div className="border-t border-white/5 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            © 2026 বাজার দর। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;