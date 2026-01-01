import React, { useState } from "react";

const Hero: React.FC = () => {
  const vimeoId = "1150866069";
  const [soundOn, setSoundOn] = useState(false);

  const mutedSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0`;
  const soundSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=0&loop=1&title=0&byline=0&portrait=0`;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20"
    >
      <div className="relative z-20 max-w-5xl w-full text-center space-y-12">

        {/* TEXT — kept exactly as you asked */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] text-[#e2e8e4]">
            Shaping <span className="italic">stories</span> through thoughtful editing.
          </h1>

          <p className="text-[#88a096] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            I help creators and brands transform raw footage into engaging videos —
            from short-form content to long-form stories.
          </p>
        </div>

        {/* VIMEO SHOWREEL */}
        <div className="pt-12 max-w-6xl mx-auto w-full">
          <div
            className="relative aspect-video w-full rounded-sm overflow-hidden bg-black border border-white/5 shadow-2xl cursor-pointer"
            onMouseEnter={() => setSoundOn(true)}   // desktop hover
            onMouseLeave={() => setSoundOn(false)} // desktop leave
            onClick={() => setSoundOn(true)}       // mobile tap
          >
            <iframe
              key={soundOn ? "sound" : "muted"}
              src={soundOn ? soundSrc : mutedSrc}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Showreel"
            />

            {/* Hint */}
            {!soundOn && (
              <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.3em] text-white/70">
                Hover / Tap for sound
              </div>
            )}

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Meta */}
          <div className="mt-6 flex justify-between items-center text-[10px] uppercase tracking-[0.4em] text-[#5c6e65]">
            <span>Showreel 2024</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Featured Work
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
