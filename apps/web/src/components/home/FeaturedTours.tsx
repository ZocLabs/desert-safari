"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/lib/currency";
import { Clock, Users, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface Tour {
  id: string;
  title: string;
  price: number;
  image: string;
  duration: string;
  rating: number;
  features: string[];
}

interface FeaturedToursProps {
  tours: Tour[];
}

export function FeaturedTours({ tours }: FeaturedToursProps) {
  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = (tour: Tour) => {
    addItem({
      id: tour.id,
      title: tour.title,
      price: tour.price,
      image: tour.image,
      quantity: 1
    });
    router.push("/cart");
  };

  return (
    <section className="container mx-auto py-24 px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Curated Experiences</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-onyx dark:text-white">Signature Journeys</h2>
        </motion.div>
        <Link href="/tours">
          <Button variant="outline" className="hidden md:flex rounded-none border-brand-onyx/20 dark:border-white/20 text-brand-onyx dark:text-white hover:bg-brand-onyx dark:hover:bg-white hover:text-brand-white dark:hover:text-brand-onyx transition-all">
            View All Collections <ArrowRight className="ml-2 h-4 w-4"/>
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tours.map((tour, idx) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="group overflow-hidden border-none shadow-none bg-transparent">
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                <img 
                  src={tour.image}
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-brand-onyx dark:text-white font-bold shadow-lg">
                  {formatCurrency(tour.price)}
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-1 text-brand-gold text-sm font-bold mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                    <span className="ml-2 text-white/80 font-normal">({tour.rating})</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2 leading-tight">{tour.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md text-white/90">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4"/> {tour.duration}</div>
                    <div className="flex items-center gap-1"><Users className="w-4 h-4"/> Private</div>
                  </div>
                </div>
              </div>
              <CardFooter className="px-0 pt-6">
                <Button 
                   onClick={() => handleAddToCart(tour)}
                   className="w-full h-14 bg-brand-onyx dark:bg-brand-gold text-brand-white dark:text-brand-onyx font-bold hover:bg-brand-gold hover:text-brand-onyx dark:hover:bg-white transition-colors rounded-xl text-lg shadow-xl shadow-brand-onyx/10"
                >
                  Reserve Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center md:hidden">
        <Link href="/tours" className="w-full">
          <Button variant="outline" className="w-full h-12 border-brand-onyx dark:border-white/20 text-brand-onyx dark:text-white uppercase font-bold tracking-widest text-xs">View All Collections</Button>
        </Link>
      </div>
    </section>
  );
}
