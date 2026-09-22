// import React, { useEffect, useState } from "react";

// const Gallery = () => {
//   const galleryItems = [
//     { src: "/images/1.jpg", title: "Exterior Grounds", category: "Outdoor" },
//     { src: "/images/2.jpg", title: "Grand Living Area", category: "Interior" },
//     { src: "/images/3.jpg", title: "Private Poolside", category: "Leisure" },
//     { src: "/images/4.jpg", title: "Luxury Suite", category: "Bedrooms" },
//     { src: "/images/5.jpg", title: "Dining Experience", category: "Living" },
//     { src: "/images/6.jpg", title: "Garden Pathway", category: "Nature" },
//     { src: "/images/7.jpg", title: "Sunset Deck", category: "Outdoor" },
//     { src: "/images/8.jpg", title: "Lounge Area", category: "Interior" },
//     { src: "/images/9.jpg", title: "Spacious Balcony", category: "Views" },
//     {
//       src: "/images/10.jpg",
//       title: "Evening Illumination",
//       category: "Nightview",
//     },
//   ];

//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % galleryItems.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [galleryItems.length]);

//   const handlePrev = () => {
//     setActive((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActive((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <main
//       id="gallery"
//       className="w-full min-h-screen overflow-x-hidden bg-[#FAF8F5] text-slate-800 selection:bg-[#d5ae70] selection:text-slate-900"
//     >
//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-[#FAF8F5] text-slate-900 border-b border-stone-200/60 py-20 lg:py-28">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <div className="inline-flex items-center justify-center gap-3">
//             <span className="h-[1px] w-10 bg-[#bd8c50]" />
//             <p className="font-serif text-lg italic tracking-wide text-[#bd8c50]">
//               Visual Experience
//             </p>
//             <span className="h-[1px] w-10 bg-[#bd8c50]" />
//           </div>

//           <h1 className="mt-6 font-serif text-4xl font-normal leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
//             Discover
//             <span className="mt-2 block italic text-[#bd8c50]">
//               Maya Niketan Villa
//             </span>
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
//             A curated visual narrative into the architectural elegance, lush
//             landscapes, and serene spaces designed for unforgettable stays.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           3D PERSPECTIVE CAROUSEL SLIDER
//       ===================================================== */}
//       <section className="bg-[#FAF8F5] py-20 lg:py-28 overflow-hidden">
//         <div className="mx-auto max-w-7xl px-6 lg:px-12">
//           {/* 3D Viewport Container */}
//           <div className="relative min-h-[420px] sm:min-h-[500px] md:min-h-[560px] w-full flex items-center justify-center perspective-[1200px]">
//             <div className="relative w-full max-w-4xl h-[360px] sm:h-[460px] flex items-center justify-center">
//               {galleryItems.map((item, index) => {
//                 let offset = index - active;
//                 if (offset < -2) offset += galleryItems.length;
//                 if (offset > 2) offset -= galleryItems.length;

//                 // Calculate 3D Transformation styles
//                 const isCenter = offset === 0;
//                 const isVisible = Math.abs(offset) <= 2;

//                 return (
//                   <div
//                     key={index}
//                     onClick={() => setActive(index)}
//                     className={`absolute w-[80%] sm:w-[65%] md:w-[55%] h-full rounded-2xl p-2 bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xl transition-all duration-700 ease-out cursor-pointer overflow-hidden ${
//                       isVisible
//                         ? "opacity-100 pointer-events-auto"
//                         : "opacity-0 pointer-events-none"
//                     }`}
//                     style={{
//                       transform: `
//                         translateX(${offset * 55}%)
//                         translateZ(${isCenter ? "0px" : "-180px"})
//                         rotateY(${offset * -25}deg)
//                         scale(${isCenter ? 1 : 0.85})
//                       `,
//                       zIndex: 30 - Math.abs(offset) * 10,
//                     }}
//                   >
//                     <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-900 group">
//                       <img
//                         src={item.src}
//                         alt={item.title}
//                         className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300" />

//                       <div className="absolute bottom-6 left-6 right-6">
//                         <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d5ae70]">
//                           {item.category}
//                         </span>
//                         <h3 className="mt-1 font-serif text-xl sm:text-2xl text-white italic">
//                           {item.title}
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={handlePrev}
//               aria-label="Previous image"
//               className="absolute left-2 sm:left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-xl border border-stone-200/80 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-110"
//             >
//               ❮
//             </button>
//             <button
//               onClick={handleNext}
//               aria-label="Next image"
//               className="absolute right-2 sm:right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-xl border border-stone-200/80 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-110"
//             >
//               ❯
//             </button>
//           </div>

