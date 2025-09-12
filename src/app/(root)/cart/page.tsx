/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import EmptyCart from "@/components/cart/EmptyCart";
import CartProductCard from "@/components/cart/CartProductCard";
import CartTotal from "@/components/cart/CartTotal";
import CartItem from "@/types/cartitem";

function Page() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("/api/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      const data = await response.json();
      setCartItems(data.payload.items); 
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <section className="min-h-[90vh] px-5 md:px-10 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl mb-6">Cart</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="w-full flex flex-row gap-5">
            <div className="w-full flex flex-col">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartProductCard key={item.itemId} item={item} />
                ))
              ) : (
                <EmptyCart />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="w-full md:w-[25%] h-fit md:sticky top-[80px] mb-10">
        <CartTotal items={cartItems} />
      </div>
    </section>
  );
}

export default Page;
