// import React from "react";

// const Footer = () => {
//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Amenities", href: "#amenities" },
//     { name: "Location", href: "#location" },
//     { name: "Gallery", href: "#gallery" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <footer className="w-full bg-[#d4d7d4] text-white">
//       {/* MAIN FOOTER */}
//       <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-8 md:px-10 lg:px-14 lg:py-16 xl:px-20">
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
//           {/* BRAND */}
//           <div className="lg:col-span-1">
//             <h2 className="font-serif text-3xl italic text-[#d4ad72]">
//               Maya Niketan Villa
//             </h2>

//             <p className="mt-4 max-w-[330px] text-sm leading-7 text-white/70">
//               A peaceful luxury escape surrounded by nature, designed for
//               relaxing staycations, family holidays and memorable celebrations.
//             </p>

//             <p className="mt-5 text-xs tracking-[0.18em] text-[#d4ad72]">
//               STAYCATIONS • HOLIDAYS • CELEBRATIONS
//             </p>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h3 className="font-serif text-xl italic text-[#d4ad72]">
//               Quick Links
//             </h3>

//             <div className="mt-5 flex flex-col items-start gap-3">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-sm text-white/75 transition duration-300 hover:text-[#d4ad72]"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* ADDRESS */}
//           <div>
//             <h3 className="font-serif text-xl italic text-[#d4ad72]">
//               Visit Us
//             </h3>

//             <p className="mt-5 max-w-[310px] text-sm leading-7 text-white/75">
//               Maya Niketan Villa
//               <br />
//               Mahakali Temple, Amul Virar Dairy
//               <br />
//               Plot No. 114-117, Kaner - Dahisar Rd
//               <br />
//               Vasai-Virar, Maharashtra 401303
//               <br />
//               India
//             </p>

//             <a
//               href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-4 inline-block border-b border-[#d4ad72] pb-1 text-sm text-[#d4ad72] transition hover:text-white"
//             >
//               View on Google Maps ↗
//             </a>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h3 className="font-serif text-xl italic text-[#d4ad72]">
//               Get In Touch
//             </h3>

//             <div className="mt-5 space-y-4 text-sm text-white/75">
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/45">
//                   Phone
//                 </p>
//                 <a
//                   href="tel:+91XXXXXXXXXX"
//                   className="mt-1 block transition hover:text-[#d4ad72]"
//                 >
//                   +919960572239
//                 </a>
//               </div>

//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/45">
//                   Email
//                 </p>
//                 <a
//                   href="mailto:info@mayaniketanvilla.com"
//                   className="mt-1 block transition hover:text-[#d4ad72]"
//                 >
//                   info@mayaniketanvilla.com
//                 </a>
//               </div>
//             </div>

//             {/* CTA */}
//             <a
//               href="#contact"
//               className="
//                 mt-7
//                 inline-flex
//                 items-center
//                 justify-center
//                 border
//                 border-[#d4ad72]
//                 px-6
//                 py-3
//                 text-xs
//                 uppercase
//                 tracking-[0.15em]
//                 text-[#d4ad72]
//                 transition-all
//                 duration-300
//                 hover:bg-[#d4ad72]
//                 hover:text-[#1f3223]
//               "
//             >
//               Enquire Now
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* DIVIDER */}
//       <div className="mx-auto max-w-[1600px] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20">
//         <div className="h-[1px] w-full bg-white/15" />
//       </div>

//       {/* BOTTOM FOOTER */}
//       <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-14 xl:px-20">
//         <p className="text-xs text-white/50">
//           © {new Date().getFullYear()} Maya Niketan Villa. All Rights Reserved.
//         </p>

//         <div className="flex items-center gap-6">
//           <a
//             href="#"
//             className="text-xs text-white/50 transition hover:text-[#d4ad72]"
//           >
//             Privacy Policy
//           </a>

