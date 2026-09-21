// // // src/pages/AdminBooking.jsx
// // import React, { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Trash2,
// //   Plus,
// //   Lock,
// //   Unlock,
// //   Calendar,
// //   User,
// //   Phone,
// //   Mail,
// //   AlertCircle,
// //   CheckCircle2,
// //   Shield,
// //   RefreshCw,
// //   Eye,
// //   EyeOff,
// // } from "lucide-react";

// // const AdminBooking = () => {
// //   // ============================================
// //   // PASSWORD PROTECTION (Simple)
// //   // ============================================
// //   const ADMIN_PASSWORD = "maya2026admin"; // Change this!
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [passwordInput, setPasswordInput] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [authError, setAuthError] = useState("");

// //   // ============================================
// //   // BOOKED RANGES STATE
// //   // ============================================
// //   const [bookedRanges, setBookedRanges] = useState([]);
// //   const [blockedRanges, setBlockedRanges] = useState([]);
// //   const [newBlock, setNewBlock] = useState({
// //     checkIn: "",
// //     checkOut: "",
// //     reason: "",
// //   });
// //   const [successMsg, setSuccessMsg] = useState("");
// //   const [errorMsg, setErrorMsg] = useState("");

// //   const today = new Date().toISOString().split("T")[0];

// //   // ============================================
// //   // LOAD DATA
// //   // ============================================
// //   const loadData = () => {
// //     try {
// //       const bookings = localStorage.getItem("maya_booked_dates");
// //       const blocked = localStorage.getItem("maya_blocked_dates");
// //       setBookedRanges(bookings ? JSON.parse(bookings) : []);
// //       setBlockedRanges(blocked ? JSON.parse(blocked) : []);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     loadData();
// //   }, []);

// //   // ============================================
// //   // AUTH HANDLER
// //   // ============================================
// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     if (passwordInput === ADMIN_PASSWORD) {
// //       setIsAuthenticated(true);
// //       setAuthError("");
// //       setPasswordInput("");
// //     } else {
// //       setAuthError("Incorrect password. Please try again.");
// //     }
// //   };

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

// //   // ============================================
// //   // DELETE BOOKING (Free up dates)
// //   // ============================================
// //   const deleteBooking = (index) => {
// //     if (
// //       !window.confirm(
// //         "Are you sure you want to delete this booking? The dates will become available again."
// //       )
// //     ) {
// //       return;
// //     }
// //     const updated = bookedRanges.filter((_, i) => i !== index);
// //     setBookedRanges(updated);
// //     localStorage.setItem("maya_booked_dates", JSON.stringify(updated));
// //     showSuccess("Booking deleted! Dates are now available.");
// //   };

// //   // ============================================
// //   // BLOCK DATES MANUALLY
// //   // ============================================
// //   const addBlockedRange = (e) => {
// //     e.preventDefault();
// //     setErrorMsg("");

// //     if (!newBlock.checkIn || !newBlock.checkOut) {
// //       setErrorMsg("Please select both dates.");
// //       return;
// //     }

// //     if (parseDate(newBlock.checkOut) <= parseDate(newBlock.checkIn)) {
// //       setErrorMsg("Check-out must be after check-in.");
// //       return;
// //     }

// //     const blocked = {
// //       checkIn: newBlock.checkIn,
// //       checkOut: newBlock.checkOut,
// //       reason: newBlock.reason || "Blocked by admin",
// //       blockedAt: new Date().toISOString(),
// //     };

// //     const updated = [...blockedRanges, blocked];
// //     setBlockedRanges(updated);
// //     localStorage.setItem("maya_blocked_dates", JSON.stringify(updated));
// //     setNewBlock({ checkIn: "", checkOut: "", reason: "" });
// //     showSuccess("Dates blocked successfully!");
// //   };

// //   // ============================================
// //   // REMOVE BLOCKED RANGE
// //   // ============================================
// //   const removeBlockedRange = (index) => {
// //     if (
// //       !window.confirm("Remove this blocked range? Dates will become available.")
// //     )
// //       return;
// //     const updated = blockedRanges.filter((_, i) => i !== index);
// //     setBlockedRanges(updated);
// //     localStorage.setItem("maya_blocked_dates", JSON.stringify(updated));
// //     showSuccess("Blocked dates removed!");
// //   };

// //   // ============================================
// //   // CLEAR ALL
// //   // ============================================
// //   const clearAll = () => {
// //     if (
// //       !window.confirm(
// //         "⚠️ This will delete ALL bookings and blocks. Are you sure?"
// //       )
// //     )
// //       return;
// //     localStorage.setItem("maya_booked_dates", JSON.stringify([]));
// //     localStorage.setItem("maya_blocked_dates", JSON.stringify([]));
// //     setBookedRanges([]);
// //     setBlockedRanges([]);
// //     showSuccess("All data cleared.");
// //   };

