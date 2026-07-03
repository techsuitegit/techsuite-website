"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="mb-16">
          <Image
  src="/Logo (1).png"
  alt="Techsuite"
  width={190}
  height={48}
  className="h-12 w-auto object-contain"
/>

          
        </div>

        <div className="grid gap-17 lg:grid-cols-4 md:grid-cols-2">

          <div>
            <h4 className="text-xl font-medium mb-2">
              Company
            </h4>

            <div className="flex flex-col gap-2">

              <Link href="/" className="hover:text-indigo-600 transition">
                Home
              </Link>

              <Link href="/services" className="hover:text-indigo-600 transition">
                Services
              </Link>

              <Link href="/about" className="hover:text-indigo-600 transition">
                About Us
              </Link>

              <Link href="/contact" className="hover:text-indigo-600 transition">
                Contact Us
              </Link>

            </div>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">
              Services
            </h4>

            <div className="flex flex-col gap-2">

              <Link href="/services/erp" className="hover:text-indigo-600 transition">
                ERP Solutions
              </Link>

              <Link href="/services/cloud-services" className="hover:text-indigo-600 transition">
                Cloud Services - IaaS
              </Link>

              <Link href="/services/planning-analytics" className="hover:text-indigo-600 transition">
                Planning & Analytics
              </Link>

              <Link href="/services/ai-automation" className="hover:text-indigo-600 transition">
                AI & Intelligent Automation
              </Link>

              <Link href="/services/cybersecurity" className="hover:text-indigo-600 transition">
                Cybersecurity
              </Link>

              <Link href="/services/smart-spaces" className="hover:text-indigo-600 transition">
                Smart Spaces & IT Infrastructure
              </Link>

            </div>
          </div>

          <div className="lg:col-span-2">

            <h4 className="text-2xl font-medium mb-2">
              Stay up to date
            </h4>

            <p className="text-slate-600 text-sm mb-4">
              Get the latest updates and exclusive tips to boost your sales
            </p>

            <form className="flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1
                  rounded-xl
                  bg-indigo-100
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                "
              />

              <button
                className="
                  rounded-xl
                  bg-indigo-500
                  hover:bg-indigo-600
                  text-white
                  px-10
                  py-4
                  font-semibold
                  transition
                "
              >
                Submit
              </button>

            </form>

          </div>

        </div>

        <div className="mt-1  pt-8">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-9">

            <p className="text-slate-700 text-center lg:text-left">
              © {new Date().getFullYear()} All rights reserved. Techsuite Systems
              Private Limited.
            </p>

            <div className="flex flex-col items-center lg:items-end gap-5 mt-5">

              <a
                href="mailto:contact@techsuitesystems.com"
                className="font-semibold hover:text-indigo-600 transition"
              >
                contact@techsuitesystems.com
                
              </a>

              

                

              </div>

            </div>

          </div>

        </div>

      
    </footer>
  );
}