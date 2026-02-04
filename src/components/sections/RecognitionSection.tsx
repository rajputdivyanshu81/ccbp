import { Badge } from "@/components/ui/badge";
import { Award, Globe, Trophy } from "lucide-react";

export default function RecognitionSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#007BFF]/5 via-purple-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-blue-100 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#007BFF]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <Badge className="bg-gradient-to-r from-[#007BFF] to-purple-600 text-white px-6 py-2">
                  <Trophy size={16} className="mr-2" />
                  Global Recognition
                </Badge>
              </div>

              {/* Main Content */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[#007BFF]" />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  World Economic Forum recognized NxtWave as
                </h2>
                <div className="inline-block bg-white rounded-xl px-6 py-3 shadow-card mb-6">
                  <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-purple-600">
                    &ldquo;Technology Pioneer 2024&rdquo;
                  </span>
                </div>

                <p className="text-gray-600 max-w-2xl mx-auto">
                  NxtWave is among the select few companies globally to receive
                  this prestigious recognition for transforming tech education
                  and making millions job-ready.
                </p>
              </div>

              {/* Additional Recognition */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <div className="bg-white/80 rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-[#007BFF]">NSDC</p>
                  <p className="text-xs text-gray-600 mt-1">Official Partner</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-purple-600">WEF</p>
                  <p className="text-xs text-gray-600 mt-1">Tech Pioneer</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-orange-600">Times</p>
                  <p className="text-xs text-gray-600 mt-1">Best EdTech</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-green-600">Forbes</p>
                  <p className="text-xs text-gray-600 mt-1">30 Under 30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
