"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, CreditCard as CardIcon, Ship, CheckCircle2, ChevronRight, Lock, Calendar, Hash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { total, clearCart, items } = useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      clearCart();
    }, 2000);
  };

  if (step === 3) {
    return (
       <div className="bg-brand-white dark:bg-brand-onyx min-h-screen pt-32 px-4 flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-brand-gold/10 p-12 rounded-full mb-8"
          >
              <CheckCircle2 className="h-24 w-24 text-brand-gold" />
          </motion.div>
          <h1 className="text-5xl font-heading font-bold dark:text-white mb-6">Booking Confirmed!</h1>
          <p className="text-gray-500 max-w-md mb-12">Your desert odyssey is officially scheduled. You will receive a confirmation voucher via email and WhatsApp shortly.</p>
          <div className="flex gap-4">
              <Link href="/dashboard">
                  <Button size="lg" className="bg-brand-onyx dark:bg-brand-gold text-white dark:text-brand-onyx font-bold px-10 rounded-full">View My Orders</Button>
              </Link>
              <Link href="/">
                  <Button variant="outline" size="lg" className="border-brand-onyx dark:border-white text-brand-onyx dark:text-white px-10 rounded-full">Back to Home</Button>
              </Link>
          </div>
       </div>
    );
  }

  return (
    <div className="bg-brand-white dark:bg-brand-onyx min-h-screen pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-20 px-4 md:px-20 relative">
            <div className={`absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-white/10 -translate-y-1/2 -z-10`} />
            {[1, 2].map((i) => (
                <div key={i} className={`h-12 w-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 border-2 ${step >= i ? 'bg-brand-gold border-brand-gold text-brand-onyx scale-110 shadow-lg shadow-brand-gold/20' : 'bg-white dark:bg-brand-onyx border-gray-100 dark:border-white/10 text-gray-300'}`}>
                    {i === 1 ? <Ship className="h-5 w-5" /> : <CardIcon className="h-5 w-5" />}
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <div className="space-y-12">
                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        <motion.div 
                            key="step-1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-heading font-bold dark:text-white">Shipping & <span className="text-brand-gold">Contact</span></h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="uppercase text-[10px] tracking-widest font-bold text-gray-400">First Name</Label>
                                    <Input defaultValue="Ahmed" className="h-12 bg-transparent border-gray-200 dark:border-white/10 rounded-xl px-4 focus:ring-brand-gold transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="uppercase text-[10px] tracking-widest font-bold text-gray-400">Last Name</Label>
                                    <Input defaultValue="Elbashier" className="h-12 bg-transparent border-gray-200 dark:border-white/10 rounded-xl px-4 focus:ring-brand-gold transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="uppercase text-[10px] tracking-widest font-bold text-gray-400">Doha Hotel / Pickup Address</Label>
                                <Input placeholder="Enter your stay details" className="h-12 bg-transparent border-gray-200 dark:border-white/10 rounded-xl px-4 focus:ring-brand-gold transition-all" />
                            </div>
                            <Button onClick={() => setStep(2)} className="w-full h-14 bg-brand-onyx dark:bg-brand-gold text-white dark:text-brand-onyx font-bold rounded-xl mt-8 shadow-xl hover:scale-[1.02] transition-transform">
                                Continue to Payment
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="step-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-heading font-bold dark:text-white">Secure <span className="text-brand-gold">Payment</span></h2>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                                    <Lock className="h-3 w-3" />
                                    SSL Encrypted
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                {/* Visual Card Representation */}
                                <div className="p-8 bg-gradient-to-br from-brand-onyx to-black dark:from-black dark:to-[#1a1c1d] rounded-2xl border border-brand-gold/30 relative overflow-hidden shadow-2xl group min-h-[220px]">
                                    <div className="absolute -top-20 -right-20 h-64 w-64 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-all duration-700" />
                                    <div className="absolute top-0 right-0 p-6 flex gap-2 grayscale opacity-40">
                                         <div className="h-8 w-12 bg-white rounded-md" />
                                         <span className="text-white font-bold text-lg">VISA</span>
                                    </div>
                                    <CardIcon className="h-12 w-12 text-brand-gold/40 mb-8" />
                                    <div className="space-y-4 relative z-10">
                                        <div className="flex flex-col gap-1">
                                            <Label className="text-white/30 uppercase text-[9px] font-bold tracking-[0.2em]">Card Number</Label>
                                            <p className="text-white font-mono text-xl md:text-2xl tracking-[0.15em]">**** **** **** 4242</p>
                                        </div>
                                        <div className="flex gap-12">
                                            <div>
                                                <Label className="text-white/30 uppercase text-[9px] font-bold tracking-[0.2em]">Expiry</Label>
                                                <p className="text-white font-mono text-sm">12/26</p>
                                            </div>
                                            <div>
                                                <Label className="text-white/30 uppercase text-[9px] font-bold tracking-[0.2em]">CVV</Label>
                                                <p className="text-white font-mono text-sm">***</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Inputs */}
                                <div className="space-y-4">
                                     <div className="relative">
                                        <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input defaultValue="4242 4242 4242 4242" className="h-12 pl-12 bg-white/5 border-gray-200 dark:border-white/10 dark:text-white rounded-xl focus:ring-brand-gold" />
                                     </div>
                                     <div className="grid grid-cols-2 gap-4">
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input defaultValue="12/26" className="h-12 pl-12 bg-white/5 border-gray-200 dark:border-white/10 dark:text-white rounded-xl focus:ring-brand-gold" />
                                        </div>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input defaultValue="***" className="h-12 pl-12 bg-white/5 border-gray-200 dark:border-white/10 dark:text-white rounded-xl focus:ring-brand-gold" />
                                        </div>
                                     </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button variant="ghost" onClick={() => setStep(1)} className="flex-1 h-14 border border-gray-100 dark:border-white/10 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl">Back</Button>
                                <Button 
                                    onClick={handleComplete} 
                                    disabled={loading}
                                    className="flex-[2] h-14 bg-brand-gold text-brand-onyx font-bold rounded-xl shadow-lg shadow-brand-gold/20"
                                >
                                    {loading ? "Processing..." : `Pay ${formatCurrency(total * 1.05)}`}
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sticky Order Ref */}
            <div className="bg-gray-50 dark:bg-white/5 p-10 rounded-[3rem] h-fit border border-gray-100 dark:border-white/10">
                <h3 className="text-xl font-heading font-bold dark:text-white mb-6">Reservation Ref</h3>
                <div className="space-y-4 mb-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 font-medium">{item.quantity}x {item.title}</span>
                            <span className="font-bold dark:text-white">{formatCurrency(item.price)}</span>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                    <div className="flex justify-between items-end">
                        <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Final Total</span>
                        <span className="text-3xl font-bold dark:text-white text-brand-gold">{formatCurrency(total * 1.05)}</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
