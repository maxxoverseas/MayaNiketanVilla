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
    <footer className="w-full bg-[#1f3223] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-8 md:px-10 lg:px-14 lg:py-16 xl:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl italic text-[#d4ad72]">
              Maya Niketan Villa
            </h2>

            <p className="mt-4 max-w-[330px] text-sm leading-7 text-white/70">
              A peaceful luxury escape surrounded by nature, designed for
              relaxing staycations, family holidays and memorable celebrations.
            </p>

            <p className="mt-5 text-xs tracking-[0.18em] text-[#d4ad72]">
              STAYCATIONS • HOLIDAYS • CELEBRATIONS
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-serif text-xl italic text-[#d4ad72]">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col items-start gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/75 transition duration-300 hover:text-[#d4ad72]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-serif text-xl italic text-[#d4ad72]">
              Visit Us
            </h3>

            <p className="mt-5 max-w-[310px] text-sm leading-7 text-white/75">
              Maya Niketan Villa
              <br />
              Mahakali Temple, Amul Virar Dairy
              <br />
              Plot No. 114-117, Kaner - Dahisar Rd
              <br />
              Vasai-Virar, Maharashtra 401303
              <br />
              India
            </p>

            <a
              href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border-b border-[#d4ad72] pb-1 text-sm text-[#d4ad72] transition hover:text-white"
            >
              View on Google Maps ↗
            </a>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-serif text-xl italic text-[#d4ad72]">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/45">
                  Phone
                </p>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="mt-1 block transition hover:text-[#d4ad72]"
                >
                  +919960572239
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-white/45">
                  Email
                </p>
                <a
                  href="mailto:info@mayaniketanvilla.com"
                  className="mt-1 block transition hover:text-[#d4ad72]"
                >
                  info@mayaniketanvilla.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                border
                border-[#d4ad72]
                px-6
                py-3
                text-xs
                uppercase
                tracking-[0.15em]
                text-[#d4ad72]
                transition-all
                duration-300
                hover:bg-[#d4ad72]
                hover:text-[#1f3223]
              "
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <div className="h-[1px] w-full bg-white/15" />
      </div>

      {/* BOTTOM FOOTER */}
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-14 xl:px-20">
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Maya Niketan Villa. All Rights Reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-white/50 transition hover:text-[#d4ad72]"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-xs text-white/50 transition hover:text-[#d4ad72]"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
