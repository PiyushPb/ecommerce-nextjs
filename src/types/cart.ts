// types/cart.ts
export interface PopulatedItem {
  _id: string;
  title: string;
  price: number;
  images: {
    thumbnail: string;
  };
}

export interface CartItem {
  itemId: PopulatedItem;
  quantity: number;
  size: string;
}
