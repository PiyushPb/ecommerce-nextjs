import FiltersSection from "@/components/products/FiltersSection";
import ProductsSection from "@/components/products/ProductsSection";
import React from "react";

function page() {
  return (
    <div className="p-5 md:p-10 flex flex-col md:flex-row gap-10 min-h-[200vh] relative">
      <FiltersSection />
      <div className="w-full h-full bg-white">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ProductsSection />
      </div>
    </div>
  );
}

export default page;
