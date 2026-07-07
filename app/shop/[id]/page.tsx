import React from "react";
import { notFound } from "next/navigation";
import productsData from "@/data/products.json";
import ProductDetailClient from "@/components/ProductDetailClient";
import { Product } from "@/context/CartContext";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const products = productsData as Product[];
  return products.map((p) => ({
    id: p.id,
  }));
}

export default function ProductPage({ params }: PageProps) {
  const products = productsData as Product[];
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  // Get 3 related products (excluding the current one)
  const relatedProducts = products
    .filter((p) => p.id !== params.id)
    .slice(0, 3);

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
