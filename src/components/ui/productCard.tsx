/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function ProductCard() {
  return (
    <div className="max-w-[400px] w-full relative group cursor-pointer">
      <div className="w-full h-[300px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] justify-center items-center hidden group-hover:flex">
          <div className="p-2 border-white border-1 rounded-full w-fit flex flex-row gap-2 items-center justify-center opacity-100">
            <span className="text-white">View product</span>
            <AiOutlineArrowRight className="text-white" size={20} />
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-lg text-[#121212]">Yellow hoodie</h3>
        <span className="text-sm text-gray-600">$20</span>
      </div>
    </div>
  );
}

export default ProductCard;
