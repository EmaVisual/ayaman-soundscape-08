import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, Facebook, Music } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '#home' },
    { name: 'El Estudio', href: '#studio' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' },
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
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black-deep/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation (Left Side) */}
          <div className="flex items-center space-x-8">
            <img 
              src="/lovable-uploads/bf4f91f1-5490-48f8-b2e1-7df0b6d0487b.png" 
              alt="Ayaman Estudio" 
              className="h-12 w-auto"
            />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-300 relative group ${
                    isScrolled ? 'text-white hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>
          </div>

          {/* Social Media Icons and CTA Button (Right Side) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-primary transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <a
              href="https://wa.me/584145672162"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Reservar Sesión</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black-deep/95 backdrop-blur-sm border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-white hover:text-primary font-medium transition-colors duration-300 px-4 py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="https://wa.me/584145672162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2 w-full justify-center"
                >
                  <span>Reservar Sesión</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;