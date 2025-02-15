"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">Brand</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-black">About</Link>
            <Link href="/ca1" className="text-gray-600 hover:text-black">CA1</Link>
            <Link href="/sanFrancisco" className="text-gray-600 hover:text-black">San Francisco</Link>
            <Link href="/tahoe" className="text-gray-600 hover:text-black">Lake Tahoe</Link>
            <Link href="/wineCountry" className="text-gray-600 hover:text-black">Napa & Sonoma</Link>
            <Link href="/sfSelfTour" className="text-gray-600 hover:text-black">SF Self Tour</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md">
          <Link href="/" className="block text-gray-600 hover:text-black">Home</Link>
          <Link href="/about" className="block text-gray-600 hover:text-black">About</Link>
          <Link href="/ca1" className="block text-gray-600 hover:text-black">Services</Link>
          <Link href="/sanFrancisco" className="block text-gray-600 hover:text-black">Contact</Link>
          <Link href="/tahoe" className="block text-gray-600 hover:text-black">Lake Tahoe</Link>
          <Link href="/wineCountry" className="block text-gray-600 hover:text-black">Napa & Sonoma</Link>
          <Link href="/sfSelfTour" className="block text-gray-600 hover:text-black">SF Self Tour</Link>
        </div>
      )}
    </nav>
  );
}


