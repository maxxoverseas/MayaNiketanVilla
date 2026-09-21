import React, { useEffect, useRef, useState } from "react";
import video1 from "../../public/images/videos/1.mp4";
import video2 from "../../public/images/videos/1.mp4";
import video3 from "../../public/images/videos/1.mp4";
import video4 from "../../public/images/videos/1.mp4";

const HeroSection = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [activeVideo, setActiveVideo] = useState(0);
  const activeVideoRef = useRef(0);

  const videos = [video1, video2, video3, video4];

  const lines = [
    {
      text: "Welcome to",
      className:
        "font-serif text-xl italic font-light tracking-wide text-[#e7c58f] sm:text-2xl md:text-3xl lg:text-4xl",
    },
    {
      text: "Maya Niketan Villa",
      className:
        "font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
    },
    {
      text: "Your Private 6BHK Pool Villa Escape",
      className:
        "mt-4 text-[9px] font-light uppercase tracking-[0.22em] text-white/85 sm:text-xs sm:tracking-[0.3em] md:text-sm lg:text-base",
    },
  ];

  const fullText = lines.map((line) => line.text).join("\n");

  const [visibleLetters, setVisibleLetters] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    videoRefs.forEach((ref, index) => {
      const video = ref.current;
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      if (index === 0) {
        video.play().catch(() => {});
      }
    });

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const currentVideo = videoRefs[activeVideoRef.current]?.current;
        if (currentVideo) currentVideo.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => {
        const next = (prev + 1) % videos.length;
        const currentVideo = videoRefs[prev]?.current;
        if (currentVideo) {
          currentVideo.pause();
          currentVideo.currentTime = 0;
        }
        const nextVideo = videoRefs[next]?.current;
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(() => {});
        }
        activeVideoRef.current = next;
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer;
    if (!isRemoving) {
      if (visibleLetters < fullText.length) {
        timer = setTimeout(() => setVisibleLetters((prev) => prev + 1), 60);
      } else {
        timer = setTimeout(() => setIsRemoving(true), 3000);
      }
    } else {
      if (visibleLetters > 0) {
        timer = setTimeout(() => setVisibleLetters((prev) => prev - 1), 35);
      } else {
        timer = setTimeout(() => setIsRemoving(false), 700);
      }
    }
    return () => clearTimeout(timer);
  }, [visibleLetters, isRemoving, fullText]);

  const getVisibleLine = (lineIndex) => {
    let previousLength = 0;
    for (let i = 0; i < lineIndex; i++) {
      previousLength += lines[i].text.length + 1;
    }
    const lineStart = previousLength;
    if (visibleLetters <= lineStart) return "";
    const visibleCount = Math.min(
      visibleLetters - lineStart,
      lines[lineIndex].text.length
    );
    return lines[lineIndex].text.slice(0, visibleCount);
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
    >
      <div className="fixed inset-0 z-[-10] h-screen w-full overflow-hidden">
        {videos.map((videoSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              activeVideo === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              ref={videoRefs[index]}
              src={videoSrc}
              className="h-full w-full object-cover frame-motion"
              autoPlay={index === 0}
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/75" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4ad72]/10 blur-[100px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-28">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const currentVideo = videoRefs[activeVideoRef.current]?.current;
                if (currentVideo) {
                  currentVideo.pause();
                  currentVideo.currentTime = 0;
                }
                const nextVideo = videoRefs[index]?.current;
                if (nextVideo) {
                  nextVideo.currentTime = 0;
                  nextVideo.play().catch(() => {});
                }
                setActiveVideo(index);
                activeVideoRef.current = index;
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeVideo === index
                  ? "w-6 bg-[#d4ad72]"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex h-screen items-center justify-center px-5">
        <div className="flex min-h-[300px] w-full max-w-6xl flex-col items-center justify-center text-center">
          <div className="relative flex w-full flex-col items-center justify-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4ad72]/10 blur-[80px] sm:h-52 sm:w-96" />

            <div
              className={`relative z-10 min-h-[35px] transition-opacity duration-500 ${
                visibleLetters > 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className={lines[0].className}>
                {getVisibleLine(0)
                  .split("")
                  .map((letter, index) => (
                    <span
                      key={`line1-${index}`}
                      className="hero-letter"
                      style={{ animationDelay: `${index * 18}ms` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
              </span>
            </div>

            <div
              className={`relative z-10 min-h-[55px] sm:min-h-[70px] lg:min-h-[90px] transition-opacity duration-500 ${
                visibleLetters > lines[0].text.length + 1
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <span className={lines[1].className}>
                {getVisibleLine(1)
                  .split("")
                  .map((letter, index) => (
                    <span
                      key={`line2-${index}`}
                      className="hero-letter hero-title-letter"
                      style={{ animationDelay: `${index * 18}ms` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
              </span>
            </div>

            <div
              className={`relative z-10 my-3 flex items-center justify-center gap-3 transition-all duration-700 sm:my-4 ${
                visibleLetters >=
                lines[0].text.length + 1 + lines[1].text.length + 1
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
            >
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4ad72] sm:w-14 md:w-20" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#d4ad72] shadow-[0_0_15px_rgba(212,173,114,0.9)]" />
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4ad72] sm:w-14 md:w-20" />
            </div>

            <div
              className={`relative z-10 min-h-[25px] transition-opacity duration-700 ${
                visibleLetters >=
                lines[0].text.length + 1 + lines[1].text.length + 1
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <span className={lines[2].className}>
                {getVisibleLine(2)
                  .split("")
                  .map((letter, index) => (
                    <span
                      key={`line3-${index}`}
                      className="hero-letter"
                      style={{ animationDelay: `${index * 18}ms` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center">
        <div className="text-[9px] font-light uppercase tracking-[0.35em] text-white/70">
          Discover
        </div>
        <div className="mx-auto mt-2 flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#d4ad72] shadow-[0_0_10px_#d4ad72] animate-bounce" />
        </div>
      </div>

      <style>{`
        .hero-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(18px) scale(0.92);
          filter: blur(7px);
          animation: heroLetterIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes heroLetterIn {
          0% { opacity: 0; transform: translateY(18px) scale(0.92); filter: blur(7px); }
          55% { opacity: 1; transform: translateY(-2px) scale(1.015); filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .hero-title-letter {
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.75), 0 0 25px rgba(212, 173, 114, 0.12);
        }
        .frame-motion { animation: frameMotion 20s ease-in-out infinite alternate; }
        @keyframes frameMotion {
          0% { transform: scale(1) translate(0, 0); }
          25% { transform: scale(1.08) translate(-1.5%, -1%); }
          50% { transform: scale(1.05) translate(1%, 1.5%); }
          75% { transform: scale(1.1) translate(-1%, 0.5%); }
          100% { transform: scale(1.06) translate(1.5%, -1%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-letter { animation: none; opacity: 1; transform: none; filter: none; }
          .frame-motion { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const autoPlayRef = useRef(null);

//   // ================= SLIDES DATA =================
//   // Apni images yahan daalein (public/images/ folder me rakhein)
//   const slides = [
//     {
//       image: "/images/1.jpg",
//       alt: "Maya Niketan Villa - Exterior View",
//     },
//     {
//       image: "/images/2.jpg",
//       alt: "Maya Niketan Villa - Pool Area",
//     },
//     {
//       image: "/images/3.jpg",
//       alt: "Maya Niketan Villa - Living Room",
//     },
//     {
//       image: "/images/4.jpg",
//       alt: "Maya Niketan Villa - Garden View",
//     },
//   ];

//   // ================= NEXT / PREV =================
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // ================= AUTOPLAY (5 sec) =================
//   useEffect(() => {
//     autoPlayRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => {
//       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//     };
//   }, [slides.length]);

//   // Pause autoplay on manual navigation (optional reset)
//   const resetAutoPlay = () => {
//     if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//     autoPlayRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//   };

//   const handlePrev = () => {
//     prevSlide();
//     resetAutoPlay();
//   };

//   const handleNext = () => {
//     nextSlide();
//     resetAutoPlay();
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">
//       {/* ================= SLIDES ================= */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`
//             absolute inset-0 transition-opacity duration-1000 ease-in-out
//             ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
//           `}
//         >
//           <img
//             src={slide.image}
//             alt={slide.alt}
//             className="h-full w-full object-cover"
//             loading={index === 0 ? "eager" : "lazy"}
//           />

//           {/* Dark overlay for text readability */}
//           <div className="absolute inset-0 bg-black/50" />
//         </div>
//       ))}

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-5 text-center">
//         <h1
//           className="
//             font-serif
//             text-4xl
//             font-light
//             tracking-wide
//             text-white
//             sm:text-5xl
//             md:text-6xl
//             lg:text-7xl
//           "
//         >
//           Maya Niketan
//         </h1>

//         <p
//           className="
//             mt-4
//             max-w-2xl
//             text-sm
//             font-light
//             tracking-[0.2em]
//             text-white/90
//             uppercase
//             sm:mt-6
//             sm:text-base
//             md:text-lg
//           "
//         >
//           Luxury Villa · Serene Escape · Unforgettable Stay
//         </p>
//       </div>

//       {/* ================= LEFT ARROW ================= */}
//       <button
//         type="button"
//         onClick={handlePrev}
//         aria-label="Previous slide"
//         className="
//           absolute
//           left-3
//           top-1/2
//           z-30
//           flex
//           h-11
//           w-11
//           -translate-y-1/2
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-white/40
//           bg-black/30
//           text-white
//           backdrop-blur-sm
//           transition-all
//           duration-300
//           hover:border-[#d4ad72]
//           hover:bg-[#d4ad72]
//           hover:text-gray-900
//           sm:left-5
//           sm:h-12
//           sm:w-12
//           md:left-8
//           md:h-14
//           md:w-14
//         "
//       >
//         {/* Left Chevron */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.8}
//           stroke="currentColor"
//           className="h-5 w-5 sm:h-6 sm:w-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 19.5L8.25 12l7.5-7.5"
//           />
//         </svg>
//       </button>

//       {/* ================= RIGHT ARROW ================= */}
//       <button
//         type="button"
//         onClick={handleNext}
//         aria-label="Next slide"
//         className="
//           absolute
//           right-3
//           top-1/2
//           z-30
//           flex
//           h-11
//           w-11
//           -translate-y-1/2
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-white/40
//           bg-black/30
//           text-white
//           backdrop-blur-sm
//           transition-all
//           duration-300
//           hover:border-[#d4ad72]
//           hover:bg-[#d4ad72]
//           hover:text-gray-900
//           sm:right-5
//           sm:h-12
//           sm:w-12
//           md:right-8
//           md:h-14
//           md:w-14
//         "
//       >
//         {/* Right Chevron */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.8}
//           stroke="currentColor"
//           className="h-5 w-5 sm:h-6 sm:w-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 4.5l7.5 7.5-7.5 7.5"
//           />
//         </svg>
//       </button>

//       {/* ================= DOT INDICATORS ================= */}
//       <div
//         className="
//           absolute
//           bottom-6
//           left-1/2
//           z-30
//           flex
//           -translate-x-1/2
//           items-center
//           gap-2
//           sm:bottom-8
//           sm:gap-3
//         "
//       >
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             onClick={() => {
//               goToSlide(index);
//               resetAutoPlay();
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`
//               h-[3px]
//               transition-all
//               duration-300
//               ${
//                 index === currentSlide
//                   ? "w-8 bg-[#d4ad72] sm:w-10"
//                   : "w-4 bg-white/50 hover:bg-white/80 sm:w-5"
//               }
//             `}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
