// import React from "react";

// const LocationHighlight = () => {
//   const googleMapsLink =
//     "https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk!3m5!1s0x3be7a9bf8090607b:0x128c7626e4b677db!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk";

//   const locationDetails = [
//     {
//       title: "Virar East",
//       label: "Location",
//     },
//     {
//       title: "Kaner–Dahisar Road",
//       label: "Road Access",
//     },
//     {
//       title: "Palghar",
//       label: "Maharashtra",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#263c2a] py-16 md:py-20 lg:py-24">
//       <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
//           {/* LEFT SIDE CONTENT */}
//           <div className="text-center lg:text-left">
//             {/* SMALL LABEL */}
//             <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/50 sm:text-sm">
//               Find Your Escape
//             </p>

//             {/* MAIN HEADING */}
//             <h2
//               className="
//                 font-serif
//                 text-3xl
//                 italic
//                 leading-[1.2]
//                 text-[#d4ad72]
//                 sm:text-4xl
//                 lg:text-[42px]
//               "
//             >
//               Peacefully Located
//               <br className="hidden sm:block" />
//               in Virar East
//             </h2>

//             {/* GOLD DIVIDER */}
//             <div className="mx-auto mt-6 h-[1px] w-20 bg-[#d4ad72] lg:mx-0" />

//             {/* MAIN DESCRIPTION */}
//             <p
//               className="
//                 mx-auto
//                 mt-7
//                 max-w-[680px]
//                 text-base
//                 font-light
//                 leading-[1.85]
//                 text-white/85
//                 sm:text-lg
//                 lg:mx-0
//                 lg:text-[19px]
//               "
//             >
//               Maya Niketan Villa is a private 6BHK luxury pool villa in Virar
//               East, offering a comfortable escape for weekend stays, family
//               holidays and special celebrations.
//             </p>

//             {/* SECOND DESCRIPTION */}
//             <p
//               className="
//                 mx-auto
//                 mt-5
//                 max-w-[680px]
//                 text-[15px]
//                 font-light
//                 leading-[1.85]
//                 text-white/65
//                 sm:text-base
//                 lg:mx-0
//               "
//             >
//               Located on Kaner–Dahisar Road near Amul Virar Dairy and Mahakali
//               Temple, the villa combines a relaxed private setting with
//               convenient road access in the Vasai–Virar region.
//             </p>

//             {/* LOCATION DETAILS */}
//             <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
//               {locationDetails.map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     border-t
//                     border-[#d4ad72]/35
//                     pt-4
//                     text-center
//                     lg:text-left
//                   "
//                 >
//                   <p className="font-serif text-lg text-[#d4ad72]">
//                     {item.title}
//                   </p>

//                   <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
//                     {item.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* NEARBY LANDMARKS */}
//             <div className="mt-8">
//               <p className="text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-xs">
//                 Nearby Landmarks
//               </p>

//               <p className="mt-2 font-serif text-base italic text-white/70 sm:text-lg">
//                 Amul Virar Dairy &nbsp; • &nbsp; Mahakali Temple
//               </p>
//             </div>

//             {/* CTA BUTTONS */}
//             <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
//               {/* GOOGLE MAPS */}
//               <a
//                 href={googleMapsLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   inline-flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   border
//                   border-[#d4ad72]
//                   px-6
//                   py-3.5
//                   text-xs
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#d4ad72]
//                   transition-all
//                   duration-300
//                   hover:bg-[#d4ad72]
//                   hover:text-[#263c2a]
//                   sm:w-auto
//                 "
//               >
//                 View on Google Maps
//                 <span>↗</span>
//               </a>

//               {/* BOOK NOW */}
//               <a
//                 href="/contact"
//                 className="
//                   inline-flex
//                   w-full
//                   items-center
//                   justify-center
//                   bg-[#d4ad72]
//                   px-6
//                   py-3.5
//                   text-xs
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#263c2a]
//                   transition-all
//                   duration-300
//                   hover:bg-white
//                   sm:w-auto
//                 "
//               >
//                 Book Your Stay
//               </a>
//             </div>

//             {/* BOOKING STATUS */}
//             <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
//               <span className="h-2 w-2 rounded-full bg-[#d4ad72]" />

//               <p className="text-[10px] uppercase tracking-[0.17em] text-white/40 sm:text-xs">
//                 Now Open • Bookings Available
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE VIDEO */}
//           <div className="w-full">
//             {/* VIDEO */}
//             <div
//               className="
//                 relative
//                 aspect-[16/10]
//                 w-full
//                 overflow-hidden
//                 bg-black
//                 shadow-2xl
//               "
//             >
//               <video
//                 className="absolute inset-0 h-full w-full object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="metadata"
//               >
//                 <source src="/videos/location-video.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>

