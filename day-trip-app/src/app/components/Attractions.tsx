"use client";

import React from "react";

export default function Attractions({ attractions = [] }) {
  if (!attractions || attractions.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-6">
          Tour Highlights & Attractions
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          No attractions available for this tour yet. Stay tuned!
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-6">
        Tour Highlights & Attractions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {attractions.map((attraction, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img
              src={attraction.image}
              alt={attraction.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mt-4">
              {attraction.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{attraction.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
