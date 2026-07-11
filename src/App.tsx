import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SkillsSection from './components/SkillsSection';
import CTASection from './components/CTASection';
import AuthModal from './components/AuthModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'signin' | 'signup'>('signup');

  function openModal(mode: 'signin' | 'signup') {
    setModalMode(mode);
    setIsModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-700 to-slate-800 text-white">
      <Navbar />
      <HeroSection onOpenModal={openModal} />
      <FeaturesSection />
      <SkillsSection />
      <CTASection onOpenModal={openModal} />
      <AuthModal
        isOpen={isModalOpen}
        mode={modalMode}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;