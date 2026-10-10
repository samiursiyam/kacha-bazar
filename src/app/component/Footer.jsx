
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#034920] text-gray-300 mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              🛒 বাজার দর
            </h3>
            <p className="text-sm text-gray-400">
              প্রতিদিনের বাজার দর, সহজে ও নির্ভুলভাবে।
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2 text-sm">
              <li>হোম</li>
              <li>সব পণ্য</li>
              <li>দাম বেড়েছে</li>
              <li>দাম কমেছে</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">
              ক্যাটাগরি
            </h4>
            <ul className="space-y-2 text-sm">
              <li>চাল</li>
              <li>সবজি</li>
              <li>মাছ</li>
              <li>মাংস</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">
              যোগাযোগ
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 info@bazardor.com</li>
              <li>📞 +880 1700-000000</li>
              <li>📍 ঢাকা, বাংলাদেশ</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4">
        <p className="text-sm text-gray-400">
          © 2026 বাজার দর। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
