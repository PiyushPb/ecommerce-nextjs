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
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  "Winterwear",
  "Shirts",
  "Jackets",
  "Hoodies",
  "Bottomwear",
  "Kurta",
  "Blazers",
  "T-shirt",
  "Ethnic",
  "Jeans",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const FiltersContent = ({
  selectedCategory,
  setSelectedCategory,
  selectedSize,
  setSelectedSize,
  priceRange,
  setPriceRange,
  applyFilters,
}: {
  selectedCategory: string | null;
  setSelectedCategory: (val: string | null) => void;
  selectedSize: string | null;
  setSelectedSize: (val: string | null) => void;
  priceRange: number[];
  setPriceRange: (val: number[]) => void;
  applyFilters: () => void;
}) => {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-md font-semibold mb-2">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${cat}`}
                checked={selectedCategory === cat}
                onCheckedChange={() =>
                  setSelectedCategory(selectedCategory === cat ? null : cat)
                }
              />
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
              <Checkbox
                id={`size-${size}`}
                checked={selectedSize === size}
                onCheckedChange={() =>
                  setSelectedSize(selectedSize === size ? null : size)
                }
              />
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
          max={5000}
          step={100}
          min={300}
          onValueChange={setPriceRange}
        />
        <div className="text-sm text-muted-foreground mt-2">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={applyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export const FiltersSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  useEffect(() => {
    const c = searchParams.get("c");
    const s = searchParams.get("s");
    const p = searchParams.get("p");

    if (c) setSelectedCategory(c);
    if (s) setSelectedSize(s);
    if (p) {
      const [min, max] = p.split("-").map(Number);
      setPriceRange([min || 0, max || 100]);
    }
  }, [searchParams]);

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCategory) params.set("c", selectedCategory);
    if (selectedSize) params.set("s", selectedSize);
    if (priceRange) params.set("p", `${priceRange[0]}-${priceRange[1]}`);

    router.push(`?${params.toString()}`);
  };

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
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                applyFilters={applyFilters}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:block w-1/4 h-[100vh] sticky top-[80px] pr-10 border-r-[1px] border-r-gray-200">
        <h3 className="text-2xl mb-5 font-semibold">Filters</h3>
        <FiltersContent
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          applyFilters={applyFilters}
        />
      </div>
    </>
  );
};

export default FiltersSection;
