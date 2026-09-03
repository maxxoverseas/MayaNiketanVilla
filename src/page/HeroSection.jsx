// // // // // import React from "react";

// // // // // const HeroSection = () => {
// // // // //   return (
// // // // //     <section id="home" className="relative h-screen min-h-[650px] w-full">
// // // // //       {/* FIXED VIDEO BACKGROUND */}
// // // // //       <div className="fixed inset-0 -z-10 h-screen w-full bg-black">
// // // // //         <video
// // // // //           className="h-full w-full object-cover"
// // // // //           autoPlay
// // // // //           muted
// // // // //           loop
// // // // //           playsInline
// // // // //           preload="auto"
// // // // //         >
// // // // //           <source
// // // // //             src="https://www.shutterstock.com/shutterstock/videos/4087417863/preview/stock-footage-porto-heli-peloponnese-greece-april-sophisticated-alfresco-arrangement-incorporating.webm"
// // // // //             type="video/webm"
// // // // //           />
// // // // //         </video>

// // // // //         {/* DARK OVERLAY */}
// // // // //         <div className="absolute inset-0 bg-black/25" />
// // // // //       </div>

// // // // //       {/* HERO CONTENT */}
// // // // //       <div className="relative z-10 flex h-full items-center justify-center px-6">
// // // // //         <div className="text-center text-white">
// // // // //           <p className="font-serif text-xl italic text-[#d4ad72] md:text-2xl">
// // // // //             Welcome to
// // // // //           </p>

// // // // //           <h1 className="mt-3 font-serif text-5xl md:text-6xl lg:text-7xl">
// // // // //             Maya Niketan Villa
// // // // //           </h1>

// // // // //           <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/90 md:text-base">
// // // // //             Staycations • Holidays • Celebrations
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;

// // // // import React, { useEffect, useRef } from "react";
// // // // import video1 from "../../public/images/videos/location-video.mp4";

// // // // const HeroSection = () => {
// // // //   const videoRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const video = videoRef.current;

// // // //     if (!video) return;

// // // //     // Required for autoplay on most browsers
// // // //     video.muted = true;
// // // //     video.defaultMuted = true;
// // // //     video.playsInline = true;

// // // //     const playVideo = async () => {
// // // //       try {
// // // //         await video.play();
// // // //       } catch (error) {
// // // //         console.log("Autoplay was prevented by the browser:", error);
// // // //       }
// // // //     };

// // // //     // Try to play immediately
// // // //     playVideo();

// // // //     // Retry when page becomes visible again
// // // //     const handleVisibilityChange = () => {
// // // //       if (!document.hidden) {
// // // //         playVideo();
// // // //       }
// // // //     };

// // // //     document.addEventListener("visibilitychange", handleVisibilityChange);

// // // //     return () => {
// // // //       document.removeEventListener("visibilitychange", handleVisibilityChange);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <section
// // // //       id="home"
// // // //       className="relative h-screen min-h-[650px] w-full overflow-hidden"
// // // //     >
// // // //       {/* =====================================================
// // // //           FIXED VIDEO BACKGROUND
// // // //       ====================================================== */}
// // // //       <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden">
// // // //         <video
// // // //           ref={videoRef}
// // // //           src={video1}
// // // //           className="h-full w-full object-cover"
// // // //           autoPlay
// // // //           muted
// // // //           loop
// // // //           playsInline
// // // //           preload="auto"
// // // //           onLoadedData={(event) => {
// // // //             const video = event.currentTarget;

// // // //             video.muted = true;

// // // //             video.play().catch((error) => {
// // // //               console.log("Video autoplay prevented:", error);
// // // //             });
// // // //           }}
// // // //         />

// // // //         {/* DARK OVERLAY */}
// // // //         <div className="absolute inset-0 bg-black/25" />

// // // //         {/* EXTRA GRADIENT FOR BETTER TEXT VISIBILITY */}
// // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
// // // //       </div>

// // // //       {/* =====================================================
// // // //           HERO CONTENT
// // // //       ====================================================== */}
// // // //       <div className="relative z-10 flex h-full items-center justify-center px-6">
// // // //         <div className="text-center text-white">
// // // //           {/* SMALL TITLE */}
// // // //           <p className="font-serif text-xl italic text-[#d4ad72] md:text-2xl">
// // // //             Welcome to
// // // //           </p>

