"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Awards data - expanded with more awards
const awards = [
  {
    id: 1,
    title: "Mr. Sashank Gujjula, Co-founder, NxtWave,",
    highlight: "'Best Tech Skilling EdTech Company'",
    description: "award by Times Business Awards",
    badge: "India's Greatest Brands & Leaders",
  },
  {
    id: 2,
    title: "Mr. Sashank Gujjula, Co-founder, NxtWave,",
    highlight: "'Fastest Growing EdTech Startup'",
    description: "award by Economic Times",
    badge: "Economic Times",
  },
  {
    id: 3,
    title: "NxtWave recognized as",
    highlight: "'Top 10 Most Promising EdTech'",
    description: "by Silicon India",
    badge: "Silicon India",
  },
  {
    id: 4,
    title: "NxtWave awarded",
    highlight: "'Excellence in Tech Education'",
    description: "by Education World",
    badge: "Education World",
  },
  {
    id: 5,
    title: "Mr. Sashank Gujjula recognized as",
    highlight: "'Young Entrepreneur of the Year'",
    description: "by Business Today",
    badge: "Business Today",
  },
];

export default function RecognitionSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getPrevIndex = () => (currentIndex - 1 + awards.length) % awards.length;
  const getNextIndex = () => (currentIndex + 1) % awards.length;

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Awards Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4">
            {/* Left Partial Card - Shows previous award */}
            <div
              onClick={prevSlide}
              className="hidden lg:block w-40 h-72 bg-[#1e3a5f] rounded-2xl flex-shrink-0 relative overflow-hidden cursor-pointer opacity-60 hover:opacity-80 transition-opacity"
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-yellow-500/50 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-[8px] text-white/60 text-center leading-tight">
                    INDIA'S<br/>GREATEST<br/>BRANDS
                  </span>
                </div>
                <p className="text-white/50 text-xs text-center leading-relaxed line-clamp-3">
                  {awards[getPrevIndex()].title}
                </p>
              </div>
            </div>

            {/* Main Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-[#0f172a] rounded-2xl p-8 md:p-10 flex-1 max-w-3xl relative overflow-hidden min-h-[300px]"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Text Content */}
                  <div>
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                      {awards[currentIndex].title}{" "}
                      <span className="text-yellow-400 font-semibold">
                        receiving the {awards[currentIndex].highlight}
                      </span>{" "}
                      {awards[currentIndex].description}
                    </p>
                  </div>

                  {/* Right - Image Placeholder */}
                  <div className="relative">
                    <div className="border-4 border-yellow-400 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-600/20 to-orange-600/20 aspect-[4/3]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex justify-center gap-2 mb-4">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className="w-12 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center"
                              >
                                <span className="text-2xl">👤</span>
                              </div>
                            ))}
                          </div>
                          <div className="bg-amber-100 rounded px-4 py-2 mx-4">
                            <span className="text-amber-800 text-sm font-medium">
                              🏆 Award Ceremony
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/5 rounded-full" />
              </motion.div>
            </AnimatePresence>

            {/* Right Partial Card - Shows next award */}
            <div
              onClick={nextSlide}
              className="hidden lg:block w-40 h-72 bg-[#1e3a5f] rounded-2xl flex-shrink-0 p-4 cursor-pointer opacity-60 hover:opacity-80 transition-opacity"
            >
              <p className="text-white/50 text-xs leading-relaxed line-clamp-4">
                {awards[getNextIndex()].title}{" "}
                <span className="text-yellow-400/50">
                  {awards[getNextIndex()].highlight}
                </span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all cursor-pointer ${
                    index === currentIndex
                      ? "w-8 h-2 bg-[#1e293b] rounded-full"
                      : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
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
