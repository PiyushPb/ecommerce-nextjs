/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const ProductPageSkeleton = () => {
  return (
    <section className="p-5 md:p-10 flex flex-col-reverse md:flex-row gap-10 md:h-[90vh]">
      <ProductDescriptionSkeleton />
      <ProductThumbnailSkeleton />
      <div className="flex-row items-center gap-2 cursor-pointer w-fit flex md:hidden">
        <IoIosArrowBack />
        <span>Back</span>
      </div>
    </section>
  );
};

const ProductDescriptionSkeleton = () => {
  return (
    <div className="w-full md:w-[30%] flex flex-col gap-5">
      <div className="flex-row items-center gap-2 cursor-pointer w-fit hidden md:flex">
        <IoIosArrowBack />
        <span>Back</span>
      </div>

      <div className="flex flex-col gap-4">
        <SkeletonBox className="h-8 w-3/4" /> {/* Title */}
        <div className="flex gap-2 items-center">
          <SkeletonBox className="h-6 w-20" />
          <SkeletonBox className="h-4 w-24" />
        </div>
        {/* Sizes */}
        <div className="flex flex-col gap-2">
          <SkeletonBox className="h-4 w-16" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <SkeletonBox key={i} className="h-8 w-12" />
            ))}
          </div>
        </div>
        {/* Quantity */}
        <div className="flex flex-col gap-2">
          <SkeletonBox className="h-4 w-20" />
          <div className="flex gap-2 items-center">
            <SkeletonBox className="h-8 w-8" />
            <SkeletonBox className="h-6 w-6" />
            <SkeletonBox className="h-8 w-8" />
          </div>
        </div>
        {/* Accordion */}
        <div className="flex flex-col gap-4 mt-4">
          <SkeletonBox className="h-6 w-full" />
          <SkeletonBox className="h-6 w-full" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-2">
        <SkeletonBox className="h-12 w-32" />
        <SkeletonBox className="h-12 w-24" />
      </div>
    </div>
  );
};

const ProductThumbnailSkeleton = () => {
  return (
    <div className="w-full md:w-[70%] grid grid-cols-5 grid-rows-5 gap-5">
      <SkeletonBox className="col-span-3 row-span-5 w-full h-full" />
      <SkeletonBox className="col-span-2 row-span-2 w-full h-full" />
      <SkeletonBox className="col-span-2 row-span-3 w-full h-full" />
    </div>
  );
};

export default ProductPageSkeleton;