// // // //           {/* MAIN TITLE */}
// // // //           <h1
// // // //             className="
// // // //               mt-3
// // // //               font-serif
// // // //               text-5xl
// // // //               leading-tight
// // // //               md:text-6xl
// // // //               lg:text-7xl
// // // //             "
// // // //           >
// // // //             Maya Niketan Villa
// // // //           </h1>

// // // //           {/* SUBTITLE */}
// // // //           <p
// // // //             className="
// // // //               mt-5
// // // //               text-sm
// // // //               uppercase
// // // //               tracking-[0.22em]
// // // //               text-white/90
// // // //               md:text-base
// // // //             "
// // // //           >
// // // //             Staycations • Holidays • Celebrations
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };
// // // // export default HeroSection;

// // import React, { useEffect, useRef, useState } from "react";
// // import video1 from "../../public/images/videos/location-video.mp4";

// // const HeroSection = () => {
// //   const videoRef = useRef(null);

// //   const texts = [
// //     // "Welcome to",
// //     "Welcome to Maya Niketan Villa Staycations • Holidays • Celebrations",
// //     // "Staycations • Holidays • Celebrations",
// //   ];

// //   const [textIndex, setTextIndex] = useState(0);
// //   const [visibleLetters, setVisibleLetters] = useState(0);
// //   const [isRemoving, setIsRemoving] = useState(false);

// //   const currentText = texts[textIndex];
// //   useEffect(() => {
// //     const video = videoRef.current;

// //     if (!video) return;

// //     video.muted = true;
// //     video.defaultMuted = true;
// //     video.playsInline = true;

// //     const playVideo = async () => {
// //       try {
// //         await video.play();
// //       } catch (error) {
// //         console.log("Video autoplay prevented:", error);
// //       }
// //     };

// //     playVideo();

// //     const handleVisibilityChange = () => {
// //       if (!document.hidden) {
// //         playVideo();
// //       }
// //     };

// //     document.addEventListener("visibilitychange", handleVisibilityChange);

// //     return () => {
// //       document.removeEventListener("visibilitychange", handleVisibilityChange);
// //     };
// //   }, []);
// //   useEffect(() => {
// //     let timer;

// //     // CREATE LETTERS
// //     if (!isRemoving) {
// //       if (visibleLetters < currentText.length) {
// //         timer = setTimeout(() => {
// //           setVisibleLetters((prev) => prev + 1);
// //         }, 100);
// //       } else {
// //         // Text complete hone ke baad thoda wait
// //         timer = setTimeout(() => {
// //           setIsRemoving(true);
// //         }, 2200);
// //       }
// //     }

// //     // REMOVE LETTERS
// //     else {
// //       if (visibleLetters > 0) {
// //         timer = setTimeout(() => {
// //           setVisibleLetters((prev) => prev - 1);
// //         }, 55);
// //       } else {
// //         // Next text
// //         timer = setTimeout(() => {
// //           setTextIndex((prev) => (prev + 1) % texts.length);
// //           setIsRemoving(false);
// //         }, 500);
// //       }
// //     }

// //     return () => clearTimeout(timer);
// //   }, [visibleLetters, isRemoving, currentText, textIndex]);

// //   return (
// //     <section
// //       id="home"
// //       className="
// //         relative
// //         h-screen
// //         min-h-[600px]
// //         w-full
// //         overflow-hidden
// //       "
// //     >
// //       <div
// //         className="
// //           fixed
// //           inset-0
// //           z-[-10]
// //           h-screen
// //           w-full
// //           overflow-hidden
// //           bg-black
// //         "
// //       >
// //         <video
// //           ref={videoRef}
// //           // src={video1}
// //           src="https://www.shutterstock.com/shutterstock/videos/4087417863/preview/stock-footage-porto-heli-peloponnese-greece-april-sophisticated-alfresco-arrangement-incorporating.webm"
// //           className="
// //             h-full
// //             w-full
// //             object-cover
// //           "
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           preload="auto"
// //         />

// //         {/* Dark overlay */}
// //         <div className="absolute inset-0" />

// //         {/* Cinematic gradient */}
// //         <div
// //           className="
// //             absolute
// //             inset-0
// //             bg-gradient-to-b
// //             from-black/20
// //             via-black/5
// //             to-black/60
// //           "
// //         />

