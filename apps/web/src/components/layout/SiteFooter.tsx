import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="w-full bg-brand-onyx text-brand-white pt-20 pb-10 border-t border-brand-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-brand-gold">Desert Safari</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience the authentic soul of Qatar with our premium desert adventures. 
              Certified luxury, unmatched safety, and timeless memories.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-brand-gold hover:bg-white/5 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-brand-gold hover:bg-white/5 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-brand-gold hover:bg-white/5 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-brand-gold hover:bg-white/5 rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-white tracking-wide">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/tours" className="hover:text-brand-gold transition-colors">Signature Tours</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
              <li><Link href="/dashboard" className="hover:text-brand-gold transition-colors">My Account</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-white tracking-wide">Support</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-brand-gold transition-colors">FAQs</Link></li>
              <li><Link href="/terms" className="hover:text-brand-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-brand-gold transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-white tracking-wide">Contact</h3>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0" />
                <span>Level 22, Tornado Tower,<br/>West Bay, Doha, Qatar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                <span>+974 4400 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                <span>concierge@desertsafari.qa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Desert Safari Qatar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/sitemap" className="hover:text-brand-gold transition-colors">Sitemap</Link>
            <Link href="/accessibility" className="hover:text-brand-gold transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
