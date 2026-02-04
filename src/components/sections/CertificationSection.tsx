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
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
              <span className="text-gray-700">Batch starts today</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#pricing"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Enroll Now
              </Link>
              <Link
                href="#demo-form"
                className="border-2 border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
            {/* Certificate Card */}
            <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Decorative diagonal lines */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-px bg-white"
                    style={{
                      width: '200%',
                      top: `${i * 20}px`,
                      left: '-50%',
                      transform: 'rotate(-15deg)',
                    }}
                  />
                ))}
              </div>

              {/* Certificate Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#2563eb] text-white text-xs font-bold px-3 py-1 rounded">
                      ⚡INTENSIVE
                    </div>
                    <span className="text-white/60 text-xs uppercase tracking-wider">
                      Industry-Ready
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 text-[10px]">NXT</div>
                    <div className="text-white/40 text-[8px]">WAVE</div>
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  CERTIFICATE
                </h3>
                <p className="text-white/60 text-sm mb-6">OF SPECIALIZATION</p>

                {/* Verified Badge */}
                <div className="absolute top-8 right-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-yellow-900 text-center leading-tight">
                        IR<br/>VERIFIED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Name Section */}
                <div className="bg-white rounded-xl p-6 mb-4">
                  <p className="text-gray-500 text-sm mb-1">Congratulations</p>
                  <p className="text-2xl font-bold text-[#1e293b] mb-3 font-serif italic">
                    Your Name
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    You have successfully completed the{" "}
                    <span className="font-semibold">
                      Full Stack Development with MERN Specialization.
                    </span>
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    This certificate is awarded after completing
                  </p>

                  {/* Stats */}
                  <div className="flex gap-8 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1e293b]">24 +</p>
                      <p className="text-[10px] text-gray-500">
                        Rigorous Assignments and Projects
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1e293b]">600 +</p>
                      <p className="text-[10px] text-gray-500">Hours of Coding</p>
                    </div>
                  </div>

                  {/* Tech Icons */}
                  <div className="flex gap-2 mb-4">
                    {["🔵", "🔴", "🟡", "🟢", "🟣", "⚫", "🔶", "🟤"].map((icon, i) => (
                      <span key={i} className="text-lg">{icon}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-400">Certificate ID:</p>
                      <p className="text-[10px] text-gray-400">Date of completion:</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-gray-600">NASSCOM</span>
                      <span className="text-xs text-gray-400">Google</span>
                      <span className="text-xs text-gray-400">meta</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-serif italic text-gray-600">Rahul A</p>
                      <p className="text-[10px] text-gray-400">CEO, NxtWave</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shadow effect */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-black/20 to-transparent blur-lg rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