// //         {/* Center glow */}
// //         <div
// //           className="
// //             absolute
// //             left-1/2
// //             top-1/2
// //             h-[300px]
// //             w-[300px]
// //             -translate-x-1/2
// //             -translate-y-1/2
// //             rounded-full
// //             bg-[#d4ad72]/10
// //             blur-[100px]
// //             sm:h-[450px]
// //             sm:w-[450px]
// //           "
// //         />
// //       </div>
// //       <div
// //         className="
// //           relative
// //           z-10
// //           flex
// //           h-screen
// //           items-center
// //           justify-center
// //           px-5
// //         "
// //       >
// //         <div
// //           className="
// //             flex
// //             min-h-[250px]
// //             w-full
// //             max-w-6xl
// //             flex-col
// //             items-center
// //             justify-center
// //             text-center
// //           "
// //         >
// //           <div
// //             className={`
// //               flex
// //               max-w-full
// //               flex-wrap
// //               items-center
// //               justify-center
// //               ${
// //                 textIndex === 0
// //                   ? "font-serif text-xl italic sm:text-2xl md:text-3xl"
// //                   : textIndex === 1
// //                   ? "font-serif text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
// //                   : "text-[10px] font-light uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.25em] md:text-sm lg:text-base"
// //               }
// //             `}
// //             aria-label={currentText}
// //           >
// //             {currentText
// //               .slice(0, visibleLetters)
// //               .split("")
// //               .map((letter, index) => (
// //                 <span
// //                   key={`${textIndex}-${index}`}
// //                   className={`
// //                     letter
// //                     inline-block
// //                     whitespace-pre
// //                     ${
// //                       textIndex === 0
// //                         ? "text-[#e7c58f]"
// //                         : textIndex === 1
// //                         ? "text-white"
// //                         : "text-white/90"
// //                     }
// //                   `}
// //                   style={{
// //                     animationDelay: `${index * 15}ms`,
// //                   }}
// //                 >
// //                   {letter === " " ? "\u00A0" : letter}
// //                 </span>
// //               ))}
// //           </div>
// //           {textIndex === 1 && visibleLetters === currentText.length && (
// //             <div
// //               className="
// //                 mt-5
// //                 flex
// //                 items-center
// //                 justify-center
// //                 gap-3
// //                 opacity-0
// //                 animate-[dividerShow_1s_ease_forwards]
// //                 sm:mt-6
// //               "
// //             >
// //               <span
// //                 className="
// //                   h-px
// //                   w-10
// //                   bg-gradient-to-r
// //                   from-transparent
// //                   to-[#d4ad72]
// //                   sm:w-16
// //                 "
// //               />

// //               <span
// //                 className="
// //                   h-1.5
// //                   w-1.5
// //                   rotate-45
// //                   bg-[#d4ad72]
// //                   shadow-[0_0_15px_rgba(212,173,114,0.9)]
// //                 "
// //               />

// //               <span
// //                 className="
// //                   h-px
// //                   w-10
// //                   bg-gradient-to-l
// //                   from-transparent
// //                   to-[#d4ad72]
// //                   sm:w-16
// //                 "
// //               />
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       <div
// //         className="
// //           absolute
// //           bottom-7
// //           left-1/2
// //           z-20
// //           -translate-x-1/2
// //           text-center
// //         "
// //       >
// //         <div
// //           className="
// //             text-[9px]
// //             uppercase
// //             tracking-[0.3em]
// //             text-white/70
// //           "
// //         >
// //           Discover
// //         </div>

// //         <div
// //           className="
// //             mx-auto
// //             mt-2
// //             h-9
// //             w-5
// //             rounded-full
// //             border
// //             border-white/40
// //             p-1
// //           "
// //         >
// //           <div
// //             className="
// //               mx-auto
// //               h-1.5
// //               w-1.5
// //               rounded-full
// //               bg-[#d4ad72]
// //               shadow-[0_0_10px_#d4ad72]
// //               animate-bounce
// //             "
// //           />
// //         </div>
// //       </div>
// //       <style>{`
// //         .letter {
// //           opacity: 0;
// //           transform: translateY(20px) scale(0.85);
// //           filter: blur(8px);

// //           animation:
// //             letterCreate
// //             0.55s
// //             cubic-bezier(0.22, 1, 0.36, 1)
// //             forwards;
// //         }

