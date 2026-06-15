import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SkillsSection from './components/SkillsSection';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-700 to-slate-800 text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SkillsSection />
      <CTASection />
    </div>
  );
}

export default App;