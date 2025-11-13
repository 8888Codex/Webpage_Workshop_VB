import { Button } from "@/components/ui/button";
import { MessageSquare, Brain, Code, Rocket, Check } from "lucide-react";

const SolutionSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "VOCÊ DESCREVE",
      description: "\"Quero um sistema que envie cobrança automática por WhatsApp 3 dias antes do vencimento\"",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: Brain,
      title: "IA ENTENDE",
      description: "Ferramentas como ChatGPT, Cursor e Make traduzem sua intenção em estrutura técnica",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Code,
      title: "IA GERA CÓDIGO",
      description: "Você não escreve nada. A IA monta o sistema completo.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      number: "04",
      icon: Rocket,
      title: "VOCÊ IMPLEMENTA",
      description: "Em horas (não meses). Sem depender de dev.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#eff6ff]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-primary mb-4 md:mb-6 leading-tight">
            Vibe Coding: Como Empresários Criam Sistemas<br className="hidden md:block" /> Sem Programar Uma Linha
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8 md:mb-12">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-foreground leading-relaxed text-center mb-3 md:mb-4">
              Vibe Coding é o nome que desenvolvedores de elite deram para uma nova forma de programar onde você descreve o que quer (em português normal) e a IA gera o código.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-primary font-semibold text-center">
              Você vira o "diretor criativo". A IA é o programador.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
            {/* Lado esquerdo - 40% - Como Funciona */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                COMO FUNCIONA — 4 PASSOS
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="group relative">
                      <div className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                            <span className="text-xl md:text-2xl font-bold text-white">{step.number}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 md:gap-3 mb-2">
                            <Icon className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                            <h4 className="text-base md:text-lg font-bold text-slate-900">
                              {step.title}
                            </h4>
                          </div>
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute left-6 md:left-8 top-[calc(100%+0.5rem)] h-4 md:h-6 w-0.5 bg-gradient-to-b from-slate-300 to-transparent"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Lado direito - 60% - Demonstração Visual Placeholder */}
            <div>
              <div className="bg-white rounded-xl shadow-xl border-2 border-primary-light/20 p-8 aspect-square flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Code className="w-20 h-20 mx-auto mb-4 opacity-30" />
                  <p className="text-lg font-semibold">
                    Demonstração Visual
                  </p>
                  <p className="text-sm mt-2">
                    (Vídeo ou screenshots do processo)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Box de Resultados */}
          <div className="bg-white rounded-xl border-l-4 border-success shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-6 text-center">
              RESULTADO
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 mb-3 md:mb-4">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-bold text-primary mb-2">Economia</h4>
                <p className="text-muted-foreground">
                  R$ 8–30 mil/mês (custo de dev + horas da equipe)
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-3 md:mb-4">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-bold text-primary mb-2">Velocidade</h4>
                <p className="text-muted-foreground">
                  Dias em vez de meses
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-3 md:mb-4">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-bold text-primary mb-2">Autonomia</h4>
                <p className="text-muted-foreground">
                  Você controla, você ajusta, você escala
                </p>
              </div>
            </div>
            
            <div className="text-center mt-6 md:mt-8">
              <Button 
                size="lg"
                className="w-full md:w-auto bg-primary-light hover:bg-primary text-white font-bold text-sm md:text-base px-6 md:px-8 py-6 rounded-lg min-h-[52px]"
                onClick={scrollToForm}
              >
                Quero Aprender Isso no Webinário Grátis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
