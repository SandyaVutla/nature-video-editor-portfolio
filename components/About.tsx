import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-60 px-6 bg-[#0a0d0c]">
      <div className="max-w-3xl mx-auto text-center space-y-20">
        
        <div className="space-y-8">
          <h2 className="text-[11px] uppercase tracking-[0.5em] text-[#88a096]">
            Perspective
          </h2>

          <h3 className="text-5xl md:text-7xl font-serif leading-tight text-[#e2e8e4]">
            The edit is the final <span className="italic">rewrite</span> of the story.
          </h3>
        </div>

        <p className="text-[#a3b1aa] text-lg md:text-xl leading-relaxed font-light">
          I focus on clean, well-paced edits that support the story without distracting from it.
          I pay close attention to rhythm, timing, and flow, keeping each cut purposeful and easy to follow.
          <br /><br />
          I’ve worked as a video editor for my college’s Student Activity Council, creating content for events and campus initiatives.
          Alongside this, I bring several years of hands-on experience editing on mobile, which has shaped a strong sense of timing and simplicity.
          <br /><br />
          I work thoughtfully with footage, taking time to understand the intent of the video before shaping the edit.
          I’m comfortable refining an edit through feedback, with the goal of creating something clear, balanced, and watchable.
        </p>

        <div className="flex flex-col items-center space-y-4 pt-5">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#88a096] border-b border-white/5 pb-4 px-8">
            Clean Pacing
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#88a096] border-b border-white/5 pb-4 px-8">
            Rhythmic Flow
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#88a096] pb-4 px-8">
            Clear Storytelling
          </span>
        </div>

      </div>
    </section>
  );
};

export default About;
