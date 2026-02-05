"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Share2, Clock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const videos = [
  {
    id: 1,
    title: "Living My Dream Moment | NxtWave",
    learner: "Vijaya Lakshmi Agraharapu",
    background: "B.Sc Graduate in Mathematics",
    thumbnail: "bg-[#1E3A8A]", // Deep blue
    imageText: "Living My Dream Moment",
    accentWord: "Associate Software Engineer",
  },
  {
    id: 2,
    title: "NxtWave Helped Me to Beat All Odds",
    learner: "Leela Prasad Karri",
    background: "Associate Software Engineer",
    thumbnail: "bg-[#EA580C]", // Orange
    imageText: "NxtWave Helped Me to Beat All Odds",
    accentWord: "I STILL MADE IT!",
  },
  {
    id: 3,
    title: "NxtWave's Guidance Led To My Tech Placement",
    learner: "B.Com Graduate",
    background: "Tech Placement",
    thumbnail: "bg-[#1E1B4B]", // Dark indigo/blue
    imageText: "NxtWave's Guidance Led To My Tech Placement",
    accentWord: "NxtWave Made It Possible",
  },
  {
    id: 4,
    title: "From Non-Tech to Tech Success",
    learner: "Rahul Sharma",
    background: "Mechanical Engineer",
    thumbnail: "bg-[#166534]", // Green
    imageText: "Mechanical Engineer to Tech Lead",
    accentWord: "TRANSFORMED!",
  },
];

export default function LearnerExperiencesSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % (videos.length - 2));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + (videos.length - 2)) % (videos.length - 2));
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] text-center mb-16"
        >
          Hear NxtWave learners' experiences
        </motion.h2>

        <div className="relative group max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100"
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>

          {/* Videos Grid Container */}
          <div className="overflow-hidden px-4 md:px-0">
            <motion.div
              className="flex gap-6"
              initial={false}
              animate={{ x: `-${startIndex * 33.33}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="min-w-[100%] sm:min-w-[48%] lg:min-w-[31.5%] flex-shrink-0"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group/item">
                    {/* Fake YouTube Thumbnail Branding */}
                    <div className={`absolute inset-0 ${video.thumbnail}`}>
                        {/* Abstract background shapes */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 transform origin-top-right" />
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
                    </div>
                    
                    {/* Video Content Overlay - Matching Screenshot */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                        {/* Header Part */}
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <span className="text-[10px] text-blue-900 font-bold">NXT</span>
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold leading-tight">{video.title}</p>
                                    <p className="text-white/80 text-[10px]">NxtWave</p>
                                </div>
                            </div>
                        </div>

                        {/* Middle Text Overlays */}
                        <div className="flex-1 flex flex-col items-start justify-center">
                            <h5 className="text-white font-black text-2xl leading-none tracking-tighter drop-shadow-lg max-w-[80%]">
                                {video.imageText.toUpperCase()}
                            </h5>
                            <div className="bg-yellow-400 mt-2 px-2 py-0.5 transform -rotate-1">
                                <span className="text-blue-900 font-black text-sm italic">{video.accentWord}</span>
                            </div>
                        </div>

                        {/* Bottom - Name Tag (Matching yellow strip) */}
                        <div className="bg-orange-500/90 py-1 px-3 -mx-4">
                            <p className="text-white text-[10px] font-bold tracking-wide italic">
                                {video.learner} | {video.background}
                            </p>
                        </div>
                    </div>

                    {/* Central Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>

                    {/* YouTube Standard Bottom Bar */}
                    <div className="absolute inset-x-0 bottom-0 py-2 px-4 bg-black/80 flex items-center justify-between z-30 transition-opacity">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Share2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-white text-[11px] font-medium flex items-center gap-1 leading-none">
                            Watch on <span className="text-sm font-bold tracking-tighter flex items-center">
                                <Play className="w-3 h-3 fill-white text-white mr-0.5" />
                                YouTube
                            </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          {/* Batch Info
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
            </div>
            <span className="text-[#334155] font-medium text-lg">Batch starts today</span>
          </div> */}

          {/* CTA Buttons
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
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
