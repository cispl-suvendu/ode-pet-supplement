"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import productsData from "@/data/products.json";

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    addItem,
  } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const FREE_SHIPPING_THRESHOLD = 50;
  const progressPercentage = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100
  );
  const amountAway = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  // Find upsell product
  const cartProductIds = items.map((item) => item.product.id);
  const upsellProduct = productsData.find(
    (p) => !cartProductIds.includes(p.id)
  );

  const cartItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-bone z-[70] shadow-2xl flex flex-col transition-transform duration-300 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-obsidian/10">
          <h2 id="cart-title" className="font-heading text-2xl text-obsidian">
            Your Ritual <span className="text-obsidian/60 text-lg ml-1">({cartItemsCount})</span>
          </h2>
          <button
            onClick={closeCart}
            className="text-obsidian hover:opacity-75 transition-opacity p-2 -mr-2"
            aria-label="Close cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Free Shipping Bar */}
        {items.length > 0 && (
          <div className="bg-oat px-6 py-4 border-b border-obsidian/10">
            <p className="font-body text-sm text-obsidian mb-2 font-medium">
              {amountAway > 0
                ? `You're $${amountAway.toFixed(2)} away from free shipping`
                : "You've unlocked free shipping!"}
            </p>
            <div className="h-1.5 w-full bg-obsidian/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-sage transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-8 text-center h-full flex flex-col items-center justify-center">
              <p className="font-body text-obsidian/70 mb-6">
                Your cart is currently empty. Let's start building your dog's wellness ritual.
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="bg-obsidian text-bone font-body font-medium px-8 py-3 rounded-full hover:bg-obsidian/90 transition-colors inline-block"
              >
                Shop All
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="relative w-20 h-20 bg-white rounded-lg border border-obsidian/10 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-body font-bold text-obsidian">
                          {item.product.name}
                        </h3>
                        {item.isSubscription && (
                          <p className="font-body text-xs text-obsidian/60 mt-0.5">
                            Subscribe & Save (15% off)
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-obsidian/40 hover:text-obsidian transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-obsidian/20 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-obsidian hover:bg-obsidian/5 rounded-l-full transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-body text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-obsidian hover:bg-obsidian/5 rounded-r-full transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-body font-medium text-obsidian">
                        ${(
                          (item.isSubscription ? item.product.price * 0.85 : item.product.price) *
                          item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upsell Row */}
        {items.length > 0 && upsellProduct && (
          <div className="bg-bone border-t border-obsidian/10 p-4">
            <p className="font-body text-xs font-bold text-obsidian/60 uppercase tracking-wider mb-3">
              Complete the routine
            </p>
            <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-obsidian/10">
              <div className="relative w-12 h-12 bg-oat rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={upsellProduct.image}
                  alt={upsellProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-body font-bold text-sm text-obsidian truncate">
                  {upsellProduct.name}
                </h4>
                <p className="font-body text-xs text-obsidian/70">
                  ${upsellProduct.price}
                </p>
              </div>
              <button
                onClick={() => addItem(upsellProduct)}
                className="bg-obsidian text-bone rounded-full px-4 py-2 font-body text-xs font-medium hover:bg-obsidian/90 transition-colors flex-shrink-0"
              >
                Add
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="bg-bone border-t border-obsidian/10 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-body font-bold text-lg text-obsidian">Subtotal</span>
              <span className="font-heading text-2xl text-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-sage text-bone text-center font-body font-medium px-6 py-4 rounded-full hover:bg-sage/90 transition-colors mb-4"
            >
              Checkout
            </Link>
            <p className="text-center font-body text-xs text-obsidian/60">
              30-Day Money-Back Guarantee · Free Returns
            </p>
          </div>
        )}
      </div>
    </>
  );
}
