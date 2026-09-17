import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./page/Footer";
import HeroSection from "./page/HeroSection";
import MayaNiketanSection from "./page/MayaNiketanSection";
import ImageSection from "./page/ImageSection";
import LuxuryLiving from "./page/LuxuryLiving";
import ClubSection from "./page/ClubSection";
import SignatureFeatures from "./page/SignatureFeatures";
import LuxuryIntro from "./page/LuxuryIntro";
import LocationHighlight from "./page/LocationHighlight";
import LocationMap from "./page/LocationMap";
import NatureSection from "./page/NatureSection";
import TestimonialsSection from "./page/TestimonialsSection";
import GallerySection from "./page/GallerySection";
import ContactSection from "./page/ContactSection";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <MayaNiketanSection />
      <ImageSection />
      <LuxuryLiving />
      <ClubSection />
      <SignatureFeatures />
      <LuxuryIntro />
      <LocationHighlight />
      <LocationMap />
      <NatureSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
};

const FloatingWhatsApp = () => {
  const phoneNumber = "919960572239";

  const whatsappMessage = `*Welcome to*

# Maya Niketan Villa`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        z-[9999]

        sm:bottom-6
        sm:right-6

        lg:bottom-8
        lg:right-8
      "
    >
      {/* TOOLTIP */}

      <div
        className="
          group
          relative
          flex
          items-center
        "
      >
        {/* DESKTOP TEXT */}

        <div
          className="
            pointer-events-none
            absolute
            right-[70px]
            hidden
            whitespace-nowrap

            rounded-lg
            bg-[#1f3223]

            px-4
            py-2.5

            text-xs
            font-medium
            tracking-wide
            text-white

            opacity-0
            shadow-xl

            transition-all
            duration-300

            group-hover:-translate-x-1
            group-hover:opacity-100

            md:block
          "
        >
          Chat with us on WhatsApp
        </div>

        {/* PULSE OUTER */}

        <span
          className="
            absolute
            inset-0
            animate-ping
            rounded-full
            bg-[#25D366]/35
          "
        />

        {/* WHATSAPP BUTTON */}

        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Maya Niketan Villa on WhatsApp"
          className="
            relative
            z-10

            flex
            h-[56px]
            w-[56px]
            items-center
            justify-center

            rounded-full
            bg-[#25D366]

            shadow-[0_8px_28px_rgba(0,0,0,0.28)]

            transition-all
            duration-300

            hover:scale-110

            sm:h-[62px]
            sm:w-[62px]

            lg:h-[66px]
            lg:w-[66px]
          "
        >
          {/* WHATSAPP ICON */}

          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="
              h-8
              w-8
              fill-white

              sm:h-9
              sm:w-9
            "
          >
            <path
              d="
                M16.04 2.003
                A13.91 13.91 0 0 0 4.084 23.02
                L2 30
                l7.16-1.88
                A13.93 13.93 0 1 0 16.04 2.003
                Z

                M16.04 27.333
                a11.34 11.34 0 0 1-5.78-1.58
                l-.414-.247
                -4.25 1.116
                1.134-4.14
                -.27-.426

                a11.34 11.34 0 1 1 9.58 5.277
                Z

                m6.22-8.49
                c-.34-.17-2.01-.99-2.32-1.104
                -.31-.113-.536-.17-.762.17
                -.226.34-.875 1.104-1.073 1.33
                -.198.227-.396.255-.735.085
                -.34-.17-1.433-.528-2.73-1.684

                -1.01-.9-1.692-2.01-1.89-2.35
                -.198-.34-.02-.523.149-.692

                .152-.151
                .34-.396
                .51-.594

                .17-.198
                .226-.34
                .34-.566

                .113-.227
                .056-.425
                -.029-.595

                -.085-.17
                -.762-1.84
                -1.044-2.52

                -.275-.66
                -.555-.57
                -.762-.58

                l-.65-.012

                c-.226 0
                -.594.085
                -.905.425

                -.311.34
                -1.188 1.16
                -1.188 2.83

                0 1.67
                1.217 3.283
                1.386 3.51

                .17.226
                2.394 3.656
                5.8 5.127

                .81.35
                1.442.558
                1.935.714

                .813.258
                1.553.222
                2.138.135

                .652-.097
                2.01-.82
                2.293-1.613

                .283-.792
                .283-1.47
                .198-1.612

                -.085-.142
                -.311-.227
                -.65-.397
                Z
              "
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <section
      className="
        flex
        min-h-screen
        w-full
        items-center
        justify-center

        bg-[#1f3223]

        px-5
        py-20
      "
    >
      <div className="mx-auto max-w-xl text-center">
        <p
          className="
            font-serif
            text-base
            italic
            tracking-wider
            text-[#d4ad72]

            sm:text-lg
          "
        >
          Maya Niketan Villa
        </p>

        <h1
          className="
            mt-4
            font-serif
            text-6xl
            font-medium
            text-white

            sm:text-7xl
            md:text-8xl
          "
        >
          404
        </h1>

        <h2
          className="
            mt-4
            font-serif
            text-2xl
            text-white

            sm:text-3xl
            md:text-4xl
          "
        >
          Page Not Found
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-md

            text-sm
            leading-7
            text-white/60

            sm:text-base
          "
        >
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="
            mt-8
            inline-flex
            items-center
            justify-center

            bg-[#d4ad72]

            px-7
            py-3.5

            text-xs
            font-medium
            uppercase
            tracking-[0.15em]
            text-[#1f3223]

            transition-all
            duration-300

            hover:bg-white

            sm:px-8
            sm:py-4
            sm:text-sm
          "
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="
          min-h-screen
          w-full
          overflow-x-hidden
        "
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/location" element={<Location />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
