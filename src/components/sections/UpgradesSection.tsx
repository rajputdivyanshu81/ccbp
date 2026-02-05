"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const upgrades = [
  {
    id: 1,
    title: "Live Sessions (Monday to Friday)",
    description:
      "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
    icon: "🔴",
    badge: "LIVE",
  },
  {
    id: 2,
    title: "Dedicated Success Coach for Every Student",
    description:
      "To guide you and ensure a smooth learning journey.",
    icon: "👨‍💼",
  },
  {
    id: 3,
    title: "Placement Success Manager",
    description:
      "To give feedback on your interview performance and boost your confidence.",
    icon: "👨‍💻",
  },
  {
    id: 4,
    title: "Mega Offline Placement Drives",
    description: "Once in every 3 months.",
    icon: "🎯",
  },
  {
    id: 5,
    title: "AI-Powered Mock Interviews",
    description:
      "Practice with realistic mock interviews and get tailored feedback immediately.",
    icon: "🤖",
  },
  {
    id: 6,
    title: "Masterclasses by Industry Experts",
    description:
      "To keep you updated with the latest trends and industry-aligned.",
    icon: "🎓",
  },
  {
    id: 7,
    title: "Mentorship from Successful Seniors",
    description:
      "Alumni from 2000+ companies to make your placement preparation flawless.",
    icon: "👥",
  },
  {
    id: 8,
    title: "Effortless Revision with NxtBytes",
    description:
      "Where you master key concepts through engaging reels and quizzes.",
    icon: "📱",
  },
];

export default function UpgradesSection() {
  const [showAll, setShowAll] = useState(true);

  const displayedUpgrades = showAll ? upgrades : upgrades.slice(0, 4);

  return (
    <section id="curriculum" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative max-w-4xl mx-auto text-center mb-12">
          {/* NEW Badge - Positioned to the side */}
          <div className="absolute left-0 -top-4 md:left-[-30px] lg:left-[-60px]">
            <span className="bg-[#f97316] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              NEW
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1e293b] leading-tight mb-2">
            The All New Intensive 3.0 Upgrades to
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1e293b] leading-tight">
            <span className="relative">
              Supercharge Your Career
              <svg 
                className="absolute -bottom-3 left-0 w-full h-3 text-[#a855f7]/60" 
                viewBox="0 0 300 20" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path d="M5 15C50 12 150 5 295 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
        </div>

        {/* Upgrades Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {displayedUpgrades.map((upgrade) => (
              <div key={upgrade.id} className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{upgrade.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-[#1e293b]">
                      {upgrade.title}
                    </h3>
                    {upgrade.badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {upgrade.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {upgrade.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-[#2563eb] font-medium hover:underline"
          >
            {showAll ? "Hide All Upgrades" : "Show All Upgrades"}
            {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>
    </section>
  );
}
