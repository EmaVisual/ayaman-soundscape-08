import { MessageCircle, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/de544125-53a0-4b82-aa70-32bccdeb62a6.png)` }}
      >
        <div className="absolute inset-0 overlay-dark"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <AnimatedSection delay={100} animation="scale-in">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-10 h-10 text-primary" />
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={200}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿LISTO PARA EMPEZAR TU <span className="text-gradient">PRÓXIMO PROYECTO?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Haz clic abajo para contactarnos o agenda una visita al estudio. 
            Estamos aquí para hacer realidad tu visión musical.
          </p>
        </AnimatedSection>

        {/* Action Buttons */}
        <AnimatedSection delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <a
              href="https://wa.me/584145672162"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 group text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Reservar Sesión en WhatsApp</span>
            </a>
            
            <button className="btn-outline-white inline-flex items-center space-x-2 group text-lg px-8 py-4">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Agendar Visita al Estudio</span>
            </button>
          </div>
        </AnimatedSection>

        {/* Contact Info */}
        <AnimatedSection delay={600}>
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center md:text-left">
                <div className="text-white font-semibold mb-1">Teléfono / WhatsApp</div>
                <a 
                  href="tel:+584145672162" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  +58 414-567-2162
                </a>
              </div>
              <div className="text-center md:text-right">
                <div className="text-white font-semibold mb-1">Email</div>
                <a 
                  href="mailto:contacto@ayamanestudio.com" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  contacto@ayamanestudio.com
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;