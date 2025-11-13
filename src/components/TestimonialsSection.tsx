import { Check } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Implementei 3 automações em 1 semana. Economizei R$ 12 mil/mês em desenvolvimento.",
      name: "João Silva",
      title: "CEO TechStart",
      location: "São Paulo"
    },
    {
      quote: "Nunca tinha criado nada em código. Agora crio soluções que levaria 2 meses para um desenvolvedor fazer.",
      name: "Marina Costa",
      title: "Fundadora E-commerce",
      location: "Rio de Janeiro"
    },
    {
      quote: "Minha equipe está 10x mais rápida. Deixamos de ser reféns de TI externo.",
      name: "Carlos Mendes",
      title: "Diretor Operações",
      location: "Belo Horizonte"
    }
  ];

  const stats = [
    { number: "847", text: "empresários já participaram do método" },
    { number: "94%", text: "implementaram pelo menos 1 automação" },
    { number: "R$ 18 mil/mês", text: "economia média por empresa" }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          O QUE EMPRESÁRIOS JÁ CONQUISTARAM COM VIBE CODING
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-success-light to-success-light/50 p-6 rounded-xl border border-success/30 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-success rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <p className="text-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-success/20 pt-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  ✓ {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
