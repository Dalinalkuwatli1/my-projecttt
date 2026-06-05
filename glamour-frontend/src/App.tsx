import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import PageWrapper from './components/layout/PageWrapper';
import { CartProvider } from './context/CartContext';

// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import DressDetails from './pages/DressDetails';
import Atelier from './pages/Atelier';
import Journal from './pages/Journal';
import BookAppointment from './pages/BookAppointment';
import TrunkShows from './pages/TrunkShows';
import RealBrides from './pages/RealBrides';
import OurStory from './pages/OurStory';
import Services from './pages/Services';
import SizeGuide from './pages/SizeGuide';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="collections" element={<PageWrapper><Collections /></PageWrapper>} />
          <Route path="collections/:id" element={<PageWrapper><DressDetails /></PageWrapper>} />
          <Route path="atelier" element={<PageWrapper><Atelier /></PageWrapper>} />
          <Route path="journal" element={<PageWrapper><Journal /></PageWrapper>} />
          <Route path="book-appointment" element={<PageWrapper><BookAppointment /></PageWrapper>} />
          <Route path="trunk-shows" element={<PageWrapper><TrunkShows /></PageWrapper>} />
          <Route path="real-brides" element={<PageWrapper><RealBrides /></PageWrapper>} />
          <Route path="our-story" element={<PageWrapper><OurStory /></PageWrapper>} />
          <Route path="services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="size-guide" element={<PageWrapper><SizeGuide /></PageWrapper>} />
          <Route path="faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </CartProvider>
  );
}
