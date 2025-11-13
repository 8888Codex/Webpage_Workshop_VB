import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Mas eu não sei NADA de programação...",
      answer: "Perfeito. Este webinário foi feito exatamente para quem nunca programou. Você só precisa saber descrever o que quer (em português normal). A IA faz o resto. 90% dos participantes nunca tinham escrito uma linha de código."
    },
    {
      question: "Não tenho tempo para webinário de 90 minutos...",
      answer: "Entendo. Você está sobrecarregado. Mas pense assim: 90 minutos agora = 20+ horas/semana economizadas nos próximos 6 meses. Isso é 1.000+ horas de volta no ano. Qual o custo de não investir 90 minutos?"
    },
    {
      question: "Será que funciona pro MEU tipo de empresa?",
      answer: "Se você tem processos manuais (planilhas, emails, agendamentos, cobranças, relatórios), funciona. Já aplicamos em: E-commerce, clínicas, consultorias, distribuidores, manufatura, academias, escritórios contábeis, agências. Se você faz algo repetitivo, dá pra automatizar."
    },
    {
      question: "Qual a pegadinha? Por que é grátis?",
      answer: "Sem pegadinha. O webinário é gratuito porque: (1) Quero provar que o método funciona (você testa antes de confiar). (2) No final, vou oferecer um workshop presencial pago (pra quem quiser ir mais fundo). Você decide se quer ou não. Zero pressão. Mas o webinário em si? 100% gratuito, 100% útil."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#f9fafb]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-8 md:mb-12 leading-tight">
            Perguntas Que Você Pode Estar Fazendo
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg lg:text-xl font-bold text-primary hover:no-underline py-4 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

