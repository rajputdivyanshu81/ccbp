"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Company logos data - organized by rows
const companyLogosRow1 = [
  "GEP", "SYSTECH", "CYIENT", "HCL", "TATA ELXSI", "Cognizant", "CGI", "MERKLE", "Mindtree"
];

const companyLogosRow2 = [
  "ValueMomentum", "Tredence", "pwc", "Siply", "publicis sapient", "Mentor Graphics", "OBSERVE.AI", "OPTUM", "eurofins"
];

const companyLogosRow3 = [
  "SAP", "Capgemini", "Google", "amazon", "NVIDIA", "accenture", "Deloitte", "Bank of America", "BOSCH"
];

const LogoCard = ({ company }: { company: string }) => (
  <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 min-w-[140px] flex items-center justify-center flex-shrink-0 hover:shadow-md transition-shadow">
    <span className="font-semibold text-gray-700 text-sm whitespace-nowrap">{company}</span>
  </div>
);

const MarqueeRow = ({ 
  companies, 
  duration = 30 
}: { 
  companies: string[]; 
  duration?: number;
}) => {
  // Duplicate to create seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];
  
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -160 * companies.length],
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
        {duplicatedCompanies.map((company, index) => (
          <LogoCard key={`${company}-${index}`} company={company} />
        ))}
      </motion.div>
    </div>
  );
};

export default function HiringCompaniesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            <span className="text-[#2563eb]">2000+ Companies</span>
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b]">
            <span className="relative inline-block">
              Hired NxtWave Learners
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#a855f7] rounded-full" />
            </span>
          </h2>
        </motion.div>

        {/* Company Logos Marquee - All scrolling in one direction (left) */}
        <div className="relative mb-12">
          <div className="space-y-4">
            {/* Row 1 */}
            <MarqueeRow companies={companyLogosRow1} duration={35} />
            
            {/* Row 2 */}
            <MarqueeRow companies={companyLogosRow2} duration={32} />
            
            {/* Row 3 */}
            <MarqueeRow companies={companyLogosRow3} duration={38} />
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Batch Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
          <span className="text-gray-700">Batch starts today</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="#demo-form"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Book a free Demo
          </Link>
          <Link
            href="#"
            className="text-[#2563eb] font-semibold px-4 py-3 hover:underline transition-colors"
          >
            View All Companies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
