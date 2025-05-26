
import React from 'react';
import { Code, Palette, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Desenvolvimento',
      description: 'Criação de aplicações web modernas com as melhores tecnologias do mercado.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Interface elegante e experiência do usuário pensada em cada detalhe.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre em busca de soluções criativas e tecnologias emergentes.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimização e velocidade para garantir a melhor experiência possível.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Sobre Mim</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Desenvolvedor apaixonado por tecnologia com mais de X anos de experiência criando 
            soluções digitais inovadoras. Especializado em desenvolvimento full-stack com foco 
            em performance e experiência do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Minha Jornada
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Comecei minha jornada no desenvolvimento há alguns anos, movido pela curiosidade 
                de entender como as coisas funcionam por trás das telas. Desde então, tenho me 
                dedicado a aprender e dominar as tecnologias mais modernas do mercado.
              </p>
              <p>
                Acredito que o código bem escrito é uma forma de arte, e cada projeto é uma 
                oportunidade de criar algo único e impactante. Meu objetivo é sempre entregar 
                soluções que não apenas funcionem, mas que enchantem os usuários.
              </p>
              <p>
                Quando não estou programando, você pode me encontrar explorando novas tecnologias, 
                contribuindo para projetos open source ou compartilhando conhecimento com a 
                comunidade de desenvolvedores.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '50+', label: 'Projetos Completos' },
                { number: '3+', label: 'Anos de Experiência' },
                { number: '20+', label: 'Tecnologias' },
                { number: '100%', label: 'Dedicação' }
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover-scale hover-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="hover-scale hover-glow animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
