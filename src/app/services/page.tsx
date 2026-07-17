"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
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

  const items = [
    {
      id: "erp",
      title: "ERP SOLUTION",
      tagline: "EMPOWERING YOUR BUSINESS WITH INTELLIGENT ERP ADOPTION.",
      desc: "At TechSuite, We Bring Deep Domain Knowledge And SAP Expertise To Help Organizations Streamline Operations, Reduce Manual Overhead, And Unlock Real-Time Insights Through ERP Modernization.",
      linkText: "Explore ERP Services",
      route: "/services/erp",
      side: "right",
      icon: <img src="/erp.png" alt="ERP Solutions" className="w-12 h-12 object-contain" />
    },
    {
      id: "cloud",
      title: "CLOUD SERVICES – IAAS",
      tagline: "SECURE, SCALABLE INFRASTRUCTURE THAT GROWS WITH YOUR NEEDS.",
      desc: "We Help Businesses Modernize Their IT Backbone By Enabling Secure, Cost-Effective, And Highly Available Cloud Hosting Environments For SAP And Enterprise Workloads.",
      linkText: "Explore Cloud Services",
      route: "/services/cloud-services",
      side: "left",
      icon: <img src="/cloud.png" alt="Cloud Services" className="w-12 h-12 object-contain" />
    },
    {
      id: "analytics",
      title: "PLANNING & ANALYTICS",
      tagline: "TURN INSIGHTS INTO IMPACT WITH REAL-TIME ANALYTICS AND PLANNING.",
      desc: "We Empower Organizations To Move From Spreadsheets To Insights By Delivering Data Visualization, Planning, And Forecasting Solutions Integrated With SAP And Microsoft Platforms.",
      linkText: "Explore Analytics",
      route: "/services/planning-analytics",
      side: "right",
      icon: <img src="/analytics.png" alt="Planning & Analytics" className="w-12 h-12 object-contain" />
    },
    {
      id: "automation",
      title: "AI & INTELLIGENT AUTOMATION",
      tagline: "AUTOMATE WITH CONFIDENCE USING AI-POWERED DIGITAL WORKERS.",
      desc: "We Implement Intelligent Automation That Frees Up Your Workforce, Enhances Accuracy, And Speeds Up Time-To-Value—Powered By SS&C Blue Prism.",
      linkText: "Explore Automation",
      route: "/services/ai-automation",
      side: "left",
      icon: <img src="/automation.png" alt="AI & Intelligent Automation" className="w-12 h-12 object-contain" />
    },
    {
      id: "cybersecurity",
      title: "CYBER SECURITY",
      tagline: "ENSURE DATA INTEGRITY WITH NEXT-GEN SECURITY MEASURES.",
      desc: "We Help Protect Your Data, Infrastructure, And User Access With Our Suite Of Cybersecurity Services Tailored For SAP, Enterprise IT, And Hybrid Cloud Environments.",
      linkText: "Explore Cybersecurity",
      route: "/services/cybersecurity",
      side: "right",
      icon: <img src="/security.png" alt="Cyber Security" className="w-12 h-12 object-contain" />
    },
    {
      id: "infrastructure",
      title: "SMART SPACES & IT INFRASTRUCTURE",
      tagline: "DESIGNING INTELLIGENT WORKSPACES AND RESILIENT IT ENVIRONMENTS.",
      desc: "We Design And Implement Robust, Scalable IT Infrastructure And Smart Workplace Environments—Laying the Foundation For Seamless Digital Operations.",
      linkText: "Explore Smart Infrastructure",
      route: "/services/smart-spaces",
      side: "left",
      icon: <img src="/infrastructure.png" alt="Smart Spaces & IT Infrastructure" className="w-12 h-12 object-contain" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* Services Badge */}
          <div className="mb-6">
            <span className="bg-[#6875f5] text-white px-4 py-1.5 rounded-md text-xs font-semibold">
              Services
            </span>
          </div>

          {/* Heading */}
          <h1 
            className="flex flex-col text-center text-[55px] sm:text-[51px] lg:text-[51px] font-bold tracking-tight text-[#2d2d2d] leading-[1.1] md:leading-[1.05] transition-opacity duration-1000"
            style={{ opacity: isHeaderVisible ? 1 : 0 }}
          >
            <span>Innovative Reliable</span>
            <span className="bg-linear-to-r from-orange-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent pb-2 text-[65px] sm:text-[90px] lg:text-[80px]">
              Client-Centric
            </span>
          </h1>

          {/* Subtext */}
          <p 
            className="mt-8 max-w-3xl text-center text-[15px] sm:text-[16px] text-slate-500 font-normal leading-relaxed transition-opacity duration-1000"
            style={{ opacity: isSubtextVisible ? 1 : 0 }}
          >
            At TechSuite, our vision is to empower businesses with transformative technology that drives efficiency, agility, and innovation. We are committed to delivering trust, excellence, and customer success through cutting-edge solutions in ERP, Analytics, AI, and Cloud Services.
          </p>

          {/* Timeline Section */}
          <div className="relative mt-24 w-full max-w-5xl">

            {/* Center Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#6875f5] via-pink-400 to-indigo-500 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24 relative">
              {items.map((item) => {
                const isRight = item.side === "right";
                return (
                  <div key={item.id} className="relative flex flex-col md:flex-row items-stretch w-full">

                    {/* Timeline Node Point (Hidden on mobile) */}
                    <div className="absolute left-1/2 top-[52px] w-3.5 h-3.5 rounded-full bg-[#6875f5] border-2 border-white transform -translate-x-1/2 z-10 hidden md:block shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>

                    {/* Left Column */}
                    <div className={`w-full md:w-1/2 flex-col items-start md:items-end text-left md:text-right md:pr-16 group ${isRight ? "hidden md:flex" : "flex"}`}>
                      {!isRight && (
                        <>
                          {/* Icon Container with Wings */}
                          <div className="relative mb-6">
                            {/* Left Wing */}
                            <div className="absolute inset-0 bg-[#6875f5]/70 rounded-2xl transition-all duration-500 ease-out transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-5 group-hover:-rotate-12 z-0"></div>
                            {/* Right Wing */}
                            <div className="absolute inset-0 bg-[#6875f5]/70 rounded-2xl transition-all duration-500 ease-out transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-5 group-hover:rotate-12 z-0"></div>
                            
                            {/* Main Card */}
                            <div className="relative z-10 flex items-center justify-center w-28 h-28 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(104,117,245,0.12)] group-hover:border-[#6875f5]/30">
                              <div className="transition-transform duration-500 group-hover:scale-110">
                                {item.icon}
                              </div>
                            </div>
                          </div>
                          
                          <h2 className="text-[#6875f5] text-[28px] sm:text-[32px] font-bold tracking-tight mb-2 uppercase transition-colors duration-300 group-hover:text-indigo-600">
                            {item.title}
                          </h2>
                          <p className="text-slate-800 text-[13px] sm:text-[14px] font-bold tracking-wider mb-4 uppercase">
                            {item.tagline}
                          </p>
                          <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-md">
                            {item.desc}
                          </p>
                          <Link
                            href={item.route}
                            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#6875f5] font-semibold text-[14px] transition-colors group/link"
                          >
                            <span>{item.linkText}</span>
                            <span className="text-[16px] transform transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                          </Link>
                        </>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className={`w-full md:w-1/2 flex-col items-start text-left md:pl-16 group ${!isRight ? "hidden md:flex" : "flex"}`}>
                      {isRight && (
                        <>
                          {/* Icon Container with Wings */}
                          <div className="relative mb-6">
                            {/* Left Wing */}
                            <div className="absolute inset-0 bg-[#6875f5]/70 rounded-2xl transition-all duration-500 ease-out transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-5 group-hover:-rotate-12 z-0"></div>
                            {/* Right Wing */}
                            <div className="absolute inset-0 bg-[#6875f5]/70 rounded-2xl transition-all duration-500 ease-out transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-5 group-hover:rotate-12 z-0"></div>
                            
                            {/* Main Card */}
                            <div className="relative z-10 flex items-center justify-center w-28 h-28 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(104,117,245,0.12)] group-hover:border-[#6875f5]/30">
                              <div className="transition-transform duration-500 group-hover:scale-110">
                                {item.icon}
                              </div>
                            </div>
                          </div>
                          
                          <h2 className="text-[#6875f5] text-[28px] sm:text-[32px] font-bold tracking-tight mb-2 uppercase transition-colors duration-300 group-hover:text-indigo-600">
                            {item.title}
                          </h2>
                          <p className="text-slate-800 text-[13px] sm:text-[14px] font-bold tracking-wider mb-4 uppercase">
                            {item.tagline}
                          </p>
                          <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-md">
                            {item.desc}
                          </p>
                          <Link
                            href={item.route}
                            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#6875f5] font-semibold text-[14px] transition-colors group/link"
                          >
                            <span>{item.linkText}</span>
                            <span className="text-[16px] transform transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                          </Link>
                        </>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