// //   const showSuccess = (msg) => {
// //     setSuccessMsg(msg);
// //     setTimeout(() => setSuccessMsg(""), 3000);
// //   };

// //   // ============================================
// //   // LOGIN SCREEN
// //   // ============================================
// //   if (!isAuthenticated) {
// //     return (
// //       <div className="flex min-h-screen w-full items-center justify-center bg-[#0e382b] px-6 py-20">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="w-full max-w-md"
// //         >
// //           <div className="rounded-3xl border border-[#d4ad72]/20 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10">
// //             <div className="text-center">
// //               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d4ad72]/10">
// //                 <Shield className="h-8 w-8 text-[#d4ad72]" />
// //               </div>
// //               <h1 className="mt-6 font-serif text-2xl font-light text-white sm:text-3xl">
// //                 Admin Access
// //               </h1>
// //               <p className="mt-2 text-sm text-white/50">
// //                 Enter password to manage bookings
// //               </p>
// //             </div>

// //             <form onSubmit={handleLogin} className="mt-8">
// //               <div className="relative">
// //                 <input
// //                   type={showPassword ? "text" : "password"}
// //                   value={passwordInput}
// //                   onChange={(e) => setPasswordInput(e.target.value)}
// //                   placeholder="Enter admin password"
// //                   className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 pr-12 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-[#d4ad72] focus:bg-white/10"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                   className="absolute right-3 top-3.5 text-white/40 hover:text-[#d4ad72]"
// //                 >
// //                   {showPassword ? (
// //                     <EyeOff className="h-5 w-5" />
// //                   ) : (
// //                     <Eye className="h-5 w-5" />
// //                   )}
// //                 </button>
// //               </div>

// //               {authError && (
// //                 <div className="mt-3 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
// //                   <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
// //                   <p className="text-xs text-red-300">{authError}</p>
// //                 </div>
// //               )}

// //               <button
// //                 type="submit"
// //                 className="mt-6 h-12 w-full rounded-xl bg-[#d4ad72] text-xs font-bold uppercase tracking-widest text-[#0e382b] transition-all hover:bg-white"
// //               >
// //                 Login
// //               </button>

// //               <p className="mt-6 text-center text-[10px] uppercase tracking-wider text-white/30">
// //                 Maya Niketan Villa • Admin Panel
// //               </p>
// //             </form>
// //           </div>
// //         </motion.div>
// //       </div>
// //     );
// //   }

// //   // ============================================
// //   // ADMIN PANEL
// //   // ============================================
// //   return (
// //     <div className="min-h-screen w-full bg-[#f8f6f1] py-12 md:py-16">
// //       <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
// //         {/* HEADER */}
// //         <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
// //           <div>
// //             <div className="inline-flex items-center gap-2 rounded-full border border-[#0e382b]/15 bg-[#0e382b]/5 px-4 py-1.5">
// //               <Shield className="h-3.5 w-3.5 text-[#9e793e]" />
// //               <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0e382b]">
// //                 Admin Panel
// //               </span>
// //             </div>
// //             <h1 className="mt-4 font-serif text-3xl font-light text-[#0e382b] sm:text-4xl">
// //               Manage <span className="italic text-[#9e793e]">Bookings</span>
// //             </h1>
// //             <p className="mt-2 text-sm text-[#0e382b]/60">
// //               Delete bookings to free dates, or block dates manually.
// //             </p>
// //           </div>

// //           <div className="flex gap-3">
// //             <button
// //               onClick={loadData}
// //               className="inline-flex items-center gap-2 rounded-xl border border-[#0e382b]/15 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0e382b] transition-all hover:border-[#9e793e] hover:text-[#9e793e]"
// //             >
// //               <RefreshCw className="h-4 w-4" />
// //               Refresh
// //             </button>
// //             <button
// //               onClick={clearAll}
// //               className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-red-600 transition-all hover:bg-red-100"
// //             >
// //               <Trash2 className="h-4 w-4" />
// //               Clear All
// //             </button>
// //           </div>
// //         </div>

// //         {/* SUCCESS / ERROR MESSAGES */}
// //         <AnimatePresence>
// //           {successMsg && (
// //             <motion.div
// //               initial={{ opacity: 0, y: -10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -10 }}
// //               className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-50 p-4"
// //             >
// //               <CheckCircle2 className="h-5 w-5 text-emerald-600" />
// //               <p className="text-sm font-medium text-emerald-800">
// //                 {successMsg}
// //               </p>
// //             </motion.div>
// //           )}
// //           {errorMsg && (
// //             <motion.div
// //               initial={{ opacity: 0, y: -10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -10 }}
// //               className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-50 p-4"
// //             >
// //               <AlertCircle className="h-5 w-5 text-red-600" />
// //               <p className="text-sm font-medium text-red-800">{errorMsg}</p>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
// //           {/* ============================================
// //               LEFT: ACTIVE BOOKINGS
// //           ============================================ */}
// //           <div className="lg:col-span-2">
// //             <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl sm:p-8">
// //               <div className="mb-6 flex items-center justify-between">
// //                 <div>
// //                   <h2 className="font-serif text-xl font-medium text-[#0e382b] sm:text-2xl">
// //                     Active Bookings
// //                   </h2>
// //                   <p className="mt-1 text-xs text-[#0e382b]/50">
// //                     {bookedRanges.length} booking
// //                     {bookedRanges.length !== 1 ? "s" : ""} found
// //                   </p>
// //                 </div>
// //                 <div className="rounded-full bg-[#0e382b] px-4 py-1.5">
// //                   <p className="text-xs font-bold text-[#d4ad72]">
// //                     {bookedRanges.length}
// //                   </p>
// //                 </div>
// //               </div>

