"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Category links
  const navItems = [
    { label: "T-Shirts", value: "T-shirt" },
    { label: "Hoodies", value: "Hoodies" },
    { label: "Jumpers", value: "Winterwear" },
    { label: "Caps", value: "Accessories" },
    { label: "Accessories", value: "Accessories" },
  ];

  return (
    <nav className="w-full px-5 md:px-10 py-5 flex justify-between items-center bg-white sticky top-0 z-[9999]">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-xl font-bold">Whisper Clothing</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row gap-6 text-gray-700">
        {navItems.map((item) => (
          <li key={item.label} className="hover:text-black cursor-pointer">
            <Link href={`/products?c=${encodeURIComponent(item.value)}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-5">
        <Link href="/account">
          <FaRegUser size={20} className="cursor-pointer" />
        </Link>
        <Link href="/cart" className="relative cursor-pointer">
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            2
          </div>
          <RiShoppingCartLine size={20} />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-5 py-5 shadow-md md:hidden z-50">
          {navItems.map((item) => (
            <li key={item.label} className="hover:text-black cursor-pointer">
              <Link
                href={`/products?c=${encodeURIComponent(item.value)}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
