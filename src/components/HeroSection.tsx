  
import React from 'react';

function HeroSection() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-6xl font-bold mb-6">
        Exchange Skills,<br/>
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Transform Lives
        </span>
      </h1>
      <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Connect with learners worldwide through live video sessions. Share what you know, learn what you love.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/40 transition-all">
          Start Learning Today ✨
        </button>
        <button className="px-8 py-4 border-2 border-purple-500 rounded-xl text-lg font-semibold text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
          Already a Member?
        </button>
      </div>
    </section>
  );
}

export default HeroSection;