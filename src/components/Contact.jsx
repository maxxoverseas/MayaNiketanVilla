import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "2",
    purpose: "Staycation",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <main id="contact" className="w-full overflow-hidden bg-[#243a29]">
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-14">
          {/* LEFT */}
          <div className="text-white">
            <p className="font-serif text-lg italic text-[#d4ad72]">
              Get In Touch
            </p>

            <h1 className="mt-4 font-serif text-4xl md:text-5xl">
              Plan Your Stay at
              <span className="block italic text-[#d4ad72]">
                Maya Niketan Villa
              </span>
            </h1>

            <p className="mt-7 max-w-[600px] text-base leading-8 text-white/65">
              Whether you're planning a peaceful weekend, family holiday or a
              special celebration, send us your requirement and we'll help you
              plan your villa experience.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#d4ad72]">
                  Address
                </p>

                <p className="mt-3 max-w-[550px] text-sm leading-7 text-white/75">
                  Mahakali Temple, Amul Virar Dairy, Plot No. 114–117,
                  Kaner–Dahisar Road, Vasai-Virar, Maharashtra 401303, India
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#d4ad72]">
                  Villa
                </p>

                <p className="mt-3 text-sm text-white/75">
                  Upcoming 6BHK Luxury Pool Villa
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#d4ad72]">
                  Experience
                </p>

                <p className="mt-3 text-sm text-white/75">
                  Staycations • Holidays • Celebrations
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex border border-[#d4ad72] px-7 py-3 text-xs uppercase tracking-[0.16em] text-[#d4ad72] transition hover:bg-[#d4ad72] hover:text-[#243a29]"
            >
              View Location
            </a>
          </div>

          {/* FORM */}
          <div className="rounded-2xl bg-[#f7f3e8] p-6 sm:p-8 md:p-10">
            <p className="font-serif text-lg italic text-[#b88953]">
              Send an Enquiry
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#243a29]">
              Tell Us About Your Stay
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="h-12 w-full border border-[#d8d1c5] bg-white px-4 outline-none focus:border-[#d4ad72]"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Mobile Number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="h-12 w-full border border-[#d8d1c5] bg-white px-4 outline-none focus:border-[#d4ad72]"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="h-12 w-full border border-[#d8d1c5] bg-white px-4 outline-none focus:border-[#d4ad72]"
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="h-12 w-full border border-[#d8d1c5] bg-white px-4 outline-none focus:border-[#d4ad72]"
                />

                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="h-12 w-full border border-[#d8d1c5] bg-white px-4 outline-none focus:border-[#d4ad72]"
                >
                  <option value="2">2 Guests</option>
                  <option value="2">5 Guests</option>
                  <option value="2">10 Guests</option>
                  <option value="4">30 Guests</option>
                  <option value="6">50 Guests</option>
                  <option value="8">70 Guests</option>
                  <option value="10">100 Guests</option>
                  <option value="10">150 Guests</option>
                  <option value="10+">200+ Guests</option>
                </select>
              </div>

              <select
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                className="h-12 w-full border border-[#d8d1c5] bg-white px-4 outline-none focus:border-[#d4ad72]"
              >
                <option>Staycation</option>
                <option>Family Holiday</option>
                <option>Birthday Celebration</option>
                <option>Anniversary</option>
                <option>Photoshoot</option>
                <option>Corporate Stay</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your requirement..."
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none border border-[#d8d1c5] bg-white p-4 outline-none focus:border-[#d4ad72]"
              />

              <button
                type="submit"
                className="h-14 w-full bg-[#243a29] text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#d4ad72] hover:text-[#243a29]"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
