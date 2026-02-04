import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesStrip from "@/components/sections/FeaturesStrip";
import UpgradesSection from "@/components/sections/UpgradesSection";
import TrainersSection from "@/components/sections/TrainersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GettingStarted from "@/components/sections/GettingStarted";
import DoubtsSection from "@/components/sections/DoubtsSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import CertificationSection from "@/components/sections/CertificationSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import PaymentPlans from "@/components/sections/PaymentPlans";
import FAQSection from "@/components/sections/FAQSection";
import MediaSection from "@/components/sections/MediaSection";
import ChatWidget from "@/components/shared/ChatWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* 1. Hero Section with Form */}
        <HeroSection />

        {/* 2. Features Strip */}
        <FeaturesStrip />

        {/* 3. Upgrades Section */}
        <UpgradesSection />

        {/* 4. Trainers Section */}
        <TrainersSection />

        {/* 5. Testimonials */}
        <TestimonialsSection />

        {/* 6. Getting Started (3 Steps) */}
        <GettingStarted />

        {/* 7. Doubts Section */}
        <DoubtsSection />

        {/* 8. Trusted By / Companies */}
        <TrustedBySection />

        {/* 9. Certification (IRC) */}
        <CertificationSection />

        {/* 10. Why Join Section */}
        <WhyJoinSection />

        {/* 11. Recognition */}
        <RecognitionSection />

        {/* 12. Payment Plans */}
        <PaymentPlans />

        {/* 13. FAQ */}
        <FAQSection />

        {/* 14. Media Section */}
        <MediaSection />
      </main>
      <Footer />
      
      {/* WhatsApp Chat Widget */}
      <ChatWidget />
    </>
  );
}
