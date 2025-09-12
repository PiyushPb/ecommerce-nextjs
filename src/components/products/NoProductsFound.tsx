import { Frown } from "lucide-react";

export default function NoProductsFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
      <Frown className="w-16 h-16 mb-4 text-gray-400" />
      <h2 className="text-xl font-semibold mb-2">No products found</h2>
      <p className="text-sm text-gray-400">
        Try adjusting your filters or check back later.
      </p>
    </div>
  );
}
