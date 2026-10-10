import Link from 'next/link';
import React from 'react';

const ProductCard = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products",{
    next: { revalidate: 3600 },
  })
    const data = await res.json()



    return (
        <div className=" py-6"> {/* হালকা সবুজ ব্যাকগ্রাউন্ড */}
            <div className="container mx-auto px-4">
                {/* হেডিং সেকশন */}
                <h2 className="mb-5 text-xl font-bold flex items-center gap-1">
                    <span className="text-red-500 text-sm">-</span>
                    <span className="text-gray-900 text-2xl">সব পণ্য</span>


                </h2>
                <p>মোট {data.length} পণ্য দেখানো হচ্ছে</p>
                {/* কার্ড গ্রিড */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((item, ind) => (
                        <Link href={`/detail/${item.id}`}
                            key={ind}
                           
                            className="flex flex-col justify-between rounded-xl bg-white p-4 shadow-sm shadow-2xl border border-green-200"
                        >
                       
                            <div className="flex items-center gap-4 mb-4 ">
                                <div className="flex-shrink-0 rounded-2xl">
                                    <span className="text-3xl flex items-center justify-center h-12 w-12 rounded-2xl bg-[#cee7e9]">
                                        {item.image}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 leading-tight">
                                        {item.nameBn}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        প্রতি {item.unit}
                                    </p>
                                </div>
                            </div>

                            {/* নিচের অংশ: দাম এবং পার্সেন্টেজ */}
                            <div className="flex items-end justify-between mt-auto">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">
                                        আজকের দাম
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                        {item.today} টাকা
                                    </p>
                                </div>

                                <div
                                    className={`flex items-center font-semibold text-sm gap-0.5 ${item.change.dir === "up"
                                        ? "text-red-500"
                                        : item.change.dir === "down"
                                            ? "text-green-500"
                                            : "text-gray-500"
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