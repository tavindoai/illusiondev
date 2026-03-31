/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Layers, 
  MessageCircle, 
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Search,
  Zap,
  ShieldCheck,
  MousePointer2,
  Settings,
  Users,
  Plus,
  Minus,
  Send,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ_ITEMS = [
  {
    question: "Qual a diferença entre um site profissional e um comum?",
    answer: "Um site profissional é focado em conversão, SEO e performance. Ele é construído sob medida para o seu negócio, enquanto sites comuns costumam ser templates genéricos e lentos."
  },
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer: "O prazo médio varia de 15 a 45 dias, dependendo da complexidade e das integrações necessárias (automações, CRM, etc)."
  },
  {
    question: "O site será otimizado para o Google (SEO)?",
    answer: "Sim, todos os nossos projetos já nascem com estrutura técnica otimizada para o Google, garantindo melhor indexação e visibilidade."
  },
  {
    question: "Posso integrar automações e CRM?",
    answer: "Com certeza. Somos especialistas em automação, integrando seu site com RD Station, HubSpot, WhatsApp e outros fluxos de trabalho."
  }
];

const TARGET_MARKETS = [
  "Lawtech", "Fintech", "Healthtech", "Real Estate", "E-commerce Luxo", "Indústria", "Hospitalidade", "Agtech"
];

const Logo = ({ className = "" }: { className?: string }) => {
  const fullText = "Illusion Dev";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  const [displayText, setDisplayText] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (!isRevealed) {
      // Decrypting phase
      interval = setInterval(() => {
        setDisplayText((prev) => 
          fullText.split("").map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );

        if (iteration >= fullText.length) {
          clearInterval(interval);
          setIsRevealed(true);
          timeout = setTimeout(() => {
            setIsRevealed(false);
            setIteration(0);
          }, 2000); // 2 second pause
        } else {
          setIteration((prev) => prev + 0.25); // Speed of decryption
        }
      }, 30);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRevealed, iteration]);

  const renderText = () => {
    const spaceIndex = fullText.indexOf(" ");
    const currentText = displayText || fullText.split("").map(c => c === " " ? " " : chars[0]).join("");
    
    if (currentText.length <= spaceIndex) {
      return <span>{currentText}</span>;
    } else {
      const firstPart = currentText.substring(0, spaceIndex + 1);
      const secondPart = currentText.substring(spaceIndex + 1);
      return (
        <>
          <span>{firstPart}</span>
          <span className="text-onyx-muted">{secondPart}</span>
        </>
      );
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-8 h-8">
        <motion.div 
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 border-2 border-white opacity-40"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 270, 180, 90, 0],
            borderRadius: ["50%", "20%", "50%", "20%", "50%"],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-1 border border-white/60"
        />
        <div className="absolute inset-[10px] bg-white rounded-sm animate-pulse" />
      </div>
      <span className="text-xl font-extrabold tracking-[0.2em] font-display uppercase inline-flex items-center min-w-[180px]">
        {renderText()}
      </span>
    </div>
  );
};

