// // import React, { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import emailjs from "@emailjs/browser";
// // import {
// //   Calendar,
// //   Users,
// //   CheckCircle2,
// //   AlertCircle,
// //   XCircle,
// //   Phone,
// //   Mail,
// //   User,
// //   Send,
// //   Sparkles,
// //   Shield,
// //   Clock,
// //   BedDouble,
// //   Waves,
// //   MapPin,
// //   Loader2,
// //   Info,
// //   ArrowRight,
// // } from "lucide-react";

// // const Booking = () => {
// //   // ============================================
// //   // EMAILJS CONFIG
// //   // ============================================
// //   const EMAILJS_SERVICE_ID = "service_82s52ru";
// //   const EMAILJS_TEMPLATE_ID = "template_aub7pk7";
// //   const EMAILJS_PUBLIC_KEY = "Qpq4-Y1HZCLjewHx6";
// //   const OWNER_EMAIL = "mayaniketanvilla@gmail.com";

// //   // ============================================
// //   // STATE
// //   // ============================================
// //   const initialFormData = {
// //     name: "",
// //     mobile: "",
// //     email: "",
// //     checkIn: "",
// //     checkOut: "",
// //     guests: "2",
// //     purpose: "Staycation",
// //     message: "",
// //     consent: false,
// //   };

// //   const [formData, setFormData] = useState(initialFormData);
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitError, setSubmitError] = useState("");
// //   const [dateError, setDateError] = useState("");
// //   const [dateAvailable, setDateAvailable] = useState(true);
// //   const [checkingDate, setCheckingDate] = useState(false);

// //   // ============================================
// //   // BOOKED DATES (from localStorage)
// //   // ============================================
// //   const [bookedRanges, setBookedRanges] = useState(() => {
// //     if (typeof window === "undefined") return [];
// //     try {
// //       const stored = localStorage.getItem("maya_booked_dates");
// //       return stored ? JSON.parse(stored) : [];
// //     } catch {
// //       return [];
// //     }
// //   });

// //   // ============================================
// //   // BLOCKED DATES (from Admin)
// //   // ============================================
// //   const [blockedRanges, setBlockedRanges] = useState(() => {
// //     if (typeof window === "undefined") return [];
// //     try {
// //       const stored = localStorage.getItem("maya_blocked_dates");
// //       return stored ? JSON.parse(stored) : [];
// //     } catch {
// //       return [];
// //     }
// //   });

// //   // ============================================
// //   // RELOAD BLOCKED DATES ON MOUNT + STORAGE CHANGE
// //   // ============================================
// //   useEffect(() => {
// //     const loadBlocked = () => {
// //       try {
// //         const stored = localStorage.getItem("maya_blocked_dates");
// //         setBlockedRanges(stored ? JSON.parse(stored) : []);
// //       } catch {
// //         setBlockedRanges([]);
// //       }
// //     };

// //     const loadBooked = () => {
// //       try {
// //         const stored = localStorage.getItem("maya_booked_dates");
// //         setBookedRanges(stored ? JSON.parse(stored) : []);
// //       } catch {
// //         setBookedRanges([]);
// //       }
// //     };

// //     // Listen for storage changes (admin panel updates)
// //     const handleStorage = (e) => {
// //       if (e.key === "maya_blocked_dates") loadBlocked();
// //       if (e.key === "maya_booked_dates") loadBooked();
// //     };

// //     window.addEventListener("storage", handleStorage);
// //     // Also reload on mount
// //     loadBlocked();
// //     loadBooked();

// //     return () => window.removeEventListener("storage", handleStorage);
// //   }, []);

// //   useEffect(() => {
// //     if (typeof window !== "undefined") {
// //       localStorage.setItem("maya_booked_dates", JSON.stringify(bookedRanges));
// //     }
// //   }, [bookedRanges]);

// //   const today = new Date().toISOString().split("T")[0];

// //   // ============================================
// //   // DATE HELPERS
// //   // ============================================
// //   const parseDate = (dateStr) => {
// //     const [y, m, d] = dateStr.split("-").map(Number);
// //     return new Date(y, m - 1, d);
// //   };

// //   const formatDate = (dateStr) => {
// //     if (!dateStr) return "";
// //     const date = parseDate(dateStr);
// //     return date.toLocaleDateString("en-IN", {
// //       day: "2-digit",
// //       month: "short",
// //       year: "numeric",
// //       weekday: "short",
// //     });
// //   };

// //   const rangesOverlap = (start1, end1, start2, end2) => {
// //     const s1 = parseDate(start1).getTime();
// //     const e1 = parseDate(end1).getTime();
// //     const s2 = parseDate(start2).getTime();
// //     const e2 = parseDate(end2).getTime();
// //     return s1 <= e2 && s2 <= e1;
// //   };

// //   // ============================================
// //   // FIND CONFLICTING BOOKING OR BLOCK
// //   // ============================================
// //   const findConflictingBooking = (checkIn, checkOut) => {
// //     if (!checkIn || !checkOut) return null;

// //     // Check booked ranges first
// //     const bookedConflict = bookedRanges.find((booking) =>
// //       rangesOverlap(checkIn, checkOut, booking.checkIn, booking.checkOut)
// //     );
// //     if (bookedConflict) return { ...bookedConflict, isBlocked: false };

// //     // Check blocked ranges
// //     const blockedConflict = blockedRanges.find((block) =>
// //       rangesOverlap(checkIn, checkOut, block.checkIn, block.checkOut)
// //     );
// //     if (blockedConflict) return { ...blockedConflict, isBlocked: true };

// //     return null;
// //   };

// //   // ============================================
// //   // DATE AVAILABILITY CHECK
// //   // ============================================
// //   useEffect(() => {
// //     setDateError("");
// //     setDateAvailable(true);

// //     const { checkIn, checkOut } = formData;

// //     if (!checkIn || !checkOut) return;

// //     if (parseDate(checkOut) <= parseDate(checkIn)) {
// //       setDateError("Check-out date must be after check-in date.");
// //       setDateAvailable(false);
// //       return;
// //     }

// //     setCheckingDate(true);

// //     const timer = setTimeout(() => {
// //       const conflicting = findConflictingBooking(checkIn, checkOut);
// //       if (conflicting) {
// //         setDateAvailable(false);
// //         if (conflicting.isBlocked) {
// //           setDateError(
// //             "These dates are currently unavailable. Please choose different dates."
// //           );
// //         } else {
// //           setDateError(
// //             `These dates are not available. The villa is already booked from ${formatDate(
// //               conflicting.checkIn
// //             )} to ${formatDate(
// //               conflicting.checkOut
// //             )}. Please choose different dates.`
// //           );
// //         }
// //       } else {
// //         setDateAvailable(true);
// //       }
// //       setCheckingDate(false);
// //     }, 400);

// //     return () => clearTimeout(timer);
// //   }, [formData.checkIn, formData.checkOut, bookedRanges, blockedRanges]);

// //   // ============================================
// //   // HANDLERS
// //   // ============================================
// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //     if (isSubmitted) setIsSubmitted(false);
// //     if (submitError) setSubmitError("");
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitError("");

// //     if (!formData.consent) {
// //       alert("Please allow us to contact you regarding your booking enquiry.");
// //       return;
// //     }

// //     if (!dateAvailable || dateError) {
// //       alert("Please select available dates before submitting.");
// //       return;
// //     }

// //     const conflict = findConflictingBooking(
// //       formData.checkIn,
// //       formData.checkOut
// //     );
// //     if (conflict) {
// //       alert(
// //         conflict.isBlocked
// //           ? "Sorry! These dates are currently unavailable. Please choose different dates."
// //           : `Sorry! These dates were just booked. Villa is unavailable from ${formatDate(
// //               conflict.checkIn
// //             )} to ${formatDate(conflict.checkOut)}.`
// //       );
// //       // Refresh from storage
// //       const storedBooked = localStorage.getItem("maya_booked_dates");
// //       const storedBlocked = localStorage.getItem("maya_blocked_dates");
// //       if (storedBooked) setBookedRanges(JSON.parse(storedBooked));
// //       if (storedBlocked) setBlockedRanges(JSON.parse(storedBlocked));
// //       return;
// //     }

// //     setIsSubmitting(true);

// //     try {
// //       const templateParams = {
// //         to_email: OWNER_EMAIL,
// //         client_name: formData.name,
// //         client_email: formData.email,
// //         client_mobile: formData.mobile,
// //         check_in: formatDate(formData.checkIn),
// //         check_out: formatDate(formData.checkOut),
// //         guests: formData.guests,
// //         purpose: formData.purpose,
// //         message: formData.message || "No additional details provided.",
// //         submitted_at: new Date().toLocaleString("en-IN"),
// //         reply_to: formData.email,
// //       };

// //       await emailjs.send(
// //         EMAILJS_SERVICE_ID,
// //         EMAILJS_TEMPLATE_ID,
// //         templateParams,
// //         EMAILJS_PUBLIC_KEY
// //       );

// //       const newBooking = {
// //         checkIn: formData.checkIn,
// //         checkOut: formData.checkOut,
// //         name: formData.name,
// //         mobile: formData.mobile,
// //         email: formData.email,
// //         guests: formData.guests,
// //         purpose: formData.purpose,
// //         bookedAt: new Date().toISOString(),
// //       };

// //       setBookedRanges((prev) => [...prev, newBooking]);
// //       setIsSubmitted(true);
// //       setFormData(initialFormData);

