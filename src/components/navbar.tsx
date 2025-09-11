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

  return (
    <nav className="w-full px-5 md:px-10 py-5 flex justify-between items-center bg-white sticky top-0 z-[9999]">
      {/* Logo */}
      <div>
        <h1 className="text-xl font-bold">Whisper</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row gap-6 text-gray-700">
        <li className="hover:text-black cursor-pointer">T-Shirts</li>
        <li className="hover:text-black cursor-pointer">Hoodies</li>
        <li className="hover:text-black cursor-pointer">Jumpers</li>
        <li className="hover:text-black cursor-pointer">Caps</li>
        <li className="hover:text-black cursor-pointer">Accessories</li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-5">
        <FaRegUser size={20} className="cursor-pointer" />
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
          <li className="hover:text-black cursor-pointer">T-Shirts</li>
          <li className="hover:text-black cursor-pointer">Hoodies</li>
          <li className="hover:text-black cursor-pointer">Jumpers</li>
          <li className="hover:text-black cursor-pointer">Caps</li>
          <li className="hover:text-black cursor-pointer">Accessories</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