// //         @keyframes letterCreate {
// //           0% {
// //             opacity: 0;
// //             transform:
// //               translateY(20px)
// //               scale(0.85);
// //             filter: blur(8px);
// //           }

// //           60% {
// //             opacity: 1;
// //             transform:
// //               translateY(-3px)
// //               scale(1.04);
// //             filter: blur(0);
// //           }

// //           100% {
// //             opacity: 1;
// //             transform:
// //               translateY(0)
// //               scale(1);
// //             filter: blur(0);
// //           }
// //         }

// //         /* Villa title gold glow */
// //         h1 {
// //           text-shadow:
// //             0 4px 25px rgba(0, 0, 0, 0.7),
// //             0 0 20px rgba(212, 173, 114, 0.2);
// //         }

// //         @keyframes dividerShow {
// //           0% {
// //             opacity: 0;
// //             width: 0;
// //             transform: scaleX(0);
// //           }

// //           100% {
// //             opacity: 1;
// //             width: auto;
// //             transform: scaleX(1);
// //           }
// //         }

// //         @media (prefers-reduced-motion: reduce) {
// //           .letter {
// //             animation: none;
// //             opacity: 1;
// //             transform: none;
// //             filter: none;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };
// // export default HeroSection;
// import React, { useEffect, useRef, useState } from "react";

// const HeroSection = () => {
//   const videoRef = useRef(null);

//   const texts = [
//     "Welcome to",
//     "Maya Niketan Villa",
//     "Staycations • Holidays • Celebrations",
//   ];

//   const [textIndex, setTextIndex] = useState(0);
//   const [visibleLetters, setVisibleLetters] = useState(0);
//   const [isRemoving, setIsRemoving] = useState(false);

//   const currentText = texts[textIndex];

//   // =========================
//   // VIDEO AUTOPLAY
//   // =========================
//   useEffect(() => {
//     const video = videoRef.current;

//     if (!video) return;

//     video.muted = true;
//     video.defaultMuted = true;
//     video.playsInline = true;

//     const playVideo = async () => {
//       try {
//         await video.play();
//       } catch (error) {
//         console.log("Video autoplay prevented:", error);
//       }
//     };

//     playVideo();

//     const handleVisibilityChange = () => {
//       if (!document.hidden) {
//         playVideo();
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   // =========================
//   // TYPEWRITER ANIMATION
//   // =========================
//   useEffect(() => {
//     let timer;

//     if (!isRemoving) {
//       // CREATE LETTERS
//       if (visibleLetters < currentText.length) {
//         timer = setTimeout(() => {
//           setVisibleLetters((prev) => prev + 1);
//         }, 90);
//       } else {
//         // Keep text visible before removing
//         timer = setTimeout(() => {
//           setIsRemoving(true);
//         }, 2200);
//       }
//     } else {
//       // REMOVE LETTERS
//       if (visibleLetters > 0) {
//         timer = setTimeout(() => {
//           setVisibleLetters((prev) => prev - 1);
//         }, 45);
//       } else {
//         // Move to next text
//         timer = setTimeout(() => {
//           setTextIndex((prev) => (prev + 1) % texts.length);
//           setIsRemoving(false);
//         }, 400);
//       }
//     }

//     return () => clearTimeout(timer);
//   }, [visibleLetters, isRemoving, currentText]);

//   return (
//     <section
//       id="home"
//       className="
//         relative
//         h-screen
//         min-h-[600px]
//         w-full
//         overflow-hidden
//       "
//     >
//       {/* =========================
//           BACKGROUND VIDEO
//       ========================= */}
//       <div
//         className="
//           fixed
//           inset-0
//           z-[-10]
//           h-screen
//           w-full
//           overflow-hidden
//           bg-black
//         "
//       >
//         <video
//           ref={videoRef}
//           src="https://www.shutterstock.com/shutterstock/videos/4087417863/preview/stock-footage-porto-heli-peloponnese-greece-april-sophisticated-alfresco-arrangement-incorporating.webm"
//           className="
//             h-full
//             w-full
//             object-cover
//           "
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/10" />

//         {/* Cinematic gradient */}
//         <div
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-b
//             from-black/20
//             via-black/5
//             to-black/60
//           "
//         />

