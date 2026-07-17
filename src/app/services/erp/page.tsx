"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cloud, HelpCircle, History, Zap, Clock, Headphones, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ErpPage() {
  const [showEmail, setShowEmail] = useState(false);

  const servicesList = [
    {
      title: "SAP S/4HANA Implementations",
      description: "Accelerate time-to-value with industry aligned SAP deployments: greenfield or brownfield.",
      icon: Cloud,
    },
    {
      title: "SAP Consulting & Integration",
      description: "Expert guidance across functional and technical domains including Finance, MM, SD, PP, and more.",
      icon: HelpCircle,
    },
    {
      title: "SAP S/4HANA Migrations",
      description: "Move from ECC to S/4HANA securely with minimal disruption and clear timelines.",
      icon: History,
    },
    {
      title: "RISE with SAP & GROW with SAP",
      description: "Cloud-first transformation models tailored for both large enterprises and mid-market players.",
      icon: Zap,
    },
    {
      title: "SAP Support & AMS",
      description: "Reliable, SLA-driven support to ensure system stability and enhanced user experience.",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#2D2D2D]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 text-center max-w-4xl mx-auto">
          {/* Main Colored Gradient Title */}
          <h1 className="text-[48px] sm:text-[58px] lg:text-[66px] font-extrabold tracking-tight mb-8 leading-none">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent">
              ERP Solutions
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#111827] tracking-tight leading-tight max-w-2xl mx-auto mb-6">
            Scalable Cloud Infrastructure. Seamless Business Continuity.
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto font-normal px-2">
            At TechSuite, we bring deep domain knowledge and SAP expertise to help organizations streamline operations, reduce manual overhead, and unlock real-time insights through ERP modernization.
          </p>
        </section>

        {/* Core Offerings Section */}
        <section className="py-12 px-6 max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-12">
            Our ERP Services Include
          </h3>

          {/* 2-column Grid with wrapping - max-w-4xl guarantees alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.9, delay: (index % 2) * 0.2 }}
                  className="border border-[#e5e7eb] rounded-[12px] p-8 bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between min-h-[160px]"
                >
                  <div>
                    <div className="text-[#5D5CFF] mb-3">
                      <IconComponent className="w-[18px] h-[18px] stroke-[2.2]" />
                    </div>
                    <h4 className="text-[#4F46E5] text-[15px] sm:text-[16px] font-bold mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Why TechSuite Section */}
        <motion.section 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="py-12 px-6 max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8">
            Why TechSuite for ERP?
          </h3>
          {/* Aligns perfectly with the left edge of the cards above */}
          <div className="w-full flex justify-start mb-20">
            <ul className="space-y-4 text-gray-500 text-[13px] sm:text-[14px] font-medium max-w-2xl">
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-slate-300 mt-[2px] shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                </div>
                <span className="mt-[1px]">Strong mid-market focus with tailored, industry-specific blueprints</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-slate-300 mt-[2px] shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                </div>
                <span className="mt-[1px]">Outcome-driven approach, aligned with business goals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-slate-300 mt-[2px] shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                </div>
                <span className="mt-[1px]">Trusted by brands like Trivitron, Aachi, and Transworld Breweries</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-slate-300 mt-[2px] shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                </div>
                <span className="mt-[1px]">Proven delivery track record with certified consultants</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Bottom CTA Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0 }}
          className="pb-24 px-6 max-w-4xl mx-auto"
        >
          {/* Gradient matches the exact peach-pink-lavender smooth transition */}
          <div className="relative overflow-visible rounded-[14px] bg-gradient-to-r from-[#FFE7D9] via-[#FFF1F3] to-[#E9EAFF] p-10 sm:p-12 text-center shadow-sm border border-white/50">
            <h3 className="text-[26px] sm:text-[30px] font-extrabold text-[#111827] mb-2 tracking-tight">
              Ready to Upgrade Your ERP?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-6 font-medium">
              Let's define the right roadmap for your digital core.
            </p>
            <div className="flex flex-col items-center gap-4 relative">
              <button
                onClick={() => setShowEmail(!showEmail)}
                onMouseEnter={() => setShowEmail(true)}
                onMouseLeave={() => setShowEmail(false)}
                className="inline-flex items-center justify-center bg-[#111827] hover:bg-black text-white w-10 h-10 rounded-[8px] transition-all hover:scale-105 cursor-pointer"
                aria-label="Contact Us"
              >
                <Headphones className="w-[18px] h-[18px]" />
              </button>

              {/* Tooltip containing support email address */}
              {showEmail && (
                <div className="absolute top-12 bg-white border border-[#e5e7eb] px-5 py-3 rounded-[10px] shadow-lg animate-fade-in z-10">
                  <span className="text-[#4F46E5] text-[13px] sm:text-[14px] font-bold">
                    support@techsuite.com
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
