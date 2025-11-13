import { useEffect } from "react";
import { Check, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRedirect: () => void;
}

const SuccessModal = ({ open, onOpenChange, onRedirect }: SuccessModalProps) => {
  useEffect(() => {
    if (open) {
      // Redirecionar após 3 segundos
      const timer = setTimeout(() => {
        onRedirect();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open, onRedirect]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-4">
          {/* Success Icon */}
          <div className="mx-auto relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
            </div>
            <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
              <Check className="w-10 h-10 text-white" />
            </div>
          </div>

          <div>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center mb-2">
              Vaga Reservada com Sucesso! 🎉
            </DialogTitle>
            <DialogDescription className="text-center space-y-3">
              <p className="text-base text-slate-700">
                Você receberá um email de confirmação em instantes com todos os detalhes.
              </p>
              
              {/* Redirecting Message */}
              <div className="flex items-center justify-center gap-2 text-sm text-primary">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="font-semibold">
                  Redirecionando para sua página exclusiva...
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-progress"
                  style={{
                    animation: 'progress 3s linear forwards'
                  }}
                ></div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>

        <style>{`
          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
          .animate-progress {
            animation: progress 3s linear forwards;
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;

