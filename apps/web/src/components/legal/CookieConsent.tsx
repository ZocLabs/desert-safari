"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:right-4 md:w-[400px]"
        >
            <div className="bg-brand-onyx/95 backdrop-blur-md border border-white/10 p-6 shadow-2xl rounded-xl text-white">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-brand-gold">We value your privacy</h3>
                    <button onClick={handleDecline} className="text-gray-400 hover:text-white">
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    We use cookies to enhance your experience, analyze site traffic, and deliver personalized content. By clicking "Accept", you agree to our use of cookies. 
                    <Link href="/cookies" className="underline ml-1 hover:text-brand-gold">Read Policy</Link>
                </p>
                <div className="flex gap-3">
                    <Button onClick={handleAccept} className="flex-1 bg-brand-gold text-brand-onyx hover:bg-white font-bold">
                        Accept All
                    </Button>
                    <Button onClick={handleDecline} variant="outline" className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10">
                        Essential Only
                    </Button>
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
