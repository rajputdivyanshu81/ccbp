import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, TrendingUp, Quote, ExternalLink } from "lucide-react";

const hiringCompanies = [
  "Infosys",
  "Wipro",
  "TCS",
  "HCL",
  "Tech Mahindra",
  "Cognizant",
  "Accenture",
  "Capgemini",
  "Mindtree",
  "Mphasis",
  "L&T Infotech",
  "Persistent",
];

const hrTestimonials = [
  {
    quote:
      "NxtWave students come prepared with practical skills. They're job-ready from day one.",
    name: "HR Manager",
    company: "Tech Startup",
  },
  {
    quote:
      "The quality of candidates from NxtWave is consistently high. We're happy with our hiring experience.",
    name: "Talent Acquisition Lead",
    company: "IT Services Company",
  },
];

export default function TrustedBySection() {
  return (
    <section id="job-support" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-700 mb-4">
            <Building2 size={14} className="mr-1" />
            Trusted by Industry
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            2000+ Companies Hired NxtWave Learners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, our learners are making
            their mark across the industry
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
            <div className="text-3xl md:text-4xl font-bold text-[#007BFF] mb-2">
              2000+
            </div>
            <div className="text-sm text-gray-600">Companies Hired</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
            <div className="text-3xl md:text-4xl font-bold text-[#28A745] mb-2">
              ₹38 LPA
            </div>
            <div className="text-sm text-gray-600">Highest Package</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              100+
            </div>
            <div className="text-sm text-gray-600">Monthly Recruiters</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              ₹4.5 LPA
            </div>
            <div className="text-sm text-gray-600">Average Package</div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Our Hiring Partners
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {hiringCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 flex items-center justify-center hover:bg-white hover:shadow-card transition-all"
              >
                <span className="text-sm font-medium text-gray-600">
                  {company}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="link" className="text-[#007BFF]" asChild>
              <Link href="#" target="_blank">
                View All Companies
                <ExternalLink size={14} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* HR Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Hear from Our Hiring Partners
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hrTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100"
              >
                <Quote className="w-8 h-8 text-[#007BFF]/20 mb-4" />
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#007BFF]/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#007BFF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            size="lg"
            className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold px-8 rounded-xl"
            asChild
          >
            <Link href="#pricing">Enroll Now</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white font-semibold px-8 rounded-xl"
            asChild
          >
            <Link href="#demo-form">Book a Free Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
