import React, { useEffect, useState } from "react";

const Gallery = () => {
  const galleryItems = [
    { src: "/images/1.jpg", title: "Exterior Grounds", category: "Outdoor" },
    { src: "/images/2.jpg", title: "Grand Living Area", category: "Interior" },
    { src: "/images/3.jpg", title: "Private Poolside", category: "Leisure" },
    { src: "/images/4.jpg", title: "Luxury Suite", category: "Bedrooms" },
    { src: "/images/5.jpg", title: "Dining Experience", category: "Living" },
    { src: "/images/6.jpg", title: "Garden Pathway", category: "Nature" },
    { src: "/images/7.jpg", title: "Sunset Deck", category: "Outdoor" },
    { src: "/images/8.jpg", title: "Lounge Area", category: "Interior" },
    { src: "/images/9.jpg", title: "Spacious Balcony", category: "Views" },
    {
      src: "/images/10.jpg",
      title: "Evening Illumination",
      category: "Nightview",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryItems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [galleryItems.length]);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <main
      id="gallery"
      className="w-full min-h-screen overflow-x-hidden bg-[#FAF8F5] text-slate-800 selection:bg-[#d5ae70] selection:text-slate-900"
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F5] text-slate-900 border-b border-stone-200/60 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-[#bd8c50]" />
            <p className="font-serif text-lg italic tracking-wide text-[#bd8c50]">
              Visual Experience
            </p>
            <span className="h-[1px] w-10 bg-[#bd8c50]" />
          </div>

          <h1 className="mt-6 font-serif text-4xl font-normal leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Discover
            <span className="mt-2 block italic text-[#bd8c50]">
              Maya Niketan Villa
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A curated visual narrative into the architectural elegance, lush
            landscapes, and serene spaces designed for unforgettable stays.
          </p>
        </div>
      </section>

      {/* =====================================================
          3D PERSPECTIVE CAROUSEL SLIDER
      ===================================================== */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* 3D Viewport Container */}
          <div className="relative min-h-[420px] sm:min-h-[500px] md:min-h-[560px] w-full flex items-center justify-center perspective-[1200px]">
            <div className="relative w-full max-w-4xl h-[360px] sm:h-[460px] flex items-center justify-center">
              {galleryItems.map((item, index) => {
                let offset = index - active;
                if (offset < -2) offset += galleryItems.length;
                if (offset > 2) offset -= galleryItems.length;

                // Calculate 3D Transformation styles
                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 2;

                return (
                  <div
                    key={index}
                    onClick={() => setActive(index)}
                    className={`absolute w-[80%] sm:w-[65%] md:w-[55%] h-full rounded-2xl p-2 bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-2xl transition-all duration-700 ease-out cursor-pointer overflow-hidden ${
                      isVisible
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                    style={{
                      transform: `
                        translateX(${offset * 55}%) 
                        translateZ(${isCenter ? "0px" : "-180px"}) 
                        rotateY(${offset * -25}deg)
                        scale(${isCenter ? 1 : 0.85})
                      `,
                      zIndex: 30 - Math.abs(offset) * 10,
                    }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-900 group">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d5ae70]">
                          {item.category}
                        </span>
                        <h3 className="mt-1 font-serif text-xl sm:text-2xl text-white italic">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-xl border border-stone-200/80 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-110"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-xl border border-stone-200/80 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-110"
            >
              ❯
            </button>
          </div>

          {/* DOTS NAVIGATION */}
          <div className="mt-10 flex justify-center items-center gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-8 bg-[#bd8c50]"
                    : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MASONRY BENTO GRID
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28 border-t border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Complete Collection
            </p>
            <h2 className="mt-2 font-serif text-3xl font-normal text-slate-900 sm:text-4xl lg:text-5xl">
              Explore Every Corner
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-stone-200/80 bg-[#FAF8F5] p-2 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 0 || index === 5
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-lg bg-slate-900">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d5ae70]">
                      {item.category}
                    </span>
                    <p className="font-serif text-lg text-white italic">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CALL TO ACTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F5] py-20 text-slate-900 lg:py-28">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-lg italic text-[#bd8c50]">
            Experience It In Person
          </p>

          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Ready for Your Next Retreat?
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Book your stay at Maya Niketan Villa and turn these visuals into
            your own reality.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-sm bg-slate-900 px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-xl"
          >
            Reserve Your Villa
          </a>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
