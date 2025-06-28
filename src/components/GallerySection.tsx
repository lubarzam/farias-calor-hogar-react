
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Instalación de estufa a leña en living',
      title: 'Instalación Residencial'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cañón calefactor instalado',
      title: 'Cañón Calefactor'
    },
    {
      src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Estufa a pellets moderna',
      title: 'Estufa a Pellets'
    },
    {
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Chimenea instalada profesionalmente',
      title: 'Chimenea Tradicional'
    },
    {
      src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Mantención de sistema de calefacción',
      title: 'Servicio de Mantención'
    },
    {
      src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da60c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Instalación en casa de campo',
      title: 'Casa de Campo'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Galería de Trabajos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mira algunos de nuestros trabajos realizados. Cada instalación es única y 
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
                    <h3 className="font-semibold">{image.title}</h3>
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
