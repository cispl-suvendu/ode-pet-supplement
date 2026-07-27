import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SciencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-bone text-obsidian font-body pt-[130px]">
      {/* 1. Editorial Hero Section */}
      <section className="relative w-full min-h-[75vh] flex flex-col lg:flex-row border-b border-obsidian/10">
        {/* Left Side: Copy */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 lg:py-0">
          <div className="max-w-xl">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-sage block mb-6">
              The Clinical Standard
            </span>
            <h1 className="font-ogg text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Formulated by logic.<br />Proven by testing.
            </h1>
            <p className="font-body text-lg md:text-xl text-obsidian/80 leading-relaxed">
              We don't believe in magic powders or secret formulas. We believe in peer-reviewed veterinary science, clinical dosages, and radical transparency.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[45%] h-[400px] lg:h-auto relative">
          <Image
            src="/products/hero.png"
            alt="Science and formulation"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* 2. The "No Proprietary Blends" Philosophy */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/products/life-style.png"
              alt="Clinical formulation process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex-1">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-4">
              THE PROBLEM WITH THE INDUSTRY
            </span>
            <h2 className="font-ogg text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why we banned<br />"Proprietary Blends".
            </h2>
            <div className="space-y-6 text-obsidian/80 leading-relaxed font-body">
              <p>
                Turn over almost any canine supplement, and you'll see the words "Proprietary Blend". This is a legal loophole that allows brands to hide the exact amounts of active ingredients they use.
              </p>
              <p>
                Often, a product will advertise an expensive active ingredient (like Glucosamine or Probiotics) on the front of the label, but only include a microscopic, ineffective "dusting" of it in the actual chew to save money. Because it's hidden in a blend, you never know.
              </p>
              <p className="font-bold text-obsidian border-l-2 border-sage pl-4 py-2 bg-sage/5">
                Ode operates on an open-source dosage model. Every single active ingredient is listed with its exact milligram (mg) or CFU count. If a clinical trial used 500mg to achieve a result, we put 500mg in the jar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our 3-Pillar Clinical Standard */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-oat/30 border-y border-obsidian/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-ogg text-4xl md:text-5xl font-bold">
              The Ode Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pillar 1 */}
            <div className="bg-white p-10 shadow-xl shadow-obsidian/5 border border-obsidian/5 rounded-3xl">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
              </div>
              <h3 className="font-ogg text-2xl font-bold mb-4">Clinical Concentrations</h3>
              <p className="text-obsidian/70 leading-relaxed text-sm">
                We formulate each chew with active ingredient levels mapped exactly to clinical trials. We never microdose ingredients for marketing claims. Every dosage is signed off by our veterinary advisory board.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-10 shadow-xl shadow-obsidian/5 border border-obsidian/5 rounded-3xl">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h3 className="font-ogg text-2xl font-bold mb-4">Absolute Traceability</h3>
              <p className="text-obsidian/70 leading-relaxed text-sm">
                Every batch undergoes independent laboratory testing. We publish Certificate of Analysis (COA) reports verifying purity, heavy metals clearance, and the exact presence of the stated dosages.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-10 shadow-xl shadow-obsidian/5 border border-obsidian/5 rounded-3xl">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="font-ogg text-2xl font-bold mb-4">Cold-Pressed Efficacy</h3>
              <p className="text-obsidian/70 leading-relaxed text-sm">
                Most dog treats are extruded at extremely high heat, which degrades delicate active compounds like probiotics and omegas. Our chews are cold-pressed to protect their therapeutic integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The "Zero Filler" Manifesto Table */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-bone">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-ogg text-4xl md:text-5xl font-bold mb-6">
              The Zero Filler Manifesto
            </h2>
            <p className="text-obsidian/80">
              A supplement is only as good as what carries it. We banned the cheap binders, starches, and artificial additives that dominate the pet aisle.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-obsidian/10 shadow-sm">
            <div className="grid grid-cols-2 bg-oat border-b border-obsidian/10">
              <div className="p-6 font-bold text-obsidian">What We Use</div>
              <div className="p-6 font-bold text-clay border-l border-obsidian/10">What We Ban</div>
            </div>
            
            <div className="grid grid-cols-2 border-b border-obsidian/5 hover:bg-oat/10 transition-colors">
              <div className="p-6 text-sm text-obsidian/80">Clinically studied active compounds</div>
              <div className="p-6 text-sm text-obsidian/60 border-l border-obsidian/5">Micro-dosed "fairy dusting"</div>
            </div>
            <div className="grid grid-cols-2 border-b border-obsidian/5 hover:bg-oat/10 transition-colors">
              <div className="p-6 text-sm text-obsidian/80">Organic Oat & Sweet Potato</div>
              <div className="p-6 text-sm text-obsidian/60 border-l border-obsidian/5">Wheat, Corn, and Soy binders</div>
            </div>
            <div className="grid grid-cols-2 border-b border-obsidian/5 hover:bg-oat/10 transition-colors">
              <div className="p-6 text-sm text-obsidian/80">Natural Vitamin E preservatives</div>
              <div className="p-6 text-sm text-obsidian/60 border-l border-obsidian/5">Artificial preservatives (BHA/BHT)</div>
            </div>
            <div className="grid grid-cols-2 hover:bg-oat/10 transition-colors">
              <div className="p-6 text-sm text-obsidian/80">Sustainably sourced botanicals</div>
              <div className="p-6 text-sm text-obsidian/60 border-l border-obsidian/5">Unidentified meat by-products</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="bg-obsidian text-bone py-24 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-ogg text-4xl md:text-5xl font-bold leading-tight mb-8">
            Experience the clinical difference.
          </h2>
          <div className="flex justify-center">
            <Link
              href="/shop"
              className="inline-block bg-sage text-bone font-body text-sm font-semibold uppercase tracking-wider py-4 px-10 hover:bg-sage/90 transition-colors shadow-lg"
              style={{ borderRadius: "0px" }}
            >
              Shop the Rituals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
