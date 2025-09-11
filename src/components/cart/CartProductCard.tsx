/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function CartProductCard() {
  return (
    <div className="flex flex-col md:flex-row gap-5  border-b-1 border-gray-200 py-10 nth-[1]:pt-0">
      {/* Product Image */}
      <div className="w-full md:w-[300px] h-[300px] flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1700177421832-9815a92029be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-row justify-between items-start">
        <div className="flex flex-col gap-3">
          {/* Product Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase font-semibold">
            Black T-Shirt & Trouser
          </h3>

          {/* Pricing */}
          <div className="flex flex-row gap-2 items-center">
            <span className="text-lg md:text-xl font-medium">₹ 500</span>
            <span className="text-sm text-gray-500">(Regular price)</span>
          </div>

          {/* Size & Quantity */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">Size:</span>
              <span className="bg-gray-200 px-3 py-1 text-sm">M</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">Quantity:</span>
              <div className="flex items-center gap-2">
                <span className="px-3">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Button */}
        <div className="mt-4 md:mt-0 ">
          <button className="text-red-500 hover:text-red-700">
            <AiOutlineDelete size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
