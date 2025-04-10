import Jumbotron from "../components/Jumbotron";
import TourDetails from "../components/TourDetails";
import Attractions from "../components/Attractions";
import TourForm from "../components/TourForm"; 
import Footer from "../components/Footer";

export default function SanFranciscoSelfGuidedPage() {
  const tourData = {
    title: "San Francisco Car-Free",
    image: "/images/sf-main.jpg",
    virtualTour: "https://my.matterport.com/show/?m=HPwSn5mzJ2F",
    duration: "1 Day",
    price: "54",
    groupSize: "15-38 travelers",
    description:
      "Explore San Francisco at your own pace with a self-guided walking, biking, or scootering adventure.",
    packageIncludes: [
      "Expert Tour Director",
      "1-day electric bike rental",
      "Guided city tour",
    ],
    highlights: [
      "Golden Gate Bridge",
      "Alcatraz Island",
      "Chinatown",
    ],
  };

  const sfAttractions = [
    {
      title: "Golden Gate Bridge",
      image: "/images/sf-golden-gate.jpg",
      description: "Walk or bike across the world-famous Golden Gate Bridge.",
    },
    {
      title: "Alcatraz Island",
      image: "/images/sf-alcatraz.jpg",
      description: "Visit the historic prison that once held America’s most dangerous criminals.",
    },
    {
      title: "Chinatown",
      image: "/images/sf-chinatown.jpg",
      description: "Experience the vibrant culture and cuisine in the largest Chinatown outside Asia.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Jumbotron tour={tourData} />
      <TourDetails tour={tourData} />
      <Attractions attractions={sfAttractions} />
      <TourForm />
      
    </div>
  );
}
