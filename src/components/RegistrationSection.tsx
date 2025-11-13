import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, complete todas as informações para reservar sua vaga.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Vaga reservada com sucesso! 🎉",
      description: "Você receberá um email de confirmação em instantes.",
    });

    // Reset form
    setFormData({ name: "", email: "", company: "" });
  };

  const benefits = [
    "Aprender uma habilidade que 82% das PMEs ainda não conhecem",
    "Conhecer o método que vale R$ 10-20 mil em economia",
    "Ganhar autonomia tecnológica que vai mudar seu negócio"
  ];

  const reassurances = [
    "Você receberá link + lembretes por email",
    "Acesso garantido mesmo se chegar atrasado",
    "Gravação disponível para inscritos"
  ];

  return (
    <section 
      id="registration-form"
      className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary-light relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-3">
            RESERVE SUA VAGA GRÁTIS AGORA
          </h2>
          <p className="text-center text-white/90 mb-12">
            Apenas 3 informações • Leva 30 segundos • Vaga limitada
          </p>
          
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl">
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa/Negócio
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="h-12"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="xl" 
                  variant="cta" 
                  className="w-full mb-6"
                >
                  ✓ SIM, QUERO PARTICIPAR DO WEBINÁRIO
                </Button>
                
                <div className="space-y-2">
                  {reassurances.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </form>
            </div>
            
            <div className="lg:col-span-2 text-white">
              <p className="text-2xl font-bold mb-6">
                Você está a 90 minutos de distância de:
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg mb-6">
                Não deixe essa oportunidade passar.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center gap-3">
                <Clock className="w-6 h-6 text-cta" />
                <div>
                  <p className="font-bold">Próxima turma:</p>
                  <p className="text-sm">Terça-feira, 26 de Novembro às 19h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
