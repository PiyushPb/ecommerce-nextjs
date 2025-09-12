// src/app/(root)/products/page.tsx
import { Suspense } from "react";
import ProductsPageClient from "@/components/products/ProductsPageClient";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPageClient />
    </Suspense>
  );
}
