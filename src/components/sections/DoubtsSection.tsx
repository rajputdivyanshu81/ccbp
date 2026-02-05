"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DoubtsSection() {
  return (
    <>
      {/* Doubts Support Section - Light with Sunburst Background */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-4">
          {/* Left accent line - Blue vertical bar */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-24 w-1 bg-[#2563eb] rounded-full hidden lg:block" />

            <div className="lg:pl-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-2 leading-tight">
                  Get Your{" "}
                  <span className="relative inline-block">
                    Doubts Clarified
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 overflow-visible pointer-events-none"
                      viewBox="0 0 100 12"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,10 Q50,2 98,5"
                        stroke="#7c3aed"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-6 leading-tight">
                  Faster than in Offline Classes
                </h2>
                <p className="text-lg md:text-xl text-gray-500 w-full whitespace-normal md:whitespace-nowrap">
                  Our highly motivated team of experts are ready to help you with
                  your doubts from{" "}
                  <span className="font-bold text-[#1e293b]">9AM - 9PM Everyday</span>
                </p>
              </motion.div>

              {/* Mentors Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-5xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Illustration */}
                  <div className="relative flex-shrink-0">
                    <Image
                      src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-book-a-free-demo-illustration.png"
                      alt="Doubts Clarification Illustration"
                      width={400}
                      height={320}
                      className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4">
                      1500+ Mentors to Resolve Your Doubts
                    </h3>
                    <p className="text-gray-500 mb-8 text-base md:text-lg">
                      Including Subject Matter Experts, IITians, Teaching Assistants,
                      NxtWave Alumni, etc.
                    </p>
                    <Link
                      href="#demo-form"
                      className="inline-block bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-200 transition-all hover:scale-105 active:scale-95 text-base md:text-lg"
                    >
                      Book a free Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Doubts Banner - Dark with 3D Illustration */}
      {/* Doubts Banner - Dark with 3D Illustration */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] rounded-3xl overflow-hidden min-h-[320px] shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-16 relative z-10 w-full">
              {/* Left Content */}
              <div className="text-center md:text-left mb-8 md:mb-0 max-w-2xl relative z-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#f97316] mb-4">
                  1000+ Doubts
                </h2>
                <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-4 font-medium">
                  are resolved within
                </p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-white leading-tight">
                  <span
                    style={{
                      borderBottom: "4px solid #f97316",
                      paddingBottom: "8px",
                      display: "inline-block"
                    }}
                  >
                    15 minutes Everyday !
                  </span>
                </p>
              </div>

              {/* Right Side - New Illustration */}
              <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="relative w-full max-w-[500px] h-[250px] md:h-[300px]">
                  <Image
                    src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-doubts-illustartions.png"
                    alt="Doubts Resolution Illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                  
                  {/* Floating Clouds Animation */}
                  <motion.div
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-10 text-4xl opacity-60"
                  >
                    ☁️
                  </motion.div>
                  <motion.div
                    animate={{ x: [0, -15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 text-3xl opacity-40"
                  >
                    ☁️
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-20 w-3 h-3 bg-white/10 rounded-full animate-pulse" />
              <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/20 rounded-full" />
              <div className="absolute top-1/2 left-10 w-4 h-4 border border-white/5 rounded-full" />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
