import { useEffect, useState } from "react";
import { Check, Calendar, Clock, Video, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Data do webinário: 23 de Novembro, 19h30
  const webinarDate = new Date('2025-11-23T19:30:00-03:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = webinarDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSteps = [
    {
      icon: Mail,
      title: "Verifique seu Email",
      description: "Enviamos um email de confirmação com o link de acesso ao webinário."
    },
    {
      icon: Calendar,
      title: "Adicione ao Calendário",
      description: "Não perca: 23 de Novembro, às 19h30 (horário de Brasília)."
    },
    {
      icon: Video,
      title: "Prepare-se",
      description: "Separe papel e caneta. Você vai sair do webinário com ações práticas."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8 md:mb-12">
            {/* Success Icon */}
            <div className="mx-auto relative mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
              </div>
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl">
                <Check className="w-12 h-12 md:w-14 md:h-14 text-white" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sua Vaga Está Garantida! 🎉
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Bem-vindo ao Webinário Vibe Coding. Você está a poucos dias de transformar seu negócio com IA.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="relative mb-8 md:mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                  Faltam Apenas
                </h2>
              </div>

              <div className="grid grid-cols-4 gap-3 md:gap-6">
                {[
                  { label: 'Dias', value: timeLeft.days },
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Seg', value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-3 md:p-4 mb-2">
                      <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-blue-200 font-semibold uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm md:text-base text-blue-100">
                  📅 Sábado, 23 de Novembro de 2025 • 19h30 (Brasília)
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Próximos Passos
            </h2>

            <div className="space-y-4">
              {nextSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 items-start p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Back */}
          <div className="text-center">
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Voltar para a Página Inicial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

