"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-brand-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-5xl font-heading font-bold text-brand-onyx mb-6">Contact Us</h1>
            <p className="text-gray-600">Have a custom request? Planning a corporate event? Or just want to say hello? We are at your service 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="bg-brand-onyx text-white p-10 rounded-2xl shadow-xl h-fit">
                <h2 className="text-2xl font-bold font-heading text-brand-gold mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold mb-1">Visit Our Office</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Luxury Travel Tower, Level 22<br/>
                                West Bay, Doha, Qatar
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold mb-1">Call Concierge</h3>
                            <p className="text-gray-400 text-sm">
                                +974 4400 0000 (24/7)<br/>
                                +974 3300 0000 (WhatsApp)
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold mb-1">Email Us</h3>
                            <p className="text-gray-400 text-sm">
                                bookings@desertsafari.qa<br/>
                                corporate@desertsafari.qa
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <h4 className="font-bold text-sm mb-4">Follow our journey</h4>
                    <div className="flex gap-4">
                        {/* Social Icons would go here */}
                        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-onyx transition-colors cursor-pointer">IG</div>
                        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-onyx transition-colors cursor-pointer">FB</div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold font-heading text-brand-onyx mb-6">Send a Message</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">First Name</label>
                            <Input placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Last Name</label>
                            <Input placeholder="Doe" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input placeholder="john@example.com" type="email" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Subject</label>
                        <Input placeholder="Inquiry about Private Tour" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <Textarea placeholder="Tell us about your dream trip..." className="min-h-[150px]" />
                    </div>

                    <Button size="lg" className="w-full bg-brand-gold text-brand-onyx font-bold hover:bg-brand-gold/90">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
