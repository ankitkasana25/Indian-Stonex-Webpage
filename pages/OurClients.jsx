import React, { useEffect } from "react";
import ClientCarousel from "../components/ClientCarousel";

const OurClients = () => {
  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[60vh] overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          src="/OurClients.jpg"
          alt="Our Clients"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-colors duration-500" />

        {/* Hero Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight animate-slide-up">
            Trusted by the{" "}
            <span className="bg-gradient-to-r from-[#ff7e2e] via-[#ff9d5c] to-[#ffb380] bg-clip-text text-transparent">
              Finest
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-white/90 animate-fade-in-up">
            Our clientele includes discerning homeowners, architects, interior designers, and spiritual leaders
            who trust our craftsmanship.
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="fade-in-section py-16 px-6 text-center max-w-4xl mx-auto space-y-6 animate-fade-in-up">
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          At <strong>Stone Arts</strong>, we take immense pride in crafting luxurious, bespoke marble temples and
          pooja rooms for homes across India and around the world. Each project is a reflection of our clients’ vision,
          meticulously transformed into a masterpiece that brings serenity and sacred energy into their homes.
        </p>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          From intimate home temples to majestic custom mandirs, every creation is thoughtfully designed to complement
          the space and fulfill the spiritual aspirations of those who cherish it.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="fade-in-section py-12 animate-fade-in-up">
        <ClientCarousel />
      </div>
    </div>
  );
};

export default OurClients;
