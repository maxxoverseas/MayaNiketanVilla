// // import React, { useState } from "react";

// // const Contact = () => {
// //   const [form, setForm] = useState({
// //     name: "",
// //     phone: "",
// //     email: "",
// //     date: "",
// //     guests: "2 Guests",
// //     purpose: "Staycation",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({
// //       ...form,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(form);
// //     alert("Thank you! Your enquiry has been submitted successfully.");
// //   };

// //   return (
// //     <main
// //       id="contact"
// //       className="w-full min-h-screen overflow-x-hidden bg-[#FAF8F5] text-slate-800 selection:bg-[#d5ae70] selection:text-slate-900"
// //     >
// //       {/* =====================================================
// //           HERO & CONTACT SECTION
// //       ===================================================== */}
// //       <section className="relative overflow-hidden py-20 lg:py-28">
// //         {/* Subtle Decorative Background Elements */}
// //         <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#bd8c50]/10 blur-3xl pointer-events-none" />
// //         <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-slate-900/5 blur-3xl pointer-events-none" />

// //         <div className="mx-auto max-w-7xl px-6 lg:px-12">
// //           <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
// //             {/* LEFT COLUMN: VILLA INFO & DETAILS */}
// //             <div className="lg:col-span-5 flex flex-col justify-between">
// //               <div>
// //                 <div className="inline-flex items-center gap-3">
// //                   <span className="h-[1px] w-8 bg-[#bd8c50]" />
// //                   <p className="font-serif text-lg italic tracking-wide text-[#bd8c50]">
// //                     Get In Touch
// //                   </p>
// //                 </div>

// //                 <h1 className="mt-4 font-serif text-4xl font-normal leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
// //                   Plan Your Stay at
// //                   <span className="block italic text-[#bd8c50]">
// //                     Maya Niketan Villa
// //                   </span>
// //                 </h1>

// //                 <p className="mt-6 text-base leading-relaxed text-slate-600">
// //                   Whether you're planning a peaceful weekend retreat, family
// //                   gathering, or a special celebration, reach out to us and we’ll
// //                   customize your villa experience.
// //                 </p>

// //                 {/* 3D Glass Cards for Info */}
// //                 <div className="mt-10 space-y-6">
// //                   {/* Card 1: Address */}
// //                   <div className="group relative rounded-xl border border-stone-200/80 bg-white/70 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#bd8c50]/40">
// //                     <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd8c50]">
// //                       Location & Address
// //                     </p>
// //                     <p className="mt-2 text-sm leading-relaxed text-slate-700">
// //                       Mahakali Temple, Amul Virar Dairy, Plot No. 114–117,
// //                       Kaner–Dahisar Road, Vasai-Virar, Maharashtra 401303, India
// //                     </p>
// //                   </div>

// //                   {/* Card 2: Property Type */}
// //                   <div className="group relative rounded-xl border border-stone-200/80 bg-white/70 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#bd8c50]/40">
// //                     <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd8c50]">
// //                       Property Details
// //                     </p>
// //                     <p className="mt-2 text-sm text-slate-700">
// //                       Upcoming 6BHK Luxury Pool Villa
// //                     </p>
// //                   </div>

// //                   {/* Card 3: Experience */}
// //                   <div className="group relative rounded-xl border border-stone-200/80 bg-white/70 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#bd8c50]/40">
// //                     <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd8c50]">
// //                       Tailored Experiences
// //                     </p>
// //                     <p className="mt-2 text-sm text-slate-700">
// //                       Staycations • Holidays • Intimate Celebrations
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <a
// //                   href="https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="mt-8 inline-flex items-center gap-2 rounded-sm border border-slate-900 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white"
// //                 >
// //                   View On Google Maps ➔
// //                 </a>
// //               </div>
// //             </div>

// //             {/* RIGHT COLUMN: 3D ENQUIRY FORM */}
// //             <div className="lg:col-span-7">
// //               <div className="relative rounded-2xl border border-stone-200/80 bg-white p-8 sm:p-10 shadow-xl backdrop-blur-xl">
// //                 <p className="font-serif text-lg italic text-[#bd8c50]">
// //                   Reservations & Inquiries
// //                 </p>

