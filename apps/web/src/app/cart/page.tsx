"use client";

import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { items, removeItem, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-brand-white dark:bg-brand-onyx min-h-screen pt-32 flex flex-col items-center justify-center px-4">
        <div className="bg-brand-gold/10 p-10 rounded-full mb-8">
            <ShoppingBag className="h-16 w-16 text-brand-gold" />
        </div>
        <h1 className="text-4xl font-heading font-bold text-brand-onyx dark:text-white mb-4">Your Journey Starts Here</h1>
        <p className="text-gray-500 text-center max-w-md mb-8">You haven't added any luxury collections to your itinerary yet.</p>
        <Link href="/tours">
            <Button size="lg" className="bg-brand-gold text-brand-onyx hover:bg-brand-white font-bold px-10 rounded-full">
                Explore Our Collections
            </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-white dark:bg-brand-onyx min-h-screen pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Cart Items */}
            <div className="flex-1 space-y-8">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-6">
                    <h1 className="text-4xl font-heading font-bold dark:text-white">Your <span className="text-brand-gold">Itinerary</span></h1>
                    <Button variant="ghost" onClick={clearCart} className="text-gray-400 hover:text-red-500 text-xs tracking-widest uppercase font-bold">Clear All</Button>
                </div>

                <div className="space-y-6">
                    <AnimatePresence>
                        {items.map((item) => (
                            <motion.div 
                                key={item.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="flex gap-6 p-6 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 group overflow-hidden"
                            >
                                <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold dark:text-white mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-400">Private Safari • Dynamic Pricing</p>
                                        </div>
                                        <p className="text-xl font-bold text-brand-gold">{formatCurrency(item.price)}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4 text-brand-onyx dark:text-white">
                                            <span className="text-sm font-medium opacity-50 uppercase tracking-widest">Qty:</span>
                                            <span className="font-bold">{item.quantity}</span>
                                        </div>
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            onClick={() => removeItem(item.id)}
                                            className="h-10 w-10 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Summary Panel */}
            <div className="w-full lg:w-[400px]">
                <div className="sticky top-32 p-10 bg-brand-onyx dark:bg-black rounded-[3rem] text-white shadow-2xl border border-white/5">
                    <h2 className="text-2xl font-heading font-bold mb-8">Order Summary</h2>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-gray-400">
                            <span>Subtotal</span>
                            <span>{formatCurrency(total)}</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <span>Concierge Fee</span>
                            <span className="text-brand-gold">Included</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <span>Taxes (VAT)</span>
                            <span>{formatCurrency(total * 0.05)}</span>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-6 mb-10">
                        <div className="flex justify-between items-end">
                            <span className="text-sm uppercase tracking-widest font-bold text-gray-400">Total Amount</span>
                            <span className="text-4xl font-bold text-brand-gold">{formatCurrency(total * 1.05)}</span>
                        </div>
                    </div>

                    <Link href="/checkout">
                        <Button className="w-full h-16 bg-brand-gold text-brand-onyx hover:bg-white font-bold text-lg rounded-2xl group">
                            Secure Checkout 
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
                        <ShieldCheck className="h-4 w-4 text-brand-gold" />
                        <span>Encrypted Transaction</span>
                    </div>

                    <div className="mt-12 flex justify-center gap-4 opacity-30 grayscale">
                         <div className="h-8 w-12 bg-white rounded-md" />
                         <div className="h-8 w-12 bg-white rounded-md" />
                         <div className="h-8 w-12 bg-white rounded-md" />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
