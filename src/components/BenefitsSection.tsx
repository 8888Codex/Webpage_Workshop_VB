import { Check, X } from "lucide-react";

const BenefitsSection = () => {
  const idealFor = [
    "Você é CEO, fundador ou dono de PME (5–200 pessoas)",
    "Tem processos manuais que consomem tempo da equipe (planilhas, emails, agendamentos, cobranças)",
    "Já tentou contratar dev e descobriu que é caro/difícil/lento",
    "Usa ChatGPT mas não sabe como criar sistemas \"de verdade\"",
    "Quer autonomia tecnológica sem virar programador",
    "Está disposto a investir 90 minutos para economizar 20+ horas/semana depois"
  ];

  const notFor = [
    "Você quer uma solução mágica sem aplicar nada",
    "Busca curso completo de programação (isso é um webinário introdutório, não bootcamp)",
    "Não tem processos para automatizar (empresa muito pequena ou muito manual)",
    "Prefere continuar dependendo de TI externo (sem problema, mas este método não é pra você)"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 md:mb-12 leading-tight">
            Este Webinário É Para Você Se...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Coluna Esquerda - IDEAL PARA */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-300">
                ✓ IDEAL PARA
              </h3>
              <div className="space-y-3 md:space-y-4">
                {idealFor.map((item, index) => (
                  <div key={index} className="flex gap-2 md:gap-3 items-start">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-green-300 flex-shrink-0 mt-0.5 md:mt-1" />
                    <p className="text-sm md:text-base text-gray-100 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Coluna Direita - NÃO É PARA */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-red-300">
                ✗ NÃO É PARA
              </h3>
              <div className="space-y-3 md:space-y-4">
                {notFor.map((item, index) => (
                  <div key={index} className="flex gap-2 md:gap-3 items-start">
                    <X className="w-5 h-5 md:w-6 md:h-6 text-red-300 flex-shrink-0 mt-0.5 md:mt-1" />
                    <p className="text-sm md:text-base text-gray-100 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#fbbf24]">
              Se você está CANSADO de depender de dev caro e lento, esse webinário muda o jogo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