// //       window.scrollTo({ top: 300, behavior: "smooth" });
// //     } catch (error) {
// //       console.error("EmailJS Error:", error);
// //       setSubmitError(
// //         "Failed to send your booking. Please try again or contact us at " +
// //           OWNER_EMAIL
// //       );
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const upcomingBookings = bookedRanges
// //     .filter((b) => parseDate(b.checkOut) >= new Date())
// //     .sort((a, b) => parseDate(a.checkIn) - parseDate(b.checkIn))
// //     .slice(0, 5);

// //   // ============================================
// //   // RENDER
// //   // ============================================
// //   return (
// //     <div className="w-full overflow-x-hidden bg-[#f8f6f1]">
// //       {/* HERO */}
// //       {/* <section className="relative w-full overflow-hidden bg-[#0e382b] pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
// //         <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
// //           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
// //         </div>
// //         <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/10 blur-[120px]" />
// //         <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#d4ad72]/5 blur-[120px]" />

// //         <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
// //             className="mx-auto max-w-4xl text-center"
// //           >
// //             <div className="inline-flex items-center gap-2 rounded-full border border-[#d4ad72]/30 bg-[#d4ad72]/10 px-4 py-1.5 backdrop-blur-md">
// //               <Calendar className="h-3.5 w-3.5 text-[#d4ad72]" />
// //               <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4ad72]">
// //                 Reserve Your Dates
// //               </span>
// //             </div>

// //             <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
// //               Book Your
// //               <br />
// //               <span className="italic text-[#d4ad72]">Private Escape</span>
// //             </h1>

// //             <div className="mx-auto mt-8 h-[2px] w-20 bg-[#d4ad72]" />

// //             <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:text-xl">
// //               Select your dates, check real-time availability, and send your
// //               booking request in just a few clicks.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section> */}

// //       {/* MAIN */}
// //       <section className="relative w-full overflow-hidden bg-[#f8f6f1] py-16 md:py-20 lg:py-24">
// //         <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
// //         <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/10 blur-[120px]" />

// //         <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
// //           <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
// //             {/* LEFT INFO PANEL */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true, margin: "-100px" }}
// //               transition={{ duration: 0.7 }}
// //               className="w-full lg:sticky lg:top-28 lg:col-span-5"
// //             >
// //               <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
// //                 <Sparkles className="h-3.5 w-3.5 text-[#9e793e]" />
// //                 <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
// //                   Why Book With Us
// //                 </span>
// //               </div>

// //               <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl lg:text-[42px]">
// //                 A Seamless Booking{" "}
// //                 <span className="italic text-[#9e793e]">Experience</span>
// //               </h2>

// //               <div className="mt-6 h-[2px] w-16 bg-[#9e793e]" />

// //               <p className="mt-8 text-base font-light leading-relaxed text-[#0e382b]/70 sm:text-lg">
// //                 Real-time date availability, instant enquiry delivery, and
// //                 personal confirmation from our team.
// //               </p>

// //               <div className="mt-8 space-y-4">
// //                 {[
// //                   {
// //                     icon: Shield,
// //                     title: "Live Availability",
// //                     text: "See which dates are booked in real-time",
// //                   },
// //                   {
// //                     icon: Clock,
// //                     title: "Quick Response",
// //                     text: "Our team confirms within hours",
// //                   },
// //                   {
// //                     icon: CheckCircle2,
// //                     title: "No Hidden Charges",
// //                     text: "Transparent pricing on confirmation",
// //                   },
// //                   {
// //                     icon: Phone,
// //                     title: "Personal Support",
// //                     text: "WhatsApp & call assistance available",
// //                   },
// //                 ].map((item, idx) => {
// //                   const Icon = item.icon;
// //                   return (
// //                     <motion.div
// //                       key={item.title}
// //                       initial={{ opacity: 0, x: -20 }}
// //                       whileInView={{ opacity: 1, x: 0 }}
// //                       viewport={{ once: true }}
// //                       transition={{ duration: 0.4, delay: idx * 0.1 }}
// //                       className="flex items-start gap-4 rounded-xl border border-[#0e382b]/10 bg-white/70 p-4 backdrop-blur-sm"
// //                     >
// //                       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0e382b]/5">
// //                         <Icon className="h-5 w-5 text-[#0e382b]" />
// //                       </div>
// //                       <div>
// //                         <p className="font-serif text-base font-medium text-[#0e382b] sm:text-lg">
// //                           {item.title}
// //                         </p>
// //                         <p className="mt-0.5 text-xs font-light text-[#0e382b]/60 sm:text-sm">
// //                           {item.text}
// //                         </p>
// //                       </div>
// //                     </motion.div>
// //                   );
// //                 })}
// //               </div>

// //               <div className="mt-8 grid grid-cols-3 divide-x divide-[#0e382b]/10 rounded-2xl border border-[#0e382b]/10 bg-white/70 p-4 backdrop-blur-sm">
// //                 <div className="flex flex-col items-center p-2 text-center">
// //                   <BedDouble className="mb-1 h-5 w-5 text-[#9e793e]" />
// //                   <p className="font-serif text-lg font-medium text-[#0e382b]">
// //                     6BHK
// //                   </p>
// //                   <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
// //                     Private Villa
// //                   </p>
// //                 </div>
// //                 <div className="flex flex-col items-center p-2 text-center">
// //                   <Waves className="mb-1 h-5 w-5 text-[#9e793e]" />
// //                   <p className="font-serif text-lg font-medium text-[#0e382b]">
// //                     Pool
// //                   </p>
// //                   <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
// //                     Private
// //                   </p>
// //                 </div>
// //                 <div className="flex flex-col items-center p-2 text-center">
// //                   <MapPin className="mb-1 h-5 w-5 text-[#9e793e]" />
// //                   <p className="font-serif text-lg font-medium text-[#0e382b]">
// //                     Virar East
// //                   </p>
// //                   <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
// //                     Maharashtra
// //                   </p>
// //                 </div>
// //               </div>

// //               {upcomingBookings.length > 0 && (
// //                 <div className="mt-8 rounded-2xl border border-[#d4ad72]/30 bg-[#d4ad72]/5 p-5">
// //                   <div className="flex items-center gap-2">
// //                     <Info className="h-4 w-4 text-[#9e793e]" />
// //                     <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
// //                       Currently Booked Dates
// //                     </p>
// //                   </div>
// //                   <div className="mt-3 space-y-2">
// //                     {upcomingBookings.map((b, i) => (
// //                       <div
// //                         key={i}
// //                         className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 text-xs"
// //                       >
// //                         <span className="font-light text-[#0e382b]/70">
// //                           {formatDate(b.checkIn)} → {formatDate(b.checkOut)}
// //                         </span>
// //                         <span className="rounded-full bg-[#9e793e]/15 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-[#9e793e]">
// //                           Booked
// //                         </span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </motion.div>

// //             {/* RIGHT FORM */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true, margin: "-100px" }}
// //               transition={{ duration: 0.7, delay: 0.15 }}
// //               className="w-full lg:col-span-7"
// //             >
// //               <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
// //                 <div className="mb-8">
// //                   <p className="text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
// //                     Booking Enquiry
// //                   </p>
// //                   <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#122216] sm:text-3xl">
// //                     Tell Us About Your Stay
// //                   </h3>
// //                   <p className="mt-2 text-sm text-slate-500">
// //                     All fields marked with * are required. We'll confirm within
// //                     hours.
// //                   </p>
// //                 </div>

// //                 <AnimatePresence>
// //                   {isSubmitted && (
// //                     <motion.div
// //                       initial={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                       animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
// //                       exit={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                       className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-50"
// //                     >
// //                       <div className="p-5 flex gap-3">
// //                         <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
// //                         <div>
// //                           <h4 className="font-serif text-lg font-semibold text-emerald-900">
// //                             Booking Request Sent Successfully!
// //                           </h4>
// //                           <p className="mt-1 text-sm text-emerald-700">
// //                             Your booking enquiry has been sent to{" "}
// //                             <span className="font-medium">{OWNER_EMAIL}</span>.
// //                             We'll contact you shortly.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}

// //                   {submitError && (
// //                     <motion.div
// //                       initial={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                       animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
// //                       exit={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                       className="overflow-hidden rounded-2xl border border-red-500/30 bg-red-50"
// //                     >
// //                       <div className="p-5 flex gap-3">
// //                         <XCircle className="h-6 w-6 shrink-0 text-red-600" />
// //                         <div>
// //                           <h4 className="font-serif text-lg font-semibold text-red-900">
// //                             Something Went Wrong
// //                           </h4>
// //                           <p className="mt-1 text-sm text-red-700">
// //                             {submitError}
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>

