"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart } from "lucide-react";
import { dohaImages } from "@/lib/images";

export default function AboutPage() {
  return (
    <div className="bg-brand-white">
        {/* Header */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
             <img 
                src={dohaImages.hero[1]}
                alt="Qatar Desert Landscape"
                className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-brand-onyx/50" />
             <div className="relative z-10 text-center text-white">
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-7xl font-heading font-bold mb-4"
                >
                    Our Story
                </motion.h1>
                <p className="text-lg md:text-xl font-light">Guardians of the Golden Sands since 2010.</p>
             </div>
        </section>

        {/* Narrative */}
        <section className="container mx-auto py-24 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl font-heading font-bold text-brand-onyx">More Than Just a Tour</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Desert Safari Qatar was born from a simple passion: to share the majestic beauty of the Khor Al Adaid (Inland Sea) with the world. What started as a small family operation has grown into Qatar's premier luxury adventure provider.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        We believe in "Soulful Adventure." It's not just about dune bashing; it's about the silence of the desert at sunset, the taste of authentic Bedouin coffee, and the warmth of Qatari hospitality.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
                >
                     <img 
                        src={dohaImages.tours[2]}
                        alt="Bedouin Coffee"
                        className="absolute inset-0 w-full h-full object-cover"
                     />
                </motion.div>
            </div>
        </section>

        {/* Values */}
        <section className="bg-brand-onyx text-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-brand-gold">Our Promise</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 border border-white/10 rounded-xl hover:border-brand-gold/50 transition-colors">
                        <Award className="h-10 w-10 text-brand-gold mb-6" />
                        <h3 className="text-xl font-bold mb-4">Excellence</h3>
                        <p className="text-gray-400">We don't cut corners. From our pristine fleet of Land Cruisers to our gourmet catering, everything is top-tier.</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-xl hover:border-brand-gold/50 transition-colors">
                        <ShieldCheck className="h-10 w-10 text-brand-gold mb-6" />
                        <h3 className="text-xl font-bold mb-4">Safety First</h3>
                        <p className="text-gray-400">Our drivers are licensed professionals with years of dune-bashing experience. Your safety is our obsession.</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-xl hover:border-brand-gold/50 transition-colors">
                        <Heart className="h-10 w-10 text-brand-gold mb-6" />
                        <h3 className="text-xl font-bold mb-4">Authenticity</h3>
                        <p className="text-gray-400">We honor our heritage. Our camps are designed to reflect true Bedouin tradition, not a tourist trap.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
