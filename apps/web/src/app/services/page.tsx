"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Clock, 
  MapPin, 
  Coffee, 
  Camera, 
  ShieldCheck,
  Compass,
  Zap,
  Star
} from "lucide-react";
import { formatCurrency } from "@/lib/currency";

const services = [
  {
    id: "premium-morning",
    title: "Premium Morning Safari",
    tagline: "Wake up to the golden dunes",
    description: "Experience the desert in its purest form as the sun climbs the horizon. Perfect for photography enthusiasts and those seeking a fresh start.",
    price: 1200,
    duration: "4 Hours",
    type: "Private",
    image: "https://images.unsplash.com/photo-1545167622-3a6ac156f422?q=80&w=1000&auto=format&fit=crop",
    features: ["Golden hour photography", "Traditional breakfast", "Dune bashing", "Sandboarding"]
  },
  {
    id: "luxury-overnight",
    title: "Desert Royal Overnight",
    tagline: "A night under a billion stars",
    description: "Our most exclusive experience. A private camp, gourmet dining, and a traditional Majlis setup await you in the heart of the Inland Sea.",
    price: 4500,
    duration: "18 Hours",
    type: "VIP Private",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1000&auto=format&fit=crop",
    features: ["Private glamping tent", "Live BBQ dinner", "Falconry show", "Stargazing concierge"]
  },
  {
    id: "sunset-expedition",
    title: "Dune Bashing Expedition",
    tagline: "Adrenaline meets elegance",
    description: "The classic Qatari adventure. High-intensity dune bashing followed by a peaceful sunset at the Khor Al Adaid (Inland Sea).",
    price: 1800,
    duration: "6 Hours",
    type: "Group/Private",
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1000&auto=format&fit=crop",
    features: ["Inland Sea visit", "High-speed dune bashing", "Sunset viewing", "Arabic coffee & dates"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-white min-h-screen pb-20 pt-20">
      {/* Hero Header */}
      <section className="bg-brand-onyx py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Our Safari <span className="text-brand-gold">Collections</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Each experience is meticulously crafted to showcase the heritage, luxury, and raw beauty of the Qatari desert.
          </p>
        </div>
      </section>

      {/* Services Listing */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 gap-20">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 flex gap-4">
                  <div className="bg-brand-gold/90 backdrop-blur-md text-brand-onyx px-4 py-2 rounded-xl flex items-center gap-2 font-bold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Must Try</span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm block mb-4">{service.tagline}</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-onyx mb-6">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                       <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Duration</p>
                      <p className="font-bold text-brand-onyx">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                       <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Experience</p>
                      <p className="font-bold text-brand-onyx">{service.type}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, i) => (
                    <span key={i} className="bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center gap-8">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-[0.2em] mb-1">Starting from</p>
                    <p className="text-4xl font-bold text-brand-onyx">{formatCurrency(service.price)}</p>
                  </div>
                  <Button size="lg" className="w-full sm:w-auto px-10 h-16 bg-brand-onyx text-brand-white hover:bg-brand-gold hover:text-brand-onyx transition-all duration-300 rounded-2xl font-bold text-lg">
                    Reserve This Collection
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-brand-onyx mt-32 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Compass className="w-96 h-96 -mr-48 -mt-24 rotate-12" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-gold mb-4 uppercase tracking-tighter">The Gold Standard</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Every safari includes premium amenities and certified hospitality experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: ShieldCheck, title: "Total Safety", desc: "Certified off-road experts" },
              { icon: Coffee, title: "Royal Hospitality", desc: "Authentic Qatari flavors" },
              { icon: Zap, title: "Instant Booking", desc: "WhatsApp concierge assist" },
              { icon: MapPin, title: "Exclusive Access", desc: "Restricted conservation areas" }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-brand-gold">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
