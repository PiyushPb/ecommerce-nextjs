import HeroSection from "@/components/home/HeroSection";
import Products from "@/components/home/Products";
import React from "react";

function page() {
  return (
    <div className="px-5 md:px-10">
      <HeroSection />
      <Products />
    </div>
  );
}

export default page;
