import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProgramOverview from "@/components/sections/ProgramOverview";
import EligibilitySection from "@/components/sections/EligibilitySection";
import LearnerExperiencesSection from "@/components/sections/LearnerExperiencesSection";
import FeaturesStrip from "@/components/sections/FeaturesStrip";
import UpgradesSection from "@/components/sections/UpgradesSection";
import TrainersSection from "@/components/sections/TrainersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GettingStarted from "@/components/sections/GettingStarted";
import DoubtsSection from "@/components/sections/DoubtsSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import HiringCompaniesSection from "@/components/sections/HiringCompaniesSection";
import WhyCompaniesPreferSection from "@/components/sections/WhyCompaniesPreferSection";
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

        {/* 3. Program Overview */}
        <ProgramOverview />

        {/* 4. Eligibility */}
        <EligibilitySection />

        {/* 5. Learner Experiences (Videos) */}
        <LearnerExperiencesSection />

        {/* 6. Upgrades Section */}
        <UpgradesSection />

        {/* 7. Trainers Section */}
        <TrainersSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Getting Started (3 Steps) */}
        <GettingStarted />

        {/* 10. Doubts Section */}
        <DoubtsSection />

        {/* 11. Trusted By - Placed Candidates */}
        <TrustedBySection />

        {/* 12. Hiring Companies - 2000+ Companies */}
        <HiringCompaniesSection />

        {/* 13. Why Top Companies Prefer NxtWave Students */}
        <WhyCompaniesPreferSection />

        {/* 14. Certification (IRC) */}
        <CertificationSection />

        {/* 15. Why Join Section */}
        <WhyJoinSection />

        {/* 16. Recognition */}
        <RecognitionSection />

        {/* 17. Payment Plans */}
        <PaymentPlans />

        {/* 18. FAQ */}
        <FAQSection />

        {/* 19. Media Section */}
        <MediaSection />
      </main>
      <Footer />
      
      {/* WhatsApp Chat Widget */}
      <ChatWidget />
    </>
  );
}