// //               {bookedRanges.length === 0 ? (
// //                 <div className="rounded-2xl border border-dashed border-[#0e382b]/20 py-16 text-center">
// //                   <Calendar className="mx-auto h-12 w-12 text-[#0e382b]/20" />
// //                   <p className="mt-4 font-serif text-lg italic text-[#0e382b]/40">
// //                     No bookings yet
// //                   </p>
// //                 </div>
// //               ) : (
// //                 <div className="space-y-3">
// //                   {bookedRanges.map((booking, index) => (
// //                     <motion.div
// //                       key={index}
// //                       initial={{ opacity: 0, y: 10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       transition={{ delay: index * 0.05 }}
// //                       className="group rounded-2xl border border-[#0e382b]/10 bg-[#f8f6f1] p-5 transition-all hover:border-[#9e793e]/40 hover:shadow-md"
// //                     >
// //                       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
// //                         <div className="flex-1">
// //                           <div className="flex items-center gap-2">
// //                             <Calendar className="h-4 w-4 text-[#9e793e]" />
// //                             <p className="font-serif text-base font-medium text-[#0e382b] sm:text-lg">
// //                               {formatDate(booking.checkIn)} →{" "}
// //                               {formatDate(booking.checkOut)}
// //                             </p>
// //                           </div>

// //                           <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
// //                             {booking.name && (
// //                               <div className="flex items-center gap-2 text-xs text-[#0e382b]/60">
// //                                 <User className="h-3.5 w-3.5" />
// //                                 <span>{booking.name}</span>
// //                               </div>
// //                             )}
// //                             {booking.mobile && (
// //                               <div className="flex items-center gap-2 text-xs text-[#0e382b]/60">
// //                                 <Phone className="h-3.5 w-3.5" />
// //                                 <span>{booking.mobile}</span>
// //                               </div>
// //                             )}
// //                             {booking.email && (
// //                               <div className="flex items-center gap-2 text-xs text-[#0e382b]/60">
// //                                 <Mail className="h-3.5 w-3.5" />
// //                                 <span className="truncate">
// //                                   {booking.email}
// //                                 </span>
// //                               </div>
// //                             )}
// //                           </div>
// //                         </div>

// //                         <button
// //                           onClick={() => deleteBooking(index)}
// //                           className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-red-600 transition-all hover:bg-red-500 hover:text-white"
// //                         >
// //                           <Trash2 className="h-4 w-4" />
// //                           Delete
// //                         </button>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* ============================================
// //               RIGHT: BLOCK DATES + BLOCKED LIST
// //           ============================================ */}
// //           <div className="space-y-8">
// //             {/* BLOCK DATES FORM */}
// //             <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl sm:p-8">
// //               <div className="mb-6 flex items-center gap-2">
// //                 <Lock className="h-5 w-5 text-[#9e793e]" />
// //                 <h2 className="font-serif text-xl font-medium text-[#0e382b]">
// //                   Block Dates
// //                 </h2>
// //               </div>

// //               <form onSubmit={addBlockedRange} className="space-y-4">
// //                 <div>
// //                   <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-[#0e382b]/60">
// //                     From Date *
// //                   </label>
// //                   <input
// //                     type="date"
// //                     min={today}
// //                     value={newBlock.checkIn}
// //                     onChange={(e) =>
// //                       setNewBlock({ ...newBlock, checkIn: e.target.value })
// //                     }
// //                     required
// //                     className="h-11 w-full rounded-xl border border-[#0e382b]/15 bg-[#f8f6f1] px-4 text-sm outline-none focus:border-[#9e793e] focus:bg-white"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-[#0e382b]/60">
// //                     To Date *
// //                   </label>
// //                   <input
// //                     type="date"
// //                     min={newBlock.checkIn || today}
// //                     value={newBlock.checkOut}
// //                     onChange={(e) =>
// //                       setNewBlock({ ...newBlock, checkOut: e.target.value })
// //                     }
// //                     required
// //                     className="h-11 w-full rounded-xl border border-[#0e382b]/15 bg-[#f8f6f1] px-4 text-sm outline-none focus:border-[#9e793e] focus:bg-white"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-[#0e382b]/60">
// //                     Reason (Optional)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     value={newBlock.reason}
// //                     onChange={(e) =>
// //                       setNewBlock({ ...newBlock, reason: e.target.value })
// //                     }
// //                     placeholder="e.g. Maintenance"
// //                     className="h-11 w-full rounded-xl border border-[#0e382b]/15 bg-[#f8f6f1] px-4 text-sm outline-none focus:border-[#9e793e] focus:bg-white"
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0e382b] text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#9e793e]"
// //                 >
// //                   <Plus className="h-4 w-4" />
// //                   Block These Dates
// //                 </button>
// //               </form>
// //             </div>

