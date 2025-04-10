"use client";

import React, { useRef, useEffect } from "react";

export default function Jumbotron({ tour }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="relative w-full bg-background text-foreground pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 px-6">
        {/* Left Section */}
        <div className="relative w-full md:w-2/3 rounded-lg overflow-hidden aspect-video">
          {tour.virtualTour ? (
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <iframe
                src={tour.virtualTour}
                allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg border-none"
              ></iframe>
            </div>
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={tour.image}
              className="w-full h-full object-cover rounded-lg"
            >
              <source src={tour.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Right Section - Tour Details */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-3xl font-bold">{tour.title}</h1>
          <p className="text-gray-700 dark:text-gray-300">
            {tour.duration} | Estimated payments as low as{" "}
            <span className="font-bold">{tour.price}</span>
          </p>
          <p className="font-bold mt-2">Group size: {tour.groupSize}</p>

          <button className="mt-4 bg-foreground text-background px-6 py-3 rounded-lg text-lg hover:opacity-80">
            See Dates & Prices
          </button>
        </div>
      </div>
    </div>
  );
}
