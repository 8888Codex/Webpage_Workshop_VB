import { Zap, AlertTriangle, Map } from "lucide-react";

const ValuePropositionSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "1 Automação Pronta Que Economiza 15 Horas/Semana",
      description: "Demonstração ao vivo: como criar uma automação de cobrança/agendamento/relatório do zero. Você sai aplicando hoje. Não é teoria — é copy/paste.",
      gradient: "from-amber-500 to-orange-500",
      iconColor: "text-amber-600"
    },
    {
      icon: AlertTriangle,
      title: "O Erro Que 90% Comete ao Usar ChatGPT Para Criar Sistemas",
      description: "(E o prompt exato que corrige isso em 5 minutos) Template pronto incluído.",
      gradient: "from-red-500 to-pink-500",
      iconColor: "text-red-600"
    },
    {
      icon: Map,
      title: "Seu Mapa de Implementação Pós-Webinário",
      description: "Passo a passo: o que fazer nas primeiras 24h para montar seu primeiro sistema completo. Checklist pronta. Zero confusão.",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-4 leading-tight">
            O Que Você Leva Deste Webinário de 90 Minutos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Premium Card with Glassmorphism */}
                  <div className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-4 md:mb-6">
                      <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-slate-800 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    {/* Premium Bottom Border */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