// //             {/* BLOCKED DATES LIST */}
// //             <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-xl sm:p-8">
// //               <div className="mb-6 flex items-center gap-2">
// //                 <Unlock className="h-5 w-5 text-[#9e793e]" />
// //                 <h2 className="font-serif text-xl font-medium text-[#0e382b]">
// //                   Blocked Dates
// //                 </h2>
// //               </div>

// //               {blockedRanges.length === 0 ? (
// //                 <p className="py-8 text-center text-sm italic text-[#0e382b]/40">
// //                   No dates blocked
// //                 </p>
// //               ) : (
// //                 <div className="space-y-3">
// //                   {blockedRanges.map((block, index) => (
// //                     <div
// //                       key={index}
// //                       className="rounded-xl border border-[#9e793e]/20 bg-[#d4ad72]/5 p-4"
// //                     >
// //                       <div className="flex items-start justify-between gap-3">
// //                         <div className="flex-1">
// //                           <p className="text-xs font-medium text-[#0e382b]">
// //                             {formatDate(block.checkIn)} →{" "}
// //                             {formatDate(block.checkOut)}
// //                           </p>
// //                           {block.reason && (
// //                             <p className="mt-1 text-[10px] italic text-[#0e382b]/50">
// //                               {block.reason}
// //                             </p>
// //                           )}
// //                         </div>
// //                         <button
// //                           onClick={() => removeBlockedRange(index)}
// //                           className="text-red-500 transition-all hover:text-red-700"
// //                           aria-label="Remove block"
// //                         >
// //                           <Trash2 className="h-4 w-4" />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* HELP BOX */}
// //         <div className="mt-10 rounded-2xl border border-[#9e793e]/20 bg-[#d4ad72]/5 p-6">
// //           <h3 className="font-serif text-lg font-medium text-[#0e382b]">
// //             💡 How This Works
// //           </h3>
// //           <ul className="mt-3 space-y-2 text-sm text-[#0e382b]/70">
// //             <li>
// //               • <strong>Delete a booking</strong> → Dates become available for
// //               new bookings immediately
// //             </li>
// //             <li>
// //               • <strong>Block dates</strong> → Dates shown as unavailable (for
// //               maintenance or personal use)
// //             </li>
// //             <li>
// //               • <strong>Client view</strong> → On booking page, blocked/booked
// //               dates show as "Not Available"
// //             </li>
// //             <li>
// //               • <strong>Storage</strong> → All data saved in browser's
// //               localStorage
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminBooking;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Lock,
//   Eye,
//   EyeOff,
//   Trash2,
//   Users,
//   Phone,
//   Mail,
//   Calendar,
//   X,
//   CheckCircle2,
//   Clock,
//   AlertCircle,
//   LogOut,
//   Search,
//   ShieldCheck,
//   RefreshCw,
// } from "lucide-react";

// const ADMIN_PASSWORD = "maya2026admin";
// const SESSION_KEY = "maya_admin_session";

// const Admin = () => {
//   const [isAuthed, setIsAuthed] = useState(() => {
//     if (typeof window === "undefined") return false;
//     return sessionStorage.getItem(SESSION_KEY) === "yes";
//   });
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const [bookings, setBookings] = useState([]);
//   const [blockedRanges, setBlockedRanges] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [confirmDelete, setConfirmDelete] = useState(null);

//   // ============================================
//   // LOAD DATA
//   // ============================================
//   const loadData = () => {
//     try {
//       const b = localStorage.getItem("maya_all_bookings");
//       setBookings(b ? JSON.parse(b) : []);
//       const bl = localStorage.getItem("maya_blocked_dates");
//       setBlockedRanges(bl ? JSON.parse(bl) : []);
//     } catch {
//       setBookings([]);
//       setBlockedRanges([]);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthed) return;
//     loadData();

//     const onStorage = (e) => {
//       if (e.key === "maya_all_bookings") loadData();
//       if (e.key === "maya_blocked_dates") loadData();
//     };
//     window.addEventListener("storage", onStorage);
//     const interval = setInterval(loadData, 3000);
//     return () => {
//       window.removeEventListener("storage", onStorage);
//       clearInterval(interval);
//     };
//   }, [isAuthed]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (password === ADMIN_PASSWORD) {
//       sessionStorage.setItem(SESSION_KEY, "yes");
//       setIsAuthed(true);
//       setError("");
//       setPassword("");
//     } else {
//       setError("❌ Incorrect password. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem(SESSION_KEY);
//     setIsAuthed(false);
//   };

