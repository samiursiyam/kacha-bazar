import Link from 'next/link';
import React from 'react';

const ProductCard = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products", {
        next: { revalidate: 3600 },
    })
    const data = await res.json()

    // ডাটা অ্যারে কিনা চেক করা হচ্ছে (নিরাপত্তার জন্য)
    const products = Array.isArray(data) ? data : data.data;

    return (
        <div className="py-8 bg-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* হেডিং সেকশন (মোট সংখ্যা সহ) */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                        {/* হেডিং এর পাশে একটি সুন্দর ভার্টিক্যাল বার */}
                        <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
                        <span className="text-gray-900">সব পণ্য</span>
                    </h2>
                    
                    {/* মোট কতটি পণ্য আছে তা এখানে দেখানো হচ্ছে */}
                    <span className="text-xs sm:text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full font-semibold shadow-sm">
                        মোট {products.length} টি
                    </span>
                </div>

                {/* কার্ড গ্রিড */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((item, ind) => (
                        <Link 
                            href={`/detail/${item.id}`}
                            key={ind}
                            // মডার্ন কার্ড ডিজাইন এবং হোভার ইফেক্ট
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

                                {/* ডাইনামিক প্রাইস চেঞ্জ ব্যাজ */}
                                <div
                                    className={`flex items-center px-2.5 py-1 rounded-lg text-sm font-bold gap-1 transition-colors ${
                                        item.change.dir === "up"
                                            ? "text-red-600 bg-red-50 group-hover:bg-red-100"
                                            : item.change.dir === "down"
                                            ? "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-100"
                                            : "text-gray-500 bg-gray-100 group-hover:bg-gray-200"
                                    }`}
                                >
                                    <span className="text-[10px]">
                                        {item.change.dir === "up"
                                            ? "▲"
                                            : item.change.dir === "down"
                                            ? "▼"
                                            : "—"}
                                    </span>
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

export default ProductCard;