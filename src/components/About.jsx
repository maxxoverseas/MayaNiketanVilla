// import React from "react";

// const About = () => {
//   const experienceCards = [
//     {
//       number: "01",
//       title: "Private Villa Living",
//       text: "A spacious 6BHK villa concept created for privacy, comfort and quality time together.",
//     },
//     {
//       number: "02",
//       title: "Poolside Moments",
//       text: "A private pool setting designed for slow afternoons, family time and memorable celebrations.",
//     },
//     {
//       number: "03",
//       title: "Nature Around You",
//       text: "A calmer side of Virar East surrounded by open landscapes and the natural character of the Palghar region.",
//     },
//     {
//       number: "04",
//       title: "Made for Occasions",
//       text: "A destination envisioned for staycations, holidays, intimate celebrations and relaxed weekend escapes.",
//     },
//   ];

//   const nearbyPlaces = [
//     {
//       title: "Tungareshwar",
//       subtitle: "Nature & Hills",
//       text: "The wider Vasai–Virar region is known for the forested Tungareshwar landscape, trekking routes and seasonal greenery.",
//     },
//     {
//       title: "Jivdani Temple",
//       subtitle: "Virar Landmark",
//       text: "One of Virar's best-known spiritual landmarks, located on Jivdani Hill in the eastern part of the city.",
//     },
//     {
//       title: "Kaner–Vaitarna Belt",
//       subtitle: "Open Surroundings",
//       text: "The surrounding belt offers a quieter landscape away from the dense urban character of central Mumbai.",
//     },
//   ];

//   return (
//     <main id="about" className="w-full overflow-hidden bg-[#f7f3e8]">
//       {/* ======================================
//           HERO / INTRO
//       ====================================== */}
//       <section className="relative bg-[#243a29]">
//         {/* Decorative background */}
//         <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[430px] w-[430px] rounded-full border border-[#d5ae70]/15" />

//         <div className="pointer-events-none absolute bottom-[-200px] left-[-170px] h-[380px] w-[380px] rounded-full border border-[#d5ae70]/10" />

//         <div
//           className="
//             relative
//             mx-auto
//             grid
//             min-h-[650px]
//             max-w-[1600px]
//             grid-cols-1
//             items-center
//             gap-12
//             px-6
//             py-20
//             sm:px-8
//             md:px-10
//             lg:grid-cols-[1fr_0.95fr]
//             lg:px-14
//             lg:py-28
//             xl:px-20
//           "
//         >
//           {/* LEFT TEXT */}
//           <div>
//             <div className="flex items-center gap-4">
//               <span className="h-[1px] w-12 bg-[#d5ae70]" />

//               <p className="font-serif text-lg italic tracking-wide text-[#d5ae70]">
//                 The Story of Maya Niketan
//               </p>
//             </div>

//             <h1
//               className="
//                 mt-7
//                 max-w-[720px]
//                 font-serif
//                 text-4xl
//                 leading-[1.15]
//                 text-white
//                 sm:text-5xl
//                 lg:text-[58px]
//                 xl:text-[64px]
//               "
//             >
//               A Villa Created
//               <span className="block italic text-[#d5ae70]">
//                 for Time Well Spent.
//               </span>
//             </h1>

//             <p className="mt-8 max-w-[650px] text-[16px] leading-8 text-white/75 md:text-[17px]">
//               Maya Niketan Villa is an upcoming 6BHK luxury pool villa in Virar
//               East, envisioned as a private escape for families, friends and
//               people looking for a quieter way to celebrate, unwind and spend
//               time together.
//             </p>

//             <p className="mt-5 max-w-[650px] text-[15px] leading-8 text-white/60 md:text-[16px]">
//               The idea is simple — combine generous living spaces, privacy,
//               nature and thoughtful comfort in one destination without losing
//               the warmth and ease of a personal holiday home.
//             </p>

//             <div className="mt-9 flex flex-wrap gap-7">
//               <div>
//                 <p className="font-serif text-3xl italic text-[#d5ae70]">
//                   6BHK
//                 </p>

//                 <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
//                   Luxury Villa
//                 </p>
//               </div>

//               <div className="h-14 w-[1px] bg-white/15" />

//               <div>
//                 <p className="font-serif text-3xl italic text-[#d5ae70]">
//                   Virar East
//                 </p>

//                 <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
//                   Palghar • Maharashtra
//                 </p>
//               </div>

