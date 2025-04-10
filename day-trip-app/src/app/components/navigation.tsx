"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-foreground shadow-md transition-colors duration-300 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            <Link href="/">Day Trips</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              About
            </Link>
            <Link href="/sanFranciscoSelfGuided" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              San Francisco Car-Free
            </Link>
            <Link href="/wineCountry" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Napa & Sonoma
            </Link>
            <Link href="/SFTour" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              San Francisco 1-Day Tour
            </Link>
            <Link href="/ca1" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Highway 1 Day Trip
            </Link>
            <Link href="/tahoe" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Lake Tahoe Adventure
            </Link>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 space-y-2 shadow-md relative z-50">
          <Link href="/" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Home
          </Link>
          <Link href="/about" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            About
          </Link>
          <Link href="/sanFranciscoSelfGuided" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            San Francisco Car-Free
          </Link>
          <Link href="/wineCountry" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Napa & Sonoma
          </Link>
          <Link href="/SFTour" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            San Francisco 1-Day Tour
          </Link>
          <Link href="/ca1" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Highway 1 Day Trip
          </Link>
          <Link href="/tahoe" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Lake Tahoe Adventure
          </Link>
        </div>
      )}
    </nav>
  );
}
