import React, { useEffect, useState } from "react";

const ImageSection = () => {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        w-full
        h-[420px]
        sm:h-[500px]
        md:h-[600px]
        lg:h-[700px]
        xl:h-[780px]
        bg-[url('/images/1.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
      "
      aria-label="Maya Niketan Villa"
    >
      {/* DARKENING OVERLAY FOR TEXT LEGIBILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />

      {/* BOTTOM VIGNETTE INTO NEXT SECTION */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1c261e]/70 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <p
          className={`
            mb-4
            font-serif
            text-sm
            italic
            tracking-wide
            text-[#e8cfa0]
            transition-all
            duration-700
            ease-out
            md:text-base
            ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }
          `}
        >
          Virar East, Palghar
        </p>

        <h1
          className={`
            font-serif
            text-4xl
            font-medium
            leading-[1.08]
            text-white
            transition-all
            duration-700
            ease-out
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }
          `}
          style={{ transitionDelay: revealed ? "120ms" : "0ms" }}
        >
          Maya Niketan Villa
        </h1>

        <div
          className={`
            mt-6
            h-[1px]
            w-16
            bg-[#e8cfa0]
            transition-all
            duration-700
            ease-out
            ${revealed ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
          `}
        />

        <p
          className={`
            mx-auto
            mt-6
            max-w-xl
            text-base
            font-light
            leading-7
            text-white/85
            transition-all
            duration-700
            ease-out
            md:text-lg
            ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }
          `}
          style={{ transitionDelay: revealed ? "240ms" : "0ms" }}
        >
          A private 6BHK luxury pool villa, made for staycations, family
          holidays and celebrations with the people who matter most.
        </p>

        <div
          className={`
            mt-9
            flex
            flex-col
            items-center
            gap-3
            transition-all
            duration-700
            ease-out
            sm:flex-row
            sm:gap-4
            ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }
          `}
          style={{ transitionDelay: revealed ? "360ms" : "0ms" }}
        >
          <a
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-[#e8cfa0]
              bg-[#e8cfa0]
              px-8
              py-3.5
              text-xs
              uppercase
              tracking-[0.16em]
              text-[#2f382f]
              transition-all
              duration-300
              hover:border-white
              hover:bg-white
              md:text-sm
            "
          >
            Book Your Stay
          </a>

          <a
            href="#signature-features"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-white/70
              px-8
              py-3.5
              text-xs
              uppercase
              tracking-[0.16em]
              text-white
              transition-all
              duration-300
              hover:border-white
              hover:bg-white/10
              md:text-sm
            "
          >
            Explore the Villa
          </a>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div
        className={`
          absolute
          bottom-7
          left-1/2
          z-10
          -translate-x-1/2
          transition-opacity
          duration-700
          ${revealed ? "opacity-80" : "opacity-0"}
        `}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
            Scroll
          </span>
          <span className="h-9 w-[1px] animate-scrollcue bg-white/50" />
        </div>
      </div>

      <style>{`
        @keyframes scrollcue {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0.9; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 0.9; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0.4; }
        }
        .animate-scrollcue {
          animation: scrollcue 2.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scrollcue { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default ImageSection;
