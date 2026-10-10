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
    <div className="sticky top-0 z-50">
        <MarqueeText direction="right" duration={30} className="shadow">
            <div className="flex flex-nowrap gap-7 text-sm bg-[#F3FBF4] p-1">
                {data.map((d,ind) => (
                    <Link href={`/detail/${d.id}`}
                    className="flex items-center gap-1 shrink-0" key={d.id}>
                        {d.image} {d.nameBn} {d.today} টাকা/কেজি {" "}

                        <span
                            className={`${
                                d.change.dir === "up"
                                    ? "text-red-600"
                                    : d.change.dir === "down"
                                    ? "text-green-600"
                                    : "text-gray-500"
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
);                        
};

export default Marquee;