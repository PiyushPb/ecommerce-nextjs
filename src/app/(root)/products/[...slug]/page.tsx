/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const UNAVAILABLE_SIZES = ["XS", "XXXL"];

function ProductPage() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <section className="p-5 md:p-10 flex flex-col-reverse md:flex-row gap-10 md:h-[90vh]">
      <ProductDescriptionSection handleBackPress={handleBackPress} />
      <ProductThumbnailSection />
      <div
        className="flex-row items-center gap-2 cursor-pointer w-fit flex md:hidden"
        onClick={handleBackPress}
      >
        <IoIosArrowBack />
        <span>Back</span>
      </div>
    </section>
  );
}

const ProductDescriptionSection = ({
  handleBackPress,
}: {
  handleBackPress: () => void;
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

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
        <h2 className="text-3xl uppercase">Black T-Shirt & Trouser</h2>

        {/* Pricing */}
        <div className="flex flex-row gap-2 items-center">
          <span className="text-2xl">₹ 500</span>
          <span className="text-sm text-gray-500">(Regular price)</span>
        </div>

        {/* Size Selection */}
        <div className="flex flex-col gap-2">
          <span>Sizes:</span>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((size) => {
              const isUnavailable = UNAVAILABLE_SIZES.includes(size);
              const isSelected = selectedSize === size;

              return (
                <Button
                  key={size}
                  variant={isSelected ? "default" : "outline"}
                  className={`px-4 py-2 text-sm ${
                    isUnavailable
                      ? "line-through cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  disabled={isUnavailable}
                  onClick={() => !isUnavailable && setSelectedSize(size)}
                >
                  {size}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-2">
          <span>Quantity:</span>
          <div className="flex flex-row gap-2 items-center">
            <Button variant="outline">-</Button>
            <span>1</span>
            <Button variant="outline">+</Button>
          </div>
        </div>

        {/* Accordion for Description & Policy */}
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="description">
            <AccordionTrigger>Product Description</AccordionTrigger>
            <AccordionContent>
              This black T-shirt and trouser set is made from premium cotton,
              designed for everyday comfort and durability. Perfect for casual
              wear or light workouts.
            </AccordionContent>
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
        <Button className="w-fit p-5">Add to Cart</Button>
        <Button className="w-fit p-5" variant={"outline"}>
          Share
        </Button>
      </div>
    </div>
  );
};

const ProductThumbnailSection = () => {
  return (
    <div className="w-full md:w-[70%] grid grid-cols-5 grid-rows-5 gap-5">
      <div className="col-span-3 row-span-5 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1700177421832-9815a92029be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 row-span-2 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1700177421838-7030f56be9d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 row-span-3 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1700177421807-98c9c2d7bdf4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default ProductPage;
