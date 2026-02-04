"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Monitor, FileText, ChevronRight, CheckCircle } from "lucide-react";

const jobTracks = [
  {
    id: 1,
    option: "OPTION 1",
    title: "MERN Full Stack",
    duration: "6 Months",
    salary: "3 LPA - 12 LPA",
    location: "In India",
    hasProject: true,
    techs: ["MongoDB", "Express JS", "React JS", "Node JS"],
    techIcons: ["🍃", "ex", "⚛️", "🟢"],
    status: "available",
  },
  {
    id: 2,
    option: "OPTION 2",
    title: "Java Full Stack",
    duration: "6 Months",
    salary: "3 LPA - 12 LPA",
    location: "In India",
    hasProject: true,
    techs: ["React JS", "Java", "Spring"],
    techIcons: ["⚛️", "☕", "🌱"],
    status: "available",
  },
  {
    id: 3,
    option: "OPTION 3",
    title: "QA/Automation Testing",
    duration: "3 Months",
    salary: "2 LPA - 7 LPA",
    location: "In India",
    hasProject: false,
    techs: [],
    techIcons: [],
    status: "filled",
    nextBatch: "01 Jul 2026",
  },
  {
    id: 4,
    option: "OPTION 4",
    title: "Data Analytics",
    duration: "3 Months",
    salary: "2 LPA - 7 LPA",
    location: "In India",
    hasProject: false,
    techs: ["Power BI", "Tableau"],
    techIcons: ["📊", "📈"],
    status: "filled",
    nextBatch: "01 Jul 2026",
  },
];

const freeAddons = [
  { icon: "📝", title: "Aptitude Training" },
  { icon: "🗣️", title: "Soft Skills Training" },
  { icon: "📄", title: "Resume Preparation" },
  { icon: "🤖", title: "AI-Powered Mock Interviews" },
  { icon: "👥", title: "Mock Interviews by Tech and HR Panels" },
  { icon: "📅", title: "Scheduling Interviews" },
  { icon: "📚", title: "Access to 300+ Senior Interview Experiences" },
  { icon: "🏢", title: "Access to Placement Portal" },
  { icon: "🎯", title: "Mega Offline Placement Drives" },
  { icon: "💰", title: "Negotiation with companies for higher salaries" },
];

