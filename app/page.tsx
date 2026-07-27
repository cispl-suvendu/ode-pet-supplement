import React from "react";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";

export default function Home() {
  // Safe cast for local products data
  const products = productsData;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Hero Section - Premium Editorial */}
      <section className="relative w-full min-h-screen bg-bone overflow-hidden flex items-center pt-[104px]">
        {/* Background Image with seamless blend */}
        <div className="absolute top-[104px] bottom-0 left-0 right-0 lg:left-[35%] lg:w-[65%] z-0 animate-slow-fade">
          <Image
            src="/products/life-style.png"
            alt="Healthy dog resting in natural light"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Mobile gradient (bottom up) */}
          <div className="absolute inset-0 bg-gradient-to-t from-bone from-[40%] via-bone/40 via-[60%] to-transparent lg:hidden" />
          {/* Desktop gradient (left to right) */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-bone from-0% via-bone/10 via-[15%] to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-0">
          <div className="max-w-xl lg:max-w-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h1 className="font-ogg text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] text-obsidian mb-6 tracking-tight">
              The science of <span className="italic font-light text-sage">their</span> best life.
            </h1>
            <p className="font-body text-base lg:text-lg text-obsidian/80 leading-relaxed mb-10 max-w-lg">
              Clinical-grade canine supplements formulated by veterinarians, backed by peer-reviewed research, and delivered with absolute ingredient transparency.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Link
                href="/shop"
                className="group relative inline-flex items-center justify-center bg-obsidian text-bone font-body text-xs font-semibold uppercase tracking-widest py-5 px-10 overflow-hidden transition-all duration-300 hover:bg-sage hover:shadow-lg rounded-full lg:rounded-none"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop the Ritual
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>

              <div className="flex flex-col gap-1.5 border-l-2 border-sage/30 pl-6 hidden sm:flex">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-clay border-2 border-bone flex items-center justify-center text-bone font-bold text-xs shadow-sm">J</div>
                    <div className="w-8 h-8 rounded-full bg-sage border-2 border-bone flex items-center justify-center text-bone font-bold text-xs shadow-sm">A</div>
                    <div className="w-8 h-8 rounded-full bg-obsidian border-2 border-bone flex items-center justify-center text-bone font-bold text-xs shadow-sm">M</div>
                  </div>
                  <div className="flex space-x-0.5 text-sage ml-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-body text-xs text-obsidian/70 font-medium">
                  Trusted by <strong className="text-obsidian">10,000+</strong> parents
                </p>
              </div>
            </div>

            {/* Persuasive Proof Point */}
            <div className="mt-8 pt-6 border-t border-obsidian/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-sage">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <p className="font-body text-xs text-obsidian/70">
                Clinically dosed active ingredients. No proprietary secrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof / Trust Banner */}
      <section className="bg-bone py-6 px-4 border-y border-obsidian/10 relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
          <span className="font-body text-xs font-bold tracking-widest uppercase text-obsidian/80 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-sage">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m-2-2h4" />
            </svg>
            Vet Formulated
          </span>
          <span className="hidden md:inline text-obsidian/30">•</span>
          <span className="font-body text-xs font-bold tracking-widest uppercase text-obsidian/80 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-sage">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            No Proprietary Blends
          </span>
          <span className="hidden md:inline text-obsidian/30">•</span>
          <span className="font-body text-xs font-bold tracking-widest uppercase text-obsidian/80 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-sage">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Third-Party Tested
          </span>
          <span className="hidden md:inline text-obsidian/30">•</span>
          <span className="font-body text-xs font-bold tracking-widest uppercase text-obsidian/80 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-sage">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.888a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            Made in USA
          </span>
        </div>
      </section>

      {/* 5. Featured Products Section (MOVED UP) */}
      <section className="py-20 bg-oat/30 border-t border-obsidian/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-2">
                TARGETED HEALTH
              </span>
              <h2 className="font-ogg text-3xl md:text-4xl lg:text-5xl font-bold text-obsidian">
                The Daily Rituals
              </h2>
            </div>
            <Link
              href="/shop"
              className="font-body text-xs font-semibold uppercase tracking-wider text-obsidian hover:opacity-75 border-b border-obsidian pb-1"
            >
              Shop All Supplements →
            </Link>
          </div>

          {/* Horizontal scroll grid */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-oat scrollbar-track-transparent">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-start bg-oat flex flex-col justify-between border-t-4 border-solid"
                style={{ borderColor: product.skuColor }}
              >
                <div className="p-6 flex-1 flex flex-col items-center">
                  {/* Image container */}
                  <div className="relative w-full h-[220px] md:h-[260px] mb-6 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={260}
                      height={260}
                      className="object-contain max-h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Meta details */}
                  <div className="w-full text-center mt-auto">
                    <h3 className="font-ogg text-xl font-bold text-obsidian mb-1">
                      {product.name}
                    </h3>
                    <p className="font-body text-xs text-obsidian/70 italic mb-2">
                      {product.tagline}
                    </p>
                    <span className="block font-body text-xs text-obsidian/60 mb-2">
                      {product.size}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-obsidian/10 flex items-center justify-between">
                  <span className="font-body text-sm font-bold text-obsidian">
                    ${product.price}
                  </span>
                  <Link
                    href={`/shop/${product.id}`}
                    className="font-body text-xs font-semibold uppercase tracking-wider text-obsidian hover:opacity-75"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Value Props Section (MOVED DOWN) */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-bone border-t border-obsidian/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-sage block mb-4 border border-sage/30 px-4 py-1.5 rounded-full">
              THE ODE PROTOCOL
            </span>
            <h2 className="font-ogg text-4xl md:text-5xl lg:text-6xl font-bold text-obsidian max-w-3xl mx-auto leading-tight">
              Canine health is a science,<br className="hidden md:block"/> not a mystery.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div className="bg-sage/5 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between border border-obsidian/5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-sage/10 transition-all duration-500">
              <div className="absolute -top-6 right-2 font-ogg text-[150px] text-obsidian/5 leading-none group-hover:text-sage/10 transition-colors duration-500 select-none pointer-events-none">
                01
              </div>
              <div className="relative z-10 mb-8">
                <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center text-sage mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                  </svg>
                </div>
                <h3 className="font-ogg text-3xl font-bold text-obsidian mb-4 group-hover:text-sage transition-colors duration-300">
                  Clinical Concentrations
                </h3>
                <p className="font-body text-base text-obsidian/70 leading-relaxed">
                  We formulate each chew with active ingredient levels mapped exactly to clinical trials. We never microdose ingredients for marketing claims.
                </p>
              </div>
              <div className="relative z-10 bg-oat/50 rounded-2xl p-5 border border-obsidian/5 group-hover:bg-sage/5 transition-colors duration-300">
                <span className="flex items-center gap-2 font-body text-[10px] uppercase tracking-widest text-sage font-bold mb-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                  Persuasive Proof
                </span>
                <span className="font-body text-sm font-medium text-obsidian leading-snug block">
                  Vet-formulated dossier with active mg dosages labeled on every jar.
                </span>
              </div>
            </div>

            {/* Value Prop 2 */}
            <div className="bg-clay/5 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between border border-obsidian/5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-clay/10 transition-all duration-500 md:mt-8">
              <div className="absolute -top-6 right-2 font-ogg text-[150px] text-obsidian/5 leading-none group-hover:text-clay/10 transition-colors duration-500 select-none pointer-events-none">
                02
              </div>
              <div className="relative z-10 mb-8">
                <div className="w-14 h-14 bg-clay/10 rounded-full flex items-center justify-center text-clay mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <h3 className="font-ogg text-3xl font-bold text-obsidian mb-4 group-hover:text-clay transition-colors duration-300">
                  Absolute Traceability
                </h3>
                <p className="font-body text-base text-obsidian/70 leading-relaxed">
                  Every batch undergoes independent laboratory testing. We publish Certificate of Analysis (COA) reports verifying purity, heavy metals clearance, and dosage.
                </p>
              </div>
              <div className="relative z-10 bg-oat/50 rounded-2xl p-5 border border-obsidian/5 group-hover:bg-clay/5 transition-colors duration-300">
                <span className="flex items-center gap-2 font-body text-[10px] uppercase tracking-widest text-clay font-bold mb-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                  Persuasive Proof
                </span>
                <span className="font-body text-sm font-medium text-obsidian leading-snug block">
                  100% third-party lab tested with unique batch QR code lookup.
                </span>
              </div>
            </div>

            {/* Value Prop 3 */}
            <div className="bg-oat/30 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between border border-obsidian/5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-obsidian/10 transition-all duration-500">
              <div className="absolute -top-6 right-2 font-ogg text-[150px] text-obsidian/5 leading-none group-hover:text-obsidian/10 transition-colors duration-500 select-none pointer-events-none">
                03
              </div>
              <div className="relative z-10 mb-8">
                <div className="w-14 h-14 bg-obsidian/5 rounded-full flex items-center justify-center text-obsidian mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-ogg text-3xl font-bold text-obsidian mb-4 group-hover:text-obsidian/70 transition-colors duration-300">
                  Zero Filler Policy
                </h3>
                <p className="font-body text-base text-obsidian/70 leading-relaxed">
                  We avoid starch binders, artificial preservatives, wheat, and soy. Our chews use cold-pressed real ingredients to preserve active compound integrity.
                </p>
              </div>
              <div className="relative z-10 bg-oat/50 rounded-2xl p-5 border border-obsidian/5 group-hover:bg-obsidian/5 transition-colors duration-300">
                <span className="flex items-center gap-2 font-body text-[10px] uppercase tracking-widest text-obsidian font-bold mb-2">
                  <svg className="w-3 h-3 text-obsidian" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                  Persuasive Proof
                </span>
                <span className="font-body text-sm font-medium text-obsidian leading-snug block">
                  Cold-press processing badge & NASC Quality Audit seal.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5.5 Premium Offer Grid Section */}
      <section className="py-24 bg-bone border-t border-obsidian/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-sage block mb-3">
              EXCLUSIVE OFFERS
            </span>
            <h2 className="font-ogg text-3xl md:text-4xl lg:text-5xl font-bold text-obsidian">
              Unlock your dog's best life.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Big Card (Spans 2 columns on desktop) */}
            <div className="lg:col-span-2 bg-sage/5 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between border border-sage/20 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-sage/20 hover:border-sage/40 transition-all duration-500">
              <div className="absolute top-6 left-6 bg-sage text-white font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10 shadow-md animate-pulse-glow">
                Bundle & Save 20%
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-sage/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex-1 text-left relative z-10 pt-10 md:pt-0 pr-0 md:pr-8">
                <h3 className="font-ogg text-4xl md:text-5xl font-bold text-obsidian mb-4 transition-colors duration-500 group-hover:text-sage">The Complete Ritual</h3>
                <p className="font-body text-base md:text-lg text-obsidian/70 mb-8 max-w-md leading-relaxed">
                  Combine Joint Support, Gut Health, and Skin & Coat. Subscribe to the ultimate wellness bundle and lock in 20% savings + free priority shipping.
                </p>
                <Link href="/shop/bundle" className="inline-flex items-center gap-2 bg-obsidian text-bone font-body text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-full hover:bg-sage hover:shadow-lg hover:shadow-sage/30 transition-all duration-300 group/btn">
                  Claim Bundle Offer
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              <div className="relative w-full md:w-[45%] h-[280px] md:h-[350px] mt-10 md:mt-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <Image src="/products/joint-support.jpg" alt="Bundle" fill className="object-contain drop-shadow-2xl" />
              </div>
            </div>

            {/* Right Column (Stacked Small Cards) */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Small Card 1 */}
              <div className="flex-1 bg-clay/5 rounded-3xl p-8 flex flex-col justify-between border border-clay/10 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-clay/10 hover:border-clay/30 transition-all duration-500">
                <div className="absolute top-5 left-5 bg-clay text-white font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-md animate-pulse-glow">
                  Buy 2 Get 1 Free
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-clay/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative w-full h-[140px] mb-6 mt-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <Image src="/products/gut-health.jpg" alt="Gut Health" fill className="object-contain" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-ogg text-2xl font-bold text-obsidian mb-2 transition-colors duration-300 group-hover:text-clay">Gut Health</h3>
                  <Link href="/shop/gut-health" className="inline-flex items-center gap-1 border-b border-obsidian text-obsidian font-body text-xs font-bold uppercase tracking-widest pb-1 hover:text-clay hover:border-clay transition-colors duration-300 group/link">
                    Claim Offer
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className="flex-1 bg-oat/40 rounded-3xl p-8 flex flex-col justify-between border border-obsidian/5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-obsidian/10 hover:border-obsidian/20 transition-all duration-500">
                <div className="absolute top-5 left-5 bg-obsidian text-bone font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-md animate-pulse-glow">
                  Free Shipping
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative w-full h-[140px] mb-6 mt-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <Image src="/products/skin-coat.jpg" alt="Skin & Coat" fill className="object-contain" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-ogg text-2xl font-bold text-obsidian mb-2 transition-colors duration-300 group-hover:text-obsidian/70">Skin & Coat</h3>
                  <Link href="/shop/skin-coat" className="inline-flex items-center gap-1 border-b border-obsidian text-obsidian font-body text-xs font-bold uppercase tracking-widest pb-1 hover:text-obsidian/60 hover:border-obsidian/60 transition-colors duration-300 group/link">
                    Claim Offer
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Social Proof Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-bone border-t border-obsidian/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-3">
              REVIEWS
            </span>
            <h2 className="font-ogg text-3xl md:text-4xl lg:text-5xl font-bold text-obsidian">
              Observed by dog parents.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Review 1 */}
            <div className="bg-sage/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between border border-sage/10 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-sage/10 hover:border-sage/30 transition-all duration-500">
              <div className="absolute -top-6 right-4 font-ogg text-[120px] text-obsidian/5 leading-none group-hover:text-sage/10 transition-colors duration-500 select-none pointer-events-none">
                &rdquo;
              </div>
              <div className="relative z-10">
                {/* 5 Star Rating Row */}
                <div className="flex space-x-1 mb-6 text-sage">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="font-ogg text-lg lg:text-xl leading-relaxed text-obsidian mb-8">
                  &ldquo;Within three weeks of the Joint Support ritual, my greyhound was navigating the deck stairs with ease. No proprietary fillers, just clean clinical science.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-sage/20 text-sage flex items-center justify-center font-ogg text-2xl font-bold border border-sage/30">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="font-ogg text-lg font-bold text-obsidian">
                    Sarah K.
                  </span>
                  <span className="font-body text-xs text-obsidian/60 mt-0.5 tracking-wide uppercase">
                    Greyhound · Joint Support
                  </span>
                </div>
              </div>
            </div>

            {/* Review 2 (Staggered) */}
            <div className="bg-clay/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between border border-clay/10 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-clay/10 hover:border-clay/30 transition-all duration-500 md:mt-12">
              <div className="absolute -top-6 right-4 font-ogg text-[120px] text-obsidian/5 leading-none group-hover:text-clay/10 transition-colors duration-500 select-none pointer-events-none">
                &rdquo;
              </div>
              <div className="relative z-10">
                {/* 5 Star Rating Row */}
                <div className="flex space-x-1 mb-6 text-clay">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="font-ogg text-lg lg:text-xl leading-relaxed text-obsidian mb-8">
                  &ldquo;The Skin & Coat chew has completely cleared his seasonal dander. His black coat is glossy, dense, and healthy. Best of all, I know exactly what mg dose he is receiving.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-clay/20 text-clay flex items-center justify-center font-ogg text-2xl font-bold border border-clay/30">
                  D
                </div>
                <div className="flex flex-col">
                  <span className="font-ogg text-lg font-bold text-obsidian">
                    David L.
                  </span>
                  <span className="font-body text-xs text-obsidian/60 mt-0.5 tracking-wide uppercase">
                    Labrador · Skin & Coat
                  </span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-oat/40 rounded-3xl p-8 lg:p-10 flex flex-col justify-between border border-obsidian/5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-obsidian/10 hover:border-obsidian/20 transition-all duration-500">
              <div className="absolute -top-6 right-4 font-ogg text-[120px] text-obsidian/5 leading-none group-hover:text-obsidian/10 transition-colors duration-500 select-none pointer-events-none">
                &rdquo;
              </div>
              <div className="relative z-10">
                {/* 5 Star Rating Row */}
                <div className="flex space-x-1 mb-6 text-obsidian/80">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="font-ogg text-lg lg:text-xl leading-relaxed text-obsidian mb-8">
                  &ldquo;Digestive distress was a daily struggle. Gut Health restored his balance in under a month. The ingredient quality is pristine and fully documented.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-obsidian/10 text-obsidian flex items-center justify-center font-ogg text-2xl font-bold border border-obsidian/20">
                  E
                </div>
                <div className="flex flex-col">
                  <span className="font-ogg text-lg font-bold text-obsidian">
                    Elena M.
                  </span>
                  <span className="font-body text-xs text-obsidian/60 mt-0.5 tracking-wide uppercase">
                    Golden Retriever · Gut Health
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA Band */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 text-center overflow-hidden flex items-center justify-center min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/cta-bg.png" alt="Canine Wellness" fill className="object-cover object-center" />
          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="font-body text-xs font-bold uppercase tracking-widest text-white block mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            CANINE WELLNESS REDEFINED
          </span>
          <h2 className="font-ogg text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            Integrity in every soft chew.
          </h2>
          <p className="font-body text-base lg:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Formulated for life. Empower your dog&rsquo;s daily health with vet-grade active compound concentrations.
          </p>
          <div className="flex justify-center">
            <Link
              href="/shop"
              className="inline-block bg-white text-obsidian font-body text-sm font-bold uppercase tracking-widest py-5 px-10 rounded-full hover:bg-sage hover:text-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/40 animate-pulse-glow"
            >
              Shop the Ritual
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-body text-white font-medium italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> 
              30-Day Guarantee
            </span>
            <span className="hidden md:inline text-white/50">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> 
              Independent Lab Certified
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
