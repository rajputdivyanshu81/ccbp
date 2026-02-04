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
      {/* Announcement Bar */}
      <div className="bg-[#1e293b] text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="text-xl">🎆</span>
          <span>
            <span className="font-semibold">NxtWave Intensive Offline Center</span> is starting in{" "}
            <span className="font-semibold">Hyderabad</span>.
          </span>
          <Link
            href="#"
            className="inline-flex items-center gap-1 font-semibold text-white hover:underline"
          >
            Check It Out
            <ArrowRight size={14} />
          </Link>
          <span className="text-xl">🎆</span>
        </div>
      </div>

      {/* Main Header */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight">
              <span className="text-[#2563eb] text-sm font-medium tracking-wide">
                NXT WAVE
              </span>
              <span className="text-[#1e293b] text-xl font-bold tracking-tight">
                INTENSIVE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-[#f97316] font-semibold text-sm hover:underline"
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
                  className="inline-flex items-center gap-1 text-[#f97316] font-semibold"
                >
                  Login
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
