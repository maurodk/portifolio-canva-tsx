
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 82 },
        { name: 'NestJS', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Database',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Redis', level: 75 },
        { name: 'Prisma', level: 80 }
      ]
    },
    {
      icon: Globe,
      title: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'Linux', level: 75 }
      ]
    }
  ];

  const tools = [
    'VS Code', 'Figma', 'Postman', 'GitHub', 'Vercel', 'Netlify', 
    'Firebase', 'Supabase', 'Stripe', 'Socket.io', 'Jest', 'Cypress'
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="hover-scale hover-glow animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={inView ? skill.level : 0} 
                      className="h-2"
                      style={{ 
                        transition: `all 1s ease-in-out ${(categoryIndex * 0.1) + (skillIndex * 0.1)}s` 
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Ferramentas & Tecnologias
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover-scale hover-glow text-gray-700 dark:text-gray-300 transition-all duration-300"
                style={{ animationDelay: `${0.8 + (index * 0.05)}s` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Palette,
              title: 'UI/UX Design',
              description: 'Criação de interfaces intuitivas com foco na experiência do usuário.'
            },
            {
              icon: Smartphone,
              title: 'Responsive Design',
              description: 'Desenvolvimento de aplicações que funcionam perfeitamente em todos os dispositivos.'
            },
            {
              icon: Globe,
              title: 'Web Performance',
              description: 'Otimização de aplicações para máxima velocidade e eficiência.'
            }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="text-center animate-fade-in-up hover-scale group"
              style={{ animationDelay: `${1 + (index * 0.1)}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
