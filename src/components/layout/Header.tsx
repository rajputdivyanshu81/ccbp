"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Curriculum", href: "#curriculum" },
  { name: "Job Support", href: "#job-support" },
  { name: "Reviews", href: "#reviews" },
  { name: "Fee", href: "#pricing" },
  { name: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Main Header */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-2 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/690d6fab0cae49e13e2d5ef9_Group%201000005139.png" 
                alt="NxtWave Intensive" 
                className="h-14 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-[#007bff] font-semibold text-sm hover:underline"
              >
                Login
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[#007bff] font-semibold"
                >
                  Login
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Announcement Bar */}
      <div className="bg-[#0a1324] text-white py-1.5 px-4 border-b border-white/5">
        <div className="container mx-auto flex items-center justify-center gap-3 md:gap-6 text-[13px] md:text-lg tracking-wide">
          <img 
            src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/693301165bf6189393f060d8_Fireworks%202-min.png" 
            alt="celebration" 
            className="h-14 w-auto hidden sm:block"
          />
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎉</span>
            <span className="text-[#dcf9a6] font-medium text-center">
              NxtWave Intensive Offline Center is starting in Hyderabad.
            </span>
          </div>
          <Link
            href="#"
            className="flex items-center gap-1.5 font-semibold text-white hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Check It Out
            <span className="text-lg leading-none mt-[-2px]">↗</span>
          </Link>
          <img 
            src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/693301165bf6189393f060d8_Fireworks%202-min.png" 
            alt="celebration" 
            className="h-14 w-auto hidden sm:block"
          />
        </div>
      </div>

    </header>
  );
}
