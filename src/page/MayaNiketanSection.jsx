import React from "react";

const MayaNiketanSection = () => {
  return (
    <section className="w-full bg-[#f8f6f1] px-6 py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-5xl text-center">
        {/* SMALL HEADING */}
        <p className="mb-3 font-serif text-base italic tracking-wide text-[#b99a68] md:text-lg">
          Welcome to
        </p>

        {/* MAIN HEADING */}
        <h2 className="font-serif text-3xl font-medium leading-[1.1] text-[#2f382f] md:text-4xl lg:text-5xl">
          Maya Niketan Villa
        </h2>

        {/* GOLD DIVIDER */}
        <div className="mx-auto mt-5 h-[1px] w-16 bg-[#b99a68]" />

        {/* INTRO */}
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-[#555b54] md:text-base md:leading-7">
          A private 6BHK luxury pool villa in Virar East, created for relaxed
          getaways, quality time and celebrations with the people who matter
          most.
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#555b54] md:text-base md:leading-7">
          Whether it&apos;s a weekend staycation, a family holiday or a special
          celebration, Maya Niketan Villa offers the space, privacy and peaceful
          atmosphere to make every stay feel memorable.
        </p>

        {/* PROPERTY INFO */}
        <div className="mx-auto mt-7 grid max-w-4xl grid-cols-1 border-y border-[#b99a68]/30 py-4 sm:grid-cols-3">
          {/* 6BHK */}
          <div className="py-3 sm:border-r sm:border-[#b99a68]/25">
            <p className="font-serif text-xl text-[#2f382f] md:text-2xl">
              6BHK
            </p>

            <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-[#777b75] md:text-xs">
              Spacious Villa
            </p>
          </div>

          {/* PRIVATE POOL */}
          <div className="py-3 sm:border-r sm:border-[#b99a68]/25">
            <p className="font-serif text-xl text-[#2f382f] md:text-2xl">
              Private Pool
            </p>

            <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-[#777b75] md:text-xs">
              Your Own Space to Unwind
            </p>
          </div>

          {/* LOCATION */}
          <div className="py-3">
            <p className="font-serif text-xl text-[#2f382f] md:text-2xl">
              Virar East
            </p>

            <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-[#777b75] md:text-xs">
              Palghar • Maharashtra
            </p>
          </div>
        </div>

        {/* EXPERIENCE */}
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#4d514d] md:text-sm">
          Staycations &nbsp; • &nbsp; Holidays &nbsp; • &nbsp; Celebrations
        </p>

        {/* BOOKING STATUS */}
        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#73805d]" />

          <p className="text-[10px] uppercase tracking-[0.16em] text-[#687064] md:text-xs">
            Now Open • Bookings Available
          </p>
        </div>

        {/* CLOSING */}
        <p className="mt-5 font-serif text-lg italic text-[#b99a68] md:text-xl">
          Your private escape is ready.
        </p>

        {/* BOOK NOW BUTTON */}
        <div className="mt-5">
          <a
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-[#2f382f]
              bg-[#2f382f]
              px-7
              py-3
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-white
              transition-all
              duration-300
              hover:border-[#b99a68]
              hover:bg-[#b99a68]
              md:px-8
              md:py-3
              md:text-xs
            "
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </section>
  );
};

export default MayaNiketanSection;
