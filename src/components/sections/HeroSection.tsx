"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const roles = [
  "Full Stack Developer",
  "QA Engineer",
  "Data Analyst",
  "Backend Developer",
];

const testimonials = [
  {
    quote: "Mock interviews by the placement team helped me improve.",
    name: "Bhargavi",
    background: "CSE, JNTU",
    company: "SYSTECH",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sysco_logo.svg/1200px-Sysco_logo.svg.png", // Using a placeholder that looks similar or text
    avatar: "https://i.ibb.co/vzY3qC1/bhargavi.png" // Placeholder URL for Bhargavi
  },
  {
    quote: "NxtWave helped me to transition from Civil to IT in 6 months.",
    name: "Surya Vamsi",
    background: "Mechanical Engineering",
    company: "Ascend Academy",
    logo: "",
    avatar: ""
  },
];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <section className="bg-white py-12 md:pt-20 md:pb-40 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* NEW Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-white shadow-[0_2px_10px_-4px_rgba(59,130,246,0.1)]">
              <span className="bg-[#f97316] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                NEW
              </span>
              <span className="text-[#334155] text-sm font-semibold pr-2">
                Intensive 3.0 to 3x your placement chances
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-4xl lg:text-[48px] font-bold text-[#1e293b] leading-tight">
                A Proven Program
                <br />
                To Make You a
              </h1>
              <div className="relative h-14">
                <span
                  className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#f97316] animate-fade-in relative transition-all"
                  key={currentRoleIndex}
                >
                  {roles[currentRoleIndex]}
                  <svg 
                    className="absolute -bottom-1.5 left-0 w-full h-3 overflow-visible pointer-events-none" 
                    viewBox="0 0 100 12" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M2,10 Q50,2 98,5" 
                      stroke="#a855f7" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Testimonial Card (High-Fidelity) */}
            <div className="pt-4 flex flex-col items-center">
              <div className="w-full max-w-lg">
                <div className="relative">
                  <span className="absolute -top-10 -left-4 text-7xl font-serif text-[#e2e8f0]">“</span>
                  <div
                    className="transition-all duration-500 text-center"
                    key={currentTestimonialIndex}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-[#334155] leading-snug mb-8">
                      {testimonials[currentTestimonialIndex]?.quote || "Loading testimonial..."}
                    </p>

                    <div className="flex items-center justify-center gap-8">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-slate-400 font-bold">
                           {testimonials[currentTestimonialIndex].avatar ? (
                             <img src={testimonials[currentTestimonialIndex].avatar} alt={testimonials[currentTestimonialIndex].name} className="w-full h-full object-cover" />
                           ) : (
                             testimonials[currentTestimonialIndex].name.charAt(0)
                           )}
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-[#334155] text-lg leading-none mb-1">
                            {testimonials[currentTestimonialIndex].name}
                          </p>
                          <p className="text-slate-500 text-sm font-medium">
                            {testimonials[currentTestimonialIndex].background}
                          </p>
                        </div>
                      </div>

                      <div className="h-10 w-px bg-slate-200" />

                      <div className="flex items-center">
                        {testimonials[currentTestimonialIndex].company === "SYSTECH" ? (
                           <div className="flex flex-col items-start">
                             <span className="text-[#0ea5e9] italic font-black text-xl italic tracking-tighter">SYSTECH</span>
                             <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent mt-[-4px]" />
                           </div>
                        ) : (
                          <span className="text-slate-400 font-black italic text-xl uppercase tracking-tighter">
                            {testimonials[currentTestimonialIndex].company}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-12">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonialIndex(index)}
                        className={`transition-all duration-300 ${
                          index === currentTestimonialIndex
                            ? "w-8 h-2.5 bg-[#576d8a] rounded-full"
                            : "w-2.5 h-2.5 bg-slate-200 rounded-full"
                        }`}
                        aria-label={`Show testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="relative mt-12 lg:mt-0 z-0">
            {/* Decorative Background Elements */}
            <div className="absolute top-[40%] left-[-24%] w-[130%] h-[120%] z-0 pointer-events-none">
              {/* Massive Teal Circle */}
              <div className="absolute top-0 left-0 w-[900px] h-[800px] bg-[#01c2a0] rounded-full" />
              
              {/* Wavy Pattern (Left side) */}
              <div className="absolute top-[20%] left-[5%] opacity-40">
                <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {[0, 15, 30, 45, 60, 75, 90, 105].map((y) => (
                    <path
                      key={y}
                      d={`M0 ${y} Q5 ${y+8} 10 ${y} Q15 ${y-8} 20 ${y} Q25 ${y+8} 30 ${y} Q35 ${y-8} 40 ${y} Q45 ${y+8} 50 ${y}`}
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  ))}
                </svg>
              </div>

              {/* Stripe Pattern (Bottom Right) */}
              <div className="absolute bottom-[15%] right-[25%] opacity-30">
                <div className="flex flex-col gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-16 h-2 bg-white/40 rounded-full -rotate-45" style={{ marginLeft: `${i * 12}px` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div
              id="demo-form"
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 relative z-10 max-h-[600px] overflow-y-auto custom-scrollbar"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#94a3b8 #f1f5f9'
              }}
            >
              <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: #f1f5f9;
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #94a3b8;
                  border-radius: 10px;
                }
              `}</style>

              <div className="p-6 md:p-8">
                {/* Form Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="relative">
                    <h2 className="text-[28px] font-bold text-[#1e293b] leading-tight mb-1">
                      Book a Live Demo
                    </h2>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[28px] font-bold text-[#1e293b]">For</span>
                      <div className="relative inline-block">
                        <span className="text-[28px] font-bold text-[#1e293b]">Free !</span>
                        <svg 
                          className="absolute -bottom-1 left-0 w-full h-2 overflow-visible pointer-events-none" 
                          viewBox="0 0 100 10" 
                          preserveAspectRatio="none"
                        >
                          <path 
                            d="M2,8 Q50,2 98,5" 
                            stroke="#a855f7" 
                            strokeWidth="3" 
                            fill="none" 
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Illustration */}
                  <div className="w-28 h-28 relative -mt-8 mr-[-15px] rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img 
                      src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/demo-embed-form-person-image.png" 
                      alt="Demo Illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Form */}
                <form className="space-y-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[15px] font-semibold text-[#334155]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="block text-[15px] font-semibold text-[#334155]">
                      Mobile Number (WhatsApp Number)
                    </label>
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                      <div className="flex items-center gap-2 px-3 py-3.5 bg-white border-r border-gray-100">
                        <span className="text-gray-600 text-[15px] font-medium">IN</span>
                        <span className="text-gray-400 text-[10px]">▼</span>
                        <span className="text-gray-600 text-[15px] font-medium">+91</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter Mobile Number"
                        className="flex-1 px-4 py-3.5 text-base border-none focus:ring-0 placeholder:text-gray-400"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1">
                      We assure you that we practice a strict &apos;NO-SPAM&apos; policy
                    </p>
                  </div>

                  {/* Highest Qualification */}
                  <div className="space-y-1.5">
                    <label className="block text-[15px] font-semibold text-[#334155]">
                      Highest Qualification
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-[15px] text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all appearance-none bg-white">
                        <option>Select Highest Qualification</option>
                        <option>B.Tech / B.E.</option>
                        <option>BCA / MCA</option>
                        <option>BSc / MSc</option>
                        <option>B.Com / M.Com</option>
                        <option>MBA</option>
                        <option>Other</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                    </div>
                  </div>

                  {/* Native State */}
                  <div className="space-y-1.5">
                    <label className="block text-[15px] font-semibold text-[#334155]">
                      Native State
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-[15px] text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all appearance-none bg-white">
                        <option>Enter your State</option>
                        <option>Andhra Pradesh</option>
                        <option>Telangana</option>
                        <option>Karnataka</option>
                        <option>Tamil Nadu</option>
                        <option>Maharashtra</option>
                        <option>Delhi</option>
                        <option>Other</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="pt-2">
                    <p className="text-[13px] text-[#334155] leading-relaxed">
                      By proceeding further, I agree to the{" "}
                      <Link href="#" className="text-blue-600 font-bold hover:underline">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-blue-600 font-bold hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      of NxtWave
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-200 mt-4 text-[17px]"
                  >
                    Book My Demo
                  </button>
                </form>
              </div>
            </div>

            {/* Product of NxtWave - Positioned on the teal background */}
            <div className="flex items-center justify-center gap-2 mt-6 text-white relative z-10 font-medium">
              <span>Product of</span>
              <div className="flex items-center scale-110">
                <span className="font-black tracking-tighter">NXT</span>
                <span className="font-black tracking-tighter ml-0.5">WAVE</span>
                <span className="text-[8px] self-start mt-1 ml-0.5">TM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
