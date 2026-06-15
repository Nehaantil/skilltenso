import React from 'react';

function FeaturesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-slate-800/60 border border-slate-600/30 rounded-xl p-6 hover:-translate-y-2 transition-all">
          <h3 className="text-xl font-semibold mb-3">Live Video Sessions</h3>
          <p className="text-gray-400">Connect face-to-face with skilled teachers through high-quality video calls.</p>
        </div>

        <div className="bg-slate-800/60 border border-slate-600/30 rounded-xl p-6 hover:-translate-y-2 transition-all">
          <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
          <p className="text-gray-400">Our algorithm matches you with the perfect learning partner based on your skills.</p>
        </div>

        <div className="bg-slate-800/60 border border-slate-600/30 rounded-xl p-6 hover:-translate-y-2 transition-all">
          <h3 className="text-xl font-semibold mb-3">Skill Exchange</h3>
          <p className="text-gray-400">Trade your expertise for new knowledge. Teach what you know and learn what you want.</p>
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;