// //                 <form onSubmit={handleSubmit} className="space-y-5">
// //                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
// //                     <div>
// //                       <label
// //                         htmlFor="name"
// //                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
// //                       >
// //                         Full Name *
// //                       </label>
// //                       <div className="relative">
// //                         <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
// //                         <input
// //                           id="name"
// //                           name="name"
// //                           type="text"
// //                           value={formData.name}
// //                           onChange={handleChange}
// //                           placeholder="Enter your full name"
// //                           required
// //                           className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
// //                         />
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label
// //                         htmlFor="mobile"
// //                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
// //                       >
// //                         Mobile Number *
// //                       </label>
// //                       <div className="relative">
// //                         <Phone className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
// //                         <input
// //                           id="mobile"
// //                           name="mobile"
// //                           type="tel"
// //                           value={formData.mobile}
// //                           onChange={handleChange}
// //                           placeholder="+91 98765 43210"
// //                           required
// //                           className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
// //                         />
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label
// //                       htmlFor="email"
// //                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
// //                     >
// //                       Email Address *
// //                     </label>
// //                     <div className="relative">
// //                       <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
// //                       <input
// //                         id="email"
// //                         name="email"
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         placeholder="your@email.com"
// //                         required
// //                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
// //                     <div>
// //                       <label
// //                         htmlFor="checkIn"
// //                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
// //                       >
// //                         Check-In Date *
// //                       </label>
// //                       <input
// //                         id="checkIn"
// //                         name="checkIn"
// //                         type="date"
// //                         min={today}
// //                         value={formData.checkIn}
// //                         onChange={handleChange}
// //                         required
// //                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
// //                       />
// //                     </div>

// //                     <div>
// //                       <label
// //                         htmlFor="checkOut"
// //                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
// //                       >
// //                         Check-Out Date *
// //                       </label>
// //                       <input
// //                         id="checkOut"
// //                         name="checkOut"
// //                         type="date"
// //                         min={formData.checkIn || today}
// //                         value={formData.checkOut}
// //                         onChange={handleChange}
// //                         required
// //                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
// //                       />
// //                     </div>
// //                   </div>

// //                   <AnimatePresence mode="wait">
// //                     {checkingDate && (
// //                       <motion.div
// //                         key="checking"
// //                         initial={{ opacity: 0, y: -10 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         exit={{ opacity: 0, y: -10 }}
// //                         className="flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-50 p-4"
// //                       >
// //                         <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
// //                         <p className="text-sm font-medium text-blue-800">
// //                           Checking availability for your dates...
// //                         </p>
// //                       </motion.div>
// //                     )}

// //                     {!checkingDate && dateError && !dateAvailable && (
// //                       <motion.div
// //                         key="unavailable"
// //                         initial={{ opacity: 0, y: -10 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         exit={{ opacity: 0, y: -10 }}
// //                         className="rounded-xl border border-red-500/30 bg-red-50 p-4 flex gap-3"
// //                       >
// //                         <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
// //                         <div>
// //                           <p className="text-sm font-bold text-red-900">
// //                             Not Available
// //                           </p>
// //                           <p className="mt-1 text-sm text-red-700">
// //                             {dateError}
// //                           </p>
// //                         </div>
// //                       </motion.div>
// //                     )}

// //                     {!checkingDate &&
// //                       !dateError &&
// //                       dateAvailable &&
// //                       formData.checkIn &&
// //                       formData.checkOut && (
// //                         <motion.div
// //                           key="available"
// //                           initial={{ opacity: 0, y: -10 }}
// //                           animate={{ opacity: 1, y: 0 }}
// //                           exit={{ opacity: 0, y: -10 }}
// //                           className="rounded-xl border border-emerald-500/30 bg-emerald-50 p-4 flex gap-3"
// //                         >
// //                           <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
// //                           <div>
// //                             <p className="text-sm font-bold text-emerald-900">
// //                               Available for Booking
// //                             </p>
// //                             <p className="mt-1 text-sm text-emerald-700">
// //                               Great! These dates are open.
// //                             </p>
// //                           </div>
// //                         </motion.div>
// //                       )}
// //                   </AnimatePresence>

// //                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
// //                     <div>
// //                       <label
// //                         htmlFor="guests"
// //                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
// //                       >
// //                         Number of Guests *
// //                       </label>
// //                       <div className="relative">
// //                         <Users className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
// //                         <input
// //                           id="guests"
// //                           name="guests"
// //                           type="number"
// //                           min="1"
// //                           max="200"
// //                           value={formData.guests}
// //                           onChange={handleChange}
// //                           placeholder="e.g. 10"
// //                           required
// //                           className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
// //                         />
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label
// //                         htmlFor="purpose"
// //                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
// //                       >
// //                         Purpose of Stay *
// //                       </label>
// //                       <select
// //                         id="purpose"
// //                         name="purpose"
// //                         value={formData.purpose}
// //                         onChange={handleChange}
// //                         required
// //                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
// //                       >
// //                         <option value="Staycation">🏖️ Staycation</option>
// //                         <option value="Family Holiday">
// //                           👨‍👩‍👧‍👦 Family Holiday
// //                         </option>
// //                         <option value="Weekend Getaway">
// //                           🌅 Weekend Getaway
// //                         </option>
// //                         <option value="Birthday Celebration">
// //                           🎂 Birthday Party
// //                         </option>
// //                         <option value="Anniversary">💑 Anniversary</option>
// //                         <option value="Corporate Stay">
// //                           🏢 Corporate Event
// //                         </option>
// //                         <option value="Photoshoot">📸 Photoshoot</option>
// //                         <option value="Family Function">
// //                           🎊 Family Function
// //                         </option>
// //                         <option value="Other">✨ Other</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label
// //                       htmlFor="message"
// //                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
// //                     >
// //                       Additional Details (Optional)
// //                     </label>
// //                     <textarea
// //                       id="message"
// //                       name="message"
// //                       rows="4"
// //                       value={formData.message}
// //                       onChange={handleChange}
// //                       placeholder="Tell us about special requests, event requirements..."
// //                       className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
// //                     />
// //                   </div>

// //                   <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:bg-slate-50">
// //                     <input
// //                       type="checkbox"
// //                       name="consent"
// //                       checked={formData.consent}
// //                       onChange={handleChange}
// //                       required
// //                       className="mt-1 h-4 w-4 rounded border-slate-300 text-[#122216] focus:ring-[#b88e4c]"
// //                     />
// //                     <span className="text-xs leading-relaxed text-slate-600 sm:text-sm">
// //                       I agree to be contacted by Maya Niketan Villa via Phone,
// //                       WhatsApp, or Email regarding availability and pricing.
// //                     </span>
// //                   </label>

// //                   <motion.button
// //                     whileHover={{
// //                       scale: dateAvailable && !isSubmitting ? 1.01 : 1,
// //                     }}
// //                     whileTap={{
// //                       scale: dateAvailable && !isSubmitting ? 0.98 : 1,
// //                     }}
// //                     type="submit"
// //                     disabled={isSubmitting || !dateAvailable || !!dateError}
// //                     className={`
// //                       mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-xl
// //                       text-xs font-bold uppercase tracking-widest transition-all
// //                       ${
// //                         isSubmitting || !dateAvailable || !!dateError
// //                           ? "cursor-not-allowed bg-slate-300 text-slate-500"
// //                           : "bg-[#122216] text-white shadow-lg hover:bg-[#b88e4c] hover:text-[#122216]"
// //                       }
// //                     `}
// //                   >
// //                     {isSubmitting ? (
// //                       <>
// //                         <Loader2 className="h-5 w-5 animate-spin" />
// //                         Sending Request...
// //                       </>
// //                     ) : !dateAvailable || dateError ? (
// //                       <>
// //                         <XCircle className="h-5 w-5" />
// //                         Dates Not Available
// //                       </>
// //                     ) : (
// //                       <>
// //                         Send Booking Request
// //                         <Send className="h-4 w-4" />
// //                       </>
// //                     )}
// //                   </motion.button>

// //                   <p className="text-center text-[11px] leading-relaxed text-slate-400">
// //                     Your request will be sent to{" "}
// //                     <span className="font-medium text-slate-500">
// //                       {OWNER_EMAIL}
// //                     </span>
// //                   </p>
// //                 </form>
// //               </div>

// //               <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
// //                 <a
// //                   href="tel:+917219212239"
// //                   className="group flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
// //                 >
// //                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-300 group-hover:bg-[#0e382b] group-hover:scale-110">
// //                     <Phone className="h-5 w-5 text-[#0e382b] transition-colors duration-300 group-hover:text-[#d4ad72]" />
// //                   </div>
// //                   <div>
// //                     <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
// //                       Call Us
// //                     </p>
// //                     <p className="font-serif text-base text-[#0e382b]">
// //                       +91 7219212239
// //                     </p>
// //                   </div>
// //                 </a>

// //                 <a
// //                   href={`mailto:${OWNER_EMAIL}`}
// //                   className="group flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
// //                 >
// //                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-300 group-hover:bg-[#0e382b] group-hover:scale-110">
// //                     <Mail className="h-5 w-5 text-[#0e382b] transition-colors duration-300 group-hover:text-[#d4ad72]" />
// //                   </div>
// //                   <div>
// //                     <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
// //                       Email Us
// //                     </p>
// //                     <p className="font-serif text-sm text-[#0e382b] sm:text-base">
// //                       {OWNER_EMAIL}
// //                     </p>
// //                   </div>
// //                 </a>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FINAL CTA */}
// //       <section className="relative w-full overflow-hidden bg-[#0e382b] py-16 md:py-20">
// //         <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
// //           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
// //         </div>

