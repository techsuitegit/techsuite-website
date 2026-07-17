"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, Handshake, Rocket, Users } from "lucide-react";

export default function AboutPage() {
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
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Navbar />

      <main className="flex-1 pt-22 md:pt-30 lg:pt-30">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          <div className="mb-8">
            <span className="bg-[#6875f5] text-white px-4 py-2.5 rounded-md text-xs font-semibold">
              About Us
            </span>
          </div>

          <h1 
            className="flex flex-col text-center text-[55px] sm:text-[51px] lg:text-[51px] font-bold tracking-tight text-[#2d2d2d] leading-[1.1] md:leading-[1.05] transition-opacity duration-1000"
            style={{ opacity: isHeaderVisible ? 1 : 0 }}
          >
            <span >Innovative Reliable</span>
            <span className="bg-linear-to-r from-orange-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent pb-2 text-[65px] sm:text-[90px] lg:text-[80px]">
              Client-Centric
            </span>
          </h1>

          <p 
            className="mt-4 sm:mt-5 lg:mt-6
             w-full
             max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-2xl 
             mx-auto
             px-4 sm:px-0
             text-[18px] 
             text-slate-500
             font-normal
             leading-7 sm:leading-7
             transition-opacity duration-1000 text-center"
            style={{ opacity: isSubtextVisible ? 1 : 0 }}
          >
            At TechSuite, our vision is to empower businesses with transformative technology that drives efficiency, agility, and innovation. We are committed to delivering trust, excellence, and customer success through cutting-edge solutions in ERP, Analytics, AI, and Cloud Services.
          </p>
      </div>

    <div className="max-w-7xl mx-auto flex flex-col items-center pt-32 md:pt-66 lg:pt-45">

          <div className="mb-6">
            <span className="bg-[#6875f5] text-white px-4 py-1.5 rounded-md text-xs font-semibold">
              Our Values 
              </span>
          </div>

          <h1 
            className="flex flex-col text-center text-[55px] sm:text-[51px] lg:text-[51px] font-bold tracking-tight text-[#2d2d2d] leading-[1.1] md:leading-[1.05] transition-opacity duration-500"
            style={{ opacity: isHeaderVisible ? 1 : 0 }}
          >
            <span>The Values Behind Techsuite</span>
            
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
             transition-opacity duration-500 text-center"
            style={{ opacity: isSubtextVisible ? 1 : 0 }}
          >           Our values shape everything we do at techsuite. From innovation to integrity, we’re committed to building solutions that empower businesses and drive real impact.
          </p>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-[#5c68e2]" />
              <h3 className="text-2xl font-bold text-[#5c68e2]">
                Innovative
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To boost business growth,  we prioritize innovation and  the exploration  of new ideas and principles.
            </p>
          </div>

          
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="w-6 h-6 text-[#5c68e2]" />
              <h3 className="text-2xl font-bold text-[#5c68e2]">
                Human-focused
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We prioritize human emotions and  work values,  essential aspects of any organization.  
            </p>
          </div>

          
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-[#5c68e2]" />
              <h3 className="text-2xl font-bold text-[#5c68e2]">
                Experts
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Our expert consultants  are ready to guide your  business expansion.
            </p>
          </div>

          
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#5c68e2]" />
              <h3 className="text-2xl font-bold text-[#5c68e2]">
                Customer First
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">We're here round the clock  to help with your customer needs  and requests
            </p>
          </div>

        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