//               <div className="h-14 w-[1px] bg-white/15" />

//               <div>
//                 <p className="font-serif text-3xl italic text-[#d5ae70]">
//                   Private
//                 </p>

//                 <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
//                   Pool Villa
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative">
//             <div className="absolute -right-4 -top-4 h-full w-full border border-[#d5ae70]/40" />

//             <div className="relative aspect-[4/5] max-h-[550px] overflow-hidden">
//               <img
//                 src="/images/about-main.jpg"
//                 alt="Maya Niketan Villa"
//                 className="h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#1d3022]/60 via-transparent to-transparent" />

//               <div className="absolute bottom-0 left-0 p-7">
//                 <p className="font-serif text-2xl italic text-white">
//                   Stay. Celebrate. Reconnect.
//                 </p>

//                 <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
//                   Maya Niketan Villa
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ======================================
//           PHILOSOPHY
//       ====================================== */}
//       <section className="bg-[#f7f3e8] py-20 md:py-24">
//         <div className="mx-auto max-w-[1200px] px-6 text-center">
//           <p className="font-serif text-lg italic text-[#c29053]">
//             Our Philosophy
//           </p>

//           <h2
//             className="
//               mx-auto
//               mt-4
//               max-w-[950px]
//               font-serif
//               text-3xl
//               leading-[1.25]
//               text-[#243a29]
//               md:text-4xl
//               lg:text-5xl
//             "
//           >
//             Luxury feels better when it gives you
//             <span className="italic text-[#bd8c50]"> space to breathe.</span>
//           </h2>

//           <div className="mx-auto mt-7 h-[1px] w-20 bg-[#d5ae70]" />

//           <p className="mx-auto mt-7 max-w-[850px] text-[15px] leading-8 text-[#686a60] md:text-[16px]">
//             Maya Niketan Villa is being shaped around a more personal idea of
//             luxury — room to gather, privacy when you need it, peaceful
//             surroundings and an atmosphere that lets everyday routines fade into
//             the background.
//           </p>
//         </div>
//       </section>

//       {/* ======================================
//           EXPERIENCE CARDS
//       ====================================== */}
//       <section className="bg-[#f7f3e8] pb-20 md:pb-24">
//         <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
//           <div className="grid grid-cols-1 border border-[#243a29]/15 sm:grid-cols-2 lg:grid-cols-4">
//             {experienceCards.map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   group
//                   border-b
//                   border-[#243a29]/15
//                   bg-[#fbf8f1]
//                   p-8
//                   transition-all
//                   duration-500
//                   hover:bg-[#243a29]
//                   sm:border-r
//                   lg:border-b-0
//                   md:p-9
//                 "
//               >
//                 <p className="font-serif text-sm italic tracking-[0.15em] text-[#bd8c50]">
//                   {item.number}
//                 </p>

