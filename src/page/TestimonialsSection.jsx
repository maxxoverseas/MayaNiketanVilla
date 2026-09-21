import React from "react";

const TestimonialsSection = () => {
  const videos = [
    {
      title: "Experience Maya Niketan Villa",
      subtitle: "A glimpse into your private villa escape.",
      url: "images/videos/location-video.mp4",
    },
    {
      title: "Poolside Moments",
      subtitle: "Slow afternoons and time well spent together.",
      url: "images/videos/location-video.mp4",
    },
    {
      title: "Family Time at the Villa",
      subtitle: "More space for the people who matter most.",
      url: "images/videos/location-video.mp4",
    },
    {
      title: "Celebrate Your Moments",
      subtitle: "A private setting for memorable occasions.",
      url: "images/videos/location-video.mp4",
    },
  ];

  return (
    <section className="w-full bg-[#f8f8f6]">
      <div className="mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8e8661] sm:text-sm">
            The Maya Niketan Experience
          </p>
          <h2 className="font-serif text-3xl italic leading-tight text-[#b9925f] md:text-4xl lg:text-[42px]">
            Moments Made to Be Remembered
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-20 bg-[#b9925f]" />
          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-[1.85] text-[#5e655e] md:text-lg">
            From relaxed poolside time and family getaways to celebrations and
            quiet moments together, Maya Niketan Villa gives you the privacy and
            space to enjoy every stay your way.
          </p>
        </div>

        <div className="relative w-full overflow-hidden bg-black shadow-2xl">
          <div className="aspect-[16/7] w-full">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src={videos[0].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-black/5" />
          <div className="pointer-events-none absolute left-0 top-0 bg-[#263c2a]/90 px-5 py-3 backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
              Inside Maya Niketan
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 border-b border-[#b9925f]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-xl italic text-[#3f493f] md:text-2xl">
              {videos[0].title}
            </p>
            <p className="mt-2 max-w-2xl text-sm font-light leading-6 text-[#7a7e78] md:text-base">
              Discover the spaces, atmosphere and moments that make Maya Niketan
              Villa a private getaway for staycations, holidays and
              celebrations.
            </p>
          </div>
          <div className="shrink-0 text-left sm:text-right">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#9a9d96] sm:text-xs">
              6BHK Luxury Pool Villa
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#b9925f] sm:text-xs">
              Virar East • Maharashtra
            </p>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-3">
          {videos.slice(1).map((video, index) => (
            <div key={video.title} className="group">
              <div className="relative aspect-video overflow-hidden bg-black shadow-lg">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="pointer-events-none absolute left-3 top-3 bg-[#263c2a]/85 px-3 py-2 backdrop-blur-sm">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#d4ad72]">
                    Maya Niketan Villa
                  </p>
                </div>
                <div className="pointer-events-none absolute right-3 top-3 bg-black/35 px-3 py-2 backdrop-blur-sm">
                  <p className="text-[9px] tracking-[0.16em] text-white/80">
                    {String(index + 2).padStart(2, "0")}
                  </p>
                </div>
              </div>
              <div className="pt-5">
                <p className="font-serif text-lg italic text-[#3f493f] transition-colors duration-300 group-hover:text-[#b9925f] md:text-xl">
                  {video.title}
                </p>
                <p className="mt-2 text-sm font-light leading-6 text-[#7a7e78]">
                  {video.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="font-serif text-xl italic leading-relaxed text-[#b9925f] md:text-2xl">
            Come for the stay. Leave with the memories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
