import Jumbotron from "../components/Jumbotron";
import TourDetails from "../components/TourDetails";
import Attractions from "../components/Attractions";
import TourForm from "../components/TourForm"; 

export default function CA1Page() {
  const tourData = {
    title: "Highway 1 Day Tour: San Francisco to Carmel",
    image: "/images/highway1-main.jpg",
    virtualTour: "https://my.matterport.com/show/?m=TVZRZ6hyM6k", // ✅ NEW EMBEDDED LINK
    location: "San Francisco to Carmel, California",
    date: "Available Year-Round",
    duration: "9.5 Hours (8:30 AM – 6:00 PM)",
    price: "TBD",
    groupSize: "Varies",
    description: "Embark on an unforgettable journey along Highway 1...",
    packageIncludes: [
      "Round-trip transportation from San Francisco",
      "Scenic drive along Highway 1",
      "Stops at major coastal attractions",
      "Professional guide with insights into each destination",
    ],
    highlights: [
      "Pacifica (Drive-By)",
      "Santa Cruz Surf Museum (45-Minute Stop)",
      "Santa Cruz Wharf & Boardwalk (Drive-By)",
      "Monterey Bay Aquarium (1.5-Hour Stop)",
      "17-Mile Drive & The Lone Cypress (30-Minute Stop)",
      "Carmel-by-the-Sea (1.5-Hour Stop)",
    ],
    notes: [
      "Admission fees for Monterey Bay Aquarium are not included.",
      "Bring snacks – water is provided, but food stops are limited.",
      "Comfortable walking shoes recommended.",
      "Custom tour options available upon request.",
    ],
  };

  const ca1Attractions = [
    {
      title: "Pacifica",
      image: "/images/Pacifica_Pier.jpg",
      description: "A stunning coastal town known for its dramatic cliffs and vibrant surf culture.",
    },
    {
      title: "Santa Cruz Surf Museum",
      image: "/images/SC_Surf_Museum.jpeg",
      description: "Explore the history of surfing in a historic lighthouse overlooking the famous Steamer Lane.",
    },
    {
      title: "Monterey",
      image: "/images/Monterey.jpg",
      description: "Home to sea otters, kelp forests, and fascinating marine life along Cannery Row.",
    },
    {
      title: "17-Mile Drive",
      image: "/images/17MileDR.jpg",
      description: "A world-famous scenic drive with iconic stops including Pebble Beach and The Lone Cypress.",
    },
    {
      title: "Carmel-by-the-Sea",
      image: "/images/Carme.jpg",
      description: "A charming village featuring boutique shops, art galleries, and a breathtaking beach.",
    },
    {
      title: "Natural Bridges State Beach",
      image: "/images/Natural_Bridges.webp",
      description: "A beautiful drive along the coastline, offering unparalleled ocean views.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* ✅ Jumbotron Section */}
      <Jumbotron tour={tourData} />

      {/* ✅ Tour Details Section */}
      <TourDetails tour={tourData} />

      {/* ✅ Dynamic Attractions Section */}
      <Attractions attractions={ca1Attractions} />

      {/* ✅ Form in Modal */}
      <TourForm />

     
    </div>
  );
}
