// src/pages/LocationSection.jsx
import React, { useEffect, useRef, useState } from "react";
import video1 from "../../public/images/videos/location-video.mp4";

const LocationSection = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const googleMapsLink =
    "https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk!3m5!1s0x3be7a9bf8090607b:0x128c7626e4b677db!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay blocked:", error);
      }
    };

    playVideo();

    const handleVisibility = () => {
      if (!document.hidden) playVideo();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

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

  const handleCanPlay = async () => {
    setVideoLoaded(true);
    setVideoError(false);
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = true;
      if (video.paused) await video.play();
    } catch (error) {
      console.log("Video play prevented:", error);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  const replayVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      setVideoError(false);
      video.currentTime = 0;
      video.muted = true;
      video.load();
      await video.play();
      setVideoLoaded(true);
    } catch (error) {
      console.error("Could not play video:", error);
    }
  };

  const locationHighlights = [
    { icon: "🛕", label: "Nearby Landmark", name: "Mahakali Temple" },
    { icon: "🥛", label: "Nearby Landmark", name: "Amul Virar Dairy" },
    { icon: "🛣️", label: "Road Access", name: "Kaner–Dahisar Road" },
    { icon: "📍", label: "Location", name: "Virar East" },
    { icon: "🌿", label: "Region", name: "Vasai–Virar" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f8f6f1] py-20 text-[#0e382b] md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* HEADER */}
        <div
          className={`mx-auto mb-14 max-w-4xl text-center transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#0e382b] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
              Find Your Escape
            </span>
          </div>

          <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl md:text-5xl lg:text-[50px]">
            Peacefully Located{" "}
            <span className="italic text-[#9e793e]">in Virar East</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#9e793e]" />

          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-relaxed text-[#0e382b]/80 md:text-lg">
            A private setting that's close enough to reach and peaceful enough
            to truly escape. Conveniently located along Kaner–Dahisar Road in
            the Vasai–Virar region.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* LEFT VIDEO */}
          <div
            className={`w-full transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#0e382b]/10 bg-stone-100 shadow-2xl transition-all duration-500 hover:border-[#9e793e]/40">
              <video
                ref={videoRef}
                src={video1}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  videoLoaded ? "opacity-100" : "opacity-0"
                }`}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={handleCanPlay}
                onPlaying={() => setVideoLoaded(true)}
                onError={handleVideoError}
              />

              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#f8f6f1]">
                  <div className="text-center">
                    <div className="mx-auto h-9 w-9 animate-spin rounded-full border-2 border-[#0e382b]/20 border-t-[#0e382b]" />
                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0e382b]/60">
                      Loading...
                    </p>
                  </div>
                </div>
              )}

              {videoError && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#f8f6f1] px-6">
                  <div className="max-w-sm text-center">
                    <p className="font-serif text-xl italic text-[#9e793e]">
                      Maya Niketan Villa
                    </p>
                    <p className="mt-2 text-sm text-[#0e382b]/60">
                      Video could not be loaded.
                    </p>
                    <button
                      type="button"
                      onClick={replayVideo}
                      className="mt-6 rounded-md border border-[#0e382b] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0e382b] transition-all duration-300 hover:bg-[#0e382b] hover:text-white"
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              )}

              {!videoError && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-[#0e382b]/10 transition-opacity duration-300 group-hover:bg-[#0e382b]/5" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0e382b]/80 via-[#0e382b]/30 to-transparent" />
                  <div className="pointer-events-none absolute bottom-6 left-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#d4ad72]">
                      Maya Niketan Villa
                    </p>
                    <p className="mt-1 font-serif text-lg italic text-white sm:text-xl">
                      Your getaway in Virar East.
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="mt-5 flex flex-col gap-2 border-t border-[#0e382b]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-base italic text-[#9e793e]">
                Close enough to reach. Peaceful enough to escape.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`w-full transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: inView ? "200ms" : "0ms" }}
          >
            <p className="text-base font-light leading-relaxed text-[#0e382b]/80 sm:text-lg">
              Located on Kaner–Dahisar Road near Amul Virar Dairy and Mahakali
              Temple, the villa combines a relaxed private setting with
              convenient road access in the Vasai–Virar region.
            </p>

            {/* LOCATION HIGHLIGHTS GRID */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {locationHighlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center rounded-xl border border-[#0e382b]/10 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0e382b]/30 hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#0e382b]/10 bg-[#0e382b]/5 text-xl transition-colors duration-300 group-hover:border-[#0e382b] group-hover:bg-[#0e382b] group-hover:text-white sm:h-14 sm:w-14 sm:text-2xl">
                    {item.icon}
                  </div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9e793e] sm:text-[10px]">
                    {item.label}
                  </p>
                  <h4 className="mt-1 font-serif text-sm font-medium text-[#0e382b] sm:text-base">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* ADDRESS CARD */}
            <div className="mt-8 rounded-xl border-l-4 border-[#9e793e] bg-white p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0e382b]/50">
                Full Address
              </p>
              <p className="mt-2 text-sm font-light leading-relaxed text-[#0e382b]/80">
                Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
                Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#0e382b] bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] transition-all duration-300 hover:bg-[#0e382b] hover:text-white hover:shadow-lg sm:w-auto"
              >
                Get Directions
                <span className="text-sm">↗</span>
              </a>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#0e382b] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:bg-[#9e793e] sm:w-auto"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>

        {/* MAP EMBED */}
        <div
          className={`relative mt-16 overflow-hidden rounded-2xl border border-[#0e382b]/10 bg-white shadow-xl transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: inView ? "400ms" : "0ms" }}
        >
          <iframe
            title="Maya Niketan Villa Location"
            src="https://www.google.com/maps?q=19.4898127,72.8642998&z=16&output=embed"
            className="h-[380px] w-full border-0 sm:h-[420px] md:h-[480px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-5 right-5 hidden rounded-lg border border-[#0e382b]/10 bg-[#0e382b] px-4 py-2.5 shadow-md sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4ad72]">
              Virar East • Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
