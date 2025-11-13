import { Clock, TrendingUp, Lock, Gift } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "GANHE TEMPO HOJE",
      description: "Você aprende em 90 minutos o que levaria meses para descobrir sozinho"
    },
    {
      icon: TrendingUp,
      title: "MULTIPLIQUE SEUS RESULTADOS",
      description: "A automação que aprende aqui vale R$ 18-40 mil/mês de economia"
    },
    {
      icon: Lock,
      title: "GANHE AUTONOMIA",
      description: "Chega de depender de TI ou de pagar caro para desenvolvedores"
    },
    {
      icon: Gift,
      title: "RECEBA BÔNUS EXCLUSIVOS",
      description: "Template de prompt, checklist prático, acesso 90 dias a comunidade privada"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          POR QUE PARTICIPAR AGORA?
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary-light/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-light" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <p className="text-xl font-bold text-center text-destructive max-w-3xl mx-auto">
          "Este webinário é para empresários que estão CANSADOS de depender de outras pessoas para inovar."
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
