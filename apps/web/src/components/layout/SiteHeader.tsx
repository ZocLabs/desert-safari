"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ShoppingBag, LayoutDashboard, History, ShieldCheck, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useCart } from "@/context/CartContext";
import { 
  SignInButton, 
  UserButton, 
  SignedIn, 
  SignedOut 
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useI18n } from "@/context/I18nContext";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tours", href: "/tours" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const localNavItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.tours'), href: "/tours" },
    { name: t('nav.gallery'), href: "/gallery" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-brand-onyx/90 dark:bg-black/90 backdrop-blur-md py-3 shadow-lg border-white/10"
          : isHome 
            ? "bg-transparent py-6"
            : "bg-brand-onyx py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
           <span className={cn(
               "font-heading font-bold text-2xl tracking-tighter",
               (isScrolled || !isHome) ? "text-brand-gold" : "text-white"
           )}>
              DESERT<span className="text-white">SAFARI</span>
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4 border-r border-white/10 pr-6">
                {localNavItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "text-sm font-medium tracking-wide transition-colors hover:text-brand-gold",
                            pathname === item.href ? "text-brand-gold" : (isScrolled || !isHome) ? "text-gray-200" : "text-white/90"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    <LocaleSwitcher />
                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative text-white hover:text-brand-gold rounded-full h-9 w-9">
                            <ShoppingBag className="h-5 w-5" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-onyx text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center ring-2 ring-brand-onyx">
                                    {cartItemCount}
                                </span>
                            )}
                        </Button>
                    </Link>
                </div>

                <SignedOut>
                    <SignInButton mode="modal">
                        <Button variant="ghost" size="sm" className="text-white hover:text-brand-gold font-bold">
                            Login
                        </Button>
                    </SignInButton>
                </SignedOut>
                
                <SignedIn>
                    <UserButton 
                      afterSignOutUrl="/" 
                      appearance={{ 
                        elements: { 
                          userButtonAvatarBox: "h-10 w-10 border-2 border-brand-gold/50 hover:border-brand-gold transition-colors shadow-lg shadow-brand-gold/10",
                          userButtonPopoverCard: "bg-brand-onyx border border-white/10 shadow-2xl rounded-2xl",
                          userButtonPopoverActionButton: "hover:bg-white/5",
                          userButtonPopoverActionButtonText: "text-white font-medium",
                        } 
                      }}
                    >
                      <UserButton.MenuItems>
                        <UserButton.Link
                          label="My Journey Dashboard"
                          labelIcon={<LayoutDashboard className="h-4 w-4" />}
                          href="/dashboard"
                        />
                         <UserButton.Link
                          label="Previous Orders"
                          labelIcon={<History className="h-4 w-4" />}
                          href="/dashboard"
                        />
                        <UserButton.Link
                          label="Account Safety"
                          labelIcon={<ShieldCheck className="h-4 w-4" />}
                          href="/dashboard"
                        />
                        <UserButton.Action label="manageAccount" />
                      </UserButton.MenuItems>
                    </UserButton>
                </SignedIn>

                <Link href="/tours">
                    <Button size="sm" className="bg-brand-gold text-brand-onyx hover:bg-brand-white font-bold px-6 rounded-full shadow-lg shadow-brand-gold/20">
                        {t('nav.bookNow')}
                    </Button>
                </Link>
            </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
            <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative text-white rounded-full h-10 w-10">
                    <ShoppingBag className="h-6 w-6" />
                    {cartItemCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-onyx text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center ring-2 ring-brand-onyx">
                            {cartItemCount}
                        </span>
                    )}
                </Button>
            </Link>
            <ThemeToggle />
            <button 
                className="relative z-50 text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-40 bg-brand-onyx pt-24 px-6 md:hidden flex flex-col gap-6"
            >
                {localNavItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-3xl font-heading font-bold text-brand-white hover:text-brand-gold"
                    >
                        {item.name}
                    </Link>
                ))}
                <div className="pt-8 border-t border-white/10">
                    <Link href="/tours">
                        <Button className="w-full h-12 text-lg bg-brand-gold text-brand-onyx">
                            Book Your Safari
                        </Button>
                    </Link>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
