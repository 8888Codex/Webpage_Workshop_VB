import { Check, X } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      number: "1",
      title: "VOCÊ DESCREVE",
      description: "o problema em linguagem comum: \"Quero automatizar a coleta de leads do WhatsApp\""
    },
    {
      number: "2",
      title: "A IA ENTENDE",
      description: "sua intenção (usando ferramentas acessíveis como ChatGPT, Cursor, Make)"
    },
    {
      number: "3",
      title: "A IA GERA O CÓDIGO",
      description: "automaticamente (você NÃO precisa ser programador)"
    },
    {
      number: "4",
      title: "VOCÊ IMPLEMENTA",
      description: "em minutos (não em meses)"
    }
  ];

  const before = [
    "Depender de TI/dev",
    "Esperar 2-3 meses",
    "Gastar R$ 10-20 mil"
  ];

  const after = [
    "Criar soluções sozinho",
    "Implementar em DIAS",
    "Investir apenas tempo seu (NÃO dinheiro em TI)"
  ];

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          VIBE CODING: A SOLUÇÃO QUE MUDA TUDO
        </h2>
        
        <p className="text-lg text-center text-primary-light mb-12 max-w-3xl mx-auto">
          Por que 76% das PMEs que aprendem isso ganham autonomia tecnológica
        </p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl font-semibold text-center mb-8">
            O Vibe Coding funciona assim:
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${index % 2 === 0 ? 'bg-background' : 'bg-primary-light/10'}`}
              >
                <div className="text-3xl font-bold text-cta mb-3">{step.number}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-success-light p-8 rounded-lg border-l-4 border-success">
          <h3 className="text-2xl font-bold text-primary mb-6">
            RESULTADO: Autonomia + Agilidade + Economia
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-foreground mb-4">Ao invés de:</p>
              <div className="space-y-3">
                {before.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <p className="font-semibold text-foreground mb-4">Você consegue:</p>
              <div className="space-y-3">
                {after.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
