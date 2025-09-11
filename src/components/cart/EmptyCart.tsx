/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function EmptyCart() {
  return (
    <div className="flex-1 w-full flex flex-col justify-center items-center">
      <img
        src="./assets/image/emptyCart.png"
        alt="Empty Cart"
        className="max-w-[400px] mb-4"
      />
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-1">Your cart is empty</h2>
        <p className="text-gray-600">
          Continue shopping to add items to your cart
        </p>
        <Link href="/products">
          <Button variant="default" className="mt-5 p-5">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
