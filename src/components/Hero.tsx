import { PlayCircle, MessageCircle } from 'lucide-react';
// Using uploaded studio image directly
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(/lovable-uploads/5666da8d-e0f4-462f-94a1-cdb2dd02a83a.png)` }}
      >
        <div className="absolute inset-0 overlay-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Logo */}
        <AnimatedSection delay={200} animation="scale-in">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/614b8a04-14d9-40e1-b61b-08b28b679356.png" 
              alt="Ayaman Estudio" 
              className="h-48 md:h-64 lg:h-80 w-auto mx-auto"
            />
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Grabación, mezcla, mastering y diseño sonoro con más de 20 años de experiencia en el corazón de Barquisimeto.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.youtube.com/@ayamanestudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white inline-flex items-center space-x-2 group"
            >
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Escucha Nuestro Trabajo</span>
            </a>
            
            <a
              href="https://wa.me/584145672162"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Contáctanos</span>
            </a>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={800}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-300">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Producciones Realizadas</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300">Colaboraciones</div>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </section>
  );
};

export default Hero;