import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Whisper clothing",
  description: "Created by Piyush",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Toaster position="bottom-left" />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
