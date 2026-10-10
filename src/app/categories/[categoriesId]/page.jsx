
import Link from 'next/link';
import React from 'react';

const CategoriesPage = async({params}) => {
    const {categoriesId} =await params
    

    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoriesId} `)
    const data = await res.json()

    const category = data[0]
// console.log(data);
    
   return (
    <div className="min-h-screen  p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* 🔹 Header — data[0] থেকে নাম ও আইকন */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl shadow-inner">
            {category?.categoryIcon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {category?.categoryNameBn}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              প্রতি {category?.unit} দামের হিসাব
            </p>
          </div>
        </div>

        {/* 🔹 Filter Section */}
        <div className="bg-white rounded-2xl p-2 flex justify-end shadow-sm mb-6">
          <select className="bg-gray-100 text-gray-700 text-sm rounded-lg px-4 py-2 outline-none border-none cursor-pointer hover:bg-gray-200 transition-colors">
            <option>সবচেয়ে কম দাম</option>
            <option>সবচেয়ে বেশি দাম</option>
            <option>সাম্প্রতিক পরিবর্তন</option>
          </select>
        </div>

        {/* 🔹 Section Title */}
        <h2 className="text-sm text-gray-500 mb-4 px-1">
          মোট  {data.length} পণ্য দেখানো হচ্ছে
        </h2>

        {/* 🔹 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((data,ind) => {
            const isUp = data.change?.dir === 'up';
            const isDown = data.change?.dir === 'down';

            return (
              <Link href={`/detail/${data.id}`}
                key={ind}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Icon + Name */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#c8dce0] rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    {data.image}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base leading-tight">
                      {data.nameBn}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      প্রতি {data.unit}
                    </p>
                  </div>
                </div>

                {/* Price + Change */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">সর্বশেষ দাম</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {data.today}৳{" "}
                      <span className="text-sm font-normal text-gray-500">
                        {data.unit}
                      </span>
                    </p>
                  </div>

                  <div
                    className={`text-sm font-semibold flex items-center gap-1 ${
                      isUp
                        ? "text-red-500"
                        : isDown
                        ? "text-green-500"
                        : "text-gray-400"
                    }`}
                  >
                    {isUp && <span>▲</span>}
                    {isDown && <span>▼</span>}
                    {!isUp && !isDown && <span>—</span>}
                    <span>{data.change?.pct ?? 0}%</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default CategoriesPage;