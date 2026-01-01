import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-14">

        <div className="inline-block px-4 py-1 border border-[#88a096]/30 rounded-full text-[10px] uppercase tracking-[0.3em] text-[#88a096]">
          Available for Hire
        </div>

        <h2 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none">
          Let’s build a <span className="italic">story</span> together.
        </h2>

        <p className="text-neutral-500 text-lg max-w-lg mx-auto leading-relaxed">
          Whether it’s a long project or a small one, I help maintain the right rhythm.
        </p>

        <div className="flex justify-center items-center space-x-8 pt-6 text-neutral-500">
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/the_art_of_capturing_69"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-7.94 1.17 4 4 0 0 1 7.94-1.17z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="tejeshjonnadula69@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