// //                 <h2 className="mt-1 font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
// //                   Tell Us About Your Stay
// //                 </h2>

// //                 <form onSubmit={handleSubmit} className="mt-8 space-y-6">
// //                   {/* Name & Phone */}
// //                   <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
// //                     <div>
// //                       <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
// //                         Your Name *
// //                       </label>
// //                       <input
// //                         name="name"
// //                         type="text"
// //                         placeholder="John Doe"
// //                         required
// //                         value={form.name}
// //                         onChange={handleChange}
// //                         className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
// //                       />
// //                     </div>

// //                     <div>
// //                       <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
// //                         Mobile Number *
// //                       </label>
// //                       <input
// //                         name="phone"
// //                         type="tel"
// //                         placeholder="+91 98765 43210"
// //                         required
// //                         value={form.phone}
// //                         onChange={handleChange}
// //                         className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Email */}
// //                   <div>
// //                     <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
// //                       Email Address
// //                     </label>
// //                     <input
// //                       name="email"
// //                       type="email"
// //                       placeholder="john@example.com"
// //                       value={form.email}
// //                       onChange={handleChange}
// //                       className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
// //                     />
// //                   </div>

// //                   {/* Date & Guests */}
// //                   <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
// //                     <div>
// //                       <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
// //                         Preferred Date
// //                       </label>
// //                       <input
// //                         name="date"
// //                         type="date"
// //                         value={form.date}
// //                         onChange={handleChange}
// //                         className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
// //                       />
// //                     </div>

// //                     <div>
// //                       <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
// //                         Number of Guests
// //                       </label>
// //                       <select
// //                         name="guests"
// //                         value={form.guests}
// //                         onChange={handleChange}
// //                         className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
// //                       >
// //                         <option value="2 Guests">2 Guests</option>
// //                         <option value="5 Guests">5 Guests</option>
// //                         <option value="10 Guests">10 Guests</option>
// //                         <option value="30 Guests">30 Guests</option>
// //                         <option value="50 Guests">50 Guests</option>
// //                         <option value="70 Guests">70 Guests</option>
// //                         <option value="100 Guests">100 Guests</option>
// //                         <option value="150 Guests">150 Guests</option>
// //                         <option value="200+ Guests">200+ Guests</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   {/* Purpose */}
// //                   <div>
// //                     <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
// //                       Purpose of Stay
// //                     </label>
// //                     <select
// //                       name="purpose"
// //                       value={form.purpose}
// //                       onChange={handleChange}
// //                       className="h-12 w-full rounded-md border border-stone-300 bg-[#FAF8F5] px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
// //                     >
// //                       <option>Staycation</option>
// //                       <option>Family Holiday</option>
// //                       <option>Birthday Celebration</option>
// //                       <option>Anniversary</option>
// //                       <option>Photoshoot</option>
// //                       <option>Corporate Stay</option>
// //                       <option>Other</option>
// //                     </select>
// //                   </div>

// //                   {/* Message */}
// //                   <div>
// //                     <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
// //                       Special Requests / Notes
// //                     </label>
// //                     <textarea
// //                       name="message"
// //                       rows="4"
// //                       placeholder="Tell us about any specific requirements or questions..."
// //                       value={form.message}
// //                       onChange={handleChange}
// //                       className="w-full resize-none rounded-md border border-stone-300 bg-[#FAF8F5] p-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-[#bd8c50] focus:bg-white focus:ring-2 focus:ring-[#bd8c50]/20"
// //                     />
// //                   </div>

// //                   {/* Submit Button */}
// //                   <button
// //                     type="submit"
// //                     className="h-14 w-full rounded-sm bg-slate-900 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#bd8c50] hover:shadow-xl"
// //                   >
// //                     Send Enquiry
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Contact;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MapPin,
//   Users,
//   CheckCircle2,
//   ExternalLink,
//   Sparkles,
//   Phone,
//   Mail,
//   Send,
//   BedDouble,
//   Waves,
// } from "lucide-react";

