"use client";

import React from "react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  desc: string;
  linkText: string;
  route: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: Service[] = [
    {
      id: "erp",
      title: "ERP Solutions",
      desc: "Seamlessly implement and optimize SAP ERP systems for scalable business operations.",
      linkText: "Explore ERP Services",
      route: "/services/erp",
      icon: <img src="/erp.png" alt="ERP Solutions" className="w-10 h-10 object-contain" />
    },
    {
      id: "cloud",
      title: "Cloud Services",
      desc: "Secure, scalable, and cost-effective infrastructure for your digital workloads.",
      linkText: "Explore Cloud Services",
      route: "/services/cloud-services",
      icon: <img src="/cloud.png" alt="Cloud Services" className="w-10 h-10 object-contain" />
    },
    {
      id: "analytics",
      title: "Planning & Analytics",
      desc: "Turn real-time SAP data into powerful insights with actionable dashboards.",
      linkText: "Explore Analytics",
      route: "/services/planning-analytics",
      icon: <img src="/analytics.png" alt="Planning & Analytics" className="w-10 h-10 object-contain" />
    },
    {
      id: "automation",
      title: "AI & Intelligent Automation",
      desc: "Streamline operations using AI-driven digital workers and intelligent workflows.",
      linkText: "Explore Automation",
      route: "/services/ai-automation",
      icon: <img src="/automation.png" alt="AI & Intelligent Automation" className="w-10 h-10 object-contain" />
    },
    {
      id: "cybersecurity",
      title: "Cyber Security",
      desc: "End-to-end protection across SAP, cloud, and IT environments.",
      linkText: "Explore Cybersecurity",
      route: "/services/cybersecurity",
      icon: <img src="/security.png" alt="Cyber Security" className="w-10 h-10 object-contain" />
    },
    {
      id: "infrastructure",
      title: "Smart Spaces & IT Infrastructure",
      desc: "Integrated infrastructure and IoT solutions to power smart enterprise environments.",
      linkText: "Explore Smart Infrastructure",
      route: "/services/smart-spaces",
      icon: <img src="/infrastructure.png" alt="Smart Spaces & IT Infrastructure" className="w-10 h-10 object-contain" />
    }
  ];

  return (
    <section id="services" className="relative w-full py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center w-full mb-20 relative flex justify-center">
          <img 
            src="/services-header.png" 
            alt="Services - What We Do?" 
            className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* 3x2 Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-white border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:border-indigo-100 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Icon Container with Symmetrical Wings */}
              <div className="relative mb-6">
                {/* Left Wing */}
                <div className="absolute inset-y-0.5 left-0 w-full bg-[#5c68e2] rounded-[16px] transition-all duration-500 ease-out transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-3 group-hover:-rotate-12 z-0"></div>
                {/* Right Wing */}
                <div className="absolute inset-y-0.5 right-0 w-full bg-[#5c68e2] rounded-[16px] transition-all duration-500 ease-out transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-3 group-hover:rotate-12 z-0"></div>
                
                {/* Icon box container (Main Card) */}
                <div className="relative z-10 w-16 h-16 rounded-[18px] bg-white border border-slate-100 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_12px_24px_rgba(79,70,229,0.15)] group-hover:border-indigo-200">
                  <div className="transition-transform duration-500 group-hover:scale-105">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#4f46e5] group-hover:text-indigo-600 transition-colors mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] sm:text-[14px] text-slate-500 font-normal leading-relaxed mb-6 flex-1 max-w-xs">
                {service.desc}
              </p>

              {/* Route Link */}
              <Link
                href={service.route}
                className="text-[13px] font-bold text-slate-800 hover:text-[#4f46e5] inline-flex items-center gap-1.5 transition-colors group/link cursor-pointer"
              >
                <span>{service.linkText}</span>
                <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
