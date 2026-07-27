"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";
import { useCart, Product } from "@/context/CartContext";

export default function Shop() {
  const { addItem } = useCart();
  const products = productsData as Product[];

  // Client states
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState<string>("default");
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  // Filter Categories
  const filters = [
    { name: "All", id: "all" },
    { name: "Joints", id: "joint-support" },
    { name: "Skin", id: "skin-coat" },
    { name: "Gut", id: "gut-health" },
    { name: "Calming", id: "calming" },
    { name: "Vitality", id: "multivitamin" },
    { name: "Immunity", id: "immunity" },
  ];

  // Client-side filtering and sorting logic
  const processedProducts = useMemo(() => {
    let list = [...products];

    // Filter
    if (selectedFilter !== "all") {
      list = list.filter((p) => p.id === selectedFilter);
    }

    // Sort
    if (selectedSort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "alpha") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [products, selectedFilter, selectedSort]);

  // Handle Quick Add
  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    setAddedProduct(product.name);
    setTimeout(() => {
      setAddedProduct(null);
    }, 3000);
  };

  return (
    <div className="pt-[116px] bg-bone min-h-screen">
      {/* Toast Notification */}
      {addedProduct && (
        <div className="fixed bottom-8 right-8 bg-obsidian text-bone px-6 py-4 z-50 flex items-center justify-between font-body text-xs uppercase tracking-wider animate-fade-in shadow-lg">
          <span>{addedProduct} added to ritual.</span>
          <button
            onClick={() => setAddedProduct(null)}
            className="ml-4 text-bone/60 hover:text-bone text-sm"
          >
            ✕
          </button>
        </div>
      )}

      {/* 1. Collection Banner */}
      <section className="bg-oat text-obsidian py-16 md:py-20 border-b border-obsidian/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="font-body text-xs font-bold uppercase tracking-widest text-clay block mb-3">
            CLINICAL DOSING FOR LONGEVITY
          </span>
          <h1 className="font-ogg text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl mx-auto">
            Targeted Support.
          </h1>
          <p className="font-body text-sm md:text-base text-obsidian/75 max-w-lg mx-auto mt-4 leading-relaxed">
            Choose rituals formulated to support specific physiological systems. Fully declared active compound levels in every dose.
          </p>
        </div>
      </section>

      {/* 2. Filters & Sort Controls */}
      <section className="py-8 border-b border-obsidian/10 sticky top-[68px] bg-bone z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Pills list */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`font-body text-xs font-semibold tracking-wider uppercase py-2 px-4 border transition-all ${selectedFilter === f.id
                    ? "bg-obsidian border-obsidian text-bone"
                    : "bg-transparent border-obsidian/20 text-obsidian hover:border-obsidian"
                  }`}
                style={{ borderRadius: "0px" }}
              >
                {f.name}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort-select"
              className="font-body text-xs font-semibold uppercase tracking-wider text-obsidian/60"
            >
              Sort
            </label>
            <div className="relative">
              <select
                id="sort-select"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-transparent border border-obsidian/20 text-obsidian font-body text-xs py-2 pl-4 pr-10 appearance-none focus:outline-none focus:border-obsidian"
                style={{ borderRadius: "0px" }}
              >
                <option value="default">Select</option>
                <option value="price-asc">Price: Low-High</option>
                <option value="price-desc">Price: High-Low</option>
                <option value="alpha">Alphabetical</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-obsidian">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {processedProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-sm text-obsidian/60">
                No rituals found matching the selected criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-bone border border-obsidian flex flex-col justify-between"
                  style={{ borderRadius: "0px" }}
                >
                  {/* Image/Details Header */}
                  <div>
                    {/* Top colored indicator bar */}
                    <div
                      className="h-1.5 w-full"
                      style={{ backgroundColor: product.skuColor }}
                    />

                    {/* Centered Image against Bone backdrop */}
                    <Link
                      href={`/shop/${product.id}`}
                      className="block relative w-full h-[280px] bg-bone p-8 flex items-center justify-center border-b border-obsidian/5 group"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={220}
                        height={220}
                        className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>

                    {/* Meta info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Link href={`/shop/${product.id}`}>
                          <h2 className="font-ogg text-2xl font-bold text-obsidian hover:opacity-75 transition-opacity">
                            {product.name}
                          </h2>
                        </Link>
                        <span className="font-body text-sm font-bold text-obsidian">
                          ${product.price}
                        </span>
                      </div>

                      <p className="font-body text-xs text-obsidian/70 italic mb-4">
                        {product.tagline}
                      </p>

                      {/* Static 5-Star Row */}
                      <div className="flex space-x-1 mb-2 text-sage text-sm">
                        {"★★★★★".split("").map((char, index) => (
                          <span key={index}>{char}</span>
                        ))}
                      </div>

                      <span className="block font-body text-[11px] text-obsidian/60 font-medium">
                        {product.size}
                      </span>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="px-6 pb-6 pt-2 border-t border-obsidian/10 flex items-center justify-between">
                    {/* Persuasive Proof Point (Badge text next to CTA) */}
                    <span className="font-body text-[9px] uppercase tracking-wider text-obsidian/50 font-bold">
                      Vet Formulated
                    </span>

                    {/* Quick Add link */}
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="font-body text-xs font-bold uppercase tracking-wider text-obsidian hover:opacity-75 transition-opacity border-b border-obsidian pb-0.5 cursor-pointer"
                    >
                      Quick Add +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
