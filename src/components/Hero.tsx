"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(false);
  const [isSubtextVisible, setIsSubtextVisible] = React.useState(false);

  React.useEffect(() => {
    const headerTimer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 500);

    const subtextTimer = setTimeout(() => {
      setIsSubtextVisible(true);
    }, 1500);

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(subtextTimer);
    };
  }, []);

  return (
    <section className="relative w-full bg-white pt-10  px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Headings */}
        <h1 
          className="flex flex-col text-[50px] sm:text-[50px] lg:text-[70px] font-bold tracking-tight text-[#2d2d2d] leading-[1.1] md:leading-[1.05] transition-opacity duration-1000"
          style={{ opacity: isHeaderVisible ? 1 : 0 }}
        >
          <span >Innovative</span>
          <span className="mt-2 pb-2 pt-1">Reliable</span>
          <span className="bg-linear-to-r from-orange-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent pb-2 text-[65px] sm:text-[90px] lg:text-[75px]">
              Client-Centric
          </span>
        </h1>

       <p
  className="mt-4 sm:mt-5 lg:mt-6
             w-full
             max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl 
             mx-auto
             px-4 sm:px-0
             text-[18px] 
             text-slate-500
             font-normal
             leading-7 sm:leading-7
             transition-opacity duration-1000"
  style={{ opacity: isSubtextVisible ? 1 : 0 }}
>
  We specialise in SAP Functional and Technical Consulting - from
  Implementations and Integrations to AI, Automation, and Data Intelligence helping clients streamline operations, boost decision-making, and drive
  measurable business results.
</p>

        <div className="mt-2">
  <Link
    href="#services"
    className="inline-flex items-center justify-center
               rounded-full
               bg-[#292929] hover:bg-black
               px-12
               py-2
               text-xl sm:text-xl md:text-xl
               font-semibold
               text-white
               shadow-sm
               transition-all duration-200"
  >
    Explore Now
  </Link>
</div>

       <div className="mt-10 sm:mt-18 lg:mt-10 text-center">
  <h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] 
               font-bold tracking-tight text-slate-900 leading-tight"
  >
    Trusted by leading enterprises across
  </h2>

  <h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] 
               font-bold tracking-tight text-slate-900 leading-tight"
  >
    industries worldwide.
  </h2>
</div>

      </div>
    </section>
  );
}
