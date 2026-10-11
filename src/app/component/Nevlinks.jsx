import Link from 'next/link';
import React from 'react';

const Nevlinks = async () => {

  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories", {
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json()

  return (
    // হালকা বর্ডার, কোনো হেভি ব্যাকগ্রাউন্ড নেই
    <div className='bg-white border-b border-gray-100 shadow-sm'>
      {/* আপনার রিকোয়ারমেন্ট অনুযায়ী container mx-auto */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Mobile: horizontal scroll | Desktop: justify-between & flex-wrap */}
        <div className='flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide py-2 sm:py-3 sm:flex-wrap sm:justify-between items-center'>
          {
            data.map(n => (
              <Link
                href={`/categories/${n.slug}`}
                key={n.id}
                // মডার্ন ক্লিন ডিজাইন, হোভার করলে হালকা সবুজ ব্যাকগ্রাউন্ড আসবে
                className='group flex items-center gap-2 whitespace-nowrap text-sm sm:text-base font-medium text-gray-600 hover:text-emerald-700 transition-all duration-300 flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-emerald-50 active:scale-95'
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                  {n.icon}
                </span>
                <span>{n.nameBn}</span>
              </Link>
            ))
          }
        </div>
        
      </div>
    </div>
  );
};

export default Nevlinks;