import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AnimatedBackground from './components/UI/AnimatedBackground';
import FloatingParticles from './components/UI/FloatingParticles';
import LoadingScreen from './components/UI/LoadingScreen';
import CursorGlow from './components/UI/CursorGlow';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import BecomePartnerPage from './pages/BecomePartnerPage';
import ContactPage from './pages/ContactPage';
import ReturnPowerbankPage from './pages/ReturnPowerbankPage';
import { isSafari } from './utils/browserDetection';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isSafariBrowser = isSafari();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
          {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
          
          {!isLoading && (
            <>
              <AnimatedBackground />
              {!isSafariBrowser && <FloatingParticles />}
              {!isSafariBrowser && <CursorGlow />}
              <ScrollToTop />
              <div className="relative z-10">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/how-it-works" element={<HowItWorksPage />} />
                    <Route path="/become-partner" element={<BecomePartnerPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/return-powerbank" element={<ReturnPowerbankPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </>
          )}
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;