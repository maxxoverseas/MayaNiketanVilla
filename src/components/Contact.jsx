import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Users,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Phone,
  Mail,
  User,
  Send,
  Sparkles,
  Shield,
  Clock,
  BedDouble,
  Waves,
  MapPin,
  Loader2,
  Info,
  ArrowRight,
} from "lucide-react";
import CustomDatePicker from "../components/CustomDatePicker";

const EMAILJS_SERVICE_ID = "service_82s52ru";
const EMAILJS_TEMPLATE_ID = "template_aub7pk7";
const EMAILJS_PUBLIC_KEY = "Qpq4-Y1HZCLjewHx6";
const OWNER_EMAIL = "mayaniketanvilla@gmail.com";

const Booking = () => {
  const initialFormData = {
    name: "",
    mobile: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    purpose: "Staycation",
    message: "",
    consent: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [dateError, setDateError] = useState("");
  const [dateAvailable, setDateAvailable] = useState(true);
  const [checkingDate, setCheckingDate] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const [allBookings, setAllBookings] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("maya_all_bookings");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Reload bookings (real-time sync)
  useEffect(() => {
    const loadBookings = () => {
      try {
        const stored = localStorage.getItem("maya_all_bookings");
        setAllBookings(stored ? JSON.parse(stored) : []);
      } catch {
        setAllBookings([]);
      }
    };
    const onStorage = (e) => {
      if (e.key === "maya_all_bookings") loadBookings();
    };
    window.addEventListener("storage", onStorage);
    loadBookings();
    const interval = setInterval(loadBookings, 1500);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const parseDate = (dateStr) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = parseDate(dateStr);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "short",
    });
  };

  const rangesOverlap = (start1, end1, start2, end2) => {
    const s1 = parseDate(start1).getTime();
    const e1 = parseDate(end1).getTime();
    const s2 = parseDate(start2).getTime();
    const e2 = parseDate(end2).getTime();
    return s1 <= e2 && s2 <= e1;
  };

  // ⚠️ ONLY "confirmed" bookings block the calendar.
  // Pending / draft / attempted bookings are ignored.
  const confirmedBookings = allBookings.filter(
    (b) => b.status === "confirmed" && b.checkIn && b.checkOut
  );

  const getDateStatus = (dateStr) => {
    if (dateStr < today) return "past";
    const booked = confirmedBookings.find((b) =>
      rangesOverlap(dateStr, dateStr, b.checkIn, b.checkOut)
    );
    if (booked) return "booked"; // ← red X + red bg
    return "available";
  };

  const findConflictingBooking = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return null;
    return (
      confirmedBookings.find((b) =>
        rangesOverlap(checkIn, checkOut, b.checkIn, b.checkOut)
      ) || null
    );
  };

  useEffect(() => {
    setDateError("");
    setDateAvailable(true);

    const { checkIn, checkOut } = formData;
    if (!checkIn || !checkOut) return;

    if (parseDate(checkOut) <= parseDate(checkIn)) {
      setDateError("Check-out date must be after check-in date.");
      setDateAvailable(false);
      return;
    }

    setCheckingDate(true);
    const timer = setTimeout(() => {
      const conflict = findConflictingBooking(checkIn, checkOut);
      if (conflict) {
        setDateAvailable(false);
        setDateError(
          `Not available. The villa is already booked from ${formatDate(
            conflict.checkIn
          )} to ${formatDate(conflict.checkOut)}.`
        );
      } else {
        setDateAvailable(true);
      }
      setCheckingDate(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [formData.checkIn, formData.checkOut, allBookings]);

  const showPopup = (type, title, message) =>
    setPopup({ open: true, type, title, message });
  const closePopup = () => setPopup((p) => ({ ...p, open: false }));

  const handleDateChange = (field, dateStr, status) => {
    if (status === "booked" || status === "blocked") {
      showPopup(
        "error",
        "❌ Not Available",
        "This date is already booked. Please choose a different date."
      );
      return;
    }
    if (status === "past") {
      showPopup("error", "Invalid Date", "Past dates cannot be selected.");
      return;
    }

    setFormData((prev) => {
      const updated = { ...prev, [field]: dateStr };
      if (
        field === "checkIn" &&
        updated.checkOut &&
        updated.checkOut <= dateStr
      ) {
        updated.checkOut = "";
      }
      return updated;
    });

    if (isSubmitted) setIsSubmitted(false);
    if (submitError) setSubmitError("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (isSubmitted) setIsSubmitted(false);
    if (submitError) setSubmitError("");
  };

  // ================================================
  // SUBMIT — saves booking as "pending" (admin must approve)
  // ================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!formData.consent) {
      showPopup(
        "error",
        "Consent Required",
        "Please allow us to contact you regarding your booking enquiry."
      );
      return;
    }
    if (!formData.checkIn || !formData.checkOut) {
      showPopup(
        "error",
        "Dates Missing",
        "Please select both check-in and check-out dates."
      );
      return;
    }

    // Only block if a CONFIRMED booking already exists
    const conflict = findConflictingBooking(
      formData.checkIn,
      formData.checkOut
    );
    if (conflict) {
      try {
        const stored = localStorage.getItem("maya_all_bookings");
        const list = stored ? JSON.parse(stored) : [];
        list.push({
          id: `attempt-${Date.now()}`,
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.guests,
          purpose: formData.purpose,
          message: formData.message,
          status: "attempted-unavailable",
          bookedAt: new Date().toISOString(),
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem("maya_all_bookings", JSON.stringify(list));
        setAllBookings(list);
      } catch {}

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_email: OWNER_EMAIL,
            client_name: formData.name,
            client_email: formData.email,
            client_mobile: formData.mobile,
            check_in: formatDate(formData.checkIn),
            check_out: formatDate(formData.checkOut),
            guests: formData.guests,
            purpose: formData.purpose,
            message: formData.message || "—",
            submitted_at: new Date().toLocaleString("en-IN"),
            reply_to: formData.email,
            booking_status:
              "❌ NOT AVAILABLE — Client tried to book already confirmed dates",
          },
          EMAILJS_PUBLIC_KEY
        );
      } catch (err) {
        console.error(err);
      }

      showPopup(
        "error",
        "❌ Not Available",
        `Sorry! These dates are already booked (${formatDate(
          conflict.checkIn
        )} → ${formatDate(
          conflict.checkOut
        )}). Your enquiry has been sent to the owner.`
      );
      return;
    }

    setIsSubmitting(true);

    // ⚠️ Save as "pending" — NOT confirmed yet. Admin must approve.
    const newBooking = {
      id: `client-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      purpose: formData.purpose,
      message: formData.message || "",
      status: "pending", // ← admin must approve
      bookedAt: new Date().toISOString(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const stored = localStorage.getItem("maya_all_bookings");
      const list = stored ? JSON.parse(stored) : [];
      list.push(newBooking);
      localStorage.setItem("maya_all_bookings", JSON.stringify(list));
      setAllBookings(list);
    } catch {}

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: OWNER_EMAIL,
          client_name: formData.name,
          client_email: formData.email,
          client_mobile: formData.mobile,
          check_in: formatDate(formData.checkIn),
          check_out: formatDate(formData.checkOut),
          guests: formData.guests,
          purpose: formData.purpose,
          message: formData.message || "—",
          submitted_at: new Date().toLocaleString("en-IN"),
          reply_to: formData.email,
          booking_status: "⏳ NEW BOOKING ENQUIRY — Pending Admin Confirmation",
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData(initialFormData);
      showPopup(
        "success",
        "Enquiry Sent Successfully! ✅",
        `Your booking enquiry has been sent to ${OWNER_EMAIL}. Our team will confirm shortly.`
      );
      window.scrollTo({ top: 300, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      setSubmitError(
        "Failed to send. Please try again or email " + OWNER_EMAIL
      );
      showPopup(
        "error",
        "Something Went Wrong",
        "Failed to send your booking. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ⚠️ Show booked dates ONLY if there is at least one admin-confirmed booking
  const upcomingBookings = confirmedBookings
    .filter((b) => parseDate(b.checkOut) >= new Date())
    .sort((a, b) => parseDate(a.checkIn) - parseDate(b.checkIn))
    .slice(0, 6);

  return (
    <div className="w-full overflow-x-hidden bg-[#f8f6f1]">
      {/* POPUP */}
      <AnimatePresence>
        {popup.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${
                    popup.type === "success" ? "bg-emerald-100" : "bg-red-100"
                  }`}
                >
                  {popup.type === "success" ? (
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-600" />
                  )}
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#122216] sm:text-2xl">
                  {popup.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {popup.message}
                </p>
                <button
                  type="button"
                  onClick={closePopup}
                  className="mt-6 w-full rounded-xl bg-[#122216] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b88e4c] hover:text-[#122216]"
                >
                  OK, Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative w-full overflow-hidden bg-[#f8f6f1] py-16 md:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* LEFT PANEL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:sticky lg:top-28 lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#9e793e]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
                  Why Book With Us
                </span>
              </div>
              <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl lg:text-[42px]">
                A Seamless Booking{" "}
                <span className="italic text-[#9e793e]">Experience</span>
              </h2>
              <div className="mt-6 h-[2px] w-16 bg-[#9e793e]" />
              <p className="mt-8 text-base font-light leading-relaxed text-[#0e382b]/70 sm:text-lg">
                Real-time date availability, instant enquiry delivery, and
                personal confirmation from our team.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Live Availability",
                    text: "See which dates are booked in real-time",
                  },
                  {
                    icon: Clock,
                    title: "Quick Response",
                    text: "Our team confirms within hours",
                  },
                  {
                    icon: CheckCircle2,
                    title: "No Hidden Charges",
                    text: "Transparent pricing on confirmation",
                  },
                  {
                    icon: Phone,
                    title: "Personal Support",
                    // text: "WhatsApp & call assistance available",
                    text: "+91 9373219602 , 8793900165",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start gap-4 rounded-xl border border-[#0e382b]/10 bg-white/70 p-4 backdrop-blur-sm"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0e382b]/5">
                        <Icon className="h-5 w-5 text-[#0e382b]" />
                      </div>
                      <div>
                        <p className="font-serif text-base font-medium text-[#0e382b] sm:text-lg">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-xs font-light text-[#0e382b]/60 sm:text-sm">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 grid grid-cols-3 divide-x divide-[#0e382b]/10 rounded-2xl border border-[#0e382b]/10 bg-white/70 p-4 backdrop-blur-sm">
                <div className="flex flex-col items-center p-2 text-center">
                  <BedDouble className="mb-1 h-5 w-5 text-[#9e793e]" />
                  <p className="font-serif text-lg font-medium text-[#0e382b]">
                    6BHK
                  </p>
                  <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
                    Private Villa
                  </p>
                </div>
                <div className="flex flex-col items-center p-2 text-center">
                  <Waves className="mb-1 h-5 w-5 text-[#9e793e]" />
                  <p className="font-serif text-lg font-medium text-[#0e382b]">
                    Pool
                  </p>
                  <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
                    Private
                  </p>
                </div>
                <div className="flex flex-col items-center p-2 text-center">
                  <MapPin className="mb-1 h-5 w-5 text-[#9e793e]" />
                  <p className="font-serif text-lg font-medium text-[#0e382b]">
                    Virar East
                  </p>
                  <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
                    Maharashtra
                  </p>
                </div>
              </div>

              {/* ⚠️ "Currently Booked Dates" — ONLY renders if admin has confirmed at least one booking */}
              {upcomingBookings.length > 0 && (
                <div className="mt-8 rounded-2xl border border-[#d4ad72]/30 bg-[#d4ad72]/5 p-5">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#9e793e]" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
                      Currently Booked Dates
                    </p>
                  </div>
                  <div className="mt-3 space-y-2">
                    {upcomingBookings.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 text-xs"
                      >
                        <span className="font-light text-[#0e382b]/70">
                          {formatDate(b.checkIn)} → {formatDate(b.checkOut)}
                        </span>
                        <span className="rounded-full bg-[#9e793e]/15 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-[#9e793e]">
                          Booked
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="w-full lg:col-span-7"
            >
              <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
                    Booking Enquiry
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#122216] sm:text-3xl">
                    Tell Us About Your Stay
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    All fields marked with * are required. We'll confirm within
                    hours.
                  </p>
                </div>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-50"
                    >
                      <div className="flex gap-3 p-5">
                        <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
                        <div>
                          <h4 className="font-serif text-lg font-semibold text-emerald-900">
                            Booking Request Sent Successfully!
                          </h4>
                          <p className="mt-1 text-sm text-emerald-700">
                            Your enquiry has been sent to{" "}
                            <span className="font-medium">{OWNER_EMAIL}</span>.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      className="overflow-hidden rounded-2xl border border-red-500/30 bg-red-50"
                    >
                      <div className="flex gap-3 p-5">
                        <XCircle className="h-6 w-6 shrink-0 text-red-600" />
                        <div>
                          <h4 className="font-serif text-lg font-semibold text-red-900">
                            Something Went Wrong
                          </h4>
                          <p className="mt-1 text-sm text-red-700">
                            {submitError}
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
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                        />
                      </div>
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
                          placeholder="+91 9373219602"
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
                        placeholder="your@email.com"
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <CustomDatePicker
                      id="checkIn"
                      label="Check-In Date"
                      value={formData.checkIn}
                      onChange={(ds, status) =>
                        handleDateChange("checkIn", ds, status)
                      }
                      minDate={today}
                      getDateStatus={getDateStatus}
                      placeholder="dd-mm-yyyy"
                      required
                    />
                    <CustomDatePicker
                      id="checkOut"
                      label="Check-Out Date"
                      value={formData.checkOut}
                      onChange={(ds, status) =>
                        handleDateChange("checkOut", ds, status)
                      }
                      minDate={formData.checkIn || today}
                      getDateStatus={getDateStatus}
                      placeholder="dd-mm-yyyy"
                      required
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {checkingDate && (
                      <motion.div
                        key="checking"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-50 p-4"
                      >
                        <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                        <p className="text-sm font-medium text-blue-800">
                          Checking availability...
                        </p>
                      </motion.div>
                    )}
                    {!checkingDate && dateError && !dateAvailable && (
                      <motion.div
                        key="unavailable"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex gap-3 rounded-xl border border-red-500/30 bg-red-50 p-4"
                      >
                        <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                        <div>
                          <p className="text-sm font-bold text-red-900">
                            Not Available
                          </p>
                          <p className="mt-1 text-sm text-red-700">
                            {dateError}
                          </p>
                        </div>
                      </motion.div>
                    )}
                    {!checkingDate &&
                      !dateError &&
                      dateAvailable &&
                      formData.checkIn &&
                      formData.checkOut && (
                        <motion.div
                          key="available"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex gap-3 rounded-xl border border-emerald-500/30 bg-emerald-50 p-4"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                          <div>
                            <p className="text-sm font-bold text-emerald-900">
                              Available for Booking
                            </p>
                            <p className="mt-1 text-sm text-emerald-700">
                              Great! These dates are open.
                            </p>
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="guests"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
                      >
                        Number of Guests *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                        <input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="200"
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
                        Booking For *
                      </label>
                      <select
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                      >
                        <option value="Staycation">🏖️ Staycation</option>
                        <option value="Family Holiday">
                          👨‍👩‍👧‍👦 Family Holiday
                        </option>
                        <option value="Weekend Getaway">
                          🌅 Weekend Getaway
                        </option>
                        <option value="Birthday Celebration">
                          🎂 Birthday Party
                        </option>
                        <option value="Anniversary">💑 Anniversary</option>
                        <option value="Corporate Stay">
                          🏢 Corporate Event
                        </option>
                        <option value="Photoshoot">📸 Photoshoot</option>
                        <option value="Family Function">
                          🎊 Family Function
                        </option>
                        <option value="Other">✨ Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
                    >
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about special requests, event requirements..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:bg-slate-50">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#122216] focus:ring-[#b88e4c]"
                    />
                    <span className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                      I agree to be contacted by Maya Niketan Villa via Phone,
                      WhatsApp, or Email regarding availability and pricing.
                    </span>
                  </label>

                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      isSubmitting
                        ? "cursor-not-allowed bg-slate-300 text-slate-500"
                        : "bg-[#122216] text-white shadow-lg hover:bg-[#b88e4c] hover:text-[#122216]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>
                  <p className="text-center text-[11px] leading-relaxed text-slate-400">
                    Your request will be sent to{" "}
                    <span className="font-medium text-slate-500">
                      {OWNER_EMAIL}
                    </span>
                  </p>
                </form>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href="tel:+919373219602"
                  className="group flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0e382b]">
                    <Phone className="h-5 w-5 text-[#0e382b] transition-colors duration-300 group-hover:text-[#d4ad72]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
                      Call Us
                    </p>
                    <p className="font-serif text-base text-[#0e382b]">
                      +91 9373219602
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${OWNER_EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0e382b]">
                    <Mail className="h-5 w-5 text-[#0e382b] transition-colors duration-300 group-hover:text-[#d4ad72]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
                      Email Us
                    </p>
                    <p className="font-serif text-sm text-[#0e382b] sm:text-base">
                      {OWNER_EMAIL}
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#0e382b] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-6 text-center sm:px-10 lg:px-16 xl:px-24">
          <h2 className="font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
            Have Questions Before Booking?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light text-white/60 sm:text-base">
            Reach out to us on WhatsApp for instant assistance.
          </p>
          <a
            href="https://wa.me/9373219602?text=Hi%20Maya%20Niketan%20Villa%2C%20I%20have%20a%20question%20about%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#d4ad72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] shadow-lg transition-all duration-300 hover:bg-white sm:text-sm"
          >
            Chat on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Booking;
