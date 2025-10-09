import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const OtherHeroSection = ({ scrollToBlog }) => {
  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1697730504977-26847b1f1f91?q=80&w=1600&auto=format&fit=crop"
        alt="Blog Hero"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/50 hover:bg-black/40 transition-colors duration-500" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-[100] tracking-tight text-white"
        >
          Our Blog
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light"
        >
          Insights, inspiration, and stories from the world of marble, temples, and timeless craftsmanship.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          onClick={scrollToBlog}
          className="mt-8 inline-block rounded-full border border-white/70 px-6 py-3 text-white font-medium hover:bg-theme transition-colors duration-300 cursor-pointer"
        >
          Explore Blogs →
        </motion.div>
      </div>
    </div>
  );
};

export default OtherHeroSection;
