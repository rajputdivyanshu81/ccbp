import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const footerLinks = {
  programs: [
    { label: "NxtWave Intensive", href: "/intensive" },
    { label: "MERN Full Stack", href: "#" },
    { label: "Java Full Stack", href: "#" },
    { label: "Data Analytics", href: "#" },
    { label: "QA & Testing", href: "#" },
  ],
  resources: [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Reviews", href: "#reviews" },
    { label: "Success Stories", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQs", href: "#faqs" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#007BFF]">Nxt</span>
              <span className="text-2xl font-bold text-[#ff6b35]">Wave</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              NxtWave is building India&apos;s largest tech workforce through industry-aligned programs that make students job-ready.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-[#007BFF]" />
                <span>support@ccbp.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-[#007BFF]" />
                <span>+91 9999999999</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin size={16} className="text-[#007BFF] mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-[#007BFF] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NxtWave. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">
              Official Partner of NSDC, Govt. of India
            </span>
          </div>
        </div>
      </div>

      {/* Chat Widget Placeholder */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="p-4 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Chat with us"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </footer>
  );
}
