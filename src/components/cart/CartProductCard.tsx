/* eslint-disable @next/next/no-img-element */
"use client";

import Product from "@/types/products";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCart } from "@/context/CartContext";

function CartProductCard({ item }: { item: Product }) {
  const { removeCartItem } = useCart();

  const handleDelete = async () => {
    await removeCartItem(item.itemId, item.size);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 border-b border-gray-200 py-10">
      {/* Product Image and Details */}
      <Link
        href={`/products/${item.itemId}`}
        className="flex flex-col md:flex-row gap-5 flex-1"
      >
        <div className="w-full md:w-[300px] h-[300px] flex-shrink-0">
          <img
            src={item?.thumbnail}
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-row justify-between items-start">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase font-semibold">
              {item.title}
            </h3>

            <div className="flex flex-row gap-2 items-center">
              <span className="text-lg md:text-xl font-medium">
                ₹ {item.price}
              </span>
              <span className="text-sm text-gray-500">(Regular price)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-600">Size:</span>
                <span className="bg-gray-200 px-3 py-1 text-sm">
                  {item.size}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-600">Quantity:</span>
                <span className="px-3">{item.quantity}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Delete Button with Confirmation */}
      <div className="mt-4 md:mt-0">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={(e) => e.stopPropagation()} // Prevent Link from being triggered
            >
              <AiOutlineDelete size={25} />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remove item?</AlertDialogTitle>
              <AlertDialogDescription>
                This will remove <b>{item.title}</b> (size {item.size}) from
                your cart.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={handleDelete}
              >
                Remove
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default CartProductCard;
