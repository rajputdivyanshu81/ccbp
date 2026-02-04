"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Clock,
  Users,
  GraduationCap,
  Monitor,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Data Analyst",
  "QA Engineer",
  "Software Developer",
];

const features = [
  {
    icon: Clock,
    title: "5-8 Months",
    description: "Complete program duration",
  },
  {
    icon: Users,
    title: "Any Background",
    description: "No prior coding needed",
  },
  {
    icon: Monitor,
    title: "3h Classes + 3h Labs",
    description: "Daily online sessions",
  },
  {
    icon: GraduationCap,
    title: "Industry Certified",
    description: "NSDC recognized",
  },
];

const highlights = [
  "Learn from IIT/NIT Alumni Trainers",
  "24/7 Coding Labs Access",
  "Real-world Project Portfolio",
  "Placement Support up to 16 months",
];

export default function ProgramOverview() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-700 mb-4">
            <Sparkles size={14} className="mr-1" />
            Program Overview
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A Proven Program To Make You a
          </h2>
          <div className="h-16 flex items-center justify-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#007BFF] transition-all duration-500">
              {roles[currentRoleIndex]}
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-card transition-shadow"
            >
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Highlights */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-green-100 text-green-700 px-4 py-1.5">
                <Sparkles size={14} className="mr-1" />
                NEW Live Sessions
              </Badge>
              <Badge variant="outline" className="border-orange-300 text-orange-600">
                Mon - Fri
              </Badge>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Everything You Need to Start Your IT Career
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive program takes you from zero coding knowledge to
              becoming a job-ready professional. With live sessions, dedicated
              mentors, and placement support, we ensure your success.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-[#28A745] flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold px-8 rounded-xl group"
              asChild
            >
              <Link href="#demo-form">
                Book a Free Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right - Visual Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#007BFF]/5 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="space-y-4">
                {/* Timeline Steps */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fundamentals</h4>
                    <p className="text-sm text-gray-600">
                      2 months - Python, DSA, Problem Solving
                    </p>
                  </div>
                </div>

                <div className="w-0.5 h-8 bg-gray-200 ml-5" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Job Track</h4>
                    <p className="text-sm text-gray-600">
                      3-6 months - MERN/Java/QA/Data Analytics
                    </p>
                  </div>
                </div>

                <div className="w-0.5 h-8 bg-gray-200 ml-5" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#28A745] text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Placement</h4>
                    <p className="text-sm text-gray-600">
                      Up to 16 months of job support
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgency Banner */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-700 font-medium text-center">
                  ⚡ Fee increases from{" "}
                  <span className="font-bold">15th Feb 2026</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
