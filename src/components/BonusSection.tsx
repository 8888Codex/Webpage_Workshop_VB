import { Gift, Users, Video, Sparkles, CheckCircle } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: Gift,
      number: "01",
      title: "Kit Vibe Coding Starter",
      value: "R$ 497",
      gradient: "from-violet-500 to-purple-600",
      items: [
        "12 prompts prontos para criar automações (agendamento, cobrança, CRM, relatórios, integração)",
        "Checklist de implementação passo a passo (o que fazer nas primeiras 24h após o webinário)",
        "Vídeo: \"Primeiros 30 minutos — quick start\""
      ]
    },
    {
      icon: Users,
      number: "02",
      title: "Acesso VIP à Comunidade Vibe Coding Brasil",
      value: "R$ 297",
      valueNote: "90 dias grátis",
      gradient: "from-blue-500 to-cyan-500",
      items: [
        "Grupo privado com empresários aplicando o método",
        "Sessão Q&A semanal ao vivo (tire dúvidas, troque ideias)",
        "Biblioteca de casos reais e templates compartilhados"
      ]
    },
    {
      icon: Video,
      number: "03",
      title: "Gravação Completa + Materiais",
      value: "R$ 197",
      gradient: "from-emerald-500 to-teal-500",
      items: [
        "Acesso à gravação por 7 dias (assista quantas vezes precisar)",
        "Slides e recursos em PDF",
        "Garantia: se perder parte do webinário ao vivo, pode assistir depois"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-8 md:mb-12 leading-tight">
            Bônus Exclusivos Para Quem Se Inscrever Hoje
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Premium Gradient Border Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${bonus.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                  
                  {/* Main Card */}
                  <div className="relative h-full bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl">
                    {/* Badge Number */}
                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      <span className="text-white font-bold text-base md:text-lg">{bonus.number}</span>
                    </div>
                    
                    {/* Icon Container */}
                    <div className="mb-4 md:mb-6">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${bonus.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Bonus Label */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 mb-4">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Bônus Exclusivo</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {bonus.title}
                    </h3>
                    
                    {/* Value */}
                    <div className="mb-6 pb-6 border-b border-slate-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-slate-500">Valor:</span>
                        <span className={`text-3xl font-bold bg-gradient-to-r ${bonus.gradient} bg-clip-text text-transparent`}>
                          {bonus.value}
                        </span>
                      </div>
                      {bonus.valueNote && (
                        <p className="text-sm text-emerald-600 font-semibold mt-1">
                          {bonus.valueNote}
                        </p>
                      )}
                    </div>
                    
                    {/* Items List */}
                    <div className="space-y-3">
                      {bonus.items.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Premium Value Box */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-6 md:p-8 lg:p-10 text-center shadow-2xl border border-white/10">
              <div className="max-w-3xl mx-auto">
                {/* Total Value */}
                <div className="mb-6 md:mb-8">
                  <p className="text-slate-300 text-base md:text-lg lg:text-xl mb-2 md:mb-3 uppercase tracking-wide">
                    Valor Total dos Bônus
                  </p>
                  <div className="inline-flex items-baseline gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                      R$ 991
                    </span>
                  </div>
                </div>
                
                {/* Divider with Sparkle */}
                <div className="flex items-center gap-3 md:gap-4 my-6 md:my-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
                
                {/* Today's Investment */}
                <div>
                  <p className="text-slate-300 text-base md:text-lg lg:text-xl mb-2 md:mb-3 uppercase tracking-wide">
                    Seu Investimento Hoje
                  </p>
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <p className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 text-5xl md:text-6xl lg:text-7xl font-bold">
                      R$ 0
                    </p>
                  </div>
                  <div className="mt-3 md:mt-4 inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                    <span className="text-xs md:text-sm text-emerald-100 font-semibold">
                      100% Gratuito • Sem Cartão • Sem Compromisso
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;