export default function GettingStarted() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Sticky on Desktop */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
              Get Ready for Your
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
              IT Career in{" "}
              <span
                style={{
                  borderBottom: "3px solid #a855f7",
                  paddingBottom: "4px",
                }}
              >
                3 Steps
              </span>
            </h2>

            {/* Batch Info */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
              <span className="text-gray-700">Batch starts today</span>
            </div>

            {/* CTAs */}
            <div className="flex gap-4">
              <Link
                href="#pricing"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Enroll Now
              </Link>
              <Link
                href="#demo-form"
                className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Book a Free Demo
              </Link>
            </div>
          </div>

          {/* Right Side - Vertical Scroll Steps */}
          <div className="space-y-16">
            {/* Step 1: Fundamentals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b]">
                  Fundamentals
                </h3>
              </div>

              <div className="space-y-3 text-gray-600 pl-12">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-400" />
                  <span>Duration: </span>
                  <span className="font-semibold text-[#1e293b]">2 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor size={16} className="text-gray-400" />
                  <span>3 Hours Classes and 3 Hours Labs per day</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-gray-400" />
                  <span>Courses Include</span>
                </div>
              </div>

              {/* Tech Icons */}
              <div className="flex gap-4 pl-12">
                {[
                  { name: "HTML", icon: "🌐" },
                  { name: "CSS", icon: "🎨" },
                  { name: "Python", icon: "🐍" },
                  { name: "SQL", icon: "🗄️" },
                ].map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-14 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center text-2xl hover:border-blue-400 transition-colors bg-white shadow-sm">
                      {tech.icon}
                    </div>
                    <span className="text-xs text-gray-600">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-600 pl-12">
                <FileText size={16} className="text-gray-400" />
                <span>Fundamentals Exam</span>
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-1 text-[#2563eb] font-medium hover:underline pl-12"
              >
                View Curriculum
                <ChevronRight size={16} />
              </Link>

              {/* Illustration */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="pl-12 pt-4"
              >
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 max-w-md">
                  {/* Person at computer illustration */}
                  <div className="flex items-end justify-center gap-4">
                    <div className="text-6xl">👨‍💻</div>
                    <div className="bg-white rounded-lg shadow-lg p-3 relative">
                      <div className="text-xs font-semibold text-gray-600 mb-1">
                        ONLINE CLASS
                      </div>
                      <div className="bg-[#2563eb] text-white text-xs font-bold px-3 py-1.5 rounded">
                        CERTIFICATION
                      </div>
                      {/* Floating graduation cap */}
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-4 -right-4 text-2xl"
                      >
                        🎓
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 2: Choose Job Track */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b]">
                  Choose your Job Track
                </h3>
              </div>

              <p className="text-gray-600 pl-12">
                Based on your Fundamentals exam score, we&apos;ll also recommend
                you a suitable Job Track.
              </p>

              {/* Job Track Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pl-12">
                {jobTracks.map((track, index) => (
                  <motion.div
                    key={track.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`border rounded-xl p-4 bg-white ${
                      track.status === "filled"
                        ? "border-gray-200"
                        : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
                    } transition-all`}
                  >
                    <span className="inline-block bg-[#10b981] text-white text-xs font-bold px-2 py-0.5 rounded mb-2">
                      {track.option}
                    </span>
                    <h4 className="font-bold text-[#1e293b] mb-3">
                      {track.title}
                    </h4>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>Duration: {track.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>💰</span>
                        <span>
                          Fresher Salaries:{" "}
                          <span className="font-semibold text-[#1e293b]">
                            {track.salary}
                          </span>
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{track.location}</p>
                    </div>

                    {track.hasProject && (
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                        <span>🔧</span>
                        <span>Real-time project</span>
                      </div>
                    )}

                    {/* Tech Icons */}
                    {track.techs.length > 0 && (
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {track.techs.map((tech, i) => (
                          <div
                            key={tech}
                            className="text-xs text-gray-500 flex items-center gap-1"
                          >
                            <span>{track.techIcons[i]}</span>
                            <span className="hidden sm:inline">{tech}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-[#2563eb] text-sm font-medium mt-3 hover:underline"
                    >
                      View Curriculum
                      <ChevronRight size={14} />
                    </Link>

                    {/* Status */}
                    <div className="mt-3">
                      {track.status === "available" ? (
                        <div className="flex items-center gap-1 text-[#10b981] text-sm">
                          <CheckCircle size={14} />
                          <span>Seats Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-orange-500 text-xs">
                          <span>🔒</span>
                          <span>
                            Seats filled. Next batch starts on {track.nextBatch}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Placement Assistance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b]">
                  Placement Assistance for Your Job
                </h3>
              </div>

              <p className="text-gray-600 pl-12">
                Up to 16 Months from the date of joining
              </p>

              <h4 className="font-semibold text-[#1e293b] pl-12">Free Add-ons:</h4>

              {/* Add-ons Grid */}
              <div className="grid sm:grid-cols-2 gap-3 pl-12">
                {freeAddons.map((addon, index) => (
                  <motion.div
                    key={addon.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="text-xl">{addon.icon}</span>
                    <span className="text-sm text-gray-700">{addon.title}</span>
                  </motion.div>
                ))}
              </div>

              {/* Placement Dashboard Visual */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="pl-12 pt-4"
              >
                <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-4 max-w-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-[#1e293b]">
                      Placement Dashboard
                    </span>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 border-2 border-white" />
                    </div>
                  </div>

                  {/* Job Cards */}
                  <div className="space-y-2">
                    {[
                      { company: "TCS", role: "Software Engineer", status: "APPLIED", color: "blue" },
                      { company: "Keka", role: "Data Analyst", status: "SHORTLISTED", color: "green" },
                      { company: "Infosys", role: "Data Analyst", status: "SHORTLISTED", color: "green" },
                    ].map((job, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">
                            🏢
                          </div>
                          <div>
                            <p className="text-xs font-medium">{job.company}</p>
                            <p className="text-xs text-gray-500">
                              Role: {job.role}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${
                            job.color === "blue"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          + {job.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
