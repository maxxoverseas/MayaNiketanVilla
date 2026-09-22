import React, { useEffect, useState } from "react";

const GallerySection = () => {
  const images = [
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/20.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
    "/images/23.jpg",
    "/images/24.jpg",
    "/images/25.jpg",
    "/images/26.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const slider = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slider);
  }, [images.length, isPaused]);

  const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  return (
    <section
      className="w-full overflow-hidden bg-[#fafaf7] "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="mx-auto mb-11 max-w-4xl text-center md:mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8e8661] sm:text-sm">
            Explore the Villa
          </p>
          <h2 className="font-serif text-3xl italic leading-tight text-[#b9925f] md:text-4xl lg:text-[42px]">
            The Maya Niketan Gallery
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-20 bg-[#b9925f]" />
          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-[1.85] text-[#5d655d] md:text-lg">
            Take a closer look at the spaces, atmosphere and moments that make
            Maya Niketan Villa a comfortable private escape.
          </p>
        </div>

        <div className="bg-white p-3 shadow-[0_20px_60px_rgba(38,60,42,0.08)] sm:p-5 md:p-7">
          {/* DESKTOP / TABLET */}
          <div className="hidden h-[380px] items-center gap-3 sm:flex md:h-[430px] md:gap-4 lg:h-[500px]">
            <button
              type="button"
              onClick={() => setActiveIndex(prevIndex)}
              className="group relative h-[82%] w-[22%] overflow-hidden"
              aria-label="View previous image"
            >
              <img
                src={images[prevIndex]}
                alt="Previous view"
                className="h-full w-full scale-105 object-cover blur-[1.5px] transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#14281a]/45 transition-all duration-300 group-hover:bg-[#14281a]/30" />
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/15 text-2xl text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                ‹
              </div>
            </button>

            <div className="relative h-full flex-1 overflow-hidden bg-[#ebe8df] shadow-xl">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Gallery view ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              <div className="pointer-events-none absolute inset-0 bg-black/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-7 md:left-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
                  Maya Niketan Villa
                </p>
                <p className="mt-1 font-serif text-lg italic text-white md:text-xl">
                  Your private escape in Virar East.
                </p>
              </div>

              <div className="absolute right-4 top-4 bg-black/30 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.14em] text-white/90 sm:text-xs">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex(prevIndex)}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-2xl text-[#263c2a] shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex(nextIndex)}
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-2xl text-[#263c2a] shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                ›
              </button>
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex(nextIndex)}
              className="group relative h-[82%] w-[22%] overflow-hidden"
              aria-label="View next image"
            >
              <img
                src={images[nextIndex]}
                alt="Next view"
                className="h-full w-full scale-105 object-cover blur-[1.5px] transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#14281a]/45 transition-all duration-300 group-hover:bg-[#14281a]/30" />
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/15 text-2xl text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                ›
              </div>
            </button>
          </div>

          {/* MOBILE */}
          <div className="relative block aspect-[4/3] overflow-hidden bg-[#ebe8df] sm:hidden">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Gallery view ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                  activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}

            <div className="pointer-events-none absolute inset-0 bg-black/5" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

            <div className="absolute bottom-4 left-4 max-w-[75%]">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#d4ad72]">
                Maya Niketan Villa
              </p>
              <p className="mt-1 font-serif text-base italic text-white">
                Your private escape in Virar East.
              </p>
            </div>

            <div className="absolute right-3 top-3 bg-black/30 px-2.5 py-1.5 backdrop-blur-sm">
              <p className="text-[9px] tracking-[0.12em] text-white">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex(prevIndex)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl text-[#263c2a] shadow-md backdrop-blur-sm"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() => setActiveIndex(nextIndex)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl text-[#263c2a] shadow-md backdrop-blur-sm"
            >
              ›
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}`}
                className={`block rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "h-2 w-7 bg-[#263c2a]"
                    : "h-2 w-2 bg-[#d8d4ca] hover:bg-[#b9925f]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="font-serif text-xl italic text-[#b9925f] md:text-2xl">
            See the space. Imagine your stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
