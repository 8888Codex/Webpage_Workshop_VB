import { X } from "lucide-react";
import problemImage from "@/assets/problem-image.jpg";

const ProblemSection = () => {
  const problems = [
    "Você tem ideias de automação mas leva MESES para implementar porque TI está sobrecarregado",
    "Precisa contratar desenvolvedor (R$ 5-10 mil/mês) e mesmo assim fica refém de agendas",
    "Vê seus concorrentes mais ágeis e você fica para trás",
    "Processos manuais consomem 40-80 horas/mês de trabalho improdutivo da sua equipe",
    "Sente que está deixando oportunidades escaparem porque tudo é muito lento"
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={problemImage} 
              alt="Empresário frustrado" 
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-destructive mb-6">
              VOCÊ JÁ VIVEU ESSA SITUAÇÃO?
            </h2>
            
            <p className="text-xl font-semibold text-foreground mb-8">
              "Tenho uma ideia incrível mas dependo de TI..."
            </p>
            
            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-3">
                  <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-bold text-foreground mb-4">
              E a RAIZ de tudo isso? Você NÃO conhece uma ferramenta que QUALQUER EMPREENDEDOR pode dominar para resolver isso sozinho.
            </p>
            
            <p className="text-muted-foreground italic">
              A boa notícia: Existe uma solução simples (e já estão usando) que muda TUDO em 90 minutos...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
