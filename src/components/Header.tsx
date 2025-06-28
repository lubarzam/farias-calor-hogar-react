
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Perfil', href: '#perfil' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-flame rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-4 bg-flame rounded-t-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-charcoal">Soluciones Farías</h1>
              <p className="text-xs text-gray-600">Especialistas en Calefacción</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          <div className="hidden md:flex items-center space-x-4">
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
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-flame transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-flame hover:bg-flame-dark text-white w-full mt-4"
                onClick={() => window.open('https://wa.me/56912345678', '_blank')}
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
