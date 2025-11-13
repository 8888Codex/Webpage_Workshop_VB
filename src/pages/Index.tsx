import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import SpeakerSection from "@/components/SpeakerSection";
import RegistrationSection from "@/components/RegistrationSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositionSection />
      <ProblemSection />
      <SolutionSection />
      <TestimonialsSection />
      <BenefitsSection />
      <SpeakerSection />
      <RegistrationSection />
    </div>
  );
};

export default Index;