// //         <div className="relative mx-auto max-w-[1600px] px-6 text-center sm:px-10 lg:px-16 xl:px-24">
// //           <h2 className="font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
// //             Have Questions Before Booking?
// //           </h2>
// //           <p className="mx-auto mt-4 max-w-2xl text-sm font-light text-white/60 sm:text-base">
// //             Reach out to us on WhatsApp for instant assistance.
// //           </p>
// //           <a
// //             href="https://wa.me/7219212239?text=Hi%20Maya%20Niketan%20Villa%2C%20I%20have%20a%20question%20about%20booking."
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#d4ad72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] shadow-lg transition-all duration-300 hover:bg-white sm:text-sm"
// //           >
// //             Chat on WhatsApp
// //             <ArrowRight className="h-4 w-4" />
// //           </a>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Booking;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import {
//   Calendar,
//   Users,
//   CheckCircle2,
//   AlertCircle,
//   XCircle,
//   Phone,
//   Mail,
//   User,
//   Send,
//   Sparkles,
//   Shield,
//   Clock,
//   BedDouble,
//   Waves,
//   MapPin,
//   Loader2,
//   Info,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const Booking = () => {
//   // ============================================
//   // EMAILJS CONFIG
//   // ============================================
//   const EMAILJS_SERVICE_ID = "service_82s52ru";
//   const EMAILJS_TEMPLATE_ID = "template_aub7pk7";
//   const EMAILJS_PUBLIC_KEY = "Qpq4-Y1HZCLjewHx6";
//   const OWNER_EMAIL = "mayaniketanvilla@gmail.com";

//   // ============================================
//   // STATE
//   // ============================================
//   const initialFormData = {
//     name: "",
//     mobile: "",
//     email: "",
//     checkIn: "",
//     checkOut: "",
//     guests: "2",
//     purpose: "Staycation",
//     message: "",
//     consent: false,
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState("");
//   const [dateError, setDateError] = useState("");
//   const [dateAvailable, setDateAvailable] = useState(true);
//   const [checkingDate, setCheckingDate] = useState(false);

//   // Popup state
//   const [popup, setPopup] = useState({
//     open: false,
//     type: "success",
//     title: "",
//     message: "",
//   });

//   // Calendar state
//   const [calendarMonth, setCalendarMonth] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);

//   // ============================================
//   // ALL BOOKINGS (auto-saved)
//   // ============================================
//   const [allBookings, setAllBookings] = useState(() => {
//     if (typeof window === "undefined") return [];
//     try {
//       const stored = localStorage.getItem("maya_all_bookings");
//       return stored ? JSON.parse(stored) : [];
//     } catch {
//       return [];
//     }
//   });

//   // ============================================
//   // BLOCKED DATES (from Admin)
//   // ============================================
//   const [blockedRanges, setBlockedRanges] = useState(() => {
//     if (typeof window === "undefined") return [];
//     try {
//       const stored = localStorage.getItem("maya_blocked_dates");
//       return stored ? JSON.parse(stored) : [];
//     } catch {
//       return [];
//     }
//   });

//   // ============================================
//   // RELOAD ON STORAGE CHANGE
//   // ============================================
//   useEffect(() => {
//     const loadBlocked = () => {
//       try {
//         const stored = localStorage.getItem("maya_blocked_dates");
//         setBlockedRanges(stored ? JSON.parse(stored) : []);
//       } catch {
//         setBlockedRanges([]);
//       }
//     };
//     const loadBookings = () => {
//       try {
//         const stored = localStorage.getItem("maya_all_bookings");
//         setAllBookings(stored ? JSON.parse(stored) : []);
//       } catch {
//         setAllBookings([]);
//       }
//     };

//     const handleStorage = (e) => {
//       if (e.key === "maya_blocked_dates") loadBlocked();
//       if (e.key === "maya_all_bookings") loadBookings();
//     };

//     window.addEventListener("storage", handleStorage);
//     loadBlocked();
//     loadBookings();

//     return () => window.removeEventListener("storage", handleStorage);
//   }, []);

//   const today = new Date().toISOString().split("T")[0];

//   // ============================================
//   // DATE HELPERS
//   // ============================================
//   const parseDate = (dateStr) => {
//     const [y, m, d] = dateStr.split("-").map(Number);
//     return new Date(y, m - 1, d);
//   };

//   const formatDate = (dateStr) => {
//     if (!dateStr) return "";
//     const date = parseDate(dateStr);
//     return date.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       weekday: "short",
//     });
//   };

//   const toDateStr = (date) => {
//     const y = date.getFullYear();
//     const m = String(date.getMonth() + 1).padStart(2, "0");
//     const d = String(date.getDate()).padStart(2, "0");
//     return `${y}-${m}-${d}`;
//   };

//   const rangesOverlap = (start1, end1, start2, end2) => {
//     const s1 = parseDate(start1).getTime();
//     const e1 = parseDate(end1).getTime();
//     const s2 = parseDate(start2).getTime();
//     const e2 = parseDate(end2).getTime();
//     return s1 <= e2 && s2 <= e1;
//   };

//   // ============================================
//   // CHECK IF A DATE IS BOOKED / BLOCKED
//   // ============================================
//   const getDateStatus = (dateStr) => {
//     // Check booked
//     const booked = allBookings.find((b) =>
//       rangesOverlap(dateStr, dateStr, b.checkIn, b.checkOut)
//     );
//     if (booked) return { status: "booked", data: booked };

//     // Check blocked
//     const blocked = blockedRanges.find((b) =>
//       rangesOverlap(dateStr, dateStr, b.checkIn, b.checkOut)
//     );
//     if (blocked) return { status: "blocked", data: blocked };

//     return { status: "available", data: null };
//   };

//   // ============================================
//   // FIND CONFLICTING BOOKING OR BLOCK
//   // ============================================
//   const findConflictingBooking = (checkIn, checkOut) => {
//     if (!checkIn || !checkOut) return null;

//     const bookedConflict = allBookings.find((booking) =>
//       rangesOverlap(checkIn, checkOut, booking.checkIn, booking.checkOut)
//     );
//     if (bookedConflict) return { ...bookedConflict, isBlocked: false };

//     const blockedConflict = blockedRanges.find((block) =>
//       rangesOverlap(checkIn, checkOut, block.checkIn, block.checkOut)
//     );
//     if (blockedConflict) return { ...blockedConflict, isBlocked: true };

//     return null;
//   };

//   // ============================================
//   // DATE AVAILABILITY CHECK
//   // ============================================
//   useEffect(() => {
//     setDateError("");
//     setDateAvailable(true);

//     const { checkIn, checkOut } = formData;

//     if (!checkIn || !checkOut) return;

//     if (parseDate(checkOut) <= parseDate(checkIn)) {
//       setDateError("Check-out date must be after check-in date.");
//       setDateAvailable(false);
//       return;
//     }

//     setCheckingDate(true);

//     const timer = setTimeout(() => {
//       const conflicting = findConflictingBooking(checkIn, checkOut);
//       if (conflicting) {
//         setDateAvailable(false);
//         if (conflicting.isBlocked) {
//           setDateError(
//             "These dates are currently unavailable. Please choose different dates."
//           );
//         } else {
//           setDateError(
//             `These dates are not available. The villa is already booked from ${formatDate(
//               conflicting.checkIn
//             )} to ${formatDate(
//               conflicting.checkOut
//             )}. Please choose different dates.`
//           );
//         }
//       } else {
//         setDateAvailable(true);
//       }
//       setCheckingDate(false);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [formData.checkIn, formData.checkOut, allBookings, blockedRanges]);

//   // ============================================
//   // AUTO-SAVE FORM DATA (as user types)
//   // ============================================
//   useEffect(() => {
//     // Save every field change (draft)
//     const hasAnyData =
//       formData.name ||
//       formData.mobile ||
//       formData.email ||
//       formData.checkIn ||
//       formData.checkOut;
//     if (!hasAnyData) return;

//     const timer = setTimeout(() => {
//       try {
//         localStorage.setItem("maya_form_draft", JSON.stringify(formData));
//       } catch {}
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [formData]);

//   // Load draft on mount
//   useEffect(() => {
//     try {
//       const draft = localStorage.getItem("maya_form_draft");
//       if (draft) {
//         const parsed = JSON.parse(draft);
//         setFormData((prev) => ({ ...prev, ...parsed, consent: false }));
//       }
//     } catch {}
//   }, []);

//   // ============================================
//   // SHOW POPUP
//   // ============================================
//   const showPopup = (type, title, message) => {
//     setPopup({ open: true, type, title, message });
//   };

//   const closePopup = () => {
//     setPopup((p) => ({ ...p, open: false }));
//   };

//   // ============================================
//   // HANDLERS
//   // ============================================
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//     if (isSubmitted) setIsSubmitted(false);
//     if (submitError) setSubmitError("");
//   };

//   // Auto-save client record on every field change (even if not submitted)
//   const saveClientAuto = (data) => {
//     if (!data.name && !data.mobile && !data.email) return;
//     try {
//       const stored = localStorage.getItem("maya_all_bookings");
//       const list = stored ? JSON.parse(stored) : [];
//       const draftId = `draft-${data.mobile || data.email || "unknown"}`;

//       const idx = list.findIndex((b) => b.id === draftId);

//       const record = {
//         id: draftId,
//         name: data.name || "—",
//         mobile: data.mobile || "—",
//         email: data.email || "—",
//         checkIn: data.checkIn || "",
//         checkOut: data.checkOut || "",
//         guests: data.guests || "—",
//         purpose: data.purpose || "—",
//         message: data.message || "",
//         status: "draft",
//         bookedAt: new Date().toISOString(),
//         submittedAt: null,
//       };

//       if (idx >= 0) {
//         list[idx] = { ...list[idx], ...record };
//       } else {
//         list.push(record);
//       }

//       localStorage.setItem("maya_all_bookings", JSON.stringify(list));
//       setAllBookings(list);
//     } catch {}
//   };

