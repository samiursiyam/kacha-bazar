"use client"
import React, { useState } from 'react';

const Shgnin = () => {
    // পাসওয়ার্ড হাইড এবং শো করার জন্য স্টেট
    const [showPassword, setShowPassword] = useState(false);
    
    // ইনপুট ডেটা রাখার জন্য স্টেট (যাতে URL চেঞ্জ না হয়)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ফর্ম সাবমিট হ্যান্ডেল করার ফাংশন
    const handleSubmit = (e) => {
        e.preventDefault(); // এই লাইনটি পেজ রিলোড এবং URL চেঞ্জ হওয়া আটকায়
        
        // এখানে আপনি আপনার লগইন API কল করতে পারেন
        console.log("Email:", email);
        console.log("Password:", password);
        alert("সাবমিট হয়েছে! কনসোল চেক করুন।");
    };

    return (
        <div className=" bg-gray-100 flex flex-col justify-center items-center py-10 px-4 font-sans">
            {/* Header Section */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">সাইন ইন করুন</h1>
                <p className="text-gray-500 text-sm">আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন</p>
            </div>

            {/* Main Form Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
                {/* এখানে onSubmit={handleSubmit} যোগ করা হয়েছে */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-1">ইমেইল</label>
                        <input 
                            name="email"
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                        />
                    </div>

                    {/* Password Input with Show/Hide */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-1">পাসওয়ার্ড</label>
                        <div className="relative">
                            <input 
                                name="password"
                                type={showPassword ? "text" : "password"} 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="আপনার পাসওয়ার্ড লিখুন" 
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                            />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? (
                                    // Eye Slash Icon (Hide)
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    // Eye Icon (Show)
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 rounded-lg transition-colors mt-2"
                    >
                        সাইন ইন করুন
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-3 text-sm text-gray-500">অথবা</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="flex gap-4">
                    {/* Google Button */}
                    <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google দিয়ে সাইন ইন করুন
                    </button>

                    {/* GitHub Button */}
                    <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub দিয়ে সাইন ইন করুন
                    </button>
                </div>

                {/* Signup Link */}
                <div className="text-center mt-6 text-sm">
                    <span className="text-gray-600">একাউন্ট নেই? </span>
                    <a href="#" className="text-green-700 font-medium hover:underline">সাইন আপ করুন</a>
                </div>
            </div>

            {/* Footer Text outside card */}
            <div className="mt-8 text-sm text-gray-500">
                — শেয়ার দিয়ে শুরু করুন
            </div>
        </div>
    );
};

export default Shgnin;