//           <a
//             href="#"
//             className="text-xs text-white/50 transition hover:text-[#d4ad72]"
//           >
//             Terms & Conditions
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#f8f6f1] text-[#0e382b]">
      {/* Background Subtle Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#9e793e]/15 blur-[120px]" />

      {/* Top Border Accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#9e793e]/40 to-transparent" />

      {/* MAIN FOOTER */}
      <div className="relative mx-auto max-w-[1600px] px-6 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-20 xl:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 xl:gap-16">
          {/* BRAND COLUMN */}
          <div className="flex flex-col items-start lg:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9e793e] animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
                Private Luxury Villa
              </span>
            </div>

            <h2 className="mt-4 font-serif text-3xl font-light text-[#0e382b] sm:text-4xl">
              Maya Niketan <span className="italic text-[#9e793e]">Villa</span>
            </h2>

            <p className="mt-4 text-sm font-light leading-relaxed text-[#0e382b]/75">
              A peaceful luxury escape surrounded by nature, designed for
              relaxing staycations, family holidays, and memorable celebrations.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-lg border border-[#0e382b]/10 bg-white/60 p-3 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
                Staycations • Holidays • Celebrations
              </p>
            </div>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9e793e]">
              Navigation
            </p>
            <h3 className="mt-1 font-serif text-2xl font-light text-[#0e382b]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-light text-[#0e382b]/80 transition-all duration-300 hover:text-[#9e793e]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#9e793e] opacity-0 transition-all duration-300 group-hover:w-2 group-hover:opacity-100" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ADDRESS COLUMN */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9e793e]">
              Location
            </p>
            <h3 className="mt-1 font-serif text-2xl font-light text-[#0e382b]">
              Visit Us
            </h3>

            <div className="mt-6 rounded-xl border border-[#0e382b]/10 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">
              <p className="text-sm font-light leading-relaxed text-[#0e382b]/80">
                <strong className="font-serif text-base font-medium text-[#0e382b]">
                  Maya Niketan Villa
                </strong>
                <br />
                Mahakali Temple, Amul Virar Dairy
                <br />
                Plot No. 114-117, Kaner - Dahisar Rd
                <br />
                Vasai-Virar, Maharashtra 401303, India
              </p>

              <a
                href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#9e793e] transition-all hover:text-[#0e382b]"
              >
                View on Google Maps
                <span className="text-sm transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* CONTACT COLUMN */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9e793e]">
                Direct Access
              </p>
              <h3 className="mt-1 font-serif text-2xl font-light text-[#0e382b]">
                Get In Touch
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-[#0e382b]/5 bg-white/50 p-3 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0e382b]/50">
                    Phone & WhatsApp
                  </p>
                  <a
                    href="tel:+919960572239"
                    className="mt-0.5 block font-serif text-base font-medium text-[#0e382b] transition-colors duration-300 hover:text-[#9e793e]"
                  >
                    +91 xxx xxx xxx
                  </a>
                </div>

                <div className="rounded-lg border border-[#0e382b]/5 bg-white/50 p-3 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0e382b]/50">
                    Email Inquiry
                  </p>
                  <a
                    href="mailto:info@mayaniketanvilla.com"
                    className="mt-0.5 block text-sm font-light text-[#0e382b] transition-colors duration-300 hover:text-[#9e793e]"
                  >
                    info@mayaniketanvilla.com
                  </a>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#0e382b] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:bg-[#9e793e] hover:shadow-xl hover:-translate-y-0.5"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">
        <div className="h-[1px] w-full bg-[#0e382b]/10" />
      </div>

      {/* BOTTOM FOOTER */}
      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:px-8 md:flex-row md:text-left lg:px-16 xl:px-24">
        <p className="text-xs font-light text-[#0e382b]/60">
          © {new Date().getFullYear()}{" "}
          <span className="font-serif font-medium text-[#0e382b]">
            Maya Niketan Villa
          </span>
          . All Rights Reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs font-light text-[#0e382b]/60 transition-colors duration-300 hover:text-[#9e793e]"
          >
            Privacy Policy
          </a>

          <span className="h-1 w-1 rounded-full bg-[#0e382b]/20" />

          <a
            href="#"
            className="text-xs font-light text-[#0e382b]/60 transition-colors duration-300 hover:text-[#9e793e]"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
