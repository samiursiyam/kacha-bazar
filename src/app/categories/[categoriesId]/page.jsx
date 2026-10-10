
import Link from "next/link";
import React from "react";

export const instant = false;

const CategoriesPage = async ({ params }) => {
  const { categoriesId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoriesId}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const data = await res.json();
  const category = data?.[0];

  return (
    <div className="p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl shadow-inner">
            {category?.categoryIcon}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {category?.categoryNameBn || "পণ্যের তালিকা"}
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              প্রতি {category?.unit || "ইউনিট"} দামের হিসাব
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl p-2 flex justify-end shadow-sm mb-6">
          <select
            defaultValue="low"
            className="bg-gray-100 text-gray-700 text-sm rounded-lg px-4 py-2 outline-none border-none cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <option value="low">সবচেয়ে কম দাম</option>
            <option value="high">সবচেয়ে বেশি দাম</option>
            <option value="recent">সাম্প্রতিক পরিবর্তন</option>
          </select>
        </div>

        {/* Section Title */}
        <h2 className="text-sm text-gray-500 mb-4 px-1">
          মোট {data.length} পণ্য দেখানো হচ্ছে
        </h2>

        {/* Product Grid */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((product) => {
              const isUp = product.change?.dir === "up";
              const isDown = product.change?.dir === "down";

              return (
                <Link
                  href={`/detail/${product.id}`}
                  key={product.id}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  {/* Icon + Name */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#c8dce0] rounded-2xl flex items-center justify-center text-2xl shrink-0">
                      {product.image}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 text-base leading-tight">
                        {product.nameBn}
                      </h3>

                      <p className="text-xs text-gray-400 mt-1">
                        প্রতি {product.unit}
                      </p>
                    </div>
                  </div>

                  {/* Price + Change */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        সর্বশেষ দাম
                      </p>

                      <p className="text-2xl font-bold text-gray-900">
                        {product.today}৳{" "}
                        <span className="text-sm font-normal text-gray-500">
                          {product.unit}
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
                      {isUp ? (
                        <span>▲</span>
                      ) : isDown ? (
                        <span>▼</span>
                      ) : (
                        <span>—</span>
                      )}

                      <span>{product.change?.pct ?? 0}%</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center text-gray-500 shadow-sm">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
