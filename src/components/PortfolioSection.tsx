import albumCollection from '@/assets/album-collection.jpg';
import AnimatedSection from './AnimatedSection';

const PortfolioSection = () => {
  // Placeholder album covers data
  const albums = [
    { id: 1, title: 'Ritmos Urbanos', artist: 'MC Flow' },
    { id: 2, title: 'Sinfonia Digital', artist: 'Electronica Beats' },
    { id: 3, title: 'Raices Venezolanas', artist: 'Folklore Moderno' },
    { id: 4, title: 'Rock Latino', artist: 'Fuego Band' },
    { id: 5, title: 'Jazz Contemporaneo', artist: 'Latin Jazz Ensemble' },
    { id: 6, title: 'Pop Alternativo', artist: 'Nuevo Sonido' },
    { id: 7, title: 'Reggaeton 2024', artist: 'Urban Kings' },
    { id: 8, title: 'Baladas del Alma', artist: 'Corazón Musical' },
    { id: 9, title: 'Hip Hop Nacional', artist: 'Rap Venezuela' },
    { id: 10, title: 'Merengue Fusion', artist: 'Tropical Mix' },
    { id: 11, title: 'Indie Nacional', artist: 'Nueva Generación' },
    { id: 12, title: 'Crossover Latino', artist: 'Fusion Total' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ARTISTAS QUE HAN <span className="text-gradient">CONFIADO</span> EN NOSOTROS
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Desde artistas emergentes hasta reconocidas figuras del panorama musical venezolano, 
              todos han encontrado en Ayaman el socio perfecto para sus proyectos.
            </p>
          </div>
        </AnimatedSection>

        {/* Album Grid */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
          {albums.map((album, index) => (
            <div 
              key={album.id} 
              className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{ 
                  backgroundImage: `url(${albumCollection})`,
                  backgroundPosition: `${(index % 4) * 25}% ${Math.floor(index / 4) * 25}%`
                }}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-2">
                    <div className="font-semibold text-sm mb-1 line-clamp-1">{album.title}</div>
                    <div className="text-xs opacity-90 line-clamp-1">{album.artist}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </AnimatedSection>

        {/* Stats and CTA */}
        <AnimatedSection delay={300}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold">
                +100 colaboraciones con músicos y productores de toda Venezuela
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-secondary-text">Géneros Musicales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-secondary-text">Singles en Plataformas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-secondary-text">Álbumes Completos</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PortfolioSection;