//   const handleDelete = (id) => {
//     try {
//       const stored = localStorage.getItem("maya_all_bookings");
//       const list = stored ? JSON.parse(stored) : [];
//       const filtered = list.filter((b) => b.id !== id);
//       localStorage.setItem("maya_all_bookings", JSON.stringify(filtered));
//       setBookings(filtered);
//       setConfirmDelete(null);
//     } catch {}
//   };

//   const handleBlockToggle = (booking) => {
//     // Add to blocked ranges
//     try {
//       const stored = localStorage.getItem("maya_blocked_dates");
//       const list = stored ? JSON.parse(stored) : [];
//       const newBlock = {
//         id: `block-${Date.now()}`,
//         checkIn: booking.checkIn,
//         checkOut: booking.checkOut,
//         reason: `Blocked from booking ${booking.name}`,
//         blockedAt: new Date().toISOString(),
//       };
//       list.push(newBlock);
//       localStorage.setItem("maya_blocked_dates", JSON.stringify(list));
//       setBlockedRanges(list);
//     } catch {}
//   };

//   // ============================================
//   // FILTER
//   // ============================================
//   const filteredBookings = bookings
//     .filter((b) => {
//       if (filter === "confirmed" && b.status !== "confirmed") return false;
//       if (filter === "draft" && b.status !== "draft") return false;
//       if (filter === "blocked" && b.status !== "blocked") return false;
//       return true;
//     })
//     .filter((b) => {
//       if (!search.trim()) return true;
//       const s = search.toLowerCase();
//       return (
//         (b.name || "").toLowerCase().includes(s) ||
//         (b.mobile || "").toLowerCase().includes(s) ||
//         (b.email || "").toLowerCase().includes(s) ||
//         (b.checkIn || "").includes(s) ||
//         (b.checkOut || "").includes(s)
//       );
//     })
//     .sort((a, b) => new Date(b.bookedAt || 0) - new Date(a.bookedAt || 0));

//   const stats = {
//     total: bookings.length,
//     confirmed: bookings.filter((b) => b.status === "confirmed").length,
//     draft: bookings.filter((b) => b.status === "draft").length,
//   };

//   // ============================================
//   // LOGIN SCREEN
//   // ============================================
//   if (!isAuthed) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-[#0e382b] p-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
//         >
//           <div className="flex flex-col items-center text-center">
//             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0e382b]">
//               <Lock className="h-7 w-7 text-[#d4ad72]" />
//             </div>
//             <h1 className="mt-5 font-serif text-2xl font-semibold text-[#0e382b] sm:text-3xl">
//               Admin Access
//             </h1>
//             <p className="mt-2 text-sm text-slate-500">
//               Enter the admin password to view all client bookings.
//             </p>
//           </div>

//           <form onSubmit={handleLogin} className="mt-8 space-y-5">
//             <div>
//               <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
//                 Password
//               </label>
//               <div className="relative">
//                 <ShieldCheck className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter admin password"
//                   autoFocus
//                   className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-12 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((s) => !s)}
//                   className="absolute right-3 top-3.5 text-slate-400 transition hover:text-slate-600"
//                   aria-label="Toggle password visibility"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5" />
//                   ) : (
//                     <Eye className="h-5 w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {error && (
//               <motion.div
//                 initial={{ opacity: 0, y: -5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700"
//               >
//                 {error}
//               </motion.div>
//             )}

//             <motion.button
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#122216] text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#b88e4c] hover:text-[#122216]"
//             >
//               <Lock className="h-4 w-4" />
//               Unlock Dashboard
//             </motion.button>
//           </form>

//           <p className="mt-6 text-center text-[11px] text-slate-400">
//             🔒 Session expires when you close the browser tab.
//           </p>
//         </motion.div>
//       </div>
//     );
//   }

