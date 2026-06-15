  
import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl">
          📹
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          SkillTenso
        </span>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 border border-white/20 rounded-lg hover:border-purple-400 hover:text-purple-400 transition-all">
          Sign In
        </button>
        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/40 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;