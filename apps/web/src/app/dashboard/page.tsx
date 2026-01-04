"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  ShoppingBag, 
  CreditCard, 
  History, 
  Settings, 
  ChevronRight,
  LogOut,
  Star,
  ShieldCheck,
  Plus,
  Lock,
  Calendar,
  Hash
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser, SignOutButton, useClerk } from "@clerk/nextjs";
import { formatCurrency } from "@/lib/currency";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dohaImages } from "@/lib/images";

const tabs = [
  { id: "orders", name: "Previous Orders", icon: History },
  { id: "payments", name: "Billing & Cards", icon: CreditCard },
  { id: "security", name: "Account Safety", icon: ShieldCheck },
//   { id: "settings", name: "Concierge Settings", icon: Settings },
];

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const { openUserProfile } = useClerk();
  const [activeTab, setActiveTab] = useState("orders");
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [userCards, setUserCards] = useState([
    { id: 1, last4: "4242", expiry: "12/28", holder: user?.fullName || "Valued Explorer" }
  ]);

  if (!isLoaded) return <div className="min-h-screen flex items-center justify-center dark:bg-brand-onyx"><div className="animate-pulse text-brand-gold font-heading text-2xl">Arriving in Qatar...</div></div>;

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpiryDate(value.slice(0, 5));
  };

  const handleAddCard = (e: React.FormEvent) => {
      e.preventDefault();
      const newCard = {
          id: Date.now(),
          last4: Math.floor(1000 + Math.random() * 9000).toString(),
          expiry: expiryDate || "05/30",
          holder: user?.fullName || "Valued Explorer"
      };
      setUserCards([...userCards, newCard]);
      setIsAddingCard(false);
      setExpiryDate("");
  };

  return (
    <div className="bg-brand-white dark:bg-brand-onyx min-h-screen pt-12 md:pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar */}
            <aside className="w-full lg:w-80 space-y-8">
                <div className="p-8 bg-brand-onyx dark:bg-black rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl sticky top-32">
                    <div className="absolute -top-10 -right-10 h-32 w-32 bg-brand-gold/10 rounded-full blur-3xl" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="h-24 w-24 rounded-full border-2 border-brand-gold/30 p-1 mb-4 group overflow-hidden">
                            <img 
                                src={user?.imageUrl || dohaImages.avatar} 
                                alt="User" 
                                className="rounded-full object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <h2 className="text-xl font-heading font-bold">{user?.fullName || "Valued Explorer"}</h2>
                        <p className="text-xs text-brand-gold font-bold uppercase tracking-widest mt-1">Diamond Member</p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
                         {tabs.map((tab) => (
                             <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === tab.id ? 'bg-brand-gold text-brand-onyx' : 'hover:bg-white/5 text-gray-400'}`}
                             >
                                <tab.icon className="h-5 w-5" />
                                <span className="font-bold text-sm tracking-wide">{tab.name}</span>
                             </button>
                         ))}
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6">
                        <SignOutButton>
                            <Button variant="ghost" className="w-full justify-start gap-4 text-red-400/70 hover:text-red-400 hover:bg-red-400/10 rounded-2xl">
                                <LogOut className="h-5 w-5" />
                                <span className="font-bold">Logout</span>
                            </Button>
                        </SignOutButton>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 space-y-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-heading font-bold dark:text-white">
                        {activeTab === "orders" && "Order History"}
                        {activeTab === "payments" && "Billing & Methods"}
                        {activeTab === "security" && "Account Security"}
                        {activeTab === "settings" && "Your Preferences"}
                    </h1>
                    <div className="hidden md:flex items-center gap-2 bg-brand-gold/10 px-4 py-2 rounded-full border border-brand-gold/20">
                        <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                        <span className="text-xs font-bold text-brand-onyx dark:text-brand-gold tracking-widest uppercase">VIP Loyalty Points: 1,250</span>
                    </div>
                </div>

                {activeTab === "orders" && (
                    <div className="space-y-6">
                        {[
                            { id: "ORD-Q1024", date: "Jan 12, 2026", title: "Premium Morning Safari", price: 1200, status: "Completed" },
                            { id: "ORD-Q0988", date: "Dec 24, 2025", title: "Sunset Dune VIP Exped", price: 2100, status: "Completed" },
                        ].map((order) => (
                            <div key={order.id} className="p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl hover:shadow-brand-onyx/5 transition-all">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">{order.id}</span>
                                        <span className="h-1 w-1 rounded-full bg-gray-300" />
                                        <span className="text-xs text-gray-500">{order.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold dark:text-white">{order.title}</h3>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Status</p>
                                        <span className="text-sm font-bold text-green-500">{order.status}</span>
                                    </div>
                                    <div className="text-right min-w-[100px]">
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Amount</p>
                                        <span className="text-xl font-bold dark:text-white">{formatCurrency(order.price)}</span>
                                    </div>
                                    <Button size="icon" variant="ghost" className="rounded-full bg-gray-50 dark:bg-white/10 hover:text-brand-gold"><ChevronRight className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "payments" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {userCards.map((card) => (
                            <motion.div 
                                key={card.id}
                                layoutId={`card-${card.id}`}
                                className="p-8 bg-gradient-to-br from-brand-onyx to-black dark:from-black dark:to-[#1a1c1d] rounded-[2.5rem] text-white relative h-64 shadow-2xl overflow-hidden group border border-brand-gold/20"
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <div className="h-12 w-16 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center font-bold text-xs uppercase opacity-60">VISA</div>
                                </div>
                                <div className="h-full flex flex-col justify-between relative z-10">
                                    <CreditCard className="h-10 w-10 text-brand-gold/60" />
                                    <div>
                                        <p className="text-lg font-mono tracking-[0.2em] mb-4 text-white/90">**** **** **** {card.last4}</p>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Card Holder</p>
                                                <p className="font-bold text-sm tracking-widest uppercase truncate max-w-[180px]">{card.holder}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Expiry</p>
                                                <p className="font-bold text-sm">{card.expiry}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-all duration-700" />
                            </motion.div>
                        ))}
                        
                        <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
                            <DialogTrigger asChild>
                                <button className="h-64 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-white/10 flex flex-col items-center justify-center gap-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-gray-400 hover:text-brand-gold group">
                                    <div className="h-14 w-14 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Plus className="h-6 w-6" />
                                    </div>
                                    <span className="font-bold text-sm tracking-widest uppercase">Add New Method</span>
                                </button>
                            </DialogTrigger>
                            <DialogContent className="bg-brand-white dark:bg-brand-onyx border-white/10 sm:max-w-[450px] rounded-[2rem] p-0 overflow-hidden outline-none">
                                <div className="p-8 space-y-8">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-heading font-bold dark:text-white uppercase tracking-tighter">Add Secure <span className="text-brand-gold">Payment</span></DialogTitle>
                                        <DialogDescription className="text-gray-500 text-xs">Enter your card details to enable seamless desert bookings.</DialogDescription>
                                    </DialogHeader>
                                    
                                    <form onSubmit={handleAddCard} className="space-y-6">
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Cardholder Name</Label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                    <Input defaultValue={user?.fullName || ""} className="pl-12 h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl dark:text-white" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Card Number</Label>
                                                <div className="relative">
                                                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                    <Input placeholder="**** **** **** ****" className="pl-12 h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl dark:text-white" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Expiry</Label>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                        <Input 
                                                            placeholder="MM/YY" 
                                                            value={expiryDate}
                                                            onChange={handleExpiryChange}
                                                            className="pl-12 h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl dark:text-white" 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">CVV</Label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                        <Input placeholder="***" className="pl-12 h-14 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-white/10 rounded-2xl dark:text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 py-4 px-6 bg-green-500/10 rounded-2xl border border-green-500/20 mb-4">
                                            <ShieldCheck className="h-5 w-5 text-green-500" />
                                            <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest">SSL Encrypted Payment Gateway</p>
                                        </div>

                                        <DialogFooter className="flex flex-col gap-3 pt-4 sm:flex-col">
                                            <Button type="submit" className="w-full h-14 bg-brand-gold text-brand-onyx hover:bg-white font-bold rounded-2xl shadow-xl shadow-brand-gold/10 transition-all">
                                                Authorize & Save Method
                                            </Button>
                                            <Button type="button" variant="ghost" onClick={() => setIsAddingCard(false)} className="w-full h-10 text-gray-500 hover:text-white font-bold rounded-2xl">
                                                Cancel
                                            </Button>
                                        </DialogFooter>
                                    </form>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                )}

                {(activeTab === "security" || activeTab === "settings") && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-12 md:p-24 bg-gray-50 dark:bg-white/5 rounded-[4rem] text-center border border-gray-100 dark:border-white/10 relative overflow-hidden"
                    >
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
                         <div className="h-24 w-24 rounded-[2rem] bg-brand-gold/10 text-brand-gold mx-auto flex items-center justify-center mb-10 shadow-inner">
                             <Lock className="h-10 w-10 animate-pulse" />
                         </div>
                         <h2 className="text-3xl font-heading font-bold dark:text-white mb-6 uppercase tracking-tight">Configuration <span className="text-brand-gold">Portal</span></h2>
                         <p className="text-gray-500 max-w-md mx-auto mb-12 text-lg leading-relaxed">Your concierge preferences and security protocols are securely managed via our Clerk-encrypted gateway for maximum protection.</p>
                         <Button 
                            onClick={() => openUserProfile()}
                            className="bg-brand-onyx dark:bg-brand-gold text-white dark:text-brand-onyx font-bold px-12 h-16 text-lg rounded-3xl shadow-2xl shadow-brand-gold/20 hover:scale-[1.05] transition-all"
                         >
                            Open Secure Gateway
                         </Button>
                         
                         <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-30">
                             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><ShieldCheck className="h-4 w-4" /> PCI-DSS Compliant</div>
                             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Lock className="h-4 w-4" /> 256-Bit SSL</div>
                         </div>
                    </motion.div>
                )}
            </main>

        </div>
      </div>
    </div>
  );
}
