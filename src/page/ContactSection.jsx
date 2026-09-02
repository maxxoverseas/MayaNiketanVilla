import React, { useState } from "react";

const ContactSection = () => {
  const googleMapsLink =
    "https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk!3m5!1s0x3be7a9bf8090607b:0x128c7626e4b677db!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk";

  const initialFormData = {
    name: "",
    mobile: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    purpose: "",
    message: "",
    consent: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please allow us to contact you regarding your booking enquiry.");
      return;
    }

    /*
      IMPORTANT:
      This form currently works as a frontend booking enquiry form only.

      Connect this function to your backend, email service, CRM,
      WhatsApp API or booking system before using it for live enquiries.

      Do not show "Booking Confirmed" here unless an actual booking
      confirmation system is connected.
    */

    console.log("Maya Niketan Villa Booking Enquiry:", formData);

    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#263c2a] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* ================= LEFT SIDE ================= */}
          <div className="w-full text-center text-white lg:sticky lg:top-28 lg:text-left">
            {/* SMALL LABEL */}
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/45 sm:text-sm">
              Plan Your Stay
            </p>

            {/* TITLE */}
            <h2 className="font-serif text-3xl italic leading-tight text-[#d4ad72] sm:text-4xl lg:text-[42px]">
              Your Private Escape
              <br className="hidden sm:block" />
              Awaits
            </h2>

            <div className="mx-auto mt-6 h-[1px] w-20 bg-[#d4ad72] lg:mx-0" />

            {/* INTRO */}
            <p className="mx-auto mt-7 max-w-[650px] text-base font-light leading-[1.85] text-white/80 sm:text-lg lg:mx-0">
              Planning a staycation, family holiday or special celebration? Send
              us your booking enquiry and share your preferred dates and stay
              details for Maya Niketan Villa.
            </p>

            {/* STATUS */}
            <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-[#d4ad72]" />

              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                Now Open • Bookings Available
              </p>
            </div>

            {/* PROPERTY INFO */}
            <div className="mt-10 grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">
              <div className="py-5 text-center sm:border-r sm:border-white/10 lg:text-left">
                <p className="font-serif text-xl text-[#d4ad72]">6BHK</p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/35">
                  Private Villa
                </p>
              </div>

              <div className="py-5 text-center sm:border-r sm:border-white/10 sm:px-4 lg:text-left">
                <p className="font-serif text-xl text-[#d4ad72]">
                  Private Pool
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/35">
                  Relax & Unwind
                </p>
              </div>

              <div className="py-5 text-center sm:pl-4 lg:text-left">
                <p className="font-serif text-xl text-[#d4ad72]">Virar East</p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/35">
                  Maharashtra
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 sm:text-xs">
                Villa Address
              </p>

              <h3 className="mt-3 font-serif text-xl italic text-[#d4ad72] sm:text-2xl">
                Maya Niketan Villa
              </h3>

              <p className="mx-auto mt-4 max-w-[650px] text-sm font-light leading-7 text-white/65 sm:text-base lg:mx-0">
                Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
                Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
              </p>
            </div>

            {/* NEARBY LANDMARKS */}
            <div className="mt-7">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-xs">
                Nearby Landmarks
              </p>

              <p className="mt-2 font-serif text-base italic text-white/70 sm:text-lg">
                Mahakali Temple &nbsp; • &nbsp; Amul Virar Dairy
              </p>
            </div>

            {/* GOOGLE MAP */}
            <div className="mt-8">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  border-b
                  border-[#d4ad72]
                  pb-1.5
                  text-xs
                  uppercase
                  tracking-[0.14em]
                  text-[#d4ad72]
                  transition-colors
                  duration-300
                  hover:text-white
                  sm:text-sm
                "
              >
                Get Directions on Google Maps
                <span>↗</span>
              </a>
            </div>

            {/* EXPERIENCE LINE */}
            <div className="mt-10 border-l-0 border-[#d4ad72]/50 lg:border-l-2 lg:pl-5">
              <p className="font-serif text-lg italic leading-relaxed text-[#d4ad72] sm:text-xl">
                Stay. Relax. Celebrate. Make it yours.
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">
                Staycations • Holidays • Celebrations
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="w-full bg-[#f7f3eb] p-6 shadow-2xl sm:p-8 md:p-10 lg:p-9 xl:p-11">
            {/* FORM HEADING */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a1845d]">
                Booking Enquiry
              </p>

              <h3 className="mt-3 font-serif text-2xl italic leading-tight text-[#263c2a] sm:text-3xl">
                Plan Your Stay at Maya Niketan
              </h3>

              <div className="mt-5 h-[1px] w-14 bg-[#b9925f]" />

              <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[#70766f] sm:text-base">
                Share your preferred dates and stay details below. This form
                sends a booking enquiry and does not confirm a reservation
                automatically.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {isSubmitted && (
              <div className="mb-7 border border-[#73805d]/30 bg-[#73805d]/10 p-4">
                <p className="font-serif text-lg italic text-[#526047]">
                  Thank you for your enquiry.
                </p>

                <p className="mt-1 text-sm leading-6 text-[#697067]">
                  Your booking enquiry has been recorded on this page. Please
                  note that your stay is not confirmed until you receive a
                  separate confirmation from Maya Niketan Villa.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME + MOBILE */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#9a7c58]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="
                      h-12
                      w-full
                      border
                      border-[#d8d1c6]
                      bg-white
                      px-4
                      text-sm
                      text-[#263c2a]
                      outline-none
                      transition-colors
                      duration-300
                      placeholder:text-[#aaa9a4]
                      focus:border-[#b9925f]
                    "
                  />
                </div>

                {/* MOBILE */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#9a7c58]"
                  >
                    Mobile Number *
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Your mobile number"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className="
                      h-12
                      w-full
                      border
                      border-[#d8d1c6]
                      bg-white
                      px-4
                      text-sm
                      text-[#263c2a]
                      outline-none
                      transition-colors
                      duration-300
                      placeholder:text-[#aaa9a4]
                      focus:border-[#b9925f]
                    "
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#9a7c58]"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                  className="
                    h-12
                    w-full
                    border
                    border-[#d8d1c6]
                    bg-white
                    px-4
                    text-sm
                    text-[#263c2a]
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-[#aaa9a4]
                    focus:border-[#b9925f]
                  "
                />
              </div>

              {/* CHECK IN + CHECK OUT */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* CHECK IN */}
                <div>
                  <label
                    htmlFor="checkIn"
                    className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#9a7c58]"
                  >
                    Check-In *
                  </label>

                  <input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="
                      h-12
                      w-full
                      border
                      border-[#d8d1c6]
                      bg-white
                      px-4
                      text-sm
                      text-[#263c2a]
                      outline-none
                      transition-colors
                      duration-300
                      focus:border-[#b9925f]
                    "
                  />
                </div>

                {/* CHECK OUT */}
                <div>
                  <label
                    htmlFor="checkOut"
                    className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#9a7c58]"
                  >
                    Check-Out *
                  </label>

                  <input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    min={formData.checkIn || undefined}
                    required
                    className="
                      h-12
                      w-full
                      border
                      border-[#d8d1c6]
                      bg-white
                      px-4
                      text-sm
                      text-[#263c2a]
                      outline-none
                      transition-colors
                      duration-300
                      focus:border-[#b9925f]
                    "
                  />
                </div>
              </div>

              {/* GUESTS + PURPOSE */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* GUESTS */}
                <div>
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#9a7c58]"
                  >
                    Number of Guests *
                  </label>

                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="No. of guests"
                    inputMode="numeric"
                    required
                    className="
                      h-12
                      w-full
                      border
                      border-[#d8d1c6]
                      bg-white
                      px-4
                      text-sm
                      text-[#263c2a]
                      outline-none
                      transition-colors
                      duration-300
                      placeholder:text-[#aaa9a4]
                      focus:border-[#b9925f]
                    "
                  />
                </div>

                {/* PURPOSE */}
                <div>
                  <label
                    htmlFor="purpose"
                    className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#9a7c58]"
                  >
                    Purpose of Stay *
                  </label>

                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="
                      h-12
                      w-full
                      border
                      border-[#d8d1c6]
                      bg-white
                      px-4
                      text-sm
                      text-[#263c2a]
                      outline-none
                      transition-colors
                      duration-300
                      focus:border-[#b9925f]
                    "
                  >
                    <option value="">Select purpose</option>
                    <option value="Staycation">Staycation</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Weekend Getaway">Weekend Getaway</option>
                    <option value="Celebration">Celebration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-[0.12em] text-[#9a7c58]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us anything else about your stay..."
                  className="
                    w-full
                    resize-none
                    border
                    border-[#d8d1c6]
                    bg-white
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-[#263c2a]
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-[#aaa9a4]
                    focus:border-[#b9925f]
                  "
                />
              </div>

              {/* CONSENT */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#263c2a]"
                />

                <span className="text-xs font-light leading-6 text-[#807462] sm:text-sm">
                  I agree to be contacted by Maya Niketan Villa via phone,
                  WhatsApp, SMS or email regarding this booking enquiry,
                  availability and stay details.
                </span>
              </label>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  bg-[#314a35]
                  px-6
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#d4ad72]
                  hover:text-[#263c2a]
                "
              >
                Send Booking Enquiry
                <span className="text-base">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-white/10 pt-10 text-center">
          <p className="font-serif text-xl italic leading-relaxed text-[#d4ad72] md:text-2xl">
            Your next stay deserves a little more space, privacy and time
            together.
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/35">
            Maya Niketan Villa • 6BHK Luxury Pool Villa • Virar East
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
