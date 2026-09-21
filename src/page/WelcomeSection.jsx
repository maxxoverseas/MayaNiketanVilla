// src/pages/WelcomeSection.jsx
import React, { useEffect, useRef, useState } from "react";

const WelcomeSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f8f6f1] md:py-15 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* LEFT CONTENT */}
          <div
            className={`w-full transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#0e382b] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
                Your Private Escape
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl font-light leading-[1.25] text-[#0e382b] sm:text-4xl lg:text-[46px] xl:text-[50px]">
              Luxury, Privacy &
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              <span className="italic text-[#9e793e]">Time Well Spent</span>
            </h2>

            <div className="mt-6 h-[2px] w-16 bg-[#9e793e]" />

            <p className="mt-8 max-w-[650px] text-base font-light leading-relaxed text-[#0e382b]/80 sm:text-lg lg:text-[18px]">
              Welcome to{" "}
              <span className="font-serif italic text-[#9b7c4c]">
                Maya Niketan Villa
              </span>
              , a private 6BHK luxury pool villa created for comfortable stays,
              relaxed getaways and memorable time with family and friends.
            </p>

            <p className="mt-4 max-w-[650px] text-sm font-light leading-relaxed text-[#0e382b]/60 sm:text-base">
              Spacious living areas, a private swimming pool and the privacy of
              an entire villa give you the freedom to slow down and enjoy your
              stay your way — whether it's a weekend escape, family holiday or
              special celebration.
            </p>

            {/* EXPERIENCE TAGS */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.16em] text-[#777d75] sm:text-xs">
              <span>Staycations</span>
              <span className="h-1 w-1 rounded-full bg-[#b99a68]" />
              <span>Family Holidays</span>
              <span className="h-1 w-1 rounded-full bg-[#b99a68]" />
              <span>Celebrations</span>
              <span className="h-1 w-1 rounded-full bg-[#b99a68]" />
              <span>Weekend Getaways</span>
            </div>

            {/* QUOTE */}
            <p className="mt-8 max-w-[650px] font-serif text-lg italic leading-relaxed text-[#b99a68] sm:text-xl">
              Your own space. Your own pace. Your own moments.
            </p>

            {/* CTA */}
            {/* <a
              href="/contact"
              className="mt-8 inline-flex w-fit items-center justify-center border border-[#29422f] bg-[#29422f] px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#b99a68] hover:bg-[#b99a68]"
            >
              Book Your Stay
            </a> */}
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`flex w-full items-center justify-center transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: inView ? "200ms" : "0ms" }}
          >
            <div className="relative w-full max-w-[720px]">
              <div className="absolute left-1/2 top-0 h-[1px] w-20 -translate-x-1/2 bg-[#b99a68]/40" />

              <img
                src="/images/background1.jpg"
                alt="Maya Niketan Villa"
                className="h-[250px] w-full object-contain opacity-95 sm:h-[290px] md:h-[330px] lg:h-[350px] xl:h-[390px]"
              />

              <div className="mt-3 text-center">
                <p className="font-serif text-lg italic text-[#8d783d] sm:text-xl">
                  Maya Niketan Villa
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#8f938b] sm:text-xs">
                  6BHK Luxury Pool Villa • Virar East
                </p>
              </div>

              <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                <span className="h-[1px] w-10 bg-[#b99a68]/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#b99a68]" />
                <span className="h-[1px] w-10 bg-[#b99a68]/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
