import HeroSection from '../components/home/HeroSection';
import StorytellingSection from '../components/home/StorytellingSection';
import CraftsmanshipShowcase from '../components/home/CraftsmanshipShowcase';
import CoutureProcessTimeline from '../components/home/CoutureProcessTimeline';
import RealBridesGallery from '../components/home/RealBridesGallery';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import AtelierExperience from '../components/home/AtelierExperience';
import LuxuryConsultationCTA from '../components/home/LuxuryConsultationCTA';

export default function Home() {
  return (
    <>
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Heritage Story */}
      <StorytellingSection />

      {/* 3. Craftsmanship Showcase */}
      <CraftsmanshipShowcase />

      {/* 4. Couture Process Timeline */}
      <CoutureProcessTimeline />

      {/* 5. Real Brides Gallery */}
      <RealBridesGallery />

      {/* 6. Testimonials */}
      <TestimonialsSlider />

      {/* 7. Atelier Experience */}
      <AtelierExperience />

      {/* 8. Luxury Consultation CTA */}
      <LuxuryConsultationCTA />
    </>
  );
}