//         {/* Center glow */}
//         <div
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             h-[300px]
//             w-[300px]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-[#d4ad72]/10
//             blur-[100px]
//             sm:h-[450px]
//             sm:w-[450px]
//           "
//         />
//       </div>

//       {/* =========================
//           HERO CONTENT
//       ========================= */}
//       <div
//         className="
//           relative
//           z-10
//           flex
//           h-screen
//           items-center
//           justify-center
//           px-5
//         "
//       >
//         <div
//           className="
//             flex
//             min-h-[250px]
//             w-full
//             max-w-6xl
//             flex-col
//             items-center
//             justify-center
//             text-center
//           "
//         >
//           {/* TEXT */}
//           <div
//             className={`
//               flex
//               max-w-full
//               flex-wrap
//               items-center
//               justify-center

//               ${
//                 textIndex === 0
//                   ? "font-serif text-2xl italic sm:text-3xl md:text-4xl"
//                   : textIndex === 1
//                   ? "font-serif text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   : "text-[10px] font-light uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.25em] md:text-sm lg:text-base"
//               }
//             `}
//             aria-label={currentText}
//           >
//             {currentText
//               .slice(0, visibleLetters)
//               .split("")
//               .map((letter, index) => (
//                 <span
//                   key={`${textIndex}-${index}`}
//                   className={`
//                     letter
//                     inline-block
//                     whitespace-pre

//                     ${
//                       textIndex === 0
//                         ? "text-[#e7c58f]"
//                         : textIndex === 1
//                         ? "text-white"
//                         : "text-white/90"
//                     }
//                   `}
//                   style={{
//                     animationDelay: `${index * 15}ms`,
//                   }}
//                 >
//                   {letter === " " ? "\u00A0" : letter}
//                 </span>
//               ))}
//           </div>

//           {/* DIVIDER */}
//           {textIndex === 1 && visibleLetters === currentText.length && (
//             <div
//               className="
//                   mt-5
//                   flex
//                   items-center
//                   justify-center
//                   gap-3
//                   sm:mt-6
//                 "
//             >
//               <span
//                 className="
//                     h-px
//                     w-10
//                     bg-gradient-to-r
//                     from-transparent
//                     to-[#d4ad72]
//                     sm:w-16
//                   "
//               />

//               <span
//                 className="
//                     h-1.5
//                     w-1.5
//                     rotate-45
//                     bg-[#d4ad72]
//                     shadow-[0_0_15px_rgba(212,173,114,0.9)]
//                   "
//               />

//               <span
//                 className="
//                     h-px
//                     w-10
//                     bg-gradient-to-l
//                     from-transparent
//                     to-[#d4ad72]
//                     sm:w-16
//                   "
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* =========================
//           DISCOVER
//       ========================= */}
//       <div
//         className="
//           absolute
//           bottom-7
//           left-1/2
//           z-20
//           -translate-x-1/2
//           text-center
//         "
//       >
//         <div
//           className="
//             text-[9px]
//             uppercase
//             tracking-[0.3em]
//             text-white/70
//           "
//         >
//           Discover
//         </div>

//         <div
//           className="
//             mx-auto
//             mt-2
//             h-9
//             w-5
//             rounded-full
//             border
//             border-white/40
//             p-1
//           "
//         >
//           <div
//             className="
//               mx-auto
//               h-1.5
//               w-1.5
//               rounded-full
//               bg-[#d4ad72]
//               shadow-[0_0_10px_#d4ad72]
//               animate-bounce
//             "
//           />
//         </div>
//       </div>

//       {/* =========================
//           ANIMATIONS
//       ========================= */}
//       <style>{`
//         .letter {
//           opacity: 0;
//           transform: translateY(20px) scale(0.85);
//           filter: blur(8px);

//           animation:
//             letterCreate
//             0.55s
//             cubic-bezier(0.22, 1, 0.36, 1)
//             forwards;
//         }

//         @keyframes letterCreate {
//           0% {
//             opacity: 0;
//             transform:
//               translateY(20px)
//               scale(0.85);
//             filter: blur(8px);
//           }

//           60% {
//             opacity: 1;
//             transform:
//               translateY(-3px)
//               scale(1.04);
//             filter: blur(0);
//           }

