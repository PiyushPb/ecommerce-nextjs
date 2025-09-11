"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { useState } from "react";

const categories = ["Clothing", "Shoes", "Accessories"];
const sizes = ["XS", "S", "M", "L", "XL"];

const FiltersContent = ({
  priceRange,
  setPriceRange,
}: {
  priceRange: number[];
  setPriceRange: (val: number[]) => void;
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-md font-semibold mb-2">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox id={`category-${cat}`} />
              <label
                htmlFor={`category-${cat}`}
                className="text-sm font-medium leading-none"
              >
                {cat}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-md font-semibold mb-2">Size</h3>
        <div className="space-y-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={`size-${size}`} />
              <label
                htmlFor={`size-${size}`}
                className="text-sm font-medium leading-none"
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-md font-semibold mb-2">Price Range</h3>
        <Slider
          defaultValue={priceRange}
          max={500}
          step={10}
          min={0}
          onValueChange={setPriceRange}
        />
        <div className="text-sm text-muted-foreground mt-2">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      <Button variant="outline" className="w-full">
        Apply Filters
      </Button>
    </div>
  );
};

export const FiltersSection = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <>
      {/* Mobile Filters */}
      <div className="md:hidden sticky top-[66px] z-50 p-4 bg-white border-b">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <FilterIcon className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-3/4 sm:w-1/2 p-5 mt-[68px]">
            <SheetHeader>
              <SheetTitle className="text-2xl p-0! m-0!">Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <FiltersContent
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:block w-1/4 h-[100vh] sticky top-[80px] pr-10 border-r-[1px] border-r-gray-200">
        <h3 className="text-2xl mb-5 font-semibold">Filters</h3>
        <FiltersContent priceRange={priceRange} setPriceRange={setPriceRange} />
      </div>
    </>
  );
};

export default FiltersSection;
