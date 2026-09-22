import React from "react";

const Amenities = () => {
  const amenities = [
    {
      title: "Private Swimming Pool",
      text: "A relaxing private pool designed for slow afternoons, family time and memorable celebrations.",
      icon: "🏊",
    },
    {
      title: "6BHK Spacious Living",
      text: "Generous bedrooms and common areas created for comfort, privacy and larger groups.",
      icon: "🏡",
    },
    {
      title: "Landscaped Green Spaces",
      text: "Open outdoor areas with a calm natural feel for morning walks, conversations and quiet evenings.",
      icon: "🌿",
    },
    {
      title: "Modern Kitchen",
      text: "A functional kitchen space designed to support comfortable extended stays and family gatherings.",
      icon: "🍽️",
    },
    {
      title: "Indoor Lounge Areas",
      text: "Comfortable common spaces for relaxing, conversations, games and quality time together.",
      icon: "🛋️",
    },
    {
      title: "Outdoor Sit-Out",
      text: "A peaceful open-air setting for tea, evening conversations and slow weekend mornings.",
      icon: "☕",
    },
    {
      title: "Parking Space",
      text: "Convenient on-site parking to make arrivals and departures simple for guests.",
      icon: "🚗",
    },
    {
      title: "Private Celebrations",
      text: "A flexible villa setting suited to intimate birthdays, anniversaries and family occasions.",
      icon: "🎉",
    },
  ];

  const lifestyle = [
    {
      label: "RELAX",
      title: "Poolside Living",
      text: "Spend the day by the pool, slow down and enjoy a private setting away from daily routines.",
      image: "/images/8.jpg",
    },
    {
      label: "GATHER",
      title: "Spaces for Togetherness",
      text: "Spacious indoor and outdoor zones make it easy for families and friends to spend time together.",
      image: "/images/20.jpg",
    },
    {
      label: "BREATHE",
      title: "Open Green Surroundings",
      text: "Enjoy peaceful outdoor areas and the quieter landscape of Virar East.",
      image: "/images/9.jpg",
    },
  ];

  return (
    <main
      id="amenities"
      className="w-full min-h-screen overflow-x-hidden bg-[#FAF8F5] text-slate-800 selection:bg-[#d5ae70] selection:text-slate-900"
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F5] text-slate-900 border-b border-stone-200/60">
        <div className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-[#bd8c50]/20" />

        <div className="relative mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28 xl:px-16">
          {/* LEFT CONTENT */}
          <div className="z-10 lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#bd8c50]" />
              <p className="font-serif text-lg italic tracking-wide text-[#bd8c50]">
                Amenities at Maya Niketan Villa
              </p>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.15] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Everything You Need
              <span className="mt-2 block italic text-[#bd8c50]">
                for an Effortless Stay.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Maya Niketan Villa is designed around comfort, privacy and easy
              living — with spaces that let you relax, gather and enjoy every
              part of your stay.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 max-w-lg">
              <div>
                <p className="font-serif text-3xl font-light italic text-[#bd8c50] sm:text-4xl">
                  6BHK
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-500">
                  Spacious Villa
                </p>
              </div>

              <div className="border-l border-slate-200 pl-6">
                <p className="font-serif text-3xl font-light italic text-[#bd8c50] sm:text-4xl">
                  Pool
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-500">
                  Private Leisure
                </p>
              </div>

              <div className="border-l border-slate-200 pl-6">
                <p className="font-serif text-3xl font-light italic text-[#bd8c50] sm:text-4xl">
                  Nature
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-500">
                  Open Surroundings
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-2 rounded-xl border border-[#bd8c50]/30 transition-all duration-500" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl lg:aspect-[4/5]">
              <img
                src="/images/background1.jpg"
                alt="Maya Niketan Villa Amenities"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 p-2">
                <p className="font-serif text-2xl italic text-white sm:text-3xl">
                  Comfort, Privacy & Leisure
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
      <section className="bg-[#FAF8F5] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-serif text-lg italic text-[#bd8c50]">
            Thoughtfully Planned
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-snug text-slate-900 sm:text-4xl lg:text-5xl">
            Amenities That Add{" "}
            <span className="italic text-[#bd8c50]">Meaning to Your Stay.</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#d5ae70]" />

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg max-w-2xl mx-auto">
            Every amenity is envisioned to make the villa feel comfortable,
            relaxed and easy to enjoy — whether you are visiting for a
            staycation, family holiday or private celebration.
          </p>
        </div>
      </section>

      {/* =====================================================
          AMENITY GRID
      ===================================================== */}
      <section className="bg-[#FAF8F5] pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-md border border-stone-200/80 bg-[#F3EFEA] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#bd8c50]/50 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="text-4xl">{item.icon}</div>

                  <h3 className="mt-6 font-serif text-2xl font-normal text-slate-800 transition-colors duration-300 group-hover:text-[#bd8c50]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LIFESTYLE CARDS
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28 border-y border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Live the Experience
            </p>

            <h2 className="mt-3 font-serif text-3xl font-normal text-slate-900 sm:text-4xl lg:text-5xl">
              Spaces Designed Around How You Want to Feel
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {lifestyle.map((item, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-md border border-stone-200/80 bg-[#FAF8F5] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#bd8c50]/40 hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#bd8c50]">
                    {item.label}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-slate-800 transition-colors duration-300 group-hover:text-[#bd8c50]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          POOL FEATURE
      ===================================================== */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div className="relative">
            <div className="aspect-[5/4] overflow-hidden rounded-md shadow-lg">
              <img
                src="/images/10.jpg"
                alt="Private Pool at Maya Niketan Villa"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-2 max-w-xs rounded-sm bg-slate-900 p-6 shadow-xl sm:right-6">
              <p className="font-serif text-xl italic leading-snug text-[#d5ae70]">
                Your Private Pool
              </p>
              <p className="mt-1 text-xs text-white/70">
                Relaxed poolside moments await you.
              </p>
            </div>
          </div>

          <div>
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Poolside Leisure
            </p>

            <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A Space Made
              <span className="block italic text-[#bd8c50]">to Slow Down.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              The private pool is envisioned as the heart of relaxed villa
              living — a place for refreshing mornings, long afternoons and easy
              conversations that continue into the evening.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#bd8c50]" />
                <p>Private leisure environment</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#bd8c50]" />
                <p>Ideal for families and groups</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#bd8c50]" />
                <p>Designed for relaxed celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDOOR / OUTDOOR
      ===================================================== */}
      <section className="bg-[#ECE5DD] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="border-t border-stone-300/80 pt-6 lg:border-t-0 lg:pt-0">
              <p className="font-serif text-lg italic text-[#bd8c50]">
                Indoor Comfort
              </p>

              <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
                Spacious interiors for easy living.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The 6BHK layout offers multiple private bedrooms, common
                gathering spaces and flexible indoor zones that can support
                relaxed family stays and larger groups.
              </p>
            </div>

            <div className="border-t border-stone-300/80 pt-6 lg:border-t-0 lg:pt-0">
              <p className="font-serif text-lg italic text-[#bd8c50]">
                Outdoor Living
              </p>

              <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
                Open spaces for slower moments.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Green surroundings and outdoor sit-outs create room for fresh
                air, conversations, morning tea and peaceful evenings away from
                crowded city spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMFORT STRIP
      ===================================================== */}
      <section className="bg-[#F3EFEA] border-y border-stone-200/80">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-[1px] bg-stone-300/60 px-6 py-0 sm:grid-cols-4 lg:px-12">
          {[
            ["Comfort", "Spacious 6BHK living"],
            ["Privacy", "Private villa environment"],
            ["Leisure", "Poolside relaxation"],
            ["Location", "Peaceful Virar East setting"],
          ].map(([title, text], index) => (
            <div
              key={index}
              className="bg-[#F3EFEA] px-4 py-10 text-center transition-colors hover:bg-white"
            >
              <p className="font-serif text-xl italic text-[#bd8c50]">
                {title}
              </p>

              <p className="mt-2 text-xs uppercase tracking-widest text-slate-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F5] py-20 text-slate-900 lg:py-28">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-lg italic text-[#bd8c50]">
            Maya Niketan Villa
          </p>

          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Designed for More Than Just a Stay.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Discover a private villa experience created for comfort, celebration
            and meaningful time together.
          </p>

          <a
            href="contact"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-sm bg-slate-900 px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-xl"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default Amenities;
