"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const roles = [
  "Full Stack Developer",
  "QA Engineer",
  "Data Analyst",
  "Backend Developer",
];

const testimonials = [
  {
    name: "Surya Vamsi",
    background: "Mechanical Engineering",
    salary: "₹9 LPA",
    company: "Ascend Academy",
  },
  {
    name: "Priya Sharma",
    background: "Civil Engineering",
    salary: "₹7.5 LPA",
    company: "TCS",
  },
  {
    name: "Rahul Kumar",
    background: "Electronics",
    salary: "₹8 LPA",
    company: "Infosys",
  },
];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* NEW Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="bg-[#f97316] text-white text-xs font-bold px-2.5 py-1 rounded">
                NEW
              </span>
              <span className="text-gray-700 text-sm">
                Intensive 3.0 to 3x your placement chances
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e293b] leading-tight">
                A Proven Program
                <br />
                To Make You a
              </h1>
              <div className="relative h-14">
                <span
                  className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2563eb] animate-fade-in"
                  key={currentRoleIndex}
                  style={{
                    borderBottom: "3px solid #a855f7",
                    paddingBottom: "4px",
                  }}
                >
                  {roles[currentRoleIndex]}
                </span>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="pt-4">
              <div className="text-gray-400 text-5xl font-serif leading-none mb-2">
                "
              </div>
              <div
                className="transition-opacity duration-500"
                key={currentTestimonialIndex}
              >
                <p className="text-gray-700 text-lg mb-4">
                  {testimonials[currentTestimonialIndex].background} to{" "}
                  <span className="font-semibold text-[#1e293b]">
                    {testimonials[currentTestimonialIndex].salary} Software Job
                  </span>
                </p>

                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[currentTestimonialIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e293b] text-sm">
                      {testimonials[currentTestimonialIndex].name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonials[currentTestimonialIndex].background}
                    </p>
                  </div>
                  <div className="ml-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">🏢</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {testimonials[currentTestimonialIndex].company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonialIndex
                        ? "bg-[#1e293b] w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="relative">
            {/* Decorative curved shape */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#0d9488] to-[#1e293b] rounded-full opacity-90 -z-10 hidden lg:block" />

            {/* Form Card */}
            <div
              id="demo-form"
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative z-10"
            >
              {/* Form Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1e293b]">
                    Book a Live Demo
                  </h2>
                  <p className="text-2xl font-bold text-[#1e293b]">
                    For <span className="text-[#f97316]">Free</span> !
                  </p>
                </div>
                {/* Illustration placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mobile Number (WhatsApp Number)
                  </label>
                  <div className="flex">
                    <div className="flex items-center gap-1 px-3 py-3 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50 text-sm text-gray-600">
                      <span>IN</span>
                      <span className="text-gray-400">▼</span>
                      <span className="text-gray-400">|</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter Mobile Number"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-r-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    We assure you that we practice a strict &apos;NO-SPAM&apos; policy
                  </p>
                </div>

                {/* Highest Qualification */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Highest Qualification
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:0.65rem]">
                    <option>Select Highest Qualification</option>
                    <option>B.Tech / B.E.</option>
                    <option>BCA / MCA</option>
                    <option>BSc / MSc</option>
                    <option>B.Com / M.Com</option>
                    <option>MBA</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Native State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Native State
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:0.65rem]">
                    <option>Enter your State</option>
                    <option>Andhra Pradesh</option>
                    <option>Telangana</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Terms */}
                <p className="text-xs text-gray-500">
                  By proceeding further, I agree to the{" "}
                  <Link href="#" className="text-[#2563eb] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#2563eb] hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  of NxtWave
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3.5 rounded-lg transition-colors"
                >
                  Book My Demo
                </button>
              </form>

              {/* Product of NxtWave */}
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
                <span>Product of</span>
                <span className="font-bold text-[#1e293b]">
                  NXT
                  <span className="text-[#f97316]">WAVE</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
