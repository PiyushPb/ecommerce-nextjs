// components/cart/CartSkeleton.tsx
"use client";

import React from "react";

function SkeletonCartProductCard() {
  return (
    <div className="flex flex-col md:flex-row gap-5 border-b border-gray-200 py-10 animate-pulse">
      {/* Skeleton Image */}
      <div className="w-full md:w-[300px] h-[300px] bg-gray-200 rounded-md" />

      {/* Skeleton Details */}
      <div className="flex flex-1 flex-row justify-between items-start w-full">
        <div className="flex flex-col gap-3 w-full">
          <div className="h-8 bg-gray-200 rounded w-2/3" />
          <div className="h-6 bg-gray-200 rounded w-1/3" />

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <div className="h-6 bg-gray-200 rounded w-[80px]" />
            <div className="h-6 bg-gray-200 rounded w-[80px]" />
          </div>
        </div>

        {/* Delete Icon Placeholder */}
        <div className="mt-4 md:mt-0">
          <div className="h-6 w-6 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function CartSkeleton() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row gap-10">
      {/* Left Side - Product List Skeleton */}
      <div className="flex-1 flex flex-col">
        <div className="w-full flex flex-row gap-5">
          <div className="w-full flex flex-col">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <SkeletonCartProductCard key={index} />
              ))}
          </div>
        </div>
      </div>

      {/* Right Side - Cart Total Skeleton */}
      <div className="w-full md:w-[25%] h-fit md:sticky top-[80px] mb-10 animate-pulse">
        <div className="bg-gray-200 rounded-lg p-6 flex flex-col gap-4">
          <div className="h-6 bg-gray-300 rounded w-2/3" />
          <div className="h-6 bg-gray-300 rounded w-1/2" />
          <div className="h-10 bg-gray-300 rounded w-full mt-4" />
        </div>
      </div>
    </section>
  );
}
