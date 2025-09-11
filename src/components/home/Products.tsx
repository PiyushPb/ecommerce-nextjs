import React from "react";
import ProductCard from "../ui/productCard";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

function Products() {
  return (
    <div className="my-10 clear-start w-full">
      <h2 className="text-5xl calSans ">Top Products</h2>
      <div className="flex flex-row flex-wrap justify-between gap-5 mt-5 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div>
        <h2 className="text-5xl calSans mt-10">Top T-shirts</h2>
        <div className="flex flex-row flex-wrap justify-between gap-5 mt-5 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mt-10 w-full flex justify-center items-center">
        <Link href={"/products"}>
          <div className="px-5 py-3 border-1 border-black rounded-full flex flex-row gap-1 items-center cursor-pointer hover:bg-gray-200 transition-all duration-200">
            <span>Discover more products</span>
            <FiArrowUpRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Products;
