import React, { useEffect, useState } from "react";

const Gallery = () => {
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

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prev = active === 0 ? images.length - 1 : active - 1;

  const next = active === images.length - 1 ? 0 : active + 1;

  return (
    <main id="gallery" className="w-full overflow-hidden bg-[#f7f3e8]">
      {/* HERO */}
      <section className="bg-[#243a29] py-20 text-center md:py-24">
        <p className="font-serif text-lg italic text-[#d4ad72]">Gallery</p>

        <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
          Discover Maya Niketan Villa
        </h1>

        <p className="mx-auto mt-5 max-w-[680px] px-6 text-sm leading-7 text-white/60 md:text-base">
          A glimpse into the spaces, surroundings and details that shape the
          Maya Niketan Villa experience.
        </p>
      </section>

      {/* SLIDER */}
      <section className="bg-[#f7f3e8] py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="rounded-[25px] bg-white p-4 shadow-xl md:p-7">
            <div className="hidden h-[400px] items-center gap-4 sm:flex lg:h-[520px]">
              {/* LEFT */}
              <div className="relative h-[82%] w-[22%] overflow-hidden rounded-xl">
                <img
                  src={images[prev]}
                  alt=""
                  className="h-full w-full scale-105 object-cover blur-[2px]"
                />

                <div className="absolute inset-0 bg-[#243a29]/45" />
              </div>

              {/* CENTER */}
              <div className="relative h-full flex-1 overflow-hidden rounded-xl">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      active === index
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* RIGHT */}
              <div className="relative h-[82%] w-[22%] overflow-hidden rounded-xl">
                <img
                  src={images[next]}
                  alt=""
                  className="h-full w-full scale-105 object-cover blur-[2px]"
                />

                <div className="absolute inset-0 bg-[#243a29]/45" />
              </div>
            </div>

            {/* MOBILE */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:hidden">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                    active === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* DOTS */}
            <div className="mt-6 flex justify-center gap-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`rounded-full transition-all ${
                    active === index
                      ? "h-2.5 w-7 bg-[#243a29]"
                      : "h-2.5 w-2.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden ${
                  index === 0 || index === 5 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Maya Niketan Villa ${index + 1}`}
                  className="h-full min-h-[220px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
