"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DoubtsSection() {
  return (
    <>
      {/* Doubts Banner - Dark with 3D Illustration */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] rounded-2xl overflow-hidden min-h-[200px]"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-10 lg:py-8 relative z-10">
              {/* Left Content */}
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-[#f97316] mb-2">
                  1000+ Doubts
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-2">
                  are resolved within
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-white">
                  <span
                    style={{
                      borderBottom: "4px solid #f97316",
                      paddingBottom: "6px",
                    }}
                  >
                    15 minutes Everyday !
                  </span>
                </p>
              </div>

              {/* Right Side - 3D Illustration Placeholder */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative lg:absolute lg:right-16 lg:top-1/2 lg:-translate-y-1/2"
              >
                {/* The original has a 3D illustration of a person on a pencil */}
                <div className="relative w-64 h-48 lg:w-80 lg:h-56">
                  {/* Pencil */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-l-full transform -rotate-12 origin-right" style={{ width: '200%', left: '-50%' }}>
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded-r-sm" />
                  </div>
                  
                  {/* Person on pencil */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      {/* Body */}
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-4xl">👨‍💻</span>
                      </div>
                      {/* Laptop popup */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        className="absolute -top-16 -left-4 bg-white rounded-lg shadow-xl p-2 border border-gray-100"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-300 to-orange-400" />
                          <div className="text-xs font-medium text-gray-600">💻</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Clouds */}
                  <motion.div
                    animate={{ x: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-0 right-0 text-4xl opacity-70"
                  >
                    ☁️
                  </motion.div>
                  <motion.div
                    animate={{ x: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute bottom-4 -left-8 text-3xl opacity-50"
                  >
                    ☁️
                  </motion.div>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute top-8 right-16 text-2xl opacity-40"
                  >
                    ☁️
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-8 w-2 h-2 bg-white/20 rounded-full" />
              <div className="absolute top-12 left-16 w-1 h-1 bg-white/30 rounded-full" />
              <div className="absolute bottom-8 left-1/4 w-3 h-3 border border-white/10 rounded-full" />
              <div className="absolute top-1/3 left-12 w-4 h-4 border border-white/5 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-1">
                  Get Your{" "}
                  <span
                    className="relative inline-block"
                  >
                    <span className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">
                      Doubts Clarified
                    </span>
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] rounded-full" />
                  </span>
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
                  Faster than in Offline Classes
                </h2>
                <p className="text-gray-600">
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
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 max-w-3xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  {/* Illustration with Sunburst */}
                  <div className="relative flex-shrink-0">
                    {/* Sunburst background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 relative">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-purple-200/80 to-transparent origin-bottom"
                            style={{
                              transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Team of mentors */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 w-40 h-32 flex items-end justify-center"
                    >
                      <div className="flex items-end -space-x-2">
                        <span className="text-4xl">�‍💼</span>
                        <span className="text-5xl relative z-10">�‍�</span>
                        <span className="text-4xl">�‍💻</span>
                        <span className="text-3xl">👨‍🏫</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-3">
                      1500+ Mentors to Resolve Your Doubts
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                      Including Subject Matter Experts, IITians, Teaching Assistants,
                      NxtWave Alumni, etc.
                    </p>
                    <Link
                      href="#demo-form"
                      className="inline-block bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
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
    </>
  );
}
