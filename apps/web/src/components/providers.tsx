"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/context/CartContext";
import { I18nProvider } from "@/context/I18nContext";

export function Providers({ 
  children, 
  locale 
}: { 
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <I18nProvider locale={locale}>
        <CartProvider>
          {children}
        </CartProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