//   // ============================================
//   // DASHBOARD
//   // ============================================
//   return (
//     <div className="min-h-screen bg-[#f8f6f1] pb-16">
//       {/* HEADER */}
//       <div className="border-b border-[#0e382b]/10 bg-white">
//         <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9e793e]">
//               Maya Niketan Villa
//             </p>
//             <h1 className="font-serif text-2xl font-semibold text-[#0e382b] sm:text-3xl">
//               Admin Dashboard
//             </h1>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               onClick={loadData}
//               className="flex items-center gap-2 rounded-xl border border-[#0e382b]/15 bg-white px-3 py-2.5 text-xs font-semibold text-[#0e382b] transition hover:bg-[#0e382b]/5"
//             >
//               <RefreshCw className="h-3.5 w-3.5" />
//               Refresh
//             </button>
//             <button
//               type="button"
//               onClick={handleLogout}
//               className="flex items-center gap-2 rounded-xl bg-[#122216] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#b88e4c] hover:text-[#122216]"
//             >
//               <LogOut className="h-3.5 w-3.5" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* STATS */}
//       <div className="mx-auto max-w-[1600px] px-5 pt-8 sm:px-8 lg:px-12">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           {[
//             {
//               icon: Users,
//               label: "Total Clients",
//               value: stats.total,
//               color: "bg-blue-50 text-blue-700",
//             },
//             {
//               icon: CheckCircle2,
//               label: "Confirmed Bookings",
//               value: stats.confirmed,
//               color: "bg-emerald-50 text-emerald-700",
//             },
//             {
//               icon: Clock,
//               label: "Drafts (Not Submitted)",
//               value: stats.draft,
//               color: "bg-amber-50 text-amber-700",
//             },
//           ].map((s, i) => {
//             const Icon = s.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08 }}
//                 className="flex items-center gap-4 rounded-2xl border border-[#0e382b]/10 bg-white p-5 shadow-sm"
//               >
//                 <div
//                   className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.color}`}
//                 >
//                   <Icon className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     {s.label}
//                   </p>
//                   <p className="font-serif text-2xl font-semibold text-[#0e382b]">
//                     {s.value}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* SEARCH & FILTER */}
//         <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//           <div className="relative w-full sm:max-w-md">
//             <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name, mobile, email or date..."
//               className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition focus:border-[#b88e4c] focus:ring-2 focus:ring-[#b88e4c]/20"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             {[
//               { key: "all", label: "All" },
//               { key: "confirmed", label: "Confirmed" },
//               { key: "draft", label: "Drafts" },
//             ].map((f) => (
//               <button
//                 key={f.key}
//                 type="button"
//                 onClick={() => setFilter(f.key)}
//                 className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
//                   filter === f.key
//                     ? "bg-[#122216] text-white"
//                     : "bg-white text-[#0e382b] border border-[#0e382b]/15 hover:bg-[#0e382b]/5"
//                 }`}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* BOOKINGS LIST */}
//       <div className="mx-auto mt-6 max-w-[1600px] px-5 sm:px-8 lg:px-12">
//         {filteredBookings.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#0e382b]/20 bg-white/60 py-20 text-center"
//           >
//             <AlertCircle className="h-10 w-10 text-slate-400" />
//             <p className="mt-4 font-serif text-lg text-[#0e382b]">
//               No bookings found
//             </p>
//             <p className="mt-1 text-sm text-slate-500">
//               {search || filter !== "all"
//                 ? "Try changing the filter or search."
//                 : "Clients' data will appear here once they fill the form."}
//             </p>
//           </motion.div>
//         ) : (
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
//             <AnimatePresence>
//               {filteredBookings.map((b, idx) => (
//                 <motion.div
//                   key={b.id}
//                   layout
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.3, delay: idx * 0.03 }}
//                   className="relative overflow-hidden rounded-2xl border border-[#0e382b]/10 bg-white p-5 shadow-sm transition hover:shadow-md"
//                 >
//                   {/* Status ribbon */}
//                   <div className="absolute right-0 top-0 rounded-bl-xl px-3 py-1 text-[9px] font-bold uppercase tracking-wider">
//                     {b.status === "confirmed" ? (
//                       <span className="text-emerald-700">✔ Confirmed</span>
//                     ) : (
//                       <span className="text-amber-700">✎ Draft</span>
//                     )}
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0e382b]/5 font-serif text-base font-semibold text-[#0e382b]">
//                       {(b.name || "?").charAt(0).toUpperCase()}
//                     </div>
//                     <div className="min-w-0 flex-1 pr-16">
//                       <p className="truncate font-serif text-base font-semibold text-[#0e382b]">
//                         {b.name || "—"}
//                       </p>
//                       <p className="text-[11px] text-slate-500">
//                         {b.status === "confirmed"
//                           ? "Submitted"
//                           : "Auto-saved draft"}{" "}
//                         •{" "}
//                         {b.bookedAt
//                           ? new Date(b.bookedAt).toLocaleString("en-IN")
//                           : "—"}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-4 space-y-2 text-xs">
//                     <div className="flex items-center gap-2 text-slate-700">
//                       <Phone className="h-3.5 w-3.5 text-[#9e793e]" />
//                       <span className="font-medium">{b.mobile || "—"}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-slate-700">
//                       <Mail className="h-3.5 w-3.5 text-[#9e793e]" />
//                       <span className="truncate font-medium">
//                         {b.email || "—"}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2 text-slate-700">
//                       <Calendar className="h-3.5 w-3.5 text-[#9e793e]" />
//                       <span className="font-medium">
//                         {b.checkIn || "—"} → {b.checkOut || "—"}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2 text-slate-700">
//                       <Users className="h-3.5 w-3.5 text-[#9e793e]" />
//                       <span className="font-medium">
//                         {b.guests || "—"} Guests • {b.purpose || "—"}
//                       </span>
//                     </div>
//                   </div>

//                   {b.message && (
//                     <p className="mt-3 rounded-lg bg-slate-50 p-2 text-[11px] italic text-slate-600">
//                       "{b.message}"
//                     </p>
//                   )}

//                   <div className="mt-4 flex items-center gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setConfirmDelete(b)}
//                       className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-red-700 transition hover:bg-red-100"
//                     >
//                       <Trash2 className="h-3.5 w-3.5" />
//                       Remove
//                     </button>
//                     {b.status === "confirmed" && (
//                       <button
//                         type="button"
//                         onClick={() => handleBlockToggle(b)}
//                         className="flex items-center justify-center gap-2 rounded-lg border border-[#0e382b]/15 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#0e382b] transition hover:bg-[#0e382b]/5"
//                         title="Block these dates for future bookings"
//                       >
//                         Block Dates
//                       </button>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </div>

//       {/* DELETE CONFIRM MODAL */}
//       <AnimatePresence>
//         {confirmDelete && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//             onClick={() => setConfirmDelete(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               onClick={(e) => e.stopPropagation()}
//               className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
//                   <Trash2 className="h-5 w-5 text-red-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-serif text-lg font-semibold text-[#122216]">
//                     Remove this client?
//                   </h3>
//                   <p className="mt-1 text-sm text-slate-600">
//                     Are you sure you want to delete{" "}
//                     <span className="font-semibold">
//                       {confirmDelete.name || "this record"}
//                     </span>
//                     ? This action cannot be undone.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 flex items-center gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setConfirmDelete(null)}
//                   className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-600 transition hover:bg-slate-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handleDelete(confirmDelete.id)}
//                   className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-red-700"
//                 >
//                   Yes, Remove
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Admin;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Eye,
  EyeOff,
  Trash2,
  Users,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  LogOut,
  Search,
  ShieldCheck,
  RefreshCw,
  Ban,
} from "lucide-react";

