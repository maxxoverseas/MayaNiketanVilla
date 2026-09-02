import React from "react";
import { Link } from "react-router-dom";

const GlobalWelcomeSection = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f8f6f1]
        px-5
        py-10

        sm:px-6
        sm:py-12

        md:px-8
        md:py-14

        lg:px-10
        lg:py-16
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#d4ad72]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-20
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#263c2a]/10
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          text-center
        "
      >
        {/* SMALL TITLE */}
        <p
          className="
            font-serif
            text-base
            italic
            tracking-wide
            text-[#b9945f]

            sm:text-lg
            md:text-xl
          "
        >
          Welcome to
        </p>

        {/* MAIN TITLE */}
        <h2
          className="
            mt-2
            font-serif
            text-3xl
            font-medium
            leading-tight
            text-[#263c2a]

            sm:text-4xl
            md:text-5xl
            lg:text-[52px]
          "
        >
          Maya Niketan Villa
        </h2>

        {/* GOLD LINE */}
        <div
          className="
            mx-auto
            mt-5
            h-[1px]
            w-14
            bg-[#d4ad72]

            sm:mt-6
            sm:w-16
          "
        />

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-[#5f665f]

            sm:text-[15px]
            md:text-base
            md:leading-8
          "
        >
          Escape into comfort, privacy and nature at Maya Niketan Villa —
          created for memorable staycations, holidays and celebrations.
        </p>

        {/* BUTTONS */}
        <div
          className="
            mt-7
            flex
            flex-col
            items-center
            justify-center
            gap-3

            sm:flex-row
            sm:gap-4
          "
        >
          <Link
            to="/about"
            className="
              inline-flex
              min-h-[48px]
              w-full
              items-center
              justify-center
              bg-[#263c2a]
              px-7
              py-3
              text-xs
              font-medium
              uppercase
              tracking-[0.14em]
              text-white
              transition-all
              duration-300

              hover:bg-[#d4ad72]
              hover:text-[#263c2a]

              sm:w-auto
            "
          >
            Discover Villa
          </Link>

          <Link
            to="/contact"
            className="
              inline-flex
              min-h-[48px]
              w-full
              items-center
              justify-center
              border
              border-[#263c2a]
              px-7
              py-3
              text-xs
              font-medium
              uppercase
              tracking-[0.14em]
              text-[#263c2a]
              transition-all
              duration-300

              hover:bg-[#263c2a]
              hover:text-white

              sm:w-auto
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlobalWelcomeSection;
