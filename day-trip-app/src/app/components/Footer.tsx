"use client";

import React from "react";
import { FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-6 mt-12 transition-colors duration-300">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:contact@yourwebsite.com"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
