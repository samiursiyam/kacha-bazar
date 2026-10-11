import Link from 'next/link';
import React from 'react';

const Downprice = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products",
        {
            next: { revalidate: 3600 },
        }
    );

    const data = await res.json();
    const products = Array.isArray(data) ? data : data.data;

    // ১. প্রথমে ফিল্টার করা হচ্ছে (মোট কাউন্ট বের করার জন্য)
    const allDownProducts = products.filter((item) => item.change?.dir === "down");
    const totalDownCount = allDownProducts.length; // মোট সংখ্যা

    // ২. এরপর সর্ট এবং স্লাইস করা হচ্ছে
    const downProducts = allDownProducts
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <div className="py-8 bg-gray-50/50"> 
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* হেডিং সেকশন (মোট সংখ্যা সহ) */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-500 text-xs">▼</span>
                        <span className="text-gray-900">আজ দাম কমেছে</span>
                    </h2>
                    
                    {/* মোট কতটি পণ্যের দাম কমেছে তা এখানে দেখানো হচ্ছে */}
                    <span className="text-xs sm:text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full font-semibold shadow-sm">
                        মোট {totalDownCount} টি
                    </span>
                </div>

                {/* কার্ড গ্রিড */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {downProducts.map((item, ind) => (
                        <Link 
                            href={`/detail/${item.id}`}
                            key={ind}
                            // মডার্ন কার্ড ডিজাইন এবং হোভার ইফেক্ট (সবুজ থিম)
                            className="group flex flex-col justify-between rounded-2xl bg-white p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* উপরের অংশ: ছবি এবং নাম */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className="flex-shrink-0">
                                    <span className="text-3xl flex items-center justify-center h-14 w-14 rounded-2xl bg-gray-50 group-hover:bg-emerald-50 transition-colors duration-300">
                                        {item.image}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-800 leading-tight group-hover:text-emerald-700 transition-colors">
                                        {item.nameBn}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1 font-medium">
                                        প্রতি {item.unit}
                                    </p>
                                </div>
                            </div>

                            {/* নিচের অংশ: দাম এবং পার্সেন্টেজ */}
                            <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-50">
                                <div>
                                    <p className="text-[11px] text-gray-400 mb-1 font-medium">
                                        আজকের দাম
                                    </p>
                                    <p className="text-xl font-extrabold text-gray-900">
                                        {item.today} ৳
                                    </p>
                                </div>
                                
                                {/* পার্সেন্টেজ ব্যাজ (সবুজ) */}
                                <div className="flex items-center text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg text-sm font-bold gap-1 group-hover:bg-emerald-100 transition-colors">
                                    <span className="text-[10px]">▼</span>
                                    <span>{item.change.pct}%</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Downprice;