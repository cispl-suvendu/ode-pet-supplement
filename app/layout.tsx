import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-ogg",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-neue-haas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ode — Premium Canine Longevity & Wellness",
  description: "Formulated for canine longevity. Grounded in clinical trials, crafted with transparency, and served to protect your dog’s wellness ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bone text-obsidian antialiased selection:bg-oat selection:text-obsidian min-h-screen flex flex-col justify-between">
        <CartProvider>
          <div>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
          </div>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
