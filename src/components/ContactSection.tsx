import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Grabación Profesional',
    'Mezcla Digital',
    'Mastering',
    'Diseño Sonoro',
    'Producción Completa',
    'Consultoría Musical'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos pronto. ¡Gracias por elegir Ayaman Estudio!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              CONTÁCTANOS
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Estamos ubicados en el corazón de Barquisimeto. Contáctanos para iniciar tu próximo proyecto musical.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection delay={200}>
            <div>
            {/* Contact Details */}
            <div className="space-y-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Dirección</h3>
                  <a 
                    href="https://maps.app.goo.gl/oDpxxkyjPx9Nt6Ra7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary-text hover:text-primary transition-colors duration-300"
                  >
                     Calle 26 con Carreras 17 y 18<br />
                     Barquisimeto, Estado Lara<br />
                     Venezuela
                   </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Teléfono / WhatsApp</h3>
                   <a 
                     href="https://wa.me/584145672162" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-secondary-text hover:text-primary transition-colors duration-300"
                   >
                    +58 414-567-2162
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:contacto@ayamanestudio.com" 
                    className="text-secondary-text hover:text-primary transition-colors duration-300"
                  >
                    contacto@ayamanestudio.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">Contacto Directo</h3>
              </div>
              <p className="text-green-700 mb-4">
                Para una respuesta más rápida, escríbenos directamente por WhatsApp
              </p>
              <a
                href="https://wa.me/584145672162"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir WhatsApp</span>
              </a>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d491.0522421488623!2d-69.3168568!3d10.0647999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767c5360fa77b%3A0x93869fda90e1ff68!2sAyaman%20Estudio!5e0!3m2!1sen!2sve!4v1754482036653!5m2!1sen!2sve"
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Ayaman Estudio"
              />
            </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={300}>
            <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+58 414-123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto musical..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-3">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;