import { useState, useEffect } from 'react';
import { Mic, Headphones, Volume2, Settings, ChevronLeft, ChevronRight, Dot } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const studioImages = [
    {
      src: '/lovable-uploads/86d322b9-dd88-4671-b6af-7b974260decb.png',
      alt: 'Batería profesional en Ayaman Estudio'
    },
    {
      src: '/lovable-uploads/80a6444a-f769-421b-9c3d-ed5458ed01c1.png',
      alt: 'Grabadora vintage en el estudio'
    },
    {
      src: '/lovable-uploads/9f3649dd-c777-430e-94e7-8d206a6b2831.png',
      alt: 'Sala de grabación con espuma acústica'
    },
    {
      src: '/lovable-uploads/58442bf2-5b50-4e9e-8075-a57c25817632.png',
      alt: 'Teclados y equipos del estudio'
    },
    {
      src: '/lovable-uploads/de544125-53a0-4b82-aa70-32bccdeb62a6.png',
      alt: 'Instrumentos de percusión'
    },
    {
      src: '/lovable-uploads/66a6225d-7d4a-4f9d-94d7-997dbd67377a.png',
      alt: 'Variedad de instrumentos musicales'
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % studioImages.length);
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused, studioImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % studioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + studioImages.length) % studioImages.length);
  };

  const studioGear = [
    {
      icon: Mic,
      title: 'Micrófonos Premium',
      items: ['Neumann U87', 'AKG C414', 'Shure SM7B', 'Rode Procaster']
    },
    {
      icon: Headphones,
      title: 'Monitores de Estudio',
      items: ['Yamaha HS8', 'KRK Rokit 5', 'Audio-Technica ATH-M50x']
    },
    {
      icon: Volume2,
      title: 'Procesadores de Audio',
      items: ['Focusrite Scarlett 18i20', 'Universal Audio Apollo Twin', 'Behringer X32']
    },
    {
      icon: Settings,
      title: 'Software Profesional',
      items: ['Pro Tools HDX', 'Logic Pro X', 'Ableton Live Suite', 'Waves Plugins']
    }
  ];

  return (
    <section id="studio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:order-1">
            <AnimatedSection delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                DONDE LA MÚSICA <span className="text-gradient">COBRA VIDA</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-lg text-secondary-text mb-6 leading-relaxed">
                En el corazón de Barquisimeto, Ayaman Estudio ha sido el hogar creativo de más de 500 proyectos musicales. 
                Licar Vásquez lidera este espacio con pasión y precisión técnica que solo dan dos décadas de experiencia.
              </p>
              
              <p className="text-lg text-secondary-text mb-8 leading-relaxed">
                Nuestro compromiso es simple: transformar ideas musicales en obras maestras sonoras. Con equipos de última 
                generación y un entorno acústicamente perfecto, cada proyecto recibe la atención que merece.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-secondary-text">Proyectos Completados</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-secondary-text">Artistas Colaboradores</div>
                </div>
              </div>

              <button className="btn-primary group">
                <span>Conoce Nuestra Historia</span>
              </button>
            </AnimatedSection>

            {/* Studio Gear Section */}
            <AnimatedSection delay={400}>
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">NUESTRO GEAR PROFESIONAL</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studioGear.map((gear, index) => {
                  const IconComponent = gear.icon;
                  return (
                    <div key={index} className="bg-card rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">{gear.title}</h4>
                      </div>
                      <ul className="space-y-1">
                        {gear.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-secondary-text flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                  </div>
                );
              })}
              </div>
            </div>
            </AnimatedSection>
          </div>

          {/* Image Carousel */}
           <div className="lg:order-2">
            <AnimatedSection delay={500} animation="scale-in">
              <div className="relative">
                <div 
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <img
                    src={studioImages[currentSlide].src}
                    alt={studioImages[currentSlide].alt}
                    className="w-full h-[500px] object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {studioImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentSlide === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Creative Space Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/bf4f91f1-5490-48f8-b2e1-7df0b6d0487b.png" 
                        alt="Ayaman Estudio Logo" 
                        className="w-8 h-auto"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <Dot className="w-6 h-6 text-green-500 animate-pulse" />
                        <span className="text-foreground font-medium">Tu espacio de creación</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;