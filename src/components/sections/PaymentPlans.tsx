"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  CreditCard,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  Shield,
} from "lucide-react";

const plans = [
  {
    id: "prepaid",
    name: "Pre-paid Plan",
    description: "Pay upfront and get started immediately",
    originalPrice: "₹75,000",
    discountedPrice: "₹49,000",
    afterPlacement: null,
    highlight: "Best Value",
    features: [
      "Complete Program Access",
      "Live Sessions Mon-Fri",
      "Dedicated Success Coach",
      "Placement Support (16 months)",
      "NSDC Certified IRC",
      "AI Mock Interviews",
      "Mega Placement Drives",
      "EMI Options Available",
    ],
    cta: "Enroll Now",
    ctaLink: "#",
  },
  {
    id: "postpaid",
    name: "Post-paid Plan",
    description: "Pay after you get placed",
    originalPrice: "₹1,50,000",
    discountedPrice: "₹90,000",
    afterPlacement: "Pay after job",
    highlight: "Pay After Placement",
    features: [
      "Complete Program Access",
      "Live Sessions Mon-Fri",
      "Dedicated Success Coach",
      "Placement Support (16 months)",
      "NSDC Certified IRC",
      "AI Mock Interviews",
      "Mega Placement Drives",
      "Full Refund if No Placement*",
    ],
    cta: "Enroll Now",
    ctaLink: "#",
  },
];

const includedBenefits = [
  "Aptitude Training",
  "Soft Skills Training",
  "Resume Preparation",
  "AI-Powered Mock Interviews",
  "Mock Interviews by Tech and HR Panels",
  "300+ Senior Interview Experiences",
  "Scheduling Interviews",
  "Access to Placement Portal",
  "Mega Offline Placement Drives",
  "Negotiation with companies for higher salaries",
];

export default function PaymentPlans() {
  const [activePlan, setActivePlan] = useState<"prepaid" | "postpaid">("prepaid");

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-700 mb-4">
            <CreditCard size={14} className="mr-1" />
            Flexible Payment
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Success is Our Success
            <span className="block text-[#007BFF]">Choose Your Payment Plan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in your potential. Choose a plan that works best for you.
          </p>
        </div>

        {/* Plan Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActivePlan("prepaid")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activePlan === "prepaid"
                  ? "bg-[#007BFF] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Pre-paid
            </button>
            <button
              onClick={() => setActivePlan("postpaid")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activePlan === "postpaid"
                  ? "bg-[#007BFF] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Post-paid
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-6 md:p-8 transition-all ${
                activePlan === plan.id
                  ? "border-2 border-[#007BFF] shadow-card-hover scale-[1.02]"
                  : "border border-gray-200"
              }`}
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge
                  className={`px-4 py-1 ${
                    plan.id === "prepaid"
                      ? "bg-[#007BFF] text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  <Sparkles size={12} className="mr-1" />
                  {plan.highlight}
                </Badge>
              </div>

              {/* Plan Header */}
              <div className="text-center mt-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-gray-400 line-through text-lg">
                    {plan.originalPrice}
                  </span>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Save {plan.id === "prepaid" ? "35%" : "40%"}
                  </Badge>
                </div>
                <div className="text-4xl font-bold text-gray-900">
                  {plan.discountedPrice}
                </div>
                {plan.afterPlacement && (
                  <p className="text-sm text-[#007BFF] font-medium mt-1">
                    {plan.afterPlacement}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#28A745] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full font-semibold rounded-xl ${
                  activePlan === plan.id
                    ? "bg-[#007BFF] hover:bg-[#0056b3] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                asChild
              >
                <Link href={plan.ctaLink}>
                  {plan.cta}
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>

              {/* Book Seat Option */}
              <div className="text-center mt-4">
                <Button variant="link" className="text-[#007BFF] text-sm" asChild>
                  <Link href="#">Book Your Seat for ₹2,000/-</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            What&apos;s Included in Both Plans
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {includedBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-[#28A745] flex-shrink-0" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-700 mb-3">
              <AlertTriangle size={20} />
              <span className="font-semibold">Limited Time Offer</span>
              <Clock size={18} />
            </div>
            <p className="text-amber-800 mb-4">
              Fee increases from{" "}
              <span className="font-bold">15th February 2026</span>
            </p>
            <Button
              size="lg"
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold px-8 rounded-xl"
              asChild
            >
              <Link href="#demo-form">Book a Free Demo to Know More</Link>
            </Button>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-[#28A745]" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={16} className="text-[#007BFF]" />
            <span>EMI Available</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-purple-600" />
            <span>Scholarship Options</span>
          </div>
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-gray-400 mt-6">
          *Terms and Conditions Apply.{" "}
          <Link href="#" className="underline hover:text-gray-600">
            View full terms
          </Link>
        </p>
      </div>
    </section>
  );
}
