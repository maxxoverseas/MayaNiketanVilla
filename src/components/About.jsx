import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Users,
  Sparkles,
  Leaf,
  Shield,
  Star,
  Quote,
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const About = () => {
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
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const values = [
    {
      icon: Heart,
      title: "Warm Hospitality",
      description:
        "Every guest is welcomed like family. We believe true luxury lies in the personal touch, genuine care, and attention to detail that makes you feel at home.",
    },
    {
      icon: Shield,
      title: "Complete Privacy",
      description:
        "Your time is yours alone. The entire villa is exclusively yours during your stay — no shared spaces, no interruptions, just uninterrupted moments with your loved ones.",
    },
    {
      icon: Sparkles,
      title: "Thoughtful Comfort",
      description:
        "From spacious bedrooms to the private pool, every corner has been designed with your comfort in mind, so you can truly relax and unwind.",
    },
    {
      icon: Leaf,
      title: "Peaceful Escape",
      description:
        "Nestled in the serene surroundings of Virar East, the villa offers a calm retreat from the everyday rush, where you can slow down and reconnect.",
    },
  ];

  const milestones = [
    {
      year: "2026",
      title: "A Dream Comes to Life",
      description:
        "Maya Niketan Villa opens its doors in Virar East — a private 6BHK luxury pool villa created from a simple belief that the best moments are shared with the people who matter most.",
    },
    {
      year: "2026",
      title: "The Vision Behind the Villa",
      description:
        "Founded by Pratibha Singh, the villa was designed to blend the warmth of a family home with the elegance of a boutique retreat — a space where guests feel truly cared for.",
    },
    {
      year: "2026",
      title: "Welcoming Our First Guests",
      description:
        "From day one, Maya Niketan Villa became a preferred destination for staycations, family holidays, celebrations and private getaways across the Vasai–Virar region.",
    },
    {
      year: "2026",
      title: "A New Chapter Begins",
      description:
        "With every stay, we continue to grow — building a reputation for privacy, comfort and heartfelt hospitality that keeps guests coming back.",
    },
  ];

  const stats = [
    { value: "2026", label: "Established" },
    { value: "6BHK", label: "Private Villa" },
    { value: "4.9", label: "Guest Rating" },
    { value: "24/7", label: "Guest Support" },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-[#f8f6f1]">
      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-[#0e382b] pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ad72]/30 bg-[#d4ad72]/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#d4ad72]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4ad72]">
                Est. 2026
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              The Story Behind
              <br />
              <span className="italic text-[#d4ad72]">Maya Niketan Villa</span>
            </h1>

            <div className="mx-auto mt-8 h-[2px] w-20 bg-[#d4ad72]" />

            <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:text-xl">
              A vision born in 2026 from a simple belief — that the best moments
              in life are the ones shared with the people who matter most, in a
              space that feels truly your own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FOUNDER SECTION - PRATIBHA SINGH
      ============================================ */}
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#f8f6f1] py-20 md:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* LEFT - FOUNDER IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full items-center justify-center"
            >
              <div className="relative w-full max-w-[520px]">
                <div className="absolute -left-4 -top-4 h-full w-full border-2 border-[#d4ad72]/30" />
                <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-[#0e382b]/10" />

                <div className="relative overflow-hidden bg-[#eae6dd] shadow-2xl">
                  <img
                    src="/images/ceo.jpg"
                    alt="Pratibha Singh - Founder & CEO of Maya Niketan Villa"
                    className="aspect-[4/5] w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />

                  {/* Fallback Avatar */}
                  <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-[#0e382b] to-[#1a4a38]">
                    <div className="text-center">
                      <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#d4ad72]/20 backdrop-blur-sm">
                        <span className="font-serif text-6xl text-[#d4ad72]">
                          PS
                        </span>
                      </div>
                      <p className="mt-6 font-serif text-2xl italic text-white">
                        Pratibha Singh
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4ad72]">
                      Founder & CEO
                    </p>
                    <p className="mt-1 font-serif text-2xl italic text-white">
                      Pratibha Singh
                    </p>
                  </div>
                </div>

                <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                  <span className="h-[1px] w-10 bg-[#d4ad72]/50" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#d4ad72]" />
                  <span className="h-[1px] w-10 bg-[#d4ad72]/50" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT - FOUNDER MESSAGE */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md"
              >
                <Star className="h-3.5 w-3.5 text-[#9e793e]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
                  Meet Our Founder
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl lg:text-[42px]"
              >
                A Vision of{" "}
                <span className="italic text-[#9e793e]">
                  Warmth & Hospitality
                </span>
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="mt-6 h-[2px] w-16 bg-[#9e793e]"
              />

              <motion.div variants={itemVariants} className="mt-8">
                <Quote className="h-10 w-10 text-[#d4ad72]/40" />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mt-4 font-serif text-lg italic leading-relaxed text-[#555b54] sm:text-xl"
              >
                "I always believed that a home is not just four walls — it's a
                feeling. Maya Niketan Villa was created to give families and
                friends a place where they could pause, reconnect, and create
                memories that last a lifetime."
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-base font-light leading-relaxed text-[#0e382b]/70 sm:text-lg"
              >
                In 2026, Pratibha Singh brought her vision to life — a private
                retreat that combines the luxury of a boutique resort with the
                warmth of a family home. With a deep love for bringing people
                together and a commitment to heartfelt hospitality, she created
                a space where every guest feels truly at ease.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="mt-4 text-base font-light leading-relaxed text-[#0e382b]/70 sm:text-lg"
              >
                Every detail at Maya Niketan Villa — from the spacious living
                areas to the serene poolside — reflects her dedication to
                creating moments that stay with you long after you leave.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 border-t border-[#0e382b]/10 pt-6"
              >
                <p className="font-serif text-2xl italic text-[#0e382b]">
                  Pratibha Singh
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#9e793e]">
                  Founder & CEO • Maya Niketan Villa • Est. 2026
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-[#0e382b] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:30px_30px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-4xl font-light text-[#d4ad72] sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          OUR VALUES SECTION
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-[#f8f6f1] py-20 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
              <Heart className="h-3.5 w-3.5 text-[#9e793e]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
                What We Stand For
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl md:text-5xl">
              Our Core <span className="italic text-[#9e793e]">Values</span>
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-20 bg-[#9e793e]" />

            <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-relaxed text-[#0e382b]/70 md:text-lg">
              These principles guide everything we do — from how we welcome our
              guests to how we care for every detail of your stay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#0e382b]/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-xl sm:p-7"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-500 group-hover:bg-[#0e382b] group-hover:scale-110">
                    <Icon className="h-7 w-7 text-[#0e382b] transition-colors duration-500 group-hover:text-[#d4ad72]" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#0e382b] sm:text-2xl">
                    {value.title}
                  </h3>

                  <div className="mt-3 h-[2px] w-10 bg-[#9e793e]/40 transition-all duration-500 group-hover:w-16 group-hover:bg-[#9e793e]" />

                  <p className="mt-4 text-sm font-light leading-relaxed text-[#0e382b]/60">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d4ad72] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          JOURNEY / MILESTONES SECTION
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#9e793e]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
              <Calendar className="h-3.5 w-3.5 text-[#9e793e]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
                Our Journey
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl md:text-5xl">
              The Beginning of{" "}
              <span className="italic text-[#9e793e]">Something Special</span>
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-20 bg-[#9e793e]" />

            <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-relaxed text-[#0e382b]/70 md:text-lg">
              Maya Niketan Villa opened its doors in 2026 — a fresh chapter in
              private luxury getaways in Virar East.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#9e793e]/30 to-transparent lg:block" />

            <div className="space-y-10 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.year}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full lg:w-1/2 ${
                      index % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <div className="group rounded-2xl border border-[#0e382b]/10 bg-[#f8f6f1] p-6 shadow-sm transition-all duration-500 hover:border-[#9e793e]/40 hover:shadow-lg sm:p-7">
                      <p className="font-serif text-3xl font-light text-[#d4ad72] sm:text-4xl">
                        {milestone.year}
                      </p>

                      <h3 className="mt-2 font-serif text-xl font-medium text-[#0e382b] sm:text-2xl">
                        {milestone.title}
                      </h3>

                      <div
                        className={`mt-3 h-[2px] w-10 bg-[#9e793e]/40 transition-all duration-500 group-hover:w-16 ${
                          index % 2 === 0 ? "lg:ml-auto" : ""
                        }`}
                      />

                      <p className="mt-4 text-sm font-light leading-relaxed text-[#0e382b]/60 sm:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#9e793e] bg-white shadow-md">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#9e793e]" />
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US SECTION
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-[#f8f6f1] py-20 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
                <Award className="h-3.5 w-3.5 text-[#9e793e]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
                  Why Guests Choose Us
                </span>
              </div>

              <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl lg:text-[42px]">
                More Than a Stay —{" "}
                <span className="italic text-[#9e793e]">An Experience</span>
              </h2>

              <div className="mt-6 h-[2px] w-16 bg-[#9e793e]" />

              <p className="mt-8 max-w-[650px] text-base font-light leading-relaxed text-[#0e382b]/70 sm:text-lg">
                At Maya Niketan Villa, we don't just offer accommodation — we
                create experiences. From the moment you arrive to the time you
                leave, every detail is designed to make your stay effortless,
                memorable, and truly special.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Complete villa privacy — no shared spaces",
                  "Spacious 6BHK with premium furnishings",
                  "Private swimming pool with serene views",
                  "Perfect for family gatherings & celebrations",
                  "Convenient location in Virar East",
                  "Dedicated support throughout your stay",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9e793e]" />
                    <p className="text-sm font-light leading-relaxed text-[#0e382b]/80 sm:text-base">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0e382b] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:bg-[#9e793e] hover:shadow-xl"
                >
                  Book Your Stay
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0e382b] bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] transition-all duration-300 hover:bg-[#0e382b] hover:text-white"
                >
                  View Gallery
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/1.jpg"
                      alt="Maya Niketan Villa - Pool area"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/5.jpg"
                      alt="Maya Niketan Villa - Living space"
                      className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/3.jpg"
                      alt="Maya Niketan Villa - Bedroom"
                      className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/7.jpg"
                      alt="Maya Niketan Villa - Exterior"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-[1px] w-10 bg-[#9e793e]/50" />
                <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#9e793e]">
                  <MapPin className="h-3.5 w-3.5" />
                  Virar East • Maharashtra
                </span>
                <span className="h-[1px] w-10 bg-[#9e793e]/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION
      ============================================ */}
      <section className="relative w-full overflow-hidden bg-[#0e382b] py-20 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ad72]/30 bg-[#d4ad72]/10 px-4 py-1.5 backdrop-blur-md">
              <Users className="h-3.5 w-3.5 text-[#d4ad72]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4ad72]">
                Be Our Guest
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl lg:text-[56px]">
              Ready to Experience
              <br />
              <span className="italic text-[#d4ad72]">Maya Niketan Villa?</span>
            </h2>

            <div className="mx-auto mt-8 h-[2px] w-20 bg-[#d4ad72]" />

            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:text-xl">
              Whether it's a peaceful staycation, a family celebration, or a
              special occasion — we'd love to welcome you to your private
              escape.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d4ad72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl sm:text-sm"
              >
                Book Your Stay
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:text-sm"
              >
                Explore the Villa
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              <a
                href="tel:+919960572239"
                className="flex items-center gap-2 text-sm font-light text-white/60 transition-colors hover:text-[#d4ad72]"
              >
                <span className="text-[#d4ad72]">📞</span>
                +91 99605 72239
              </a>

              <a
                href="mailto:info@mayaniketanvilla.com"
                className="flex items-center gap-2 text-sm font-light text-white/60 transition-colors hover:text-[#d4ad72]"
              >
                <span className="text-[#d4ad72]">✉️</span>
                info@mayaniketanvilla.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
