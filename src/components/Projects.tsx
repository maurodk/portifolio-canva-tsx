import React, { useState } from "react";
import { ExternalLink, Github, Eye, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Interface para definir a estrutura de um objeto de projeto
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "fullstack" | "frontend" | "backend";
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

// Interface para definir a estrutura de um objeto de categoria
interface Category {
  id: string;
  label: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Ganbatte Hiragana!",
      description:
        "Plataforma de treino e aprendizado de Hiragana Japonês, com exercícios interativos para iniciantes e dicionário integrado!",
      image: "/assets/hiragana.jpg",
      category: "fullstack",
      technologies: ["Javascript", "CSS", "TailwindCSS", "HTML"],
      liveUrl: "https://ganbatte-hiragana.vercel.app/",
      githubUrl: "https://github.com/maurodk/GanbatteHiragana",
      featured: true,
    },
    {
      id: 2,
      title: "CV Personálizavel",
      description:
        "Página estática de apresentação de currículo, com opções de personalização e responsividade.",
      image: "/assets/curriculo.jpg",
      category: "frontend",
      technologies: ["JavaScript", "CSS", "HTML"],
      liveUrl: "https://curriculum-six-kappa.vercel.app/",
      githubUrl: "https://github.com/maurodk/curriculum",
      featured: false,
    },
    {
      id: 3,
      title: "API REST Weather",
      description:
        "API robusta para consulta de dados meteorológicos com cache inteligente e documentação completa.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Site portfolio responsivo com animações suaves e design moderno.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Chat Application",
      description:
        "Aplicação de chat em tempo real com salas privadas e compartilhamento de arquivos.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "fullstack",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description:
        "Dashboard interativo para visualização de dados com gráficos dinâmicos e filtros avançados.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "frontend",
      technologies: ["React", "D3.js", "TypeScript", "Recharts"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  const categories: Category[] = [
    { id: "all", label: "Todos" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Meus Projetos</span>
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Uma seleção dos meus trabalhos mais recentes, demonstrando
            diferentes tecnologias e abordagens para resolver problemas únicos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="hover-scale"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-scale hover-glow animate-fade-in-up group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Imagem do projeto ${project.title}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600">
                    Destaque
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 p-4">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver demo do projeto ${project.title}`}
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="hover-scale"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código fonte do projeto ${project.title}`}
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="hover-scale"
                      >
                        <Code className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      aria-label={`Ver demo do projeto ${project.title}`}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full hover-scale"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      disabled
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full hover-scale"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      disabled
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Button
            size="lg"
            variant="outline"
            className="hover-scale hover-glow"
          >
            Ver Mais Projetos
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
