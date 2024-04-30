import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";
import Carousel from "./carousel";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-black ">
          <Carousel />
        </div>
        <Footer />
      </div>
    </>
  );
}