//               {/* SOFT OVERLAY */}
//               <div className="pointer-events-none absolute inset-0 bg-black/10" />

//               {/* BOTTOM GRADIENT */}
//               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//               {/* VIDEO TEXT */}
//               <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
//                 <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
//                   Maya Niketan Villa
//                 </p>

//                 <p className="mt-1 font-serif text-lg italic text-white sm:text-xl">
//                   Your getaway in Virar East.
//                 </p>
//               </div>

//               {/* LOCATION BADGE */}
//               <div className="absolute right-4 top-4 bg-[#263c2a]/80 px-4 py-2.5 backdrop-blur-md">
//                 <p className="text-[9px] uppercase tracking-[0.17em] text-[#d4ad72] sm:text-[10px]">
//                   Virar East
//                 </p>
//               </div>
//             </div>

//             {/* VIDEO BOTTOM INFO */}
//             <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <p className="font-serif text-base italic text-[#d4ad72] sm:text-lg">
//                   Close enough to reach. Peaceful enough to escape.
//                 </p>
//               </div>

//               <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
//                 Virar East • Palghar • Maharashtra
//               </p>
//             </div>

//             {/* ADDRESS */}
//             <div className="mt-5 border-l-2 border-[#d4ad72]/50 pl-4">
//               <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
//                 Address
//               </p>

//               <p className="mt-2 max-w-[650px] text-sm font-light leading-6 text-white/60">
//                 Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
//                 Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM STRIP */}
//         <div className="mt-14 grid grid-cols-1 border-y border-white/10 py-6 sm:grid-cols-3 lg:mt-16">
//           <div className="py-3 text-center sm:border-r sm:border-white/10">
//             <p className="font-serif text-xl text-[#d4ad72]">Virar East</p>

//             <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
//               Your Destination
//             </p>
//           </div>

//           <div className="py-3 text-center sm:border-r sm:border-white/10">
//             <p className="font-serif text-xl text-[#d4ad72]">Private 6BHK</p>

//             <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
//               Luxury Pool Villa
//             </p>
//           </div>

//           <div className="py-3 text-center">
//             <p className="font-serif text-xl text-[#d4ad72]">Now Open</p>

//             <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs">
//               Bookings Available
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LocationHighlight;
import React, { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Required for browser autoplay policies
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay waiting for browser:", error);
      }
    };

    attemptPlay();
  }, []);

  const handleCanPlay = async () => {
    setVideoLoaded(true);
    setVideoError(false);

    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = true;
      await video.play();
    } catch (error) {
      console.log("Video play prevented:", error);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);

    if (videoRef.current) {
      console.error(
        "Video error:",
        videoRef.current.error,
        "Video URL:",
        videoRef.current.currentSrc
      );
    }
  };

  const replayVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.currentTime = 0;
      video.muted = true;
      await video.play();

      setVideoError(false);
      setVideoLoaded(true);
    } catch (error) {
      console.error("Could not play video:", error);
    }
  };

  return (
    <section className="w-full bg-[#263c2a] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT CONTENT */}
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
              <br className="hidden sm:block" /> in Virar East
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

          {/* RIGHT VIDEO SECTION */}
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
              {/* VIDEO */}
              <video
                ref={videoRef}
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
                poster="/images/location-video-poster.jpg"
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={handleCanPlay}
                onPlaying={() => {
                  setVideoLoaded(true);
                  setVideoError(false);
                }}
                onError={handleVideoError}
              >
                <source src="/videos/location-video.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {/* LOADING */}
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#1f3022]">
                  <div className="text-center">
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#d4ad72]" />

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

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      The villa video could not be loaded.
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

              {/* OVERLAY */}
              {!videoError && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-black/10" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* VIDEO TEXT */}
                  <div className="pointer-events-none absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4ad72] sm:text-xs">
                      Maya Niketan Villa
                    </p>

                    <p className="mt-1 font-serif text-lg italic text-white sm:text-xl">
                      Your getaway in Virar East.
                    </p>
                  </div>

                  {/* LOCATION BADGE */}
                  <div className="pointer-events-none absolute right-4 top-4 bg-[#263c2a]/80 px-4 py-2.5 backdrop-blur-md">
                    <p className="text-[9px] uppercase tracking-[0.17em] text-[#d4ad72] sm:text-[10px]">
                      Virar East
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* VIDEO BOTTOM */}
            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
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

        {/* BOTTOM STRIP */}
        <div className="mt-14 grid grid-cols-1 border-y border-white/10 py-6 sm:grid-cols-3 lg:mt-16">
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
