import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20"
    >
      <div className="relative z-20 max-w-5xl w-full text-center space-y-8">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] text-[#e2e8e4]">
          Shaping <span className="italic">stories</span> through thoughtful editing.
        </h1>

        <p className="text-[#88a096] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
          I help creators and brands transform raw footage into engaging videos —
          from short-form content to long-form stories.
        </p>

        <div className="pt-16 max-w-6xl mx-auto w-full flex justify-center">
          <div className="aspect-[9/16] w-[320px] sm:w-[360px] md:w-[420px] rounded-lg overflow-hidden bg-black border border-white/5 shadow-2xl">
            <video
              src="/videos/showreel.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