//   // Debounced auto-save on form change
//   useEffect(() => {
//     if (formData.name || formData.mobile || formData.email) {
//       const t = setTimeout(() => saveClientAuto(formData), 800);
//       return () => clearTimeout(t);
//     }
//   }, [formData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError("");

//     if (!formData.consent) {
//       showPopup(
//         "error",
//         "Consent Required",
//         "Please allow us to contact you regarding your booking enquiry."
//       );
//       return;
//     }

//     if (!dateAvailable || dateError) {
//       showPopup(
//         "error",
//         "Dates Not Available",
//         "Please select available dates before submitting. These dates are already booked or blocked."
//       );
//       return;
//     }

//     const conflict = findConflictingBooking(
//       formData.checkIn,
//       formData.checkOut
//     );
//     if (conflict) {
//       showPopup(
//         "error",
//         "Not Available",
//         conflict.isBlocked
//           ? "Sorry! These dates are currently unavailable. Please choose different dates."
//           : `Sorry! These dates were just booked. Villa is unavailable from ${formatDate(
//               conflict.checkIn
//             )} to ${formatDate(conflict.checkOut)}.`
//       );
//       return;
//     }

//     setIsSubmitting(true);

//     // Prepare client record
//     const clientId = `client-${Date.now()}-${Math.random()
//       .toString(36)
//       .slice(2, 7)}`;

//     const newBooking = {
//       id: clientId,
//       name: formData.name,
//       mobile: formData.mobile,
//       email: formData.email,
//       checkIn: formData.checkIn,
//       checkOut: formData.checkOut,
//       guests: formData.guests,
//       purpose: formData.purpose,
//       message: formData.message || "",
//       status: "confirmed",
//       bookedAt: new Date().toISOString(),
//       submittedAt: new Date().toISOString(),
//     };

//     // Save immediately (before email)
//     try {
//       const stored = localStorage.getItem("maya_all_bookings");
//       const list = stored ? JSON.parse(stored) : [];
//       // Remove any draft with same mobile/email
//       const cleaned = list.filter(
//         (b) =>
//           !(
//             b.status === "draft" &&
//             (b.mobile === formData.mobile || b.email === formData.email)
//           )
//       );
//       cleaned.push(newBooking);
//       localStorage.setItem("maya_all_bookings", JSON.stringify(cleaned));
//       setAllBookings(cleaned);
//     } catch {}

//     try {
//       const templateParams = {
//         to_email: OWNER_EMAIL,
//         client_name: formData.name,
//         client_email: formData.email,
//         client_mobile: formData.mobile,
//         check_in: formatDate(formData.checkIn),
//         check_out: formatDate(formData.checkOut),
//         guests: formData.guests,
//         purpose: formData.purpose,
//         message: formData.message || "No additional details provided.",
//         submitted_at: new Date().toLocaleString("en-IN"),
//         reply_to: formData.email,
//       };

//       await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         templateParams,
//         EMAILJS_PUBLIC_KEY
//       );

//       setIsSubmitted(true);
//       setFormData(initialFormData);
//       localStorage.removeItem("maya_form_draft");

//       showPopup(
//         "success",
//         "Booking Request Sent! ✅",
//         `Your booking enquiry has been sent to ${OWNER_EMAIL}. We'll contact you shortly.`
//       );

//       window.scrollTo({ top: 300, behavior: "smooth" });
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       setSubmitError(
//         "Failed to send your booking. Please try again or contact us at " +
//           OWNER_EMAIL
//       );
//       showPopup(
//         "error",
//         "Something Went Wrong",
//         "Failed to send your booking. Please try again or contact us at " +
//           OWNER_EMAIL
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // ============================================
//   // CALENDAR RENDER LOGIC
//   // ============================================
//   const getDaysInMonth = (date) => {
//     const y = date.getFullYear();
//     const m = date.getMonth();
//     const first = new Date(y, m, 1);
//     const last = new Date(y, m + 1, 0);
//     const days = [];

//     // Pad start (Sunday = 0)
//     for (let i = 0; i < first.getDay(); i++) days.push(null);

//     for (let d = 1; d <= last.getDate(); d++) {
//       days.push(new Date(y, m, d));
//     }
//     return days;
//   };

//   const days = getDaysInMonth(calendarMonth);
//   const monthName = calendarMonth.toLocaleDateString("en-IN", {
//     month: "long",
//     year: "numeric",
//   });

//   const changeMonth = (delta) => {
//     setCalendarMonth(
//       (prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1)
//     );
//   };

//   const handleDateClick = (date) => {
//     if (!date) return;
//     const dateStr = toDateStr(date);
//     const { status } = getDateStatus(dateStr);

//     if (status === "booked") {
//       setSelectedDate({ date, status: "booked" });
//       showPopup(
//         "error",
//         "❌ Not Available",
//         "This date is already booked. Please choose a different date."
//       );
//       return;
//     }
//     if (status === "blocked") {
//       setSelectedDate({ date, status: "blocked" });
//       showPopup(
//         "error",
//         "❌ Not Available",
//         "This date is unavailable. Please choose a different date."
//       );
//       return;
//     }

//     // Available — set as checkIn / checkOut
//     setSelectedDate({ date, status: "available" });

//     if (!formData.checkIn || (formData.checkIn && formData.checkOut)) {
//       setFormData((prev) => ({
//         ...prev,
//         checkIn: dateStr,
//         checkOut: "",
//       }));
//     } else if (formData.checkIn && !formData.checkOut) {
//       if (dateStr > formData.checkIn) {
//         setFormData((prev) => ({ ...prev, checkOut: dateStr }));
//       } else {
//         setFormData((prev) => ({
//           ...prev,
//           checkIn: dateStr,
//           checkOut: "",
//         }));
//       }
//     }
//   };

//   const isInSelectedRange = (date) => {
//     if (!date) return false;
//     const ds = toDateStr(date);
//     if (formData.checkIn && formData.checkOut) {
//       return ds >= formData.checkIn && ds <= formData.checkOut;
//     }
//     if (formData.checkIn) return ds === formData.checkIn;
//     return false;
//   };

//   const isToday = (date) => {
//     if (!date) return false;
//     return toDateStr(date) === today;
//   };

//   // ============================================
//   // RENDER
//   // ============================================
//   return (
//     <div className="w-full overflow-x-hidden bg-[#f8f6f1]">
//       {/* ================= POPUP ================= */}
//       <AnimatePresence>
//         {popup.open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//             onClick={closePopup}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.9, y: 20, opacity: 0 }}
//               transition={{ type: "spring", damping: 22 }}
//               onClick={(e) => e.stopPropagation()}
//               className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div
//                   className={`flex h-16 w-16 items-center justify-center rounded-full ${
//                     popup.type === "success" ? "bg-emerald-100" : "bg-red-100"
//                   }`}
//                 >
//                   {popup.type === "success" ? (
//                     <CheckCircle2 className="h-8 w-8 text-emerald-600" />
//                   ) : (
//                     <XCircle className="h-8 w-8 text-red-600" />
//                   )}
//                 </div>
//                 <h3 className="mt-4 font-serif text-xl font-semibold text-[#122216] sm:text-2xl">
//                   {popup.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
//                   {popup.message}
//                 </p>
//                 <button
//                   type="button"
//                   onClick={closePopup}
//                   className="mt-6 w-full rounded-xl bg-[#122216] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b88e4c] hover:text-[#122216]"
//                 >
//                   OK, Got It
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* MAIN */}
//       <section className="relative w-full overflow-hidden bg-[#f8f6f1] py-16 md:py-20 lg:py-24">
//         <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
//         <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/10 blur-[120px]" />

//         <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
//           <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
//             {/* LEFT INFO PANEL */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7 }}
//               className="w-full lg:sticky lg:top-28 lg:col-span-5"
//             >
//               <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5 backdrop-blur-md">
//                 <Sparkles className="h-3.5 w-3.5 text-[#9e793e]" />
//                 <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
//                   Why Book With Us
//                 </span>
//               </div>

//               <h2 className="mt-6 font-serif text-3xl font-light leading-tight text-[#0e382b] sm:text-4xl lg:text-[42px]">
//                 A Seamless Booking{" "}
//                 <span className="italic text-[#9e793e]">Experience</span>
//               </h2>

//               <div className="mt-6 h-[2px] w-16 bg-[#9e793e]" />

//               <p className="mt-8 text-base font-light leading-relaxed text-[#0e382b]/70 sm:text-lg">
//                 Real-time date availability, instant enquiry delivery, and
//                 personal confirmation from our team.
//               </p>

