"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import CartItem from "@/types/cartitem";

type CartContextType = {
  items: CartItem[];
  loading: boolean;
  fetchCart: () => Promise<void>;
  addToCart: (itemId: string, quantity: number, size: string) => Promise<void>;
  updateCartItem: (
    itemId: string,
    size: string,
    quantity: number
  ) => Promise<void>;
  removeCartItem: (itemId: string, size: string) => Promise<void>;
  clearCart: () => Promise<void>;
  totalQuantity: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      const data = await response.json();
      setItems(data.payload.items ?? []);
    } catch (error) {
      console.error("❌ Failed to fetch cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (itemId: string, quantity: number, size: string) => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ itemId, quantity, size }),
      });
      if (!res.ok) throw new Error("Failed to add item");
      await fetchCart();
    } catch (error) {
      console.error("❌ Add to cart failed:", error);
    }
  };

  const updateCartItem = async (
    itemId: string,
    size: string,
    quantity: number
  ) => {
    try {
      // For now, re-use POST to "overwrite"
      await addToCart(itemId, quantity, size);
    } catch (error) {
      console.error("❌ Update cart item failed:", error);
    }
  };

  const removeCartItem = async (itemId: string, size: string) => {
    try {
      const res = await fetch(`/api/cart`, {
        method: "DELETE", // you can make a dedicated DELETE route per item
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ itemId, size }),
      });
      if (!res.ok) throw new Error("Failed to remove item");
      await fetchCart();
    } catch (error) {
      console.error("❌ Remove cart item failed:", error);
    }
  };

  const clearCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      if (!res.ok) throw new Error("Failed to clear cart");
      setItems([]);
    } catch (error) {
      console.error("❌ Clear cart failed:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        loading,
        fetchCart,
        addToCart,
        updateCartItem,
        removeCartItem,
        clearCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
