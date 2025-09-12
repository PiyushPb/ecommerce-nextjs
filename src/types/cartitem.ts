type CartItem = {
  itemId: string | null;
  title: string | null;
  price: number | null;
  thumbnail: string | null;
  quantity: number;
  size?: string | null;
};

export default CartItem;
