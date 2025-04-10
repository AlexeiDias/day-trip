"use client";

import React from "react";

export default function TourDetails({ tour }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Side - Tour Information */}
      <div>
        {/* Special Event Spotlight (Optional) */}
        {tour.specialEvent && (
          <div className="bg-blue-100 text-blue-900 p-4 rounded-lg mb-6">
            <h3 className="font-bold text-lg">🔹 Special Event Spotlight</h3>
            <p className="text-sm mt-2">{tour.specialEvent}</p>
          </div>
        )}

        {/* Tour Description */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          {tour.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4">{tour.description}</p>

        {/* Special Departures */}
        {tour.specialDepartures && (
          <div className="bg-orange-100 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-lg">📅 Special Departures</h3>
            <p className="text-sm mt-2 text-orange-900">
              <a href={tour.specialDepartures.link} className="underline font-semibold">
                {tour.specialDepartures.label}
              </a>
            </p>
          </div>
        )}

        {/* Tour Package Includes */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">✅ Your Tour Package Includes</h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {tour.packageIncludes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">🌟 Included Highlights</h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {tour.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ✅ Right Side - Removed Form and Left Blank for Future Content */}
      <div></div>
    </section>
  );
}
