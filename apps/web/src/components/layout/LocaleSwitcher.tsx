"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function LocaleSwitcher() {
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const localeCookie = cookies.find((c) => c.startsWith("NEXT_LOCALE="));
    if (localeCookie) {
      setCurrentLocale(localeCookie.split("=")[1]);
    }
  }, []);

  const toggleLocale = () => {
    const nextLocale = currentLocale === "en" ? "ar" : "en";
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    setCurrentLocale(nextLocale);
    window.location.reload();
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="text-brand-gold hover:bg-brand-gold/10 rounded-full h-9 px-3 gap-2 group transition-all"
    >
      <Globe className="h-4 w-4 group-hover:rotate-12 transition-transform" />
      <span className="text-xs font-bold uppercase">{currentLocale === "en" ? "AR" : "EN"}</span>
    </Button>
  );
}
