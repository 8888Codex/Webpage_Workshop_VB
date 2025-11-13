import { Check, Linkedin, Instagram } from "lucide-react";
import speakerImage from "@/assets/speaker.jpg";

const SpeakerSection = () => {
  const credentials = [
    "Certificado em Automação com IA",
    "5+ anos atuando em inovação digital",
    "Referência em transformação tecnológica para PMEs",
    "Apresentações em eventos como Tech Summit BR"
  ];

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          QUEM VAI GUIAR VOCÊ NESSA JORNADA
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 text-center">
              <img 
                src={speakerImage} 
                alt="Palestrante especialista em Vibe Coding" 
                className="rounded-xl shadow-2xl w-full max-w-sm mx-auto object-cover aspect-square"
              />
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-3xl font-bold text-primary mb-2">
                Rodrigo Santana
              </h3>
              <p className="text-lg text-cta mb-6">
                Especialista em Vibe Coding & Automação com IA para PMEs
              </p>
              
              <p className="text-foreground leading-relaxed mb-6">
                Ajudou mais de 847 empresários a ganhar autonomia tecnológica. 
                Especialista em transformar ideias em automações práticas sem precisar contratar desenvolvedor.
              </p>
              
              <div className="space-y-3 mb-6">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                    <span className="text-foreground">{credential}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4 mb-6">
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-4 py-2 bg-primary-light/10 text-primary-light border border-primary-light/30 rounded-lg hover:bg-primary-light/20 hover:-translate-y-1 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-4 py-2 bg-primary-light/10 text-primary-light border border-primary-light/30 rounded-lg hover:bg-primary-light/20 hover:-translate-y-1 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
              
              <p className="text-muted-foreground italic">
                Ele vai compartilhar com você exatamente o mesmo método que usou com os 847 empresários anteriores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
