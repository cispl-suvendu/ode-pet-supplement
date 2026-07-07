import React from "react";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";

export default function Home() {
  // Safe cast for local products data
  const products = productsData;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row bg-bone pt-[104px] lg:pt-0">
        {/* Left Side: Copy & CTA */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 bg-bone">
          <div className="max-w-xl">
            <h1 className="font-ogg text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-obsidian mb-6">
              The science of their best life.
            </h1>
            <p className="font-body text-base lg:text-lg text-obsidian/80 leading-relaxed mb-8">
              Clinical-grade canine supplements formulated by veterinarians, backed by peer-reviewed research, and delivered with absolute ingredient transparency.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/shop"
                className="inline-block bg-sage text-bone font-body text-xs font-semibold uppercase tracking-wider py-4 px-8 hover:opacity-90 transition-opacity"
                style={{ borderRadius: "0px" }}
              >
                Shop the Ritual
              </Link>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-clay/20 border-2 border-bone flex items-center justify-center text-clay font-bold text-xs">J</div>
                    <div className="w-8 h-8 rounded-full bg-sage/20 border-2 border-bone flex items-center justify-center text-sage font-bold text-xs">A</div>
                    <div className="w-8 h-8 rounded-full bg-obsidian/10 border-2 border-bone flex items-center justify-center text-obsidian font-bold text-xs">M</div>
                  </div>
                  <div className="flex space-x-0.5 text-sage ml-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-body text-xs text-obsidian/70 font-medium">
                  Trusted by <strong className="text-obsidian">10,000+</strong> dog parents
                </p>
              </div>
            </div>

            {/* Persuasive Proof Point paired with Hero CTA */}
            <div className="mt-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-sage">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="font-body text-xs text-obsidian/60">
                Clinically dosed active ingredients. No proprietary secrets.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image (Stacks on top on mobile, sits on right on desktop) */}
        {/* Mobile: Order 1, Desktop: Order 2 */}
        <div className="w-full lg:w-[40%] h-[350px] md:h-[450px] lg:h-auto relative order-first lg:order-last">
          <Image
            src="/products/life-style.png"
            alt="Healthy dog resting in natural light"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          {/* Top overlay to ensure header readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-transparent lg:hidden" />
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
                  <div className="relative w-full h-[180px] mb-6 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={180}
                      className="object-contain max-h-full"
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
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-bone">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-3">
              THE ODE PROTOCOL
            </span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sage">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h2 className="font-ogg text-3xl md:text-4xl lg:text-5xl font-bold text-obsidian max-w-2xl mx-auto">
              Canine health is a science, not a mystery.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Value Prop 1 */}
            <div className="flex flex-col justify-between border-t border-obsidian/10 pt-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-oat rounded-full flex items-center justify-center text-sage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                  </div>
                  <h3 className="font-ogg text-2xl font-semibold text-obsidian">
                    Clinical Concentrations
                  </h3>
                </div>
                <p className="font-body text-sm text-obsidian/80 leading-relaxed mb-6">
                  We formulate each chew with active ingredient levels mapped exactly to clinical trials. We never microdose ingredients for marketing claims.
                </p>
              </div>
              <div className="bg-oat/40 p-4 border-l-2 border-sage">
                <span className="block font-body text-[10px] uppercase tracking-wider text-obsidian/60 font-semibold mb-1">
                  Persuasive Proof
                </span>
                <span className="font-body text-xs font-bold text-obsidian">
                  Vet-formulated dossier with active mg dosages labeled on every jar.
                </span>
              </div>
            </div>

            {/* Value Prop 2 */}
            <div className="flex flex-col justify-between border-t border-obsidian/10 pt-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-oat rounded-full flex items-center justify-center text-sage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <h3 className="font-ogg text-2xl font-semibold text-obsidian">
                    Absolute Traceability
                  </h3>
                </div>
                <p className="font-body text-sm text-obsidian/80 leading-relaxed mb-6">
                  Every batch undergoes independent laboratory testing. We publish Certificate of Analysis (COA) reports verifying purity, heavy metals clearance, and dosage.
                </p>
              </div>
              <div className="bg-oat/40 p-4 border-l-2 border-sage">
                <span className="block font-body text-[10px] uppercase tracking-wider text-obsidian/60 font-semibold mb-1">
                  Persuasive Proof
                </span>
                <span className="font-body text-xs font-bold text-obsidian">
                  100% third-party lab tested with unique batch QR code lookup.
                </span>
              </div>
            </div>

            {/* Value Prop 3 */}
            <div className="flex flex-col justify-between border-t border-obsidian/10 pt-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-oat rounded-full flex items-center justify-center text-sage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="font-ogg text-2xl font-semibold text-obsidian">
                    Zero Filler Policy
                  </h3>
                </div>
                <p className="font-body text-sm text-obsidian/80 leading-relaxed mb-6">
                  We avoid starch binders, artificial preservatives, wheat, and soy. Our chews use cold-pressed real ingredients to preserve active compound integrity.
                </p>
              </div>
              <div className="bg-oat/40 p-4 border-l-2 border-sage">
                <span className="block font-body text-[10px] uppercase tracking-wider text-obsidian/60 font-semibold mb-1">
                  Persuasive Proof
                </span>
                <span className="font-body text-xs font-bold text-obsidian">
                  Cold-press processing badge & NASC Quality Audit seal.
                </span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-xl shadow-obsidian/5 border border-obsidian/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-2 right-4 text-oat/50 transition-colors group-hover:text-sage/10">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
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
                <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center font-heading text-xl font-bold border border-sage/20">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-sm font-bold text-obsidian">
                    Sarah K.
                  </span>
                  <span className="font-body text-xs text-obsidian/60 mt-0.5">
                    Greyhound · Joint Support
                  </span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-xl shadow-obsidian/5 border border-obsidian/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-2 right-4 text-oat/50 transition-colors group-hover:text-sage/10">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
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
                  &ldquo;The Skin & Coat chew has completely cleared his seasonal dander. His black coat is glossy, dense, and healthy. Best of all, I know exactly what mg dose he is receiving.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-clay/10 text-clay flex items-center justify-center font-heading text-xl font-bold border border-clay/20">
                  D
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-sm font-bold text-obsidian">
                    David L.
                  </span>
                  <span className="font-body text-xs text-obsidian/60 mt-0.5">
                    Labrador · Skin & Coat
                  </span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-xl shadow-obsidian/5 border border-obsidian/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-2 right-4 text-oat/50 transition-colors group-hover:text-sage/10">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
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
                  &ldquo;Digestive distress was a daily struggle. Gut Health restored his balance in under a month. The ingredient quality is pristine and fully documented.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-obsidian/5 text-obsidian/70 flex items-center justify-center font-heading text-xl font-bold border border-obsidian/10">
                  E
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-sm font-bold text-obsidian">
                    Elena M.
                  </span>
                  <span className="font-body text-xs text-obsidian/60 mt-0.5">
                    Golden Retriever · Gut Health
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA Band */}
      <section className="bg-sage text-bone py-24 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="font-body text-xs font-bold uppercase tracking-widest text-oat block mb-4">
            CANINE WELLNESS REDEFINED
          </span>
          <h2 className="font-ogg text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Integrity in every soft chew.
          </h2>
          <p className="font-body text-base lg:text-lg text-bone/90 max-w-xl mx-auto leading-relaxed mb-10">
            Formulated for life. Empower your dog&rsquo;s daily health with vet-grade active compound concentrations.
          </p>
          <div className="flex justify-center">
            <Link
              href="/shop"
              className="inline-block bg-bone text-obsidian font-body text-xs font-semibold uppercase tracking-wider py-4 px-8 hover:opacity-90 transition-opacity"
              style={{ borderRadius: "0px" }}
            >
              Shop the Ritual
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-body text-bone/70 italic">
            <span>✓ 30-Day Money-Back Guarantee</span>
            <span className="hidden md:inline">·</span>
            <span>✓ Independent Lab Certified</span>
          </div>
        </div>
      </section>
    </div>
  );
}