const IsometricDevElement = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:ml-auto perspective-[1000px] flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
      <motion.div 
        initial={{ opacity: 0, rotateX: 45, rotateZ: -45, y: 50 }}
        animate={{ opacity: 1, rotateX: 45, rotateZ: -45, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
        className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] transform-gpu preserve-3d"
      >
        {/* Laptop/Screen Base */}
        <div className="absolute inset-0 bg-onyx-bg border-4 border-onyx-border rounded-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-onyx-border/30 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 text-white/20">
              <Code2 className="w-12 h-12 sm:w-20 sm:h-20" strokeWidth={1} />
            </div>
            <div className="w-24 sm:w-32 h-2 bg-onyx-border/50 rounded-full" />
            <div className="w-16 sm:w-24 h-2 bg-onyx-border/30 rounded-full" />
          </div>
        </div>

        {/* Keyboard Base */}
        <div className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 w-[280px] h-[220px] sm:w-[350px] sm:h-[260px] bg-onyx-border/20 backdrop-blur-xl border border-white/10 rounded-3xl transform translate-z-[-50px] shadow-2xl p-4 sm:p-6 grid grid-cols-4 gap-2 sm:gap-3">
          {/* Key Caps */}
          {['D', 'E', 'V', 'S'].map((key, i) => (
            <div key={i} className="w-full aspect-square bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-white/30 font-display font-bold text-lg sm:text-xl shadow-[0_4px_0_rgba(255,255,255,0.05)]">
              {key}
            </div>
          ))}
          <motion.a 
            href="#contato"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2 }}
            className="col-span-4 h-10 sm:h-12 bg-white text-black rounded-lg sm:rounded-xl flex items-center justify-center font-display font-black uppercase tracking-widest text-xs sm:text-sm shadow-[0_6px_0_#cccccc,0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_0_#cccccc,0_8px_15px_rgba(0,0,0,0.25)] active:shadow-[0_2px_0_#cccccc,0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-75 cursor-pointer"
          >
            Start Project
          </motion.a>
          <motion.a 
            href="#portfólio"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2 }}
            className="col-span-4 h-10 sm:h-12 bg-onyx-bg border border-white/10 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-display font-black uppercase tracking-widest text-xs sm:text-sm shadow-[0_6px_0_#333333,0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_0_#333333,0_8px_15px_rgba(0,0,0,0.25)] active:shadow-[0_2px_0_#333333,0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-75 cursor-pointer"
          >
            Ver Portfolio
          </motion.a>
        </div>

        {/* Floating Accents */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -right-12 w-24 h-24 border border-onyx-border rounded-full flex items-center justify-center text-white/20"
        >
          <Cpu size={40} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -left-20 w-16 h-16 border border-onyx-border rounded-2xl flex items-center justify-center text-white/10"
        >
          <Layers size={30} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero Animations Timeline
    const tl = gsap.timeline();

    // 1. Hero Title Reveal
    if (heroTitleRef.current) {
      const words = heroTitleRef.current.innerText.split(' ');
      heroTitleRef.current.innerHTML = words
        .map(word => `<span class="inline-block overflow-hidden mr-3"><span class="inline-block translate-y-full">${word}</span></span>`)
        .join(' ');

      tl.to(heroTitleRef.current.querySelectorAll('span span'), {
        y: 0,
        stagger: 0.08,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3
      });
    }

    // 2. Hero Paragraph Fade-in
    if (heroParagraphRef.current) {
      tl.fromTo(heroParagraphRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.8"
      );
    }

    // 3. Hero Background Parallax
    if (heroBgRef.current) {
      gsap.to(heroBgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Section Fade-up Animations
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const addToSections = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-onyx-bg text-onyx-text selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b border-onyx-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {['Serviços', 'Portfólio', 'Processo', 'FAQ', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-onyx-muted hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-onyx-bg pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8">
              {['Serviços', 'Portfólio', 'Processo', 'FAQ', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-3xl font-bold font-display"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 overflow-hidden">
          {/* Ouro Preto Background Highlight */}
          <div ref={heroBgRef} className="absolute inset-0 -z-20 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1590001158193-7f3d3008777a?q=80&w=1920&auto=format&fit=crop" 
              alt="Ouro Preto Background"
              referrerPolicy="no-referrer"
              className="w-full h-[120%] object-cover opacity-[0.07] grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-onyx-bg via-transparent to-onyx-bg" />
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            <div className="flex flex-col items-start text-left">
              <h1 
                ref={heroTitleRef}
                className="text-3xl sm:text-4xl md:text-7xl font-black font-display leading-[1.1] tracking-tight mb-6 sm:mb-8 max-w-4xl"
              >
                Criação de sites profissionais
              </h1>
              <p 
                ref={heroParagraphRef}
                className="text-base sm:text-lg md:text-xl text-onyx-muted max-w-2xl leading-relaxed"
              >
                Desenvolvemos sites personalizados focados em conversão e performance.
              </p>
            </div>

            <div className="mt-4 lg:mt-0">
              <IsometricDevElement />
            </div>
          </div>

          {/* Background Accent */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        </section>

        {/* How it Works Section */}
        <section id="processo" className="py-20 md:py-32 px-6 border-b border-onyx-border" ref={addToSections}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] text-onyx-muted mb-4">Como Funciona</h2>
              <h3 className="text-3xl md:text-6xl font-bold font-display">O Caminho para o Sucesso.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: "01", title: "Estratégia", desc: "Analisamos seu mercado e definimos os objetivos de conversão do seu site." },
                { step: "02", title: "Design & Dev", desc: "Criamos um layout exclusivo e codificamos com as melhores tecnologias." },
                { step: "03", title: "Lançamento", desc: "Otimizamos para o Google e entregamos um site pronto para gerar lucro." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 md:p-8 border border-onyx-border rounded-3xl bg-onyx-border/10">
                  <div className="text-4xl md:text-5xl font-black opacity-10 mb-6">{item.step}</div>
                  <h4 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-sm md:text-base text-onyx-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="serviços" className="py-20 md:py-32 px-6" ref={addToSections}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] text-onyx-muted mb-4">Nossa Expertise</h2>
                <h3 className="text-3xl md:text-6xl font-bold font-display">Engenharia de Valor.</h3>
              </div>
              <p className="text-sm md:text-base text-onyx-muted max-w-sm">
                Soluções que fundem design brutalista com automação de alta performance.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-6 md:p-10 border border-onyx-border rounded-3xl bg-onyx-border/20 hover:bg-onyx-border/40 transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Layers className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4">Web Design de Elite</h4>
                <p className="text-sm md:text-base text-onyx-muted leading-relaxed">
                  Sites que não apenas existem, mas performam. Criamos experiências digitais imersivas que capturam a essência da sua marca e convertem visitantes em clientes leais.
                </p>
              </div>
              
              <div className="p-6 md:p-10 border border-onyx-border rounded-3xl bg-onyx-border/20 hover:bg-onyx-border/40 transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Cpu className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4">Automações Inteligentes</h4>
                <p className="text-sm md:text-base text-onyx-muted leading-relaxed">
                  Substitua tarefas repetitivas por fluxos de trabalho que geram lucro 24/7.
                </p>
              </div>

              <div className="p-6 md:p-10 border border-onyx-border rounded-3xl bg-onyx-border/20 hover:bg-onyx-border/40 transition-colors group md:col-span-3">
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Code2 className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-4">Sistemas Customizados</h4>
                    <p className="text-sm md:text-base text-onyx-muted leading-relaxed max-w-2xl">
                      Soluções sob medida para problemas complexos. Desenvolvemos softwares robustos e escaláveis que resolvem gargalos operacionais e impulsionam o crescimento tecnológico da sua empresa.
                    </p>
                  </div>
                  <div className="md:ml-auto w-full md:w-auto">
                    <button className="flex items-center justify-center md:justify-start gap-2 text-white font-bold group/btn w-full md:w-auto">
                      Ver Detalhes <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Functionalities */}
        <section className="py-20 md:py-32 px-6 bg-onyx-border/10" ref={addToSections}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] text-onyx-muted mb-4">Recursos</h2>
              <h3 className="text-3xl md:text-6xl font-bold font-display">Tecnologia de Ponta.</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: <Zap size={20} />, title: "Performance", desc: "Carregamento ultra-rápido para melhor experiência." },
                { icon: <Search size={20} />, title: "SEO Técnico", desc: "Estrutura otimizada para os motores de busca." },
                { icon: <ShieldCheck size={20} />, title: "Segurança", desc: "Proteção avançada e certificados SSL inclusos." },
                { icon: <MousePointer2 size={20} />, title: "Conversão", desc: "CTAs estratégicos para gerar mais leads." },
                { icon: <Settings size={20} />, title: "Gerenciável", desc: "Painel intuitivo para você atualizar seu conteúdo." },
                { icon: <Globe size={20} />, title: "Responsivo", desc: "Adaptação perfeita em qualquer dispositivo." },
                { icon: <Layers size={20} />, title: "Integrações", desc: "Conecte seu site com CRM e automações." },
                { icon: <Users size={20} />, title: "Suporte", desc: "Acompanhamento e treinamento especializado." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 p-6 border border-onyx-border rounded-2xl hover:border-white transition-colors">
                  <div className="text-white">{item.icon}</div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-xs md:text-sm text-onyx-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfólio" className="py-20 md:py-32 px-6 bg-white text-black" ref={addToSections}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-20">
              <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Portfólio</h2>
              <h3 className="text-3xl md:text-6xl font-bold font-display">Galeria Cinematográfica.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  title: "Atelier Mineral",
                  category: "E-commerce de Luxo",
                  desc: "Checkout automatizado e design mineral.",
                  img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  title: "LegalFlow AI",
                  category: "Automação Jurídica",
                  desc: "Sistema de gestão inteligente para escritórios.",
                  img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  title: "Horizon Hotel",
                  category: "Hospitalidade",
                  desc: "Landing page com motor de reservas integrado.",
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                }
              ].map((project, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight className="text-black w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Markets */}
        <section className="py-20 md:py-32 px-6 border-b border-onyx-border" ref={addToSections}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] text-onyx-muted mb-4">Segmentos</h2>
              <h3 className="text-3xl md:text-6xl font-bold font-display">Soluções para seu Mercado.</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {TARGET_MARKETS.map((market, idx) => (
                <div key={idx} className="px-5 py-2 md:px-8 md:py-4 border border-onyx-border rounded-full text-sm md:text-lg font-medium hover:bg-white hover:text-black transition-all cursor-default">
                  {market}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32 px-6 border-t border-onyx-border" ref={addToSections}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] text-onyx-muted mb-4">FAQ</h2>
              <h3 className="text-3xl md:text-6xl font-bold font-display">Dúvidas Frequentes.</h3>
            </div>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="border border-onyx-border rounded-2xl overflow-hidden">
                  <button 
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left hover:bg-onyx-border/20 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span className="text-lg md:text-xl font-bold pr-4">{item.question}</span>
                    {activeFaq === idx ? <Minus size={20} className="shrink-0" /> : <Plus size={20} className="shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 md:p-6 pt-0 text-sm md:text-base text-onyx-muted leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <section id="contato" className="py-20 md:py-32 px-6 border-t border-onyx-border" ref={addToSections}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20 md:mb-24">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-7xl font-black font-display mb-6 md:mb-8">Pronto para a revolução digital?</h2>
                <p className="text-lg md:text-xl text-onyx-muted">
                  Vamos construir algo extraordinário juntos.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <a 
                  href="https://wa.me/5531996254252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 md:px-8 md:py-4 border border-onyx-border rounded-2xl flex items-center justify-between group hover:bg-white hover:text-black transition-all"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle size={24} />
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-widest opacity-60">Falar com</div>
                      <div className="font-bold text-sm md:text-base">Octavio</div>
                    </div>
                  </div>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/5531985639317" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 md:px-8 md:py-4 border border-onyx-border rounded-2xl flex items-center justify-between group hover:bg-white hover:text-black transition-all"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle size={24} />
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-widest opacity-60">Falar com</div>
                      <div className="font-bold text-sm md:text-base">Luis</div>
                    </div>
                  </div>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-onyx-border gap-8">
              <Logo />
              <div className="text-xs md:text-sm text-onyx-muted text-center md:text-left">
                © 2025 Illusion Dev. Crafting Digital Excellence.
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-onyx-muted hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-onyx-muted hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-onyx-muted hover:text-white transition-colors"><Github size={20} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
