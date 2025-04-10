"use client";

import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  // Close modal when clicking outside the content
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
