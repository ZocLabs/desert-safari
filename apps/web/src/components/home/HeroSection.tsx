"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { dohaImages } from "@/lib/images";

const slides = [
  {
    image: dohaImages.hero[0],
    title: "Heritage of the Falcon",
    description: "Connect with Qatar's ancient tradition of falconry. Experience private hunting demonstrations with master falconers in the heart of the dunes."
  },
  {
    image: dohaImages.hero[1],
    title: "Dune Bashing Excellence",
    description: "Thrill-seeking adventures in our customized Land Cruisers. Expert desert drivers taking you across the majestic golden peaks of Mesaieed."
  },
  {
    image: dohaImages.hero[2],
    title: "The Inland Sea",
    description: "Discover Khor Al Adaid, where the ocean meets the desert. A breathtaking UNESCO-recognized natural reserve at Qatar's southernmost point."
  }
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-onyx">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx via-brand-onyx/40 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-onyx/30 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 flex h-full flex-col justify-center px-4 pt-20 text-brand-white">
        
        {/* Animated Badge */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={`badge-${current}`}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex w-fit items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-onyx/30 px-4 py-1.5 backdrop-blur-md"
        >
            <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
            <span className="text-sm font-medium tracking-widest uppercase text-brand-gold">
                Premium Desert Concierge
            </span>
        </motion.div>

        {/* Hero Typography */}
        <motion.div
            key={`title-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-4xl"
        >
            <h1 className="font-heading text-6xl font-bold leading-[1.1] md:text-8xl lg:text-9xl tracking-tight">
                {slides[current].title.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#E5C585] to-brand-gold">
                    {slides[current].title.split(' ').slice(1).join(' ')}
                </span>
            </h1>
        </motion.div>

        <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-gray-200 md:text-2xl"
        >
            {slides[current].description}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-6"
        >
            <Link href="/tours">
                <Button size="lg" className="h-16 rounded-none bg-brand-gold px-10 text-lg font-bold text-brand-onyx transition-all hover:bg-brand-gold/90 hover:scale-105 shadow-[0_0_40px_rgba(197,160,89,0.3)]">
                    Explore Collections
                </Button>
            </Link>
            <Link href="/gallery">
                <Button size="lg" variant="outline" className="h-16 rounded-none border-white/20 bg-transparent px-10 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50">
                    View Gallery
                </Button>
            </Link>
        </motion.div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full border-white/20 bg-black/20 text-white hover:bg-brand-gold hover:text-brand-onyx transition-all">
              <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full border-white/20 bg-black/20 text-white hover:bg-brand-gold hover:text-brand-onyx transition-all">
              <ChevronRight className="h-6 w-6" />
          </Button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/50"
        >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
