import React from "react";
import Carousel from "./components/carousel";
import TourList from "./components/tourList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Carousel Section */}
      <h1 className="text-2xl font-bold mb-6">Your Perfect 1-Day Adventure – Explore San Francisco & Beyond!</h1>
      <Carousel />

      {/* Tour List Section */}
      <div className="mt-12 w-full">
        <TourList />
      </div>

      
    </div>
  );
}
