/* eslint-disable @next/next/no-img-element */

import React from "react";
import EmptyCart from "@/components/cart/EmptyCart";
import CartProductCard from "@/components/cart/CartProductCard";
import CartTotal from "@/components/cart/CartTotal";

function Page() {
  return (
    <section className="min-h-[90vh] px-5 md:px-10 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl mb-6">Cart</h2>
        {/* <EmptyCart /> */}
        <div className="w-full flex flex-row gap-5">
          <div className="w-full flex flex-col">
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[25%] h-fit md:sticky top-[80px] mb-10">
        <CartTotal />
      </div>
    </section>
  );
}

export default Page;
