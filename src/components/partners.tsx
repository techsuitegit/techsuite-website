"use client";

import Image from "next/image";
import Link from "next/link";

const logos = [
  "/partners/ssc.webp",
  "/partners/ibm.webp",
  "/partners/sap.webp",
  "/partners/aws-partner.webp",
  "/partners/sap.webp",
];

export default function Partners() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">


        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Partners
          </h2>

          <h4 className="mt-4 text-xl font-semibold text-slate-900 leading-tight">
            Strategic Alliances, Shared Success.
          </h4>

          <p className="mt-2 text-slate-700 text-medium leading-6 max-w-3xl">
            At TechSuite, we collaborate with global technology leaders to
            deliver innovative, scalable and outcome-driven solutions.
            Our partnerships with top-tier platforms strengthen our ability
            to help businesses accelerate digital transformation.
          </p>

          <Link
  href="/contact"
  className="inline-block mt-6 rounded-md bg-slate-900 text-white px-5 py-2 hover:bg-slate-700 transition"
>
  Get Started
</Link>
        </div>


        <div className="flex justify-center lg:justify-center">

          <div className="relative w-65 h-80 overflow-hidden">

            <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-white via-white/90 to-transparent z-20" />

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white via-white/90 to-transparent z-20" />

            <div className="animate-scroll flex flex-col gap-2">

              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center py-2"
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={290}
                    height={140}
                    className="w-auto h-auto object-contain"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}