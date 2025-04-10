import Jumbotron from "../components/Jumbotron";
import TourDetails from "../components/TourDetails";
import Attractions from "../components/Attractions";
import TourForm from "../components/TourForm"; 


export default function TahoePage() {
  const tourData = {
    title: "Tahoe Summer Adventure Tour",
    image: "/images/tahoe-main.jpg",
    virtualTour: "https://my.matterport.com/show/?m=gmmH5uRe4YK", // ✅ Added
    duration: "1 Day Mountain Escape (±10 hours)",
    price: "TBD",
    groupSize: "Varies",
    description:
      "Escape to the breathtaking landscapes of Lake Tahoe with our 1-day adventure...",
    packageIncludes: [
      "Round-trip transportation from San Francisco",
      "Scenic drive through the Sierra Nevada",
      "Stop at Emerald Bay Vista Point",
      "Time to explore South Lake Tahoe’s casinos and shops",
    ],
    highlights: [
      "Emerald Bay Vista Point (30-min photo stop)",
      "3 hours free time in South Lake Tahoe",
      "Explore casinos, shops, and lakeside dining",
    ],
  };

  const tahoeAttractions = [
    {
      title: "Emerald Bay Vista Point",
      image: "/images/ebay.jpg",
      description: "A breathtaking viewpoint offering panoramic views of Emerald Bay and Lake Tahoe.",
    },
    {
      title: "South Lake Tahoe Casinos",
      image: "/images/rawImage.jpg",
      description: "Try your luck at the lively casinos along the Nevada side of South Lake Tahoe.",
    },
    {
      title: "Dining & Shopping",
      image: "/images/heavenly-village-tahoe.jpg",
      description: "Enjoy local cuisine and boutique shopping with stunning lakefront views.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* ✅ Jumbotron Section */}
      <Jumbotron tour={tourData} />

      {/* ✅ Tour Details Section */}
      <TourDetails tour={tourData} />

      {/* ✅ Dynamic Attractions Section */}
      <Attractions attractions={tahoeAttractions} />

      {/* ✅ Form in Modal */}
      <TourForm />

     
    </div>
  );
}
