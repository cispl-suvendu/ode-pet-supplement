"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const mockOrderItems = [
  {
    id: "joint-support",
    name: "Joint Support",
    price: 42,
    quantity: 1,
    image: "/products/joint-support.jpg",
    subscription: true,
  },
  {
    id: "gut-health",
    name: "Gut Health",
    price: 40,
    quantity: 1,
    image: "/products/gut-health.jpg",
    subscription: false,
  },
];

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id") || "ODE" + Math.floor(100000 + Math.random() * 900000);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const mockSubtotal = mockOrderItems.reduce(
    (acc, item) => acc + (item.subscription ? item.price * 0.85 : item.price) * item.quantity,
    0
  );
  const mockShipping: number = 0;
  const mockTotal: number = mockSubtotal + mockShipping;

  const today = new Date();
  const tmrw = new Date(today);
  tmrw.setDate(tmrw.getDate() + 1);
  const delivery = new Date(today);
  delivery.setDate(delivery.getDate() + 4);

  const formatDate = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div className="min-h-screen bg-bone text-obsidian font-body flex flex-col xl:flex-row">
      {/* Left Column: Image, Timeline, Hook */}
      <div className="flex-1 flex flex-col items-center xl:items-end xl:pr-16 py-12 px-6">
        <div className="w-full max-w-lg">
          <Link href="/" className="inline-block mb-12">
            <Image src="/logo.png" alt="Ode Logo" width={80} height={32} className="h-8 w-auto" />
          </Link>

          <h1 className="font-heading text-4xl xl:text-5xl text-obsidian mb-4 leading-tight">
            Welcome to the<br className="hidden xl:block" /> Ode family.
          </h1>
          <p className="text-obsidian/70 mb-10 text-lg">
            Your order <strong className="text-obsidian font-bold">#{orderId}</strong> is confirmed.
          </p>

          <div className="relative w-full aspect-[4/3] mb-12 rounded-2xl overflow-hidden">
            <Image
              src="/products/joint-support.jpg"
              alt="A happy dog"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl mb-6">What happens next</h2>
            <div className="relative border-l border-obsidian/20 ml-3 space-y-8 pb-4">
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sage" />
                <h3 className="font-bold text-obsidian">Processing</h3>
                <p className="text-sm text-obsidian/60 mt-1">Expected: {formatDate(today)}</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border border-obsidian/20" />
                <h3 className="font-bold text-obsidian">Shipped</h3>
                <p className="text-sm text-obsidian/60 mt-1">Expected: {formatDate(tmrw)}</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border border-obsidian/20" />
                <h3 className="font-bold text-obsidian">Delivered</h3>
                <p className="text-sm text-obsidian/60 mt-1">Arrives in 3-5 business days (Est. {formatDate(delivery)})</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-obsidian/10">
            <h3 className="font-bold text-obsidian mb-2">Preparing for your first box?</h3>
            <p className="text-sm text-obsidian/70 mb-4 leading-relaxed">
              Dogs thrive on routine, but new additions take time. Read our veterinary-guided approach to seamlessly integrating supplements into their bowl.
            </p>
            <Link
              href="/journal/introducing-supplements"
              className="inline-flex items-center text-sm font-medium text-obsidian hover:text-sage transition-colors underline underline-offset-4"
            >
              How to introduce a new supplement to your dog's routine
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="flex-1 bg-white border-t xl:border-t-0 xl:border-l border-obsidian/10">
        <div className="sticky top-0 py-12 px-6 xl:pl-16 w-full max-w-lg mx-auto xl:mx-0">
          <h2 className="font-heading text-2xl mb-8">Order Summary</h2>
          
          <div className="space-y-6 mb-8">
            {mockOrderItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="relative w-20 h-20 bg-bone rounded-lg border border-obsidian/10 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg" />
                  <span className="absolute -top-2 -right-2 bg-obsidian/60 text-bone text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-obsidian">{item.name}</p>
                  {item.subscription && <p className="text-xs text-obsidian/60 mt-0.5">Subscription</p>}
                </div>
                <p className="font-medium text-sm text-obsidian">
                  ${((item.subscription ? item.price * 0.85 : item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-sm text-obsidian/80 border-t border-obsidian/10 pt-8">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${mockSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{mockShipping === 0 ? "Free" : `$${mockShipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between items-center border-t border-obsidian/10 mt-4 pt-6">
              <span className="font-bold text-xl text-obsidian">Total</span>
              <span className="font-bold text-3xl text-obsidian">${mockTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bone"></div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
