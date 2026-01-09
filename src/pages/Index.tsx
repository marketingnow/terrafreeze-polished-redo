import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import BrandValueSection from "@/components/BrandValueSection";
import ValuePillars from "@/components/ValuePillars";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductPurchaseSection from "@/components/ProductPurchaseSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />
      <HeroSection />
      <TrustBar />
      <BrandValueSection />
      <ValuePillars />
      <ProblemSolutionSection />
      <TestimonialsSection />
      <ProductPurchaseSection />
      <FAQSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
