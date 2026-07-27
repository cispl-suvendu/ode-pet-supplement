import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bone text-obsidian font-body pt-[130px]">
      {/* 1. Narrative Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col lg:flex-row border-b border-obsidian/10 bg-bone">
        {/* Left Side: Copy */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 lg:py-0">
          <div className="max-w-xl">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-sage block mb-6">
              Our Origin
            </span>
            <h1 className="font-ogg text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              We refused to compromise on their longevity.
            </h1>
            <p className="font-body text-lg md:text-xl text-obsidian/80 leading-relaxed">
              Ode was born out of frustration. When we looked at the supplement aisle to help our own aging dogs, we found cheap fillers, hidden dosages, and broken promises. They deserved better.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[45%] h-[400px] lg:h-auto relative">
          <Image
            src="/products/life-style.png"
            alt="Dog and owner sharing a moment"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* 2. The Ode Manifesto */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-oat/50 border-b border-obsidian/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-8">
            The Ode Manifesto
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="font-ogg text-3xl font-bold mb-4 text-obsidian">They are family, not just pets.</h3>
              <p className="text-obsidian/80 leading-relaxed">
                We believe the health standards for our dogs should mirror the health standards for ourselves. Our ingredients, manufacturing, and testing protocols are human-grade or higher.
              </p>
            </div>
            <div>
              <h3 className="font-ogg text-3xl font-bold mb-4 text-obsidian">Science over marketing.</h3>
              <p className="text-obsidian/80 leading-relaxed">
                Cute packaging doesn't extend healthspans; clinical dosages do. Every formula we create is directly mapped to active compound levels proven effective in veterinary peer-reviewed trials.
              </p>
            </div>
            <div>
              <h3 className="font-ogg text-3xl font-bold mb-4 text-obsidian">Uncompromising transparency.</h3>
              <p className="text-obsidian/80 leading-relaxed">
                If it’s in the jar, it’s on the label. We publish independent third-party lab results for every single batch, proving exactly what you are feeding them. No proprietary blends. No hidden fillers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Founder's Letter */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-ogg text-4xl md:text-5xl font-bold mb-10 text-center">A letter from the founders</h2>
          <div className="space-y-6 text-lg text-obsidian/80 leading-relaxed font-body">
            <p>
              It started with a limp. When our 9-year-old Golden Retriever, Leo, began struggling with the stairs, we did what any dedicated pet parent would do: we bought the highest-rated joint supplement on the market.
            </p>
            <p>
              Months passed, and nothing changed. When we finally took the jar to our veterinarian, she pointed to the label and sighed. <em>"It says it has glucosamine, but it's hidden in a 'proprietary blend.' They are likely giving him less than 10% of the clinical dose required to actually help his joints."</em>
            </p>
            <p>
              We felt betrayed. We realized the pet supplement industry was largely built on "fairy dusting"—sprinkling just enough of an active ingredient to legally list it on the label, while filling the rest of the chew with cheap starches, wheat, and fillers to drive up profit margins.
            </p>
            <p className="font-bold text-obsidian text-xl border-l-4 border-sage pl-6 py-2 my-8">
              We decided then and there: if we couldn't find a supplement company that operated with absolute clinical integrity, we would build one.
            </p>
            <p>
              We spent the next two years working alongside leading veterinary nutritionists to formulate Ode. We stripped out the fillers. We banned proprietary blends. We insisted on cold-pressing to preserve ingredient efficacy, and we implemented batch-testing protocols that most human supplement companies don't even use.
            </p>
            <p>
              Ode isn't just a company; it's a promise to Leo, and to every dog who relies on us to protect their health.
            </p>
            <div className="mt-12 pt-8 border-t border-obsidian/10">
              <p className="font-ogg text-2xl font-bold text-obsidian">The Ode Founders</p>
              <p className="text-sm text-obsidian/60 mt-1 uppercase tracking-wider font-semibold">Devoted Dog Parents</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Veterinary Advisory Board */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-bone border-t border-obsidian/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-4">
              OUR EXPERTS
            </span>
            <h2 className="font-ogg text-4xl md:text-5xl font-bold">Guided by veterinary science.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Vet 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-obsidian/5 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 bg-oat rounded-full flex-shrink-0 flex items-center justify-center text-obsidian/40 font-ogg text-3xl overflow-hidden relative">
                {/* Mock image placeholder using an initial */}
                Dr. M
              </div>
              <div>
                <h3 className="font-bold text-xl text-obsidian">Dr. Sarah Miller, DVM</h3>
                <p className="text-xs text-sage font-bold uppercase tracking-wider mb-4">Head of Formulation</p>
                <p className="text-sm text-obsidian/70 leading-relaxed">
                  With over 15 years of clinical practice and a specialization in canine nutrition, Dr. Miller ensures every Ode formula is strictly mapped to current peer-reviewed efficacy standards.
                </p>
              </div>
            </div>

            {/* Vet 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-obsidian/5 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 bg-oat rounded-full flex-shrink-0 flex items-center justify-center text-obsidian/40 font-ogg text-3xl overflow-hidden relative">
                {/* Mock image placeholder using an initial */}
                Dr. C
              </div>
              <div>
                <h3 className="font-bold text-xl text-obsidian">Dr. James Chen, DVM</h3>
                <p className="text-xs text-sage font-bold uppercase tracking-wider mb-4">Quality & Testing Advisor</p>
                <p className="text-sm text-obsidian/70 leading-relaxed">
                  Dr. Chen oversees our rigorous third-party lab testing protocols, guaranteeing that every chew is free of heavy metals and precisely dosed as labeled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="bg-obsidian text-bone py-24 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-ogg text-4xl md:text-5xl font-bold leading-tight mb-8">
            Extend their best years.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop"
              className="inline-block bg-sage text-bone font-body text-sm font-semibold uppercase tracking-wider py-4 px-10 hover:bg-sage/90 transition-colors shadow-lg"
              style={{ borderRadius: "0px" }}
            >
              Shop the Rituals
            </Link>
            <Link
              href="/science"
              className="inline-block bg-transparent border border-bone/30 text-bone font-body text-sm font-semibold uppercase tracking-wider py-4 px-10 hover:bg-bone/10 transition-colors"
              style={{ borderRadius: "0px" }}
            >
              Read the Science
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
