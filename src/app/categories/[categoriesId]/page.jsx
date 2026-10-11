"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import React, { useState, useEffect, useMemo, use } from "react";

const CategoriesPage = ({ params }) => {
  // Next.js 15/16 এ params একটি Promise, তাই use() দিয়ে unwrap করতে হয়
  const { categoriesId } = use(params);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("low");

  // ডেটা ফেচ (useEffect দিয়ে, ক্যাশিং সহ)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.abcz.workers.dev/api/bazardor/products?category=${categoriesId}`,
          { cache: "force-cache" }
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const raw = await res.json();
        // সেফটি চেক: অ্যারে বা { data: [...] } — দুই ফরম্যাটই হ্যান্ডেল
        const data = Array.isArray(raw) ? raw : raw?.data || [];
        setProducts(data);
      } catch (err) {
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoriesId]);

  // সর্টিং লজিক
  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sortBy) {
      case "low":
        return list.sort((a, b) => (a.today || 0) - (b.today || 0));
      case "high":
        return list.sort((a, b) => (b.today || 0) - (a.today || 0));
      case "recent":
        return list.sort(
          (a, b) => Math.abs(b.change?.pct || 0) - Math.abs(a.change?.pct || 0)
        );
      default:
        return list;
    }
  }, [products, sortBy]);

  const category = products?.[0];

  // লোডিং স্টেট
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50/50 py-8 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500 font-medium">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  // কোনো প্রোডাক্ট না থাকলে 404
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50/50 py-6 md:py-8 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ====== Header Section ====== */}
        <div className="bg-white rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-50/50 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner border border-emerald-100/50">
            {category?.categoryIcon}
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {category?.categoryNameBn || "পণ্যের তালিকা"}
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-2 font-medium">
              প্রতি {category?.unit || "ইউনিট"} দামের হিসাব
            </p>
          </div>
        </div>

        {/* ====== Modern Sort Section ====== */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-50/50 mb-6">
          
          {/* Total Count */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
            <h2 className="text-base sm:text-lg font-bold text-gray-800">
              পণ্যের তালিকা
            </h2>
            <span className="text-xs sm:text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full font-semibold shadow-sm ml-1">
              মোট {sortedProducts.length} টি
            </span>
          </div>

          {/* Sort Dropdown (Active) */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 hover:border-emerald-200 transition-colors w-full sm:w-auto">
            <svg
              className="w-4 h-4 text-emerald-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
              ></path>
            </svg>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-gray-700 text-sm font-semibold outline-none border-none cursor-pointer w-full"
            >
              <option value="low">সবচেয়ে কম দাম</option>
              <option value="high">সবচেয়ে বেশি দাম</option>
              <option value="recent">সাম্প্রতিক পরিবর্তন</option>
            </select>
          </div>
        </div>

        {/* ====== Product Grid ====== */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {sortedProducts.map((product) => {
              const isUp = product.change?.dir === "up";
              const isDown = product.change?.dir === "down";

              return (
                <Link
                  href={`/detail/${product.id}`}
                  key={product.id}
                  className="group flex flex-col justify-between rounded-2xl bg-white p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon + Name */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 bg-gray-50 group-hover:bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-colors duration-300">
                      {product.image}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-800 leading-tight group-hover:text-emerald-700 transition-colors">
                        {product.nameBn}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 font-medium">
                        প্রতি {product.unit}
                      </p>
                    </div>
                  </div>

                  {/* Price + Change */}
                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-50">
                    <div>
                      <p className="text-[11px] text-gray-400 mb-1 font-medium">
                        সর্বশেষ দাম
                      </p>
                      <p className="text-xl font-extrabold text-gray-900">
                        {product.today}৳{" "}
                        <span className="text-xs font-medium text-gray-400">
                          /{product.unit}
                        </span>
                      </p>
                    </div>

                    {/* Active Price Change Badge */}
                    <div
                      className={`flex items-center px-2.5 py-1 rounded-lg text-sm font-bold gap-1 transition-colors ${
                        isUp
                          ? "text-red-600 bg-red-50 group-hover:bg-red-100"
                          : isDown
                          ? "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-100"
                          : "text-gray-500 bg-gray-100 group-hover:bg-gray-200"
                      }`}
                    >
                      <span className="text-[10px]">
                        {isUp ? "▲" : isDown ? "▼" : "—"}
                      </span>
                      <span>{product.change?.pct ?? 0}%</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center text-gray-500 shadow-sm border border-gray-100">
            <span className="text-4xl block mb-3">📭</span>
            <p className="font-medium text-lg">
              এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default CategoriesPage;