// src/pages/ExperienceSection.jsx
import React, { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
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

  const experiences = [
    {
      icon: "🏖️",
      title: "Staycations",
      subtitle: "Weekend Escape",
      description:
        "Perfect for a quick weekend break. Enjoy the private pool, spacious rooms and complete privacy with your loved ones.",
      duration: "1-2 Nights",
      guests: "2-20 Guests",
      highlight: "Most Popular",
      color: "#0e382b",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Holidays",
      subtitle: "Quality Time Together",
      description:
        "Six bedrooms and spacious common areas make it ideal for family reunions, holidays and quality time with all generations.",
      duration: "2-5 Nights",
      guests: "10-30 Guests",
      highlight: "Best for Families",
      color: "#9e793e",
    },
    {
      icon: "🎉",
      title: "Party & Celebrations",
      subtitle: "Birthdays • Anniversaries",
      description:
        "Celebrate birthdays, anniversaries or special occasions in complete privacy. Poolside parties, indoor celebrations and more.",
      duration: "Day/Night Events",
      guests: "20-100 Guests",
      highlight: "Premium Experience",
      color: "#b9925f",
    },
    {
      icon: "🏢",
      title: "Corporate Events",
      subtitle: "Team Outings & Retreats",
      description:
        "Ideal for team building, corporate retreats and offsite meetings. Combine work with relaxation in a private setting.",
      duration: "1-3 Days",
      guests: "15-50 Guests",
      highlight: "Business Ready",
      color: "#263c2a",
    },
    {
      icon: "📸",
      title: "Photoshoots",
      subtitle: "Pre-Wedding & Portfolio",
      description:
        "Stunning backdrops, natural light and elegant spaces make the villa perfect for photoshoots and content creation.",
      duration: "Half/Full Day",
      guests: "Up to 20 People",
      highlight: "Aesthetic Spaces",
      color: "#8b7355",
    },
    {
      icon: "🧘",
      title: "Wellness Retreats",
      subtitle: "Yoga & Meditation",
      description:
        "Peaceful surroundings, open-air spaces and a calm atmosphere create the perfect setting for wellness and mindfulness retreats.",
      duration: "2-4 Days",
      guests: "10-25 Guests",
      highlight: "Serene Setting",
      color: "#687064",
    },
  ];

  const [activeExp, setActiveExp] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0e382b] py-20 md:py-24 lg:py-28"
    >
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* HEADER */}
        <div
          className={`mx-auto mb-14 max-w-4xl text-center transition-all duration-700 ease-out md:mb-16 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ad72]/30 bg-[#d4ad72]/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#d4ad72] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4ad72]">
              Book Your Experience
            </span>
          </div>

          <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl lg:text-[50px]">
            What Are You{" "}
            <span className="italic text-[#d4ad72]">Planning?</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#d4ad72]" />

          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            From weekend staycations to grand celebrations, Maya Niketan Villa
            offers the perfect private setting for every occasion.
          </p>
        </div>

        {/* EXPERIENCE CARDS */}
        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: inView ? "200ms" : "0ms" }}
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              onMouseEnter={() => setActiveExp(index)}
              className={`
                group relative overflow-hidden rounded-2xl border transition-all duration-500
                ${
                  activeExp === index
                    ? "border-[#d4ad72]/60 bg-white/10 shadow-2xl shadow-[#d4ad72]/20 -translate-y-1"
                    : "border-white/10 bg-white/5 hover:border-[#d4ad72]/40"
                }
              `}
            >
              {/* Highlight Badge */}
              <div className="absolute right-4 top-4 z-10">
                <span className="rounded-full bg-[#d4ad72]/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#d4ad72] backdrop-blur-sm">
                  {exp.highlight}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                {/* Icon */}
                <div
                  className={`
                    mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-2xl
                    transition-all duration-500
                    ${
                      activeExp === index
                        ? "bg-[#d4ad72] text-[#0e382b] scale-110"
                        : "bg-white/10 text-white"
                    }
                  `}
                >
                  {exp.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-white sm:text-2xl">
                  {exp.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#d4ad72]">
                  {exp.subtitle}
                </p>

                {/* Divider */}
                <div
                  className={`
                    my-4 h-[1px] transition-all duration-500
                    ${
                      activeExp === index
                        ? "w-16 bg-[#d4ad72]"
                        : "w-10 bg-white/20"
                    }
                  `}
                />

                {/* Description */}
                <p className="text-sm font-light leading-relaxed text-white/60">
                  {exp.description}
                </p>

                {/* Details */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                    <span className="text-[10px] text-white/40">⏱</span>
                    <span className="text-[10px] font-medium text-white/70">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                    <span className="text-[10px] text-white/40">👥</span>
                    <span className="text-[10px] font-medium text-white/70">
                      {exp.guests}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className={`
                    mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em]
                    transition-all duration-300
                    ${
                      activeExp === index
                        ? "text-[#d4ad72]"
                        : "text-white/40 group-hover:text-[#d4ad72]"
                    }
                  `}
                >
                  Enquire Now
                  <span
                    className={`
                      transition-transform duration-300
                      ${activeExp === index ? "translate-x-1" : ""}
                    `}
                  >
                    →
                  </span>
                </a>
              </div>

              {/* Bottom Accent */}
              <div
                className={`
                  h-[3px] transition-all duration-500
                  ${activeExp === index ? "bg-[#d4ad72]" : "bg-transparent"}
                `}
              />
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          className={`mx-auto mt-14 max-w-3xl text-center transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: inView ? "400ms" : "0ms" }}
        >
          <div className="rounded-2xl border border-[#d4ad72]/20 bg-white/5 p-8 backdrop-blur-sm">
            <p className="font-serif text-xl italic text-[#d4ad72] sm:text-2xl">
              Not sure which experience fits?
            </p>
            <p className="mt-3 text-sm font-light text-white/60">
              Tell us about your plans and we'll help you choose the perfect
              setup for your stay.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#d4ad72] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] transition-all duration-300 hover:bg-white hover:shadow-lg"
            >
              Plan Your Stay
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
