import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Clock, AlertCircle, Lock } from "lucide-react";
import SuccessModal from "@/components/SuccessModal";

const RegistrationSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Validação de email em tempo real
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setEmailError("Por favor, insira um email válido");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({...formData, email});
    validateEmail(email);
  };

  // Máscara e validação de telefone
  const formatPhone = (value: string) => {
    // Remove tudo que não é dígito
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    
    // Aplica máscara conforme o tamanho
    if (numbers.length <= 10) {
      // Telefone fixo: (XX) XXXX-XXXX
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, (_, p1, p2, p3) => {
        if (p3) return `(${p1}) ${p2}-${p3}`;
        if (p2) return `(${p1}) ${p2}`;
        if (p1) return `(${p1}`;
        return '';
      });
    } else {
      // Celular: (XX) XXXXX-XXXX
      return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, (_, p1, p2, p3) => {
        if (p3) return `(${p1}) ${p2}-${p3}`;
        if (p2) return `(${p1}) ${p2}`;
        if (p1) return `(${p1}`;
        return '';
      });
    }
  };

  const validatePhone = (phone: string) => {
    const numbers = phone.replace(/\D/g, '');
    if (phone && numbers.length < 10) {
      setPhoneError("Por favor, insira um telefone válido");
    } else {
      setPhoneError("");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({...formData, phone: formatted});
    validatePhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.gender || !formData.age) {
      return;
    }

    if (emailError || phoneError) {
      return;
    }

    // Loading state
    setIsSubmitting(true);

    // Simulate API call (aqui você faria a integração real)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show success modal
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", gender: "", age: "" });
    setIsSubmitting(false);
  };

  const handleRedirect = () => {
    setShowSuccessModal(false);
    navigate('/obrigado');
  };

  const benefits = [
    "Aprender uma habilidade que 82% das PMEs brasileiras ainda não dominam",
    "Economizar R$ 8–30 mil/mês (custo de dev + horas da equipe)",
    "Ganhar autonomia tecnológica que muda seu negócio",
    "Criar seu primeiro sistema completo em dias (não meses)"
  ];

  const reassurances = [
    "Você receberá link de acesso + lembretes por email",
    "Acesso garantido mesmo se chegar atrasado",
    "Gravação disponível por 7 dias para inscritos"
  ];

  return (
    <>
      {/* Success Modal */}
      <SuccessModal 
        open={showSuccessModal}
        onOpenChange={setShowSuccessModal}
        onRedirect={handleRedirect}
      />

      <section 
        id="registration-form"
        className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
      >
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Lado Esquerdo - Texto Motivacional */}
            <div className="text-white space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Garanta Sua Vaga Grátis Agora
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                Você está a 90 minutos de distância de:
              </p>
              
              <div className="space-y-3 md:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-2 md:gap-3 items-start">
                    <Check className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 md:mt-1 text-green-300" />
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 md:pt-6 space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 backdrop-blur-sm">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-300 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-amber-100 font-semibold">Próxima turma: 23 de Novembro, 19h30</span>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/40 backdrop-blur-sm">
                  <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500"></span>
                  </div>
                  <span className="text-xs md:text-sm text-red-100 font-semibold">183 de 250 vagas já preenchidas</span>
                </div>
              </div>
            </div>
            
            {/* Lado Direito - Formulário */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 text-center">
                  Reserve Sua Vaga
                </h3>
                <p className="text-sm md:text-base text-muted-foreground text-center mb-6">
                  (Leva 20 Segundos)
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Nome completo:
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="João Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Email:
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="joao@empresa.com.br"
                      value={formData.email}
                      onChange={handleEmailChange}
                      className={`h-12 ${emailError ? 'border-destructive' : ''}`}
                      required
                    />
                    {emailError && (
                      <p className="text-destructive text-sm mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Telefone: <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 98765-4321"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`h-12 ${phoneError ? 'border-destructive' : ''}`}
                      maxLength={15}
                      required
                    />
                    {phoneError && (
                      <p className="text-destructive text-sm mt-1">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Gênero:
                    </label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => setFormData({...formData, gender: value})}
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione seu gênero" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                        <SelectItem value="prefiro-nao-informar">Prefiro não informar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Idade:
                    </label>
                    <Select
                      value={formData.age}
                      onValueChange={(value) => setFormData({...formData, age: value})}
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione sua faixa etária" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-25">18-25 anos</SelectItem>
                        <SelectItem value="26-35">26-35 anos</SelectItem>
                        <SelectItem value="36-45">36-45 anos</SelectItem>
                        <SelectItem value="46-55">46-55 anos</SelectItem>
                        <SelectItem value="56-65">56-65 anos</SelectItem>
                        <SelectItem value="65+">65+ anos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#ff8c00] to-[#e07b00] hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm md:text-base lg:text-lg px-6 py-6 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all mb-6 min-h-[52px]"
                  disabled={isSubmitting || !!emailError || !!phoneError}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Processando...
                    </span>
                  ) : (
                    "→ GARANTIR MINHA VAGA GRÁTIS AGORA"
                  )}
                </Button>
                
                <div className="space-y-2 mb-6">
                  {reassurances.map((item, index) => (
                    <div key={index} className="flex gap-2 items-start text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                  <Lock className="w-4 h-4 text-slate-400" />
                  <span>Seus dados estão seguros. Zero spam.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default RegistrationSection;
