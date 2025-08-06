import { Instagram, Youtube, Facebook, Music, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'El Estudio', href: '#studio' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/ayaman_estudio/',
      icon: Instagram
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@ayamanestudio/',
      icon: Youtube
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/AyamanEstudio/',
      icon: Facebook
    },
    {
      name: 'SoundCloud',
      href: 'https://soundcloud.com/ayaman-estudi',
      icon: Music
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/5666da8d-e0f4-462f-94a1-cdb2dd02a83a.png)` }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Studio Info */}
          <AnimatedSection delay={100}>
            <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/bf4f91f1-5490-48f8-b2e1-7df0b6d0487b.png" 
                alt="Ayaman Estudio" 
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Producción musical profesional en el corazón de Barquisimeto. 
              Más de 20 años transformando ideas musicales en obras maestras sonoras.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <a
                href="https://maps.app.goo.gl/oDpxxkyjPx9Nt6Ra7"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors duration-300"
              >
                Calle 26 con Carreras 17 y 18
              </a>
              <p>Barquisimeto, Estado Lara</p>
              <p>Venezuela</p>
              <a 
                href="https://wa.me/584145672162" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors duration-300"
              >
                +58 414-567-2162
              </a>
            </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={200}>
            <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Servicios</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Grabación Profesional</p>
                <p>• Mezcla Digital</p>
                <p>• Mastering</p>
                <p>• Diseño Sonoro</p>
              </div>
            </div>
            </div>
          </AnimatedSection>

          {/* Social Media & Contact */}
          <AnimatedSection delay={300}>
            <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/584145672162"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-300"
              >
                WhatsApp Directo
              </a>
              
              <a
                href="mailto:contacto@ayamanestudio.com"
                className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
              >
                contacto@ayamanestudio.com
              </a>
            </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection delay={400}>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Ayaman Estudio. Todos los derechos reservados.
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Diseñado por</span>
                <a
                  href="https://staymadagency.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover transition-colors duration-300 font-medium inline-flex items-center space-x-1 group"
                >
                  <span>Stay Mad Agency</span>
                  <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;