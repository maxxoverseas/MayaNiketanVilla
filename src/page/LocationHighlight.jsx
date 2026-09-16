import React, { useEffect, useRef, useState } from "react";
import video1 from "../../public/images/videos/location-video.mp4";

const LocationHighlight = () => {
  const videoRef = useRef(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const googleMapsLink =
    "https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk!3m5!1s0x3be7a9bf8090607b:0x128c7626e4b677db!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk";

  const locationDetails = [
    {
      title: "Virar East",
      label: "Location",
    },
    {
      title: "Kaner–Dahisar Road",
      label: "Road Access",
    },
    {
      title: "Palghar",
      label: "Maharashtra",
    },
  ];

  /*
   * --------------------------------------------------
   * VIDEO AUTOPLAY
   * --------------------------------------------------
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay blocked. Waiting for browser:", error);
      }
    };

    playVideo();

    const handleVisibility = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  /*
   * --------------------------------------------------
   * VIDEO HANDLERS
   * --------------------------------------------------
   */
  const handleCanPlay = async () => {
    setVideoLoaded(true);
    setVideoError(false);
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = true;
      if (video.paused) {
        await video.play();
      }
    } catch (error) {
      console.log("Video play prevented:", error);
    }
  };

  const handlePlaying = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoEnded = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.currentTime = 0;
      video.muted = true;
      await video.play();
    } catch (error) {
      console.log("Video replay prevented:", error);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
    const video = videoRef.current;
    if (video) {
      console.error("Video error:", video.error);
    }
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

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f6f1] py-20 text-[#0e382b] md:py-24 lg:py-28">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#0e382b] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
                Find Your Escape
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl font-light leading-[1.25] text-[#0e382b] sm:text-4xl lg:text-[46px] xl:text-[50px]">
              Peacefully Located <br className="hidden sm:block" />
              <span className="italic text-[#9e793e]">in Virar East</span>
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-16 bg-[#9e793e] lg:mx-0" />

            <p className="mx-auto mt-8 max-w-[650px] text-base font-light leading-relaxed text-[#0e382b]/80 sm:text-lg lg:mx-0 lg:text-[18px]">
              Maya Niketan Villa is a private 6BHK luxury pool villa in Virar
              East, offering a comfortable escape for weekend stays, family
              holidays, and special celebrations.
            </p>

            <p className="mx-auto mt-4 max-w-[650px] text-sm font-light leading-relaxed text-[#0e382b]/60 sm:text-base lg:mx-0">
              Located on Kaner–Dahisar Road near Amul Virar Dairy and Mahakali
              Temple, the villa combines a relaxed private setting with
              convenient road access in the Vasai–Virar region.
            </p>

            {/* LOCATION DETAILS GRID */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {locationDetails.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#0e382b]/10 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-[#9e793e]/40 hover:shadow-md lg:text-left"
                >
                  <p className="font-serif text-lg font-medium text-[#9e793e]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0e382b]/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* LANDMARKS */}
            <div className="mt-8 rounded-xl border border-[#0e382b]/10 bg-white p-4 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0e382b]/50 sm:text-xs">
                Nearby Landmarks
              </p>
              <p className="mt-1 font-serif text-base italic text-[#0e382b]/90 sm:text-lg">
                Amul Virar Dairy &nbsp; • &nbsp; Mahakali Temple
              </p>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#0e382b] bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] transition-all duration-300 hover:bg-[#0e382b] hover:text-white hover:shadow-lg sm:w-auto"
              >
                View on Google Maps
                <span className="text-sm">↗</span>
              </a>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#0e382b] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:bg-[#9e793e] hover:text-white sm:w-auto"
              >
                Book Your Stay
              </a>
            </div>

            {/* AVAILABILITY STATUS */}
            <div className="mt-8 flex items-center justify-center gap-2.5 lg:justify-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
                Now Open • Bookings Available
              </p>
            </div>
          </div>

          {/* RIGHT VIDEO CARD */}
          <div className="w-full">
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
                onPlaying={handlePlaying}
                onEnded={handleVideoEnded}
                onError={handleVideoError}
              />

              {/* LOADING STATE */}
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#f8f6f1]">
                  <div className="text-center">
                    <div className="mx-auto h-9 w-9 animate-spin rounded-full border-2 border-[#0e382b]/20 border-t-[#0e382b]" />
                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0e382b]/60">
                      Loading Villa Experience...
                    </p>
                  </div>
                </div>
              )}

              {/* VIDEO ERROR FALLBACK */}
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

              {/* OVERLAYS & TEXT ON VIDEO */}
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

                  <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-[#0e382b]/10 bg-[#0e382b]/80 px-4 py-1.5 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#d4ad72]">
                      Virar East
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* VIDEO SUB-HEADER */}
            <div className="mt-5 flex flex-col gap-2 border-t border-[#0e382b]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-base italic text-[#9e793e]">
                Close enough to reach. Peaceful enough to escape.
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#0e382b]/50">
                Virar East • Palghar
              </p>
            </div>

            {/* ADDRESS CARD */}
            <div className="mt-5 rounded-lg border-l-2 border-[#9e793e] bg-white p-4 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0e382b]/50">
                Address
              </p>
              <p className="mt-1 text-sm font-light leading-relaxed text-[#0e382b]/80">
                Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
                Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHT STRIP */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-[#0e382b]/10 rounded-2xl border border-[#0e382b]/10 bg-white py-4 shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mt-20">
          <div className="py-4 text-center">
            <p className="font-serif text-xl font-medium text-[#0e382b]">
              Virar East
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0e382b]/50">
              Your Destination
            </p>
          </div>

          <div className="py-4 text-center">
            <p className="font-serif text-xl font-medium text-[#0e382b]">
              Private 6BHK
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0e382b]/50">
              Luxury Pool Villa
            </p>
          </div>

          <div className="py-4 text-center">
            <p className="font-serif text-xl font-medium text-[#0e382b]">
              Now Open
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0e382b]/50">
              Bookings Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlight;
