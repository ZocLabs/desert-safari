"use client";

import { motion } from "framer-motion";
import { Accessibility, Eye, Volume2, Fingerprint, Keyboard } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <div className="bg-brand-white dark:bg-brand-onyx min-h-screen pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 border-b border-gray-100 dark:border-white/10 pb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-gold/10 text-brand-gold mb-6">
                <Accessibility className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-onyx dark:text-white mb-6">Accessibility <span className="text-brand-gold">Commitment</span></h1>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-light">Making the luxury of the desert available to everyone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
                <Eye className="h-10 w-10 text-brand-gold mb-6" />
                <h3 className="text-2xl font-bold dark:text-white mb-4">Visual Support</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">High contrast modes, scalable typography, and screen-reader optimized layouts for the visually impaired.</p>
            </div>
            <div className="p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
                <Keyboard className="h-10 w-10 text-brand-gold mb-6" />
                <h3 className="text-2xl font-bold dark:text-white mb-4">Keyboard Nav</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Full keyboard accessibility for all interactive elements, including our signature booking flow and concierges.</p>
            </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <h2 className="text-3xl font-heading font-bold text-brand-onyx dark:text-white">Our Standards</h2>
            <p className="text-gray-600 dark:text-gray-400">
                Desert Safari Qatar is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards, aiming for **WCAG 2.1 Level AA** compliance.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
                Whether you are using assistive technologies like a screen reader, a magnifier, eye-tracking devices, or voice recognition software, our goal is to make your visit to our digital dunes successful and enjoyable.
            </p>
            
            <div className="bg-brand-gold/5 dark:bg-brand-gold/10 p-10 rounded-[3rem] border border-brand-gold/20 mt-12">
                <h3 className="text-2xl font-heading font-bold text-brand-onyx dark:text-white mb-4 text-center">Need Assistance?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                    If you encounter any accessibility barriers while using our platform, please contact our dedicated accessibility concierge:
                </p>
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">Email</p>
                        <p className="text-brand-onyx dark:text-white font-bold">access@desertsafari.qa</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">Response Time</p>
                        <p className="text-brand-onyx dark:text-white font-bold">Under 12 Hours</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
