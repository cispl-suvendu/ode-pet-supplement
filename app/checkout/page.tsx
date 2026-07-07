"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const FloatingInput = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
  isValid,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  isValid?: boolean;
}) => (
  <div className="relative w-full pt-5">
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="peer w-full border-b border-obsidian/20 bg-transparent py-2 text-obsidian placeholder-transparent focus:border-obsidian focus:outline-none font-body transition-colors rounded-none"
      placeholder={label}
      required={required}
    />
    <label
      htmlFor={id}
      className="absolute left-0 top-5 text-xs font-body text-obsidian/60 transition-all duration-200 
      peer-placeholder-shown:text-base peer-placeholder-shown:top-7 
      peer-focus:top-1 peer-focus:text-xs peer-focus:text-obsidian pointer-events-none"
    >
      {label}
    </label>
    {isValid && (
      <svg
        className="absolute right-0 top-7 w-5 h-5 text-sage"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )}
  </div>
);

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    stateZip: "",
    country: "United States",
  });

  const [shippingMethod, setShippingMethod] = useState("standard");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeOrderId = "ODE" + Math.floor(100000 + Math.random() * 900000);
    clearCart();
    router.push(`/order-confirmation?id=${fakeOrderId}`);
  };

  const shippingCost = subtotal >= 50 ? 0 : 5.0;
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-white text-obsidian flex flex-col xl:flex-row font-body">
      {/* Mobile Header / Logo */}
      <div className="xl:hidden flex justify-center py-6 border-b border-obsidian/10">
        <Link href="/">
          <Image src="/logo.png" alt="Ode Logo" width={80} height={32} className="h-8 w-auto" />
        </Link>
      </div>

      {/* Mobile Order Summary Accordion */}
      <div className="xl:hidden border-b border-obsidian/10 bg-bone">
        <button
          onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
          className="w-full flex justify-between items-center p-6 text-obsidian"
        >
          <span className="flex items-center gap-2 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            {isSummaryExpanded ? "Hide order summary" : "Show order summary"}
          </span>
          <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </button>
        
        {isSummaryExpanded && (
          <div className="p-6 pt-0 border-t border-obsidian/10">
            {/* Mobile Line Items */}
            <div className="space-y-4 mb-6 pt-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 bg-white rounded-lg border border-obsidian/10 flex-shrink-0">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover rounded-lg" />
                    <span className="absolute -top-2 -right-2 bg-obsidian/60 text-bone text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-obsidian">{item.product.name}</p>
                    {item.isSubscription && <p className="text-xs text-obsidian/60">Subscription</p>}
                  </div>
                  <p className="font-medium text-sm text-obsidian">
                    ${((item.isSubscription ? item.product.price * 0.85 : item.product.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 text-sm text-obsidian/80 border-t border-obsidian/10 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-obsidian/10 mt-4 pt-4">
              <span className="font-bold text-lg text-obsidian">Total</span>
              <span className="font-bold text-2xl text-obsidian">${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Form Area */}
      <div className="flex-1 xl:flex xl:justify-end xl:pr-12 py-10 px-6 xl:py-16">
        <div className="w-full max-w-lg xl:w-[600px]">
          {/* Desktop Logo */}
          <div className="hidden xl:block mb-10 text-center">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Ode Logo" width={100} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Express Checkout (Mock) */}
          <div className="mb-10 text-center">
            <p className="text-sm text-obsidian/60 mb-4 tracking-wider">Express checkout</p>
            <div className="flex gap-4 justify-center">
              <button type="button" className="flex-1 bg-[#5A31F4] text-white py-3 rounded-md font-bold flex justify-center items-center shadow-sm hover:opacity-90 transition-opacity">
                Shop<span className="opacity-80 ml-1">Pay</span>
              </button>
              <button type="button" className="flex-1 bg-black text-white py-3 rounded-md font-bold flex justify-center items-center hover:opacity-90 transition-opacity">
                Apple Pay
              </button>
              <button type="button" className="flex-1 bg-white border border-obsidian/20 text-obsidian py-3 rounded-md font-bold flex justify-center items-center hover:bg-obsidian/5 transition-colors">
                G Pay
              </button>
            </div>
            
            <div className="flex items-center my-8 text-obsidian/40 before:flex-1 before:border-t before:border-obsidian/20 after:flex-1 after:border-t after:border-obsidian/20">
              <span className="px-4 text-sm font-medium">OR</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <section>
              <h2 className="font-heading text-2xl mb-4">Contact</h2>
              <FloatingInput
                label="Email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                isValid={formData.email.includes("@") && formData.email.includes(".")}
              />
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4 mt-12">Shipping Address</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <FloatingInput
                  label="First name"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  isValid={formData.firstName.length > 1}
                />
                <FloatingInput
                  label="Last name"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  isValid={formData.lastName.length > 1}
                />
              </div>

              <FloatingInput
                label="Address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                isValid={formData.address.length > 4}
              />

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 pt-5">
                  <select
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border-b border-obsidian/20 bg-transparent py-2 text-obsidian focus:border-obsidian focus:outline-none font-body transition-colors rounded-none appearance-none"
                    required
                  >
                    <option value="United States" className="bg-white text-obsidian">United States</option>
                    <option value="Canada" className="bg-white text-obsidian">Canada</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <FloatingInput
                    label="City"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    isValid={formData.city.length > 2}
                  />
                </div>
                <div className="col-span-1">
                  <FloatingInput
                    label="State / ZIP"
                    id="stateZip"
                    value={formData.stateZip}
                    onChange={handleChange}
                    required
                    isValid={formData.stateZip.length > 3}
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4 mt-12">Shipping Method</h2>
              <div className="border border-obsidian/20 rounded-lg overflow-hidden bg-white">
                <label className={`flex items-center p-4 cursor-pointer transition-colors ${shippingMethod === "standard" ? "bg-bone/50" : "hover:bg-bone/30"}`}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="standard"
                    checked={shippingMethod === "standard"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="w-4 h-4 text-sage accent-sage border-obsidian/20 focus:ring-sage bg-transparent"
                  />
                  <div className="ml-4 flex-1">
                    <span className="block font-medium text-sm text-obsidian">Standard Shipping</span>
                    <span className="block text-xs text-obsidian/60 mt-1">3-5 business days</span>
                  </div>
                  <span className="font-medium text-sm text-obsidian">{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                </label>
                <div className="border-t border-obsidian/20" />
                <label className={`flex items-center p-4 cursor-pointer transition-colors ${shippingMethod === "express" ? "bg-bone/50" : "hover:bg-bone/30"}`}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="express"
                    checked={shippingMethod === "express"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="w-4 h-4 text-sage accent-sage border-obsidian/20 focus:ring-sage bg-transparent"
                  />
                  <div className="ml-4 flex-1">
                    <span className="block font-medium text-sm text-obsidian">Express Shipping</span>
                    <span className="block text-xs text-obsidian/60 mt-1">1-2 business days</span>
                  </div>
                  <span className="font-medium text-sm text-obsidian">$15.00</span>
                </label>
              </div>
            </section>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full bg-sage text-bone font-body font-medium text-lg py-5 rounded-md hover:bg-sage/90 transition-colors shadow-sm"
              >
                Place Order
              </button>
              
              <div className="flex items-center justify-center gap-4 mt-6 text-xs text-obsidian/60 font-body">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-sage">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Secure checkout
                </span>
                <span>•</span>
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Desktop Order Summary Side Column */}
      <div className="hidden xl:block flex-1 bg-bone/50 border-l border-obsidian/10">
        <div className="sticky top-0 py-16 pl-12 pr-6 w-full max-w-lg">
          <div className="space-y-6 mb-8">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-center">
                <div className="relative w-16 h-16 bg-white rounded-lg border border-obsidian/10 flex-shrink-0">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-cover rounded-lg" />
                  <span className="absolute -top-2 -right-2 bg-obsidian/60 text-bone text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-obsidian">{item.product.name}</p>
                  {item.isSubscription && <p className="text-xs text-obsidian/60 mt-0.5">Subscription</p>}
                </div>
                <p className="font-medium text-sm text-obsidian">
                  ${((item.isSubscription ? item.product.price * 0.85 : item.product.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 text-sm text-obsidian/80 border-t border-obsidian/10 pt-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shippingMethod === "express" 
                  ? "$15.00" 
                  : shippingCost === 0 
                    ? "Free" 
                    : `$${shippingCost.toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-obsidian/10 mt-6 pt-6">
            <span className="font-bold text-xl text-obsidian">Total</span>
            <span className="font-bold text-3xl text-obsidian">
              ${(subtotal + (shippingMethod === "express" ? 15 : shippingCost)).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
