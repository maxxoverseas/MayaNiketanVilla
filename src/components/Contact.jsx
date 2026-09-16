import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "2 Guests",
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
    alert("Thank you! Your enquiry has been submitted successfully.");
  };

  return (
    <main
      id="contact"
      className="w-full min-h-screen overflow-x-hidden bg-[#FAF8F5] text-slate-800 selection:bg-[#d5ae70] selection:text-slate-900"
    >
      {/* =====================================================
          HERO & CONTACT SECTION
      ===================================================== */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#bd8c50]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-slate-900/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: VILLA INFO & DETAILS */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-[#bd8c50]" />
                  <p className="font-serif text-lg italic tracking-wide text-[#bd8c50]">
                    Get In Touch
                  </p>
                </div>

                <h1 className="mt-4 font-serif text-4xl font-normal leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Plan Your Stay at
                  <span className="block italic text-[#bd8c50]">
                    Maya Niketan Villa
                  </span>
                </h1>

                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Whether you're planning a peaceful weekend retreat, family
                  gathering, or a special celebration, reach out to us and we’ll
                  customize your villa experience.
                </p>

                {/* 3D Glass Cards for Info */}
                <div className="mt-10 space-y-6">
                  {/* Card 1: Address */}
                  <div className="group relative rounded-xl border border-stone-200/80 bg-white/70 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#bd8c50]/40">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd8c50]">
                      Location & Address
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      Mahakali Temple, Amul Virar Dairy, Plot No. 114–117,
                      Kaner–Dahisar Road, Vasai-Virar, Maharashtra 401303, India
                    </p>
                  </div>

                  {/* Card 2: Property Type */}
                  <div className="group relative rounded-xl border border-stone-200/80 bg-white/70 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#bd8c50]/40">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd8c50]">
                      Property Details
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      Upcoming 6BHK Luxury Pool Villa
                    </p>
                  </div>

                  {/* Card 3: Experience */}
                  <div className="group relative rounded-xl border border-stone-200/80 bg-white/70 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#bd8c50]/40">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd8c50]">
                      Tailored Experiences
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      Staycations • Holidays • Intimate Celebrations
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-sm border border-slate-900 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white"
                >
                  View On Google Maps ➔
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: 3D ENQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl border border-stone-200/80 bg-white p-8 sm:p-10 shadow-xl backdrop-blur-xl">
                <p className="font-serif text-lg italic text-[#bd8c50]">
                  Reservations & Inquiries
                </p>

                <h2 className="mt-1 font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
                  Tell Us About Your Stay
                </h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
                    />
                  </div>

                  {/* Date & Guests */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                        Preferred Date
                      </label>
                      <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
                      >
                        <option value="2 Guests">2 Guests</option>
                        <option value="5 Guests">5 Guests</option>
                        <option value="10 Guests">10 Guests</option>
                        <option value="30 Guests">30 Guests</option>
                        <option value="50 Guests">50 Guests</option>
                        <option value="70 Guests">70 Guests</option>
                        <option value="100 Guests">100 Guests</option>
                        <option value="150 Guests">150 Guests</option>
                        <option value="200+ Guests">200+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Purpose */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Purpose of Stay
                    </label>
                    <select
                      name="purpose"
                      value={form.purpose}
                      onChange={handleChange}
                      className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
                    >
                      <option>Staycation</option>
                      <option>Family Holiday</option>
                      <option>Birthday Celebration</option>
                      <option>Anniversary</option>
                      <option>Photoshoot</option>
                      <option>Corporate Stay</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Special Requests / Notes
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell us about any specific requirements or questions..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-md border border-stone-300 bg-[#FAF8F5] p-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="h-14 w-full rounded-sm bg-slate-900 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-xl"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
