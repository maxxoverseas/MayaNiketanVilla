import React, { useEffect, useState } from "react";

const ClubSection = () => {
  const images = [
    "/images/club-1.jpg",
    "/images/club-2.jpg",
    "/images/club-3.jpg",
    "/images/club-4.jpg",
  ];

  const amenities = [
    {
      icon: "🏡",
      title: "Spacious 6BHK Villa",
    },
    {
      icon: "🏊",
      title: "Private Swimming Pool",
    },
    {
      icon: "🛋️",
      title: "Comfortable Living Spaces",
    },
    {
      icon: "🍽️",
      title: "Dining & Gathering Space",
    },
    {
      icon: "🌿",
      title: "Peaceful Surroundings",
    },
    {
      icon: "🌤️",
      title: "Open-Air Moments",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Getaways",
    },
    {
      icon: "🎉",
      title: "Private Celebrations",
    },
    {
      icon: "📸",
      title: "Picture-Perfect Moments",
    },
    {
      icon: "🌙",
      title: "Relaxed Evenings",
    },
    {
      icon: "🚗",
      title: "Convenient Road Access",
    },
    {
      icon: "✨",
      title: "Private Villa Experience",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const slider = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(slider);
  }, [images.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#f8f6f1] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* TOP CONTENT */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8f8067] sm:text-sm">
            The Villa Experience
          </p>

          <h2 className="font-serif text-3xl italic leading-tight text-[#b9925f] md:text-4xl lg:text-[42px]">
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

          {/* BOOKING STATUS */}
          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#73805d]" />

            <p className="text-xs uppercase tracking-[0.18em] text-[#687064]">
              Now Open • Bookings Available
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT SIDE FEATURES */}
          <div className="w-full">
            <p className="mb-8 font-serif text-xl italic text-[#8c704d] md:text-2xl">
              Everything you need for a memorable escape.
            </p>

            <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:gap-x-7 md:gap-y-10">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      mb-3
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#b9925f]/30
                      bg-white
                      text-2xl
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:border-[#b9925f]
                      group-hover:shadow-md
                      sm:h-16
                      sm:w-16
                      sm:text-3xl
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <p className="max-w-[150px] text-sm leading-5 text-[#596159] md:text-[15px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* EXPERIENCE TYPES */}
            <div className="mt-10 border-t border-[#b9925f]/20 pt-7">
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
          </div>

          {/* RIGHT SIDE GALLERY */}
          <div className="w-full">
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden bg-[#eae6dd] shadow-xl">
              <div className="relative aspect-[16/10] w-full">
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Maya Niketan Villa view ${index + 1}`}
                    className={`
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      ${
                        activeIndex === index
                          ? "scale-100 opacity-100"
                          : "scale-105 opacity-0"
                      }
                    `}
                  />
                ))}
              </div>

              {/* SOFT OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-black/5" />

              {/* BOTTOM GRADIENT */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />

              {/* IMAGE LABEL */}
              <div className="absolute bottom-5 left-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                  Maya Niketan Villa
                </p>

                <p className="mt-1 font-serif text-lg italic text-white sm:text-xl">
                  Your private getaway in Virar East
                </p>
              </div>

              {/* IMAGE COUNTER */}
              <div className="absolute right-4 top-4 bg-black/30 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.14em] text-white sm:text-xs">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </p>
              </div>

              {/* PREVIOUS BUTTON */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous image"
                className="
                  absolute
                  left-3
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-2xl
                  text-[#263c2a]
                  shadow-md
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white
                  md:h-12
                  md:w-12
                "
              >
                ‹
              </button>

              {/* NEXT BUTTON */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-2xl
                  text-[#263c2a]
                  shadow-md
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white
                  md:h-12
                  md:w-12
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
                    relative
                    aspect-[4/2.6]
                    overflow-hidden
                    border
                    transition-all
                    duration-300
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
                <p className="font-serif text-lg italic text-[#8c704d]">
                  Come for the stay. Stay for the moments.
                </p>

                <p className="mt-1 text-xs text-[#858982]">
                  6BHK Luxury Pool Villa • Virar East
                </p>
              </div>

              <a
                href="/contact"
                className="
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  border
                  border-[#263c2a]
                  px-5
                  py-2.5
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-[#263c2a]
                  transition-all
                  duration-300
                  hover:bg-[#263c2a]
                  hover:text-white
                  sm:text-xs
                "
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="mx-auto h-[1px] w-16 bg-[#b9925f]/50" />

          <p className="mt-6 font-serif text-xl italic text-[#b9925f] md:text-2xl">
            More space. More privacy. More time together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
