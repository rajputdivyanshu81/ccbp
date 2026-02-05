"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileCheck, Share2, Trophy } from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Industry-Ready Certification [IRC]",
    description:
      "Unlike any academic certificate, for the first-time in India, IRC certifies your job readiness.",
    iconBg: "bg-blue-100",
    iconColor: "text-[#2563eb]",
  },
  {
    icon: Share2,
    title: "Shareable, Credible and Official",
    description:
      "Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your profile stand out everywhere.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: Trophy,
    title: "Let companies compete for you",
    description:
      "IRC certifies your industry-readiness and gets you placed with higher salaries.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function CertificationSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
              Get Certified
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Yes, you'll get a certificate representing your Industry
              Readiness once you submit your projects and clear
              the pre placement test.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e293b] text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Batch Info */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
              </div>
              <span className="text-[#334155] font-medium text-lg">Batch starts today</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
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

          {/* Right - Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Official Certificate Image */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/certificate.png" 
                alt="NxtWave Intensive Certification" 
                className="w-full h-auto rounded-[32px] shadow-2xl relative z-10"
              />
              {/* Deep shadow glow */}
              <div className="absolute -inset-4 bg-blue-600/10 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>


            {/* Shadow effect */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-black/20 to-transparent blur-lg rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
