"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart, Product } from "@/context/CartContext";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { addItem } = useCart();

  // 1. Gallery State
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Generate 3 gallery images by applying crops to the single source image
  const galleryImages = [
    { src: product.image, className: "object-contain p-8" },
    { src: product.image, className: "object-cover scale-150 object-center" },
    { src: product.image, className: "object-cover scale-125 object-bottom" },
  ];

  // 2. Purchase Type Toggle State
  const [purchaseType, setPurchaseType] = useState<"one-time" | "subscription">("one-time");

  // Calculate dynamic price based on selection (15% discount for subscription)
  const isSubscription = purchaseType === "subscription";
  const displayedPrice = isSubscription ? Math.round(product.price * 0.85) : product.price;

  // 3. Accordions State
  const [openAccordion, setOpenAccordion] = useState<string | null>("ingredients");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // 4. Cart Add Event
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = () => {
    addItem(product, 1, isSubscription);
    setToastMessage(`${product.name} added to ritual.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // 5. Scroll-Triggered Mobile Buy Bar State
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);
  const buyBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buyBoxRef.current) return;
      const buyBoxBottom = buyBoxRef.current.getBoundingClientRect().bottom + window.scrollY;
      
      // If we scroll past the bottom of the main buy box on mobile, show the bar
      if (window.scrollY > buyBoxBottom - 60) {
        setShowMobileStickyBar(true);
      } else {
        setShowMobileStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 6. Ingredients descriptions mapping
  const getIngredientDescription = (name: string): string => {
    const map: { [key: string]: string } = {
      Glucosamine: "Supports cartilage integrity, stimulates joint fluid production, and preserves mobility.",
      Chondroitin: "Inhibits destructive enzymes in joint tissues and aids cartilage shock-absorption properties.",
      MSM: "A natural organic sulfur source that reduces inflammatory markers and preserves muscle fibers.",
      "Omega-3": "High-purity EPA & DHA fatty acids targeting joint and cellular inflammatory pathways.",
      Biotin: "Essential B-vitamin reinforcing follicle strength and reducing epidermal moisture loss.",
      Zinc: "Trace mineral vital for keratin production, cellular repair, and immune barrier defense.",
      Probiotics: "Viable beneficial strains fostering microflora diversity and robust digestive health.",
      Prebiotics: "Non-digestible soluble fibers that nourish healthy gut bacteria and fuel gut lining cells.",
      "Digestive Enzymes": "Highly active catalysts that optimize macronutrient breakdown and absorption.",
      "L-Theanine": "Natural amino acid promoting alpha brain wave production to ease biological stress.",
      Ashwagandha: "Adaptogenic root extract that modulates high cortisol levels and supports nervous systems.",
      Chamomile: "Soothing botanical that relaxes muscle tension and aids resting behaviors.",
      Melatonin: "Neurohormone aiding natural sleep cycles and cellular repair processes.",
      "25+ Essential Vitamins & Minerals": "Broad-spectrum micronutrients supporting vital metabolic processes.",
      "Whole Food Blend": "Organic cofactors derived from whole foods for enhanced nutrient uptake.",
      Antioxidants: "Scavengers of cellular oxidants that limit cumulative age-related tissues breakdown.",
      "Immune Support Blend": "Synergistic bioactive matrix amplifying innate immune responses.",
      "Vitamin C & E": "Essential antioxidant vitamins shielding cell membranes from oxidative stress.",
      Elderberry: "Flavones-rich berry supporting natural defenses and cellular health.",
    };
    return map[name] || "Clinical grade active compound supporting canine longevity.";
  };

  return (
    <div className="pt-24 pb-20 bg-bone min-h-screen">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 bg-obsidian text-bone px-6 py-4 z-50 flex items-center justify-between font-body text-xs uppercase tracking-wider animate-fade-in shadow-lg">
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-4 text-bone/60 hover:text-bone text-sm">
            ✕
          </button>
        </div>
      )}

      {/* Main PDP Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 font-body text-xs tracking-wider uppercase text-obsidian/60 flex items-center space-x-2">
          <Link href="/shop" className="hover:text-obsidian transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-obsidian font-semibold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Image Gallery (Desktop Sticky, Mobile stacks first) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 flex flex-col gap-4">
            {/* Active Display Panel */}
            <div className="relative aspect-square w-full bg-bone border border-obsidian overflow-hidden">
              {/* Sku color stripe indicator */}
              <div className="h-1.5 w-full absolute top-0 left-0 z-10" style={{ backgroundColor: product.skuColor }} />
              
              <Image
                src={galleryImages[activeImageIndex].src}
                alt={`${product.name} gallery view ${activeImageIndex + 1}`}
                fill
                className={galleryImages[activeImageIndex].className}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            {/* Thumbnails Row */}
            <div className="flex gap-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-20 h-20 bg-bone border cursor-pointer overflow-hidden ${
                    activeImageIndex === index ? "border-obsidian border-2" : "border-obsidian/20"
                  }`}
                  style={{ borderRadius: "0px" }}
                >
                  <Image
                    src={img.src}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className={img.className}
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Buy Box & Accordions (Scrolls) */}
          <div className="lg:col-span-5 flex flex-col" ref={buyBoxRef}>
            {/* Title & Reviews Link */}
            <h1 className="font-ogg text-4xl md:text-5xl font-bold text-obsidian mb-2">
              {product.name}
            </h1>
            <p className="font-body text-xs text-obsidian/75 italic mb-4">
              {product.tagline}
            </p>

            {/* Review Stars Indicator */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex text-sage text-sm">
                {"★★★★★".split("").map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </div>
              <a href="#reviews" className="font-body text-[10px] tracking-wider uppercase text-obsidian/60 hover:text-obsidian transition-colors underline">
                Read reviews
              </a>
            </div>

            <hr className="border-obsidian/10 mb-6" />

            {/* Subscribe & Save Mock Logic */}
            <div className="space-y-4 mb-8">
              <span className="font-body text-xs font-bold uppercase tracking-wider text-obsidian/50 block">
                Select Purchase Protocol
              </span>

              {/* Toggle Options */}
              <div className="space-y-3">
                {/* One Time */}
                <label
                  onClick={() => setPurchaseType("one-time")}
                  className={`flex items-center justify-between p-4 border cursor-pointer transition-all ${
                    purchaseType === "one-time" ? "border-obsidian bg-oat/20" : "border-obsidian/20 hover:border-obsidian/50"
                  }`}
                  style={{ borderRadius: "0px" }}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="purchase-type"
                      checked={purchaseType === "one-time"}
                      onChange={() => {}}
                      className="accent-obsidian h-4 w-4"
                    />
                    <span className="font-body text-sm font-semibold text-obsidian">One-Time Purchase</span>
                  </div>
                  <span className="font-body text-sm font-bold text-obsidian">${product.price}</span>
                </label>

                {/* Subscription */}
                <label
                  onClick={() => setPurchaseType("subscription")}
                  className={`flex items-center justify-between p-4 border cursor-pointer transition-all ${
                    purchaseType === "subscription" ? "border-obsidian bg-oat/20" : "border-obsidian/20 hover:border-obsidian/50"
                  }`}
                  style={{ borderRadius: "0px" }}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="purchase-type"
                      checked={purchaseType === "subscription"}
                      onChange={() => {}}
                      className="accent-obsidian h-4 w-4"
                    />
                    <div>
                      <span className="font-body text-sm font-semibold text-obsidian block">Subscribe & Save 15%</span>
                      <span className="font-body text-[10px] text-clay font-bold block">Delivered every 30 days</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-body text-sm font-bold text-obsidian block">${Math.round(product.price * 0.85)}</span>
                    <span className="font-body text-[10px] text-obsidian/50 line-through block">${product.price}</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Display Active Pricing & Size */}
            <div className="flex items-baseline justify-between mb-4">
              <div className="flex items-baseline gap-2">
                <span className="font-body text-2xl font-bold text-obsidian">${displayedPrice}</span>
                <span className="font-body text-xs text-obsidian/55">/ jar</span>
              </div>
              <span className="font-body text-xs text-obsidian/60">{product.size}</span>
            </div>

            {/* ONE Primary CTA: Add to Ritual */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-sage text-bone font-body text-xs font-semibold uppercase tracking-wider py-4 hover:opacity-90 transition-opacity mb-4 cursor-pointer"
              style={{ borderRadius: "0px" }}
            >
              Add to Ritual
            </button>

            {/* Persuasive proof badge placed directly below the buy box */}
            <div className="flex items-center justify-center space-x-2 text-center text-obsidian/60 font-body text-[10px] uppercase tracking-wider mb-8">
              <span>✓ Vet Formulated Dose</span>
              <span>·</span>
              <span>✓ NASC Quality Inspected</span>
              <span>·</span>
              <span>✓ 30-Day Guarantee</span>
            </div>

            {/* 3 Accordions */}
            <div className="border-t border-obsidian/10 mt-4">
              {/* Accordion 1: Ingredients */}
              <div className="border-b border-obsidian/10 py-4">
                <button
                  onClick={() => toggleAccordion("ingredients")}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="font-ogg text-lg font-bold text-obsidian">Ingredients</h3>
                  <span className="text-obsidian text-sm">{openAccordion === "ingredients" ? "−" : "+"}</span>
                </button>
                {openAccordion === "ingredients" && (
                  <div className="mt-4 space-y-4">
                    <p className="font-body text-xs text-obsidian/75 leading-relaxed">
                      Every compound has an active physiological purpose. We never introduce flavor enhancers or fillers.
                    </p>
                    <ul className="space-y-3">
                      {product.ingredients.map((ing, i) => (
                        <li key={i} className="border-l-2 border-sage pl-3">
                          <span className="font-body text-xs font-bold text-obsidian block">{ing}</span>
                          <span className="font-body text-xs text-obsidian/75 leading-relaxed block mt-0.5">
                            {getIngredientDescription(ing)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 2: How to Use */}
              <div className="border-b border-obsidian/10 py-4">
                <button
                  onClick={() => toggleAccordion("how-to-use")}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="font-ogg text-lg font-bold text-obsidian">How to Use</h3>
                  <span className="text-obsidian text-sm">{openAccordion === "how-to-use" ? "−" : "+"}</span>
                </button>
                {openAccordion === "how-to-use" && (
                  <div className="mt-4 font-body">
                    <p className="text-xs text-obsidian/75 leading-relaxed mb-4">
                      Give soft chews daily to maintain consistent active blood compound levels. Dosing is weight-dependent:
                    </p>
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-obsidian/10 bg-oat/30 font-semibold uppercase tracking-wider text-[10px] text-obsidian/75">
                          <th className="py-2 px-3">Dog Weight</th>
                          <th className="py-2 px-3">Daily Dose</th>
                          <th className="py-2 px-3">Dossier Protocol</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-obsidian/5">
                        <tr>
                          <td className="py-2 px-3">Under 25 lbs (11kg)</td>
                          <td className="py-2 px-3">1 Soft Chew</td>
                          <td className="py-2 px-3">Morning Feed</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">25 &ndash; 50 lbs (11-23kg)</td>
                          <td className="py-2 px-3">2 Soft Chews</td>
                          <td className="py-2 px-3">Morning & Evening</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Over 50 lbs (23kg)</td>
                          <td className="py-2 px-3">3 Soft Chews</td>
                          <td className="py-2 px-3">Morning & Evening split</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-[10px] text-obsidian/50 italic mt-3">
                      * Always introduce slowly over 7 days. Can be administered as treats.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 3: The Science */}
              <div className="border-b border-obsidian/10 py-4">
                <button
                  onClick={() => toggleAccordion("science")}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="font-ogg text-lg font-bold text-obsidian">The Science</h3>
                  <span className="text-obsidian text-sm">{openAccordion === "science" ? "−" : "+"}</span>
                </button>
                {openAccordion === "science" && (
                  <div className="mt-4 font-body text-xs text-obsidian/75 leading-relaxed space-y-3">
                    <p>
                      Traditional supplements rely on microdosing for labeling claims. Ode products are formulated at the precise concentrations proven effective in peer-reviewed clinical trials.
                    </p>
                    <p>
                      Our manufacturing utilizes a temperature-controlled cold press system, safeguarding the molecular integrity of thermolabile enzymes, vitamins, and probiotic strains that standard high-heat baking destroys.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION (Below the fold) */}
        <section id="reviews" className="mt-24 pt-16 border-t border-obsidian/10">
          <div className="mb-12">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-2">
              VERIFIED RITUAL LOGS
            </span>
            <h2 className="font-ogg text-3xl md:text-4xl font-bold text-obsidian">
              Reviews for {product.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-oat border border-obsidian p-8 flex flex-col justify-between" style={{ borderRadius: "0px" }}>
              <div>
                <div className="flex space-x-1 mb-4 text-sage text-sm">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="font-body text-xs leading-relaxed text-obsidian/90 italic mb-6">
                  &ldquo;A clean formulation. There are no gimmicks or molasses binders. After four weeks, I can confirm my dog&rsquo;s mobility is visibly smoother.&rdquo;
                </p>
              </div>
              <div className="flex flex-col text-[11px] font-body">
                <span className="font-bold text-obsidian">Marcus V.</span>
                <span className="text-obsidian/60">Verified Purchase</span>
              </div>
            </div>

            <div className="bg-oat border border-obsidian p-8 flex flex-col justify-between" style={{ borderRadius: "0px" }}>
              <div>
                <div className="flex space-x-1 mb-4 text-sage text-sm">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="font-body text-xs leading-relaxed text-obsidian/90 italic mb-6">
                  &ldquo;The difference in sourcing is evident. I value the Certificate of Analysis publication. The active dosing matches scientific trials, not commercial baselines.&rdquo;
                </p>
              </div>
              <div className="flex flex-col text-[11px] font-body">
                <span className="font-bold text-obsidian">Dr. Amanda R. (DVM)</span>
                <span className="text-obsidian/60">Verified Vet Reviewer</span>
              </div>
            </div>

            <div className="bg-oat border border-obsidian p-8 flex flex-col justify-between" style={{ borderRadius: "0px" }}>
              <div>
                <div className="flex space-x-1 mb-4 text-sage text-sm">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="font-body text-xs leading-relaxed text-obsidian/90 italic mb-6">
                  &ldquo;Extremely palatable soft chew. The lack of standard fillers prevents stomach sensitivity. My dog receives his dose every morning cleanly.&rdquo;
                </p>
              </div>
              <div className="flex flex-col text-[11px] font-body">
                <span className="font-bold text-obsidian">Charles H.</span>
                <span className="text-obsidian/60">Verified Purchase</span>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED PRODUCTS SECTION */}
        <section className="mt-24 pt-16 border-t border-obsidian/10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-2">
                COMPLETE THE RITUAL
              </span>
              <h2 className="font-ogg text-3xl font-bold text-obsidian">
                Related Support Chews
              </h2>
            </div>
            <Link href="/shop" className="font-body text-xs font-semibold uppercase tracking-wider text-obsidian hover:opacity-75 border-b border-obsidian pb-0.5">
              Explore All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <div key={p.id} className="bg-oat border border-obsidian flex flex-col justify-between" style={{ borderRadius: "0px" }}>
                <div>
                  <div className="h-1.5 w-full" style={{ backgroundColor: p.skuColor }} />
                  <Link href={`/shop/${p.id}`} className="block relative w-full h-44 bg-bone flex items-center justify-center p-4">
                    <Image src={p.image} alt={p.name} width={120} height={120} className="object-contain max-h-full" />
                  </Link>
                  <div className="p-5">
                    <Link href={`/shop/${p.id}`}>
                      <h3 className="font-ogg text-xl font-bold text-obsidian hover:opacity-75 transition-opacity mb-1">{p.name}</h3>
                    </Link>
                    <p className="font-body text-[11px] text-obsidian/75 italic">{p.tagline}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-obsidian/10 flex items-center justify-between">
                  <span className="font-body text-xs font-bold text-obsidian">${p.price}</span>
                  <Link href={`/shop/${p.id}`} className="font-body text-xs font-semibold uppercase tracking-wider text-obsidian hover:opacity-75">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 7. Scroll-Triggered Mobile Buy Bar (Slide up) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-bone border-t border-obsidian py-4 px-6 flex items-center justify-between shadow-2xl transition-all duration-300 lg:hidden ${
          showMobileStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col">
          <span className="font-ogg text-sm font-bold text-obsidian">{product.name}</span>
          <span className="font-body text-xs font-bold text-obsidian">${displayedPrice}</span>
        </div>

        {/* Mobile primary CTA (Synchronized click) */}
        <button
          onClick={handleAddToCart}
          className="bg-sage text-bone font-body text-[11px] font-bold uppercase tracking-wider py-3 px-6 hover:opacity-90 transition-opacity cursor-pointer"
          style={{ borderRadius: "0px" }}
        >
          Add to Ritual
        </button>
      </div>
    </div>
  );
}