//                 <h3 className="mt-7 font-serif text-2xl text-[#243a29] transition-colors duration-500 group-hover:text-[#d5ae70]">
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 text-sm leading-7 text-[#6a6b63] transition-colors duration-500 group-hover:text-white/65">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======================================
//           LOCATION / NATURE STORY
//       ====================================== */}
//       <section className="bg-white py-20 md:py-24">
//         <div
//           className="
//             mx-auto
//             grid
//             max-w-[1500px]
//             grid-cols-1
//             items-center
//             gap-14
//             px-6
//             sm:px-8
//             lg:grid-cols-2
//             lg:gap-20
//             lg:px-14
//             xl:px-20
//           "
//         >
//           {/* IMAGE */}
//           <div className="relative">
//             <div className="aspect-[5/4] overflow-hidden">
//               <img
//                 src="/images/about-nature.jpg"
//                 alt="Natural surroundings near Maya Niketan Villa"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-7 right-5 max-w-[280px] bg-[#243a29] p-7">
//               <p className="font-serif text-xl italic leading-7 text-[#d5ae70]">
//                 A quieter side
//                 <br />
//                 of Virar.
//               </p>

//               <p className="mt-3 text-xs leading-5 text-white/60">
//                 Open landscapes, hills and the natural character of Palghar.
//               </p>
//             </div>
//           </div>

//           {/* CONTENT */}
//           <div className="pt-6 lg:pt-0">
//             <p className="font-serif text-lg italic text-[#bd8c50]">
//               Rooted in the Location
//             </p>

//             <h2 className="mt-4 font-serif text-3xl leading-tight text-[#243a29] md:text-4xl lg:text-[46px]">
//               Close to the City.
//               <span className="block italic text-[#bd8c50]">
//                 Closer to Nature.
//               </span>
//             </h2>

//             <p className="mt-7 text-[15px] leading-8 text-[#63675f] md:text-base">
//               Virar sits at the northern edge of Mumbai's metropolitan
//               landscape, where dense urban neighbourhoods gradually give way to
//               hills, forest patches and the wider Palghar countryside.
//             </p>

//             <p className="mt-5 text-[15px] leading-8 text-[#63675f] md:text-base">
//               The Tungareshwar Wildlife Sanctuary lies east of Vasai and Virar
//               in Palghar district and is known for hilly terrain, deciduous and
//               semi-evergreen forest landscapes. This wider natural setting gives
//               the region a distinctly different character from central Mumbai.
//             </p>

//             <div className="mt-8 flex items-start gap-5 border-l-2 border-[#d5ae70] pl-6">
//               <p className="font-serif text-xl italic leading-8 text-[#7a7639]">
//                 “A place designed not to compete with nature, but to feel more
//                 connected to it.”
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ======================================
//           NEARBY CHARACTER
//       ====================================== */}
//       <section className="bg-[#243a29] py-20 md:py-24">
//         <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-14">
//           <div className="text-center">
//             <p className="font-serif text-lg italic text-[#d5ae70]">
//               Around Maya Niketan
//             </p>

//             <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
//               A Location With Its Own Character
//             </h2>

//             <p className="mx-auto mt-5 max-w-[750px] text-sm leading-7 text-white/60 md:text-base">
//               Nature, spirituality and the quieter landscapes of the Vasai–Virar
//               and Palghar belt shape the experience around the villa.
//             </p>
//           </div>

//           <div className="mt-12 grid grid-cols-1 gap-[1px] bg-white/10 md:grid-cols-3">
//             {nearbyPlaces.map((place, index) => (
//               <div
//                 key={index}
//                 className="bg-[#29422f] p-8 transition duration-500 hover:bg-[#304c36] md:p-10"
//               >
//                 <p className="text-xs uppercase tracking-[0.2em] text-[#d5ae70]/70">
//                   {place.subtitle}
//                 </p>

//                 <h3 className="mt-4 font-serif text-2xl text-[#d5ae70]">
//                   {place.title}
//                 </h3>

//                 <p className="mt-5 text-sm leading-7 text-white/65">
//                   {place.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======================================
//           WHAT MAYA NIKETAN IS FOR
//       ====================================== */}
//       <section className="bg-[#f7f3e8] py-20 md:py-24">
//         <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-14">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
//             <div>
//               <p className="font-serif text-lg italic text-[#bd8c50]">
//                 Made for Moments
//               </p>

//               <h2 className="mt-4 font-serif text-4xl leading-tight text-[#243a29] lg:text-5xl">
//                 Your reason to stay
//                 <span className="block italic text-[#bd8c50]">
//                   can be entirely your own.
//                 </span>
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
//               {[
//                 [
//                   "Staycations",
//                   "A short escape when you need a change of pace.",
//                 ],
//                 ["Family Holidays", "Space to spend unhurried time together."],
//                 [
//                   "Celebrations",
//                   "A private setting for life's meaningful occasions.",
//                 ],
//                 [
//                   "Weekend Escapes",
//                   "A quieter break without planning a long journey.",
//                 ],
//               ].map(([title, text], index) => (
//                 <div key={index} className="border-t border-[#243a29]/20 pt-6">
//                   <h3 className="font-serif text-xl text-[#243a29]">{title}</h3>

//                   <p className="mt-3 text-sm leading-7 text-[#696b63]">
//                     {text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ======================================
//           SITE ADDRESS
//       ====================================== */}
//       <section className="bg-[#efe6d7] py-16">
//         <div className="mx-auto max-w-[1300px] px-6 text-center">
//           <p className="font-serif text-lg italic text-[#bd8c50]">
//             Visit The Location
//           </p>

//           <h2 className="mt-3 font-serif text-3xl text-[#243a29]">
//             Maya Niketan Villa
//           </h2>

//           <p className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-[#62675f] md:text-base">
//             Mahakali Temple, Amul Virar Dairy, Plot No. 114–117, Kaner–Dahisar
//             Road, Vasai–Virar, Maharashtra 401303, India
//           </p>

//           <a
//             href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               mt-7
//               inline-flex
//               border
//               border-[#243a29]
//               px-7
//               py-3
//               text-xs
//               uppercase
//               tracking-[0.18em]
//               text-[#243a29]
//               transition-all
//               duration-300
//               hover:bg-[#243a29]
//               hover:text-white
//             "
//           >
//             Open in Google Maps
//           </a>
//         </div>
//       </section>

//       {/* ======================================
//           FINAL CTA
//       ====================================== */}
//       <section className="relative overflow-hidden bg-[#243a29] py-20">
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d5ae70]/10" />

