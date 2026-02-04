import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Clock, MessageSquare, ArrowRight } from "lucide-react";

export default function DoubtsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#007BFF]/5 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-blue-100 text-blue-700 mb-4">
                <MessageSquare size={14} className="mr-1" />
                Doubt Support
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Doubts Clarified
                <span className="block text-[#007BFF]">
                  Faster than in Offline Classes
                </span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our domain experts are available throughout the day to help you
                understand concepts better. No more waiting for the next class
                to get your doubts cleared!
              </p>

              <Button
                size="lg"
                className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold px-8 rounded-xl group"
                asChild
              >
                <Link href="#demo-form">
                  Book a Free Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Right - Stats Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#007BFF]/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900">
                      1500+
                    </div>
                    <div className="text-gray-600">Expert Mentors Available</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#28A745]/10 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-[#28A745]" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900">
                      1000+
                    </div>
                    <div className="text-gray-600">
                      Doubts Resolved in 15 Minutes
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#007BFF]/10 to-purple-100 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-6 h-6 text-[#007BFF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Live Support Hours
                    </p>
                    <p className="text-sm text-gray-600">
                      11 AM - 8 PM, Every Day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
