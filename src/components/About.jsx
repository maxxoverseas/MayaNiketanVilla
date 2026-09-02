import React from "react";

const About = () => {
  const experienceCards = [
    {
      number: "01",
      title: "Private Villa Living",
      text: "A spacious 6BHK villa concept created for privacy, comfort and quality time together.",
    },
    {
      number: "02",
      title: "Poolside Moments",
      text: "A private pool setting designed for slow afternoons, family time and memorable celebrations.",
    },
    {
      number: "03",
      title: "Nature Around You",
      text: "A calmer side of Virar East surrounded by open landscapes and the natural character of the Palghar region.",
    },
    {
      number: "04",
      title: "Made for Occasions",
      text: "A destination envisioned for staycations, holidays, intimate celebrations and relaxed weekend escapes.",
    },
  ];

  const nearbyPlaces = [
    {
      title: "Tungareshwar",
      subtitle: "Nature & Hills",
      text: "The wider Vasai–Virar region is known for the forested Tungareshwar landscape, trekking routes and seasonal greenery.",
    },
    {
      title: "Jivdani Temple",
      subtitle: "Virar Landmark",
      text: "One of Virar's best-known spiritual landmarks, located on Jivdani Hill in the eastern part of the city.",
    },
    {
      title: "Kaner–Vaitarna Belt",
      subtitle: "Open Surroundings",
      text: "The surrounding belt offers a quieter landscape away from the dense urban character of central Mumbai.",
    },
  ];

  return (
    <main id="about" className="w-full overflow-hidden bg-[#f7f3e8]">
      {/* ======================================
          HERO / INTRO
      ====================================== */}
      <section className="relative bg-[#243a29]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[430px] w-[430px] rounded-full border border-[#d5ae70]/15" />

        <div className="pointer-events-none absolute bottom-[-200px] left-[-170px] h-[380px] w-[380px] rounded-full border border-[#d5ae70]/10" />

        <div
          className="
            relative
            mx-auto
            grid
            min-h-[650px]
            max-w-[1600px]
            grid-cols-1
            items-center
            gap-12
            px-6
            py-20
            sm:px-8
            md:px-10
            lg:grid-cols-[1fr_0.95fr]
            lg:px-14
            lg:py-28
            xl:px-20
          "
        >
          {/* LEFT TEXT */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#d5ae70]" />

              <p className="font-serif text-lg italic tracking-wide text-[#d5ae70]">
                The Story of Maya Niketan
              </p>
            </div>

            <h1
              className="
                mt-7
                max-w-[720px]
                font-serif
                text-4xl
                leading-[1.15]
                text-white
                sm:text-5xl
                lg:text-[58px]
                xl:text-[64px]
              "
            >
              A Villa Created
              <span className="block italic text-[#d5ae70]">
                for Time Well Spent.
              </span>
            </h1>

            <p className="mt-8 max-w-[650px] text-[16px] leading-8 text-white/75 md:text-[17px]">
              Maya Niketan Villa is an upcoming 6BHK luxury pool villa in Virar
              East, envisioned as a private escape for families, friends and
              people looking for a quieter way to celebrate, unwind and spend
              time together.
            </p>

            <p className="mt-5 max-w-[650px] text-[15px] leading-8 text-white/60 md:text-[16px]">
              The idea is simple — combine generous living spaces, privacy,
              nature and thoughtful comfort in one destination without losing
              the warmth and ease of a personal holiday home.
            </p>

            <div className="mt-9 flex flex-wrap gap-7">
              <div>
                <p className="font-serif text-3xl italic text-[#d5ae70]">
                  6BHK
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                  Luxury Villa
                </p>
              </div>

              <div className="h-14 w-[1px] bg-white/15" />

              <div>
                <p className="font-serif text-3xl italic text-[#d5ae70]">
                  Virar East
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                  Palghar • Maharashtra
                </p>
              </div>

              <div className="h-14 w-[1px] bg-white/15" />

              <div>
                <p className="font-serif text-3xl italic text-[#d5ae70]">
                  Private
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                  Pool Villa
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full border border-[#d5ae70]/40" />

            <div className="relative aspect-[4/5] max-h-[550px] overflow-hidden">
              <img
                src="/images/about-main.jpg"
                alt="Maya Niketan Villa"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1d3022]/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7">
                <p className="font-serif text-2xl italic text-white">
                  Stay. Celebrate. Reconnect.
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  Maya Niketan Villa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          PHILOSOPHY
      ====================================== */}
      <section className="bg-[#f7f3e8] py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-serif text-lg italic text-[#c29053]">
            Our Philosophy
          </p>

          <h2
            className="
              mx-auto
              mt-4
              max-w-[950px]
              font-serif
              text-3xl
              leading-[1.25]
              text-[#243a29]
              md:text-4xl
              lg:text-5xl
            "
          >
            Luxury feels better when it gives you
            <span className="italic text-[#bd8c50]"> space to breathe.</span>
          </h2>

          <div className="mx-auto mt-7 h-[1px] w-20 bg-[#d5ae70]" />

          <p className="mx-auto mt-7 max-w-[850px] text-[15px] leading-8 text-[#686a60] md:text-[16px]">
            Maya Niketan Villa is being shaped around a more personal idea of
            luxury — room to gather, privacy when you need it, peaceful
            surroundings and an atmosphere that lets everyday routines fade into
            the background.
          </p>
        </div>
      </section>

      {/* ======================================
          EXPERIENCE CARDS
      ====================================== */}
      <section className="bg-[#f7f3e8] pb-20 md:pb-24">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 border border-[#243a29]/15 sm:grid-cols-2 lg:grid-cols-4">
            {experienceCards.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  border-b
                  border-[#243a29]/15
                  bg-[#fbf8f1]
                  p-8
                  transition-all
                  duration-500
                  hover:bg-[#243a29]
                  sm:border-r
                  lg:border-b-0
                  md:p-9
                "
              >
                <p className="font-serif text-sm italic tracking-[0.15em] text-[#bd8c50]">
                  {item.number}
                </p>

                <h3 className="mt-7 font-serif text-2xl text-[#243a29] transition-colors duration-500 group-hover:text-[#d5ae70]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6a6b63] transition-colors duration-500 group-hover:text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          LOCATION / NATURE STORY
      ====================================== */}
      <section className="bg-white py-20 md:py-24">
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            items-center
            gap-14
            px-6
            sm:px-8
            lg:grid-cols-2
            lg:gap-20
            lg:px-14
            xl:px-20
          "
        >
          {/* IMAGE */}
          <div className="relative">
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src="/images/about-nature.jpg"
                alt="Natural surroundings near Maya Niketan Villa"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 right-5 max-w-[280px] bg-[#243a29] p-7">
              <p className="font-serif text-xl italic leading-7 text-[#d5ae70]">
                A quieter side
                <br />
                of Virar.
              </p>

              <p className="mt-3 text-xs leading-5 text-white/60">
                Open landscapes, hills and the natural character of Palghar.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="pt-6 lg:pt-0">
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Rooted in the Location
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#243a29] md:text-4xl lg:text-[46px]">
              Close to the City.
              <span className="block italic text-[#bd8c50]">
                Closer to Nature.
              </span>
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-[#63675f] md:text-base">
              Virar sits at the northern edge of Mumbai's metropolitan
              landscape, where dense urban neighbourhoods gradually give way to
              hills, forest patches and the wider Palghar countryside.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-[#63675f] md:text-base">
              The Tungareshwar Wildlife Sanctuary lies east of Vasai and Virar
              in Palghar district and is known for hilly terrain, deciduous and
              semi-evergreen forest landscapes. This wider natural setting gives
              the region a distinctly different character from central Mumbai.
            </p>

            <div className="mt-8 flex items-start gap-5 border-l-2 border-[#d5ae70] pl-6">
              <p className="font-serif text-xl italic leading-8 text-[#7a7639]">
                “A place designed not to compete with nature, but to feel more
                connected to it.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          NEARBY CHARACTER
      ====================================== */}
      <section className="bg-[#243a29] py-20 md:py-24">
        <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-14">
          <div className="text-center">
            <p className="font-serif text-lg italic text-[#d5ae70]">
              Around Maya Niketan
            </p>

            <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
              A Location With Its Own Character
            </h2>

            <p className="mx-auto mt-5 max-w-[750px] text-sm leading-7 text-white/60 md:text-base">
              Nature, spirituality and the quieter landscapes of the Vasai–Virar
              and Palghar belt shape the experience around the villa.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-[1px] bg-white/10 md:grid-cols-3">
            {nearbyPlaces.map((place, index) => (
              <div
                key={index}
                className="bg-[#29422f] p-8 transition duration-500 hover:bg-[#304c36] md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#d5ae70]/70">
                  {place.subtitle}
                </p>

                <h3 className="mt-4 font-serif text-2xl text-[#d5ae70]">
                  {place.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  {place.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          WHAT MAYA NIKETAN IS FOR
      ====================================== */}
      <section className="bg-[#f7f3e8] py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-serif text-lg italic text-[#bd8c50]">
                Made for Moments
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#243a29] lg:text-5xl">
                Your reason to stay
                <span className="block italic text-[#bd8c50]">
                  can be entirely your own.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              {[
                [
                  "Staycations",
                  "A short escape when you need a change of pace.",
                ],
                ["Family Holidays", "Space to spend unhurried time together."],
                [
                  "Celebrations",
                  "A private setting for life's meaningful occasions.",
                ],
                [
                  "Weekend Escapes",
                  "A quieter break without planning a long journey.",
                ],
              ].map(([title, text], index) => (
                <div key={index} className="border-t border-[#243a29]/20 pt-6">
                  <h3 className="font-serif text-xl text-[#243a29]">{title}</h3>

                  <p className="mt-3 text-sm leading-7 text-[#696b63]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          SITE ADDRESS
      ====================================== */}
      <section className="bg-[#efe6d7] py-16">
        <div className="mx-auto max-w-[1300px] px-6 text-center">
          <p className="font-serif text-lg italic text-[#bd8c50]">
            Visit The Location
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[#243a29]">
            Maya Niketan Villa
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-[#62675f] md:text-base">
            Mahakali Temple, Amul Virar Dairy, Plot No. 114–117, Kaner–Dahisar
            Road, Vasai–Virar, Maharashtra 401303, India
          </p>

          <a
            href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-7
              inline-flex
              border
              border-[#243a29]
              px-7
              py-3
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#243a29]
              transition-all
              duration-300
              hover:bg-[#243a29]
              hover:text-white
            "
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* ======================================
          FINAL CTA
      ====================================== */}
      <section className="relative overflow-hidden bg-[#243a29] py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d5ae70]/10" />

        <div className="relative mx-auto max-w-[1000px] px-6 text-center">
          <p className="font-serif text-lg italic text-[#d5ae70]">
            Maya Niketan Villa
          </p>

          <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl lg:text-5xl">
            A little away from routine.
            <span className="block italic text-[#d5ae70]">
              A lot closer to the moments that matter.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 md:text-base">
            Discover an upcoming luxury villa destination made for staycations,
            holidays and celebrations in Virar East.
          </p>

          <a
            href="#contact"
            className="
              mt-8
              inline-flex
              bg-[#d5ae70]
              px-9
              py-4
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#243a29]
              transition-all
              duration-300
              hover:bg-white
            "
          >
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
