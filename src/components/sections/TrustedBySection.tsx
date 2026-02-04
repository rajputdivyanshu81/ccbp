"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, IndianRupee } from "lucide-react";

// Placed candidates data - organized by rows
const row1 = [
  { name: "Dutta", role: "Software Engineer", company: "Google", logo: "🔵" },
  { name: "Bharadhwaj", role: "Software Developer", company: "amazon", logo: "📦" },
  { name: "Nikhil", role: "Software Developer", company: "SAMSUNG", logo: "🔷" },
  { name: "Priya Sharma", role: "Data Analyst", company: "Microsoft", logo: "🟦" },
];

const row2 = [
  { name: "Dinesh Varma", role: "Software Engineer", company: "wipro", logo: "🟣" },
  { name: "Meghna Barnwl", role: "Software Engineer", company: "Flipkart", logo: "💛" },
  { name: "Shailesh", role: "Member Technical", company: "ADP", logo: "🔴" },
  { name: "Arun Kumar", role: "Backend Developer", company: "Infosys", logo: "🔵" },
];

const row3 = [
  { name: "Kothapalli", role: "Data Analyst", company: "DP World", logo: "⬛" },
  { name: "Rahul Kumar", role: "Software Developer", company: "Jio", logo: "🔵" },
  { name: "Ranjith Tevnan", role: "ML Engineer (Intern)", company: "Disney+ Hotstar", logo: "💜" },
  { name: "Sneha Reddy", role: "Frontend Developer", company: "Zoho", logo: "🟡" },
];

const row4 = [
  { name: "Jayant Mathur", role: "Software Developer", company: "TCS", logo: "🔵" },
  { name: "Jayakar Reddy", role: "Software Engineer", company: "GEP", logo: "🟢" },
  { name: "Krishna Murthy", role: "Software engineer", company: "CYIENT", logo: "🔷" },
  { name: "Ananya Rao", role: "DevOps Engineer", company: "Accenture", logo: "🟣" },
];

interface Candidate {
  name: string;
  role: string;
  company: string;
  logo: string;
}

const PersonCard = ({ candidate }: { candidate: Candidate }) => (
  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 min-w-[200px] flex-shrink-0">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
        {candidate.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-[#1e293b] text-sm truncate">
          {candidate.name}
        </p>
        <p className="text-xs text-gray-500 truncate">{candidate.role}</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs">{candidate.logo}</span>
          <span className="text-xs font-medium text-gray-600 truncate">
            {candidate.company}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ 
  candidates, 
  direction = "left", 
  duration = 25 
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left Side - Stats and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            {/* Header */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-2">
              Trusted by{" "}
              <span className="relative inline-block">
                <span className="text-[#2563eb]">Thousands</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2563eb] rounded-full" />
              </span>{" "}
              to
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-8">
              Become IT{" "}
              <span className="relative inline-block">
                <span>Professionals</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#a855f7] rounded-full" />
              </span>
            </h2>

            {/* Stats */}
            <div className="space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1e293b]">2000+ Companies</p>
                  <p className="text-sm text-gray-600">Hired NxtWave Learners</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1e293b]">₹38 LPA</p>
                  <p className="text-sm text-gray-600">Highest package</p>
                </div>
              </motion.div>
            </div>

            {/* Batch Info */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
              <span className="text-gray-700">Batch starts today</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#pricing"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Enroll Now
              </Link>
              <Link
                href="#demo-form"
                className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Book a Free Demo
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Scrolling Marquee Cards */}
          <div className="relative hidden lg:block">
            <div className="space-y-4">
              {/* Row 1 - Left scroll */}
              <MarqueeRow candidates={row1} direction="left" duration={30} />
              
              {/* Row 2 - Right scroll */}
              <MarqueeRow candidates={row2} direction="right" duration={28} />
              
              {/* Row 3 - Left scroll */}
              <MarqueeRow candidates={row3} direction="left" duration={32} />
              
              {/* Row 4 - Right scroll */}
              <MarqueeRow candidates={row4} direction="right" duration={26} />
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10" />
          </div>

          {/* Mobile version - Simple horizontal scroll */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {[...row1, ...row2].map((candidate, index) => (
                <motion.div
                  key={candidate.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PersonCard candidate={candidate} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