const ADMIN_PASSWORD = "maya2026admin";
const SESSION_KEY = "maya_admin_session";

const Admin = () => {
  const [isAuthed, setIsAuthed] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) === "yes";
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Load
  const loadData = () => {
    try {
      const b = localStorage.getItem("maya_all_bookings");
      setBookings(b ? JSON.parse(b) : []);
    } catch {
      setBookings([]);
    }
  };

  useEffect(() => {
    if (!isAuthed) return;
    loadData();
    const onStorage = (e) => {
      if (e.key === "maya_all_bookings") loadData();
    };
    window.addEventListener("storage", onStorage);
    const interval = setInterval(loadData, 2000);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
  }, [isAuthed]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "yes");
      setIsAuthed(true);
      setError("");
      setPassword("");
    } else {
      setError("❌ Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthed(false);
  };

  const handleDelete = (id) => {
    try {
      const stored = localStorage.getItem("maya_all_bookings");
      const list = stored ? JSON.parse(stored) : [];
      const filtered = list.filter((b) => b.id !== id);
      localStorage.setItem("maya_all_bookings", JSON.stringify(filtered));
      setBookings(filtered);
      setConfirmDelete(null);
    } catch {}
  };

  // Filter
  const filteredBookings = bookings
    .filter((b) => {
      if (filter === "all") return true;
      if (filter === "confirmed") return b.status === "confirmed";
      if (filter === "draft") return b.status === "draft";
      if (filter === "attempted") return b.status === "attempted-unavailable";
      return true;
    })
    .filter((b) => {
      if (!search.trim()) return true;
      const s = search.toLowerCase();
      return (
        (b.name || "").toLowerCase().includes(s) ||
        (b.mobile || "").toLowerCase().includes(s) ||
        (b.email || "").toLowerCase().includes(s)
      );
    })
    .sort((a, b) => new Date(b.bookedAt || 0) - new Date(a.bookedAt || 0));

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    draft: bookings.filter((b) => b.status === "draft").length,
    attempted: bookings.filter((b) => b.status === "attempted-unavailable")
      .length,
  };

  // ============================================
  // LOGIN SCREEN
  // ============================================
  if (!isAuthed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0e382b] p-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0e382b]">
              <Lock className="h-7 w-7 text-[#d4ad72]" />
            </div>
            <h1 className="mt-5 font-serif text-2xl font-semibold text-[#0e382b] sm:text-3xl">
              Admin Access
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Enter the admin password to view all client bookings.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                Password
              </label>
              <div className="relative">
                <ShieldCheck className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  autoFocus
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-12 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-3.5 text-slate-400 transition hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#122216] text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#b88e4c] hover:text-[#122216]"
            >
              <Lock className="h-4 w-4" />
              Unlock Dashboard
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  // ============================================
  // DASHBOARD
  // ============================================
  return (
    <div className="min-h-screen bg-[#f8f6f1] pb-16">
      {/* HEADER */}
      <div className="border-b border-[#0e382b]/10 bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9e793e]">
              Maya Niketan Villa
            </p>
            <h1 className="font-serif text-2xl font-semibold text-[#0e382b] sm:text-3xl">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadData}
              className="flex items-center gap-2 rounded-xl border border-[#0e382b]/15 bg-white px-3 py-2.5 text-xs font-semibold text-[#0e382b] transition hover:bg-[#0e382b]/5"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl bg-[#122216] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#b88e4c] hover:text-[#122216]"
            >
              <LogOut className="h-3.5 w-3.5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="mx-auto max-w-[1600px] px-5 pt-8 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            {
              icon: Users,
              label: "Total Clients",
              value: stats.total,
              color: "bg-blue-50 text-blue-700",
            },
            {
              icon: CheckCircle2,
              label: "Confirmed",
              value: stats.confirmed,
              color: "bg-emerald-50 text-emerald-700",
            },
            {
              icon: Clock,
              label: "Drafts",
              value: stats.draft,
              color: "bg-amber-50 text-amber-700",
            },
            {
              icon: Ban,
              label: "Attempted (Unavailable)",
              value: stats.attempted,
              color: "bg-red-50 text-red-700",
            },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-2xl border border-[#0e382b]/10 bg-white p-4 shadow-sm"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${s.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    {s.label}
                  </p>
                  <p className="font-serif text-xl font-semibold text-[#0e382b]">
                    {s.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SEARCH & FILTER */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, mobile, or email..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition focus:border-[#b88e4c] focus:ring-2 focus:ring-[#b88e4c]/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: "all", label: "All" },
              { key: "confirmed", label: "Confirmed" },
              { key: "draft", label: "Drafts" },
              { key: "attempted", label: "Attempted" },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  filter === f.key
                    ? "bg-[#122216] text-white"
                    : "bg-white text-[#0e382b] border border-[#0e382b]/15 hover:bg-[#0e382b]/5"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BOOKINGS */}
      <div className="mx-auto mt-6 max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {filteredBookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#0e382b]/20 bg-white/60 py-20 text-center"
          >
            <AlertCircle className="h-10 w-10 text-slate-400" />
            <p className="mt-4 font-serif text-lg text-[#0e382b]">
              No records found
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {search || filter !== "all"
                ? "Try changing the filter or search."
                : "Clients' data will appear here once they fill the form."}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence>
              {filteredBookings.map((b, idx) => {
                const isConfirmed = b.status === "confirmed";
                const isAttempt = b.status === "attempted-unavailable";
                return (
                  <motion.div
                    key={b.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className={`relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
                      isAttempt
                        ? "border-red-200"
                        : isConfirmed
                        ? "border-emerald-200"
                        : "border-[#0e382b]/10"
                    }`}
                  >
                    {/* Ribbon */}
                    <div className="absolute right-0 top-0 rounded-bl-xl px-3 py-1 text-[9px] font-bold uppercase tracking-wider">
                      {isConfirmed && (
                        <span className="text-emerald-700">✔ Confirmed</span>
                      )}
                      {isAttempt && (
                        <span className="text-red-700">
                          ⚠ Tried Unavailable
                        </span>
                      )}
                      {b.status === "draft" && (
                        <span className="text-amber-700">✎ Draft</span>
                      )}
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0e382b]/5 font-serif text-base font-semibold text-[#0e382b]">
                        {(b.name || "?").charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0 flex-1 pr-16">
                        <p className="truncate font-serif text-base font-semibold text-[#0e382b]">
                          {b.name || "—"}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {isConfirmed
                            ? "Submitted"
                            : isAttempt
                            ? "Attempted (dates booked)"
                            : "Auto-saved draft"}{" "}
                          •{" "}
                          {b.bookedAt
                            ? new Date(b.bookedAt).toLocaleString("en-IN")
                            : "—"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Phone className="h-3.5 w-3.5 text-[#9e793e]" />
                        <span className="font-medium">{b.mobile || "—"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Mail className="h-3.5 w-3.5 text-[#9e793e]" />
                        <span className="truncate font-medium">
                          {b.email || "—"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Calendar className="h-3.5 w-3.5 text-[#9e793e]" />
                        <span className="font-medium">
                          {b.checkIn || "—"} → {b.checkOut || "—"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Users className="h-3.5 w-3.5 text-[#9e793e]" />
                        <span className="font-medium">
                          {b.guests || "—"} Guests • {b.purpose || "—"}
                        </span>
                      </div>
                    </div>

                    {b.message && (
                      <p className="mt-3 rounded-lg bg-slate-50 p-2 text-[11px] italic text-slate-600">
                        "{b.message}"
                      </p>
                    )}

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setConfirmDelete(b)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-red-700 transition hover:bg-red-100"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* DELETE MODAL */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setConfirmDelete(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <Trash2 className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#122216]">
                    Remove this client?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">
                      {confirmDelete.name || "this record"}
                    </span>
                    ? This action cannot be undone.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setConfirmDelete(null)}
                  className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(confirmDelete.id)}
                  className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-red-700"
                >
                  Yes, Remove
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;
