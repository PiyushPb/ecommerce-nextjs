import React from "react";
import ProductCard from "../ui/productCard";

function ProductsSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 ">
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
