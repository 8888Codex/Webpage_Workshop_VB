import { Check, Linkedin, Instagram, Building2, GraduationCap, Briefcase } from "lucide-react";
import marcelloPhoto from "@/assets/Marcello Nicolielo.jpg";

const SpeakerSection = () => {
  const formations = [
    "Gestor de Tecnologia pela Universidade Anhembi Morumbi",
    "MBA em Ciência de Dados e Inteligência Artificial pela FIAP",
    "Especialista em Expansão de Negócios com foco em Inovação tecnológica, Comunicação Estratégica e IA",
    "+ de 10 anos em Economia Criativa e Cultura Digital"
  ];

  const companies = [
    "Codex.ai – Consultoria em Inteligência Artificial para negócios",
    "ai.Minds – Mentoria para C-Levels, diretores e líderes com abordagem AI-First",
    "Cognit.ai – Aceleradora de I.A. para médias e grandes empresas"
  ];

  const highlights = [
    "Head de Inovação na GoshenLand, liderando aceleradores de IA e Studio",
    "Fundador do Positivamente Podcast, com mais de 3 Milhões em comunidade orgânica",
    "Criador da 3LO, uma das primeiras agências brasileiras a integrar Google/YouTube e Facebook/Instagram como parceiros oficiais",
    "Sócio em projetos com Washington Olivetto e Galvão Bueno"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12 leading-tight">
            Quem Vai Te Guiar Nessa Jornada
          </h2>
          
          <div className="grid lg:grid-cols-5 gap-6 md:gap-10 items-start">
            {/* Foto - Tamanho Ideal para Desktop */}
            <div className="lg:col-span-2">
              <div className="relative group max-w-md mx-auto lg:sticky lg:top-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200">
                  <img 
                    src={marcelloPhoto} 
                    alt="Marcello Nicolielo - Especialista em IA" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Bio - 60% da largura */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                Marcello Nicolielo
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-primary-light mb-6 font-semibold">
                Especialista em Inteligência Artificial Aplicada a Negócios
              </p>
              
              {/* Experiência Profissional */}
              <div className="mb-6">
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  <strong>+ de 20 anos</strong> de atuação em projetos digitais para empresas como <strong>Bradesco, Cushman&Wakefield, Mosaic, deWalt, Black'n'Decker, Sabesp e Metrô SP</strong>.
                </p>
              </div>
              
              {/* Formação */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 md:p-5 mb-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-primary text-sm md:text-base">Formação e Especializações</h4>
                </div>
                <div className="space-y-2">
                  {formations.map((item, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Ecossistema de Empresas */}
              <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-xl p-4 md:p-5 mb-4 border border-purple-100">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-purple-600" />
                  <h4 className="font-bold text-primary text-sm md:text-base">Ecossistema de Empresas em IA</h4>
                </div>
                <div className="space-y-2">
                  {companies.map((item, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Projetos e Iniciativas */}
              <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-xl p-4 md:p-5 mb-6 border border-emerald-100">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-primary text-sm md:text-base">Projetos e Iniciativas</h4>
                </div>
                <div className="space-y-2">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/marcellonicolielo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-600 border border-blue-300/30 rounded-lg hover:from-blue-500/20 hover:to-blue-600/20 hover:border-blue-400/50 transition-all min-h-[44px] hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
                <a 
                  href="https://www.instagram.com/marcellonicolielo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-500/10 to-purple-600/10 text-pink-600 border border-pink-300/30 rounded-lg hover:from-pink-500/20 hover:to-purple-600/20 hover:border-pink-400/50 transition-all min-h-[44px] hover:shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-semibold">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
