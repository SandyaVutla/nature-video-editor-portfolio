import React, { useState } from "react";

const LOAD_STEPS = [6, 13, 20];

// You can keep using vimeo.com links
const videoLinks = [
  "https://vimeo.com/1150865332",
  "https://vimeo.com/1150865304",
  "https://vimeo.com/1150865293",
  "https://vimeo.com/1150865277",
  "https://vimeo.com/1150865258",
  "https://vimeo.com/1150865246",
  "https://vimeo.com/1150864720",
  "https://vimeo.com/1150864730",
  "https://vimeo.com/1150864830",
  "https://vimeo.com/1150864897",
  "https://vimeo.com/1150864921",
  "https://vimeo.com/1150864991",
  "https://vimeo.com/1150865040",
  "https://vimeo.com/1150865918",
  "https://vimeo.com/1150865937",
  "https://vimeo.com/1150865967",
  "https://vimeo.com/1150865985",
  "https://vimeo.com/1150866013",
  "https://vimeo.com/1150866034",
  "https://vimeo.com/1150866054",
];

// helpers
const getVimeoId = (url: string) => url.match(/vimeo\.com\/(\d+)/)?.[1] || "";
const embedMuted = (id: string) =>
  `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0`;
const embedSound = (id: string) =>
  `https://player.vimeo.com/video/${id}?autoplay=1&muted=0&loop=0&title=0&byline=0&portrait=0`;

const VideoCard: React.FC<{
  url: string;
  isActive: boolean;
  onActivate: () => void;
}> = ({ url, isActive, onActivate }) => {
  const [hovered, setHovered] = useState(false);
  const id = getVimeoId(url);

  return (
    <div
      className="relative w-full h-[520px] bg-[#0d110f] rounded-sm overflow-hidden ring-1 ring-white/5 hover:ring-white/20 transition"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onActivate}
    >
      {/* Placeholder */}
      {!hovered && !isActive && (
        <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-[0.3em] uppercase text-[#3d4a43]">
          Preview
        </div>
      )}

      {/* Hover preview (muted) */}
      {hovered && !isActive && (
        <iframe
          src={embedMuted(id)}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
      )}

      {/* Active (sound + fullscreen ready) */}
      {isActive && (
        <iframe
          src={embedSound(id)}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
        />
      )}

      {/* Hint */}
      {!isActive && (
        <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.3em] text-white/70">
          Click for sound
        </div>
      )}

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  );
};

const WorkGrid: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleCount =
    stepIndex < LOAD_STEPS.length
      ? LOAD_STEPS[stepIndex]
      : videoLinks.length;

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 flex justify-between items-end">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#88a096]">
          Selected Work
        </h2>
        <span className="text-[10px] tracking-widest text-[#5c6e65]">
          {Math.min(visibleCount, videoLinks.length)} / {videoLinks.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {videoLinks.slice(0, visibleCount).map((url, i) => (
          <VideoCard
            key={url + i}
            url={url}
            isActive={activeIndex === i}
            onActivate={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {visibleCount < videoLinks.length && (
        <div className="mt-32 flex justify-center">
          <button
            onClick={() => setStepIndex((s) => s + 1)}
            className="text-[10px] uppercase tracking-[0.4em] text-[#88a096]
                       border border-white/5 px-12 py-5 rounded-full
                       hover:bg-white/5 hover:text-[#e2e8e4] transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default WorkGrid;
