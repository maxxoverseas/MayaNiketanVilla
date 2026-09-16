import React from "react";

import video1 from "../../public/images/videos/location-video.mp4";
import video2 from "../../public/images/videos/location-video.mp4";
import video3 from "../../public/images/videos/location-video.mp4";
import video4 from "../../public/images/videos/location-video.mp4";

const Testimonials = () => {
  const videos = [video1, video2, video3, video4];

  const quotes = [
    {
      name: "Family Stay",
      text: "A peaceful private setting made for slowing down and spending meaningful time together.",
      author: "Priya & Family",
      rating: "★★★★★",
    },
    {
      name: "Weekend Escape",
      text: "The villa experience brings together comfort, greenery and a relaxing atmosphere.",
      author: "Rahul M.",
      rating: "★★★★★",
    },
    {
      name: "Celebration Stay",
      text: "A warm setting for intimate celebrations, family gatherings and special occasions.",
      author: "Sneha & Friends",
      rating: "★★★★★",
    },
  ];

  return (
    <main
      id="testimonials"
      className="w-full min-h-screen overflow-x-hidden bg-[#FAF8F5] text-slate-800 selection:bg-[#d5ae70] selection:text-slate-900"
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F5] text-slate-900 border-b border-stone-200/60 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-[#bd8c50]" />
            <p className="font-serif text-lg italic tracking-wide text-[#bd8c50]">
              Guest Stories & Moments
            </p>
            <span className="h-[1px] w-10 bg-[#bd8c50]" />
          </div>

          <h1 className="mt-6 font-serif text-4xl font-normal leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Stories From
            <span className="mt-2 block italic text-[#bd8c50]">
              Maya Niketan Villa
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Experiences, moments and memories from guests discovering a more
            relaxed way to stay.
          </p>
        </div>
      </section>

      {/* =====================================================
          VIDEOS SECTION
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28 border-b border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Visual Walkthroughs
            </p>
            <h2 className="mt-2 font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
              Experience the Villa Life
            </h2>
          </div>

          {/* MAIN FEATURED VIDEO */}
          <div className="relative p-2 bg-[#FAF8F5] rounded-2xl border border-stone-200/80 shadow-lg">
            <div className="overflow-hidden rounded-xl bg-slate-900 aspect-[16/8] sm:aspect-[16/7]">
              <video
                className="h-full w-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
              >
                <source src={videos[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* SMALLER VIDEO GRID */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {videos.slice(1).map((video, index) => (
              <div
                key={index}
                className="relative p-2 bg-[#FAF8F5] rounded-xl border border-stone-200/80 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="overflow-hidden rounded-lg bg-slate-900 aspect-video">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          QUOTES / REVIEWS SECTION
      ===================================================== */}
      <section className="bg-[#FAF8F5] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Guest Experiences
            </p>
            <h2 className="mt-2 font-serif text-3xl font-normal text-slate-900 sm:text-4xl lg:text-5xl">
              Words From Our Visitors
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {quotes.map((quote, index) => (
              <article
                key={index}
                className="group relative flex flex-col justify-between rounded-md border border-stone-200/80 bg-[#F3EFEA] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#bd8c50]/50 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-5xl leading-none text-[#bd8c50]">
                      “
                    </span>
                    <span className="text-xs text-[#bd8c50] tracking-widest">
                      {quote.rating}
                    </span>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-slate-600 italic">
                    {quote.text}
                  </p>
                </div>

                <div className="mt-8 border-t border-stone-300/60 pt-4">
                  <p className="font-serif text-lg font-normal text-slate-900 transition-colors duration-300 group-hover:text-[#bd8c50]">
                    {quote.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-0.5">
                    {quote.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-20 text-slate-900 lg:py-28 border-t border-stone-200/60">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-lg italic text-[#bd8c50]">
            Maya Niketan Villa
          </p>

          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Create Your Own
            <span className="block italic text-[#bd8c50]">Villa Story.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Bookings are open for staycations, weekend escapes and private
            gatherings.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-sm bg-slate-900 px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-xl"
          >
            Plan Your Stay
          </a>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
