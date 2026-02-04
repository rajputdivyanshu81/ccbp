"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  ExternalLink,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { jobTracks, fundamentalsCourses } from "@/lib/data/job-tracks";

export default function GettingStarted() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            <Sparkles size={14} className="mr-1" />
            Your Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Ready for Your IT Career in 3 Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured approach takes you from zero coding knowledge to a
            job-ready professional
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 md:gap-4 bg-gray-100 rounded-full p-1">
            {[1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all ${
                  activeStep === step
                    ? "bg-[#007BFF] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Step {step}
              </button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-5xl mx-auto">
          {/* Step 1: Fundamentals */}
          {activeStep === 1 && (
            <div className="animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Fundamentals
                      </h3>
                      <p className="text-gray-600">Build your foundation</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <Badge className="bg-purple-100 text-purple-700">
                      <Clock size={14} className="mr-1" />2 Months
                    </Badge>
                    <Badge variant="outline">Self-paced Learning</Badge>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Master programming fundamentals with Python, data
                    structures, and problem-solving techniques. This phase sets
                    the foundation for your tech career.
                  </p>

                  <div className="space-y-3 mb-6">
                    {fundamentalsCourses.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-[#28A745] flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="font-medium" asChild>
                    <Link href="#" target="_blank">
                      View Curriculum
                      <ExternalLink size={14} className="ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <BookOpen className="w-8 h-8 text-[#007BFF]" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Interactive Learning
                        </p>
                        <p className="text-sm text-gray-600">
                          Learn by doing with hands-on exercises
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <Users className="w-8 h-8 text-[#28A745]" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Doubt Support
                        </p>
                        <p className="text-sm text-gray-600">
                          Live sessions 11 AM - 8 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <Clock className="w-8 h-8 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          24/7 Coding Labs
                        </p>
                        <p className="text-sm text-gray-600">
                          Practice anytime, anywhere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Job Tracks */}
          {activeStep === 2 && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Choose Your Job Track
                  </h3>
                </div>
                <p className="text-gray-600">
                  Select the career path that matches your interests
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {jobTracks.map((track) => (
                  <Card
                    key={track.id}
                    className={`p-6 border-2 transition-all hover:shadow-card-hover ${
                      track.status === "seats-filled"
                        ? "border-gray-200 opacity-75"
                        : track.status === "filling-fast"
                        ? "border-orange-200"
                        : "border-gray-100 hover:border-[#007BFF]"
                    }`}
                  >
                    {/* Status Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        {track.title}
                      </h4>
                      {track.status === "filling-fast" && (
                        <Badge className="bg-orange-100 text-orange-700">
                          <AlertCircle size={12} className="mr-1" />
                          Filling Fast
                        </Badge>
                      )}
                      {track.status === "seats-filled" && (
                        <Badge className="bg-gray-100 text-gray-600">
                          Seats Filled
                        </Badge>
                      )}
                    </div>

                    {/* Track Details */}
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline">
                        <Clock size={12} className="mr-1" />
                        {track.duration}
                      </Badge>
                      <span className="text-[#28A745] font-semibold">
                        {track.salaryRange}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {track.description}
                    </p>

                    {/* Courses List */}
                    <div className="space-y-2 mb-4">
                      {track.courses.slice(0, 3).map((course, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle size={14} className="text-[#28A745]" />
                          <span>{course}</span>
                        </div>
                      ))}
                      {track.courses.length > 3 && (
                        <p className="text-sm text-[#007BFF]">
                          +{track.courses.length - 3} more courses
                        </p>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      disabled={track.status === "seats-filled"}
                      asChild
                    >
                      <Link href="#">
                        View Curriculum
                        <ExternalLink size={14} className="ml-2" />
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Placement */}
          {activeStep === 3 && (
            <div className="animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#28A745] text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Placement Assistance
                      </h3>
                      <p className="text-gray-600">
                        Your success is our priority
                      </p>
                    </div>
                  </div>

                  <Badge className="bg-green-100 text-green-700 mb-6">
                    <Clock size={14} className="mr-1" />
                    Up to 16 Months Support
                  </Badge>

                  <p className="text-gray-600 mb-6">
                    Our dedicated placement team works with you until you land
                    your dream job. From resume building to interview
                    preparation, we&apos;ve got you covered.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Aptitude Training",
                      "Soft Skills Training",
                      "Resume Preparation",
                      "AI Mock Interviews",
                      "Mock Interviews",
                      "Interview Scheduling",
                      "Mega Placement Drives",
                      "Salary Negotiation",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle size={14} className="text-[#28A745]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    All Free Add-ons Included
                  </h4>
                  <div className="space-y-4">
                    {[
                      "300+ Senior Interview Experiences",
                      "Access to Placement Portal",
                      "Company-specific Preparation",
                      "Career Counseling Sessions",
                    ].map((addon, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#28A745]/10 flex items-center justify-center">
                          <Sparkles size={16} className="text-[#28A745]" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {addon}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            size="lg"
            className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold px-8 rounded-xl"
            asChild
          >
            <Link href="#pricing">Enroll Now</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white font-semibold px-8 rounded-xl"
            asChild
          >
            <Link href="#demo-form">Book a Free Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
