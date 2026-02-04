"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Video testimonials data
const videoTestimonials = [
  {
    id: 1,
    title: "NxtWave Hire",
    channel: "NxtWave",
    duration: "2:17",
    thumbnail: "video1",
  },
  {
    id: 2,
    title: "NxtWave Hire",
    channel: "NxtWave",
    duration: "1:32",
    thumbnail: "video2",
  },
  {
    id: 3,
    title: "NxtWave Hire - One Stop Solution",
    channel: "NxtWave",
    duration: "3:45",
    thumbnail: "video3",
  },
  {
    id: 4,
    title: "Hiring Exceptional Talent",
    channel: "NxtWave",
    duration: "2:20",
    thumbnail: "video4",
  },
  {
    id: 5,
    title: "Trained & Industry Aligned",
    channel: "NxtWave",
    duration: "1:55",
    thumbnail: "video5",
  },
];

export default function WhyCompaniesPreferSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= videoTestimonials.length - 2 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? videoTestimonials.length - 3 : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Section - Header + Main Video */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
              Why{" "}
              <span className="text-[#2563eb]">Top Companies</span>{" "}
              Prefer
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2563eb] mb-6">
              NxtWave Students
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              NxtWave students carved a name for themselves in the IT industry.
              <br />
              Hear it directly from the CEOs, CXOs and HRs of tech companies.
            </p>
          </motion.div>

          {/* Right - Main Featured Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600 to-purple-800 aspect-video">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-700 cursor-pointer transition-colors">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" 
                         style={{ borderLeftWidth: '16px' }} />
                  </div>
                  <p className="text-sm font-medium">NxtWave Celebrates a Major Milestone | 2000+ Companies</p>
                </div>
              </div>
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white font-bold text-3xl">2000+</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">Companies</p>
                    <p className="text-white/80 text-sm">Hired NxtWave Learners</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-white/60 text-xs">Watch on</span>
                  <span className="text-white font-semibold text-sm">▶ YouTube</span>
                </div>
              </div>
              {/* NxtWave logo badge */}
              <div className="absolute top-4 left-4 bg-purple-900/80 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs font-bold text-purple-800">
                  NXT
                </div>
                <span className="text-white text-sm font-medium">NxtWave</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Videos Grid */}
          <div className="overflow-hidden mx-8">
            <motion.div
              className="flex gap-4"
              animate={{ x: -currentIndex * 320 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[300px]"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 aspect-video cursor-pointer group">
                    {/* Video thumbnail placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                        <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-white border-b-6 border-b-transparent ml-1"
                             style={{ borderLeftWidth: '12px', borderTopWidth: '8px', borderBottomWidth: '8px' }} />
                      </div>
                    </div>
                    
                    {/* Video info overlay */}
                    <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/70 to-transparent">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-700 rounded flex items-center justify-center text-[8px] font-bold text-white">
                          NXT
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium truncate">{video.title}</p>
                          <p className="text-white/60 text-[10px]">{video.channel}</p>
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 left-3 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
                      0:00 / {video.duration}
                    </div>

                    {/* YouTube logo */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1">
                      <span className="text-white/60 text-[10px]">▶</span>
                      <span className="text-white text-[10px] font-medium">YouTube</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          {/* Batch Info */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
            <span className="text-gray-700">Batch starts today</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#pricing"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold px-10 py-3.5 rounded-lg transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              href="#demo-form"
              className="border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white font-semibold px-10 py-3.5 rounded-lg transition-colors"
            >
              Book a Free Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
