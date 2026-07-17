"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cloud, Star, History, HelpCircle, Zap, Users, Check, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function AiAutomationPage() {
  const [showEmail, setShowEmail] = useState(false);

  const servicesList = [
    {
      title: "Sales Order Creation",
      description: "Intelligently extract order details from emails, PDFs, and portals, validate against customer master, and post directly to SAP with real-time exception handling.",
      icon: Cloud,
    },
    {
      title: "Vendor Invoice Processing (MIRO / LIV)",
      description: "Automate 3-way match (PO, GRN, invoice), handle tax validations, duplicate checks, parked invoice approvals, and trigger workflows for blocked or exception cases.",
      icon: Star,
    },
    {
      title: "Purchase Requisition to Purchase Order (PR to PO)",
      description: "Auto-generate POs based on stock thresholds or planned orders, convert to PO after approvals, route through multi-level release strategies, all without manual touch.",
      icon: History,
    },
    {
      title: "Financial Postings & Reporting",
      description: "Automate journal entries (FB50, FB60), recurring entries, month-end close tasks, and extraction of trial balance or ageing reports for finance team review.",
      icon: HelpCircle,
    },
    {
      title: "Master Data Management",
      description: "Validate and update material master, customer/vendor records, plant data, and pricing conditions (MM01, XK01, VK11) using rule-based automation with full audit trails.",
      icon: Zap,
    },
    {
      title: "User Access Management (SAP GRC, SU01)",
      description: "Automate onboarding/offboarding, role-based provisioning, password resets, license-type checks, and segregation of duties (SoD) validations across SAP modules.",
      icon: Users,
    },
    {
      title: "Production & Inventory Transactions",
      description: "Handle goods movement (MB1C, MIGO), production order confirmations (CO11N), and inventory count adjustments with minimal manual intervention.",
      icon: Zap,
    },
    {
      title: "Compliance & Audit Readiness",
      description: "Log automation actions with digital signatures, maintain audit logs, and generate compliance documentation for processes handled by bots.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#2D2D2D]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 text-center max-w-4xl mx-auto">
          {/* Services Badge */}
          <span className="bg-[#6875f5] text-white px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider mb-6 inline-block">
            Services
          </span>

          {/* Main Colored Gradient Title */}
          <h1 className="text-[44px] sm:text-[54px] lg:text-[60px] font-extrabold tracking-tight mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent block sm:inline">
              AI & Intelligent Automation
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#111827] tracking-tight leading-tight max-w-2xl mx-auto mb-6">
            Smarter Operations with Digital Workers
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-3xl mx-auto font-normal px-2">
            TechSuite enables intelligent automation across key SAP business processes, helping you scale faster with fewer errors and greater compliance. Our automation solutions integrate seamlessly into your existing SAP S/4HANA, ECC, or cloud environments.
          </p>
        </section>

        {/* Core Offerings Section */}
        <section className="py-12 px-6 max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-12">
            What We Automate<br />with SAP + Blue Prism
          </h3>

          {/* 2-column Grid */}
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

        {/* Why Choose Section */}
        <motion.section 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="py-12 px-6 max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8">
            Why TechSuite for Automation?
          </h3>
          {/* Aligns perfectly with the left edge of the cards above */}
          <div className="w-full flex justify-start mb-20">
            <ul className="space-y-4 text-gray-500 text-[13px] sm:text-[14px] font-medium max-w-2xl">
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-slate-300 mt-[2px] shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                </div>
                <span className="mt-[1px]">Official partner of SS&C Blue Prism</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-slate-300 mt-[2px] shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                </div>
                <span className="mt-[1px]">Industry use cases deployed in Manufacturing, Real Estate, and Healthcare</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-slate-300 mt-[2px] shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                </div>
                <span className="mt-[1px]">Proven ability to integrate automation into SAP and other ERPs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-slate-300 mt-[2px] shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                </div>
                <span className="mt-[1px]">PoC-driven model to validate use cases before scaling</span>
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
              Begin Your Automation Journey
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-6 font-medium">
              Reduce manual effort, increase control, and transform how you work
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
