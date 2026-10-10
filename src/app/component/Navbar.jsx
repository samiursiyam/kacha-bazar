import Link from "next/link";
import React from "react";

const Navbar = () => {
  const banglaDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date("2026-10-09T12:00:00+06:00"));

  return (
    <nav className="bg-[#bedfbe1f] shadow border-b-2 border-[#05893E]/30">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

      <Link href={'/'}>

        <div className="flex items-center gap-2">
          <div className="bg-green-600 p-1 rounded-2xl">
            <span className="text-2xl">🛒</span>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-gray-700">
              বাজার দর
            </span>
            <span className="text-xs text-gray-500">{banglaDate}</span>
          </div>
        </div>

</Link>

        <div className="flex">
          <button className="btn btn-ghost btn-sm pr-5 text-gray-700 font-bold text-sm">
            সাইন ইন
          </button>
          <button className="btn btn-primary btn-sm bg-green-700 border-none font-bold text-sm">
            সাইন আপ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;