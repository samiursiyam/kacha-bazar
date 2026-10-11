import React from 'react';

const Loading = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8F9FA] to-[#E8F5E9] font-sans">
            
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                
                {/* Custom Animated Loader */}
                <div className="relative w-28 h-28 mb-8">
                    {/* Outer Static Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-green-100"></div>
                    
                    {/* Spinning Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#198754] border-r-[#198754] animate-spin" style={{ animationDuration: '1s' }}></div>
                    
                    {/* Inner Glowing Ring */}
                    <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#20c997] border-l-[#20c997] animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
                    
                    {/* Center Icon (Bazar Cart) */}
                    <div className="absolute inset-5 bg-white rounded-full flex items-center justify-center shadow-md">
                        <svg 
                            className="w-8 h-8 text-[#198754] animate-pulse" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                </div>

                {/* Loading Text */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">লোড হচ্ছে...</h2>
                <p className="text-gray-500 text-sm font-medium animate-pulse">অনুগ্রহ করে একটু অপেক্ষা করুন</p>
                
                {/* Bouncing Dots */}
                <div className="flex space-x-2 mt-6">
                    <div className="w-2.5 h-2.5 bg-[#198754] rounded-full animate-bounce"></div>
                    <div className="w-2.5 h-2.5 bg-[#198754] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2.5 h-2.5 bg-[#198754] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;