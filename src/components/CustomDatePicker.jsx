import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const CustomDatePicker = ({
  label,
  value,
  onChange,
  minDate,
  getDateStatus, // function(dateStr) => "available" | "booked" | "blocked" | "past"
  placeholder = "dd-mm-yyyy",
  required = false,
  id,
}) => {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => {
    if (value) {
      const d = new Date(value);
      if (!isNaN(d)) return new Date(d.getFullYear(), d.getMonth(), 1);
    }
    return new Date();
  });
  const wrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toDateStr = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const formatDisplay = (dateStr) => {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split("-");
    return `${d}-${m}-${y}`;
  };

  const getDaysInMonth = (date) => {
    const y = date.getFullYear();
    const m = date.getMonth();
    const first = new Date(y, m, 1);
    const last = new Date(y, m + 1, 0);
    const days = [];
    for (let i = 0; i < first.getDay(); i++) days.push(null);
    for (let d = 1; d <= last.getDate(); d++) days.push(new Date(y, m, d));
    return days;
  };

  const days = getDaysInMonth(viewMonth);
  const monthName = viewMonth.toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const changeMonth = (delta) => {
    setViewMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1)
    );
  };

  const handleSelect = (date) => {
    if (!date) return;
    const ds = toDateStr(date);
    const status = getDateStatus ? getDateStatus(ds) : "available";

    // Booked / blocked → close and let parent handle popup
    if (status === "booked" || status === "blocked" || status === "past") {
      onChange(ds, status); // Parent will show popup
      setOpen(false);
      return;
    }

    onChange(ds, "available");
    setOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
      >
        {label} {required && "*"}
      </label>

      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#b88e4c] focus:bg-white focus:ring-2 focus:ring-[#b88e4c]/20"
      >
        <span className={value ? "text-slate-800" : "text-slate-400"}>
          {value ? formatDisplay(value) : placeholder}
        </span>
        <CalendarIcon className="h-5 w-5 text-slate-400" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-40 mt-2 w-[320px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="font-serif text-base font-semibold text-[#0e382b]">
                {monthName}
              </p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[#0e382b] transition hover:bg-[#0e382b]/5"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[#0e382b] transition hover:bg-[#0e382b]/5"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Weekdays */}
            <div className="mt-3 grid grid-cols-7 gap-1 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div
                  key={i}
                  className="text-[10px] font-semibold uppercase tracking-wider text-[#0e382b]/40"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="mt-2 grid grid-cols-7 gap-1">
              {days.map((date, i) => {
                if (!date) return <div key={i} className="aspect-square" />;

                const ds = toDateStr(date);
                const status = getDateStatus ? getDateStatus(ds) : "available";
                const isSelected = value === ds;
                const isPast = status === "past";
                const isBooked = status === "booked" || status === "blocked";

                let cls =
                  "relative flex aspect-square items-center justify-center rounded-lg text-xs font-medium transition-all duration-150 ";

                if (isPast) {
                  cls += "cursor-not-allowed text-slate-300 line-through";
                } else if (isBooked) {
                  cls += "cursor-not-allowed bg-red-500 text-white";
                } else if (isSelected) {
                  cls += "bg-[#0e382b] text-white shadow-md";
                } else {
                  cls +=
                    "bg-emerald-50 text-[#0e382b] hover:bg-emerald-100 cursor-pointer";
                }

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelect(date)}
                    disabled={isPast}
                    className={cls}
                    title={
                      isBooked
                        ? "Booked — Not Available"
                        : isPast
                        ? "Past date"
                        : "Available"
                    }
                  >
                    {date.getDate()}
                    {isBooked && (
                      <span className="absolute right-0.5 top-0.5 text-[9px] font-bold leading-none">
                        ✕
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded bg-emerald-50 ring-1 ring-emerald-200" />
                  <span className="text-slate-500">Available</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded bg-red-500" />
                  <span className="text-slate-500">Booked ✕</span>
                </div>
              </div>
              {value && (
                <button
                  type="button"
                  onClick={() => {
                    onChange("", "available");
                    setOpen(false);
                  }}
                  className="text-[10px] font-semibold uppercase tracking-wider text-red-500 hover:text-red-700"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDatePicker;
