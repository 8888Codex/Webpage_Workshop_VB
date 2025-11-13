import { User } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Montei um CRM interno em 3 dias. Antes, a agência queria R$ 18 mil e 2 meses de prazo. Economizei isso + R$ 600/mês de assinatura de ferramenta.",
      name: "João Almeida",
      title: "E-commerce",
      location: "São Paulo",
      stats: "Faturamento: R$ 2,3M/ano"
    },
    {
      quote: "Automatizei o agendamento da clínica. Minha recepcionista gastava 12 horas/semana nisso. Hoje gasta zero. Sistema rodando sozinho há 4 meses.",
      name: "Dra. Marina Costa",
      title: "Clínica Médica",
      location: "Belo Horizonte",
      stats: "15 profissionais, 600 consultas/mês"
    },
    {
      quote: "Criei integração entre sistema de vendas e financeiro usando IA. Não sou tech. Levei 6 horas. Dev queria R$ 8 mil pra fazer.",
      name: "Carlos Mendes",
      title: "Distribuidor",
      location: "Curitiba",
      stats: "35 funcionários, R$ 8M/ano"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#eff6ff]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12 leading-tight">
            Empresários Que Aplicaram Vibe Coding
          </h2>
          
          <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-5 gap-4 md:gap-6 p-4 md:p-6 lg:p-8">
                  {/* Foto/Avatar - Esquerda */}
                  <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary-light/10 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary-light" />
                    </div>
                  </div>
                  
                  {/* Conteúdo - Direita */}
                  <div className="md:col-span-4">
                    <p className="text-base md:text-lg text-foreground italic mb-3 md:mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="border-t border-border pt-3 md:pt-4">
                      <p className="font-bold text-primary text-base md:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {testimonial.title} ({testimonial.location})
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {testimonial.stats}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-8 border-t border-border">
            <p className="text-lg md:text-xl font-semibold text-primary">
              Casos reais. Empresas verificáveis. Resultados documentados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
