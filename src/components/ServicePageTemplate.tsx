"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

interface SubService {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  tagline: string;
  description: string;
  ctaTitle?: string;
  subServices: SubService[];
}

export default function ServicePageTemplate({
  title,
  tagline,
  description,
  ctaTitle = "Ready to partner with us?",
  subServices,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Navbar />

      <main className="flex-1">
        
        {/* Header Hero Section */}
        <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            
            {/* Tagline */}
            <span className="bg-[#6875f5] text-white px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider mb-6">
              Services
            </span>

            {/* Title */}
            <h1 className="text-[36px] sm:text-[50px] lg:text-[60px] font-bold tracking-tight text-[#2d2d2d] leading-tight mb-4">
              {title}
            </h1>

            {/* Tagline text */}
            <p className="text-[#6875f5] text-[14px] sm:text-[16px] font-bold tracking-wider mb-6 uppercase max-w-2xl">
              {tagline}
            </p>

            {/* Description */}
            <p className="text-slate-500 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl">
              {description}
            </p>

          </motion.div>
        </section>

        {/* Sub Services Detail Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[28px] sm:text-[36px] font-bold text-slate-900">
              Our Core Offerings
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Discover the customized solution pathways we offer to accelerate value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.0, delay: (idx % 2) * 0.25 }}
                className="bg-white border border-slate-200/80 rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#6875f5]">
                    <span className="text-lg font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900">
                    {sub.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed">
                  {sub.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA section matching the screenshot */}
        <section className="bg-slate-50 border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              {ctaTitle}
            </h2>
            
            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed">
              Let's define the right roadmap for your digital core.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 rounded-xl bg-slate-900 text-white px-7 py-3 text-sm sm:text-base font-medium hover:bg-slate-800 transition-all duration-300"
            >
              Get Started
            </Link>

          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
