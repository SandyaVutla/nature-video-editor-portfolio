
import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d110f]/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-lg font-medium tracking-tight cursor-pointer font-serif italic" onClick={() => scrollTo('hero')}>
          Tejesh Jonnadula / Video Editor
        </div>
        <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
          <button onClick={() => scrollTo('work')} className="hover:text-[#a3b899] transition-colors">Work</button>
          <button onClick={() => scrollTo('about')} className="hover:text-[#a3b899] transition-colors">About</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-[#a3b899] transition-colors">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
