import { Clock, Users, DollarSign, Bot, Building2, AlertCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      gradient: "from-red-500 to-orange-500",
      text: "Você pediu um \"sisteminha simples\" para o TI há 3 meses.",
      subtext: "Ainda está \"na fila\". Seu concorrente já lançou o dele.",
      impact: "Perda de mercado"
    },
    {
      icon: Users,
      gradient: "from-orange-500 to-amber-500",
      text: "Sua equipe gasta 2 horas/dia copiando dados entre planilhas.",
      subtext: "Você sabe que dá pra automatizar, mas não sabe como.",
      impact: "40h/mês desperdiçadas"
    },
    {
      icon: DollarSign,
      gradient: "from-purple-500 to-pink-500",
      text: "Tentou contratar programador: ou não acha, ou pede R$ 8–12 mil/mês,",
      subtext: "ou aceita e sai em 60 dias por proposta em dólar.",
      impact: "Alto custo + rotatividade"
    },
    {
      icon: Bot,
      gradient: "from-blue-500 to-cyan-500",
      text: "Usa ChatGPT pra tudo, mas na hora de criar um sistema de verdade",
      subtext: "(agendamento, integração, CRM), trava.",
      impact: "Potencial não explorado"
    },
    {
      icon: Building2,
      gradient: "from-pink-500 to-red-500",
      text: "Fica refém de agência que cobra R$ 15–40 mil por projeto",
      subtext: "que você sente que deveria ser mais simples.",
      impact: "Dependência cara"
    },
    {
      icon: AlertCircle,
      gradient: "from-slate-500 to-slate-700",
      text: "Processos manuais consomem 40-80 horas/mês da sua equipe",
      subtext: "em trabalho repetitivo que poderia ser automatizado.",
      impact: "Baixa produtividade"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-4">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-700">Problemas Comuns</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 leading-tight">
              Você Reconhece Essa Situação?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Se você já passou por algum desses cenários, este webinário foi feito para você.
            </p>
          </div>
          
          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${problem.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                  
                  {/* Card */}
                  <div className="relative h-full bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300">
                    {/* Icon Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 pt-1">
                        <span className="inline-block px-2 py-1 rounded-md bg-red-50 border border-red-100 text-xs font-bold text-red-700 uppercase">
                          {problem.impact}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <p className="text-sm md:text-base text-slate-900 leading-relaxed font-medium mb-2">
                        {problem.text}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {problem.subtext}
                      </p>
                    </div>
                    
                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 text-center border border-blue-200">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3">
                  A Raiz do Problema?
                </h3>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  Você não sabe que já existe uma forma de criar isso sozinho — <span className="font-bold text-primary">em horas, não meses</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
