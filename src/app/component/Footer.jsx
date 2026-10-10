import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#034920] text-gray-300 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              🛒 বাজার দর
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto sm:mx-0">
              প্রতিদিনের বাজার দর, সহজে ও নির্ভুলভাবে।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">হোম</li>
              <li className="hover:text-white transition-colors cursor-pointer">সব পণ্য</li>
              <li className="hover:text-white transition-colors cursor-pointer">দাম বেড়েছে</li>
              <li className="hover:text-white transition-colors cursor-pointer">দাম কমেছে</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
              ক্যাটাগরি
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">চাল</li>
              <li className="hover:text-white transition-colors cursor-pointer">সবজি</li>
              <li className="hover:text-white transition-colors cursor-pointer">মাছ</li>
              <li className="hover:text-white transition-colors cursor-pointer">মাংস</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
              যোগাযোগ
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 break-all">
              <li>📧 info@bazardor.com</li>
              <li>📞 +880 1700-000000</li>
              <li>📍 ঢাকা, বাংলাদেশ</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 text-center py-3 sm:py-4 px-4">
        <p className="text-xs sm:text-sm text-gray-400">
          © 2026 বাজার দর। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
};

export default Footer;