import Image from 'next/image';
import React from 'react';

const Header = () => {
    // Real Bengali date
    // const today = new Date();
    // const bengaliDate = today.toLocaleDateString('bn-BD', {
    //     weekday: 'long',
    //     day: 'numeric',
    //     month: 'long',
    //     year: 'numeric',
    // });

    return (
        <div className='bg-[#bedfbe1f] py-3 md:py-5'>
            <div className='container mx-auto px-3 sm:px-6 lg:px-8'>
                <div className='bg-white rounded-2xl shadow p-4 md:p-6'>
                    <div className='flex flex-col-reverse md:flex-row items-center gap-5 md:gap-6'>

                        {/* Left side - Content */}
                        <div className='flex-1 space-y-3 w-full text-center md:text-left'>
                            {/* Date badge */}
                            <div className='inline-block px-3 py-1 rounded-full border border-[#c9d4cd] bg-[#05893E]/10'>
                                <span className='text-[#05893E] font-medium text-xs md:text-sm'>
                                    {/* {bengaliDate} */}
                                </span>
                            </div>

                            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight'>
                                আজকের বাজারের দাম এক নজরে
                            </h1>

                            <p className='text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed'>
                                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                                বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                            </p>

                            <button className='bg-[#05893E] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#04702f] transition-colors duration-300 shadow hover:shadow-md text-sm w-full sm:w-auto'>
                                সব পণ্য দেখুন
                            </button>
                        </div>

                        {/* Right side - Image */}
                        <div className='flex-1 flex justify-center md:justify-end w-full'>
                            <Image
                                src="/bazar-hero.png"
                                alt="আজকের বাজার"
                                height={280}
                                width={400}
                                className='w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain'
                                priority
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;