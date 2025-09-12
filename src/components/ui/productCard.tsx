/* eslint-disable @next/next/no-img-element */
import Product from "@/types/products";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product._id}`}
      className="max-w-[400px] w-full relative group cursor-pointer"
    >
      <div className="w-full h-[300px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] justify-center items-center hidden group-hover:flex">
          <div className="p-2 border-white border-1 rounded-full w-fit flex flex-row gap-2 items-center justify-center opacity-100">
            <span className="text-white">View product</span>
            <AiOutlineArrowRight className="text-white" size={20} />
          </div>
        </div>
        <img
          src={product.images.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-lg text-[#121212]">{product.title}</h3>
        <span className="text-sm text-gray-600">₹{product.price}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
