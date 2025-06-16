import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button"; // Importe ButtonProps

// --- Interfaces e Constantes (sem alterações) ---
interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const ROLES: string[] = [
  "Desenvolvedor de Software",
  "Engenheiro de UI/UX",
  "Criador de Soluções Digitais",
  "Entusiasta de TypeScript",
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: Github, href: "https://github.com/maurodk", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/omaurojr/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "#contact", label: "Email" },
];

// --- Componente de Botão com Efeito Ripple - VERSÃO FINAL E ROBUSTA ---

// Estendemos as props do botão e adicionamos uma para o container
interface RippleButtonProps extends ButtonProps {
  containerClassName?: string;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  className,
  containerClassName,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRipple = (event: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    // Criamos a ondulação
    const circle = document.createElement("span");
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    // Calculamos a posição do clique RELATIVA AO CONTAINER
    circle.style.left = `${
      event.clientX - container.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - container.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    // Garantimos que apenas um ripple exista por vez dentro do container
    const existingRipple = container.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    // Adicionamos a ondulação ao CONTAINER, não ao botão
    container.appendChild(circle);
  };

  return (
    // O WRAPPER: é ele que ouve o clique e contém o ripple.
    <div
      ref={containerRef}
      onClick={handleRipple}
      className={`relative inline-block overflow-hidden rounded-md ${containerClassName}`} // Usamos o mesmo border-radius do botão
    >
      {/* O BOTÃO: agora ele é apenas um elemento visual estável.
          Passamos todas as props restantes para ele. */}
      <Button className={`w-full ${className}`} {...props}>
        {children}
      </Button>
    </div>
  );
};

// --- Componente Hero Principal (sem mais alterações no seu corpo) ---
const Hero: React.FC = () => {
  // ... (todo o resto do seu componente Hero permanece exatamente o mesmo)
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 125;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const mainSection = document.getElementById("home");
    if (!mainSection) return;

    const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
      mainSection.style.setProperty("--mouse-x", `${e.clientX}px`);
      mainSection.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateY = (x / (width / 2)) * 5;
    const rotateX = (-y / (height / 2)) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease-out";
  };

  const handleCardMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.4s ease-in-out";
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full relative flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      style={{
        backgroundImage: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), hsla(217, 80%, 80%, 0.15) 0%, transparent 40%)`,
      }}
    >
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white animate-fade-in-up">
              Mauro Júnior
            </h1>
            <div
              className="mt-4 text-2xl md:text-3xl font-mono text-blue-600 dark:text-blue-400 h-16 lg:h-10 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span>{text}</span>
              <span className="animate-blink border-r-4 border-blue-600 dark:border-blue-400 ml-1"></span>
            </div>
            <p
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Especializado em criar interfaces de usuário dinâmicas e sistemas
              back-end robustos. Transformo desafios complexos em experiências
              digitais intuitivas e eficientes.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a href="#contact">
                <RippleButton
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-shadow"
                  containerClassName="w-full sm:w-auto"
                >
                  Entre em Contato <ArrowRight className="ml-2 h-5 w-5" />
                </RippleButton>
              </a>
              <a href="/assets/mauro_cv.pdf" download="Mauro_Junior_CV.pdf">
                <RippleButton
                  size="lg"
                  variant="outline"
                  containerClassName="w-full sm:w-auto"
                >
                  Download CV
                </RippleButton>
              </a>
            </div>
            <div
              className="mt-12 flex justify-center lg:justify-start space-x-4 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Icon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="w-[350px] h-[450px] bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="w-full h-full p-8 flex flex-col justify-between items-center pointer-events-none"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
                  <img
                    src="/assets/sua-foto.jpg"
                    alt="Foto de perfil de Mauro Júnior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-2xl text-gray-900 dark:text-white">
                    Mauro Júnior
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Software Developer
                  </p>
                </div>
                <div className="w-full text-center text-xs text-gray-500 dark:text-gray-400 font-mono">
                  <p>// Conecte-se comigo</p>
                  <p>mauro.dk@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
