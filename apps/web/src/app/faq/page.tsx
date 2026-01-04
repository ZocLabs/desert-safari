"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is included in the Desert Safari?",
    answer: "Our standard luxury safari includes 4x4 dune bashing in a Land Cruiser, pick-up and drop-off from your location in Doha, camel riding, sandboarding, and refreshments. Evening tours also include a BBQ dinner and entertainment at our Bedouin camp."
  },
  {
    question: "What should I wear?",
    answer: "We recommend loose, comfortable clothing. Light materials like cotton or linen are best for the heat. A hat and sunglasses are essential. During winter months (Nov-Feb), the desert can get chilly at night, so bring a light jacket."
  },
  {
    question: "Is dune bashing safe?",
    answer: "Yes, absolutely. All our drivers are licensed professionals with specific training for desert driving. Our vehicles are equipped with roll cages, reinforced suspension, and first-aid kits. We also adjust the intensity of the drive based on your preference."
  },
  {
    question: " Can you accommodate dietary restrictions?",
    answer: "Yes, we cater to all dietary needs including vegetarian, vegan, gluten-free, and halal. Please inform our concierge team at the time of booking so we can prepare a special meal for you."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Full refunds are provided for cancellations made up to 24 hours before the scheduled tour. Cancellations within 24 hours may incur a 50% fee. For large group bookings tailored cancellation terms apply."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-brand-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
         <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand-gold/10 text-brand-gold mb-4">
                <HelpCircle className="h-6 w-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-onyx mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600">Everything you need to know before your adventure.</p>
         </div>

         <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border border-brand-onyx/10 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                    <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="flex items-center justify-between w-full p-6 text-left"
                    >
                        <span className="text-lg font-bold text-brand-onyx">{faq.question}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                        {openIndex === idx && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
