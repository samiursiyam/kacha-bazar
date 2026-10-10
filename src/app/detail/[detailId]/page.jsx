import React from 'react';

// ইংরেজি সংখ্যাকে বাংলায় রূপান্তর করার হেল্পার ফাংশন
const toBn = (num) => {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, (d) => bnDigits[d]);
};

const page = async ({ params }) => {
    const { detailId } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products/${detailId}`
    );
    const data = await res.json();

    const markets = data.markets || [];

    const sortedMarkets = [...markets].sort((a, b) => {
        const aAvg = (a.min + a.max) / 2;
        const bAvg = (b.min + b.max) / 2;

        if (a.min !== b.min) return a.min - b.min;          // min ↑
        if (a.max !== b.max) return b.max - a.max;          // max ↓
        return bAvg - aAvg;                                 // avg ↓
    });

    // Summary card এ দেখানোর জন্য
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

    // দামের পার্থক্য এবং টেক্সট
    const priceDiff =  data.today-data.yesterday ;

    const priceChangeText =
        priceDiff > 0
            ? `গতকালের তুলনায় আজ দাম বেড়েছে ${toBn(priceDiff)} টাকা`
            : priceDiff < 0
            ? `গতকালের তুলনায় আজ দাম কমেছে ${toBn(Math.abs(priceDiff))} টাকা`
            : 'গতকালের তুলনায় আজ দামে কোনো পরিবর্তন হয়নি';

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 min-h-screen">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                <span>হোম</span>
                <span>›</span>
                <span>{data.categoryNameBn}</span>
                <span>›</span>
                <span className="text-gray-800 font-medium">{data.nameBn}</span>
            </div>

            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#dfe2e0] rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                        {data.image}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{data.nameBn}</h1>
                        <p className="text-gray-500 text-sm mt-1">
                            প্রতি {data.unit === 'kg' ? 'কেজি' : data.unit} {data.categoryNameBn}
                        </p>
                        <span
                            className={`inline-block text-xs px-3 py-1 rounded-full mt-2 font-medium ${
                                priceDiff > 0
                                    ? 'bg-red-50 text-red-600'
                                    : priceDiff < 0
                                    ? 'bg-green-50 text-green-600'
                                    : 'bg-gray-100 text-gray-600'
                            }`}
                        >
                            {priceChangeText}
                        </span>
                    </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-right min-w-[140px]">
                    <p className="text-sm text-gray-500 font-medium mb-1">আজকের দাম</p>
                    <p className="text-2xl font-bold text-gray-800">
                        {toBn(data.today)} টাকা
                    </p>
                    <div
                        className={`flex items-center justify-end gap-1 mt-1 text-xs font-semibold ${
                            data.change.dir === 'up' ? 'text-red-500' : 'text-green-500'
                        }`}
                    >
                        {data.change.dir === 'up' ? '▲' : '▼'} {toBn(data.change.pct)}%
                    </div>
                </div>
            </div>

            {/* Summary Cards Section */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-3">মাসের মূল্য পর্যালোচনা</h2>
                <div className="flex justify-between ">
                    {/* Lowest */}
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm ">
                        <p className="text-sm text-gray-500 mb-1">সর্বনিম্ন দাম</p>
                        <p className="text-xl font-bold text-green-700">
                            {toBn(lowestMarket?.min ?? data.yesterday)} টাকা
                        </p>
                        {lowestMarket && (
                            <p className="text-sm text-gray-500 mt-1">
                                {lowestMarket.market} ({lowestMarket.division})
                            </p>
                        )}
                    </div>

                    {/* Highest */}
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">সর্বাধিক দাম</p>
                        <p className="text-xl font-bold text-red-700">
                            {toBn(highestMarket?.max ?? data.lastWeek)} টাকা
                        </p>
                        {highestMarket && (
                            <p className="text-sm text-gray-500 mt-1">
                                {highestMarket.market} ({highestMarket.division})
                            </p>
                        )}
                    </div>

                    {/* Average */}
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">গড় দাম</p>
                        <p className="text-xl font-bold text-gray-800">
                            {toBn(avgPrice || data.lastMonth)} টাকা
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            সব বাজারের গড় হিসাবে
                        </p>
                    </div>
                </div>
            </div>

            {/* Market Table Section */}
            <div>
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                    বাজারভিত্তিক মূল্যতালিকা
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-600">
                                    <th className="py-3 px-4 font-semibold">বাজার</th>
                                    <th className="py-3 px-4 font-semibold">বিভাগ</th>
                                    <th className="py-3 px-4 font-semibold text-right">সর্বনিম্ন</th>
                                    <th className="py-3 px-4 font-semibold text-right">সর্বোচ্চ</th>
                                    <th className="py-3 px-4 font-semibold text-right">গড়</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {sortedMarkets.map((market, index) => {
                                    const average = Math.round((market.min + market.max) / 2);
                                    return (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                                        >
                                            <td className="py-3 px-4 text-gray-800 font-medium">
                                                {market.market}
                                            </td>
                                            <td className="py-3 px-4 text-gray-500">
                                                {market.division}
                                            </td>
                                            <td className="py-3 px-4 text-gray-800 text-right">
                                                {toBn(market.min)} টাকা
                                            </td>
                                            <td className="py-3 px-4 text-gray-800 text-right">
                                                {toBn(market.max)} টাকা
                                            </td>
                                            <td className="py-3 px-4 text-gray-800 font-semibold text-right">
                                                {toBn(average)} টাকা
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;