"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";

// Comparison data
const comparisonData = [
  {
    feature: "Curriculum",
    intensive: "Designed as per companies' current requirements",
    others: "Not industry-aligned",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Doubts Clarification",
    intensive: "9AM - 9PM Doubt Clarification. 1500+ Mentors to help you.",
    others: "Only 1-2 hours per day",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Trainers",
    intensive: "Alumni of IIT & Top MNCs like Amazon, Microsoft. Built world-class products",
    others: "No real world project experience",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Placements Record",
    intensive: "Proven results for every branch, degree, CGPA",
    others: "For only select branches, degrees",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Placements Opportunities",
    intensive: "Unlimited from a pool of 3000+ companies",
    others: "Limited (15-20)",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Institute Recognised by",
    intensive: "NSDC + NASSCOM",
    others: "No recognition",
    intensiveCheck: true,
    othersCheck: false,
    intensiveLogos: true,
  },
  {
    feature: "Projects",
    intensive: "10+ Real-time Projects that makes your resume strong",
    others: "~1-2 real time projects",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Access to Labs",
    intensive: "24×7 Online State-of-the-art Labs. No installation/setup needed.",
    others: "Only 2 hours/day",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "AI Mock Interviews",
    intensive: "with NxtMock",
    others: "",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Expert Mock Interviews",
    intensive: "with Dedicated Tech & HR Panels",
    others: "",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Seniors' Interview Experiences",
    intensive: "Access to 300+ Sessions",
    others: "",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Scheduling Interviews",
    intensive: "",
    others: "",
    intensiveCheck: true,
    othersCheck: false,
  },
  {
    feature: "Salary Negotiation with Companies",
    intensive: "For higher salaries",
    others: "",
    intensiveCheck: true,
    othersCheck: false,
  },
];

export default function WhyJoinSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-12"
        >
          Why Join Intensive?
        </motion.h2>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[800px]">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="p-4 text-left w-1/4"></th>
                <th className="p-4 text-center w-[37.5%]">
                  <div className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white rounded-t-xl py-4 px-6">
                    <span className="text-xl font-bold">Intensive 3.0</span>
                  </div>
                </th>
                <th className="p-4 text-center w-[37.5%]">
                  <div className="bg-slate-100 text-[#1e293b] rounded-t-xl py-4 px-6">
                    <span className="text-xl font-bold">Other Coaching Institutes</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  {/* Feature Name */}
                  <td className="p-4 border-l-4 border-[#2563eb]">
                    <span className="font-semibold text-[#1e293b]">
                      {row.feature}
                    </span>
                  </td>

                  {/* Intensive Column */}
                  <td className="p-4 text-center border-x border-purple-100 bg-purple-50/30">
                    <div className="flex flex-col items-center justify-center gap-2">
                      {row.intensiveLogos ? (
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-bold text-blue-600">NSDC</span>
                          <span className="text-xs font-bold text-gray-600">NASSCOM</span>
                        </div>
                      ) : row.intensive ? (
                        <span className="text-gray-600 text-sm">{row.intensive}</span>
                      ) : null}
                      {row.intensiveCheck && (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Others Column */}
                  <td className="p-4 text-center border-r border-gray-100">
                    <div className="flex flex-col items-center justify-center gap-2">
                      {row.others && (
                        <span className="text-gray-500 text-sm">{row.others}</span>
                      )}
                      {!row.othersCheck && (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          {/* Batch Info */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
            <span className="text-gray-700">Batch starts today</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#pricing"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold px-10 py-3.5 rounded-lg transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              href="#demo-form"
              className="border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white font-semibold px-10 py-3.5 rounded-lg transition-colors"
            >
              Book a Free Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
