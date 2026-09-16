import React, { useEffect, useRef, useState } from "react";

const NatureSection = () => {
  // Adjust this to your navbar's real rendered height (in px) so the fixed
  // gallery image stops exactly below the navbar with no gap or overlap.
  const NAVBAR_OFFSET = 104;

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ];

  const highlights = [
    {
      title: "A Relaxed Private Setting",
      text: "A comfortable setting in Virar East where you can slow down, spend time together and enjoy a break from the everyday routine.",
    },
    {
      title: "Space to Unwind",
      text: "Enjoy the privacy and space of a 6BHK villa made for relaxed mornings, easy afternoons and laid-back evenings.",
    },
    {
      title: "Convenient Road Access",
      text: "Located along Kaner–Dahisar Road, with Mahakali Temple and Amul Virar Dairy serving as familiar nearby landmarks.",
    },
    {
      title: "Made for Time Together",
      text: "A private getaway suited to staycations, family holidays, weekend escapes and special celebrations.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // REFS FOR THE JS-DRIVEN FIXED GALLERY
  const columnRef = useRef(null); // tall outer column (matches text column height)
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
  // Does not rely on CSS position:sticky, so it can't be broken by an
  // overflow/transform/filter set on some ancestor elsewhere in the page.
  useEffect(() => {
    const updatePosition = () => {
      const column = columnRef.current;
      const gallery = galleryRef.current;
      if (!column || !gallery) return;

      if (window.innerWidth < 1024) {
        setGalleryStyle({ position: "static" });
        return;
      }

      const columnRect = column.getBoundingClientRect();
      const galleryHeight = gallery.offsetHeight;

      if (columnRect.top > NAVBAR_OFFSET) {
        setGalleryStyle({ position: "static" });
      } else if (columnRect.bottom < NAVBAR_OFFSET + galleryHeight) {
        setGalleryStyle({ position: "absolute", left: 0, right: 0, bottom: 0 });
      } else {
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT SIDE GALLERY — OUTER COLUMN STRETCHES TO MATCH THE TEXT COLUMN'S HEIGHT
              (columnRef). THE INNER GALLERY BLOCK (galleryRef) IS POSITIONED VIA JS —
              static → fixed (pinned below navbar) → absolute-bottom (released into
              the next section). */}
          <div
            ref={columnRef}
            className={`
              relative w-full transition-opacity duration-700 ease-out
              ${inView ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              ref={galleryRef}
              style={galleryStyle}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* MAIN IMAGE */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ebe8df] shadow-xl sm:aspect-[16/10]">
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
                <div className="pointer-events-none absolute inset-0 bg-black/5" />

                {/* BOTTOM GRADIENT */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                {/* IMAGE TEXT */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
                    Maya Niketan Villa
                  </p>

                  <p className="mt-1 font-serif text-base italic text-white sm:text-lg md:text-xl">
                    Slow down. Stay a little longer.
                  </p>
                </div>

                {/* IMAGE NUMBER */}
                <div
                  className="absolute right-4 top-4 bg-black/30 px-3 py-2 backdrop-blur-sm"
                  aria-live="polite"
                >
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
                    left-2
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
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-white
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#b9925f]
                    sm:left-3
                    md:h-11
                    md:w-11
                    md:text-2xl
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
                    right-2
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
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-white
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#b9925f]
                    sm:right-3
                    md:h-11
                    md:w-11
                    md:text-2xl
                  "
                >
                  ›
                </button>
              </div>

              {/* THUMBNAILS */}
              <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
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
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-[#b9925f]
                      ${
                        activeIndex === index
                          ? "border-[#b9925f] opacity-100"
                          : "border-transparent opacity-45 hover:opacity-85"
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

              {/* IMAGE INFO */}
              <div className="mt-5 flex flex-col gap-2 border-t border-[#b9925f]/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-serif text-base italic text-[#8d783d] sm:text-lg">
                  Your private escape in Virar East.
                </p>

                <p className="text-[10px] uppercase tracking-[0.16em] text-[#8c9189] sm:text-xs">
                  Virar East • Palghar • Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div
            className={`
              w-full transition-all duration-700 ease-out lg:pl-2
              ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }
            `}
            style={{ transitionDelay: inView ? "120ms" : "0ms" }}
          >
            {/* SMALL LABEL */}
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8e8661] sm:text-sm">
              A Slower Side of Virar
            </p>

            {/* HEADING */}
            <h2 className="font-serif text-[28px] italic leading-[1.2] text-[#b9925f] sm:text-3xl lg:text-[42px]">
              Space to Slow Down,
              <br className="hidden sm:block" />
              Relax & Reconnect
            </h2>

            {/* DIVIDER */}
            <div className="mt-6 h-[1px] w-20 bg-[#b9925f]" />

            {/* MAIN DESCRIPTION */}
            <p className="mt-7 max-w-[680px] text-base font-light leading-[1.85] text-[#555d55] sm:text-lg">
              Maya Niketan Villa is a private 6BHK luxury pool villa in Virar
              East, offering the space and privacy to step away from the usual
              routine and spend meaningful time with family and friends.
            </p>

            {/* SECOND DESCRIPTION */}
            <p className="mt-4 max-w-[680px] text-[15px] font-light leading-[1.8] text-[#747971] sm:text-base">
              Whether you&apos;re planning a relaxed weekend stay, a family
              holiday or a special celebration, the villa gives you a private
              setting where you can enjoy every moment at your own pace.
            </p>

            {/* EXPERIENCE TAGS */}
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-[10px] uppercase tracking-[0.16em] text-[#858b83] sm:text-xs">
              <span>Staycations</span>
              <span className="h-1 w-1 rounded-full bg-[#b9925f]" />
              <span>Family Holidays</span>
              <span className="h-1 w-1 rounded-full bg-[#b9925f]" />
              <span>Celebrations</span>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-8 border-t border-[#b9925f]/20">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    group flex gap-4 border-b border-[#b9925f]/15 py-5 last:border-b-0
                    transition-all duration-500 ease-out
                    ${
                      inView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: inView ? `${260 + index * 70}ms` : "0ms",
                  }}
                >
                  {/* NUMBER */}
                  <span className="mt-[3px] min-w-[25px] font-serif text-sm italic text-[#b9925f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* TEXT */}
                  <div>
                    <h3 className="font-serif text-base italic text-[#3e493f] transition-colors duration-300 group-hover:text-[#b9925f] sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1 max-w-[580px] text-sm leading-6 text-[#777c75] sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* STATUS */}
            <div className="mt-7 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#73805d]/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#73805d]" />
              </span>

              <p className="text-[10px] uppercase tracking-[0.17em] text-[#687064] sm:text-xs">
                Now Open • Bookings Available
              </p>
            </div>

            {/* CLOSING LINE */}
            <p className="mt-6 max-w-[620px] font-serif text-lg italic leading-relaxed text-[#b9925f] sm:text-xl">
              Sometimes, the best kind of luxury is having the time and space to
              simply be together.
            </p>

            {/* CTA */}
            <a
              href="/contact"
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                border
                border-[#263c2a]
                bg-[#263c2a]
                px-7
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
          </div>
        </div>

        {/* BOTTOM EXPERIENCE STRIP */}
        <div
          className={`
            mt-14 grid grid-cols-1 border-y border-[#b9925f]/20 py-6
            transition-all duration-700 ease-out
            sm:grid-cols-3 lg:mt-16
            ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
          style={{ transitionDelay: inView ? "420ms" : "0ms" }}
        >
          <div className="py-3 text-center sm:border-r sm:border-[#b9925f]/20">
            <p className="font-serif text-xl text-[#3e493f]">Private Space</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Relax at Your Own Pace
            </p>
          </div>

          <div className="py-3 text-center sm:border-r sm:border-[#b9925f]/20">
            <p className="font-serif text-xl text-[#3e493f]">6BHK Villa</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Space for Time Together
            </p>
          </div>

          <div className="py-3 text-center">
            <p className="font-serif text-xl text-[#3e493f]">Private Pool</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Unwind & Enjoy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureSection;
