import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#034920] text-gray-300 mt-10">
            {/* উপরের অংশ */}
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* ব্র্যান্ড সেকশন */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className="text-2xl">🛒</span>
                            বাজার দর
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            প্রতিদিনের বাজার দর, সহজে ও নির্ভুলভাবে। সারা দেশের
                            পণ্যের দাম এক জায়গায়।
                        </p>
                    </div>

                    {/* দ্রুত লিংক */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">দ্রুত লিংক</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-green-400 transition">
                                    হোম
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-green-400 transition">
                                    সব পণ্য
                                </Link>
                            </li>
                            <li>
                                <Link href="/up-price" className="hover:text-green-400 transition">
                                    দাম বেড়েছে
                                </Link>
                            </li>
                            <li>
                                <Link href="/down-price" className="hover:text-green-400 transition">
                                    দাম কমেছে
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ক্যাটাগরি */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">ক্যাটাগরি</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/category/chal" className="hover:text-green-400 transition">
                                    চাল
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/sobji" className="hover:text-green-400 transition">
                                    সবজি
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/mas" className="hover:text-green-400 transition">
                                    মাছ
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/mangsho" className="hover:text-green-400 transition">
                                    মাংস
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* যোগাযোগ */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">যোগাযোগ</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <span>📧</span>
                                <a href="mailto:info@bazardor.com" className="hover:text-green-400 transition">
                                    info@bazardor.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a href="tel:+8801700000000" className="hover:text-green-400 transition">
                                    +880 1700-000000
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📍</span>
                                <span>ঢাকা, বাংলাদেশ</span>
                            </li>
                        </ul>

                        {/* সোশ্যাল আইকন */}
                        <div className="flex items-center gap-3 mt-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition"
                                aria-label="Facebook"
                            >
                                📘
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition"
                                aria-label="YouTube"
                            >
                                ▶️
                            </a>
                            <a
                                href="https://wa.me/8801700000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition"
                                aria-label="WhatsApp"
                            >
                                💬
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* নিচের কপিরাইট বার */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
                    <p>© {currentYear} বাজার দর। সর্বস্বত্ব সংরক্ষিত।</p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-green-400 transition">
                            প্রাইভেসি পলিসি
                        </Link>
                        <Link href="/terms" className="hover:text-green-400 transition">
                            শর্তাবলী
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;