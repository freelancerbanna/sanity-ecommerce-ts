import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="px-10 py-[100px] bg-[#dcdcdc] relative rounded-[15px] w-full he-[100px] leading-[0.9]">
      <div>
        <p className="text-xl">SMALL TEXT</p>
        <h3 className="mt-[4px] text-[4rem]">Heading Text</h3>
        {/* <h1 className="text-white text-[10em] -ml-5 uppercase"></h1> */}
        <img src="" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href="/">
            <button
              type="button"
              className="rounded-[15px] px-4 py-[10px] bg-[#f02d34] text-white border-0 mt-10 text-lg cursor-pointer font-medium !z-[1000]"
            >
              BUTTON TEXT
            </button>
          </Link>
          <div className="absolute right-[10%] bottom-[5%] w-[300px] flex flex-col leading-[1.3] text-[#324d67]">
            <h5 className="mb-3 font-bold self-end">Description</h5>
            <p className="text-[#5f5f5f] text-end font-thin">Paragraph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
