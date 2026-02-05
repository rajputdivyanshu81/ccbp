"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Company logos data - organized by rows with high-fidelity URLs
const companyLogosRow1 = [
  { name: "GEP", domain: "gep.com", logo: "https://logo.clearbit.com/gep.com" },
  { name: "SYSTECH", domain: "systechone.com", logo: "https://logo.clearbit.com/systechone.com" },
  { name: "CYIENT", domain: "cyient.com", logo: "https://logo.clearbit.com/cyient.com" },
  { name: "HCL", domain: "hcltech.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/HCL_Technologies_logo.svg/512px-HCL_Technologies_logo.svg.png" },
  { name: "TATA ELXSI", domain: "tataelxsi.com", logo: "https://logo.clearbit.com/tataelxsi.com" },
  { name: "Cognizant", domain: "cognizant.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png" },
  { name: "CGI", domain: "cgi.com", logo: "https://logo.clearbit.com/cgi.com" },
  { name: "MERKLE", domain: "merkle.com", logo: "https://logo.clearbit.com/merkle.com" },
  { name: "Mindtree", domain: "ltimindtree.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/LTIMindtree_logo.svg/512px-LTIMindtree_logo.svg.png" }
];

const companyLogosRow2 = [
  { name: "ValueMomentum", domain: "valuemomentum.com", logo: "https://logo.clearbit.com/valuemomentum.com" },
  { name: "Tredence", domain: "tredence.com", logo: "https://logo.clearbit.com/tredence.com" },
  { name: "pwc", domain: "pwc.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/512px-PricewaterhouseCoopers_Logo.svg.png" },
  { name: "Siply", domain: "siply.in", logo: "https://logo.clearbit.com/siply.in" },
  { name: "Publicis Sapient", domain: "publicissapient.com", logo: "https://logo.clearbit.com/publicissapient.com" },
  { name: "Mentor Graphics", domain: "mentor.com", logo: "https://logo.clearbit.com/mentor.com" },
  { name: "Observe.ai", domain: "observe.ai", logo: "https://logo.clearbit.com/observe.ai" },
  { name: "Optum", domain: "optum.com", logo: "https://logo.clearbit.com/optum.com" },
  { name: "Eurofins", domain: "eurofins.com", logo: "https://logo.clearbit.com/eurofins.com" }
];

const companyLogosRow3 = [
  { name: "SAP", domain: "sap.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/512px-SAP_2011_logo.svg.png" },
  { name: "Capgemini", domain: "capgemini.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Capgemini_logo.svg/512px-Capgemini_logo.svg.png" },
  { name: "Google", domain: "google.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" },
  { name: "Amazon", domain: "amazon.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" },
  { name: "NVIDIA", domain: "nvidia.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/512px-Nvidia_logo.svg.png" },
  { name: "Accenture", domain: "accenture.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png" },
  { name: "Deloitte", domain: "deloitte.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Deloitte.svg/512px-Deloitte.svg.png" },
  { name: "Bank of America", domain: "bankofamerica.com", logo: "https://logo.clearbit.com/bankofamerica.com" },
  { name: "BOSCH", domain: "bosch.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/512px-Bosch-logo.svg.png" }
];

const LogoCard = ({ company }: { company: { name: string, domain: string, logo: string } }) => {
  const [hasError, setHasError] = useState(false);

  // If the logo fails, we just don't render this card to keep it "logos only"
  if (hasError) return null;

  return (
    <div className="flex items-center justify-center flex-shrink-0 w-[160px] h-[80px] group transition-all">
      <img
        src={company.logo}
        alt={company.name}
        className="h-10 w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

const MarqueeRow = ({ 
  companies, 
  duration = 30 
}: { 
  companies: { name: string, domain: string, logo: string }[]; 
  duration?: number;
}) => {
  // Duplicate to create seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];
  
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -180 * companies.length],
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
          <LogoCard key={`${company.name}-${index}`} company={company} />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#334155] mb-2 leading-tight">
            <span className="relative inline-block">
              2000+
              <svg className="absolute -bottom-2 left-0 w-full h-2 overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2,8 Q50,2 98,5" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Companies
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#334155] leading-tight">
            Hired NxtWave Learners
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
