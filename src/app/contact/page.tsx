import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reg from "@/components/Reg";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Navbar />


      <section className="px-6 md:px-16 py-20 text-center">
        <div className="mb-6">
            <span className="bg-[#6875f5] text-white px-4 py-1.5 rounded-md text-xs font-semibold">
              Contact us
            </span>
          </div>
<h1 className=" font-bold tracking-tight text-[#2d2d2d] leading-[1.1] md:leading-[1.05] ">
        <span className="bg-linear-to-r from-orange-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent pb-2 text-[65px] sm:text-[90px] lg:text-[75px]">
             Get In Touch With Us
            </span></h1>

        <p className="mt-4 sm:mt-5 lg:mt-6
             w-full
             max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl 
             mx-auto
             px-4 sm:px-0
             text-[18px] 
             text-slate-500
             font-normal
             leading-7 sm:leading-7
             transition-opacity duration-1000">
          Have questions? Let us know by filling out the form, and we will be in touch!
        </p>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">


          <Reg />

        </div>
      </section>

      <Footer />
    </div>
  );
}