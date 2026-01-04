"use client";

import { motion, AnimatePresence } from "framer-motion";
import { dohaImages } from "@/lib/images";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = dohaImages.gallery;

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeModal = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

  return (
    <div className="bg-brand-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm block mb-4">The Lens of Qatar</span>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-onyx mb-6">Desert <span className="text-brand-gold">Gallery</span></h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">Every frame tells a story of golden dunes and blue horizons.</p>
      </div>

      <div className="container mx-auto px-4 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative rounded-3xl overflow-hidden group shadow-xl cursor-pointer"
            onClick={() => setSelectedImage(idx)}
          >
            <img 
                src={src} 
                alt={`Desert Scene ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-onyx/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-bold tracking-widest uppercase text-xs border border-white/40 px-6 py-2 backdrop-blur-md rounded-full">View Full Experience</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-brand-gold transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-brand-gold transition-colors z-50"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-brand-gold transition-colors z-50"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage]}
              alt={`Desert Scene ${selectedImage + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-bold">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
