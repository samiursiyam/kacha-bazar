import Link from 'next/link';
import React from 'react';

const Nevlinks = async () => {

  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories", {
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json()

  return (
    <div className='container mx-auto py-4 bg-[#F3FBF4]'>
      <div className='flex gap-5 ml-9'>
        {
          data.map(n => <Link href={`/categories/${n.slug}`} className='flex gap-1 ml-2' key={n.id}>
            <div> {n.icon} </div>
            <div>

              {n.nameBn}
            </div>
          </Link>)
        }
      </div>
    </div>
  );
};

export default Nevlinks;