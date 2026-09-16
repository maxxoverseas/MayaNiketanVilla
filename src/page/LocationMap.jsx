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
    <section className="relative w-full overflow-hidden bg-[#f8f6f1] py-20 text-[#0e382b] md:py-24 lg:py-28">
      {/* SOFT AMBIENT GLOWS */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#9e793e]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* TOP CONTENT */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#0e382b] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
              Location & Directions
            </span>
          </div>

          <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl md:text-5xl lg:text-[50px]">
            Find{" "}
            <span className="italic text-[#9e793e]">Maya Niketan Villa</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#9e793e]" />

          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-relaxed text-[#0e382b]/80 md:text-lg">
            Your private 6BHK luxury pool villa in Virar East, conveniently
            located along Kaner–Dahisar Road in the Vasai–Virar region.
          </p>

          <p className="mx-auto mt-3 max-w-4xl text-sm font-light leading-relaxed text-[#0e382b]/60 sm:text-base">
            Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
            Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
          </p>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative overflow-hidden rounded-2xl border border-[#0e382b]/10 bg-white shadow-xl backdrop-blur-md transition-all duration-500 hover:border-[#9e793e]/40 hover:shadow-2xl">
          <iframe
            title="Maya Niketan Villa Location"
            src="https://www.google.com/maps?q=19.4898127,72.8642998&z=16&output=embed"
            className="h-[380px] w-full border-0 sm:h-[420px] md:h-[480px] lg:h-[520px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* DESKTOP LOCATION CARD */}
          <div className="absolute left-6 top-6 hidden w-[350px] rounded-xl border border-[#0e382b]/10 bg-[#0e382b] p-6 text-white shadow-2xl backdrop-blur-xl md:block">
            {/* STATUS */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4ad72]">
                Now Open • Bookings Available
              </p>
            </div>

            <h3 className="mt-4 font-serif text-2xl font-medium text-white">
              Maya Niketan Villa
            </h3>

            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#d4ad72]/90">
              6BHK Luxury Pool Villa
            </p>

            <div className="mt-4 h-[1px] w-12 bg-[#d4ad72]/40" />

            <p className="mt-4 text-xs font-light leading-relaxed text-white/80">
              Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
              Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303.
            </p>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4ad72] transition-colors duration-300 hover:text-white"
            >
              Get Directions
              <span className="text-sm">↗</span>
            </a>
          </div>

          {/* MAP BADGE */}
          <div className="absolute bottom-5 right-5 hidden rounded-lg border border-[#0e382b]/10 bg-[#0e382b] px-4 py-2.5 shadow-md sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4ad72]">
              Virar East • Maharashtra
            </p>
          </div>
        </div>

        {/* MOBILE LOCATION CARD */}
        <div className="mt-5 rounded-xl border border-[#0e382b]/10 bg-white p-6 shadow-md md:hidden">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
              Now Open • Bookings Available
            </p>
          </div>

          <h3 className="mt-3 font-serif text-2xl font-medium text-[#0e382b]">
            Maya Niketan Villa
          </h3>

          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9e793e]">
            6BHK Luxury Pool Villa
          </p>

          <p className="mt-4 text-xs font-light leading-relaxed text-[#0e382b]/70">
            Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
            Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* GOOGLE MAPS */}
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-[#0e382b] bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] transition-all duration-300 hover:bg-[#0e382b] hover:text-white hover:shadow-lg sm:w-auto"
          >
            Get Directions
            <span className="text-sm">↗</span>
          </a>

          {/* BOOK NOW */}
          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#0e382b] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:bg-[#9e793e] hover:text-white sm:w-auto"
          >
            Book Your Stay
          </a>
        </div>

        {/* LOCATION HIGHLIGHTS */}
        <div className="mt-16 border-t border-[#0e382b]/10 pt-12">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9e793e]">
              Getting Here
            </p>

            <h3 className="mt-2 font-serif text-2xl font-light text-[#0e382b] md:text-3xl">
              Location Highlights
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {locationHighlights.map((location, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-xl border border-[#0e382b]/10 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0e382b]/30 hover:shadow-md"
              >
                {/* ICON */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#0e382b]/10 bg-[#0e382b]/5 text-2xl transition-colors duration-300 group-hover:border-[#0e382b] group-hover:bg-[#0e382b] group-hover:text-white sm:h-16 sm:w-16">
                  {location.icon}
                </div>

                {/* LABEL */}
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9e793e] sm:text-[10px]">
                  {location.label}
                </p>

                {/* NAME */}
                <h4 className="mt-2 font-serif text-base font-medium text-[#0e382b] sm:text-lg">
                  {location.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* PROPERTY INFO STRIP */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-[#0e382b]/10 rounded-2xl border border-[#0e382b]/10 bg-white py-4 shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="py-4 text-center">
            <p className="font-serif text-xl font-medium text-[#0e382b]">
              6BHK
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0e382b]/60">
              Private Villa
            </p>
          </div>

          <div className="py-4 text-center">
            <p className="font-serif text-xl font-medium text-[#0e382b]">
              Private Pool
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0e382b]/60">
              Relax & Unwind
            </p>
          </div>

          <div className="py-4 text-center">
            <p className="font-serif text-xl font-medium text-[#0e382b]">
              Virar East
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0e382b]/60">
              Palghar • Maharashtra
            </p>
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="font-serif text-lg italic text-[#9e793e] md:text-xl">
            Your getaway is just a route away.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-xs font-light leading-relaxed text-[#0e382b]/60 sm:text-sm">
            Use Google Maps for live directions and the most accurate route to
            Maya Niketan Villa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
