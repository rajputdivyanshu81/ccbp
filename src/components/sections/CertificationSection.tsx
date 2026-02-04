import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CertificationSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Certificate Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 md:p-12">
                {/* Certificate Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#007BFF]/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#007BFF]" />
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Industry Ready Certification
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Jointly Certified by NxtWave & NSDC
                  </p>
                </div>

                {/* Certificate Body */}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    This certifies that
                  </p>
                  <p className="text-xl font-bold text-gray-900 mb-4">
                    [Your Name]
                  </p>
                  <p className="text-gray-600 text-sm">
                    has successfully completed the
                  </p>
                  <p className="text-lg font-semibold text-[#007BFF] mt-2">
                    Full Stack Developer Program
                  </p>
                </div>

                {/* Logos */}
                <div className="flex items-center justify-center gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                      <span className="text-xs font-bold text-gray-600">
                        NxtWave
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-300 text-2xl">+</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                      <span className="text-xs font-bold text-gray-600">
                        NSDC
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#007BFF] to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Govt. Recognized
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <Badge className="bg-blue-100 text-blue-700 mb-4">
                <Award size={14} className="mr-1" />
                Get Certified
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is IRC?
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                IRC stands for{" "}
                <span className="font-semibold text-gray-900">
                  Industry Ready Certification
                </span>
                . Unlike any other study certificate, IRC represents your
                readiness for a job and approves that you have skills that
                companies look for.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#28A745] flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    NxtWave is an{" "}
                    <span className="font-semibold">Official Partner for NSDC</span>,
                    under the Ministry of Skill Development & Entrepreneurship,
                    Govt. of India
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#28A745] flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Your skills will be{" "}
                    <span className="font-semibold">
                      jointly certified by NxtWave and NSDC
                    </span>
                    , making you more in demand for companies
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#28A745] flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Earned only after completing{" "}
                    <span className="font-semibold">
                      industry-aligned projects, assignments, and tests
                    </span>{" "}
                    designed by world-class developers
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold">
                    Why is IRC more powerful?
                  </span>{" "}
                  Governments recognize only those training programs that are
                  proven to bring results. If you hold a certificate recognized
                  by NSDC, companies have greater trust in your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
