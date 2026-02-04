import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Zap } from "lucide-react";

const comparisonData = [
  {
    feature: "Curriculum",
    nxtwave: "Industry-aligned, reverse-engineered from 3000+ companies",
    others: "Generic, outdated content",
  },
  {
    feature: "Doubt Resolution",
    nxtwave: "Live support 11 AM - 8 PM with 1500+ mentors",
    others: "Limited support, long wait times",
  },
  {
    feature: "Trainers",
    nxtwave: "IIT/NIT Alumni with 10+ years experience",
    others: "Fresher or inexperienced trainers",
  },
  {
    feature: "Placement Support",
    nxtwave: "Up to 16 months with dedicated placement manager",
    others: "3-6 months basic support",
  },
  {
    feature: "Mock Interviews",
    nxtwave: "AI-powered + Human panels",
    others: "Limited or no mock interviews",
  },
  {
    feature: "Learning Style",
    nxtwave: "Self-paced + Live sessions",
    others: "Fixed schedule only",
  },
  {
    feature: "Certification",
    nxtwave: "NSDC recognized IRC",
    others: "Course completion certificate",
  },
  {
    feature: "Job Guarantee",
    nxtwave: "Pay after placement option available",
    others: "No refund policy",
  },
];

export default function WhyJoinSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-700 mb-4">
            <Zap size={14} className="mr-1" />
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Join NxtWave Intensive?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we compare to other institutes and training programs
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 px-4 text-left text-sm font-semibold text-gray-600">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-left text-sm font-semibold text-[#007BFF]">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🚀</span>
                      NxtWave Intensive
                    </div>
                  </th>
                  <th className="py-4 px-4 text-left text-sm font-semibold text-gray-400">
                    Other Institutes
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="font-medium text-gray-900">
                        {row.feature}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#28A745] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          {row.nxtwave}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-500">
                          {row.others}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden mt-8 space-y-4">
          {comparisonData.slice(0, 4).map((row, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-4"
            >
              <h4 className="font-semibold text-gray-900 mb-3">{row.feature}</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-2 bg-green-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-green-700 font-medium mb-1">
                      NxtWave
                    </p>
                    <p className="text-sm text-gray-700">{row.nxtwave}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                  <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">
                      Others
                    </p>
                    <p className="text-sm text-gray-500">{row.others}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
