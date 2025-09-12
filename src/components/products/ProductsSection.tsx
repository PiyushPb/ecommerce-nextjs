import React from "react";
import ProductCard from "../ui/productCard";
import Product from "@/types/products";

function ProductsSection({ products }: { products: Product[] }) {
  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
