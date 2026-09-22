// src/pages/Home.jsx
import React from "react";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import SignatureFeatures from "./SignatureFeatures";
import ExperienceSection from "./ExperienceSection";
import LocationSection from "./LocationSection";
import GallerySection from "./GallerySection";
import TestimonialsSection from "./TestimonialsSection";
import BookingSection from "./BookingSection";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <WelcomeSection />
      <SignatureFeatures />
      <ExperienceSection />
      <LocationSection />
      <GallerySection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
