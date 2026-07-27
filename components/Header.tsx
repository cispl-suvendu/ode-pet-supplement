"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

import { usePathname } from "next/navigation";



export default function Header() {
  const { items, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const cartItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case page is loaded scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/checkout") || pathname.startsWith("/order-confirmation")) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-obsidian text-bone text-center py-2 px-4 font-body text-xs tracking-wider uppercase w-full relative z-[60]">
        Free shipping on orders over $50 — 30-Day Guarantee
      </div>

      <header
        className={`transition-all duration-300 w-full relative z-[60] ${
          isScrolled || isMobileMenuOpen
            ? "bg-bone border-b border-obsidian/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo (Left) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Ode Logo"
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Links (Center - Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/shop"
              className="font-body text-sm font-medium tracking-wide text-obsidian hover:opacity-75 transition-opacity"
            >
              Shop
            </Link>
            <Link
              href="/science"
              className="font-body text-sm font-medium tracking-wide text-obsidian hover:opacity-75 transition-opacity"
            >
              Science
            </Link>
            <Link
              href="/about"
              className="font-body text-sm font-medium tracking-wide text-obsidian hover:opacity-75 transition-opacity"
            >
              About
            </Link>
          </nav>

          {/* Action Icons (Right) */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link
              href="/account"
              className="hidden md:block text-obsidian hover:opacity-75 transition-opacity"
              aria-label="Account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>

            {/* Cart Icon Button */}
            <button
              onClick={openCart}
              className="relative text-obsidian hover:opacity-75 transition-opacity"
              aria-label={`Open Cart, ${cartItemsCount} items`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-sage text-bone font-body text-[10px] min-w-[20px] h-[20px] px-1 rounded-full flex items-center justify-center font-bold leading-none shadow-sm border border-bone/50">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-obsidian p-1 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-[100vh] bg-bone border-t border-obsidian/10 flex flex-col p-6 space-y-6 shadow-xl z-50">
          <Link
            href="/shop"
            className="font-ogg text-3xl text-obsidian border-b border-obsidian/5 pb-4"
          >
            Shop
          </Link>
          <Link
            href="/science"
            className="font-ogg text-3xl text-obsidian border-b border-obsidian/5 pb-4"
          >
            Science
          </Link>
          <Link
            href="/about"
            className="font-ogg text-3xl text-obsidian border-b border-obsidian/5 pb-4"
          >
            About
          </Link>
          <Link
            href="/account"
            className="font-ogg text-3xl text-obsidian"
          >
            Account
          </Link>
        </div>
      )}
    </div>
  );
}
