"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            <Link href="/">Brand</Link>
          </div>

          {/* Desktop Menu + Dark Mode Toggle */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</Link>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 ml-4">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 space-y-2 shadow-md">
          <Link href="/" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</Link>
          <Link href="/about" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</Link>
        </div>
      )}
    </nav>
  );
}
