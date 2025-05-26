import React from "react";
import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DiDocker,
  DiMongodb,
  DiPostgresql,
  DiAws,
  DiFirebase,
  DiVisualstudio,
  DiMysql,
  DiAndroid,
} from "react-icons/di";
import {
  SiTypescript,
  SiFigma,
  SiNextdotjs,
  SiCplusplus,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAndroidstudio,
} from "react-icons/si";
import {
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaPython,
  FaJsSquare,
  FaFileExcel,
} from "react-icons/fa";

const Skills = () => {
  const programmingLanguages = [
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      color: "from-yellow-500 to-yellow-600",
      iconColor: "text-yellow-400",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "from-green-500 to-green-600",
      iconColor: "text-blue-400",
    }, // Python tem duas cores, azul e amarelo
    {
      name: "React",
      icon: <FaReact />,
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "from-green-600 to-green-700",
      iconColor: "text-green-500",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "from-orange-500 to-red-600",
      iconColor: "text-orange-500",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "from-blue-400 to-sky-500",
      iconColor: "text-blue-500",
    }, // Adicionando CSS separadamente
    {
      name: "Java",
      icon: <FaJava />,
      color: "from-red-600 to-orange-600",
      iconColor: "text-red-500",
    }, // Cor aproximada do logo do Java
    {
      name: "NEXT.js",
      icon: <SiNextdotjs />,
      color: "from-red-600 to-orange-600",
      iconColor: "text-red-500",
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
      color: "from-red-600 to-orange-600",
      iconColor: "text-red-500",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "from-purple-600 to-purple-700",
      iconColor: "text-purple-500",
    }, // Cor aproximada do logo do PHP
  ];

  const technologies = [
    { name: "Git", icon: <FaGitAlt />, iconColor: "text-orange-600" },
    {
      name: "GitHub",
      icon: <FaGithub />,
      iconColor: "text-gray-700 dark:text-gray-300",
    }, // GitHub icon é geralmente monocromático
    { name: "Docker", icon: <DiDocker />, iconColor: "text-blue-500" },
    { name: "MongoDB", icon: <DiMongodb />, iconColor: "text-green-500" },
    { name: "MySQL", icon: <DiMysql />, iconColor: "text-blue-700" },
    { name: "Firebase", icon: <DiFirebase />, iconColor: "text-yellow-500" }, // SiFirebase substitui DiFirebase que tem um estilo diferente
    { name: "Figma", icon: <SiFigma />, iconColor: "text-pink-500" }, // Figma tem várias cores, pink é uma delas
    {
      name: "VS Code",
      icon: <DiVisualstudio />,
      iconColor: "text-blue-500",
    },
    {
      name: "Adobe Photoshop",
      icon: <SiAdobephotoshop />,
      iconColor: "text-blue-500",
    },
    {
      name: "Adobe Premiere",
      icon: <SiAdobepremierepro />,
      iconColor: "text-blue-500",
    },
    {
      name: "Excel",
      icon: <FaFileExcel />,
      iconColor: "text-blue-500",
    },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio />,
      color: "from-purple-600 to-purple-700",
      iconColor: "text-purple-500",
    }, // Cor aproximada do logo do PHP
  ];

  const specialties = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Criação de interfaces modernas e responsivas com foco na experiência do usuário.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Desenvolvimento de APIs robustas e sistemas escaláveis.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Modelagem e otimização de bancos de dados relacionais e NoSQL.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Globe,
      title: "Full Stack",
      description:
        "Desenvolvimento completo de aplicações web do frontend ao backend.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Tecnologias e linguagens que domino para criar soluções completas e
            eficientes.
          </p>
        </div>

        {/* Programming Languages */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Linguagens de Programação
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programmingLanguages.map((lang, index) => (
              <div
                key={lang.name}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover-scale hover-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <span className="text-2xl">{lang.icon}</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Tecnologias & Ferramentas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover-scale hover-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card
              key={specialty.title}
              className="hover-scale hover-glow animate-fade-in-up"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${specialty.color} flex items-center justify-center`}
                >
                  <specialty.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{specialty.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  {specialty.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
