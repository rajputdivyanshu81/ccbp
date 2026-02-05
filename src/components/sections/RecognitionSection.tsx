"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Awards data - updated with high-fidelity branding
const awards = [
  {
    id: 1,
    title: "Recognized as the Greatest Brand in Education",
    items: [
      { logo: "https://nxtwave.imgix.net/ccbp-website/Home/award-by-time-business.png", label: "Best Tech Skilling EdTech Company", sub: "by Times Business Awards in 2022" },
      { logo: "https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards/award-2.png", label: "Trusted Brand in Education", sub: "by Prime Insights in 2023" },
      { logo: "https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards/award-3.png", label: "MOST PREFERRED BRANDS 2021", sub: "" },
      { logo: "https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/awards/award-4.png", label: "INDIA'S GREATEST BRANDS & LEADERS", sub: "2021-22" }
    ]
  },
  {
    id: 2,
    title: "Recognized by Industry Giants",
    content: "NxtWave founders Anupam Pedarla and Sashank Gujjula recognized in the Forbes India 30 Under 30 list, 2024.",
    image: "https://nxtwave.imgix.net/ccbp-website/Home/forbes-30-v3.png"
  },
  {
    id: 3,
    title: "Global Recognition",
    content: "NxtWave recognized as 'Top 10 Most Promising EdTech' by Silicon India for revolutionary training methods.",
    image: "https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/founder-award-2.png"
  }
];

export default function RecognitionSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  }, []);

  // Removed auto-play useEffect as per user request

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Awards Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            {/* Main Card Area */}
            <div className="flex-1 relative overflow-hidden rounded-[32px] bg-[#2e3a8c] shadow-xl min-h-[320px] md:min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center"
                >
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-10 max-w-2xl">
                    {awards[currentIndex].title}
                  </h3>

                  {awards[currentIndex].items ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full items-end">
                      {awards[currentIndex].items.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-3">
                          <img src={item.logo} alt={item.label} className="h-20 md:h-24 w-auto object-contain" />
                          <div className="text-center">
                            <p className="text-white text-[10px] md:text-xs font-bold leading-tight">{item.label}</p>
                            <p className="text-white/60 text-[8px] md:text-[10px] mt-1">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                      <p className="text-white text-lg md:text-xl leading-relaxed">
                        {awards[currentIndex].content}
                      </p>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-yellow-400/30">
                        <img src={awards[currentIndex].image} alt="Award" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="p-2 text-slate-400 hover:text-slate-800 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-2.5 bg-slate-800 rounded-full"
                      : "w-2.5 h-2.5 bg-slate-200 rounded-full hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 text-slate-400 hover:text-slate-800 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          {/* Batch Info */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
            </div>
            <span className="text-[#334155] font-medium text-lg">Batch starts today</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#pricing"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-md active:scale-95"
            >
              Enroll Now
            </Link>
            <Link
              href="#demo-form"
              className="border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white font-bold px-10 py-4 rounded-2xl transition-all active:scale-95"
            >
              Book a Free Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
