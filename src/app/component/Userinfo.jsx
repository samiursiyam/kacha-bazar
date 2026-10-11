"use client"; 

import Image from "next/image";
import { authClient } from '../../lib/auth-client.js';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const Userinfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // বাইরে ক্লিক করলে ড্রপডাউন বন্ধ করার লজিক
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const hendleShignOut = async () => {
        setIsDropdownOpen(false);
        await authClient.signOut();
    }

    return (
        <div className="relative" ref={dropdownRef}>
            {user ? (
                <div>
                    {/* ড্রপডাউন ট্রিগার (Avatar + Name) - Mobile Responsive */}
                    <div
                        className='flex items-center gap-2 cursor-pointer select-none group'
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div className="avatar transition-transform group-hover:scale-105">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-gray-100 overflow-hidden">
                                <Image
                                    alt="User Avatar"
                                    src={user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsMjpTVw1d0uLU3pmfOdpRaA6fD7FfCqZ52ko2QZK2A&s=10"}
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <h2 className='text-gray-800 font-medium text-sm sm:text-base flex items-center gap-1'>
                            <span className="max-w-[80px] sm:max-w-full truncate">{user?.name}</span>
                            <svg className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </h2>
                    </div>

                    {/* মডার্ন ড্রপডাউন মেনু */}
                    <div className={`absolute right-0 mt-3 w-64 sm:w-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 p-4 sm:p-5 z-50 transition-all duration-200 origin-top-right ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                        <div className="mb-4">
                            <h3 className="font-bold text-gray-900 text-base truncate">{user?.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 truncate">{user?.email}</p>
                        </div>

                        <div className="h-[1px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 w-full mb-4"></div>

                        <div className="flex flex-col gap-1.5">
                            <Link
                                href={"/profile"}
                                onClick={() => setIsDropdownOpen(false)}
                                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 px-3 py-2.5 rounded-xl transition-all font-medium text-sm"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                আমার প্রোফাইল
                            </Link>

                            <button
                                onClick={hendleShignOut}
                                className="flex items-center gap-3 text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2.5 rounded-xl transition-all font-medium text-sm text-left w-full"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                সাইন আউট
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                /* Modern Sign In / Sign Up Buttons - Mobile Responsive */
                <div className="flex items-center gap-2 sm:gap-3">
                    <Link href={"/signin"}>
                        <button className="px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 active:scale-95">
                            সাইন ইন
                        </button>
                    </Link>
                    <Link href={"/signup"}>
                        <button className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 active:scale-95">
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Userinfo;