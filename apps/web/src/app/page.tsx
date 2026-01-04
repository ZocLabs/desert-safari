import { HeroSection } from "@/components/home/HeroSection";
import { OmnichannelCTA } from "@/components/OmnichannelCTA";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Gem, Landmark, Star, MapPin } from "lucide-react";
import Link from "next/link";
import { dohaImages } from "@/lib/images";

async function getTours() {
  return [
    {
      id: "1",
      title: "Morning Desert Royal",
      price: 1500,
      image: dohaImages.tours[0],
      duration: "4 Hours",
      rating: 5.0,
      features: ["Private Land Cruiser", "Gourmet Breakfast"]
    },
    {
      id: "2",
      title: "Sunset Dune Bashing (VIP)",
      price: 2200,
      image: dohaImages.tours[1],
      duration: "5 Hours",
      rating: 4.9,
      features: ["Sunset Photography", "Private Camp Access"]
    },
    {
      id: "3",
      title: "Overnight Bedouin Luxury",
      price: 4500,
      image: dohaImages.tours[2],
      duration: "18 Hours",
      rating: 5.0,
      features: ["Glamping Tent", "Stargazing Session", "Full Board"]
    },
    {
      id: "4",
      title: "Inland Sea Discovery",
      price: 1800,
      image: dohaImages.tours[3],
      duration: "6 Hours",
      rating: 4.8,
      features: ["Visit Khor Al Adaid", "Bird Watching", "Sandboarding"]
    },
    {
      id: "5",
      title: "Camel Trekking & Tea",
      price: 800,
      image: dohaImages.tours[4],
      duration: "3 Hours",
      rating: 4.7,
      features: ["Traditional Majlis", "Henna Art", "Local Snacks"]
    },
    {
      id: "6",
      title: "Falconry Experience",
      price: 1200,
      image: dohaImages.tours[5],
      duration: "2 Hours",
      rating: 5.0,
      features: ["Hunting Demo", "Photo Op", "Master Guide"]
    }
  ];
}

export default async function Home() {
  const tours = await getTours();

  return (
    <main className="min-h-screen bg-brand-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Section (Collections) - Now a Client Component to handle animations */}
      <FeaturedTours tours={tours} />

      {/* Trust Indicators (Gold Standard) */}
      <section className="bg-brand-onyx py-24 text-brand-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <Landmark className="absolute -right-20 -top-20 w-96 h-96 rotate-12" />
           </div>
           
           <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-gold uppercase tracking-tighter mb-4">The Gold Standard</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Luxury is in every detail. Our commitment is to provide an unmatched experience in the heart of Qatar.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                     <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all group">
                         <div className="h-16 w-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                             <ShieldCheck className="h-8 w-8" />
                         </div>
                         <h3 className="text-xl font-heading font-bold">Safe & Secure</h3>
                         <p className="text-muted-foreground text-sm">Certified off-road guides and state-of-the-art safety equipment.</p>
                     </div>

                     <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all group">
                         <div className="h-16 w-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                             <Gem className="h-8 w-8" />
                         </div>
                         <h3 className="text-xl font-heading font-bold">VIP Luxury</h3>
                         <p className="text-muted-foreground text-sm">Private Land Cruisers and exclusive camp access for ultimate comfort.</p>
                     </div>

                     <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all group">
                         <div className="h-16 w-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                             <Star className="h-8 w-8" />
                         </div>
                         <h3 className="text-xl font-heading font-bold">5-Star Service</h3>
                         <p className="text-muted-foreground text-sm">Dedicated concierge available 24/7 to tailor your adventure.</p>
                     </div>

                     <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all group">
                         <div className="h-16 w-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                             <Landmark className="h-8 w-8" />
                         </div>
                         <h3 className="text-xl font-heading font-bold">Cultural Heritage</h3>
                         <p className="text-muted-foreground text-sm">Authentic Qatari experiences that honor the spirit of the desert.</p>
                     </div>
                </div>
           </div>
      </section>

      {/* Live Adventure Map Section (Simulation) */}
      <section className="bg-brand-white py-24">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                       <div>
                           <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">Your Location</span>
                           <h2 className="text-5xl font-heading font-bold text-brand-onyx mt-2">Doha to the Deep Desert</h2>
                       </div>
                       <p className="text-gray-600 leading-relaxed text-lg">
                           From the shimmering skyline of West Bay to the untouched dunes of Mesaieed, we provide door-to-door luxury transport. Track your journey's milestones with our exclusive Desert Pass.
                       </p>
                       <div className="space-y-4">
                           <div className="flex items-center gap-4 text-brand-onyx font-bold">
                               <div className="h-6 w-6 rounded-full bg-brand-gold" />
                               Doha City Pick-up
                           </div>
                           <div className="flex items-center gap-4 text-brand-onyx font-bold border-l-2 border-dashed border-gray-200 ml-3 pl-7 py-4">
                               <div className="h-6 w-6 rounded-full bg-brand-gold/50" />
                               Sealine Dune Entry
                           </div>
                           <div className="flex items-center gap-4 text-brand-onyx font-bold">
                               <div className="h-6 w-6 rounded-full bg-brand-gold" />
                               Khor Al Adaid (Inland Sea)
                           </div>
                       </div>
                  </div>
                  <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={dohaImages.hero[1]}
                        alt="Desert Map View"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-brand-onyx/20" />
                      <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-between">
                          <div>
                              <p className="text-xs text-brand-gold font-bold uppercase tracking-widest">Active Tours</p>
                              <p className="text-2xl font-heading font-bold text-brand-onyx">12 Groups Live</p>
                          </div>
                          <Link href="/contact">
                              <Button className="bg-brand-onyx text-white rounded-xl">Join Next Session</Button>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Mobile Sticky Bar / Desktop Floating Widget */}
      <OmnichannelCTA />
    </main>
  );
}
