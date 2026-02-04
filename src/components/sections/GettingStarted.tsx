"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform for the progress line
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-16">
          {/* Left Side - Sticky */}
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex flex-col justify-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">
                Get Ready for Your
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-8">
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
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
                <span className="text-gray-700">Batch starts today</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
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

              {/* Curved Connector Line - Goes down then curves up/outward to the right */}
              <div className="hidden lg:block relative mt-8">
                <svg
                  viewBox="0 0 120 200"
                  className="w-32 h-48"
                  fill="none"
                >
                  {/* Background path (gray) - goes down then curves up to the right */}
                  <path
                    d="M 10 0 L 10 120 Q 10 180 60 180 Q 110 180 120 140"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Animated progress path (blue) */}
                  <motion.path
                    d="M 10 0 L 10 120 Q 10 180 60 180 Q 110 180 120 140"
                    stroke="#2563eb"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    style={{
                      pathLength: scrollYProgress,
                    }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Scrolling Steps with Connected Line */}
          <div className="py-16 lg:py-24 relative">
            {/* Vertical Line Connecting Steps */}
            <div className="absolute left-5 top-24 bottom-24 w-0.5 bg-gray-200 hidden lg:block">
              {/* Animated Progress Line */}
              <motion.div
                className="absolute left-0 top-0 w-full bg-[#2563eb] origin-top"
                style={{ scaleY: lineScaleY }}
              />
            </div>

            <div className="space-y-20 lg:space-y-32">
              {/* Step 1: Fundamentals */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                {/* Step Number - Connected to line */}
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="relative z-10 w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold shadow-lg flex-shrink-0"
                  >
                    1
                  </motion.div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-[#1e293b]">
                      Fundamentals
                    </h3>

                    <div className="space-y-3 text-gray-600">
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
                    <div className="flex gap-4">
                      {[
                        { name: "HTML", icon: "🌐" },
                        { name: "CSS", icon: "🎨" },
                        { name: "Python", icon: "🐍" },
                        { name: "SQL", icon: "🗄️" },
                      ].map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="flex flex-col items-center gap-1"
                        >
                          <div className="w-14 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center text-2xl hover:border-blue-400 transition-colors bg-white shadow-sm">
                            {tech.icon}
                          </div>
                          <span className="text-xs text-gray-600">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <FileText size={16} className="text-gray-400" />
                      <span>Fundamentals Exam</span>
                    </div>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-[#2563eb] font-medium hover:underline"
                    >
                      View Curriculum
                      <ChevronRight size={16} />
                    </Link>

                    {/* Illustration */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="pt-4"
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 max-w-md shadow-lg"
                      >
                        <div className="flex items-end justify-center gap-4">
                          <div className="text-6xl">👨‍💻</div>
                          <div className="bg-white rounded-lg shadow-lg p-3 relative">
                            <div className="text-xs font-semibold text-gray-600 mb-1">
                              ONLINE CLASS
                            </div>
                            <div className="bg-[#2563eb] text-white text-xs font-bold px-3 py-1.5 rounded">
                              CERTIFICATION
                            </div>
                            <motion.div
                              animate={{ rotate: [0, 15, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -top-4 -right-4 text-2xl"
                            >
                              🎓
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Choose Job Track */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="relative z-10 w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold shadow-lg flex-shrink-0"
                  >
                    2
                  </motion.div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-[#1e293b]">
                      Choose your Job Track
                    </h3>

                    <p className="text-gray-600">
                      Based on your Fundamentals exam score, we&apos;ll also recommend
                      you a suitable Job Track.
                    </p>

                    {/* Job Track Cards Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {jobTracks.map((track, index) => (
                        <motion.div
                          key={track.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15, duration: 0.5 }}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className={`border rounded-xl p-4 bg-white ${
                            track.status === "filled"
                              ? "border-gray-200"
                              : "border-gray-200 hover:border-blue-300 hover:shadow-xl"
                          } transition-all duration-300`}
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
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Placement Assistance */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="relative z-10 w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold shadow-lg flex-shrink-0"
                  >
                    3
                  </motion.div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-[#1e293b]">
                      Placement Assistance for Your Job
                    </h3>

                    <p className="text-gray-600">
                      Up to 16 Months from the date of joining
                    </p>

                    <h4 className="font-semibold text-[#1e293b]">Free Add-ons:</h4>

                    {/* Add-ons Grid */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {freeAddons.map((addon, index) => (
                        <motion.div
                          key={addon.title}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors cursor-default"
                        >
                          <span className="text-xl">{addon.icon}</span>
                          <span className="text-sm text-gray-700">{addon.title}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Placement Dashboard Visual */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="pt-8"
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                      >
                        {/* Background gradient shape */}
                        <div className="absolute -right-8 -top-8 w-48 h-48 bg-gradient-to-br from-orange-200/50 to-yellow-200/50 rounded-full blur-2xl" />
                        
                        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-5 max-w-sm">
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-bold text-[#1e293b]">
                              Placement Dashboard
                            </span>
                            <div className="flex -space-x-2">
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 border-2 border-white shadow-md"
                              />
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 border-2 border-white shadow-md"
                              />
                            </div>
                          </div>

                          {/* Job Cards */}
                          <div className="space-y-2">
                            {[
                              { company: "TCS", logo: "🔵", role: "Software Engineer", status: "APPLIED", color: "blue" },
                              { company: "Keka", logo: "🟢", role: "Data Analyst", status: "SHORTLISTED", color: "green" },
                              { company: "Infosys", logo: "🔷", role: "Data Analyst", status: "SHORTLISTED", color: "green" },
                            ].map((job, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.15 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm shadow-sm">
                                    {job.logo}
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-[#1e293b]">
                                      {job.company}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Role: {job.role}
                                    </p>
                                  </div>
                                </div>
                                <motion.span
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                                    job.color === "blue"
                                      ? "bg-blue-100 text-blue-600"
                                      : "bg-green-100 text-green-600"
                                  }`}
                                >
                                  + {job.status}
                                </motion.span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Floating sidebar indicator */}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full h-24"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
