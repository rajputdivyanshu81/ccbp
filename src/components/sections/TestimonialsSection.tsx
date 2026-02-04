"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", label: "All" },
  { id: "non-it-branch", label: "Non IT Branch to IT Job" },
  { id: "non-engineering", label: "Non-Engineering Degree" },
  { id: "career-gap", label: "Career Gap" },
  { id: "top-mncs", label: "Got Into Top MNCs" },
  { id: "non-it-job", label: "Non IT job to IT Job" },
];

const testimonials = [
  {
    id: 1,
    name: "Bairy Vishnu Vardhan",
    company: "LTIMindtree",
    category: "non-it-branch",
    avatar: "B",
  },
  {
    id: 2,
    name: "Kulkarni Rohith Kumar",
    company: "Cognizant",
    category: "non-engineering",
    avatar: "K",
  },
  {
    id: 3,
    name: "Sai Ram Polisetty",
    company: "TCS",
    category: "top-mncs",
    avatar: "S",
  },
  {
    id: 4,
    name: "Priya Sharma",
    company: "Infosys",
    category: "career-gap",
    avatar: "P",
  },
  {
    id: 5,
    name: "Rahul Kumar",
    company: "Wipro",
    category: "non-it-job",
    avatar: "R",
  },
  {
    id: 6,
    name: "Sneha Reddy",
    company: "Accenture",
    category: "non-it-branch",
    avatar: "S",
  },
];

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section id="reviews" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
            Your Seniors Got Placed. It&apos;s{" "}
            <span
              style={{
                borderBottom: "3px solid #a855f7",
                paddingBottom: "4px",
              }}
            >
              Your Turn
            </span>{" "}
            Now!
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === category.id
                  ? "bg-[#2563eb] text-white border-[#2563eb]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#f0f9ff] rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>

                {/* Company Logo */}
                <div className="flex items-center gap-2">
                  <div className="text-[#2563eb] text-xs font-medium">
                    ✓ {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Experience indicator */}
              <div className="flex items-center gap-1 mb-4">
                <span className="text-gray-400 text-xl">👥</span>
              </div>

              {/* Name and LinkedIn */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#1e293b]">
                  {testimonial.name}
                </h3>
                <Link
                  href="#"
                  className="text-[#0077b5] hover:opacity-80 transition-opacity"
                  aria-label={`${testimonial.name}'s LinkedIn`}
                >
                  <Linkedin size={20} fill="#0077b5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
