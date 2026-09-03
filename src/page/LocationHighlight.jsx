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

    // Try again when browser allows playback
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
   * VIDEO CAN PLAY
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

  /*
   * --------------------------------------------------
   * VIDEO PLAYING
   * --------------------------------------------------
   */
  const handlePlaying = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  /*
   * --------------------------------------------------
   * VIDEO ENDED
   *
   * loop is already enabled, but we manually restart
   * as an extra fallback.
   * --------------------------------------------------
   */
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

  /*
   * --------------------------------------------------
   * VIDEO ERROR
   * --------------------------------------------------
   */
  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);

    const video = videoRef.current;

    if (video) {
      console.error("Video error:", video.error);
      console.error("Video URL:", video.currentSrc);
    }
  };

  /*
   * --------------------------------------------------
   * MANUAL PLAY AGAIN
   * --------------------------------------------------
   */
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
    <section className="w-full bg-[#263c2a] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/50 sm:text-sm">
              Find Your Escape
            </p>

            <h2
              className="
                font-serif
                text-3xl
                italic
                leading-[1.2]
                text-[#d4ad72]
                sm:text-4xl
                lg:text-[42px]
              "
            >
              Peacefully Located
              <br className="hidden sm:block" />
              in Virar East
            </h2>

            <div className="mx-auto mt-6 h-[1px] w-20 bg-[#d4ad72] lg:mx-0" />

            <p
              className="
                mx-auto
                mt-7
                max-w-[680px]
                text-base
                font-light
                leading-[1.85]
                text-white/85
                sm:text-lg
                lg:mx-0
                lg:text-[19px]
              "
            >
              Maya Niketan Villa is a private 6BHK luxury pool villa in Virar
              East, offering a comfortable escape for weekend stays, family
              holidays and special celebrations.
            </p>

            <p
              className="
                mx-auto
                mt-5
                max-w-[680px]
                text-[15px]
                font-light
                leading-[1.85]
                text-white/65
                sm:text-base
                lg:mx-0
              "
            >
              Located on Kaner–Dahisar Road near Amul Virar Dairy and Mahakali
              Temple, the villa combines a relaxed private setting with
              convenient road access in the Vasai–Virar region.
            </p>

            {/* LOCATION DETAILS */}
            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {locationDetails.map((item, index) => (
                <div
                  key={index}
                  className="
                    border-t
                    border-[#d4ad72]/35
                    pt-4
                    text-center
                    lg:text-left
                  "
                >
                  <p className="font-serif text-lg text-[#d4ad72]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* LANDMARKS */}
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-xs">
                Nearby Landmarks
              </p>

              <p className="mt-2 font-serif text-base italic text-white/70 sm:text-lg">
                Amul Virar Dairy &nbsp; • &nbsp; Mahakali Temple
              </p>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border
                  border-[#d4ad72]
                  px-6
                  py-3.5
                  text-xs
                  uppercase
                  tracking-[0.16em]
                  text-[#d4ad72]
                  transition-all
                  duration-300
                  hover:bg-[#d4ad72]
                  hover:text-[#263c2a]
                  sm:w-auto
                "
              >
                View on Google Maps
                <span>↗</span>
              </a>

              <a
                href="/contact"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  bg-[#d4ad72]
                  px-6
                  py-3.5
                  text-xs
                  uppercase
                  tracking-[0.16em]
                  text-[#263c2a]
                  transition-all
                  duration-300
                  hover:bg-white
                  sm:w-auto
                "
              >
                Book Your Stay
              </a>
            </div>

            {/* STATUS */}
            <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-[#d4ad72]" />

              <p className="text-[10px] uppercase tracking-[0.17em] text-white/40 sm:text-xs">
                Now Open • Bookings Available
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT VIDEO
          ===================================================== */}
          <div className="w-full">
            <div
              className="
                relative
                aspect-[16/10]
                w-full
                overflow-hidden
                bg-black
                shadow-2xl
              "
            >
              {/* =================================================
                  VIDEO

                  IMPORTANT:
                  Using imported video1 directly.
                  No /videos/location-video.mp4 path.
              ================================================= */}
              <video
                ref={videoRef}
                src={video1}
                className={`
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-opacity
                  duration-700
                  ${videoLoaded ? "opacity-100" : "opacity-0"}
                `}
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

              {/* LOADING */}
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#1f3022]">
                  <div className="text-center">
                    <div
                      className="
                        mx-auto
                        h-8
                        w-8
                        animate-spin
                        rounded-full
                        border-2
                        border-white/20
                        border-t-[#d4ad72]
                      "
                    />

                    <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Loading Villa Experience
                    </p>
                  </div>
                </div>
              )}

              {/* VIDEO ERROR */}
              {videoError && (
                <div
                  className="
                    absolute
                    inset-0
                    z-20
                    flex
                    items-center
                    justify-center
                    bg-[#1f3022]
                    px-6
                  "
                >
                  <div className="max-w-sm text-center">
                    <p className="font-serif text-xl italic text-[#d4ad72]">
                      Maya Niketan Villa
                    </p>

                    <p className="mt-2 text-sm text-white/50">
                      Video could not be loaded.
                    </p>

                    <button
                      type="button"
                      onClick={replayVideo}
                      className="
                        mt-5
                        border
                        border-[#d4ad72]
                        px-5
                        py-3
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-[#d4ad72]
                        transition-all
                        duration-300
                        hover:bg-[#d4ad72]
                        hover:text-[#263c2a]
                      "
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              )}

              {/* VIDEO OVERLAY */}
              {!videoError && (
                <>
                  {/* Dark overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-black/10" />

                  {/* Bottom gradient */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-40
                      bg-gradient-to-t
                      from-black/70
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* VIDEO TEXT */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-5
                      left-5
                      sm:bottom-6
                      sm:left-6
                    "
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
                      Maya Niketan Villa
                    </p>

                    <p className="mt-1 font-serif text-lg italic text-white sm:text-xl">
                      Your getaway in Virar East.
                    </p>
                  </div>

                  {/* LOCATION BADGE */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-4
                      top-4
                      bg-[#263c2a]/80
                      px-4
                      py-2.5
                      backdrop-blur-md
                    "
                  >
                    <p className="text-[9px] uppercase tracking-[0.17em] text-[#d4ad72] sm:text-[10px]">
                      Virar East
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* VIDEO BOTTOM */}
            <div
              className="
                mt-4
                flex
                flex-col
                gap-3
                border-t
                border-white/10
                pt-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p className="font-serif text-base italic text-[#d4ad72] sm:text-lg">
                Close enough to reach. Peaceful enough to escape.
              </p>

              <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
                Virar East • Palghar • Maharashtra
              </p>
            </div>

            {/* ADDRESS */}
            <div className="mt-5 border-l-2 border-[#d4ad72]/50 pl-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
                Address
              </p>

              <p className="mt-2 max-w-[650px] text-sm font-light leading-6 text-white/60">
                Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
                Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STRIP
        ===================================================== */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            border-y
            border-white/10
            py-6
            sm:grid-cols-3
            lg:mt-16
          "
        >
          <div className="py-3 text-center sm:border-r sm:border-white/10">
            <p className="font-serif text-xl text-[#d4ad72]">Virar East</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
              Your Destination
            </p>
          </div>

          <div className="py-3 text-center sm:border-r sm:border-white/10">
            <p className="font-serif text-xl text-[#d4ad72]">Private 6BHK</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
              Luxury Pool Villa
            </p>
          </div>

          <div className="py-3 text-center">
            <p className="font-serif text-xl text-[#d4ad72]">Now Open</p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
              Bookings Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlight;
