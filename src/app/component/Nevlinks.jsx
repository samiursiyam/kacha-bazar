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
    <div className='bg-[#F3FBF4] py-3 sm:py-4'>
      <div className='container mx-auto px-3 sm:px-6 lg:px-8'>
        {/* Mobile: horizontal scroll | Desktop: normal flex */}
        <div className='flex gap-3 sm:gap-5 overflow-x-auto scrollbar-hide pb-1 sm:pb-0 sm:flex-wrap sm:justify-start'>
          {
            data.map(n => (
              <Link
                href={`/categories/${n.slug}`}
                className='flex items-center gap-1 sm:gap-1.5 whitespace-nowrap text-sm sm:text-base text-gray-700 hover:text-[#05893E] transition-colors flex-shrink-0 px-3 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-white sm:bg-transparent border border-gray-200 sm:border-0 shadow-sm sm:shadow-none'
                key={n.id}
              >
                <span>{n.icon}</span>
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