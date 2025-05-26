import React from "react";
import {
  Heart,
  Code,
  Coffee,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-gradient">
                Portfolio
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Desenvolvedor apaixonado por criar soluções digitais inovadoras.
              Sempre em busca de novos desafios e oportunidades para crescer.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/maurodk",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/omaurojr/",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 hover-scale transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Início" },
                { href: "#about", label: "Sobre" },
                { href: "#projects", label: "Projetos" },
                { href: "#skills", label: "Habilidades" },
                { href: "#contact", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Desenvolvimento Web",
                "Aplicações Mobile",
                "UI/UX Design",
                "Consultoria Tech",
                "Otimização",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>e muito</span>
            <Coffee className="h-4 w-4 text-yellow-600" />
            <span>por Mauro D. Kyo</span>
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} Portfolio. Todos os direitos reservados.
          </div>
        </div>

        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg hover-scale animate-pulse-glow z-50"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
