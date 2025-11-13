import { Code, DollarSign, Rocket } from "lucide-react";

const ValuePropositionSection = () => {
  const values = [
    {
      icon: Code,
      title: "Como a IA Gera Código Automaticamente",
      description: "Entender EXATAMENTE como Vibe Coding funciona sem jargão técnico complexo",
      color: "text-cta"
    },
    {
      icon: DollarSign,
      title: "3 Automações Que Economizam R$ 40 Mil/Mês",
      description: "Casos reais de empresários que implementaram e os resultados práticos (números, não promessas)",
      color: "text-success"
    },
    {
      icon: Rocket,
      title: "Seu Mapa Prático de Implementação",
      description: "Passo a passo que você pode começar HOJE mesmo sem conhecimento técnico",
      color: "text-primary-light"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          O QUE VOCÊ DESCOBRIRÁ NO WEBINÁRIO
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-muted p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <Icon className={`w-12 h-12 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
