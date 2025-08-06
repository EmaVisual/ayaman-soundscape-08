import { Mic, Headphones, Volume2, Film } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Mic,
      title: 'Grabación Profesional',
      description: 'Captura cada detalle de tu música con equipos de alta gama y técnicas probadas por más de 20 años.',
      features: ['Micrófonos condensador premium', 'Salas acústicamente tratadas', 'Múltiples canales disponibles']
    },
    {
      icon: Headphones,
      title: 'Mezcla Digital',
      description: 'Dale vida a tus grabaciones con mezclas que resaltan cada elemento musical con claridad y potencia.',
      features: ['Procesamiento digital avanzado', 'Monitores de referencia', 'Revisiones ilimitadas']
    },
    {
      icon: Volume2,
      title: 'Mastering',
      description: 'El toque final que hace que tu música suene profesional en cualquier plataforma o sistema de sonido.',
      features: ['Análisis espectral completo', 'Optimización para streaming', 'Formatos múltiples']
    },
    {
      icon: Film,
      title: 'Diseño Sonoro',
      description: 'Crea experiencias audiovisuales únicas para cine, video y contenido multimedia.',
      features: ['Post-producción de audio', 'Efectos sonoros originales', 'Sincronización perfecta']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              NUESTROS <span className="text-gradient">SERVICIOS</span>
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Ofrecemos servicios integrales de producción musical, desde la grabación inicial hasta el mastering final, 
              con la calidad y experiencia que tu música merece.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection delay={200}>
          <div className="relative mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="card-elevated p-6 text-center group">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-secondary-text mb-4 leading-relaxed">{service.description}</p>
                    
                    <ul className="text-sm text-secondary-text space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={300}>
          <div className="text-center">
            <button className="btn-primary group">
              <span>Conoce más sobre nuestros servicios</span>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;