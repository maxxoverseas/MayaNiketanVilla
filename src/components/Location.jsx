import React from "react";

const Location = () => {
  const googleMapsLink =
    "https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk";

  const nearby = [
    {
      title: "Mahakali Temple",
      text: "A recognizable landmark close to the villa location.",
    },
    {
      title: "Amul Virar Dairy",
      text: "Located near the villa and useful as a local navigation point.",
    },
    {
      title: "Kaner–Dahisar Road",
      text: "Provides convenient road access toward the villa.",
    },
    {
      title: "Virar East",
      text: "A quieter side of Virar surrounded by open landscapes.",
    },
  ];

  return (
    <main
      id="location"
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
              Location & Navigation
            </p>
            <span className="h-[1px] w-10 bg-[#bd8c50]" />
          </div>

          <h1 className="mt-6 font-serif text-4xl font-normal leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Find Maya Niketan
            <span className="mt-2 block italic text-[#bd8c50]">Villa</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A peaceful villa destination in Virar East with convenient road
            access and open surroundings.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAP & ADDRESS SECTION
      ===================================================== */}
      <section className="bg-[#FAF8F5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* MAP IFRAME CONTAINER */}
          <div className="relative p-2 bg-white rounded-xl border border-stone-200/80 shadow-lg">
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="Maya Niketan Villa Location Map"
                src="https://www.google.com/maps?q=Maya%20Niketan%20Villa%2C%20Vasai-Virar%2C%20Maharashtra%20401303&z=16&output=embed"
                className="h-[400px] w-full border-0 md:h-[520px]"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* ADDRESS DETAILS */}
          <div className="mt-12 text-center">
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Destination Details
            </p>

            <h2 className="mt-2 font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
              Maya Niketan Villa
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Mahakali Temple, Amul Virar Dairy, Plot No. 114–117, Kaner–Dahisar
              Road, Vasai-Virar, Maharashtra 401303, India.
            </p>

            <div className="mt-8">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-slate-900 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-lg"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEARBY LANDMARKS
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28 border-t border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <p className="font-serif text-lg italic text-[#bd8c50]">
              Around The Villa
            </p>

            <h2 className="mt-3 font-serif text-3xl font-normal text-slate-900 sm:text-4xl lg:text-5xl">
              Easy to Reach. Peaceful to Experience.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-md border border-stone-200/80 bg-[#FAF8F5] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#bd8c50]/50 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <span className="text-3xl">📍</span>

                  <h3 className="mt-6 font-serif text-2xl font-normal text-slate-800 transition-colors duration-300 group-hover:text-[#bd8c50]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Location;
