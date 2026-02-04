"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Monitor,
  Briefcase,
  Clock,
  Users,
  Code,
  Laptop,
  Building2,
  CheckCircle,
  Lock,
  Plus,
} from "lucide-react";

// Job tracks data
const jobTracks = [
  { name: "Java Full Stack", icon: "☕", filled: false },
  { name: "MERN Full Stack", icon: "🟢", filled: false },
  { name: "Data Analytics", icon: "📊", filled: true, nextBatch: "01 Jul 2026" },
  { name: "QA / Automation Testing", icon: "🔧", filled: true, nextBatch: "01 Jul 2026" },
];

// Placement support features
const placementSupport = [
  "Aptitude Training",
  "Soft Skills Training",
  "Resume Preparation",
  "AI-Powered Mock Interviews",
  "Mock Interviews by Tech and HR Panels",
  "300+ Senior Interview Experiences",
  "Scheduling Interviews",
  "Access to Placement Portal",
  "Mega Offline Placement Drives",
  "Negotiation with companies for higher salaries",
];

// Benefits
const benefits = [
  { icon: Clock, text: "9AM - 9PM Doubt Clarification. 1500+ Mentors to help you." },
  { icon: Code, text: "10+ Real-time Projects for strong resume" },
  { icon: Laptop, text: "24/7 Online Lab Access" },
  { icon: Building2, text: "NxtWave Intensive is not a Job Guarantee Program." },
];

export default function PaymentPlans() {
  const [paymentType, setPaymentType] = useState<"post-paid" | "pre-paid">("post-paid");

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Your Success is our Success
          </h2>
          <p className="text-lg text-gray-700 flex items-center gap-2">
            <span className="text-2xl">👉</span>
            <span className="font-semibold">Choose your Payment Plan</span>
          </p>
        </motion.div>

        {/* Payment Type Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex bg-white rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setPaymentType("post-paid")}
              className={`px-6 py-2 rounded-lg transition-all ${
                paymentType === "post-paid"
                  ? "bg-slate-100 text-[#1e293b] font-semibold"
                  : "text-gray-500"
              }`}
            >
              Post-paid
            </button>
            <button
              onClick={() => setPaymentType("pre-paid")}
              className={`px-6 py-2 rounded-lg transition-all ${
                paymentType === "pre-paid"
                  ? "bg-slate-100 text-[#1e293b] font-semibold"
                  : "text-gray-500"
              }`}
            >
              Pre-paid
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {paymentType === "post-paid" ? (
            /* POST-PAID CONTENT */
            <motion.div
              key="post-paid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1e293b] mb-8">
                  What's included ?
                </h3>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Features & Tracks */}
                  <div className="space-y-6">
                    {/* Fundamentals */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Monitor className="w-5 h-5 text-[#2563eb]" />
                      </div>
                      <span className="font-medium text-[#1e293b]">Fundamentals of IT</span>
                    </div>

                    {/* Multiple Job Tracks */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-[#2563eb]" />
                        </div>
                        <span className="font-medium text-[#1e293b]">Multiple Job Tracks</span>
                      </div>

                      {/* Job Tracks List */}
                      <div className="ml-4 space-y-3">
                        {jobTracks.map((track) => (
                          <div
                            key={track.name}
                            className={`flex items-center gap-3 p-3 rounded-lg border ${
                              track.filled
                                ? "border-orange-200 bg-orange-50/50"
                                : "border-gray-100"
                            }`}
                          >
                            <span className="text-xl">{track.icon}</span>
                            <div className="flex-1">
                              <p className="font-medium text-[#1e293b] text-sm">{track.name}</p>
                              {track.filled && (
                                <div className="flex items-center gap-1 mt-1">
                                  <Lock className="w-3 h-3 text-orange-500" />
                                  <span className="text-xs text-orange-600">
                                    Seats filled. Next batch starts on {track.nextBatch}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional info */}
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Monitor className="w-5 h-5 text-[#2563eb]" />
                        </div>
                        <span className="text-gray-600 text-sm">
                          3 Hours classes and 3 Hours Labs Everyday
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-[#2563eb]" />
                        </div>
                        <span className="text-gray-600 text-sm">
                          Trainers: IIT alumni & Top MNCs like Amazon, Microsoft
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Placement Support */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="font-medium text-[#1e293b]">
                        Unlimited opportunities from a pool of 3000+ companies
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="font-medium text-[#1e293b]">Placement Support</span>
                    </div>

                    <ul className="space-y-2 ml-4">
                      {placementSupport.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Benefits */}
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-600 text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                {/* Price */}
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <p className="text-gray-400 line-through text-lg">₹75,000/-</p>
                    <p className="text-3xl md:text-4xl font-bold text-[#f97316]">₹49,000/-</p>
                    <p className="text-sm text-gray-500">Non-refundable Upfront Fee</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#2563eb] font-bold">+</span>
                    <div>
                      <p className="text-xl font-bold text-[#1e293b]">12% of Annual CTC</p>
                      <p className="text-sm text-gray-500">Pay after you get a job</p>
                    </div>
                  </div>
                </div>

                {/* Scholarship Card */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-orange-600 font-semibold text-sm">
                        Additional Scholarships Up To
                      </p>
                      <p className="text-2xl font-bold text-[#f97316]">₹16,000/-</p>
                      <Link href="#demo-form" className="text-[#2563eb] text-sm hover:underline">
                        Book a Free Demo to know more. ↗
                      </Link>
                    </div>
                    <div className="text-4xl">💰</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* PRE-PAID CONTENT */
            <motion.div
              key="pre-paid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Pre-paid Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  {/* Left - What's included */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e293b] mb-4">
                      What's included ?
                    </h3>
                  </div>

                  {/* Middle - Features */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#2563eb] mb-3">
                      Everything in Postpaid
                    </h4>
                    <div className="flex items-start gap-2 mb-4">
                      <Plus className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600">
                          After you complete the course, if you don't get a job, the
                          amount paid will be refunded with a deduction
                        </p>
                        <Link href="#" className="text-[#2563eb] text-sm hover:underline">
                          (Terms and Conditions Apply).
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right - Price */}
                  <div className="text-right">
                    <p className="text-gray-400 line-through text-lg">₹1,50,000/-</p>
                    <p className="text-3xl md:text-4xl font-bold text-[#1e293b]">₹90,000/-</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-8">
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
                    Book Your Seat for 2000/-
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section for Post-paid */}
        {paymentType === "post-paid" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
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
                Book Your Seat for 2000/-
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