//           100% {
//             opacity: 1;
//             transform:
//               translateY(0)
//               scale(1);
//             filter: blur(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .letter {
//             animation: none;
//             opacity: 1;
//             transform: none;
//             filter: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useEffect, useRef, useState } from "react";
import video1 from "../../public/images/videos/location-video.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);

  // ==========================================
  // HERO TEXT
  // ==========================================
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
      text: "Staycations • Holidays • Celebrations",
      className:
        "mt-4 text-[9px] font-light uppercase tracking-[0.22em] text-white/85 sm:text-xs sm:tracking-[0.3em] md:text-sm lg:text-base",
    },
  ];

  const fullText = lines.map((line) => line.text).join("\n");

  const [visibleLetters, setVisibleLetters] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  // ==========================================
  // VIDEO AUTOPLAY
  // ==========================================
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Video autoplay prevented:", error);
      }
    };

    playVideo();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // ==========================================
  // TYPEWRITER ANIMATION
  // ==========================================
  useEffect(() => {
    let timer;

    // ------------------------------------------
    // CREATE COMPLETE TEXT
    // ------------------------------------------
    if (!isRemoving) {
      if (visibleLetters < fullText.length) {
        timer = setTimeout(() => {
          setVisibleLetters((prev) => prev + 1);
        }, 70);
      } else {
        // ======================================
        // IMPORTANT:
        // Complete text ke baad yahan wait hoga.
        // Jab tak wait complete nahi hota,
        // text REMOVE nahi hoga.
        // ======================================
        timer = setTimeout(() => {
          setIsRemoving(true);
        }, 3000);
      }
    }

    // ------------------------------------------
    // REMOVE COMPLETE TEXT
    // ------------------------------------------
    else {
      if (visibleLetters > 0) {
        timer = setTimeout(() => {
          setVisibleLetters((prev) => prev - 1);
        }, 45);
      } else {
        // Start again
        timer = setTimeout(() => {
          setIsRemoving(false);
        }, 700);
      }
    }

    return () => clearTimeout(timer);
  }, [visibleLetters, isRemoving, fullText]);

  // ==========================================
  // GET VISIBLE TEXT FOR EACH LINE
  // ==========================================
  const getVisibleLine = (lineIndex) => {
    let previousLength = 0;

    for (let i = 0; i < lineIndex; i++) {
      previousLength += lines[i].text.length + 1;
    }

    const lineStart = previousLength;
    const lineEnd = lineStart + lines[lineIndex].text.length;

    if (visibleLetters <= lineStart) {
      return "";
    }

    const visibleCount = Math.min(
      visibleLetters - lineStart,
      lines[lineIndex].text.length
    );

    return lines[lineIndex].text.slice(0, visibleCount);
  };

  return (
    <section
      id="home"
      className="
        relative
        h-screen
        min-h-[600px]
        w-full
        overflow-hidden
      "
    >
      {/* ==========================================
          BACKGROUND VIDEO
      ========================================== */}
      <div
        className="
          fixed
          inset-0
          z-[-10]
          h-screen
          w-full
          overflow-hidden
          
        "
      >
        <video
          ref={videoRef}
          src={video1}
          // src="https://www.shutterstock.com/shutterstock/videos/4087417863/preview/stock-footage-porto-heli-peloponnese-greece-april-sophisticated-alfresco-arrangement-incorporating.webm"
          className="
            h-full
            w-full
            object-cover
          "
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Cinematic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/25
            via-black/10
            to-black/70
          "
        />

        {/* Center luxury glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#d4ad72]/10
            blur-[100px]
            sm:h-[450px]
            sm:w-[450px]
          "
        />
      </div>

      {/* ==========================================
          HERO CONTENT
      ========================================== */}
      <div
        className="
          relative
          z-10
          flex
          h-screen
          items-center
          justify-center
          px-5
        "
      >
        <div
          className="
            flex
            min-h-[300px]
            w-full
            max-w-6xl
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          {/* ======================================
              TEXT CONTAINER
          ====================================== */}
          <div
            className="
              relative
              flex
              w-full
              flex-col
              items-center
              justify-center
            "
          >
            {/* Soft glow behind title */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-40
                w-72
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#d4ad72]/10
                blur-[80px]
                sm:h-52
                sm:w-96
              "
            />

            {/* ==================================
                LINE 1
            ================================== */}
            <div
              className={`
                relative
                z-10
                min-h-[35px]
                transition-opacity
                duration-500
                ${visibleLetters > 0 ? "opacity-100" : "opacity-0"}
              `}
            >
              <span className={lines[0].className}>
                {getVisibleLine(0)
                  .split("")
                  .map((letter, index) => (
                    <span
                      key={`line1-${index}`}
                      className="hero-letter"
                      style={{
                        animationDelay: `${index * 18}ms`,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
              </span>
            </div>

            {/* ==================================
                LINE 2
            ================================== */}
            <div
              className={`
                relative
                z-10
                min-h-[55px]
                sm:min-h-[70px]
                lg:min-h-[90px]
                transition-opacity
                duration-500
                ${
                  visibleLetters > lines[0].text.length + 1
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            >
              <span className={lines[1].className}>
                {getVisibleLine(1)
                  .split("")
                  .map((letter, index) => (
                    <span
                      key={`line2-${index}`}
                      className="hero-letter hero-title-letter"
                      style={{
                        animationDelay: `${index * 18}ms`,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
              </span>
            </div>

            {/* ==================================
                GOLD DIVIDER
            ================================== */}
            <div
              className={`
                relative
                z-10
                my-3
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-700
                sm:my-4
                ${
                  visibleLetters >=
                  lines[0].text.length + 1 + lines[1].text.length + 1
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                }
              `}
            >
              <span
                className="
                  h-px
                  w-8
                  bg-gradient-to-r
                  from-transparent
                  to-[#d4ad72]
                  sm:w-14
                  md:w-20
                "
              />

              <span
                className="
                  h-1.5
                  w-1.5
                  rotate-45
                  bg-[#d4ad72]
                  shadow-[0_0_15px_rgba(212,173,114,0.9)]
                "
              />

              <span
                className="
                  h-px
                  w-8
                  bg-gradient-to-l
                  from-transparent
                  to-[#d4ad72]
                  sm:w-14
                  md:w-20
                "
              />
            </div>

            {/* ==================================
                LINE 3
            ================================== */}
            <div
              className={`
                relative
                z-10
                min-h-[25px]
                transition-opacity
                duration-700
                ${
                  visibleLetters >=
                  lines[0].text.length + 1 + lines[1].text.length + 1
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            >
              <span className={lines[2].className}>
                {getVisibleLine(2)
                  .split("")
                  .map((letter, index) => (
                    <span
                      key={`line3-${index}`}
                      className="hero-letter"
                      style={{
                        animationDelay: `${index * 18}ms`,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          DISCOVER INDICATOR
      ========================================== */}
      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          -translate-x-1/2
          text-center
        "
      >
        <div
          className="
            text-[9px]
            font-light
            uppercase
            tracking-[0.35em]
            text-white/70
          "
        >
          Discover
        </div>

        <div
          className="
            mx-auto
            mt-2
            flex
            h-9
            w-5
            items-start
            justify-center
            rounded-full
            border
            border-white/40
            p-1
          "
        >
          <div
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#d4ad72]
              shadow-[0_0_10px_#d4ad72]
              animate-bounce
            "
          />
        </div>
      </div>

      {/* ==========================================
          CUSTOM CSS
      ========================================== */}
      <style>{`
        /* ----------------------------------------
           MODERN LETTER ANIMATION
        ---------------------------------------- */

        .hero-letter {
          display: inline-block;
          opacity: 0;
          transform:
            translateY(18px)
            scale(0.92);
          filter: blur(7px);

          animation:
            heroLetterIn
            0.65s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        @keyframes heroLetterIn {
          0% {
            opacity: 0;
            transform:
              translateY(18px)
              scale(0.92);
            filter: blur(7px);
          }

          55% {
            opacity: 1;
            transform:
              translateY(-2px)
              scale(1.015);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
            filter: blur(0);
          }
        }

        /* ----------------------------------------
           MAIN VILLA TITLE
        ---------------------------------------- */

        .hero-title-letter {
          text-shadow:
            0 4px 30px rgba(0, 0, 0, 0.75),
            0 0 25px rgba(212, 173, 114, 0.12);
        }

        /* ----------------------------------------
           REDUCED MOTION
        ---------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          .hero-letter {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        /* ----------------------------------------
           MOBILE
        ---------------------------------------- */

        @media (max-width: 640px) {
          .hero-title-letter {
            text-shadow:
              0 3px 20px rgba(0, 0, 0, 0.8);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
