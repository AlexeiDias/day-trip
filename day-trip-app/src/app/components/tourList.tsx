"use client";

import React, { useState } from "react";
import Link from "next/link";

const tours = [
  
  {
    id: 1,
    title: "San Francisco",
    image: "/images/GGB2.jpeg",
    link: "/SFTour",
    description:
      "Discover the vibrant heart of the Bay Area with our San Francisco 1-Day Tour!",
  },
  {
    id: 2,
    title: "Wine Country",
    image: "/images/steagsLeap.jpeg",
    link: "/wineCountry",
    description:
      "Embark on a delightful journey through California's premier wine regions—Sonoma and Napa Valleys.",
  },
  {
    id: 3,
    title: "Highway 1",
    image: "/images/17MileDR.jpg",
    link: "/ca1",
    description:
      "Embark on an unforgettable journey along Highway 1, one of the most scenic coastal drives in the world.",
  },
  {
    id: 4,
    title: "Lake Tahoe",
    image: "/images/emerald-bay.jpeg",
    link: "/tahoe",
    description:
      "Our 1-day adventure takes you from San Francisco to the breathtaking landscapes of Lake Tahoe. Experience the thrill of rafting on the picturesque Truckee River, soak in the stunning views at Emerald Bay, and explore the vibrant charm of South Lake Tahoe.",
  },
];

export default function TourList() {
  const [selectedTour, setSelectedTour] = useState(tours[0]);

  return (
    <div className="container text-center mx-auto p-6">
      {/* Welcome Text */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-200">
          Welcome to Your Next Adventure – Discover the Best of San Francisco with Us!
        </h3>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg shadow-sm transition-colors duration-300"
          readOnly
          value={selectedTour.description}
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-200">
        Day Trips
      </h2>

      {/* Tour Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tours.map((tour) => (
          <Link key={tour.id} href={tour.link} passHref>
            <div
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-md rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => setSelectedTour(tour)}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{tour.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
