import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Amenities", path: "/amenities" },
    { name: "Location", path: "/location" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

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

  const handleBookNow = () => {
    setMenuOpen(false);
    navigate("/booking");
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
          bg-black
          transition-all
          duration-500
          ${
            scrolled || location.pathname !== "/"
              ? "bg-black shadow-lg backdrop-blur-md"
              : "bg-black"
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
                        ? "text-[white] after:w-full"
                        : "text-[#d4ad72] after:w-0 hover:text-[#d4ad72] hover:after:w-full"
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
              onClick={handleBookNow}
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
                text-gray-800
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
          bg-gray-800
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
            onClick={handleBookNow}
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
              text-gray-800
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
    </>
  );
};

export default Navbar;
