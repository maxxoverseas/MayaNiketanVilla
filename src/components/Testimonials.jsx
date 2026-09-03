// import React from "react";

// const Testimonials = () => {
//   const videos = [
//     "/images/videos/1.mp4",
//     "/images/videos/2.mp4",
//     "/images/videos/3.mp4",
//     "/images/videos/4.mp4",
//   ];

//   const quotes = [
//     {
//       name: "Family Stay",
//       text: "A peaceful private setting made for slowing down and spending meaningful time together.",
//     },
//     {
//       name: "Weekend Escape",
//       text: "The villa experience brings together comfort, greenery and a relaxing atmosphere.",
//     },
//     {
//       name: "Celebration Stay",
//       text: "A warm setting for intimate celebrations, family gatherings and special occasions.",
//     },
//   ];

//   return (
//     <main id="testimonials" className="w-full overflow-hidden bg-[#f7f3e8]">
//       {/* HERO */}
//       <section className="bg-[#243a29] py-20 text-center md:py-24">
//         <div className="mx-auto max-w-[1100px] px-6">
//           <p className="font-serif text-lg py-4 italic text-[#d4ad72]">
//             Testimonials
//           </p>

//           <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
//             Stories From Maya Niketan Villa
//           </h1>

//           <p className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-white/60 md:text-base">
//             Experiences, moments and memories from guests discovering a more
//             relaxed way to stay.
//           </p>
//         </div>
//       </section>

//       {/* VIDEOS */}
//       <section className="bg-white py-16 md:py-20">
//         <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
//           <div className="overflow-hidden rounded-2xl bg-black">
//             <video
//               className="aspect-[16/7] w-full object-cover"
//               controls
//               muted
//               playsInline
//             >
//               <source src={videos[0]} type="video/mp4" />
//             </video>
//           </div>

//           <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
//             {videos.slice(1).map((video, index) => (
//               <div key={index} className="overflow-hidden rounded-xl bg-black">
//                 <video
//                   className="aspect-video w-full object-cover"
//                   controls
//                   muted
//                   playsInline
//                 >
//                   <source src={video} type="video/mp4" />
//                 </video>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* QUOTES */}
//       <section className="bg-[#f7f3e8] py-16 md:py-20">
//         <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-14">
//           <div className="grid grid-cols-1 gap-[1px] bg-[#243a29]/10 md:grid-cols-3">
//             {quotes.map((quote, index) => (
//               <div key={index} className="bg-[#fbf8f1] p-9">
//                 <p className="font-serif text-4xl text-[#d4ad72]">“</p>

//                 <p className="mt-3 text-base leading-8 text-[#62675f]">
//                   {quote.text}
//                 </p>

//                 <p className="mt-6 font-serif text-lg italic text-[#243a29]">
//                   {quote.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Testimonials;
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
    },
    {
      name: "Weekend Escape",
      text: "The villa experience brings together comfort, greenery and a relaxing atmosphere.",
    },
    {
      name: "Celebration Stay",
      text: "A warm setting for intimate celebrations, family gatherings and special occasions.",
    },
  ];

  return (
    <main id="testimonials" className="w-full overflow-hidden bg-[#f7f3e8]">
      {/* HERO */}
      <section className="bg-[#243a29] py-20 text-center md:py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="py-4 font-serif text-lg italic text-[#d4ad72]">
            Testimonials
          </p>

          <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            Stories From Maya Niketan Villa
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-white/60 md:text-base">
            Experiences, moments and memories from guests discovering a more
            relaxed way to stay.
          </p>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
          {/* MAIN VIDEO */}
          <div className="overflow-hidden rounded-2xl bg-black">
            <video
              className="aspect-[16/7] w-full object-cover"
              controls
              muted
              playsInline
              preload="metadata"
            >
              <source src={videos[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* SMALL VIDEOS */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {videos.slice(1).map((video, index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-black">
                <video
                  className="aspect-video w-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="bg-[#f7f3e8] py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 gap-[1px] bg-[#243a29]/10 md:grid-cols-3">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-[#fbf8f1] p-9 transition-colors duration-300 hover:bg-white"
              >
                <p className="font-serif text-4xl text-[#d4ad72]">“</p>

                <p className="mt-3 text-base leading-8 text-[#62675f]">
                  {quote.text}
                </p>

                <p className="mt-6 font-serif text-lg italic text-[#243a29]">
                  {quote.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
