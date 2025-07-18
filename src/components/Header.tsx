
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fariasLogo from '@/assets/farias-logo-nuevo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Perfil', href: '#perfil' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 md:h-14 max-w-[240px] md:max-w-[280px]">
              <img 
                src={fariasLogo} 
                alt="Farías Calefacción - Instalación de estufas a leña y pellets en La Araucanía"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-flame transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              className="bg-flame hover:bg-flame-dark text-white"
              onClick={() => window.open('https://wa.me/56912345678', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-600 bg-charcoal shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-flame transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-flame hover:bg-flame-dark text-white w-full mt-4 py-3"
                onClick={() => {
                  window.open('https://wa.me/56912345678', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