//               <div className="mt-8 space-y-4">
//                 {[
//                   {
//                     icon: Shield,
//                     title: "Live Availability",
//                     text: "See which dates are booked in real-time",
//                   },
//                   {
//                     icon: Clock,
//                     title: "Quick Response",
//                     text: "Our team confirms within hours",
//                   },
//                   {
//                     icon: CheckCircle2,
//                     title: "No Hidden Charges",
//                     text: "Transparent pricing on confirmation",
//                   },
//                   {
//                     icon: Phone,
//                     title: "Personal Support",
//                     text: "WhatsApp & call assistance available",
//                   },
//                 ].map((item, idx) => {
//                   const Icon = item.icon;
//                   return (
//                     <motion.div
//                       key={item.title}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: idx * 0.1 }}
//                       className="flex items-start gap-4 rounded-xl border border-[#0e382b]/10 bg-white/70 p-4 backdrop-blur-sm"
//                     >
//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0e382b]/5">
//                         <Icon className="h-5 w-5 text-[#0e382b]" />
//                       </div>
//                       <div>
//                         <p className="font-serif text-base font-medium text-[#0e382b] sm:text-lg">
//                           {item.title}
//                         </p>
//                         <p className="mt-0.5 text-xs font-light text-[#0e382b]/60 sm:text-sm">
//                           {item.text}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               <div className="mt-8 grid grid-cols-3 divide-x divide-[#0e382b]/10 rounded-2xl border border-[#0e382b]/10 bg-white/70 p-4 backdrop-blur-sm">
//                 <div className="flex flex-col items-center p-2 text-center">
//                   <BedDouble className="mb-1 h-5 w-5 text-[#9e793e]" />
//                   <p className="font-serif text-lg font-medium text-[#0e382b]">
//                     6BHK
//                   </p>
//                   <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
//                     Private Villa
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-center p-2 text-center">
//                   <Waves className="mb-1 h-5 w-5 text-[#9e793e]" />
//                   <p className="font-serif text-lg font-medium text-[#0e382b]">
//                     Pool
//                   </p>
//                   <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
//                     Private
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-center p-2 text-center">
//                   <MapPin className="mb-1 h-5 w-5 text-[#9e793e]" />
//                   <p className="font-serif text-lg font-medium text-[#0e382b]">
//                     Virar East
//                   </p>
//                   <p className="text-[9px] uppercase tracking-wider text-[#0e382b]/50">
//                     Maharashtra
//                   </p>
//                 </div>
//               </div>

//               {/* ================= CALENDAR ================= */}
//               <div className="mt-8 rounded-2xl border border-[#0e382b]/10 bg-white p-5 shadow-sm">
//                 <div className="flex items-center justify-between">
//                   <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
//                     Availability Calendar
//                   </p>
//                   <div className="flex items-center gap-1">
//                     <button
//                       type="button"
//                       onClick={() => changeMonth(-1)}
//                       className="flex h-8 w-8 items-center justify-center rounded-lg text-[#0e382b] transition hover:bg-[#0e382b]/5"
//                       aria-label="Previous month"
//                     >
//                       <ChevronLeft className="h-4 w-4" />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => changeMonth(1)}
//                       className="flex h-8 w-8 items-center justify-center rounded-lg text-[#0e382b] transition hover:bg-[#0e382b]/5"
//                       aria-label="Next month"
//                     >
//                       <ChevronRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>

//                 <p className="mt-1 font-serif text-lg font-medium text-[#0e382b]">
//                   {monthName}
//                 </p>

//                 {/* Weekday headers */}
//                 <div className="mt-4 grid grid-cols-7 gap-1 text-center">
//                   {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
//                     <div
//                       key={i}
//                       className="text-[10px] font-semibold uppercase tracking-wider text-[#0e382b]/40"
//                     >
//                       {d}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Days grid */}
//                 <div className="mt-2 grid grid-cols-7 gap-1">
//                   {days.map((date, i) => {
//                     if (!date) return <div key={i} className="aspect-square" />;

//                     const ds = toDateStr(date);
//                     const { status } = getDateStatus(ds);
//                     const isPast = ds < today;
//                     const inRange = isInSelectedRange(date);

//                     let baseClass =
//                       "relative flex aspect-square items-center justify-center rounded-lg text-xs font-medium transition-all duration-200 ";

//                     if (isPast) {
//                       baseClass +=
//                         "cursor-not-allowed text-slate-300 line-through";
//                     } else if (status === "booked") {
//                       baseClass +=
//                         "cursor-not-allowed bg-red-500 text-white shadow-sm";
//                     } else if (status === "blocked") {
//                       baseClass +=
//                         "cursor-not-allowed bg-red-400 text-white shadow-sm";
//                     } else if (inRange) {
//                       baseClass += "bg-[#0e382b] text-white shadow-md";
//                     } else {
//                       baseClass +=
//                         "bg-emerald-50 text-[#0e382b] hover:bg-emerald-100 cursor-pointer";
//                     }

//                     return (
//                       <button
//                         key={i}
//                         type="button"
//                         onClick={() => !isPast && handleDateClick(date)}
//                         disabled={isPast}
//                         className={baseClass}
//                         title={
//                           status === "booked"
//                             ? "Booked"
//                             : status === "blocked"
//                             ? "Blocked"
//                             : "Available"
//                         }
//                       >
//                         {date.getDate()}
//                         {(status === "booked" || status === "blocked") && (
//                           <span className="absolute right-0.5 top-0.5 text-[9px] font-bold leading-none">
//                             ✕
//                           </span>
//                         )}
//                         {isToday(date) && !isPast && status === "available" && (
//                           <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-[#0e382b]" />
//                         )}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* Legend */}
//                 <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[#0e382b]/10 pt-3 text-[10px]">
//                   <div className="flex items-center gap-1.5">
//                     <span className="h-3 w-3 rounded bg-emerald-50 ring-1 ring-emerald-200" />
//                     <span className="text-[#0e382b]/70">Available</span>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <span className="h-3 w-3 rounded bg-red-500" />
//                     <span className="text-[#0e382b]/70">Booked ✕</span>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <span className="h-3 w-3 rounded bg-[#0e382b]" />
//                     <span className="text-[#0e382b]/70">Selected</span>
//                   </div>
//                 </div>

//                 <p className="mt-3 text-[10px] leading-relaxed text-[#0e382b]/50">
//                   💡 Click any green date to select as check-in. Click another
//                   to set check-out.
//                 </p>
//               </div>

//               {selectedDate && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mt-4 rounded-xl border border-[#0e382b]/10 bg-white/70 p-4 text-xs"
//                 >
//                   <p className="font-semibold uppercase tracking-wider text-[#9e793e]">
//                     Selected: {toDateStr(selectedDate.date)}
//                   </p>
//                   <p className="mt-1 text-[#0e382b]/70">
//                     Status:{" "}
//                     <span
//                       className={`font-semibold ${
//                         selectedDate.status === "available"
//                           ? "text-emerald-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {selectedDate.status === "available"
//                         ? "Available"
//                         : selectedDate.status === "booked"
//                         ? "Booked"
//                         : "Blocked"}
//                     </span>
//                   </p>
//                 </motion.div>
//               )}
//             </motion.div>

//             {/* RIGHT FORM */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7, delay: 0.15 }}
//               className="w-full lg:col-span-7"
//             >
//               <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
//                 <div className="mb-8">
//                   <p className="text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
//                     Booking Enquiry
//                   </p>
//                   <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#122216] sm:text-3xl">
//                     Tell Us About Your Stay
//                   </h3>
//                   <p className="mt-2 text-sm text-slate-500">
//                     All fields marked with * are required. We'll confirm within
//                     hours.
//                   </p>
//                 </div>

//                 <AnimatePresence>
//                   {isSubmitted && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                       animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
//                       exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                       className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-50"
//                     >
//                       <div className="p-5 flex gap-3">
//                         <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
//                         <div>
//                           <h4 className="font-serif text-lg font-semibold text-emerald-900">
//                             Booking Request Sent Successfully!
//                           </h4>
//                           <p className="mt-1 text-sm text-emerald-700">
//                             Your booking enquiry has been sent to{" "}
//                             <span className="font-medium">{OWNER_EMAIL}</span>.
//                             We'll contact you shortly.
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}

//                   {submitError && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                       animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
//                       exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                       className="overflow-hidden rounded-2xl border border-red-500/30 bg-red-50"
//                     >
//                       <div className="p-5 flex gap-3">
//                         <XCircle className="h-6 w-6 shrink-0 text-red-600" />
//                         <div>
//                           <h4 className="font-serif text-lg font-semibold text-red-900">
//                             Something Went Wrong
//                           </h4>
//                           <p className="mt-1 text-sm text-red-700">
//                             {submitError}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                       >
//                         Full Name *
//                       </label>
//                       <div className="relative">
//                         <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
//                         <input
//                           id="name"
//                           name="name"
//                           type="text"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Enter your full name"
//                           required
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="mobile"
//                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                       >
//                         Mobile Number *
//                       </label>
//                       <div className="relative">
//                         <Phone className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
//                         <input
//                           id="mobile"
//                           name="mobile"
//                           type="tel"
//                           value={formData.mobile}
//                           onChange={handleChange}
//                           placeholder="+91 98765 43210"
//                           required
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                     >
//                       Email Address *
//                     </label>
//                     <div className="relative">
//                       <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="your@email.com"
//                         required
//                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                     <div>
//                       <label
//                         htmlFor="checkIn"
//                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                       >
//                         Check-In Date *
//                       </label>
//                       <input
//                         id="checkIn"
//                         name="checkIn"
//                         type="date"
//                         min={today}
//                         value={formData.checkIn}
//                         onChange={handleChange}
//                         required
//                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="checkOut"
//                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                       >
//                         Check-Out Date *
//                       </label>
//                       <input
//                         id="checkOut"
//                         name="checkOut"
//                         type="date"
//                         min={formData.checkIn || today}
//                         value={formData.checkOut}
//                         onChange={handleChange}
//                         required
//                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                       />
//                     </div>
//                   </div>

//                   <AnimatePresence mode="wait">
//                     {checkingDate && (
//                       <motion.div
//                         key="checking"
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-50 p-4"
//                       >
//                         <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
//                         <p className="text-sm font-medium text-blue-800">
//                           Checking availability for your dates...
//                         </p>
//                       </motion.div>
//                     )}

