// src/pages/BookingSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Users,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Phone,
  Mail,
  Send,
  BedDouble,
  Waves,
  Calendar,
  PartyPopper,
  Briefcase,
  Camera,
} from "lucide-react";

const BookingSection = () => {
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

  const bookingTypes = [
    { value: "Staycation", label: "Staycation", icon: "🏖️" },
    { value: "Family Holiday", label: "Family Holiday", icon: "👨‍👩‍👧‍👦" },
    { value: "Weekend Getaway", label: "Weekend Getaway", icon: "🌅" },
    { value: "Birthday Celebration", label: "Birthday Party", icon: "🎂" },
    { value: "Anniversary", label: "Anniversary", icon: "💑" },
    { value: "Corporate Stay", label: "Corporate Event", icon: "🏢" },
    { value: "Photoshoot", label: "Photoshoot", icon: "📸" },
    { value: "Family Function", label: "Family Function", icon: "🎊" },
    { value: "Other", label: "Other", icon: "✨" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please allow us to contact you regarding your booking enquiry.");
      return;
    }
    console.log("Maya Niketan Villa Booking Enquiry:", formData);
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#f4f3ef] py-16 text-slate-800 sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d4ad72]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#122216]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:sticky lg:top-28 lg:col-span-5 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#b88e4c]/30 bg-[#b88e4c]/10 px-4 py-1.5 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#a17936]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a17936]">
                Plan Your Stay
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-6 font-serif text-3xl italic leading-tight text-[#122216] sm:text-4xl lg:text-5xl"
            >
              Your Private Escape <br className="hidden sm:block" />
              <span className="not-italic text-[#b88e4c]">Awaits</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mx-auto mt-6 h-0.5 w-16 bg-[#b88e4c] lg:mx-0"
            />

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-lg text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
            >
              Planning a staycation, family holiday, celebration, or corporate
              event? Send us your enquiry with your preferred dates and we'll
              help you plan the perfect stay.
            </motion.p>

            {/* Booking Types Quick View */}
            <motion.div variants={itemVariants} className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                We Host
              </p>
              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                {bookingTypes.slice(0, 6).map((type) => (
                  <span
                    key={type.value}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    <span>{type.icon}</span>
                    {type.label}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#b88e4c]/30 bg-[#b88e4c]/10 px-3 py-1.5 text-xs font-medium text-[#a17936]">
                  + More
                </span>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-3 divide-x divide-slate-200/80 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md"
            >
              <div className="flex flex-col items-center justify-center p-2 lg:items-start">
                <BedDouble className="mb-1 h-5 w-5 text-[#b88e4c]" />
                <p className="font-serif text-lg font-bold text-[#122216]">
                  6BHK
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  Private Villa
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2 lg:items-start">
                <Waves className="mb-1 h-5 w-5 text-[#b88e4c]" />
                <p className="font-serif text-lg font-bold text-[#122216]">
                  Pool
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  Relax & Unwind
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2 lg:items-start">
                <MapPin className="mb-1 h-5 w-5 text-[#b88e4c]" />
                <p className="font-serif text-lg font-bold text-[#122216]">
                  Virar East
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  Maharashtra
                </p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants} className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Villa Address
              </p>
              <h3 className="mt-1 font-serif text-xl italic font-bold text-[#122216]">
                Maya Niketan Villa
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
                Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#122216]/10 bg-white/80 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#122216] shadow-sm transition-all hover:border-[#122216] hover:bg-[#122216] hover:text-white"
              >
                <span>Get Directions</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/60 bg-white p-6 text-slate-800 shadow-xl sm:p-10 lg:p-12">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                  Booking Enquiry
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#122216] sm:text-3xl">
                  Plan Your Stay at Maya Niketan
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Fill out the form below. Reservation requests are subject to
                  confirmation.
                </p>
              </div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-50 p-4"
                  >
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      <div>
                        <h4 className="font-semibold text-emerald-900">
                          Enquiry Received!
                        </h4>
                        <p className="mt-1 text-sm text-emerald-700">
                          Thank you! We have recorded your request. Our team
                          will contact you shortly to confirm dates.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="full name"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
                    >
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder=" you number"
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="@example.com"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="checkIn"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
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
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkOut"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
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
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="guests"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
                    >
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="e.g. 10"
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="purpose"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
                    >
                      Purpose of Stay *
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                    >
                      <option value="">Select purpose</option>
                      {bookingTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.icon} {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about special requests or event requirements..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#122216] focus:ring-[#b88e4c]"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to be contacted by Maya Niketan Villa via Phone,
                    WhatsApp, or Email regarding availability and pricing.
                  </span>
                </label>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-4 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#122216] text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#b88e4c] hover:text-[#122216]"
                >
                  <span>Send Booking Request</span>
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