//           {/* DOTS NAVIGATION */}
//           <div className="mt-10 flex justify-center items-center gap-2">
//             {galleryItems.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActive(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//                 className={`h-2.5 rounded-full transition-all duration-300 ${
//                   active === index
//                     ? "w-8 bg-[#bd8c50]"
//                     : "w-2.5 bg-stone-300 hover:bg-stone-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           MASONRY BENTO GRID
//       ===================================================== */}
//       <section className="bg-white py-20 lg:py-28 border-t border-stone-200/60">
//         <div className="mx-auto max-w-7xl px-6 lg:px-12">
//           <div className="text-center mb-14">
//             <p className="font-serif text-lg italic text-[#bd8c50]">
//               Complete Collection
//             </p>
//             <h2 className="mt-2 font-serif text-3xl font-normal text-slate-900 sm:text-4xl lg:text-5xl">
//               Explore Every Corner
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {galleryItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`group relative overflow-hidden rounded-xl border border-stone-200/80 bg-[#FAF8F5] p-2 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
//                   index === 0 || index === 5
//                     ? "md:col-span-2 md:row-span-2"
//                     : ""
//                 }`}
//               >
//                 <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-lg bg-slate-900">
//                   <img
//                     src={item.src}
//                     alt={item.title}
//                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//                   <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//                     <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d5ae70]">
//                       {item.category}
//                     </span>
//                     <p className="font-serif text-lg text-white italic">
//                       {item.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CALL TO ACTION
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-[#FAF8F5] py-20 text-slate-900 lg:py-28">
//         <div className="relative mx-auto max-w-3xl px-6 text-center">
//           <p className="font-serif text-lg italic text-[#bd8c50]">
//             Experience It In Person
//           </p>

//           <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
//             Ready for Your Next Retreat?
//           </h2>

//           <p className="mt-6 text-base leading-relaxed text-slate-600">
//             Book your stay at Maya Niketan Villa and turn these visuals into
//             your own reality.
//           </p>

//           <a
//             href="contact"
//             className="mt-10 inline-flex h-14 items-center justify-center rounded-sm bg-slate-900 px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-xl"
//           >
//             Reserve Your Villa
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Gallery;

// src/pages/Gallery.jsx

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  LayoutGrid,
  Images,
  Heart,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // grid | masonry
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Gallery images with categories
  const images = [
    {
      src: "/images/20.jpg",
      category: "pool",
      title: "Private Pool",
      subtitle: "Refresh & unwind",
    },
    {
      src: "/images/21.jpg",
      category: "living",
      title: "Living Area",
      subtitle: "Spacious comfort",
    },
    {
      src: "/images/22.jpg",
      category: "bedroom",
      title: "Master Bedroom",
      subtitle: "Restful retreat",
    },
    {
      src: "/images/23.jpg",
      category: "pool",
      title: "Poolside Moments",
      subtitle: "Sunny afternoons",
    },
    {
      src: "/images/24.jpg",
      category: "living",
      title: "Dining Space",
      subtitle: "Shared meals",
    },
    {
      src: "/images/25.jpg",
      category: "exterior",
      title: "Villa Exterior",
      subtitle: "Warm welcome",
    },
    {
      src: "/images/26.jpg",
      category: "bedroom",
      title: "Guest Room",
      subtitle: "Peaceful sleep",
    },
    {
      src: "/images/8.jpg",
      category: "exterior",
      title: "Garden View",
      subtitle: "Green surroundings",
    },
    {
      src: "/images/9.jpg",
      category: "pool",
      title: "Evening Pool",
      subtitle: "Golden hours",
    },
    {
      src: "/images/10.jpg",
      category: "living",
      title: "Lounge Area",
      subtitle: "Relax & chat",
    },
  ];

  const filters = [
    { id: "all", label: "All Photos", icon: Images },
    { id: "pool", label: "Pool", icon: Sparkles },
    { id: "living", label: "Living Spaces", icon: LayoutGrid },
    { id: "bedroom", label: "Bedrooms", icon: Heart },
    { id: "exterior", label: "Exterior", icon: MapPin },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, filteredImages.length]);

  return (
    <div className="w-full overflow-x-hidden bg-[#f8f6f1]">
      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-[#0e382b] pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ad72]/30 bg-[#d4ad72]/10 px-4 py-1.5 backdrop-blur-md">
              <Camera className="h-3.5 w-3.5 text-[#d4ad72]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4ad72]">
                Visual Journey
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Every Corner,
              <br />
              <span className="italic text-[#d4ad72]">A Story to Tell</span>
            </h1>

            <div className="mx-auto mt-8 h-[2px] w-20 bg-[#d4ad72]" />

            <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:text-xl">
              Explore the spaces, textures and moments that make Maya Niketan
              Villa a truly special retreat — captured through our lens, felt
              through your eyes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          GALLERY MAIN SECTION
      ============================================ */}
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#f8f6f1] py-16 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          {/* FILTERS + VIEW TOGGLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col gap-6 md:mb-12"
          >
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {filters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`
                      group inline-flex items-center gap-2 rounded-full border px-4 py-2.5
                      text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300
                      sm:px-5 sm:py-3 sm:text-[11px]
                      ${
                        isActive
                          ? "border-[#0e382b] bg-[#0e382b] text-white shadow-lg"
                          : "border-[#0e382b]/15 bg-white text-[#0e382b]/70 hover:border-[#0e382b]/40 hover:text-[#0e382b]"
                      }
                    `}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* View Toggle + Count */}
            <div className="flex items-center justify-between border-t border-[#0e382b]/10 pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0e382b]/50 sm:text-sm">
                Showing{" "}
                <span className="font-serif text-lg text-[#9e793e] sm:text-xl">
                  {String(filteredImages.length).padStart(2, "0")}
                </span>{" "}
                Photos
              </p>

              <div className="flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-white p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-[#0e382b] text-white"
                      : "text-[#0e382b]/50 hover:text-[#0e382b]"
                  }`}
                >
                  <Grid3x3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  aria-label="Masonry view"
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                    viewMode === "masonry"
                      ? "bg-[#0e382b] text-white"
                      : "text-[#0e382b]/50 hover:text-[#0e382b]"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* GALLERY GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
                  : "columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6"
              }
            >
              {filteredImages.map((image, index) => (
                <motion.button
                  key={image.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => openLightbox(index)}
                  className={`
                    group relative w-full overflow-hidden rounded-2xl bg-[#eae6dd] shadow-lg
                    transition-all duration-500 hover:shadow-2xl
                    ${
                      viewMode === "masonry"
                        ? "mb-4 inline-block sm:mb-5 lg:mb-6"
                        : "aspect-[4/5]"
                    }
                  `}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`
                      w-full object-cover transition-transform duration-700 group-hover:scale-110
                      ${viewMode === "grid" ? "h-full" : "h-auto"}
                    `}
                  />

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e382b]/90 via-[#0e382b]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Icon Top Right */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                    <Camera className="h-4 w-4 text-white" />
                  </div>

                  {/* Content Bottom */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left transition-all duration-500 group-hover:translate-y-0 sm:p-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#d4ad72]">
                      {image.subtitle}
                    </p>
                    <h3 className="mt-1 font-serif text-lg italic text-white sm:text-xl">
                      {image.title}
                    </h3>

                    {/* Animated Line */}
                    <div className="mt-3 h-[1px] w-0 bg-[#d4ad72] transition-all duration-500 group-hover:w-12" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* EMPTY STATE */}
          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl italic text-[#0e382b]/40">
                No photos in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          HIGHLIGHT STRIP
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: "🏊",
                title: "Private Pool",
                text: "Refreshing afternoons & poolside moments",
              },
              {
                icon: "🛏️",
                title: "Six Bedrooms",
                text: "Restful spaces for everyone in the group",
              },
              {
                icon: "🌿",
                title: "Serene Setting",
                text: "Peaceful surroundings in Virar East",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-5 rounded-2xl border border-[#0e382b]/10 bg-[#f8f6f1] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0e382b]/5 text-2xl transition-all duration-500 group-hover:bg-[#0e382b] group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#0e382b] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-[#0e382b]/60">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-[#0e382b] py-20 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ad72]/30 bg-[#d4ad72]/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#d4ad72]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4ad72]">
                See It In Person
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl lg:text-[56px]">
              Pictures Are Beautiful,
              <br />
              <span className="italic text-[#d4ad72]">Staying Is Better</span>
            </h2>

            <div className="mx-auto mt-8 h-[2px] w-20 bg-[#d4ad72]" />

            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:text-xl">
              Book your stay and experience every corner of Maya Niketan Villa
              in person — from the serene poolside to the warm living spaces.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d4ad72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl sm:text-sm"
              >
                Book Your Stay
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/amenities"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:text-sm"
              >
                View Amenities
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          LIGHTBOX
      ============================================ */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute left-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md sm:left-6 sm:top-6">
              <p className="text-xs font-medium tracking-[0.2em] text-white">
                {String(currentImage + 1).padStart(2, "0")} /{" "}
                {String(filteredImages.length).padStart(2, "0")}
              </p>
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative mx-4 max-h-[85vh] max-w-[90vw] sm:mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImage]?.src}
                alt={filteredImages[currentImage]?.title}
                className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
              />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-black/90 to-transparent p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#d4ad72]">
                  {filteredImages[currentImage]?.subtitle}
                </p>
                <h3 className="mt-1 font-serif text-xl italic text-white sm:text-2xl">
                  {filteredImages[currentImage]?.title}
                </h3>
              </div>
            </motion.div>

            {/* Thumbnails Strip */}
            <div className="absolute bottom-4 left-1/2 hidden max-w-[80vw] -translate-x-1/2 gap-2 overflow-x-auto rounded-full bg-white/10 p-2 backdrop-blur-md sm:flex">
              {filteredImages.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(idx);
                  }}
                  aria-label={`View image ${idx + 1}`}
                  className={`h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 transition-all duration-300 ${
                    idx === currentImage
                      ? "border-[#d4ad72] scale-110"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
