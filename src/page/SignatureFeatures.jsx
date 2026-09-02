import React, { useEffect, useState } from "react";

const SignatureFeatures = () => {
  const images = [
    "/images/feature-1.jpg",
    "/images/feature-2.jpg",
    "/images/feature-3.jpg",
    "/images/feature-4.jpg",
  ];

  const features = [
    {
      title: "Spacious 6BHK Living",
      text: "Generous living spaces give families and groups the room to stay comfortably, relax together and enjoy their time without feeling crowded.",
    },
    {
      title: "Private Swimming Pool",
      text: "Enjoy your own private pool for refreshing afternoons, relaxed poolside time and memorable moments with family and friends.",
    },
    {
      title: "Comfortable Indoor Spaces",
      text: "Welcoming indoor areas create an easy setting for conversations, shared meals, entertainment and relaxed time together.",
    },
    {
      title: "Space for Family & Friends",
      text: "With six bedrooms and spacious common areas, the villa is well suited for family getaways, group stays and quality time together.",
    },
    {
      title: "Made for Celebrations",
      text: "A private setting for birthdays, anniversaries, family occasions and intimate celebrations with the people closest to you.",
    },
    {
      title: "Peaceful Virar East Setting",
      text: "Enjoy a more relaxed side of Virar East while staying connected through Kaner–Dahisar Road and nearby local landmarks.",
    },
    {
      title: "Complete Private Villa Experience",
      text: "The privacy of an entire villa gives you the freedom to relax, celebrate and enjoy your stay at your own pace.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full bg-[#263c2a] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* TOP CONTENT */}
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/50 sm:text-sm">
            What Makes Your Stay Special
          </p>

          <h2 className="font-serif text-3xl italic leading-tight text-[#d4ad72] md:text-4xl lg:text-[42px]">
            Signature Features
          </h2>

          <div className="mx-auto mt-6 h-[1px] w-20 bg-[#d4ad72]" />

          <p className="mt-7 text-lg font-light text-white/90 md:text-xl">
            Space, Privacy & Comfort — All in One Place
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base font-light leading-[1.85] text-white/65 md:text-lg">
            Maya Niketan Villa is a private 6BHK luxury pool villa in Virar
            East, offering a comfortable setting for staycations, family
            holidays, weekend escapes and special celebrations.
          </p>

          {/* STATUS */}
          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#d4ad72]" />

            <p className="text-xs uppercase tracking-[0.18em] text-white/50">
              Now Open • Bookings Available
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT SIDE GALLERY */}
          <div className="w-full">
            {/* MAIN IMAGE */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black shadow-2xl">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Maya Niketan Villa feature ${index + 1}`}
                  className={`
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-1000
                    ${
                      activeIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }
                  `}
                />
              ))}

              {/* SUBTLE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              {/* BOTTOM GRADIENT */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

              {/* IMAGE CONTENT */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
                  Maya Niketan Villa
                </p>

                <p className="mt-1 font-serif text-lg italic text-white sm:text-xl">
                  Made for moments together.
                </p>
              </div>

              {/* SLIDE NUMBER */}
              <div className="absolute right-4 top-4 bg-black/35 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.15em] text-white/85 sm:text-xs">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </p>
              </div>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View Maya Niketan Villa feature ${index + 1}`}
                  className={`
                    relative
                    aspect-[4/2.6]
                    overflow-hidden
                    border
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "border-[#d4ad72] opacity-100"
                        : "border-transparent opacity-40 hover:opacity-80"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`Maya Niketan Villa preview ${index + 1}`}
                    className="h-full w-full object-cover"
                  />

                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#d4ad72]" />
                  )}
                </button>
              ))}
            </div>

            {/* GALLERY INFO */}
            <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-lg italic text-[#d4ad72]">
                Your private getaway in Virar East.
              </p>

              <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
                6BHK • Private Pool
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FEATURES */}
          <div className="w-full">
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d4ad72]/70">
              Villa Highlights
            </p>

            <div className="space-y-0">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="
                    group
                    border-b
                    border-white/10
                    py-5
                    first:pt-0
                    last:border-b-0
                  "
                >
                  <div className="flex items-start gap-4">
                    {/* NUMBER */}
                    <span className="mt-1 min-w-[26px] font-serif text-sm italic text-[#d4ad72]/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* CONTENT */}
                    <div>
                      <h3 className="font-serif text-lg italic text-white transition-colors duration-300 group-hover:text-[#d4ad72] md:text-xl">
                        {feature.title}
                      </h3>

                      <p className="mt-2 max-w-[600px] text-sm font-light leading-7 text-white/60 md:text-base">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOOKING CTA */}
            <div className="mt-8 border-t border-[#d4ad72]/20 pt-7">
              <p className="font-serif text-xl italic text-[#d4ad72]">
                Ready for your next escape?
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                Plan your stay at Maya Niketan Villa for a weekend getaway,
                family holiday or special celebration.
              </p>

              <a
                href="/contact"
                className="
                  mt-6
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-[#d4ad72]
                  px-7
                  py-3.5
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-[#d4ad72]
                  transition-all
                  duration-300
                  hover:bg-[#d4ad72]
                  hover:text-[#263c2a]
                  sm:text-sm
                "
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-white/10 pt-9 text-center md:mt-16">
          <p className="font-serif text-xl italic leading-relaxed text-[#d4ad72] md:text-2xl">
            Stay together. Celebrate together. Make memories together.
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/35">
            Maya Niketan Villa • Virar East • Palghar, Maharashtra
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignatureFeatures;
