import React from "react";

const LuxuryIntro = () => {
  return (
    <section className="w-full border-t border-[#29422f]/20 bg-[#fafaf7]">
      <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-8 md:px-10 md:py-16 lg:px-14 lg:py-20 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT CONTENT */}
          <div className="w-full">
            {/* SMALL LABEL */}
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8e8661] sm:text-sm">
              Your Private Escape
            </p>

            {/* MAIN HEADING */}
            <h2
              className="
                max-w-[700px]
                font-serif
                text-[30px]
                italic
                leading-[1.22]
                text-[#8d783d]
                sm:text-[34px]
                md:text-[38px]
                lg:text-[42px]
                xl:text-[46px]
              "
            >
              Luxury, Privacy &
              <br className="hidden sm:block" />
              Time Well Spent
            </h2>

            {/* GOLD DIVIDER */}
            <div className="mt-6 h-[1px] w-20 bg-[#b99a68]" />

            {/* MAIN DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-[680px]
                text-base
                font-light
                leading-[1.85]
                text-[#555d55]
                sm:text-lg
              "
            >
              Welcome to{" "}
              <span className="font-serif italic text-[#9b7c4c]">
                Maya Niketan Villa
              </span>
              , a private 6BHK luxury pool villa in Virar East created for
              comfortable stays, relaxed getaways and memorable time with family
              and friends.
            </p>

            {/* SECOND DESCRIPTION */}
            <p
              className="
                mt-4
                max-w-[680px]
                text-[15px]
                font-light
                leading-[1.85]
                text-[#747971]
                sm:text-base
              "
            >
              Spacious living areas, a private swimming pool and the privacy of
              an entire villa give you the freedom to slow down and enjoy your
              stay your way — whether it&apos;s a weekend escape, family holiday
              or special celebration.
            </p>

            {/* EXPERIENCE TAGS */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-3
                text-[11px]
                uppercase
                tracking-[0.16em]
                text-[#777d75]
                sm:gap-x-5
                sm:text-xs
              "
            >
              <span>Staycations</span>

              <span className="h-1 w-1 rounded-full bg-[#b99a68]" />

              <span>Family Holidays</span>

              <span className="h-1 w-1 rounded-full bg-[#b99a68]" />

              <span>Celebrations</span>
            </div>

            {/* QUOTE */}
            <p className="mt-8 max-w-[650px] font-serif text-lg italic leading-relaxed text-[#b99a68] sm:text-xl">
              Your own space. Your own pace. Your own moments.
            </p>

            {/* BOOKING STATUS + CTA */}
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              {/* STATUS */}
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#73805d]" />

                <p className="text-[11px] uppercase tracking-[0.17em] text-[#687064] sm:text-xs">
                  Now Open • Bookings Available
                </p>
              </div>

              {/* BOOK BUTTON */}
              <a
                href="/contact"
                className="
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  border
                  border-[#29422f]
                  bg-[#29422f]
                  px-6
                  py-3
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#b99a68]
                  hover:bg-[#b99a68]
                  sm:text-xs
                "
              >
                Book Your Stay
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex w-full items-center justify-center">
            <div className="relative w-full max-w-[720px]">
              {/* DECORATIVE LINE */}
              <div className="absolute left-1/2 top-0 h-[1px] w-20 -translate-x-1/2 bg-[#b99a68]/40" />

              {/* VILLA IMAGE / SKETCH */}
              <img
                src="/images/background1.jpg"
                alt="Maya Niketan Villa"
                className="
                  h-[250px]
                  w-full
                  object-contain
                  opacity-95
                  sm:h-[290px]
                  md:h-[330px]
                  lg:h-[350px]
                  xl:h-[390px]
                "
              />

              {/* IMAGE DETAILS */}
              <div className="mt-3 text-center">
                <p className="font-serif text-lg italic text-[#8d783d] sm:text-xl">
                  Maya Niketan Villa
                </p>

                <p
                  className="
                    mt-2
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#8f938b]
                    sm:text-xs
                  "
                >
                  6BHK Luxury Pool Villa • Virar East
                </p>

                <p className="mt-2 text-xs text-[#9a9d97] sm:text-sm">
                  Staycations • Holidays • Celebrations
                </p>
              </div>

              {/* BOTTOM DECORATION */}
              <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                <span className="h-[1px] w-10 bg-[#b99a68]/40" />

                <span className="h-1.5 w-1.5 rotate-45 bg-[#b99a68]" />

                <span className="h-[1px] w-10 bg-[#b99a68]/40" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PROPERTY STRIP */}
        <div className="mt-14 grid grid-cols-1 border-y border-[#b99a68]/20 py-6 sm:grid-cols-3 lg:mt-16">
          <div className="py-3 text-center sm:border-r sm:border-[#b99a68]/20">
            <p className="font-serif text-xl text-[#3d493e]">6BHK</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Spacious Private Villa
            </p>
          </div>

          <div className="py-3 text-center sm:border-r sm:border-[#b99a68]/20">
            <p className="font-serif text-xl text-[#3d493e]">Private Pool</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Relax & Unwind
            </p>
          </div>

          <div className="py-3 text-center">
            <p className="font-serif text-xl text-[#3d493e]">Virar East</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8a8f88] sm:text-xs">
              Palghar • Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryIntro;
