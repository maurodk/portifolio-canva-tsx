import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "maurodevkyo@gmail.com",
      href: "maurodevkyo@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (77) 98155-5312",
      href: "tel:+5577981555312",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Vitória da Conquista, Bahia",
      href: "#",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Vamos Conversar?</span>
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="hover-scale hover-glow animate-fade-in-left cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center`}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h3>
                      <a
                        href={info.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional Contact Options */}
            <Card
              className="animate-fade-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Outras Formas de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start hover-scale"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar uma Call
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start hover-scale"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in-right hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="hover-glow focus:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Seu Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="hover-glow focus:scale-105 transition-transform"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="hover-glow focus:scale-105 transition-transform"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua mensagem..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="hover-glow focus:scale-105 transition-transform resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full hover-scale hover-glow group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Vamos transformar suas ideias em realidade. Entre em contato hoje
              mesmo e vamos discutir como posso ajudar você a alcançar seus
              objetivos.
            </p>
            <Button size="lg" variant="secondary" className="hover-scale">
              <Mail className="mr-2 h-5 w-5" />
              Iniciar Conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
