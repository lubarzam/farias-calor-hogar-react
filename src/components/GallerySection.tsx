
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/lovable-uploads/80db0da0-1e74-4812-82fc-74ea6275c9ce.png',
      alt: 'Estufa a pellets instalada en casa residencial',
      title: 'Instalación Residencial - Estufa a Pellets'
    },
    {
      src: '/lovable-uploads/b5a19412-0c51-4322-8894-e26a0bc1a306.png',
      alt: 'Estufa a pellets funcionando con llama visible',
      title: 'Estufa a Pellets en Funcionamiento'
    },
    {
      src: '/lovable-uploads/adfee0ed-f7cd-4a1b-b8d8-71e8f7f998d1.png',
      alt: 'Cocina a leña con horno instalada en cocina',
      title: 'Cocina a Leña con Horno'
    },
    {
      src: '/lovable-uploads/74bdf934-82d5-46cf-9e0d-e47d0863cda4.png',
      alt: 'Instalación de estufa en casa de madera',
      title: 'Instalación en Casa de Madera'
    },
    {
      src: '/lovable-uploads/bd533627-0cd8-4735-a49d-0bf1a4067f16.png',
      alt: 'Estufa instalada con cañería completa',
      title: 'Instalación con Sistema de Cañerías'
    },
    {
      src: '/lovable-uploads/7e90d829-89f2-4385-9d20-eac7b986f5b3.png',
      alt: 'Sistema de cañerías exteriores instalado',
      title: 'Sistema de Cañerías Exteriores'
    },
    {
      src: '/lovable-uploads/fd7ac086-239a-48bd-b039-c6766cc0bcb2.png',
      alt: 'Cañería de salida de humos en techo',
      title: 'Instalación de Cañería en Techo'
    },
    {
      src: '/lovable-uploads/fd8faa15-ff99-4c72-93ce-5c6d4d23cdd8.png',
      alt: 'Proceso de mantención de estufa Slim 900',
      title: 'Mantención Estufa Slim 900'
    },
    {
      src: '/lovable-uploads/cb361b94-a948-4894-92f1-971ebe953035.png',
      alt: 'Mantención de estufa Italy 7000',
      title: 'Mantención Estufa Italy 7000'
    },
    {
      src: '/lovable-uploads/989ceb14-2cbc-480e-abae-78b969ff57ca.png',
      alt: 'Equipo de trabajo Arnesu con vehículo de servicio',
      title: 'Equipo Profesional Arnesu'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Galería de Trabajos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos reales. Cada instalación es única y 
            se adapta perfectamente a las necesidades de nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-flame transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Quieres que tu próximo proyecto aparezca aquí?
          </p>
          <button 
            className="bg-flame hover:bg-flame-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            onClick={() => window.open('https://wa.me/56912345678', '_blank')}
          >
            Solicitar Presupuesto
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
