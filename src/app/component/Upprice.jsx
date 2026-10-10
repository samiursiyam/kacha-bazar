import Link from 'next/link';
import React from 'react';

const Upprice = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    const data = await res.json();

    const products = Array.isArray(data) ? data : data.data;

    const upProducts = products
        .filter((item) => item.change?.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

        // console.log("data is",data.id);
        

    return (
        <div className=" py-6"> {/* হালকা সবুজ ব্যাকগ্রাউন্ড */}
            <div className="container mx-auto px-4">
                {/* হেডিং সেকশন */}
                <h2 className="mb-5 text-xl font-bold flex items-center gap-1">
                    <span className="text-red-500 text-sm">▲</span>
                    <span className="text-gray-900">আজ দাম বেড়েছে</span>
                </h2>

                {/* কার্ড গ্রিড */}
 

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {upProducts.map((item,ind) => (
                        <Link href={`detail/${item.id}`}
                            key={ind}
                            // এখানে শুধু কার্ডের চারপাশে হালকা বর্ডার (border border-gray-200) দেওয়া হয়েছে
                            className="flex flex-col justify-between rounded-xl bg-white p-4 shadow-sm shadow-2xl border border-green-200"
                        >
                            {/* উপরের অংশ: ছবি এবং নাম */}
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
                                <div className="flex items-center text-red-500 font-semibold text-sm gap-0.5">
                                    <span className="text-[10px]">▲</span>
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

export default Upprice;