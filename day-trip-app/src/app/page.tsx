import React from "react";
import Image from "next/image";
import Carousel from "./components/carousel";
import TourList from "./components/tourList";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Carousel Section */}
      <h1 className="text-2xl font-bold mb-6">Image Carousel</h1>
      <Carousel />

      {/* Tour List Section */}
      <div className="mt-12 w-full">
        <TourList />
      </div>
    </div>
  );
}
