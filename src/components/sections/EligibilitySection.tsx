"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, UserPlus, Users, Sparkles } from "lucide-react";

const eligibilityCategories = [
  {
    title: "Final Year Students",
    description: "Launch your tech career before you even graduate.",
    icon: GraduationCap,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Graduates",
    description: "Whether you're a recent grad or from an earlier batch.",
    icon: UserPlus,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Working Professionals",
    description: "Switch to a high-paying tech career from your current job.",
    icon: Briefcase,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Non-Tech Background",
    description: "No prior coding experience? No problem at all.",
    icon: Users,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function EligibilitySection() {
  return (
    <section id="eligibility" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-[#2563eb]" />
            <span className="text-[#2563eb] font-bold tracking-wider uppercase text-sm">
              Eligibility
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b]"
          >
            Who can join this program?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg mt-4"
          >
            NxtWave Intensive is designed to help anyone build a tech career,
            regardless of their academic background or branch.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eligibilityCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border border-transparent hover:border-slate-200 hover:shadow-xl transition-all duration-300 group ${category.bgColor}`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-white shadow-sm`}
              >
                <category.icon className={`w-7 h-7 ${category.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center"
        >
          <p className="text-[#475569] font-medium italic">
            "Your degree or branch doesn&apos;t matter. Your commitment to learn
            is what we look for."
          </p>
        </motion.div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-12 border-t border-slate-100 text-center"
        >
          {/* Batch Info */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
            <span className="text-gray-700">Batch starts today</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#pricing"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold px-10 py-3.5 rounded-lg transition-colors"
            >
              Enroll Now
            </a>
            <a
              href="#demo-form"
              className="border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white font-semibold px-10 py-3.5 rounded-lg transition-colors"
            >
              Book a Free Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