//                     {!checkingDate && dateError && !dateAvailable && (
//                       <motion.div
//                         key="unavailable"
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="rounded-xl border border-red-500/30 bg-red-50 p-4 flex gap-3"
//                       >
//                         <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
//                         <div>
//                           <p className="text-sm font-bold text-red-900">
//                             Not Available
//                           </p>
//                           <p className="mt-1 text-sm text-red-700">
//                             {dateError}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}

//                     {!checkingDate &&
//                       !dateError &&
//                       dateAvailable &&
//                       formData.checkIn &&
//                       formData.checkOut && (
//                         <motion.div
//                           key="available"
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           className="rounded-xl border border-emerald-500/30 bg-emerald-50 p-4 flex gap-3"
//                         >
//                           <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
//                           <div>
//                             <p className="text-sm font-bold text-emerald-900">
//                               Available for Booking
//                             </p>
//                             <p className="mt-1 text-sm text-emerald-700">
//                               Great! These dates are open.
//                             </p>
//                           </div>
//                         </motion.div>
//                       )}
//                   </AnimatePresence>

//                   <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                     <div>
//                       <label
//                         htmlFor="guests"
//                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                       >
//                         Number of Guests *
//                       </label>
//                       <div className="relative">
//                         <Users className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
//                         <input
//                           id="guests"
//                           name="guests"
//                           type="number"
//                           min="1"
//                           max="200"
//                           value={formData.guests}
//                           onChange={handleChange}
//                           placeholder="e.g. 10"
//                           required
//                           className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="purpose"
//                         className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                       >
//                         Booking For *
//                       </label>
//                       <select
//                         id="purpose"
//                         name="purpose"
//                         value={formData.purpose}
//                         onChange={handleChange}
//                         required
//                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                       >
//                         <option value="Staycation">🏖️ Staycation</option>
//                         <option value="Family Holiday">
//                           👨‍👩‍👧‍👦 Family Holiday
//                         </option>
//                         <option value="Weekend Getaway">
//                           🌅 Weekend Getaway
//                         </option>
//                         <option value="Birthday Celebration">
//                           🎂 Birthday Party
//                         </option>
//                         <option value="Anniversary">💑 Anniversary</option>
//                         <option value="Corporate Stay">
//                           🏢 Corporate Event
//                         </option>
//                         <option value="Photoshoot">📸 Photoshoot</option>
//                         <option value="Family Function">
//                           🎊 Family Function
//                         </option>
//                         <option value="Other">✨ Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                     >
//                       Additional Details (Optional)
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="4"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us about special requests, event requirements..."
//                       className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                     />
//                   </div>

//                   <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:bg-slate-50">
//                     <input
//                       type="checkbox"
//                       name="consent"
//                       checked={formData.consent}
//                       onChange={handleChange}
//                       required
//                       className="mt-1 h-4 w-4 rounded border-slate-300 text-[#122216] focus:ring-[#b88e4c]"
//                     />
//                     <span className="text-xs leading-relaxed text-slate-600 sm:text-sm">
//                       I agree to be contacted by Maya Niketan Villa via Phone,
//                       WhatsApp, or Email regarding availability and pricing.
//                     </span>
//                   </label>

//                   <motion.button
//                     whileHover={{
//                       scale: dateAvailable && !isSubmitting ? 1.01 : 1,
//                     }}
//                     whileTap={{
//                       scale: dateAvailable && !isSubmitting ? 0.98 : 1,
//                     }}
//                     type="submit"
//                     disabled={isSubmitting || !dateAvailable || !!dateError}
//                     className={`
//                       mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-xl
//                       text-xs font-bold uppercase tracking-widest transition-all
//                       ${
//                         isSubmitting || !dateAvailable || !!dateError
//                           ? "cursor-not-allowed bg-slate-300 text-slate-500"
//                           : "bg-[#122216] text-white shadow-lg hover:bg-[#b88e4c] hover:text-[#122216]"
//                       }
//                     `}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="h-5 w-5 animate-spin" />
//                         Sending Request...
//                       </>
//                     ) : !dateAvailable || dateError ? (
//                       <>
//                         <XCircle className="h-5 w-5" />
//                         Dates Not Available
//                       </>
//                     ) : (
//                       <>
//                         Send Booking Request
//                         <Send className="h-4 w-4" />
//                       </>
//                     )}
//                   </motion.button>

//                   <p className="text-center text-[11px] leading-relaxed text-slate-400">
//                     Your request will be sent to{" "}
//                     <span className="font-medium text-slate-500">
//                       {OWNER_EMAIL}
//                     </span>
//                   </p>
//                 </form>
//               </div>

//               <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <a
//                   href="tel:+917219212239"
//                   className="group flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-300 group-hover:bg-[#0e382b] group-hover:scale-110">
//                     <Phone className="h-5 w-5 text-[#0e382b] transition-colors duration-300 group-hover:text-[#d4ad72]" />
//                   </div>
//                   <div>
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
//                       Call Us
//                     </p>
//                     <p className="font-serif text-base text-[#0e382b]">
//                       +91 7219212239
//                     </p>
//                   </div>
//                 </a>

//                 <a
//                   href={`mailto:${OWNER_EMAIL}`}
//                   className="group flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-300 group-hover:bg-[#0e382b] group-hover:scale-110">
//                     <Mail className="h-5 w-5 text-[#0e382b] transition-colors duration-300 group-hover:text-[#d4ad72]" />
//                   </div>
//                   <div>
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
//                       Email Us
//                     </p>
//                     <p className="font-serif text-sm text-[#0e382b] sm:text-base">
//                       {OWNER_EMAIL}
//                     </p>
//                   </div>
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="relative w-full overflow-hidden bg-[#0e382b] py-16 md:py-20">
//         <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4ad72_1px,transparent_1px)] bg-[length:40px_40px]" />
//         </div>

//         <div className="relative mx-auto max-w-[1600px] px-6 text-center sm:px-10 lg:px-16 xl:px-24">
//           <h2 className="font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
//             Have Questions Before Booking?
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-sm font-light text-white/60 sm:text-base">
//             Reach out to us on WhatsApp for instant assistance.
//           </p>
//           <a
//             href="https://wa.me/7219212239?text=Hi%20Maya%20Niketan%20Villa%2C%20I%20have%20a%20question%20about%20booking."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#d4ad72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#0e382b] shadow-lg transition-all duration-300 hover:bg-white sm:text-sm"
//           >
//             Chat on WhatsApp
//             <ArrowRight className="h-4 w-4" />
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Booking;

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

