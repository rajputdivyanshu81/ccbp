"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail,
  MapPin
} from "lucide-react";

const quickLinks = {
  col1: [
    { label: "Home", href: "/" },
    { label: "Academy", href: "#" },
    { label: "Intensive", href: "#" },
    { label: "Hire with us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Our Tech", href: "#" },
    { label: "NxtWave Careers", href: "#" },
  ],
  col2: [
    { label: "About Us", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Community", href: "#" },
    { label: "4.0 Champions", href: "#" },
    { label: "NxtWave'23 Review", href: "#" },
    { label: "Python Tutorial", href: "#" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Grievance Redressal", href: "#" },
  { label: "Corporate Social Responsibility Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Corporate Information", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Vision and Values", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-[#94a3b8] pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Reach Us */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <img 
                src="https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/690d6fab0cae49e13e2d5ef9_Group%201000005139.png" 
                alt="NxtWave Intensive" 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Reach Us</h3>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/919390111761" 
                  target="_blank" 
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                >
                  <div className="bg-[#22c55e] p-1 rounded-md mt-0.5 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white/90">+919390111761</p>
                    <p className="text-xs text-slate-500">(WhatsApp only)</p>
                  </div>
                </a>
                <a 
                  href="mailto:support@nxtwave.tech" 
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="bg-[#3b82f6] p-1 rounded-md group-hover:scale-110 transition-transform">
                    <Mail size={16} className="text-white" />
                  </div>
                  <p className="font-semibold text-white/90">support@nxtwave.tech</p>
                </a>
              </div>
            </div>

            <Link href="#" className="inline-block text-[#3b82f6] text-sm font-bold underline hover:no-underline underline-offset-4">
              Hey AI, learn about us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-8">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
                {quickLinks.col1.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    className="block text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {quickLinks.col2.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    className="block text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Methods & Address */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Payment Methods</h3>
              <div className="grid grid-cols-3 gap-3 max-w-[240px]">
                <div className="bg-white rounded-md p-1 flex items-center justify-center">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" width={40} height={20} className="object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="bg-white rounded-md p-1 flex items-center justify-center">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard" width={40} height={20} className="object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="bg-white rounded-md p-1 flex items-center justify-center">
                   <div className="flex gap-1">
                     <div className="w-4 h-4 rounded-full bg-red-600"></div>
                     <div className="w-4 h-4 rounded-full bg-blue-600 -ml-2 opacity-80"></div>
                   </div>
                </div>
                <div className="bg-white rounded-md p-1 flex items-center justify-center">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png" alt="Razorpay" width={40} height={20} className="object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="bg-white rounded-md p-1 flex items-center justify-center">
                   <span className="text-black font-black text-[10px] tracking-tighter">UPI</span>
                </div>
                <div className="bg-white rounded-md p-1 flex items-center justify-center">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1200px-RuPay.svg.png" alt="RuPay" width={40} height={20} className="object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-slate-500 mt-1 flex-shrink-0" />
              <p className="text-xs leading-relaxed text-slate-400">
                NxtWave, WeWork Rajapushpa Summit, Nanakramguda Rd, Financial District, Manikonda Jagir, Telangana 500032
              </p>
            </div>
          </div>
        </div>

        {/* Socials & Legal Links - Moved Here */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col lg:flex-row justify-between gap-8">
          {/* Socials */}
          <div className="space-y-8 lg:w-1/4">
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Youtube size={20} /></Link>
            </div>
          </div>

          {/* Legal Links Column */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
             {legalLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
             ))}
          </div>
        </div>

        {/* Course Tracks Section */}
        <div className="mt-16 pt-12 space-y-10 mb-16">
          <div className="space-y-1">
            <h3 className="text-white font-bold text-lg leading-tight">Course Tracks</h3>
            <p className="text-sm font-semibold text-slate-400">Software Training Institute</p>
          </div>

          {/* MERN Stack */}
          <div className="space-y-3">
            <h4 className="text-slate-300 font-bold text-sm">MERN Stack Developer course</h4>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2 text-sm text-[#576d8a]">
              {["Hyderabad", "Bangalore", "Mumbai", "Pune", "Chennai"].map((loc, idx, arr) => (
                <div key={loc} className="flex items-center gap-2.5">
                  <Link href="#" className="hover:text-white transition-colors">{loc}</Link>
                  {idx < arr.length - 1 && <span className="text-[#1e293b] font-light">|</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Full Stack */}
          <div className="space-y-3">
            <h4 className="text-slate-300 font-bold text-sm">Full Stack Developer course</h4>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2 text-sm text-[#576d8a]">
              {[
                "Hyderabad", "Bangalore", "Pune", "Mumbai", "Delhi", "Ahmedabad", "Coimbatore", "Chennai", "Chandigarh", "Noida", "Kolkata", "Kochi", 
                "Bhubaneswar", "Visakhapatnam", "Vijayawada", "Gurgaon", "Jaipur", "Indore", "Kanpur", "Nagpur", "Madurai", "Bhopal", "Trivandrum", 
                "Guwahati", "Patna", "Aurangabad", "Trichy", "Salem", "Thane", "Kerala", "Mysore", "Telugu", "Tamil", "Hindi"
              ].map((loc, idx, arr) => (
                <div key={loc} className="flex items-center gap-2.5">
                  <Link href="#" className="hover:text-white transition-colors">{loc}</Link>
                  {idx < arr.length - 1 && <span className="text-[#1e293b] font-light">|</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Data Analytics */}
          <div className="space-y-3">
            <h4 className="text-slate-300 font-bold text-sm">Data Analytics course</h4>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2 text-sm text-[#576d8a]">
              {[
                "Hyderabad", "Bangalore", "Pune", "Mumbai", "Delhi", "Chennai", "Kolkata", "Chandigarh", "Ahmedabad", "Coimbatore", "Gurgaon", "Noida", 
                "Kerala", "Nagpur", "Indore", "Jaipur", "Lucknow", "Thane", "Bhopal", "Dehradun", "Bhubaneswar", "Mysore", "Vadodara", "Kanpur", 
                "Trivandrum", "Surat", "Nashik", "Madurai", "Patna", "Aurangabad", "Ghaziabad", "Meerut", "Guwahati", "Kolhapur", "Kochi", "Trichy", 
                "Telugu", "Tamil", "Hindi"
              ].map((loc, idx, arr) => (
                <div key={loc} className="flex items-center gap-2.5">
                  <Link href="#" className="hover:text-white transition-colors">{loc}</Link>
                  {idx < arr.length - 1 && <span className="text-[#1e293b] font-light">|</span>}
                </div>
              ))}
            </div>
          </div>

          {/* QA Testing */}
          <div className="space-y-3">
            <h4 className="text-slate-300 font-bold text-sm">QA / Automation Testing course</h4>
            <div className="flex flex-wrap gap-x-2.5 gap-y-2 text-sm text-[#576d8a]">
              {["Bangalore", "Hyderabad", "Chennai", "Pune", "Coimbatore", "Noida", "Telugu", "Tamil", "Hindi"].map((loc, idx, arr) => (
                <div key={loc} className="flex items-center gap-2.5">
                  <Link href="#" className="hover:text-white transition-colors">{loc}</Link>
                  {idx < arr.length - 1 && <span className="text-[#1e293b] font-light">|</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
