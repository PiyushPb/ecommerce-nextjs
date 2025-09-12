interface ProductImage {
  thumbnail: string;
  gallery: string[];
}

interface Product {
  _id: string;
  title: string;
  description: string;
  category: string;
  sizes: string[];
  price: number;
  quantity: number;
  images: ProductImage;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export default Product;