const Booking = () => {
  // ============================================
  // EMAILJS CONFIG
  // ============================================
  const EMAILJS_SERVICE_ID = "service_82s52ru";
  const EMAILJS_TEMPLATE_ID = "template_aub7pk7";
  const EMAILJS_PUBLIC_KEY = "Qpq4-Y1HZCLjewHx6";
  const OWNER_EMAIL = "mayaniketanvilla@gmail.com";

  // ============================================
  // STATE
  // ============================================
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

  // Popup
  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  // ============================================
  // ALL BOOKINGS (auto-saved)
  // ============================================
  const [allBookings, setAllBookings] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("maya_all_bookings");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Blocked
  const [blockedRanges, setBlockedRanges] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("maya_blocked_dates");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // ============================================
  // RELOAD ON STORAGE CHANGE
  // ============================================
  useEffect(() => {
    const loadBlocked = () => {
      try {
        const stored = localStorage.getItem("maya_blocked_dates");
        setBlockedRanges(stored ? JSON.parse(stored) : []);
      } catch {
        setBlockedRanges([]);
      }
    };
    const loadBookings = () => {
      try {
        const stored = localStorage.getItem("maya_all_bookings");
        setAllBookings(stored ? JSON.parse(stored) : []);
      } catch {
        setAllBookings([]);
      }
    };

    const handleStorage = (e) => {
      if (e.key === "maya_blocked_dates") loadBlocked();
      if (e.key === "maya_all_bookings") loadBookings();
    };

    window.addEventListener("storage", handleStorage);
    loadBlocked();
    loadBookings();

    // Polling for same-tab updates
    const interval = setInterval(() => {
      loadBlocked();
      loadBookings();
    }, 2000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  const today = new Date().toISOString().split("T")[0];

  // ============================================
  // DATE HELPERS
  // ============================================
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

  // ============================================
  // GET DATE STATUS (for calendar)
  // ============================================
  const getDateStatus = (dateStr) => {
    if (dateStr < today) return "past";

    const booked = allBookings.find(
      (b) =>
        b.status === "confirmed" &&
        rangesOverlap(dateStr, dateStr, b.checkIn, b.checkOut)
    );
    if (booked) return "booked";

    const blocked = blockedRanges.find((b) =>
      rangesOverlap(dateStr, dateStr, b.checkIn, b.checkOut)
    );
    if (blocked) return "blocked";

    return "available";
  };

  // ============================================
  // FIND CONFLICT
  // ============================================
  const findConflictingBooking = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return null;

    const bookedConflict = allBookings.find(
      (b) =>
        b.status === "confirmed" &&
        rangesOverlap(checkIn, checkOut, b.checkIn, b.checkOut)
    );
    if (bookedConflict) return { ...bookedConflict, isBlocked: false };

    const blockedConflict = blockedRanges.find((block) =>
      rangesOverlap(checkIn, checkOut, block.checkIn, block.checkOut)
    );
    if (blockedConflict) return { ...blockedConflict, isBlocked: true };

    return null;
  };

  // ============================================
  // DATE AVAILABILITY CHECK (on change)
  // ============================================
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
      const conflicting = findConflictingBooking(checkIn, checkOut);
      if (conflicting) {
        setDateAvailable(false);
        if (conflicting.isBlocked) {
          setDateError(
            "These dates are currently unavailable. Please choose different dates."
          );
        } else {
          setDateError(
            `Not available. The villa is already booked from ${formatDate(
              conflicting.checkIn
            )} to ${formatDate(
              conflicting.checkOut
            )}. Please choose different dates.`
          );
        }
      } else {
        setDateAvailable(true);
      }
      setCheckingDate(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [formData.checkIn, formData.checkOut, allBookings, blockedRanges]);

  // ============================================
  // SHOW POPUP
  // ============================================
  const showPopup = (type, title, message) => {
    setPopup({ open: true, type, title, message });
  };
  const closePopup = () => setPopup((p) => ({ ...p, open: false }));

  // ============================================
  // HANDLE DATE PICKER CHANGE
  // ============================================
  const handleDateChange = (field, dateStr, status) => {
    // If user clicked a booked/blocked/past date → show popup, don't set
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
      // Auto-adjust: if checkIn > checkOut, reset checkOut
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

  // ============================================
  // AUTO-SAVE DRAFT (even without submit)
  // ============================================
  useEffect(() => {
    const hasAnyData =
      formData.name ||
      formData.mobile ||
      formData.email ||
      formData.checkIn ||
      formData.checkOut;

    if (!hasAnyData) return;

    const timer = setTimeout(() => {
      try {
        const stored = localStorage.getItem("maya_all_bookings");
        const list = stored ? JSON.parse(stored) : [];

        const draftId = `draft-${
          formData.mobile || formData.email || "unknown"
        }`;
        const idx = list.findIndex((b) => b.id === draftId);

        // Don't overwrite confirmed records
        if (idx >= 0 && list[idx].status === "confirmed") return;

        const record = {
          id: draftId,
          name: formData.name || "—",
          mobile: formData.mobile || "—",
          email: formData.email || "—",
          checkIn: formData.checkIn || "",
          checkOut: formData.checkOut || "",
          guests: formData.guests || "—",
          purpose: formData.purpose || "—",
          message: formData.message || "",
          status: "draft",
          bookedAt: new Date().toISOString(),
          submittedAt: null,
        };

        if (idx >= 0) list[idx] = { ...list[idx], ...record };
        else list.push(record);

        localStorage.setItem("maya_all_bookings", JSON.stringify(list));
        setAllBookings(list);
      } catch {}
    }, 900);

    return () => clearTimeout(timer);
  }, [formData]);

  // ============================================
  // HANDLERS
  // ============================================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (isSubmitted) setIsSubmitted(false);
    if (submitError) setSubmitError("");
  };

  // ============================================
  // SUBMIT
  // ============================================
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

    // Check availability
    const conflict = findConflictingBooking(
      formData.checkIn,
      formData.checkOut
    );

    if (conflict) {
      // ===== Send "Not Available" email to owner =====
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
            message: formData.message || "No additional details provided.",
            submitted_at: new Date().toLocaleString("en-IN"),
            reply_to: formData.email,
            // Special note for owner
            booking_status:
              "❌ NOT AVAILABLE — Client tried to book booked dates",
          },
          EMAILJS_PUBLIC_KEY
        );
      } catch (err) {
        console.error("EmailJS Error:", err);
      }

      // Save this attempt as a draft (or update) for admin visibility
      try {
        const stored = localStorage.getItem("maya_all_bookings");
        const list = stored ? JSON.parse(stored) : [];
        const draftId = `draft-${
          formData.mobile || formData.email || "unknown"
        }`;
        const idx = list.findIndex((b) => b.id === draftId);
        const attempt = {
          id: idx >= 0 ? draftId : `attempt-${Date.now()}`,
          name: formData.name || "—",
          mobile: formData.mobile || "—",
          email: formData.email || "—",
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.guests,
          purpose: formData.purpose,
          message: formData.message || "",
          status: "attempted-unavailable",
          bookedAt: new Date().toISOString(),
          submittedAt: new Date().toISOString(),
        };
        if (idx >= 0) list[idx] = attempt;
        else list.push(attempt);
        localStorage.setItem("maya_all_bookings", JSON.stringify(list));
        setAllBookings(list);
      } catch {}

      showPopup(
        "error",
        "❌ Not Available",
        conflict.isBlocked
          ? "Sorry! These dates are currently unavailable. Please choose different dates."
          : `Sorry! These dates are already booked (${formatDate(
              conflict.checkIn
            )} → ${formatDate(
              conflict.checkOut
            )}). We've sent your enquiry to the owner — they will contact you with alternative dates.`
      );
      return;
    }

    if (!dateAvailable || dateError) {
      showPopup(
        "error",
        "Dates Not Available",
        dateError || "Please select valid dates."
      );
      return;
    }

    setIsSubmitting(true);

    // ===== Save booking as confirmed =====
    const clientId = `client-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 7)}`;

    const newBooking = {
      id: clientId,
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      purpose: formData.purpose,
      message: formData.message || "",
      status: "confirmed",
      bookedAt: new Date().toISOString(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const stored = localStorage.getItem("maya_all_bookings");
      const list = stored ? JSON.parse(stored) : [];
      const cleaned = list.filter(
        (b) =>
          !(
            b.status !== "confirmed" &&
            (b.mobile === formData.mobile || b.email === formData.email)
          )
      );
      cleaned.push(newBooking);
      localStorage.setItem("maya_all_bookings", JSON.stringify(cleaned));
      setAllBookings(cleaned);
    } catch {}

    // ===== Send confirmation email =====
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
          message: formData.message || "No additional details provided.",
          submitted_at: new Date().toLocaleString("en-IN"),
          reply_to: formData.email,
          booking_status: "✅ CONFIRMED BOOKING REQUEST",
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData(initialFormData);
      localStorage.removeItem("maya_form_draft");

      showPopup(
        "success",
        "Booking Request Sent! ✅",
        `Your booking enquiry has been sent to ${OWNER_EMAIL}. We'll contact you shortly.`
      );
      window.scrollTo({ top: 300, behavior: "smooth" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError(
        "Failed to send your booking. Please try again or contact us at " +
          OWNER_EMAIL
      );
      showPopup(
        "error",
        "Something Went Wrong",
        "Failed to send your booking. Please try again or contact us at " +
          OWNER_EMAIL
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============================================
  // UPCOMING BOOKINGS (shown to user)
  // ============================================
  const upcomingBookings = allBookings
    .filter(
      (b) =>
        b.status === "confirmed" &&
        b.checkOut &&
        parseDate(b.checkOut) >= new Date()
    )
    .sort((a, b) => parseDate(a.checkIn) - parseDate(b.checkIn))
    .slice(0, 5);

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="w-full overflow-x-hidden bg-[#f8f6f1]">
      {/* ================= POPUP ================= */}
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

      {/* MAIN */}
      <section className="relative w-full overflow-hidden bg-[#f8f6f1] py-16 md:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0e382b]/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#9e793e]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* LEFT INFO PANEL */}
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
                    text: "WhatsApp & call assistance available",
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
                      <div className="p-5 flex gap-3">
                        <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
                        <div>
                          <h4 className="font-serif text-lg font-semibold text-emerald-900">
                            Booking Request Sent Successfully!
                          </h4>
                          <p className="mt-1 text-sm text-emerald-700">
                            Your booking enquiry has been sent to{" "}
                            <span className="font-medium">{OWNER_EMAIL}</span>.
                            We'll contact you shortly.
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
                      <div className="p-5 flex gap-3">
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
                          placeholder="+91 98765 43210"
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

                  {/* ====== CUSTOM DATE PICKERS (native-look + red ✕ for booked) ====== */}
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
                          Checking availability for your dates...
                        </p>
                      </motion.div>
                    )}

                    {!checkingDate && dateError && !dateAvailable && (
                      <motion.div
                        key="unavailable"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="rounded-xl border border-red-500/30 bg-red-50 p-4 flex gap-3"
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
                          className="rounded-xl border border-emerald-500/30 bg-emerald-50 p-4 flex gap-3"
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
                    className={`
                      mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-xl
                      text-xs font-bold uppercase tracking-widest transition-all
                      ${
                        isSubmitting
                          ? "cursor-not-allowed bg-slate-300 text-slate-500"
                          : "bg-[#122216] text-white shadow-lg hover:bg-[#b88e4c] hover:text-[#122216]"
                      }
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Booking Request
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
                  href="tel:+917219212239"
                  className="group flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-300 group-hover:bg-[#0e382b] group-hover:scale-110">
                    <Phone className="h-5 w-5 text-[#0e382b] transition-colors duration-300 group-hover:text-[#d4ad72]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9e793e]">
                      Call Us
                    </p>
                    <p className="font-serif text-base text-[#0e382b]">
                      +91 7219212239
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${OWNER_EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e793e]/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e382b]/5 transition-all duration-300 group-hover:bg-[#0e382b] group-hover:scale-110">
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

      {/* FINAL CTA */}
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
            href="https://wa.me/7219212239?text=Hi%20Maya%20Niketan%20Villa%2C%20I%20have%20a%20question%20about%20booking."
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
