import React, { useEffect, useState } from "react";

const GallerySection = () => {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const slider = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  }, [images.length]);

  const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;

  const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  const handlePrevious = () => {
    setActiveIndex(prevIndex);
  };

  const handleNext = () => {
    setActiveIndex(nextIndex);
  };

  return (
    <section className="w-full overflow-hidden bg-[#fafaf7] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        {/* TOP CONTENT */}
        <div className="mx-auto mb-11 max-w-4xl text-center md:mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8e8661] sm:text-sm">
            Explore the Villa
          </p>

          <h2 className="font-serif text-3xl italic leading-tight text-[#b9925f] md:text-4xl lg:text-[42px]">
            The Maya Niketan Gallery
          </h2>

          <div className="mx-auto mt-6 h-[1px] w-20 bg-[#b9925f]" />

          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-[1.85] text-[#5d655d] md:text-lg">
            Take a closer look at Maya Niketan Villa — a private 6BHK luxury
            pool villa in Virar East created for relaxed stays, quality time and
            memorable celebrations.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-7 text-[#858982] md:text-base">
            Discover the spaces, atmosphere and moments that make the villa a
            comfortable private escape for families and friends.
          </p>

          {/* BOOKING STATUS */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#73805d]" />

            <p className="text-[10px] uppercase tracking-[0.18em] text-[#687064] sm:text-xs">
              Now Open • Bookings Available
            </p>
          </div>
        </div>

        {/* MAIN GALLERY */}
        <div className="bg-white p-3 shadow-[0_20px_60px_rgba(38,60,42,0.08)] sm:p-5 md:p-7">
          {/* DESKTOP / TABLET */}
          <div className="hidden h-[380px] items-center gap-3 sm:flex md:h-[430px] md:gap-4 lg:h-[500px]">
            {/* LEFT PREVIEW */}
            <button
              type="button"
              onClick={handlePrevious}
              className="
                group
                relative
                h-[82%]
                w-[22%]
                overflow-hidden
              "
              aria-label="View previous image"
            >
              <img
                src={images[prevIndex]}
                alt="Previous Maya Niketan Villa gallery view"
                className="
                  h-full
                  w-full
                  scale-105
                  object-cover
                  blur-[1.5px]
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-[#14281a]/45 transition-all duration-300 group-hover:bg-[#14281a]/30" />

              {/* PREVIOUS ARROW */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-black/15
                  text-2xl
                  text-white/80
                  opacity-0
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              >
                ‹
              </div>
            </button>

            {/* CENTER ACTIVE IMAGE */}
            <div className="relative h-full flex-1 overflow-hidden bg-[#ebe8df] shadow-xl">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Maya Niketan Villa gallery view ${index + 1}`}
                  className={`
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-1000
                    ease-in-out
                    ${
                      activeIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }
                  `}
                />
              ))}

              {/* SOFT OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-black/5" />

              {/* BOTTOM GRADIENT */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              {/* IMAGE LABEL */}
              <div className="absolute bottom-6 left-6 md:bottom-7 md:left-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
                  Maya Niketan Villa
                </p>

                <p className="mt-1 font-serif text-lg italic text-white md:text-xl">
                  Your private escape in Virar East.
                </p>
              </div>

              {/* SLIDE COUNT */}
              <div className="absolute right-4 top-4 bg-black/30 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.14em] text-white/90 sm:text-xs">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </p>
              </div>

              {/* CENTER PREVIOUS BUTTON */}
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous gallery image"
                className="
                  absolute
                  left-4
                  top-1/2
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/85
                  text-2xl
                  text-[#263c2a]
                  shadow-md
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white
                "
              >
                ‹
              </button>

              {/* CENTER NEXT BUTTON */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next gallery image"
                className="
                  absolute
                  right-4
                  top-1/2
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/85
                  text-2xl
                  text-[#263c2a]
                  shadow-md
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white
                "
              >
                ›
              </button>
            </div>

            {/* RIGHT PREVIEW */}
            <button
              type="button"
              onClick={handleNext}
              className="
                group
                relative
                h-[82%]
                w-[22%]
                overflow-hidden
              "
              aria-label="View next image"
            >
              <img
                src={images[nextIndex]}
                alt="Next Maya Niketan Villa gallery view"
                className="
                  h-full
                  w-full
                  scale-105
                  object-cover
                  blur-[1.5px]
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-[#14281a]/45 transition-all duration-300 group-hover:bg-[#14281a]/30" />

              {/* NEXT ARROW */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-black/15
                  text-2xl
                  text-white/80
                  opacity-0
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              >
                ›
              </div>
            </button>
          </div>

          {/* MOBILE GALLERY */}
          <div className="relative block aspect-[4/3] overflow-hidden bg-[#ebe8df] sm:hidden">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Maya Niketan Villa gallery view ${index + 1}`}
                className={`
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-1000
                  ease-in-out
                  ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }
                `}
              />
            ))}

            {/* OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-black/5" />

            {/* GRADIENT */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

            {/* MOBILE TEXT */}
            <div className="absolute bottom-4 left-4 max-w-[75%]">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#d4ad72]">
                Maya Niketan Villa
              </p>

              <p className="mt-1 font-serif text-base italic text-white">
                Your private escape in Virar East.
              </p>
            </div>

            {/* MOBILE COUNT */}
            <div className="absolute right-3 top-3 bg-black/30 px-2.5 py-1.5 backdrop-blur-sm">
              <p className="text-[9px] tracking-[0.12em] text-white">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </p>
            </div>

            {/* MOBILE PREVIOUS */}
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous gallery image"
              className="
                absolute
                left-3
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/85
                text-xl
                text-[#263c2a]
                shadow-md
                backdrop-blur-sm
              "
            >
              ‹
            </button>

            {/* MOBILE NEXT */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next gallery image"
              className="
                absolute
                right-3
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/85
                text-xl
                text-[#263c2a]
                shadow-md
                backdrop-blur-sm
              "
            >
              ›
            </button>
          </div>

          {/* DOT INDICATORS */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`View gallery image ${index + 1}`}
                className={`
                  block
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    activeIndex === index
                      ? "h-2 w-7 bg-[#263c2a]"
                      : "h-2 w-2 bg-[#d8d4ca] hover:bg-[#b9925f]"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* GALLERY INFO */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="font-serif text-xl italic text-[#b9925f] md:text-2xl">
            See the space. Imagine your stay.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-7 text-[#777d76] md:text-base">
            Explore Maya Niketan Villa and discover a private space made for
            poolside relaxation, family time, weekend getaways and celebrations
            worth remembering.
          </p>
        </div>

        {/* PROPERTY HIGHLIGHTS */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 border-y border-[#b9925f]/20 py-6 sm:grid-cols-3">
          <div className="py-3 text-center sm:border-r sm:border-[#b9925f]/20">
            <p className="font-serif text-xl text-[#3e493f]">6BHK</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Spacious Private Villa
            </p>
          </div>

          <div className="py-3 text-center sm:border-r sm:border-[#b9925f]/20">
            <p className="font-serif text-xl text-[#3e493f]">Private Pool</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Relax & Unwind
            </p>
          </div>

          <div className="py-3 text-center">
            <p className="font-serif text-xl text-[#3e493f]">Virar East</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Palghar • Maharashtra
            </p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#73805d]" />

            <p className="text-[10px] uppercase tracking-[0.18em] text-[#687064] sm:text-xs">
              Now Open • Bookings Available
            </p>
          </div>

          <p className="mt-5 font-serif text-lg italic text-[#8d783d] md:text-xl">
            Ready to make these moments yours?
          </p>

          <a
            href="/contact"
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              border
              border-[#263c2a]
              bg-[#263c2a]
              px-8
              py-3.5
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-white
              transition-all
              duration-300
              hover:border-[#b9925f]
              hover:bg-[#b9925f]
              sm:text-xs
            "
          >
            Book Your Stay
          </a>

          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#9b9e98] sm:text-xs">
            6BHK Luxury Pool Villa • Virar East • Bookings Open
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
