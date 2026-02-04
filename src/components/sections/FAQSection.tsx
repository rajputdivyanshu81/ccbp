"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { faqs, faqCategories } from "@/lib/data/faq";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("training");

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            <HelpCircle size={14} className="mr-1" />
            Got Questions?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our program
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-[#007BFF] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="bg-gray-50 border border-gray-100 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@ccbp.in"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#007BFF] text-white font-medium rounded-xl hover:bg-[#0056b3] transition-colors"
            >
              Contact Support
            </a>
            <a
              href="#demo-form"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#007BFF] text-[#007BFF] font-medium rounded-xl hover:bg-[#007BFF] hover:text-white transition-colors"
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
