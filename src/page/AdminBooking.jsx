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
  Check,
  X,
} from "lucide-react";

const ADMIN_PASSWORD = "maya2026admin";
const SESSION_KEY = "maya_admin_session";

const AdminBooking = () => {
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
    const interval = setInterval(loadData, 1500);
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

  // ✅ Confirm booking (pending / draft / attempted → confirmed)
  const handleApprove = (id) => {
    try {
      const stored = localStorage.getItem("maya_all_bookings");
      const list = stored ? JSON.parse(stored) : [];
      const updated = list.map((b) =>
        b.id === id
          ? { ...b, status: "confirmed", approvedAt: new Date().toISOString() }
          : b
      );
      localStorage.setItem("maya_all_bookings", JSON.stringify(updated));
      setBookings(updated);
    } catch {}
  };

  // ❌ Un-confirm (confirmed → pending)
  const handleUnconfirm = (id) => {
    try {
      const stored = localStorage.getItem("maya_all_bookings");
      const list = stored ? JSON.parse(stored) : [];
      const updated = list.map((b) =>
        b.id === id ? { ...b, status: "pending", approvedAt: null } : b
      );
      localStorage.setItem("maya_all_bookings", JSON.stringify(updated));
      setBookings(updated);
    } catch {}
  };

  // 🗑 Delete single
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

  // 🗑 Delete all
  const handleRemoveAll = () => {
    if (!window.confirm("⚠️ Remove ALL client data? This cannot be undone."))
      return;
    localStorage.setItem("maya_all_bookings", JSON.stringify([]));
    setBookings([]);
  };

  const filteredBookings = bookings
    .filter((b) => {
      if (filter === "all") return true;
      if (filter === "confirmed") return b.status === "confirmed";
      if (filter === "pending")
        return b.status === "pending" || b.status === "draft";
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
    pending: bookings.filter(
      (b) => b.status === "pending" || b.status === "draft"
    ).length,
    attempted: bookings.filter((b) => b.status === "attempted-unavailable")
      .length,
  };

  // ============ LOGIN ============
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

  // ============ DASHBOARD ============
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
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={loadData}
              className="flex items-center gap-2 rounded-xl border border-[#0e382b]/15 bg-white px-3 py-2.5 text-xs font-semibold text-[#0e382b] transition hover:bg-[#0e382b]/5"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </button>
            {bookings.length > 0 && (
              <button
                type="button"
                onClick={handleRemoveAll}
                className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-semibold text-red-700 transition hover:bg-red-100"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Remove All
              </button>
            )}
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
              label: "Pending",
              value: stats.pending,
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
              { key: "pending", label: "Pending" },
              { key: "attempted", label: "Attempted" },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  filter === f.key
                    ? "bg-[#122216] text-white"
                    : "border border-[#0e382b]/15 bg-white text-[#0e382b] hover:bg-[#0e382b]/5"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BOOKINGS GRID */}
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
                : "Client data will appear here once they submit an enquiry."}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence>
              {filteredBookings.map((b, idx) => {
                const isConfirmed = b.status === "confirmed";
                const isAttempt = b.status === "attempted-unavailable";
                const isPending = !isConfirmed && !isAttempt;
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
                        : "border-amber-200"
                    }`}
                  >
                    <div className="absolute right-0 top-0 rounded-bl-xl px-3 py-1 text-[9px] font-bold uppercase tracking-wider">
                      {isConfirmed && (
                        <span className="text-emerald-700">✔ Confirmed</span>
                      )}
                      {isAttempt && (
                        <span className="text-red-700">
                          ⚠ Tried Unavailable
                        </span>
                      )}
                      {isPending && (
                        <span className="text-amber-700">⏳ Pending</span>
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
                            ? "Confirmed"
                            : isAttempt
                            ? "Attempted"
                            : "Pending approval"}{" "}
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

                    {/* ACTION BUTTONS — Confirm + Remove always visible */}
                    <div className="mt-4 flex items-center gap-2">
                      {!isConfirmed ? (
                        <button
                          type="button"
                          onClick={() => handleApprove(b.id)}
                          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-emerald-700"
                        >
                          <Check className="h-3.5 w-3.5" />
                          Confirm
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleUnconfirm(b.id)}
                          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-emerald-700 transition hover:bg-emerald-100"
                        >
                          <Check className="h-3.5 w-3.5" />
                          Confirmed
                        </button>
                      )}
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

export default AdminBooking;
