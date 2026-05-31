import HeroSection from '../components/home/HeroSection';
import StorytellingSection from '../components/home/StorytellingSection';
import MasonryGallery from '../components/home/MasonryGallery';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSlider from '../components/home/TestimonialsSlider';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorytellingSection />
      <MasonryGallery />
      <ServicesSection />
      <TestimonialsSlider />
    </>
  );
}
