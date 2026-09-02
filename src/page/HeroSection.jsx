import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[650px] w-full">
      {/* FIXED VIDEO BACKGROUND */}
      <div className="fixed inset-0 -z-10 h-screen w-full bg-black">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/4087417863/preview/stock-footage-porto-heli-peloponnese-greece-april-sophisticated-alfresco-arrangement-incorporating.webm"
            type="video/webm"
          />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white">
          <p className="font-serif text-xl italic text-[#d4ad72] md:text-2xl">
            Welcome to
          </p>

          <h1 className="mt-3 font-serif text-5xl md:text-6xl lg:text-7xl">
            Maya Niketan Villa
          </h1>

          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/90 md:text-base">
            Staycations • Holidays • Celebrations
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
