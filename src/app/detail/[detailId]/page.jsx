import React from "react";
import { notFound } from "next/navigation";

export const instant = false;

// ইংরেজি সংখ্যাকে বাংলায় রূপান্তর করার হেল্পার ফাংশন
const toBn = (num) => {
    const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(num ?? 0).replace(/\d/g, (d) => bnDigits[d]);
};

const page = async ({ params }) => {
    const { detailId } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products/${detailId}`,
        {
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch product details");
    }

    const data = await res.json();
    const markets = data.markets || [];

    if (!markets) {
        notFound();
    }

    // ডাটা প্রসেসিং লজিক (অপরিবর্তিত)
    const sortedMarkets = [...markets].sort((a, b) => {
        const aAvg = (a.min + a.max) / 2;
        const bAvg = (b.min + b.max) / 2;
        if (a.min !== b.min) return a.min - b.min;
        if (a.max !== b.max) return b.max - a.max;
        return bAvg - aAvg;
    });

    const lowestMarket = markets.length
        ? markets.reduce((m, cur) => (cur.min < m.min ? cur : m), markets[0])
        : null;

    const highestMarket = markets.length
        ? markets.reduce((m, cur) => (cur.max > m.max ? cur : m), markets[0])
        : null;

    const avgPrice = markets.length
        ? Math.round(
              markets.reduce((s, m) => s + (m.min + m.max) / 2, 0) / markets.length
          )
        : 0;

    const priceDiff = Number(data.today ?? 0) - Number(data.yesterday ?? 0);

    const priceChangeText =
        priceDiff > 0
            ? `গতকালের তুলনায় আজ দাম বেড়েছে ${toBn(priceDiff)} টাকা`
            : priceDiff < 0
            ? `গতকালের তুলনায় আজ দাম কমেছে ${toBn(Math.abs(priceDiff))} টাকা`
            : "গতকালের তুলনায় আজ দামে কোনো পরিবর্তন হয়নি";

    return (
        <div className="min-h-screen bg-gray-50/50 py-6 md:py-8 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb - মডার্ন ডিজাইন */}
                <div className="text-xs sm:text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
                    <span className="hover:text-emerald-600 cursor-pointer transition-colors">হোম</span>
                    <span className="text-gray-300">›</span>
                    <span className="hover:text-emerald-600 cursor-pointer transition-colors">{data.categoryNameBn}</span>
                    <span className="text-gray-300">›</span>
                    <span className="text-gray-800 font-semibold">{data.nameBn}</span>
                </div>

                {/* Header Section - প্রিমিয়াম কার্ড লুক */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-50/50 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div className="flex items-center gap-5">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner border border-emerald-100/50">
                            {data.image}
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                {data.nameBn}
                            </h1>
                            <p className="text-sm sm:text-base text-gray-500 mt-1 font-medium">
                                প্রতি {data.unit === "kg" ? "কেজি" : data.unit} • {data.categoryNameBn}
                            </p>

                            {/* Active Rating Badge */}
                            <span
                                className={`inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-full mt-3 font-bold shadow-sm transition-all ${
                                    priceDiff > 0
                                        ? "bg-red-50 text-red-600 border border-red-100"
                                        : priceDiff < 0
                                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                        : "bg-gray-100 text-gray-600 border border-gray-200"
                                }`}
                            >
                                {priceDiff > 0 ? "▲" : priceDiff < 0 ? "▼" : "—"}
                                {priceChangeText}
                            </span>
                        </div>
                    </div>

                    {/* Price Box */}
                    <div className="bg-gray-50/80 border border-gray-100 p-5 rounded-2xl text-right min-w-[160px] w-full md:w-auto shadow-inner">
                        <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-1">
                            আজকের দাম
                        </p>
                        <p className="text-3xl font-extrabold text-gray-900">
                            {toBn(data.today)} ৳
                        </p>
                        <div
                            className={`flex items-center justify-end gap-1 mt-2 text-sm font-bold ${
                                data.change?.dir === "up"
                                    ? "text-red-500"
                                    : data.change?.dir === "down"
                                    ? "text-emerald-500"
                                    : "text-gray-500"
                            }`}
                        >
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow-sm text-[10px]">
                                {data.change?.dir === "up" ? "▲" : data.change?.dir === "down" ? "▼" : "—"}
                            </span>
                            {toBn(data.change?.pct ?? 0)}%
                        </div>
                    </div>
                </div>

                {/* Summary Cards Section - মডার্ন স্ট্যাটস কার্ড */}
                <div className="mb-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
                        মাসের মূল্য পর্যালোচনা
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {/* Lowest */}
                        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-2 flex items-center gap-1.5">
                                <span className="text-emerald-500">▼</span> সর্বনিম্ন দাম
                            </p>
                            <p className="text-2xl font-extrabold text-emerald-700">
                                {toBn(lowestMarket?.min ?? data.yesterday)} ৳
                            </p>
                            {lowestMarket && (
                                <p className="text-xs text-gray-500 mt-2 font-medium bg-emerald-50/50 inline-block px-2 py-0.5 rounded">
                                    {lowestMarket.market} ({lowestMarket.division})
                                </p>
                            )}
                        </div>

                        {/* Highest */}
                        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-2 flex items-center gap-1.5">
                                <span className="text-red-500">▲</span> সর্বাধিক দাম
                            </p>
                            <p className="text-2xl font-extrabold text-red-700">
                                {toBn(highestMarket?.max ?? data.lastWeek)} ৳
                            </p>
                            {highestMarket && (
                                <p className="text-xs text-gray-500 mt-2 font-medium bg-red-50/50 inline-block px-2 py-0.5 rounded">
                                    {highestMarket.market} ({highestMarket.division})
                                </p>
                            )}
                        </div>

                        {/* Average */}
                        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-2 flex items-center gap-1.5">
                                <span className="text-blue-500">—</span> গড় দাম
                            </p>
                            <p className="text-2xl font-extrabold text-gray-800">
                                {toBn(avgPrice || data.lastMonth)} ৳
                            </p>
                            <p className="text-xs text-gray-500 mt-2 font-medium bg-gray-50 inline-block px-2 py-0.5 rounded">
                                সব বাজারের গড় হিসাবে
                            </p>
                        </div>
                    </div>
                </div>

                {/* Market Table Section - ক্লিন ও মডার্ন টেবিল */}
                <div>
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
                        বাজারভিত্তিক মূল্যতালিকা
                    </h2>

                    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-gray-50/80 border-b border-gray-100 text-xs sm:text-sm text-gray-600">
                                        <th className="py-4 px-5 font-bold uppercase tracking-wider">বাজার</th>
                                        <th className="py-4 px-5 font-bold uppercase tracking-wider">বিভাগ</th>
                                        <th className="py-4 px-5 font-bold uppercase tracking-wider text-right">সর্বনিম্ন</th>
                                        <th className="py-4 px-5 font-bold uppercase tracking-wider text-right">সর্বোচ্চ</th>
                                        <th className="py-4 px-5 font-bold uppercase tracking-wider text-right">গড়</th>
                                    </tr>
                                </thead>

                                <tbody className="text-sm divide-y divide-gray-50">
                                    {sortedMarkets.map((market, index) => {
                                        const average = Math.round((market.min + market.max) / 2);
                                        return (
                                            <tr
                                                key={`${market.market}-${market.division}-${index}`}
                                                className="hover:bg-emerald-50/30 transition-colors group"
                                            >
                                                <td className="py-4 px-5 text-gray-800 font-bold group-hover:text-emerald-700 transition-colors">
                                                    {market.market}
                                                </td>
                                                <td className="py-4 px-5 text-gray-500 font-medium">
                                                    {market.division}
                                                </td>
                                                <td className="py-4 px-5 text-gray-800 text-right font-semibold">
                                                    {toBn(market.min)} ৳
                                                </td>
                                                <td className="py-4 px-5 text-gray-800 text-right font-semibold">
                                                    {toBn(market.max)} ৳
                                                </td>
                                                <td className="py-4 px-5 text-right">
                                                    <span className="bg-gray-100 text-gray-800 font-bold px-3 py-1 rounded-lg text-xs sm:text-sm group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
                                                        {toBn(average)} ৳
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}

                                    {sortedMarkets.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="py-12 px-4 text-center text-gray-500 font-medium">
                                                <span className="text-3xl block mb-2">📭</span>
                                                কোনো বাজারের তথ্য পাওয়া যায়নি।
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default page;