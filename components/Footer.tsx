"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubsubscribed] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/checkout") || pathname.startsWith("/order-confirmation")) {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubsubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-oat text-obsidian py-16 px-4 md:px-8 border-t border-obsidian/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand & Mission column */}
        <div className="md:col-span-2 flex flex-col justify-between space-y-6">
          <div>
            <Image
              src="/logo.png"
              alt="Ode Logo"
              width={80}
              height={32}
              className="h-8 w-auto object-contain mb-4"
            />
            <p className="font-body text-sm max-w-sm leading-relaxed text-obsidian/85">
              Refined nutrition formulated for canine longevity. Grounded in clinical trials, crafted with transparency, and served to protect your dog’s wellness ritual.
            </p>
          </div>
          <div className="text-xs text-obsidian/60 font-body">
            © {new Date().getFullYear()} Ode Canine. All rights reserved.
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <h3 className="font-ogg text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2 font-body text-sm">
            <li>
              <Link href="/shop" className="hover:opacity-75 transition-opacity">
                Shop Supplements
              </Link>
            </li>
            <li>
              <Link href="/science" className="hover:opacity-75 transition-opacity">
                The Science
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:opacity-75 transition-opacity">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:opacity-75 transition-opacity">
                Common Questions
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter / Form column */}
        <div>
          <h3 className="font-ogg text-lg font-bold mb-4">Stay Informed</h3>
          <p className="font-body text-xs text-obsidian/75 mb-6 leading-relaxed">
            Receive veterinary insights, ingredient reports, and early product access.
          </p>

          {subscribed ? (
            <p className="text-sm text-success font-body font-medium">
              Thank you for subscribing. We will keep you updated.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative w-full pt-4">
                <input
                  type="email"
                  id="footer_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ode-input peer placeholder-transparent"
                  placeholder="Email address"
                  required
                />
                <label
                  htmlFor="footer_email"
                  className="absolute left-0 top-4 text-xs font-body text-obsidian/60 transition-all duration-200 
                  peer-placeholder-shown:text-sm peer-placeholder-shown:top-5 
                  peer-focus:top-0 peer-focus:text-xs peer-focus:text-obsidian"
                >
                  Email address
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-sage text-bone font-body text-xs font-semibold uppercase tracking-wider py-3 px-6 hover:opacity-90 transition-opacity"
                style={{ borderRadius: "0px" }}
              >
                Subscribe
              </button>
            </form>
          )}

          {/* Social Links */}
          <div className="flex space-x-4 mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-obsidian/70 hover:text-obsidian transition-colors text-xs font-body"
            >
              Instagram
            </a>
            <a
              href="https://journal.ode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-obsidian/70 hover:text-obsidian transition-colors text-xs font-body"
            >
              Journal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
