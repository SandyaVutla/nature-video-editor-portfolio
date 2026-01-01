
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
