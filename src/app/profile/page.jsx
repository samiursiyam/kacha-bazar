"use client";

import Image from 'next/image.js';
import { authClient } from '../../lib/auth-client.js';
import React, { useState } from 'react';

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // এডিট মোড টগল করার স্টেট
  const [isEditing, setIsEditing] = useState(false);

  // ডিফল্ট ছবি সেট করা হয়েছে যদি user.image না থাকে
  const imageUrl = user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsMjpTVw1d0uLU3pmfOdpRaA6fD7FfCqZ52ko2QZK2A&s=10";


  const hendleUpdat = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries());

    await authClient.updateUser({
      ...newUserData
    });

    setIsEditing(false); // আপডেট শেষে ফর্ম বন্ধ
  }


  const hendleShignOut = async () => {
    await authClient.signOut();
  }
  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">আপনার প্রোফাইল</h1>
          <p className="text-gray-500 text-sm">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>

        {/* Profile Info Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
              <Image
                src={imageUrl}
                alt={user?.name || "User"}
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* User Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{user?.name || 'অতিথি ব্যবহারকারী'}</h2>
              <p className="text-gray-500 text-sm">{user?.email || 'কোনো ইমেইল পাওয়া যায়নি'}</p>

              {/* Edit Button */}
              <button
                type="button"
                onClick={() => setIsEditing((prev) => !prev)}
                className="mt-2 inline-flex items-center gap-1 px-3 py-1 border border-[#198754] text-[#198754] rounded-lg text-xs font-medium hover:bg-green-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
                {isEditing ? 'বাতিল' : 'এডিট'}
              </button>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={hendleShignOut}
            type="button"
            className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m16 17 5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </svg>
            সাইন আউট
          </button>
        </div>

        {/* Update Form Card - শুধু এডিট বাটনে ক্লিক করলে দেখাবে */}
        {isEditing && (
          <form className="space-y-6 mt-6" onSubmit={hendleUpdat}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">তথ্য</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">নাম</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.name || ''}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-800"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Imageurl</label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={user?.image || ''}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-800"
                    placeholder="Image url"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#198754] hover:bg-[#157347] text-white font-medium py-2.5 rounded-lg transition-colors"
                >
                  আপডেট
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default ProfilePage;