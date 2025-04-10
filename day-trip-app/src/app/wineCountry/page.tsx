import Jumbotron from "../components/Jumbotron";
import TourDetails from "../components/TourDetails";
import Attractions from "../components/Attractions";
import TourForm from "../components/TourForm"; 


export default function WineCountryPage() {
  const tourData = {
    title: "Napa & Sonoma Wine Adventure",
    image: "/images/napa-main.jpg",
    virtualTour: "https://my.matterport.com/show/?m=v3NVjC7gaXE",
    duration: "8 Hour Tour",
    price: "TBD",
    groupSize: "Varies",
    description:
      "Embark on a delightful journey through California's premier wine regions—Sonoma and Napa Valleys. This curated tour offers a perfect blend of historic charm, exquisite tastings, and vibrant marketplaces, all set against the picturesque backdrop of Northern California's wine country.",
    packageIncludes: [
      "Round-trip transportation from San Francisco",
      "Scenic drive through Sonoma & Napa Valleys",
      "Stops at premium wineries for tastings",
      "Lunch at Oxbow Public Market",
    ],
    highlights: [
      "Sonoma Plaza Walking Tour",
      "Tastings at world-class wineries",
      "Downtown Napa exploration",
      "Lunch at Oxbow Public Market",
    ],
    notes: [
      "Tasting fees are not included and vary by winery.",
      "Advance reservations may be required for tastings.",
      "Comfortable walking shoes recommended.",
      "Custom tour modifications available upon request.",
    ],
  };

  const wineAttractions = [
    {
      title: "Sonoma Plaza",
      image: "/images/sonomaPlaza.jpg",
      description: "Stroll through the largest plaza in California, surrounded by charming boutiques, art galleries, and inviting cafes.",
    },
    {
      title: "Buena Vista Winery",
      image: "/images/buenaVista.jpeg",
      description: "Visit California’s oldest premium winery, established in 1857, and enjoy their acclaimed wines.",
    },
   
    {
      title: "Downtown Napa",
      image: "/images/downtownNapa.jpg",
      description: "Explore vibrant Napa with boutique shops, riverfront dining, and local art installations.",
    },
    {
      title: "Oxbow Public Market",
      image: "/images/oxyBow.jpeg",
      description: "Indulge in gourmet food, fine wines, and craft beer at Napa’s most popular food market.",
    },
    {
      title: "Trefethen Family Vineyards",
      image: "/images/chateauSjean.jpeg",
      description: "A family-owned estate known for its exceptional wines and historic 19th-century barn.",
    },
    {
      title: "Stag’s Leap Wine Cellars",
      image: "/images/relaxWine.jpeg",
      description: "Famous for its role in the 1976 Judgment of Paris, offering iconic Cabernet Sauvignon tastings.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* ✅ Jumbotron Section */}
      <Jumbotron tour={tourData} />

      {/* ✅ Tour Details Section */}
      <TourDetails tour={tourData} />

      {/* ✅ Dynamic Attractions Section */}
      <Attractions attractions={wineAttractions} />

      {/* ✅ Form in Modal */}
      <TourForm />

     
    </div>
  );
}