//         <div className="relative mx-auto max-w-[1000px] px-6 text-center">
//           <p className="font-serif text-lg italic text-[#d5ae70]">
//             Maya Niketan Villa
//           </p>

//           <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl lg:text-5xl">
//             A little away from routine.
//             <span className="block italic text-[#d5ae70]">
//               A lot closer to the moments that matter.
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 md:text-base">
//             Discover an upcoming luxury villa destination made for staycations,
//             holidays and celebrations in Virar East.
//           </p>

//           <a
//             href="#contact"
//             className="
//               mt-8
//               inline-flex
//               bg-[#d5ae70]
//               px-9
//               py-4
//               text-xs
//               font-medium
//               uppercase
//               tracking-[0.18em]
//               text-[#243a29]
//               transition-all
//               duration-300
//               hover:bg-white
//             "
//           >
//             Enquire Now
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

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
      className="w-full overflow-hidden bg-[#f7f3e8] text-[#243a29]"
    >
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#243a29]">
        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#d5ae70]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[400px] w-[400px] rounded-full border border-[#d5ae70]/10" />

        <div
          className="
            relative
            mx-auto
            grid
            min-h-[700px]
            max-w-[1600px]
            grid-cols-1
            items-center
            gap-12
            px-5
            py-16
            sm:px-8
            md:px-10
            md:py-20
            lg:grid-cols-[1.05fr_0.95fr]
            lg:px-14
            lg:py-24
            xl:px-20
          "
        >
          {/* LEFT */}
          <div>
            {/* BOOKING STATUS */}
            <div className="inline-flex items-center gap-3 border border-[#d5ae70]/40 bg-white/[0.04] px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5ae70] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#d5ae70]" />
              </span>

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#d5ae70] sm:text-xs">
                Villa Completed • Bookings Open
              </p>
            </div>

            {/* SMALL TITLE */}
            <div className="mt-8 flex items-center gap-4">
              <span className="h-[1px] w-10 bg-[#d5ae70]" />

              <p className="font-serif text-base italic tracking-wide text-[#d5ae70] sm:text-lg">
                Welcome to Maya Niketan Villa
              </p>
            </div>

            {/* MAIN HEADING */}
            <h1
              className="
                mt-6
                max-w-[760px]
                font-serif
                text-[42px]
                leading-[1.08]
                text-white
                sm:text-5xl
                md:text-[56px]
                lg:text-[62px]
                xl:text-[70px]
              "
            >
              Your Private Escape
              <span className="block italic text-[#d5ae70]">Is Ready.</span>
            </h1>

            <p className="mt-7 max-w-[670px] text-[15px] leading-8 text-white/75 sm:text-base md:text-[17px]">
              Maya Niketan Villa is a completed 6BHK luxury private pool villa
              in Virar East, created for relaxing staycations, family holidays,
              weekend escapes and memorable celebrations.
            </p>

            <p className="mt-4 max-w-[650px] text-[14px] leading-7 text-white/55 sm:text-[15px]">
              Leave the routine behind, gather your favourite people and enjoy
              your time in a peaceful private setting designed for moments that
              deserve to be remembered.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#booking"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  bg-[#d5ae70]
                  px-8
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#243a29]
                  transition
                  duration-300
                  hover:bg-white
                  sm:w-auto
                "
              >
                Book Your Stay
              </a>

              <a
                href="#experience"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  border
                  border-white/25
                  px-8
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition
                  duration-300
                  hover:border-[#d5ae70]
                  hover:text-[#d5ae70]
                  sm:w-auto
                "
              >
                Explore The Villa
              </a>
            </div>

            {/* STATS */}
            <div className="mt-12 grid max-w-[650px] grid-cols-1 gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
              <div>
                <p className="font-serif text-3xl italic text-[#d5ae70]">
                  6BHK
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Private Villa
                </p>
              </div>

              <div className="border-white/10 sm:border-l sm:pl-7">
                <p className="font-serif text-3xl italic text-[#d5ae70]">
                  Private
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Swimming Pool
                </p>
              </div>

              <div className="border-white/10 sm:border-l sm:pl-7">
                <p className="font-serif text-3xl italic text-[#d5ae70]">
                  Virar East
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[550px] lg:mx-0 lg:ml-auto">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#d5ae70]/35 sm:-right-5 sm:-top-5" />

            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/about-main.jpg"
                alt="Maya Niketan Villa private luxury villa"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#16281c]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="font-serif text-2xl italic text-white sm:text-3xl">
                  Stay. Celebrate. Reconnect.
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Maya Niketan Villa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="bg-[#f7f3e8] py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-5 text-center sm:px-8">
          <p className="font-serif text-lg italic text-[#bd8c50]">
            Your Private Getaway
          </p>

          <h2 className="mx-auto mt-4 max-w-[930px] font-serif text-3xl leading-[1.2] md:text-4xl lg:text-[50px]">
            Sometimes the best plans are simply
            <span className="italic text-[#bd8c50]">
              {" "}
              getting away together.
            </span>
          </h2>

          <div className="mx-auto mt-7 h-[1px] w-20 bg-[#d5ae70]" />

          <p className="mx-auto mt-7 max-w-[820px] text-[15px] leading-8 text-[#686a60] md:text-base">
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
      <section id="experience" className="bg-[#f7f3e8] pb-20 md:pb-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 overflow-hidden border border-[#243a29]/15 sm:grid-cols-2 lg:grid-cols-4">
            {experienceCards.map((item, index) => (
              <article
                key={index}
                className="
                  group
                  min-h-[300px]
                  border-b
                  border-[#243a29]/15
                  bg-[#fbf8f1]
                  p-7
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

                <h3 className="mt-7 font-serif text-[25px] leading-tight text-[#243a29] transition-colors duration-500 group-hover:text-[#d5ae70]">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#6a6b63] transition-colors duration-500 group-hover:text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FULLY READY SECTION
      ===================================================== */}
      <section className="bg-white py-20 md:py-28">
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            items-center
            gap-14
            px-5
            sm:px-8
            lg:grid-cols-2
            lg:gap-20
            lg:px-14
            xl:px-20
          "
        >
          {/* IMAGE */}
          <div className="relative pb-8 sm:pb-10">
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src="/images/about-nature.jpg"
                alt="Maya Niketan Villa surroundings"
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="
                absolute
                -bottom-1
                right-3
                max-w-[300px]
                bg-[#243a29]
                p-6
                sm:right-6
                sm:p-7
              "
            >
              <p className="font-serif text-xl italic leading-7 text-[#d5ae70]">
                Fully completed.
                <br />
                Ready for your stay.
              </p>

              <p className="mt-3 text-xs leading-5 text-white/55">
                Maya Niketan Villa is now welcoming bookings.
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <p className="font-serif text-lg italic text-[#bd8c50]">
              The Wait Is Over
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-[1.15] md:text-4xl lg:text-[48px]">
              Maya Niketan is
              <span className="block italic text-[#bd8c50]">
                ready to welcome you.
              </span>
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-[#63675f] md:text-base">
              From an idea to a completed destination, Maya Niketan Villa is now
              ready for guests looking for their next private getaway in Virar
              East.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-[#63675f] md:text-base">
              The villa brings together generous space, a private pool, calm
              surroundings and the freedom to enjoy your stay at your own pace.
            </p>

            <div className="mt-8 border-l-2 border-[#d5ae70] pl-6">
              <p className="font-serif text-xl italic leading-8 text-[#74713d] md:text-2xl">
                “Come for the stay. Leave with moments worth remembering.”
              </p>
            </div>

            <a
              href="#booking"
              className="
                mt-9
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                bg-[#243a29]
                px-8
                text-xs
                uppercase
                tracking-[0.18em]
                text-white
                transition
                duration-300
                hover:bg-[#d5ae70]
                hover:text-[#243a29]
              "
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          STAY TYPES
      ===================================================== */}
      <section className="bg-[#efe8da] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="font-serif text-lg italic text-[#bd8c50]">
                Made for Your Moments
              </p>

              <h2 className="mt-4 max-w-[500px] font-serif text-4xl leading-[1.15] lg:text-[50px]">
                Stay your way.
                <span className="block italic text-[#bd8c50]">
                  Make it memorable.
                </span>
              </h2>

              <p className="mt-6 max-w-[500px] text-[15px] leading-8 text-[#676960]">
                No two getaways need to look the same. Maya Niketan gives you
                the setting — how you enjoy the experience is entirely yours.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-9 gap-y-9 sm:grid-cols-2">
              {stayTypes.map((item, index) => (
                <article
                  key={index}
                  className="border-t border-[#243a29]/20 pt-6"
                >
                  <span className="font-serif text-sm italic text-[#bd8c50]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 font-serif text-[23px] text-[#243a29]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#696b63]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}
      <section className="bg-[#243a29] py-20 md:py-28">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-14">
          <div className="text-center">
            <p className="font-serif text-lg italic text-[#d5ae70]">
              Around Maya Niketan
            </p>

            <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl lg:text-[46px]">
              Escape the noise.
              <span className="block italic text-[#d5ae70]">
                Stay close to nature.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-sm leading-7 text-white/60 md:text-base">
              Maya Niketan Villa is located in Virar East, offering access to
              the quieter character of the Vasai–Virar and Palghar region.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-[1px] bg-white/10 md:grid-cols-3">
            {nearbyPlaces.map((place, index) => (
              <article
                key={index}
                className="bg-[#29422f] p-7 transition duration-500 hover:bg-[#304c36] md:p-10"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d5ae70]/70">
                  {place.subtitle}
                </p>

                <h3 className="mt-4 font-serif text-2xl text-[#d5ae70]">
                  {place.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  {place.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING / LOCATION
      ===================================================== */}
      <section id="booking" className="bg-[#f7f3e8] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="border border-[#243a29]/15 bg-white p-7 sm:p-10 md:p-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#243a29] px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#d5ae70]" />

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#d5ae70]">
                    Bookings Open
                  </p>
                </div>

                <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl lg:text-[48px]">
                  Ready for your
                  <span className="block italic text-[#bd8c50]">
                    next getaway?
                  </span>
                </h2>

                <p className="mt-6 max-w-[620px] text-[15px] leading-8 text-[#64675f]">
                  Maya Niketan Villa is now accepting bookings for staycations,
                  holidays, weekend escapes and private celebrations.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="
                      inline-flex
                      min-h-[52px]
                      items-center
                      justify-center
                      bg-[#243a29]
                      px-8
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white
                      transition
                      duration-300
                      hover:bg-[#d5ae70]
                      hover:text-[#243a29]
                    "
                  >
                    Book Your Stay
                  </a>

                  <a
                    href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      min-h-[52px]
                      items-center
                      justify-center
                      border
                      border-[#243a29]/30
                      px-8
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[#243a29]
                      transition
                      duration-300
                      hover:border-[#243a29]
                    "
                  >
                    View Location
                  </a>
                </div>
              </div>

              <div className="border-l-0 border-[#243a29]/15 lg:border-l lg:pl-12">
                <p className="font-serif text-lg italic text-[#bd8c50]">
                  Location
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#243a29]">
                  Maya Niketan Villa
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#62675f] md:text-base">
                  Mahakali Temple, Amul Virar Dairy,
                  <br />
                  Plot No. 114–117, Kaner–Dahisar Road,
                  <br />
                  Vasai–Virar, Maharashtra 401303, India
                </p>

                <div className="mt-7 border-t border-[#243a29]/10 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9b805d]">
                    Perfect For
                  </p>

                  <p className="mt-3 font-serif text-xl italic text-[#243a29]">
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
      <section className="relative overflow-hidden bg-[#243a29] py-20 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d5ae70]/10" />

        <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <p className="font-serif text-lg italic text-[#d5ae70]">
            Maya Niketan Villa
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl lg:text-[52px]">
            Your next memorable stay
            <span className="block italic text-[#d5ae70]">begins here.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 md:text-base">
            The villa is complete. The pool is ready. Bookings are open. All
            that's left is choosing when you want to escape.
          </p>

          <a
            href="#contact"
            className="
              mt-9
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              bg-[#d5ae70]
              px-10
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#243a29]
              transition
              duration-300
              hover:bg-white
            "
          >
            Book Maya Niketan
          </a>

          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/35">
            6BHK Private Pool Villa • Virar East
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
