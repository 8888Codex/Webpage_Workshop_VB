import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra a barra após rolar 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 bg-[#ff8c00] text-white shadow-lg z-50 animate-slide-down"
      style={{
        animation: 'slideDown 0.3s ease-out'
      }}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between py-2 md:py-3 gap-3 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm lg:text-base font-semibold flex-1">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </div>
            <span className="truncate">Webinário: 23/Nov, 19h30</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">183/250 vagas</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={scrollToForm}
              className="bg-white text-[#ff8c00] hover:bg-gray-100 font-bold px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm whitespace-nowrap min-h-[44px]"
            >
              <span className="hidden sm:inline">Garantir Vaga</span>
              <span className="sm:hidden">Vaga</span>
              <span className="ml-1">→</span>
            </Button>
            
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;

