import React from "react";

const LocationMap = () => {
  const googleMapsLink =
    "https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk!3m5!1s0x3be7a9bf8090607b:0x128c7626e4b677db!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk";

  const locationHighlights = [
    {
      icon: "🛕",
      label: "Nearby Landmark",
      name: "Mahakali Temple",
    },
    {
      icon: "🥛",
      label: "Nearby Landmark",
      name: "Amul Virar Dairy",
    },
    {
      icon: "🛣️",
      label: "Road Access",
      name: "Kaner–Dahisar Road",
    },
    {
      icon: "📍",
      label: "Location",
      name: "Virar East",
    },
    {
      icon: "🌿",
      label: "Region",
      name: "Vasai–Virar",
    },
  ];

  return (
    <section className="w-full bg-[#263c2a] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* TOP CONTENT */}
        <div className="mx-auto mb-11 max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/45 sm:text-sm">
            Location & Directions
          </p>

          <h2 className="font-serif text-3xl italic leading-tight text-[#d4ad72] md:text-4xl lg:text-[42px]">
            Find Maya Niketan Villa
          </h2>

          <div className="mx-auto mt-6 h-[1px] w-20 bg-[#d4ad72]" />

          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-[1.8] text-white/80 md:text-lg">
            Your private 6BHK luxury pool villa in Virar East, conveniently
            located along Kaner–Dahisar Road in the Vasai–Virar region.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-sm font-light leading-7 text-white/55 sm:text-base">
            Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
            Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
          </p>
        </div>

        {/* MAP */}
        <div className="relative overflow-hidden bg-white shadow-2xl">
          <iframe
            title="Maya Niketan Villa Location"
            src="https://www.google.com/maps?q=19.4898127,72.8642998&z=16&output=embed"
            className="
              h-[350px]
              w-full
              border-0
              sm:h-[400px]
              md:h-[450px]
              lg:h-[500px]
            "
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* DESKTOP LOCATION CARD */}
          <div
            className="
              absolute
              left-5
              top-5
              hidden
              w-[340px]
              bg-white/95
              p-6
              shadow-2xl
              backdrop-blur-md
              md:block
            "
          >
            {/* STATUS */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#71805d]" />

              <p className="text-[10px] uppercase tracking-[0.18em] text-[#70766e]">
                Now Open • Bookings Available
              </p>
            </div>

            <h3 className="mt-4 font-serif text-2xl italic text-[#263c2a]">
              Maya Niketan Villa
            </h3>

            <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-[#a1845d]">
              6BHK Luxury Pool Villa
            </p>

            <div className="mt-4 h-[1px] w-12 bg-[#b9925f]" />

            <p className="mt-4 text-sm leading-6 text-gray-600">
              Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
              Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303.
            </p>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                border-b
                border-[#b9925f]
                pb-1
                text-sm
                font-medium
                text-[#263c2a]
                transition-colors
                duration-300
                hover:text-[#b9925f]
              "
            >
              Get Directions
              <span>↗</span>
            </a>
          </div>

          {/* MAP BADGE */}
          <div className="absolute bottom-4 right-4 hidden bg-[#263c2a]/90 px-4 py-2.5 backdrop-blur-md sm:block">
            <p className="text-[10px] uppercase tracking-[0.17em] text-[#d4ad72]">
              Virar East • Maharashtra
            </p>
          </div>
        </div>

        {/* MOBILE LOCATION CARD */}
        <div className="mt-4 border border-white/10 bg-white/5 p-5 md:hidden">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#d4ad72]" />

            <p className="text-[10px] uppercase tracking-[0.17em] text-white/45">
              Now Open • Bookings Available
            </p>
          </div>

          <h3 className="mt-4 font-serif text-xl italic text-[#d4ad72]">
            Maya Niketan Villa
          </h3>

          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/40">
            6BHK Luxury Pool Villa
          </p>

          <p className="mt-4 text-sm font-light leading-6 text-white/60">
            Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
            Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* GOOGLE MAPS */}
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              border
              border-[#d4ad72]
              px-7
              py-3.5
              text-xs
              uppercase
              tracking-[0.16em]
              text-[#d4ad72]
              transition-all
              duration-300
              hover:bg-[#d4ad72]
              hover:text-[#263c2a]
              sm:w-auto
            "
          >
            Get Directions
            <span className="text-base">↗</span>
          </a>

          {/* BOOK NOW */}
          <a
            href="/contact"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              bg-[#d4ad72]
              px-7
              py-3.5
              text-xs
              uppercase
              tracking-[0.16em]
              text-[#263c2a]
              transition-all
              duration-300
              hover:bg-white
              sm:w-auto
            "
          >
            Book Your Stay
          </a>
        </div>

        {/* LOCATION HIGHLIGHTS */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="mb-9 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 sm:text-xs">
              Getting Here
            </p>

            <h3 className="mt-3 font-serif text-xl italic text-[#d4ad72] md:text-2xl">
              Location Highlights
            </h3>
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-x-5
              gap-y-9
              sm:grid-cols-3
              lg:grid-cols-5
            "
          >
            {locationHighlights.map((location, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                {/* ICON */}
                <div
                  className="
                    mb-4
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d4ad72]/25
                    bg-white/5
                    text-2xl
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:border-[#d4ad72]/60
                    group-hover:bg-white/10
                    sm:h-16
                    sm:w-16
                  "
                >
                  {location.icon}
                </div>

                {/* LABEL */}
                <p className="text-[9px] uppercase tracking-[0.17em] text-[#d4ad72]/60 sm:text-[10px]">
                  {location.label}
                </p>

                {/* NAME */}
                <h4 className="mt-2 font-serif text-base text-white sm:text-lg">
                  {location.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* PROPERTY INFO STRIP */}
        <div className="mt-14 grid grid-cols-1 border-y border-white/10 py-6 sm:grid-cols-3">
          <div className="py-3 text-center sm:border-r sm:border-white/10">
            <p className="font-serif text-xl text-[#d4ad72]">6BHK</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
              Private Villa
            </p>
          </div>

          <div className="py-3 text-center sm:border-r sm:border-white/10">
            <p className="font-serif text-xl text-[#d4ad72]">Private Pool</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
              Relax & Unwind
            </p>
          </div>

          <div className="py-3 text-center">
            <p className="font-serif text-xl text-[#d4ad72]">Virar East</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
              Palghar • Maharashtra
            </p>
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="font-serif text-lg italic text-[#d4ad72] md:text-xl">
            Your getaway is just a route away.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-xs font-light leading-6 text-white/35 sm:text-sm">
            Use Google Maps for live directions and the most accurate route to
            Maya Niketan Villa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
