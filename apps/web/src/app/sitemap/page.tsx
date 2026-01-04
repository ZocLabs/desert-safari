"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Map, ChevronRight, Compass } from "lucide-react";

const sitemapData = [
  {
    category: "Main Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Signature Tours", href: "/tours" },
      { name: "Experience Gallery", href: "/gallery" },
      { name: "About Heritage", href: "/about" },
    ],
  },
  {
    category: "Luxury Services",
    links: [
      { name: "Private Concierge", href: "/contact" },
      { name: "Corporate Events", href: "/contact" },
      { name: "Gift Vouchers", href: "/tours" },
    ],
  },
  {
    category: "Legal & Digital",
    links: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Settings", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  },
  {
      category: "Support",
      links: [
        { name: "Frequently Asked Questions", href: "/faq" },
        { name: "Contact Support", href: "/contact" },
        { name: "Live Chat assist", href: "/" },
      ]
  }
];

export default function SitemapPage() {
  return (
    <div className="bg-brand-white dark:bg-brand-onyx min-h-screen pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                <Compass className="h-10 w-10 animate-spin-slow" />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-onyx dark:text-white mb-6">Site <span className="text-brand-gold">Atlas</span></h1>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-light">Navigate your journey through our digital desert.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sitemapData.map((section, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-8"
                >
                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold border-b border-brand-gold/20 pb-4">{section.category}</h3>
                    <ul className="space-y-4">
                        {section.links.map((link, lIdx) => (
                            <li key={lIdx}>
                                <Link 
                                    href={link.href}
                                    className="group flex items-center justify-between text-lg text-brand-onyx dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors"
                                >
                                    <span>{link.name}</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
