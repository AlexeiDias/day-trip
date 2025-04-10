import Jumbotron from "../components/Jumbotron";
import TourDetails from "../components/TourDetails";
import Attractions from "../components/Attractions";
import TourForm from "../components/TourForm"; 


export default function SFTourPage() {
  const tourData = {
    title: "San Francisco 1-Day Tour",
    image: "/images/sf-tour-main.jpg",
    virtualTour: "https://my.matterport.com/show/?m=gmmH5uRe4YK", // ✅ NEW LINE
    duration: "± 8 Hours",
    price: "TBD",
    groupSize: "Varies",
    description:
      "Discover the vibrant heart of the Bay Area with our San Francisco 1-Day Tour! From iconic landmarks like the Golden Gate Bridge and Alcatraz to the charming streets of Fisherman’s Wharf and Chinatown, this tour offers a perfect blend of history, culture, and breathtaking views. Whether you're strolling through scenic neighborhoods or savoring local cuisine, you'll experience the best of San Francisco in just one unforgettable day.",
    packageIncludes: [
      "Round-trip transportation from San Francisco hotels",
      "Sightseeing stops at iconic locations",
      "Scenic drives along historic streets and waterfronts",
      "Professional local guide",
    ],
    highlights: [
      "Golden Gate Bridge",
      "Alcatraz (Viewpoint)",
      "Chinatown",
      "Lombard Street",
      "Palace of Fine Arts",
      "Twin Peaks Vista Point",
      "Fisherman’s Wharf",
    ],
    notes: [
      "Admission fees for museums or specific attractions not included.",
      "Comfortable walking shoes recommended.",
      "Weather can change, bring layers.",
      "Photo stops at major landmarks, limited walking required.",
    ],
  };

  const sfAttractions = [
    {
      title: "Golden Gate Bridge",
      image: "/images/GGB2.jpeg",
      description: "Take stunning photos and enjoy panoramic views of San Francisco’s most iconic landmark.",
    },
    {
      title: "Lombard Street",
      image: "/images/Lombard.jpg",
      description: "Walk down the famous 'Crookedest Street in the World' with its scenic, flower-lined turns.",
    },
    {
      title: "Palace of Fine Arts",
      image: "/images/PFA.jpg",
      description: "Marvel at the grand architecture and serene lagoon of this historic landmark.",
    },
    {
      title: "Twin Peaks Vista Point",
      image: "/images/twin-peaks-1.jpg",
      description: "Enjoy breathtaking 360-degree views of the entire city from one of its highest points.",
    },
    {
      title: "Chinatown",
      image: "/images/ChinaTown.jpg",
      description: "Explore the vibrant culture, unique shops, and historic streets of the largest Chinatown outside Asia.",
    },
    {
      title: "Fisherman’s Wharf",
      image: "/images/Fi_W.jpg",
      description: "Visit the lively waterfront, enjoy seafood, and watch the playful sea lions at Pier 39.",
    },
    {
      title: "Coit Tower",
      image: "/images/SF-Coit-Tower.png",
      description: "Admire the stunning Art Deco tower and its breathtaking views of the San Francisco skyline.",
    },
    {
      title: "Haight Street",
      image: "/images/Haight.jpg",
      description: "Experience the eclectic, bohemian atmosphere of the historic Haight-Ashbury neighborhood.",
    },
    
    {
      title: "Sutro Baths and Lands End",
      image: "/images/Sutro.jpeg",
      description: "Walk along the rugged coastline and explore the ruins of the historic Sutro Baths.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* ✅ Jumbotron Section */}
      <Jumbotron tour={tourData} />

      {/* ✅ Tour Details Section */}
      <TourDetails tour={tourData} />

      {/* ✅ Dynamic Attractions Section */}
      <Attractions attractions={sfAttractions} />

      {/* ✅ Form in Modal */}
      <TourForm />

      
    </div>
  );
}
