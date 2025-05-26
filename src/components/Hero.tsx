import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Desenvolvedor Full Stack",
    "Criador de Soluções",
    "Full Stack Developer",
    "Solution's Creator",
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];

    if (isTyping) {
      if (currentText.length < currentRole.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentIndex, isTyping, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-bounce-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                👨🏻‍💻
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gray-900 dark:text-white">Olá, eu sou o</span>
            <br />
            <span className="text-gradient">Mauro</span>
          </h1>

          {/* Typing Animation */}
          <div
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-mono">
              {currentText}
              <span className="animate-blink border-r-2 border-blue-600 ml-1"></span>
            </span>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Transformo ideias em código e código em soluções incríveis.
            Fissurado em criar experiências digitais que fazem a diferença.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button size="lg" className="hover-scale hover-glow group">
              Ver Projetos
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="hover-scale group">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
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
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover-scale hover-glow transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
