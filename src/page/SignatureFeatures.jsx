import React, { useEffect, useRef, useState } from "react";

const SignatureFeatures = () => {
  // Adjust this to your navbar's real rendered height (in px) so the sticky
  // image stops exactly below the navbar with no gap or overlap.
  const NAVBAR_OFFSET = 104;

  const images = [
    "/images/background1.jpg",
    "/images/10.jpg",
    "/images/9.jpg",
    "/images/8.jpg",
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
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // REFS FOR THE JS-DRIVEN FIXED GALLERY
  const columnRef = useRef(null); // the tall outer column (matches text column height)
  const galleryRef = useRef(null); // the actual visual gallery block being pinned
  const [galleryStyle, setGalleryStyle] = useState({ position: "static" });

  // AUTO SLIDER — PAUSES ON HOVER / FOCUS
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  // ONE-TIME SCROLL REVEAL FOR THE WHOLE SECTION
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

  // JS-DRIVEN "FIXED WHILE SCROLLING THROUGH THE TEXT COLUMN" BEHAVIOR.
  // This does not rely on CSS position:sticky, so it can't be silently broken
  // by an overflow/transform/filter set on some ancestor elsewhere in the page.
  useEffect(() => {
    const updatePosition = () => {
      const column = columnRef.current;
      const gallery = galleryRef.current;
      if (!column || !gallery) return;

      // Below the lg breakpoint the gallery stays in normal flow (stacked layout).
      if (window.innerWidth < 1024) {
        setGalleryStyle({ position: "static" });
        return;
      }

      const columnRect = column.getBoundingClientRect();
      const galleryHeight = gallery.offsetHeight;

      if (columnRect.top > NAVBAR_OFFSET) {
        // Text column hasn't reached the navbar yet — gallery sits at its normal spot.
        setGalleryStyle({ position: "static" });
      } else if (columnRect.bottom < NAVBAR_OFFSET + galleryHeight) {
        // Text column is ending — release the gallery to the bottom of its column
        // so it scrolls away naturally into the next section, with no overlap.
        setGalleryStyle({ position: "absolute", left: 0, right: 0, bottom: 0 });
      } else {
        // Text column is still scrolling past — pin the gallery below the navbar.
        setGalleryStyle({
          position: "fixed",
          top: NAVBAR_OFFSET,
          left: columnRect.left,
          width: columnRect.width,
        });
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [NAVBAR_OFFSET]);

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
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#777b75] sm:text-sm">
            What Makes Your Stay Special
          </p>

          <h2 className="font-serif text-[28px] italic leading-tight text-[#b99a68] sm:text-3xl md:text-4xl lg:text-[42px]">
            Signature Features
          </h2>

          <div className="mx-auto mt-6 h-[1px] w-20 bg-[#b99a68]" />

          <p className="mt-7 text-lg font-light text-[#2f382f] md:text-xl">
            Space, Privacy & Comfort — All in One Place
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base font-light leading-[1.85] text-[#555b54] md:text-lg">
            Maya Niketan Villa is a private 6BHK luxury pool villa in Virar
            East, offering a comfortable setting for staycations, family
            holidays, weekend escapes and special celebrations.
          </p>

          {/* STATUS */}
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

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT SIDE GALLERY — OUTER COLUMN STRETCHES TO MATCH THE TEXT COLUMN'S HEIGHT
              (columnRef). THE INNER GALLERY BLOCK (galleryRef) IS POSITIONED VIA JS —
              static → fixed (pinned below navbar) → absolute-bottom (released into
              the next section) — so it can't be broken by any ancestor's CSS. */}
          <div
            ref={columnRef}
            className={`
              relative w-full transition-opacity duration-700 ease-out
              ${inView ? "opacity-100" : "opacity-0"}
            `}
            style={{ transitionDelay: inView ? "120ms" : "0ms" }}
          >
            <div
              ref={galleryRef}
              style={galleryStyle}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* MAIN IMAGE */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black shadow-2xl sm:aspect-[16/10]">
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
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
                    Maya Niketan Villa
                  </p>

                  <p className="mt-1 font-serif text-base italic text-white sm:text-lg md:text-xl">
                    Made for moments together.
                  </p>
                </div>

                {/* SLIDE NUMBER */}
                <div
                  className="absolute right-4 top-4 bg-black/35 px-3 py-2 backdrop-blur-sm"
                  aria-live="polite"
                >
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
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#b99a68]
                    ${
                      activeIndex === index
                        ? "border-[#b99a68] opacity-100"
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
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#b99a68]" />
                    )}
                  </button>
                ))}
              </div>

              {/* GALLERY INFO */}
              <div className="mt-5 flex flex-col gap-2 border-t border-[#b99a68]/25 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-serif text-base italic text-[#b99a68] sm:text-lg">
                  Your private getaway in Virar East.
                </p>

                <p className="text-[10px] uppercase tracking-[0.16em] text-[#777b75] sm:text-xs">
                  6BHK • Private Pool
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FEATURES */}
          <div
            className={`
              w-full transition-all duration-700 ease-out
              ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }
            `}
            style={{ transitionDelay: inView ? "220ms" : "0ms" }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#b99a68]/80">
              Villa Highlights
            </p>

            <div className="space-y-0">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`
                    group
                    border-b
                    border-[#b99a68]/25
                    py-5
                    first:pt-0
                    last:border-b-0
                    transition-all
                    duration-500
                    ease-out
                    ${
                      inView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: inView ? `${280 + index * 60}ms` : "0ms",
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* NUMBER */}
                    <span className="mt-1 min-w-[26px] font-serif text-sm italic text-[#b99a68]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* CONTENT */}
                    <div>
                      <h3 className="font-serif text-lg italic text-[#2f382f] transition-colors duration-300 group-hover:text-[#b99a68] md:text-xl">
                        {feature.title}
                      </h3>

                      <p className="mt-2 max-w-[600px] text-sm font-light leading-7 text-[#555b54] md:text-base">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOOKING CTA */}
            <div className="mt-8 border-t border-[#b99a68]/30 pt-7">
              <p className="font-serif text-xl italic text-[#b99a68]">
                Ready for your next escape?
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#555b54]">
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
                  border-[#2f382f]
                  bg-[#2f382f]
                  px-7
                  py-3.5
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#b99a68]
                  hover:bg-[#b99a68]
                  sm:text-sm
                "
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div
          className={`
            mx-auto mt-14 max-w-3xl border-t border-[#b99a68]/25 pt-9 text-center
            transition-all duration-700 ease-out md:mt-16
            ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
          style={{ transitionDelay: inView ? "380ms" : "0ms" }}
        >
          <p className="font-serif text-lg italic leading-relaxed text-[#b99a68] sm:text-xl md:text-2xl">
            Stay together. Celebrate together. Make memories together.
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#777b75]">
            Maya Niketan Villa • Virar East • Palghar, Maharashtra
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignatureFeatures;
