import React from "react";

const About = () => {
  const experienceCards = [
    {
      number: "01",
      title: "Private 6BHK Villa",
      text: "A spacious private villa created for families, friends, celebrations and relaxing stays together.",
    },
    {
      number: "02",
      title: "Private Pool",
      text: "Enjoy relaxed poolside moments, celebrations and peaceful time away from the everyday routine.",
    },
    {
      number: "03",
      title: "Peaceful Surroundings",
      text: "Located in Virar East, Maya Niketan offers a quieter atmosphere surrounded by the natural character of the Palghar region.",
    },
    {
      number: "04",
      title: "Bookings Now Open",
      text: "The villa is fully completed and now welcoming guests for staycations, holidays, weekend escapes and celebrations.",
    },
  ];

  const stayTypes = [
    {
      title: "Family Staycations",
      text: "Spend quality time together in a private and relaxed villa setting.",
    },
    {
      title: "Weekend Escapes",
      text: "Take a refreshing break from the city without planning a long-distance trip.",
    },
    {
      title: "Private Celebrations",
      text: "Create memorable moments with your favourite people in a private setting.",
    },
    {
      title: "Holiday Stays",
      text: "Slow down, reconnect and enjoy a comfortable getaway with family or friends.",
    },
  ];

  const nearbyPlaces = [
    {
      title: "Tungareshwar",
      subtitle: "Nature & Hills",
      text: "Explore the greener side of the Vasai–Virar region with its hills, trekking routes and seasonal landscapes.",
    },
    {
      title: "Jivdani Temple",
      subtitle: "Virar Landmark",
      text: "One of Virar's most recognised spiritual landmarks located on Jivdani Hill.",
    },
    {
      title: "Kaner–Dahisar Belt",
      subtitle: "Peaceful Surroundings",
      text: "A quieter side of the region with more open surroundings and a relaxed atmosphere away from crowded city areas.",
    },
  ];

  return (
    <main
      id="about"
      className="w-full min-h-screen overflow-x-hidden bg-[#FAF8F5] text-slate-800 selection:bg-[#d5ae70] selection:text-slate-900"
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F5] text-slate-900 border-b border-stone-200/60">
        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28 xl:px-16">
          {/* LEFT CONTENT */}
          <div className="z-10 lg:col-span-7">
            {/* BOOKING STATUS */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#bd8c50]/30 bg-[#bd8c50]/10 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bd8c50] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#bd8c50]" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bd8c50]">
                Villa Completed • Bookings Open
              </p>
            </div>

            {/* SMALL TITLE */}
            <div className="mt-8 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#bd8c50]" />
              <p className="font-serif text-lg italic tracking-wide text-[#bd8c50]">
                Welcome to Maya Niketan Villa
              </p>
            </div>

            {/* MAIN HEADING */}
            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Your Private Escape
              <span className="mt-2 block italic text-[#bd8c50]">
                Is Ready.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Maya Niketan Villa is a completed 6BHK luxury private pool villa
              in Virar East, created for relaxing staycations, family holidays,
              weekend escapes and memorable celebrations.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Leave the routine behind, gather your favourite people and enjoy
              your time in a peaceful private setting designed for moments that
              deserve to be remembered.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex h-14 items-center justify-center rounded-sm bg-slate-900 px-8 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-xl"
              >
                Book Your Stay
              </a>

              <a
                href="#experience"
                className="inline-flex h-14 items-center justify-center rounded-sm border border-slate-300 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800 transition-all duration-300 hover:border-[#bd8c50] hover:text-[#bd8c50]"
              >
                Explore The Villa
              </a>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <p className="font-serif text-3xl font-light italic text-[#bd8c50] sm:text-4xl">
                  6BHK
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-500">
                  Private Villa
                </p>
              </div>

              <div className="border-l border-slate-200 pl-6">
                <p className="font-serif text-3xl font-light italic text-[#bd8c50] sm:text-4xl">
                  Pool
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-500">
                  Private Swimming
                </p>
              </div>

              <div className="border-l border-slate-200 pl-6">
                <p className="font-serif text-3xl font-light italic text-[#bd8c50] sm:text-4xl">
                  Virar
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-500">
                  Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-2 rounded-xl border border-[#bd8c50]/30 transition-all duration-500" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/10.jpg"
                alt="Maya Niketan Villa private luxury villa"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="font-serif text-2xl italic text-white sm:text-3xl">
                  Stay. Celebrate. Reconnect.
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5ae70]">
                  Maya Niketan Villa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO SECTION
      ===================================================== */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-serif text-xl italic text-[#bd8c50]">
            Your Private Getaway
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-snug text-slate-900 sm:text-4xl lg:text-5xl">
            Sometimes the best plans are simply{" "}
            <span className="italic text-[#bd8c50]">
              getting away together.
            </span>
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-16 bg-[#d5ae70]" />

          <p className="mt-8 text-base leading-relaxed text-slate-600 sm:text-lg">
            Maya Niketan Villa gives you the space to slow down and enjoy the
            people around you. Whether you are planning a family getaway,
            weekend escape, holiday or private celebration, the villa offers a
            peaceful setting where the experience can feel entirely your own.
          </p>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE CARDS
      ===================================================== */}
      <section id="experience" className="bg-[#FAF8F5] pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experienceCards.map((item, index) => (
              <article
                key={index}
                className="group relative flex flex-col justify-between rounded-md border border-stone-200/80 bg-[#F3EFEA] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#bd8c50]/50 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <p className="font-serif text-sm italic tracking-widest text-[#bd8c50]">
                    {item.number}
                  </p>
                  <h3 className="mt-6 font-serif text-2xl font-normal leading-snug text-slate-800 transition-colors duration-300 group-hover:text-[#bd8c50]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FULLY READY SECTION
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          {/* IMAGE BLOCK */}
          <div className="relative">
            <div className="aspect-[5/4] overflow-hidden rounded-md shadow-lg">
              <img
                src="/images/10.jpg"
                alt="Maya Niketan Villa surroundings"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-xs rounded-sm bg-slate-900 p-6 shadow-xl sm:right-6">
              <p className="font-serif text-lg italic leading-snug text-[#d5ae70]">
                Fully completed.
                <br />
                Ready for your stay.
              </p>
              <p className="mt-2 text-xs text-white/70">
                Maya Niketan Villa is now welcoming bookings.
              </p>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div>
            <p className="font-serif text-lg italic text-[#bd8c50]">
              The Wait Is Over
            </p>

            <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-slate-800 sm:text-4xl lg:text-5xl">
              Maya Niketan is
              <span className="block italic text-[#bd8c50]">
                ready to welcome you.
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              From an idea to a completed destination, Maya Niketan Villa is now
              ready for guests looking for their next private getaway in Virar
              East.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The villa brings together generous space, a private pool, calm
              surroundings and the freedom to enjoy your stay at your own pace.
            </p>

            <div className="mt-8 border-l-2 border-[#d5ae70] pl-6">
              <p className="font-serif text-xl italic text-slate-800">
                “Come for the stay. Leave with moments worth remembering.”
              </p>
            </div>

            <a
              href="#booking"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-sm bg-slate-900 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#bd8c50] hover:text-white shadow-md hover:shadow-lg"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          STAY TYPES
      ===================================================== */}
      <section className="bg-[#ECE5DD] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-serif text-lg italic text-[#bd8c50]">
                Made for Your Moments
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Stay your way.
                <span className="block italic text-[#bd8c50]">
                  Make it memorable.
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                No two getaways need to look the same. Maya Niketan gives you
                the setting — how you enjoy the experience is entirely yours.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7">
              {stayTypes.map((item, index) => (
                <article
                  key={index}
                  className="border-t border-stone-300/80 pt-6"
                >
                  <span className="font-serif text-sm italic text-[#bd8c50]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION / NEARBY PLACES
      ===================================================== */}
      <section className="bg-[#FAF8F5] py-20 text-slate-900 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Around Maya Niketan
            </p>
            <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl lg:text-5xl">
              Escape the noise.
              <span className="block italic text-[#bd8c50]">
                Stay close to nature.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Maya Niketan Villa is located in Virar East, offering access to
              the quieter character of the Vasai–Virar and Palghar region.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {nearbyPlaces.map((place, index) => (
              <article
                key={index}
                className="group rounded-md border border-stone-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#bd8c50]/40 hover:shadow-md"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#bd8c50]">
                  {place.subtitle}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-slate-800 transition-colors duration-300 group-hover:text-[#bd8c50]">
                  {place.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {place.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING / MAP LOCATION
      ===================================================== */}
      <section id="booking" className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-md border border-stone-200 bg-white p-8 shadow-md md:p-14">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#bd8c50]/10 border border-[#bd8c50]/20 px-4 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#bd8c50]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#bd8c50]">
                    Bookings Open
                  </p>
                </div>

                <h2 className="mt-6 font-serif text-3xl font-normal leading-tight text-slate-800 sm:text-4xl lg:text-5xl">
                  Ready for your
                  <span className="block italic text-[#bd8c50]">
                    next getaway?
                  </span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Maya Niketan Villa is now accepting bookings for staycations,
                  holidays, weekend escapes and private celebrations.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-sm bg-slate-900 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#bd8c50] shadow-md hover:shadow-lg"
                  >
                    Book Your Stay
                  </a>

                  <a
                    href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-sm border border-slate-300 px-8 text-xs font-medium uppercase tracking-[0.2em] text-slate-800 transition-all duration-300 hover:border-[#bd8c50] hover:text-[#bd8c50] hover:bg-[#FAF8F5]"
                  >
                    View Location
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="font-serif text-lg italic text-[#bd8c50]">
                  Location
                </p>

                <h3 className="mt-2 font-serif text-2xl text-slate-800">
                  Maya Niketan Villa
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Mahakali Temple, Amul Virar Dairy,
                  <br />
                  Plot No. 114–117, Kaner–Dahisar Road,
                  <br />
                  Vasai–Virar, Maharashtra 401303, India
                </p>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#bd8c50]">
                    Perfect For
                  </p>
                  <p className="mt-2 font-serif text-lg italic text-slate-800">
                    Staycations • Holidays • Celebrations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F5] py-20 text-slate-900 lg:py-28 border-t border-stone-200">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-lg italic text-[#bd8c50]">
            Maya Niketan Villa
          </p>

          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your next memorable stay
            <span className="block italic text-[#bd8c50]">begins here.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600">
            The villa is complete. The pool is ready. Bookings are open. All
            that's left is choosing when you want to escape.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-sm bg-slate-900 px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-xl"
          >
            Book Maya Niketan
          </a>

          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            6BHK Private Pool Villa • Virar East
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
