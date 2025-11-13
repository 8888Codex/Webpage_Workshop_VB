import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpeakerSection from "@/components/SpeakerSection";
import BenefitsSection from "@/components/BenefitsSection";
import BonusSection from "@/components/BonusSection";
import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";
// import StickyBar from "@/components/StickyBar"; // Descomente para ativar a barra sticky

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Bar - Descomente para ativar */}
      {/* <StickyBar /> */}
      
      {/* Fluxo Psicológico de Conversão */}
      {/* 1. ATENÇÃO - Captura com promessa clara */}
      <HeroSection />
      
      {/* 2. RECONHECIMENTO - Identificação com a dor */}
      <ProblemSection />
      
      {/* 3. SOLUÇÃO - Apresenta o mecanismo único */}
      <SolutionSection />
      
      {/* 4. VALOR - O que você ganha concretamente */}
      <ValuePropositionSection />
      
      {/* 5. PROVA SOCIAL - Resultados reais de empresários */}
      <TestimonialsSection />
      
      {/* 6. AUTORIDADE - Quem ensina tem credibilidade */}
      <SpeakerSection />
      
      {/* 7. QUALIFICAÇÃO - Para quem é (e não é) */}
      <BenefitsSection />
      
      {/* 8. EMPILHAMENTO - Bônus exclusivos */}
      <BonusSection />
      
      {/* 9. OBJEÇÕES - Remove últimas barreiras */}
      <FAQSection />
      
      {/* 10. AÇÃO FINAL - CTA com urgência */}
      <RegistrationSection />
    </div>
  );
};

export default Index;
