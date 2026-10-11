import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

import React from 'react';
import Link from "next/link";

const Marquee = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products",  {
      next: { revalidate: 3600 },
    } )

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await res.json()

    return (
        // sticky top-[60px] z-40 রিমুভ করা হয়েছে, এখন স্ক্রল করলে এটি উপরে চলে যাবে
        <div className="bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto lg:px-8">
                
                {/* মডার্ন এবং ক্লিন মার্কি টেক্সট */}
                <MarqueeText direction="right" duration={30} className="">
                    <div className="flex flex-nowrap items-center gap-6 sm:gap-8 text-sm">
                        {data.map((d, ind) => (
                            <Link 
                                href={`/detail/${d.id}`}
                                key={d.id}
                                // হোভার করলে সুন্দর একটি কার্ড ইফেক্ট আসবে
                                className="group flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-xl transition-all duration-300 hover:bg-emerald-50 border border-transparent hover:border-emerald-100"
                            >
                                {/* প্রোডাক্ট আইকন/ইমেজ */}
                                <span className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full text-xs">
                                    {d.image}
                                </span>
                                
                                {/* প্রোডাক্টের নাম */}
                                <span className="font-semibold text-gray-700 group-hover:text-emerald-800 transition-colors">
                                    {d.nameBn}
                                </span>
                                
                                {/* প্রোডাক্টের দাম */}
                                <span className="font-bold text-gray-900">
                                    {d.today} টাকা/কেজি
                                </span>

                                {/* প্রাইস চেঞ্জ ইন্ডিকেটর (আধুনিক ব্যাজ ডিজাইন) */}
                                <span
                                    className={`flex items-center gap-0.5 text-xs font-bold px-2 py-0.5 rounded-md ${
                                        d.change.dir === "up"
                                            ? "text-red-600 bg-red-50"
                                            : d.change.dir === "down"
                                            ? "text-emerald-600 bg-emerald-50"
                                            : "text-gray-500 bg-gray-100"
                                    }`}
                                >
                                    {d.change.dir === "up"
                                        ? "▲"
                                        : d.change.dir === "down"
                                        ? "▼"
                                        : "—"}{" "}
                                    {d.change.pct}
                                </span>
                            </Link>
                        ))}
                    </div>
                </MarqueeText>

            </div>
        </div>
    );                        
};

export default Marquee;