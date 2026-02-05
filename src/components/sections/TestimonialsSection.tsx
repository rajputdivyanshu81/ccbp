"use client";

import { useState, useRef, useEffect } from "react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Bairy Vishnu Vardhan",
    placedDate: "Placed in Oct'26",
    company: "LTIMindtree",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/LTIMindtree_logo.svg/512px-LTIMindtree_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Thrilled to share that I've started my career as a Graduate Engineer Trainee at LTI Mindtree! Grateful to NxtWave for the mentorship, mock interviews, and guidance that made this possible.",
    linkedinUrl: "#",
    category: "non-it-branch",
  },
  {
    id: 2,
    name: "Kulkarni Rohith Kumar",
    placedDate: "Placed in Jan'26",
    company: "Cognizant",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "I didn't expect to move into tech after so long, but here I am. Learning through NxtWave made this transition feel possible.",
    linkedinUrl: "#",
    category: "non-engineering",
  },
  {
    id: 3,
    name: "Sai Ram Polisetty",
    placedDate: "Placed in Jan'26",
    company: "TCS",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/512px-Tata_Consultancy_Services_Logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "I focused on building real skills instead of worrying about outcomes. Getting selected through NxtWave feels like a strong start for me.",
    linkedinUrl: "#",
    category: "top-mncs",
  },
  {
    id: 4,
    name: "Priya Sharma",
    placedDate: "Placed in Dec'25",
    company: "Infosys",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/512px-Infosys_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "NxtWave's structured learning and interview prep were game-changers for me. I secured a role at Infosys even with a minor career gap.",
    linkedinUrl: "#",
    category: "career-gap",
  },
  {
    id: 5,
    name: "Rahul Kumar",
    placedDate: "Placed in Feb'26",
    company: "Wipro",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Logo.svg/512px-Wipro_Logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "Transitioning from a non-IT background was daunting, but the project-based learning at NxtWave gave me the confidence to ace my interviews.",
    linkedinUrl: "#",
    category: "non-it-job",
  },
  {
    id: 6,
    name: "Sneha Reddy",
    placedDate: "Placed in Nov'25",
    company: "Accenture",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The placement support team is outstanding. They helped me refine my resume and prepared me for the rigors of technical rounds at top MNCs.",
    linkedinUrl: "#",
    category: "non-it-branch",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Adjusted for standard desktop view (showing more than 1)
  const maxIndex = testimonials.length - (typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 3 ? prev + 1 : 0));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 3));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#1e293b] mb-4">
            Your Seniors Got Placed. It&apos;s{" "}
            <span className="relative inline-block">
              Your Turn
              <svg className="absolute -bottom-2 left-0 w-full h-2 overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2,8 Q50,2 98,5" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Now!
          </h2>
        </div>

        {/* Testimonials Sliding Carousel */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / 3 + 0.9)}%` }} // Adjust for 3 cards and gap
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full md:min-w-[calc(33.333%-16px)] bg-white rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.05)] p-0 flex flex-col border border-gray-100 overflow-hidden"
                >
                  {/* Top Info Section */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="h-8 flex items-center">
                        <img 
                          src={testimonial.companyLogo} 
                          alt={testimonial.company} 
                          className="h-full object-contain max-w-[120px]" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const parent = (e.target as HTMLImageElement).parentElement;
                            if (parent) {
                              const textSpan = document.createElement('span');
                              textSpan.className = 'text-[#2563eb] text-sm font-bold italic';
                              textSpan.innerText = '✓ ' + testimonial.company;
                              parent.appendChild(textSpan);
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-[#1e293b] text-[17px] mb-0.5 leading-tight">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#64748b] text-[13px] font-medium">
                          {testimonial.placedDate}
                        </p>
                      </div>
                      <Link href={testimonial.linkedinUrl} className="text-[#0077b5] mt-1">
                        <div className="bg-[#0077b5] rounded-[4px] p-0.5">
                          <Linkedin size={14} className="text-white fill-white" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="bg-[#f8fafc] m-4 mt-0 p-6 rounded-2xl relative flex-grow min-h-[160px] flex items-center justify-center">
                    <span className="absolute top-4 left-4 text-gray-200 text-4xl font-serif">“</span>
                    <p className="text-[#334155] text-[15px] leading-relaxed relative z-10 text-center px-4 font-medium italic">
                      {testimonial.quote}
                    </p>
                    <span className="absolute bottom-4 right-4 text-gray-200 text-4xl font-serif rotate-180">“</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Centered Navigation Arrows Below Cards */}
          <div className="flex justify-center items-center gap-12 mt-12">
            <button 
              onClick={prevTestimonial}
              className="text-[#475569] hover:text-[#2563eb] transition-all p-2 hover:scale-110 active:scale-95"
              aria-label="Previous testimonial"
            >
              <span className="text-4xl font-light">❮</span>
            </button>
            <button 
              onClick={nextTestimonial}
              className="text-[#475569] hover:text-[#2563eb] transition-all p-2 hover:scale-110 active:scale-95"
              aria-label="Next testimonial"
            >
              <span className="text-4xl font-light">❯</span>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-16 flex flex-col items-center gap-8">
          {/* Status Indicator */}
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm">
            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
            <span className="text-[#475569] font-bold text-sm tracking-wide uppercase">Batch starts today</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center gap-7">
            <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold px-10 py-3 rounded-xl shadow-lg shadow-purple-200 text-base transition-all hover:scale-[1.02] active:scale-[0.98] h-12 flex items-center justify-center min-w-[180px]">
              Enroll Now
            </button>
            <Link href="#all-reviews" className="text-[#a855f7] font-bold text-[15px] hover:underline">
              View All Reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
