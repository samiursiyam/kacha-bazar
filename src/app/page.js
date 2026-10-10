import Image from "next/image";
import Navbar from "./component/Navbar";
import Nevlinks from "./component/Nevlinks";
import Marquee from "./component/Marquee";
import Header from "./component/Header";
import Upprice from "./component/Upprice";
import Downprice from "./component/Downprice";
import ProductCard from "./component/ProductCard";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
    
<Header />
<Upprice />
<Downprice />
<ProductCard />


    </div>
  );
}
