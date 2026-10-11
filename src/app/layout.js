
import { Noto_Serif_Bengali, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Nevlinks from "./component/Nevlinks";
import Marquee from "./component/Marquee";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "বাজার দর",
  description: "বাংলা ভাষায় তৈরি একটি ওয়েবসাইট",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoSerifBengali.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black font-bengali">
 <Navbar />

<Nevlinks />
<Marquee />


        <div className="flex-1 bg-[#f4f5f5]">{children}</div>
        
<Footer />

 <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