// const Contact = () => {
//   const googleMapsLink =
//     "https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk!3m5!1s0x3be7a9bf8090607b:0x128c7626e4b677db!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk";

//   const initialFormData = {
//     name: "",
//     mobile: "",
//     email: "",
//     checkIn: "",
//     checkOut: "",
//     guests: "",
//     purpose: "",
//     message: "",
//     consent: false,
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     if (isSubmitted) {
//       setIsSubmitted(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.consent) {
//       alert("Please allow us to contact you regarding your booking enquiry.");
//       return;
//     }
//     console.log("Maya Niketan Villa Booking Enquiry:", formData);
//     setIsSubmitted(true);
//     setFormData(initialFormData);
//   };

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   return (
//     <section
//       id="contact"
//       className="relative w-full overflow-hidden bg-[#f4f3ef] py-16 text-slate-800 sm:py-20 lg:py-28"
//     >
//       {/* Premium Background Gradient Accents */}
//       <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d4ad72]/20 blur-[100px]" />
//       <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#122216]/10 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
//           {/* ================= LEFT SIDE (PROPERTY INFO) ================= */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="w-full lg:sticky lg:top-28 lg:col-span-5 text-center lg:text-left"
//           >
//             {/* Badge */}
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-2 rounded-full border border-[#b88e4c]/30 bg-[#b88e4c]/10 px-4 py-1.5 backdrop-blur-md shadow-sm"
//             >
//               <Sparkles className="h-3.5 w-3.5 text-[#a17936]" />
//               <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a17936]">
//                 Plan Your Stay
//               </span>
//             </motion.div>

//             {/* Title */}
//             <motion.h2
//               variants={itemVariants}
//               className="mt-6 font-serif text-3xl italic leading-tight text-[#122216] sm:text-4xl lg:text-5xl"
//             >
//               Your Private Escape <br className="hidden sm:block" />
//               <span className="not-italic text-[#b88e4c]">Awaits</span>
//             </motion.h2>

//             <motion.div
//               variants={itemVariants}
//               className="mx-auto mt-6 h-0.5 w-16 bg-[#b88e4c] lg:mx-0"
//             />

//             {/* Description */}
//             <motion.p
//               variants={itemVariants}
//               className="mx-auto mt-6 max-w-lg text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
//             >
//               Planning a staycation, family holiday, or special celebration?
//               Send us your enquiry with your preferred dates to experience Maya
//               Niketan Villa.
//             </motion.p>

//             {/* Status Indicator */}
//             <motion.div
//               variants={itemVariants}
//               className="mt-6 flex items-center justify-center gap-2.5 lg:justify-start"
//             >
//               <span className="relative flex h-3 w-3">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
//                 <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-600"></span>
//               </span>
//               <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
//                 Now Open • Bookings Available
//               </p>
//             </motion.div>

//             {/* Highlights Grid */}
//             <motion.div
//               variants={itemVariants}
//               className="mt-8 grid grid-cols-3 divide-x divide-slate-200/80 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md"
//             >
//               <div className="flex flex-col items-center justify-center p-2 lg:items-start">
//                 <BedDouble className="mb-1 h-5 w-5 text-[#b88e4c]" />
//                 <p className="font-serif text-lg font-bold text-[#122216]">
//                   6BHK
//                 </p>
//                 <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
//                   Private Villa
//                 </p>
//               </div>

//               <div className="flex flex-col items-center justify-center p-2 lg:items-start">
//                 <Waves className="mb-1 h-5 w-5 text-[#b88e4c]" />
//                 <p className="font-serif text-lg font-bold text-[#122216]">
//                   Pool
//                 </p>
//                 <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
//                   Relax & Unwind
//                 </p>
//               </div>

//               <div className="flex flex-col items-center justify-center p-2 lg:items-start">
//                 <MapPin className="mb-1 h-5 w-5 text-[#b88e4c]" />
//                 <p className="font-serif text-lg font-bold text-[#122216]">
//                   Virar East
//                 </p>
//                 <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
//                   Maharashtra
//                 </p>
//               </div>
//             </motion.div>

//             {/* Address Details */}
//             <motion.div variants={itemVariants} className="mt-8">
//               <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
//                 Villa Address
//               </p>
//               <h3 className="mt-1 font-serif text-xl italic font-bold text-[#122216]">
//                 Maya Niketan Villa
//               </h3>
//               <p className="mt-2 text-sm leading-relaxed text-slate-600">
//                 Plot No. 114–117, near Mahakali Temple & Amul Virar Dairy,
//                 Kaner–Dahisar Road, Vasai–Virar, Maharashtra 401303, India
//               </p>
//             </motion.div>

//             {/* Google Maps Link */}
//             <motion.div variants={itemVariants} className="mt-6">
//               <motion.a
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 href={googleMapsLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-xl border border-[#122216]/10 bg-white/80 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#122216] shadow-sm transition-all hover:border-[#122216] hover:bg-[#122216] hover:text-white"
//               >
//                 <span>Get Directions on Google Maps</span>
//                 <ExternalLink className="h-4 w-4" />
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* ================= RIGHT SIDE (FORM) ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="w-full lg:col-span-7"
//           >
//             <div className="rounded-3xl border border-white/60 bg-white p-6 text-slate-800 shadow-xl sm:p-10 lg:p-12">
//               <div className="mb-8">
//                 <p className="text-xs font-bold uppercase tracking-widest text-[#b88e4c]">
//                   Booking Enquiry
//                 </p>
//                 <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#122216] sm:text-3xl">
//                   Plan Your Stay at Maya Niketan
//                 </h3>
//                 <p className="mt-2 text-sm text-slate-500">
//                   Fill out the form below. Reservation requests are subject to
//                   confirmation.
//                 </p>
//               </div>

//               {/* SUCCESS ALERT ANIMATION */}
//               <AnimatePresence>
//                 {isSubmitted && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="mb-6 overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-50 p-4"
//                   >
//                     <div className="flex gap-3">
//                       <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
//                       <div>
//                         <h4 className="font-semibold text-emerald-900">
//                           Enquiry Received!
//                         </h4>
//                         <p className="mt-1 text-sm text-emerald-700">
//                           Thank you! We have recorded your request. Our team
//                           will contact you shortly to confirm dates.
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 {/* NAME & MOBILE */}
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                     >
//                       Full Name *
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder=" Full Name"
//                       required
//                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="mobile"
//                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                     >
//                       Mobile Number *
//                     </label>
//                     <div className="relative">
//                       <Phone className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
//                       <input
//                         id="mobile"
//                         name="mobile"
//                         type="tel"
//                         value={formData.mobile}
//                         onChange={handleChange}
//                         placeholder="Mobile Number"
//                         required
//                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* EMAIL */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                   >
//                     Email Address *
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="...@gmail.com"
//                       required
//                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                     />
//                   </div>
//                 </div>

//                 {/* DATES */}
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="checkIn"
//                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                     >
//                       Check-In *
//                     </label>
//                     <input
//                       id="checkIn"
//                       name="checkIn"
//                       type="date"
//                       value={formData.checkIn}
//                       onChange={handleChange}
//                       required
//                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="checkOut"
//                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                     >
//                       Check-Out *
//                     </label>
//                     <input
//                       id="checkOut"
//                       name="checkOut"
//                       type="date"
//                       value={formData.checkOut}
//                       onChange={handleChange}
//                       min={formData.checkIn || undefined}
//                       required
//                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                     />
//                   </div>
//                 </div>

//                 {/* GUESTS & PURPOSE */}
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="guests"
//                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                     >
//                       Guests *
//                     </label>
//                     <div className="relative">
//                       <Users className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
//                       <input
//                         id="guests"
//                         name="guests"
//                         type="number"
//                         min="1"
//                         value={formData.guests}
//                         onChange={handleChange}
//                         placeholder="e.g. "
//                         required
//                         className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="purpose"
//                       className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                     >
//                       Purpose of Stay *
//                     </label>
//                     <select
//                       id="purpose"
//                       name="purpose"
//                       value={formData.purpose}
//                       onChange={handleChange}
//                       required
//                       className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                     >
//                       <option value="">Select purpose</option>
//                       <option value="Staycation">Staycation</option>
//                       <option value="Family Holiday">Family Holiday</option>
//                       <option value="Weekend Getaway">Weekend Getaway</option>
//                       <option value="Celebration">Celebration</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* MESSAGE */}
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
//                   >
//                     Additional Details
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="3"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about special requests or event requirements..."
//                     className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                   />
//                 </div>

//                 {/* CONSENT CHECKBOX */}
//                 <label className="flex cursor-pointer items-start gap-3 pt-2">
//                   <input
//                     type="checkbox"
//                     name="consent"
//                     checked={formData.consent}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 h-4 w-4 rounded border-slate-300 text-[#122216] focus:ring-[#b88e4c]"
//                   />
//                   <span className="text-xs text-slate-600 leading-relaxed">
//                     I agree to be contacted by Maya Niketan Villa via Phone,
//                     WhatsApp, or Email regarding availability and pricing.
//                   </span>
//                 </label>

//                 {/* SUBMIT BUTTON */}
//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="mt-4 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#122216] text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#b88e4c] hover:text-[#122216]"
//                 >
//                   <span>Send Booking Request</span>
//                   <Send className="h-4 w-4" />
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
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
} from "lucide-react";

const Contact = () => {
  // ✅ DIRECT GOOGLE MAPS LOCATION LINK (opens exact Maya Niketan Villa location)
  const googleMapsLink =
    "https://www.google.com/maps/place/Maya+Niketan+Villa/@19.4897909,72.8643073,16z/data=!4m14!1m7!3m6!1s0x3be7a9bf8090607b:0x128c7626e4b677db!2sMaya+Niketan+Villa!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk!3m5!1s0x3be7a9bf8090607b:0x128c7626e4b677db!8m2!3d19.4898127!4d72.8642998!16s%2Fg%2F11yzty7nfk?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D";

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
    console.log("Maya Niketan Villa Booking Enquiry:", formData);
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  // Animation Variants
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
      {/* Premium Background Gradient Accents */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d4ad72]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#122216]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ================= LEFT SIDE (PROPERTY INFO) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:sticky lg:top-28 lg:col-span-5 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#b88e4c]/30 bg-[#b88e4c]/10 px-4 py-1.5 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#a17936]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a17936]">
                Plan Your Stay
              </span>
            </motion.div>

            {/* Title */}
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

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-lg text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
            >
              Planning a staycation, family holiday, or special celebration?
              Send us your enquiry with your preferred dates to experience Maya
              Niketan Villa.
            </motion.p>

            {/* Status Indicator */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center justify-center gap-2.5 lg:justify-start"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-600"></span>
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Now Open • Bookings Available
              </p>
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

            {/* Address Details */}
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

            {/* ✅ Google Maps Link — DIRECT LOCATION OPENS ON CLICK */}
            <motion.div variants={itemVariants} className="mt-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#122216]/10 bg-white/80 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#122216] shadow-sm transition-all hover:border-[#122216] hover:bg-[#122216] hover:text-white"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE (FORM) ================= */}
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

              {/* SUCCESS ALERT ANIMATION */}
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
                {/* NAME & MOBILE */}
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
                      placeholder=" Full Name"
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
                        placeholder="Mobile Number"
                        required
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                      />
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
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
                      placeholder="...@gmail.com"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                    />
                  </div>
                </div>

                {/* DATES */}
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

                {/* GUESTS & PURPOSE */}
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
                        placeholder="e.g. "
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

                {/* CONSENT CHECKBOX */}
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

                {/* SUBMIT BUTTON */}
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

export default Contact;
