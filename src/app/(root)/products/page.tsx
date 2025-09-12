"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FiltersSection from "@/components/products/FiltersSection";
import ProductsSection from "@/components/products/ProductsSection";
import Product from "@/types/products";
import NoProductsFound from "@/components/products/NoProductsFound";

function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      const c = searchParams.get("c");
      const s = searchParams.get("s");
      const p = searchParams.get("p");

      if (c) params.append("category", c);
      if (s) params.append("size", s);
      if (p) {
        const [min, max] = p.split("-");
        params.append("minPrice", min);
        params.append("maxPrice", max);
      }

      const response = await fetch(`/api/items?${params.toString()}`);
      const data = await response.json();
      setProducts(data.payload);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  return (
    <div className="p-5 md:p-10 flex flex-col md:flex-row gap-10 min-h-[100vh] relative">
      <FiltersSection />
      <div className="w-full h-full bg-white">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <NoProductsFound />
        ) : (
          <ProductsSection products={products} />
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
