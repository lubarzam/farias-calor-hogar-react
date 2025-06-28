
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import ProfileSection from '@/components/ProfileSection';
import ContactSection from '@/components/ContactSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ProfileSection />
      <ContactSection />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
