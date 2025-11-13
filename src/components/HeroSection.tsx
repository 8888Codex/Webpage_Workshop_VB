import { Button } from "@/components/ui/button";
import { Clock, Calendar, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Crie Soluções Tecnológicas Sem Contratar Programador
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Aprenda a usar IA para automatizar tarefas, economizar até R$ 40 mil/mês em desenvolvimento 
              e ganhar independência tecnológica (em 90 minutos)
            </p>
            
            <Button 
              size="xl" 
              variant="cta" 
              className="w-full md:w-auto mb-6"
              onClick={scrollToForm}
            >
              ✓ QUERO RESERVAR MINHA VAGA GRÁTIS
            </Button>
            
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Vagas limitadas</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Próxima semana</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Ao vivo com Q&A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
