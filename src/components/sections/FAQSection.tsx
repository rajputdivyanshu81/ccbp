"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs, faqCategories } from "@/lib/data/faq";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("training");
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-4">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenId(null);
                  }}
                  className={`relative pl-6 py-2 text-left transition-all group ${
                    activeCategory === category.id
                      ? "text-[#7c3aed] font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {/* Active Indicator Line */}
                  <AnimatePresence>
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#7c3aed]"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="text-lg">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  {filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                      >
                        <span className="text-[#1e293b] font-medium text-lg leading-snug pr-8 group-hover:text-[#7c3aed] transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                            openId === faq.id ? "rotate-180 text-[#7c3aed]" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {openId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-[15px]">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
