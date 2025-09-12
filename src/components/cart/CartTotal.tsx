"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

function CartTotal() {
  const { items } = useCart();

  // calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 p-6 w-full text-sm font-medium">
      <table className="w-full text-left">
        <tbody>
          {items.map((item) => (
            <tr
              key={`${item.itemId}-${item.size}`}
              className="border-b border-gray-300"
            >
              <td className="py-2">
                {item.title}{" "}
                <span className="text-gray-500 text-xs">
                  (x{item.quantity})
                </span>
              </td>
              <td className="py-2 text-right">
                ₹ {item.price * item.quantity}
              </td>
            </tr>
          ))}

          <tr className="font-bold text-lg">
            <td className="py-4">TOTAL</td>
            <td className="py-4 text-right">₹ {subtotal}</td>
          </tr>
        </tbody>
      </table>

      <button className="mt-4 w-full bg-black text-white py-3 font-semibold uppercase tracking-wider rounded-lg hover:bg-gray-800">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartTotal;
