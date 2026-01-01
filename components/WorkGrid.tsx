import React, { useRef, useState } from "react";

const ITEMS_PER_LOAD = 6;

/**
 * 🔧 ROTATION MAP
 * Add ONLY videos that appear rotated.
 * 0    → normal
 * 90   → rotate right
 * -90  → rotate left
 */
const rotationMap: Record<number, number> = {
  // example — adjust as needed
  2: 90,
  3: -90,
  7: -90,
  9: 90,
};

const videos = Array.from({ length: 31 }, (_, i) => {
  const index = i + 1;
  return {
    src: `/videos/edit-${String(index).padStart(2, "0")}.mp4`,
    rotate: rotationMap[index] ?? 0,
  };
});

const WorkGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {videos.slice(0, visibleCount).map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>

      {visibleCount < videos.length && (
        <div className="mt-24 flex justify-center">
          <button
            onClick={() =>
              setVisibleCount((prev) =>
                Math.min(prev + ITEMS_PER_LOAD, videos.length)
              )
            }
            className="text-[10px] uppercase tracking-[0.4em] text-[#88a096] hover:text-[#e2e8e4] transition-colors py-4 px-8 border border-white/5 rounded-full hover:bg-white/5"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

const VideoCard: React.FC<{
  video: { src: string; rotate: number };
}> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.loop = true;
    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="aspect-[3/4] w-full overflow-hidden bg-black rounded-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video.src}
        controls
        playsInline
        preload="metadata"
        style={{ transform: `rotate(${video.rotate}deg)` }}
        className="w-full h-full object-contain bg-black"
      />
    </div>
  );
};

export default WorkGrid;
