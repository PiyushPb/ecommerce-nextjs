/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useParams, useRouter } from "next/navigation";
import ProductPageSkeleton from "@/components/skeleton/ProductPageSkeleton";
import Product from "@/types/products";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";

const ProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);

  const { addToCart } = useCart();

  const params = useParams();
  const slugs = params?.slug as string[] | undefined;

  // Get last part as the product ID
  const productId = slugs?.[slugs.length - 1];

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;

      try {
        const res = await fetch(`http://localhost:3000/api/items/${productId}`);
        const data = await res.json();
        if (data.status === "success" && data.payload) {
          setProduct(data.payload);
          setError(false);
        } else {
          setError(true); // Product not found
          setProduct(null);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(true);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleBackPress = () => {
    router.back();
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (quantity > product?.quantity) return;
    setQuantity((prev) => {
      if (type === "dec" && prev > 1) return prev - 1;
      if (type === "inc" && product && prev < product.quantity) return prev + 1;
      return prev;
    });
  };

  const handleAddToCart = async () => {
    if (!product || !selectedSize) {
      toast.error("Select a size before adding to cart");
      return;
    }

    try {
      await addToCart(product._id, quantity, selectedSize);
      toast.success("Product added to cart!");
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
      toast.error("Something went wrong while adding to cart.");
    }
  };

  if (error) return <NoProductFound onBack={handleBackPress} />;
  if (!product) return <ProductPageSkeleton />;

  return (
    <section className="p-5 md:p-10 flex flex-col-reverse md:flex-row gap-10 md:h-[90vh]">
      <ProductDescriptionSection
        product={product}
        selectedSize={selectedSize}
        quantity={quantity}
        handleBackPress={handleBackPress}
        handleSizeSelect={handleSizeSelect}
        handleQuantityChange={handleQuantityChange}
        handleAddToCart={handleAddToCart}
      />
      <ProductThumbnailSection images={product.images} />
      <div
        className="flex-row items-center gap-2 cursor-pointer w-fit flex md:hidden"
        onClick={handleBackPress}
      >
        <IoIosArrowBack />
        <span>Back</span>
      </div>
    </section>
  );
};

const NoProductFound = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center p-5 space-y-4">
      <div className="flex items-center cursor-pointer mb-4" onClick={onBack}>
        <IoIosArrowBack size={24} />
        <span className="ml-2 text-lg font-semibold">Go Back</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-700">Product Not Found</h1>
      <p className="text-gray-500 max-w-md">
        Sorry, we couldn’t find the product you’re looking for. It might have
        been removed or the link is broken.
      </p>
      <button
        onClick={onBack}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

const ProductDescriptionSection = ({
  product,
  selectedSize,
  quantity,
  handleBackPress,
  handleSizeSelect,
  handleQuantityChange,
  handleAddToCart,
}: {
  product: Product;
  selectedSize: string | null;
  quantity: number;
  handleBackPress: () => void;
  handleSizeSelect: (size: string) => void;
  handleQuantityChange: (type: "inc" | "dec") => void;
  handleAddToCart: () => void;
}) => {
  return (
    <div className="w-full md:w-[30%] flex flex-col gap-5">
      {/* Back button */}
      <div
        className="flex-row items-center gap-2 cursor-pointer w-fit hidden md:flex"
        onClick={handleBackPress}
      >
        <IoIosArrowBack />
        <span>Back</span>
      </div>

      {/* Product details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl uppercase">{product.title}</h2>

        {/* Pricing */}
        <div className="flex flex-row gap-2 items-center">
          <span className="text-2xl">₹ {product.price}</span>
          <span className="text-sm text-gray-500">(Regular price)</span>
        </div>

        {/* Size Selection */}
        <div className="flex flex-col gap-2">
          <span>Sizes:</span>
          <div className="flex flex-wrap gap-2">
            {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => {
              const isAvailable = product.sizes.includes(size);
              const isSelected = selectedSize === size;

              return (
                <Button
                  key={size}
                  variant={isSelected ? "default" : "outline"}
                  className={`px-4 py-2 text-sm ${
                    !isAvailable
                      ? "line-through cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  disabled={!isAvailable}
                  onClick={() => isAvailable && handleSizeSelect(size)}
                >
                  {size}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-2">
          <span>Available Quantity: {product.quantity}</span>
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-2">
          <span>Quantity:</span>
          <div className="flex flex-row gap-2 items-center">
            <Button
              variant="outline"
              onClick={() => handleQuantityChange("dec")}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              variant="outline"
              onClick={() => handleQuantityChange("inc")}
            >
              +
            </Button>
          </div>
        </div>

        {/* Accordion for Description & Policy */}
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="description">
            <AccordionTrigger>Product Description</AccordionTrigger>
            <AccordionContent>{product.description}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="returns">
            <AccordionTrigger>Return & Exchange Policy</AccordionTrigger>
            <AccordionContent>
              Items can be returned or exchanged within 15 days of delivery.
              Please ensure the product is unused and in its original packaging.
              Refunds will be processed within 5-7 business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-row gap-2">
        <Button className="w-fit p-5" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button className="w-fit p-5" variant={"outline"}>
          Share
        </Button>
      </div>
    </div>
  );
};

const ProductThumbnailSection = ({ images }: { images: Product["images"] }) => {
  return (
    <div className="w-full md:w-[70%] grid grid-cols-5 grid-rows-5 gap-5">
      <div className="col-span-3 row-span-5 w-full h-full">
        <img
          src={images.gallery[0] || images.thumbnail}
          alt="main"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 row-span-2 w-full h-full">
        <img
          src={images.gallery[1] || images.thumbnail}
          alt="alt 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 row-span-3 w-full h-full">
        <img
          src={images.gallery[2] || images.thumbnail}
          alt="alt 2"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default ProductPage;
