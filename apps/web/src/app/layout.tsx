import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { Providers } from "@/components/providers";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Desert Safari Qatar | Luxury Adventure",
  description: "Experience the premium desert safaris in Qatar. Book dune bashing, camel rides, and overnight camps.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const isArabic = locale === "ar";

  return (
    <ClerkProvider>
      <html lang={locale} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
        <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, playfair.variable)}>
          <Providers locale={locale}>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">
                  {children}
              </div>
              <SiteFooter />
              <CookieConsent />
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
