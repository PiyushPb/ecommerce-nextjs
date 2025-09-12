"use client";

import React from "react";
import EmptyCart from "@/components/cart/EmptyCart";
import CartProductCard from "@/components/cart/CartProductCard";
import CartTotal from "@/components/cart/CartTotal";
import { useCart } from "@/context/CartContext";
import CartSkeleton from "@/components/skeleton/CartSkeleton";

function Page() {
  const { items, loading } = useCart();

  return (
    <section className="min-h-[90vh] px-5 md:px-10 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl mb-6">Cart</h2>
        {loading ? (
          <CartSkeleton />
        ) : (
          <div className="w-full flex flex-row gap-5">
            <div className="w-full flex flex-col">
              {items.length > 0 ? (
                items.map((item) => (
                  <CartProductCard key={item.itemId} item={item} />
                ))
              ) : (
                <EmptyCart />
              )}
            </div>
          </div>
        )}
      </div>
      {!loading && items.length > 0 && (
        <div className="w-full md:w-[25%] h-fit md:sticky top-[80px] mb-10">
          <CartTotal items={items} />
        </div>
      )}
    </section>
  );
}

export default Page;
