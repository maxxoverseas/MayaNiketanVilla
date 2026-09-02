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
    <main id="location" className="w-full overflow-hidden bg-[#f7f3e8]">
      {/* HERO */}
      <section className="bg-[#243a29] py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center sm:px-8 lg:px-14">
          <p className="font-serif text-lg italic text-[#d4ad72]">Location</p>

          <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
            Find Maya Niketan Villa
          </h1>

          <p className="mx-auto mt-6 max-w-[800px] text-base leading-8 text-white/65">
            A peaceful villa destination in Virar East with convenient road
            access and open surroundings.
          </p>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-[#f7f3e8] py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <iframe
              title="Maya Niketan Villa"
              src="https://www.google.com/maps?q=Maya%20Niketan%20Villa%2C%20Vasai-Virar%2C%20Maharashtra%20401303&z=16&output=embed"
              className="h-[380px] w-full border-0 md:h-[500px]"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="mt-10 text-center">
            <h2 className="font-serif text-3xl text-[#243a29]">
              Maya Niketan Villa
            </h2>

            <p className="mx-auto mt-5 max-w-[750px] text-sm leading-7 text-[#676b64] md:text-base">
              Mahakali Temple, Amul Virar Dairy, Plot No. 114–117, Kaner–Dahisar
              Road, Vasai-Virar, Maharashtra 401303, India.
            </p>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex border border-[#243a29] px-7 py-3 text-xs uppercase tracking-[0.16em] text-[#243a29] transition hover:bg-[#243a29] hover:text-white"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* NEARBY */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-14">
          <div className="text-center">
            <p className="font-serif text-lg italic text-[#b88953]">
              Around The Villa
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#243a29] md:text-4xl">
              Easy to Reach. Peaceful to Experience.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-[1px] bg-[#243a29]/10 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((item, index) => (
              <div
                key={index}
                className="bg-[#f7f3e8] p-8 transition hover:bg-[#243a29] group"
              >
                <span className="text-3xl">📍</span>

                <h3 className="mt-5 font-serif text-xl text-[#243a29] group-hover:text-[#d4ad72]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6b6e67] group-hover:text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Location;
