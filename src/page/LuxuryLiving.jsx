import React from "react";

const LuxuryLiving = () => {
  return (
    <section className="w-full bg-[#263c2a]">
      <div
        className="
          mx-auto
          max-w-[1600px]
          px-6
          py-16
          sm:px-8
          sm:py-20
          md:px-10
          lg:px-14
          lg:py-24
          xl:px-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-16
            xl:gap-24
          "
        >
          {/* LEFT SIDE CONTENT */}
          <div className="w-full">
            <p
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.22em]
                text-white/55
                sm:text-sm
              "
            >
              Experience the Villa
            </p>

            <h2
              className="
                font-serif
                text-3xl
                italic
                leading-tight
                text-[#d4ad72]
                sm:text-4xl
                lg:text-[42px]
              "
            >
              Step Inside Luxury Living
            </h2>

            {/* GOLD DIVIDER */}
            <div className="mt-6 h-[1px] w-20 bg-[#d4ad72]" />

            {/* MAIN DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-[650px]
                text-base
                font-light
                leading-[1.85]
                text-white/85
                sm:text-lg
                lg:text-[19px]
              "
            >
              Welcome to{" "}
              <span className="font-serif italic text-[#d4ad72]">
                Maya Niketan Villa
              </span>
              , a private 6BHK luxury pool villa in Virar East where spacious
              living, privacy and comfort come together for a truly relaxing
              getaway.
            </p>

            {/* SECOND DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[650px]
                text-[15px]
                font-light
                leading-[1.85]
                text-white/65
                sm:text-base
              "
            >
              Spend your days unwinding by the private pool, enjoying quality
              time with family and friends, or simply slowing down in a space
              designed for comfortable stays and memorable moments.
            </p>

            {/* FEATURES */}
            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-4
                text-xs
                uppercase
                tracking-[0.14em]
                text-white/60
                sm:gap-x-8
              "
            >
              <span>6BHK Villa</span>

              <span className="hidden h-1 w-1 rounded-full bg-[#d4ad72] sm:block" />

              <span>Private Pool</span>

              <span className="hidden h-1 w-1 rounded-full bg-[#d4ad72] sm:block" />

              <span>Private Getaways</span>
            </div>

            {/* BOOKING STATUS */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#d4ad72]" />

              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                Now Open • Bookings Available
              </p>
            </div>

            {/* BOOK BUTTON */}
            <div className="mt-8">
              <a
                href="/contact"
                className="
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
                  sm:px-8
                  sm:py-4
                  sm:text-sm
                "
              >
                Book Your Stay
              </a>
            </div>
          </div>

          {/* RIGHT SIDE VIDEO */}
          <div className="w-full">
            <div
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
                bg-black
                shadow-2xl
              "
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="https://www.shutterstock.com/shutterstock/videos/4087417863/preview/stock-footage-porto-heli-peloponnese-greece-april-sophisticated-alfresco-arrangement-incorporating.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>

              {/* SUBTLE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              {/* VIDEO LABEL */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  bg-[#263c2a]/90
                  px-5
                  py-3
                  backdrop-blur-sm
                "
              >
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[#d4ad72]
                    sm:text-xs
                  "
                >
                  Maya Niketan Villa
                </p>
              </div>
            </div>

            {/* BOTTOM VIDEO TEXT */}
            <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-base italic text-white/60">
                Your private escape awaits.
              </p>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-white/35
                  sm:text-xs
                "
              >
                Virar East • Palghar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryLiving;
