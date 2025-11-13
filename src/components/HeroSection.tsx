import { Button } from "@/components/ui/button";
import { Check, Video, Calendar, TrendingUp, Sparkles } from "lucide-react";
import demoVideo from "@/assets/Gravação de Tela 2025-11-12 às 22.46.04.mp4";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Vídeo ativado!
  const hasVideo = true;
  const videoUrl = demoVideo;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Lado Esquerdo - Copy */}
          <div className="text-white space-y-6 md:space-y-8">
            {/* Sobreline with Premium Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-xs md:text-sm font-medium text-blue-100">
                WEBINÁRIO EXCLUSIVO • 23 DE NOVEMBRO • 19H30
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Como Criar o Sistema Que Sua Empresa Precisa Sem Gastar R$ 8 Mil/Mês em Programador
            </h1>
            
            {/* Sub-headline */}
            <div className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed space-y-3 md:space-y-4">
              <p className="text-gray-300">
                Aprenda a usar IA para montar automações, CRMs e integrações sozinho — mesmo se nunca programou uma linha.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-400">
                <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <p className="font-semibold text-emerald-100">
                  Empresários estão economizando R$ 8–30 mil/mês (custo de dev + horas da equipe).
                </p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm md:text-base lg:text-lg px-8 py-6 md:px-10 md:py-7 rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 group min-h-[48px]"
                onClick={scrollToForm}
              >
                <span className="flex items-center gap-2">
                  Garantir Minha Vaga Grátis
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              
              {/* Microcopy abaixo do botão */}
              <div className="mt-3 md:mt-4 flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>100% gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span>Ao vivo com Q&A</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Gravação disponível por 7 dias</span>
                </div>
              </div>
            </div>
            
            {/* Indicador de escassez - Premium */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-amber-500"></span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-amber-100">
                  183 de 250 vagas já preenchidas
                </span>
              </div>
            </div>
          </div>
          
          {/* Lado Direito - Vídeo Premium */}
          <div className="hidden lg:block">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {hasVideo ? (
                  <>
                    {/* Vídeo com Autoplay */}
                    <video
                      className="w-full aspect-video object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/placeholder.svg" // Imagem de preview antes do vídeo carregar
                    >
                      <source src={videoUrl} type="video/mp4" />
                      <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
                      Seu navegador não suporta vídeo HTML5.
                    </video>
                    
                    {/* Overlay sutil com gradiente (opcional) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none"></div>
                    
                    {/* Badge "Ao Vivo" (opcional) */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-red-500/90 backdrop-blur-sm border border-white/20">
                      <div className="flex items-center gap-2">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </div>
                        <span className="text-xs font-bold text-white">DEMO</span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Placeholder Enquanto Não Tem Vídeo */
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl rounded-2xl border border-white/10 p-8 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-32 w-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                        </div>
                        <Video className="w-20 h-20 mx-auto mb-4 text-blue-400 relative" />
                      </div>
                      <p className="text-lg font-semibold text-white mb-2">
                        Demonstração Exclusiva
                      </p>
                      <p className="text-sm text-gray-400">
                        Veja a IA gerando código em tempo real
                      </p>
                      <p className="text-xs text-gray-500 mt-4">
                        (Adicione seu vídeo em src/assets/demo-video.mp4)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
