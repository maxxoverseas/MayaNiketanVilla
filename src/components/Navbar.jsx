import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    purpose: "Staycation",
  });
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Amenities",
      path: "/amenities",
    },
    {
      name: "Location",
      path: "/location",
    },
    {
      name: "Testimonials",
      path: "/testimonials",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (bookingOpen || menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [bookingOpen, menuOpen]);

  useEffect(() => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const today = new Date().toISOString().split("T")[0];
  const formattedDay = currentDateTime.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  const formattedDate = currentDateTime.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleBooking = (e) => {
    e.preventDefault();

    console.log("Booking Data:", {
      ...formData,
      bookingCreatedAt: currentDateTime,
    });

    alert("Thank you! Your booking enquiry has been submitted.");

    setBookingOpen(false);

    setFormData({
      name: "",
      mobile: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
      purpose: "Staycation",
    });
  };
  const handleLogoClick = () => {
    setMenuOpen(false);
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <>
      <nav
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-500
          ${
            scrolled || location.pathname !== "/"
              ? "bg-[#1f3223]/95 shadow-lg backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto w-[94%] max-w-[1600px] border-b border-white/70 sm:border-b-2">
          <div
            className="
              flex
              h-[75px]
              items-center
              justify-between
              sm:h-[85px]
              md:h-[90px]
              lg:h-[100px]
              xl:h-[75px]
            "
          >
            {/* ================= LOGO ================= */}

            <button
              type="button"
              onClick={handleLogoClick}
              className="flex shrink-0 items-center"
              aria-label="Maya Niketan Villa Home"
            >
              <img
                src="/images/maya-niketan-logo.png"
                alt="Maya Niketan Villa"
                className="
                  h-[40px]
                  w-auto
                  object-contain
                  xs:h-[52px]
                  sm:h-[58px]
                  md:h-[63px]
                  lg:h-[68px]
                  xl:h-[50px]
                "
              />
            </button>

            {/* ================= DESKTOP NAV ================= */}

            <div className="hidden items-center gap-4 lg:flex xl:gap-7 2xl:gap-9">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    relative
                    whitespace-nowrap
                    text-[13px]
                    font-normal
                    tracking-wide
                    transition-all
                    duration-300
                    xl:text-[14px]
                    2xl:text-[15px]

                    after:absolute
                    after:-bottom-2
                    after:left-0
                    after:h-[1px]
                    after:bg-[#d4ad72]
                    after:transition-all
                    after:duration-300

                    ${
                      isActive
                        ? "text-[#d4ad72] after:w-full"
                        : "text-white after:w-0 hover:text-[#d4ad72] hover:after:w-full"
                    }
                    `
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* ================= BOOK NOW DESKTOP ================= */}

            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="
                hidden
                shrink-0
                border
                border-[#d4ad72]
                bg-[#d4ad72]
                px-4
                py-2.5
                text-xs
                font-medium
                tracking-[0.08em]
                text-[#1f3223]
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-[#d4ad72]
                lg:block
                xl:px-6
                xl:py-3
                xl:text-sm
              "
            >
              Book Now
            </button>

            {/* ================= MOBILE HAMBURGER ================= */}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                text-white
                lg:hidden
              "
              aria-label="Open menu"
            >
              <div className="space-y-[5px] sm:space-y-[6px]">
                <span className="block h-[2px] w-6 bg-white sm:w-7" />
                <span className="block h-[2px] w-6 bg-white sm:w-7" />
                <span className="block h-[2px] w-6 bg-white sm:w-7" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[80]
          overflow-y-auto
          bg-[#1f3223]
          transition-all
          duration-500
          lg:hidden

          ${
            menuOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            min-h-screen
            w-full
            max-w-[600px]
            flex-col
            px-5
            py-5
            sm:px-7
            sm:py-6
          "
        >
          {/* MOBILE TOP */}

          <div className="flex items-center justify-between">
            <button type="button" onClick={handleLogoClick}>
              <img
                src="/images/maya-niketan-logo.png"
                alt="Maya Niketan Villa"
                className="
                  h-[50px]
                  w-auto
                  object-contain
                  sm:h-[65px]
                "
              />
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                text-4xl
                font-light
                leading-none
                text-white
                transition
                hover:text-[#d4ad72]
              "
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* MOBILE LINKS */}

          <div className="mt-8 flex flex-col sm:mt-12 md:mt-14">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `
                  border-b
                  border-white/15
                  py-3.5
                  font-serif
                  text-xl
                  transition
                  sm:py-4
                  sm:text-2xl

                  ${
                    isActive
                      ? "text-[#d4ad72]"
                      : "text-white hover:text-[#d4ad72]"
                  }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE BOOK BUTTON */}

          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);

              setTimeout(() => {
                setBookingOpen(true);
              }, 300);
            }}
            className="
              mt-7
              w-full
              bg-[#d4ad72]
              px-5
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#1f3223]
              transition
              hover:bg-white
              sm:mt-8
              sm:py-4
              sm:text-sm
            "
          >
            Book Now
          </button>
        </div>
      </div>

      {/* =====================================================
          BOOKING MODAL
      ===================================================== */}

      {bookingOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/65
            px-3
            py-4
            backdrop-blur-sm
            sm:px-4
            sm:py-6
          "
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="
              relative
              my-auto
              max-h-[95vh]
              w-full
              max-w-[720px]
              overflow-y-auto
              rounded-xl
              bg-[#f7f3ec]
              p-4
              shadow-2xl
              sm:rounded-2xl
              sm:p-6
              md:p-8
              lg:p-10
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setBookingOpen(false)}
              className="
                absolute
                right-3
                top-2
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                text-3xl
                font-light
                text-[#263c2a]
                transition
                hover:text-[#d4ad72]
                sm:right-5
                sm:top-4
              "
              aria-label="Close booking form"
            >
              ×
            </button>

            {/* HEADING */}

            <div className="px-4 text-center sm:px-8">
              <p className="font-serif text-base italic text-[#d4ad72] sm:text-lg">
                Plan Your Stay
              </p>

              <h2 className="mt-1 font-serif text-2xl leading-tight text-[#263c2a] sm:text-3xl">
                Book Maya Niketan Villa
              </h2>

              <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                Staycations • Holidays • Celebrations
              </p>
            </div>

            {/* DATE TIME */}

            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-3
                rounded-xl
                bg-[#263c2a]
                p-3
                text-center
                sm:mt-7
                sm:grid-cols-3
                sm:p-4
              "
            >
              <div className="border-b border-white/10 pb-3 sm:border-b-0 sm:border-r sm:pb-0">
                <p className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">
                  Day
                </p>

                <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                  {formattedDay}
                </p>
              </div>

              <div className="border-b border-white/10 pb-3 sm:border-b-0 sm:border-r sm:pb-0">
                <p className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">
                  Date
                </p>

                <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                  {formattedDate}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">
                  Current Time
                </p>

                <p className="mt-1 text-xs font-medium text-[#d4ad72] sm:text-sm">
                  {formattedTime}
                </p>
              </div>
            </div>

            {/* FORM */}

            <form onSubmit={handleBooking} className="mt-5 sm:mt-7">
              {/* NAME + MOBILE */}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <div>
                  <label className="mb-2 block text-xs text-[#8c765c] sm:text-sm">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                      h-11
                      w-full
                      rounded-none
                      border
                      border-[#d7d0c5]
                      bg-white
                      px-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#d4ad72]
                      sm:h-12
                      sm:px-4
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-[#8c765c] sm:text-sm">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="
                      h-11
                      w-full
                      border
                      border-[#d7d0c5]
                      bg-white
                      px-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#d4ad72]
                      sm:h-12
                      sm:px-4
                    "
                  />
                </div>
              </div>

              {/* CHECK-IN + CHECK-OUT */}

              <div className="mt-4 grid grid-cols-1 gap-4 md:mt-5 md:grid-cols-2 md:gap-5">
                <div>
                  <label className="mb-2 block text-xs text-[#8c765c] sm:text-sm">
                    Check-In Date
                  </label>

                  <input
                    type="date"
                    name="checkIn"
                    min={today}
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="
                      h-11
                      w-full
                      border
                      border-[#d7d0c5]
                      bg-white
                      px-3
                      text-sm
                      outline-none
                      focus:border-[#d4ad72]
                      sm:h-12
                      sm:px-4
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-[#8c765c] sm:text-sm">
                    Check-Out Date
                  </label>

                  <input
                    type="date"
                    name="checkOut"
                    min={formData.checkIn || today}
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="
                      h-11
                      w-full
                      border
                      border-[#d7d0c5]
                      bg-white
                      px-3
                      text-sm
                      outline-none
                      focus:border-[#d4ad72]
                      sm:h-12
                      sm:px-4
                    "
                  />
                </div>
              </div>

              {/* GUESTS + PURPOSE */}

              <div className="mt-4 grid grid-cols-1 gap-4 md:mt-5 md:grid-cols-2 md:gap-5">
                <div>
                  <label className="mb-2 block text-xs text-[#8c765c] sm:text-sm">
                    Number of Guests
                  </label>

                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="
                      h-11
                      w-full
                      border
                      border-[#d7d0c5]
                      bg-white
                      px-3
                      text-sm
                      outline-none
                      focus:border-[#d4ad72]
                      sm:h-12
                      sm:px-4
                    "
                  >
                    <option value="1">2 Guest</option>
                    <option value="2">5 Guests</option>
                    <option value="3">10 Guests</option>
                    <option value="4">20 Guests</option>
                    <option value="5">30 Guests</option>
                    <option value="6">50 Guests</option>
                    <option value="7">70 Guests</option>
                    <option value="9">100 Guests</option>
                    <option value="10">150 Guests</option>
                    <option value="10+">200+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs text-[#8c765c] sm:text-sm">
                    Booking For
                  </label>

                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="
                      h-11
                      w-full
                      border
                      border-[#d7d0c5]
                      bg-white
                      px-3
                      text-sm
                      outline-none
                      focus:border-[#d4ad72]
                      sm:h-12
                      sm:px-4
                    "
                  >
                    <option value="Staycation">Staycation</option>

                    <option value="Family Holiday">Family Holiday</option>

                    <option value="Birthday Celebration">
                      Birthday Celebration
                    </option>

                    <option value="Anniversary">Anniversary</option>

                    <option value="Family Function">Family Function</option>

                    <option value="Corporate Stay">Corporate Stay</option>

                    <option value="Photoshoot">Photoshoot</option>

                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  mt-5
                  h-12
                  w-full
                  bg-[#263c2a]
                  px-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#d4ad72]
                  hover:text-[#263c2a]
                  sm:mt-7
                  sm:h-14
                  sm:text-sm
                  sm:tracking-[0.15em]
                "
              >
                Send Booking Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
