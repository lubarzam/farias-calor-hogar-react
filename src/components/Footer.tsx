
import { Phone } from 'lucide-react';
import stoveIcon from '@/assets/farias-stove-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hidden md:block bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12">
                <img 
                  src={stoveIcon} 
                  alt="Farías Calefacción - Instalación de estufas a leña y pellets en La Araucanía"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-flame font-bold text-xl">Farías</span>
                <span className="text-white font-semibold text-base -mt-1">Calefacción</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Más de 40 años brindando soluciones de calefacción confiables y eficientes 
              en La Araucanía.
            </p>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-flame" />
              <span className="text-gray-300">+56 9 9231 2523</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-flame">Nuestros Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Instalación de Estufas a Leña</li>
              <li>• Instalación de Estufas a Pellets</li>
              <li>• Cañones Calefactores</li>
              <li>• Mantención y Limpieza</li>
              <li>• Reparaciones Especializadas</li>
              <li>• Asesoría Técnica</li>
            </ul>
          </div>

          {/* Coverage Area */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-flame">Área de Cobertura</h4>
            <p className="text-gray-300 mb-3">
              Desde Vilcún hacia:
            </p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Vilcún  &nbsp;&nbsp; • Lautaro</li>
              <li>• Victoria  &nbsp;&nbsp; • Traiguén</li>
              <li>• Gorbea  &nbsp;&nbsp; • Toltén</li>
              <li>• Imperial  &nbsp;&nbsp; • Teodoro Schmidt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Farías Calefacción. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Técnico especialista en calefactores a leña y pellets multimarcas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
