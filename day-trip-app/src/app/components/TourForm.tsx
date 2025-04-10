"use client";

import React, { useState } from "react";
import Modal from "./Modal"; // ✅ Import Modal Component

export default function TourForm() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Function to close modal after submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false); // ✅ Close modal after submitting
  };

  return (
    <div className="text-center mt-6">
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Request More Information
      </button>

      {/* Modal with Google Form */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4">
          Request More Information
        </h2>

        {/* ✅ Embedded Google Form */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfhaNqUEI79P34PNBf0oAosyX7wBFBMLLJSmHN9Non3ixkyiQ/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="rounded-lg"
        >
          Loading…
        </iframe>

        {/* ✅ Submit Button for Closing Modal */}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close Form
        </button>
      </Modal>
    </div>
  );
}
