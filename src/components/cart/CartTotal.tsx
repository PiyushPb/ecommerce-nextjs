import React from "react";

function CartTotal() {
  return (
    <div className="bg-gray-100 p-6 w-full text-sm font-medium">
      <table className="w-full text-left">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-2">BOMBER JACKET</td>
            <td className="py-2 text-right">$2,318</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">TAILORED JACKET</td>
            <td className="py-2 text-right">$2,728</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">COAT</td>
            <td className="py-2 text-right">$649</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">HIGH-NECK SWEATER</td>
            <td className="py-2 text-right">$600</td>
          </tr>

          <tr className="font-bold text-lg">
            <td className="py-4">TOTAL</td>
            <td className="py-4 text-right">$6,295</td>
          </tr>
        </tbody>
      </table>

      <button className="mt-4 w-full bg-black text-white py-3 font-semibold uppercase tracking-wider">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartTotal;
