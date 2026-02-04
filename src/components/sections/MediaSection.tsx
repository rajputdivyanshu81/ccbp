"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const mediaArticles = [
  {
    id: 1,
    title: "Over 2000 Companies Hire NxtWave Learners, Addressing the Talent...",
    source: "INDIA TODAY",
    date: "08 Oct 2024",
    link: "#",
    thumbnail: "bg-[#8b0000]", // Dark red for India Today style
    imageContent: "2000+ COMPANIES STRONG!",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/India_Today_logo.svg/1200px-India_Today_logo.svg.png",
  },
  {
    id: 2,
    title: "NxtWave and NSDC launch SkillUp India 4.0, aims to empower over...",
    source: "Hindustan Times",
    date: "04 Sep 2024",
    link: "#",
    thumbnail: "bg-[#e2e8f0]", // Light gray for photo placeholder
    imageContent: "EVENT PHOTO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Hindustan_Times_Logo.svg/1200px-Hindustan_Times_Logo.svg.png",
  },
  {
    id: 3,
    title: "NSDC, NxtWave join hands to upskill 3 million students",
    source: "CNBC TV18",
    date: "03 Sep 2024",
    link: "#",
    thumbnail: "bg-[#e2e8f0]", // Light gray for photo placeholder
    imageContent: "EVENT PHOTO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_TV18_logo.svg/1200px-CNBC_TV18_logo.svg.png",
  },
];

export default function MediaSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-16"
        >
          NxtWave in the media
        </motion.h2>

        {/* Media Grid / Carousel */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mediaArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              {/* Card Top: Logo & Date */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 w-24 relative grayscale opacity-80">
                   {/* Fallback to source text if image fails or needs better styling */}
                   <span className="font-black text-xs tracking-tight text-slate-900">{article.source}</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">{article.date}</span>
              </div>

              {/* Card Image Thumbnail */}
              <div className={`aspect-[16/9] rounded-2xl mb-6 overflow-hidden relative ${article.thumbnail} flex items-center justify-center`}>
                {index === 0 ? (
                  <div className="bg-gradient-to-br from-[#8b0000] to-[#450a0a] w-full h-full p-4 flex flex-col justify-center">
                    <div className="bg-yellow-400 text-[#8b0000] font-black text-3xl px-2 py-1 rotate-[-2deg] mb-2 w-fit">2000+</div>
                    <div className="text-white font-bold text-lg leading-tight">COMPANIES STRONG!</div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                    [ EVENT PHOTO ]
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-[#334155] font-semibold text-lg leading-snug mb-8 line-clamp-2">
                  {article.title}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                  <a href={article.link} className="text-[#3b82f6] font-bold text-sm hover:underline flex items-center gap-2">
                    Read Article
                  </a>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#3b82f6] transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
           <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-all">
             <ChevronLeft className="w-6 h-6" />
           </button>
           
           <div className="flex gap-2">
             {[...Array(6)].map((_, i) => (
               <div 
                 key={i} 
                 className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-slate-500' : 'w-2 bg-slate-300'}`} 
               />
             ))}
           </div>

           <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-all">
             <ChevronRight className="w-6 h-6" />
           </button>
        </div>
      </div>
    </section>
  );
}
