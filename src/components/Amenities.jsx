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
      image: "/images/amenities-pool.jpg",
    },
    {
      label: "GATHER",
      title: "Spaces for Togetherness",
      text: "Spacious indoor and outdoor zones make it easy for families and friends to spend time together.",
      image: "/images/amenities-living.jpg",
    },
    {
      label: "BREATHE",
      title: "Open Green Surroundings",
      text: "Enjoy peaceful outdoor areas and the quieter landscape of Virar East.",
      image: "/images/amenities-green.jpg",
    },
  ];

  return (
    <main id="amenities" className="w-full overflow-hidden bg-[#f7f3e8]">
      {/* HERO */}
      <section className="relative bg-[#243a29]">
        <div className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-[#d4ad72]/15" />

        <div className="mx-auto grid min-h-[560px] max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 md:px-10 lg:grid-cols-2 lg:px-14 lg:py-24 xl:px-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#d4ad72]" />

              <p className="font-serif text-lg italic text-[#d4ad72]">
                Amenities at Maya Niketan Villa
              </p>
            </div>

            <h1 className="mt-6 max-w-[700px] font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Everything You Need
              <span className="block italic text-[#d4ad72]">
                for an Effortless Stay.
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] text-base leading-8 text-white/70 md:text-lg">
              Maya Niketan Villa is being designed around comfort, privacy and
              easy living — with spaces that let you relax, gather and enjoy
              every part of your stay.
            </p>

            <div className="mt-8 flex flex-wrap gap-7">
              <div>
                <p className="font-serif text-3xl italic text-[#d4ad72]">
                  6BHK
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                  Spacious Villa
                </p>
              </div>

              <div className="h-14 w-[1px] bg-white/15" />

              <div>
                <p className="font-serif text-3xl italic text-[#d4ad72]">
                  Private Pool
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                  Leisure & Relaxation
                </p>
              </div>

              <div className="h-14 w-[1px] bg-white/15" />

              <div>
                <p className="font-serif text-3xl italic text-[#d4ad72]">
                  Nature
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                  Open Surroundings
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-[#d4ad72]/35" />

            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/amenities-main.jpg"
                alt="Maya Niketan Villa Amenities"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#243a29]/55 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="font-serif text-xl italic text-white">
                  Comfort, Privacy & Leisure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f7f3e8] py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <p className="font-serif text-lg italic text-[#c09055]">
            Thoughtfully Planned
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#243a29] md:text-4xl lg:text-5xl">
            Amenities That Add
            <span className="italic text-[#b88953]">
              {" "}
              Meaning to Your Stay.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[820px] text-[15px] leading-8 text-[#666a62] md:text-base">
            Every amenity is envisioned to make the villa feel comfortable,
            relaxed and easy to enjoy — whether you are visiting for a
            staycation, family holiday or private celebration.
          </p>
        </div>
      </section>

      {/* AMENITY GRID */}
      <section className="bg-[#f7f3e8] pb-20 md:pb-24">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 gap-[1px] overflow-hidden border border-[#243a29]/15 bg-[#243a29]/15 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="group bg-[#fbf8f1] p-8 transition-all duration-500 hover:bg-[#243a29] md:p-9"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-6 font-serif text-xl text-[#243a29] transition group-hover:text-[#d4ad72]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#696d65] transition group-hover:text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE CARDS */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
          <div className="text-center">
            <p className="font-serif text-lg italic text-[#c09055]">
              Live the Experience
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#243a29] md:text-4xl">
              Spaces Designed Around How You Want to Feel
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {lifestyle.map((item, index) => (
              <article
                key={index}
                className="group overflow-hidden bg-[#f7f3e8]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b88953]">
                    {item.label}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-[#243a29]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#696c65]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POOL FEATURE */}
      <section className="bg-[#243a29] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <div className="relative">
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src="/images/amenities-pool-feature.jpg"
                alt="Private Pool at Maya Niketan Villa"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-5 bg-[#d4ad72] px-6 py-5">
              <p className="font-serif text-xl italic text-[#243a29]">
                Your Private Pool
              </p>
            </div>
          </div>

          <div>
            <p className="font-serif text-lg italic text-[#d4ad72]">
              Poolside Leisure
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
              A Space Made
              <span className="block italic text-[#d4ad72]">to Slow Down.</span>
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-white/65 md:text-base">
              The private pool is envisioned as the heart of relaxed villa
              living — a place for refreshing mornings, long afternoons and easy
              conversations that continue into the evening.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-7 bg-[#d4ad72]" />
                <p>Private leisure environment</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-[1px] w-7 bg-[#d4ad72]" />
                <p>Ideal for families and groups</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-[1px] w-7 bg-[#d4ad72]" />
                <p>Designed for relaxed celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDOOR / OUTDOOR */}
      <section className="bg-[#f7f3e8] py-20 md:py-24">
        <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-serif text-lg italic text-[#b88953]">
                Indoor Comfort
              </p>

              <h2 className="mt-4 font-serif text-3xl text-[#243a29] md:text-4xl">
                Spacious interiors for easy living.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#676b64] md:text-base">
                The 6BHK layout offers multiple private bedrooms, common
                gathering spaces and flexible indoor zones that can support
                relaxed family stays and larger groups.
              </p>
            </div>

            <div>
              <p className="font-serif text-lg italic text-[#b88953]">
                Outdoor Living
              </p>

              <h2 className="mt-4 font-serif text-3xl text-[#243a29] md:text-4xl">
                Open spaces for slower moments.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#676b64] md:text-base">
                Green surroundings and outdoor sit-outs create room for fresh
                air, conversations, morning tea and peaceful evenings away from
                crowded city spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMFORT STRIP */}
      <section className="bg-[#efe5d5]">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-[1px] bg-[#243a29]/10 px-6 py-0 sm:grid-cols-4 sm:px-8 lg:px-14">
          {[
            ["Comfort", "Spacious 6BHK living"],
            ["Privacy", "Private villa environment"],
            ["Leisure", "Poolside relaxation"],
            ["Location", "Peaceful Virar East setting"],
          ].map(([title, text], index) => (
            <div key={index} className="bg-[#efe5d5] px-5 py-10 text-center">
              <p className="font-serif text-xl italic text-[#b88953]">
                {title}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#596057]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#243a29] py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4ad72]/10" />

        <div className="relative mx-auto max-w-[950px] px-6 text-center">
          <p className="font-serif text-lg italic text-[#d4ad72]">
            Maya Niketan Villa
          </p>

          <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl lg:text-5xl">
            Designed for More Than Just a Stay.
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 md:text-base">
            Discover a private villa experience created for comfort, celebration
            and meaningful time together.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex bg-[#d4ad72] px-9 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#243a29] transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default Amenities;
