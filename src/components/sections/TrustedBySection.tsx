"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Briefcase } from "lucide-react";

// Placed candidates data - organized by rows
const row1 = [
  { name: "Bharadhwaj", role: "Software Engineer", company: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Nikhil", role: "Software Developer", company: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" },
  { name: "Sushanth", role: "Fullstack Developer", company: "needl.ai", logo: "" }, // No easy public logo for needl.ai, text fallback
  { name: "Priya Sharma", role: "Data Analyst", company: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
];

const row2 = [
  { name: "Dinesh Varma", role: "Software Engineer", company: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Meghna Barnwl", role: "Software Engineer", company: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Flipkart_logo.svg" },
  { name: "Shailesh", role: "Member Technical", company: "ADP", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/ADP_logo.svg" },
  { name: "Arun Kumar", role: "Backend Developer", company: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
];

const row3 = [
  { name: "Rahul Kumar", role: "Software Developer", company: "Jio", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Reliance_Jio_Logo_%28October_2015%29.svg" },
  { name: "Ranjith Tevnan", role: "ML Engineer (Intern)", company: "Disney+ Hotstar", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_Hotstar_logo.svg" },
  { name: "Chandan Prakash", role: "Member of Tech Staff", company: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Sneha Reddy", role: "Frontend Developer", company: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Zoho_Corporation_logo.svg" },
];

const row4 = [
  { name: "Jayant Mathur", role: "Software Developer", company: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Jayakar Reddy", role: "Software Engineer", company: "GEP", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/GEP_Logo.png" }, // GEP might need text
  { name: "Krishna Murthy", role: "Software engineer", company: "CYIENT", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cyient_Logo.png" }, // Cyient
  { name: "Ananya Rao", role: "DevOps Engineer", company: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
];

interface Candidate {
  name: string;
  role: string;
  company: string;
  logo: string;
}

const PersonCard = ({ candidate }: { candidate: Candidate }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 min-w-[240px] flex-shrink-0 group hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
         <img 
            src={`https://api.uifaces.co/our-content/donated/${candidate.name.length % 2 === 0 ? "g" : "v"}${candidate.name.length}Small.jpg`} 
            alt={candidate.name}
            className="w-full h-full object-cover"
            onError={(e) => {
                // Fallback to initial
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gray-200', 'flex', 'items-center', 'justify-center', 'text-gray-500', 'font-bold');
                e.currentTarget.parentElement!.innerText = candidate.name.charAt(0);
            }}
         />
         {/* Simple fallback since uifaces might be flaky */}
          <div className="w-full h-full bg-gray-200 hidden items-center justify-center text-gray-500 font-bold">
            {candidate.name.charAt(0)}
          </div>
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-bold text-[#1e293b] text-sm truncate">
          {candidate.name}
        </p>
        <p className="text-[11px] font-medium text-gray-500 truncate mb-2">{candidate.role}</p>
        
        {/* Company Logo */}
        <div className="h-6 flex items-center">
            {candidate.logo ? (
                 <img
                    src={candidate.logo}
                    alt={candidate.company}
                    className="h-5 w-auto object-contain"
                />
            ) : (
                <span className="text-sm font-bold text-gray-700">{candidate.company}</span>
            )}
        </div>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ 
  candidates, 
  direction = "left", 
  duration = 30 
}: { 
  candidates: Candidate[]; 
  direction?: "left" | "right"; 
  duration?: number;
}) => {
  // Duplicate candidates to create seamless loop
  const duplicatedCandidates = [...candidates, ...candidates, ...candidates];
  
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? [0, -50 * candidates.length * 4] : [-50 * candidates.length * 4, 0],
        }}
        transition={{
          x: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{ width: "max-content" }}
      >
        {duplicatedCandidates.map((candidate, index) => (
          <PersonCard key={`${candidate.name}-${index}`} candidate={candidate} />
        ))}
      </motion.div>
    </div>
  );
};

export default function TrustedBySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FB] overflow-hidden relative">
        {/* Background Wave (Subtle) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 400 C 200 400 400 100 800 100 C 1200 100 1400 300 1600 300" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <path d="M-100 600 C 300 600 500 300 900 300 C 1300 300 1500 500 1700 500" stroke="#E2E8F0" strokeWidth="2" fill="none" />
             </svg>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[55%_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Side - Stats and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] leading-tight mb-2 whitespace-nowrap">
              Trusted by{" "}
              <span className="relative inline-block text-[#334155]">
                Thousands
                <svg
                    className="absolute -bottom-2 left-0 w-full h-3 overflow-visible pointer-events-none"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M2,8 Q50,-2 98,6"
                        stroke="#a855f7"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
              </span>{" "}
              to
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#334155] leading-tight mb-10">
              Become IT Professionals
            </h2>

            {/* Stats Cards */}
            <div className="space-y-6 mb-10">
                {/* Companies Stat */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#2563eb]">2000+ Companies</p>
                  <p className="text-sm font-medium text-slate-500">Hired NxtWave Learners</p>
                </div>
              </motion.div>

                {/* Package Stat */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#2563eb]">₹38 LPA</p>
                  <p className="text-sm font-medium text-slate-500">Highest package</p>
                </div>
              </motion.div>
            </div>

            {/* Batch Info */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-3 h-3 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-slate-600 font-medium text-base">Batch starts today</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#pricing"
                className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold px-10 py-3.5 rounded-lg shadow-lg shadow-purple-100 transition-all active:scale-95 text-base"
              >
                Enroll Now
              </Link>
              <Link
                href="#demo-form"
                className="bg-white border text-[#8b5cf6] border-[#8b5cf6] hover:bg-purple-50 font-bold px-8 py-3.5 rounded-lg transition-all active:scale-95 text-base"
              >
                Book a Free Demo
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Scrolling Marquee Cards */}
          <div className="relative">
            {/* Fade Overlays */}
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FB] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FB] to-transparent z-20 pointer-events-none" />
            
            <div className="space-y-5 mask-image-linear-to-b">
              {/* Row 1 - Left scroll */}
              <MarqueeRow candidates={row1} direction="left" duration={40} />
              
              {/* Row 2 - Right scroll */}
              <MarqueeRow candidates={row2} direction="right" duration={45} />
              
              {/* Row 3 - Left scroll */}
              <MarqueeRow candidates={row3} direction="left" duration={42} />
              
              {/* Row 4 - Right scroll */}
              <MarqueeRow candidates={row4} direction="right" duration={38} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
