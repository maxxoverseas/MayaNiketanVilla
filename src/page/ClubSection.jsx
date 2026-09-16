import React, { useEffect, useRef, useState } from "react";

const ClubSection = () => {
  const images = [
    "/images/2.jpg",
    "/images/1.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ];

  const amenities = [
    { icon: "🏡", title: "Spacious 6BHK Villa" },
    { icon: "🏊", title: "Private Swimming Pool" },
    { icon: "🛋️", title: "Comfortable Living Spaces" },
    { icon: "🍽️", title: "Dining & Gathering Space" },
    { icon: "🌿", title: "Peaceful Surroundings" },
    { icon: "🌤️", title: "Open-Air Moments" },
    { icon: "👨‍👩‍👧‍👦", title: "Family Getaways" },
    { icon: "🎉", title: "Private Celebrations" },
    { icon: "📸", title: "Picture-Perfect Moments" },
    { icon: "🌙", title: "Relaxed Evenings" },
    { icon: "🚗", title: "Convenient Road Access" },
    { icon: "✨", title: "Private Villa Experience" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const slider = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length, isPaused]);

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
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f6f1] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* TOP CONTENT */}
        <div
          className={`
            mx-auto mb-12 max-w-4xl text-center transition-all duration-700 ease-out
            sm:mb-14 md:mb-16
            ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8f8067] sm:text-sm">
            The Villa Experience
          </p>
          <h2 className="font-serif text-[28px] italic leading-tight text-[#b9925f] sm:text-3xl md:text-4xl lg:text-[42px]">
            Your Space to Stay, Relax & Celebrate
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-20 bg-[#b9925f]" />
          <p className="mx-auto mt-7 max-w-3xl text-base leading-[1.85] text-[#596159] md:text-lg">
            Maya Niketan Villa is a private 6BHK luxury pool villa in Virar
            East, created for families and friends who want more space, privacy
            and time together.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#727770] md:text-base">
            From refreshing poolside afternoons and comfortable indoor moments
            to family holidays and private celebrations, the villa gives you the
            freedom to enjoy your stay at your own pace.
          </p>
          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#73805d]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#73805d]" />
            </span>
            <p className="text-xs uppercase tracking-[0.18em] text-[#687064]">
              Now Open • Bookings Available
            </p>
          </div>
        </div>

        {/* MAIN CONTENT — STICKY GALLERY */}
        <div className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT SIDE FEATURES (SCROLLING) */}
          <div
            className={`
              w-full transition-all duration-700 ease-out
              ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }
            `}
            style={{ transitionDelay: inView ? "120ms" : "0ms" }}
          >
            <p className="mb-7 font-serif text-lg italic text-[#8c704d] sm:mb-8 sm:text-xl md:text-2xl">
              Everything you need for a memorable escape.
            </p>

            <div className="grid grid-cols-3 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 md:gap-x-7 md:gap-y-10">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className={`
                    group flex flex-col items-center text-center
                    transition-all duration-500 ease-out
                    ${
                      inView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: inView ? `${180 + index * 45}ms` : "0ms",
                  }}
                >
                  <div
                    className="
                      mb-3 flex h-12 w-12 items-center justify-center rounded-full
                      border border-[#b9925f]/30 bg-white text-xl shadow-sm
                      transition-all duration-300
                      group-hover:-translate-y-1 group-hover:border-[#b9925f] group-hover:shadow-md
                      sm:h-14 sm:w-14 sm:text-2xl
                      md:h-16 md:w-16 md:text-3xl
                    "
                  >
                    {item.icon}
                  </div>
                  <p className="max-w-[110px] text-xs leading-5 text-[#596159] sm:max-w-[150px] sm:text-sm md:text-[15px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* EXPERIENCE TYPES */}
            <div className="mt-9 border-t border-[#b9925f]/20 pt-7 sm:mt-10">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8b8f88]">
                Perfect For
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-serif text-base italic text-[#8c704d] sm:text-lg">
                <span>Staycations</span>
                <span className="text-[#b9925f]/50">•</span>
                <span>Family Holidays</span>
                <span className="text-[#b9925f]/50">•</span>
                <span>Celebrations</span>
                <span className="text-[#b9925f]/50">•</span>
                <span>Weekend Escapes</span>
              </div>
            </div>

            {/* ⭐ EXTRA CONTENT — taaki left side lamba ho aur sticky effect dikhe */}
            <div className="mt-10 space-y-6 border-t border-[#b9925f]/20 pt-8">
              <div>
                <h3 className="font-serif text-xl italic text-[#8c704d] sm:text-2xl">
                  Designed for Togetherness
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#727770] sm:text-base">
                  Every corner of Maya Niketan Villa is thoughtfully created to
                  bring people closer — whether you're lounging by the pool,
                  sharing meals in the dining area, or simply enjoying the
                  quietude of Virar East.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl italic text-[#8c704d] sm:text-2xl">
                  Privacy You Deserve
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#727770] sm:text-base">
                  The entire villa is exclusively yours during your stay. No
                  shared spaces, no interruptions — just you, your loved ones,
                  and the peaceful surroundings of the property.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl italic text-[#8c704d] sm:text-2xl">
                  Moments That Stay With You
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#727770] sm:text-base">
                  From sunrise coffees by the pool to late-night conversations
                  under the stars, the villa offers countless opportunities to
                  create memories that last far beyond your stay.
                </p>
              </div>
            </div>
          </div>

          {/* ⭐ RIGHT SIDE GALLERY — STICKY ON DESKTOP */}
          <div
            className={`
              w-full transition-all duration-700 ease-out
              lg:sticky lg:top-[96px] lg:self-start
              ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }
            `}
            style={{ transitionDelay: inView ? "220ms" : "0ms" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-sm bg-[#eae6dd] shadow-xl">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Maya Niketan Villa view ${index + 1}`}
                    className={`
                      absolute inset-0 h-full w-full object-cover
                      transition-all duration-700
                      ${
                        activeIndex === index
                          ? "scale-100 opacity-100"
                          : "scale-105 opacity-0"
                      }
                    `}
                  />
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 bg-black/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                  Maya Niketan Villa
                </p>
                <p className="mt-1 font-serif text-base italic text-white sm:text-lg md:text-xl">
                  Your private getaway in Virar East
                </p>
              </div>

              <div
                className="absolute right-4 top-4 bg-black/30 px-3 py-2 backdrop-blur-sm"
                aria-live="polite"
              >
                <p className="text-[10px] tracking-[0.14em] text-white sm:text-xs">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </p>
              </div>

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous image"
                className="
                  absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center
                  rounded-full bg-white/90 text-xl text-[#263c2a] shadow-md backdrop-blur-sm
                  transition-all duration-300 hover:scale-105 hover:bg-white
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9925f]
                  sm:left-3 md:h-12 md:w-12 md:text-2xl
                "
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="
                  absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center
                  rounded-full bg-white/90 text-xl text-[#263c2a] shadow-md backdrop-blur-sm
                  transition-all duration-300 hover:scale-105 hover:bg-white
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9925f]
                  sm:right-3 md:h-12 md:w-12 md:text-2xl
                "
              >
                ›
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-3 grid grid-cols-4 gap-2 md:gap-3">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View Maya Niketan Villa image ${index + 1}`}
                  className={`
                    relative aspect-[4/2.6] overflow-hidden border transition-all duration-300
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9925f]
                    ${
                      activeIndex === index
                        ? "border-[#b9925f] opacity-100"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`Maya Niketan Villa preview ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#b9925f]" />
                  )}
                </button>
              ))}
            </div>

            {/* GALLERY BOTTOM */}
            <div className="mt-5 flex flex-col gap-3 border-t border-[#b9925f]/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-base italic text-[#8c704d] sm:text-lg">
                  Come for the stay. Stay for the moments.
                </p>
                <p className="mt-1 text-xs text-[#858982]">
                  6BHK Luxury Pool Villa • Virar East
                </p>
              </div>
              <a
                href="/contact"
                className="
                  inline-flex w-fit items-center justify-center border border-[#263c2a]
                  px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] text-[#263c2a]
                  transition-all duration-300 hover:bg-[#263c2a] hover:text-white sm:text-xs
                "
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div
          className={`
            mx-auto mt-14 max-w-3xl text-center transition-all duration-700 ease-out
            ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
          style={{ transitionDelay: inView ? "300ms" : "0ms" }}
        >
          <div className="mx-auto h-[1px] w-16 bg-[#b9925f]/50" />
          <p className="mt-6 font-serif text-lg italic text-[#b9925f] sm:text-xl md:text-2xl">
            More space. More privacy. More time together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
