import React from "react";
import FeatureCard from "../components/feature/FeatureCard";
import { resource } from "../resource";
import FeatureHeader from "../components/feature/FeatureHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Features = () => {
  const features = [
    {
      title: "Aichatbot",
      description: "24/7 AI assistance for farmers for problem solution..",
      image: `${resource.Aichatbot.src}`,
      path: "/aichatbot",
    },
    {
      title: "CropDetection",
      description: "Identify crop issues and get actionable solutions.",
      image: `${resource.CropDetection.src}`,
      path: "/crop-detection",
    },
    {
      title: "FarmingResources",
      description: "Guides and tutorials to enhance farming knowledge.",
      image: `${resource.FarmingResources.src}`,
      path: "/resources",
    },
    {
      title: "GovScheme",
      description: "Easy access to the latest schemes and benefits.",
      image: `${resource.GovScheme.src}`,
      path: "/schemes",
    },
    {
      title: "MarketAccess",
      description:
        "Farmers can list their crops with images, descriptions, and prices.",
      image: `${resource.MarketAccess.src}`,
      path: "/market",
    },
  ];

  return (
    <div className="p-4" style={{backgroundColor:"#34a853"}}>
      <Header />
      {/* <FeatureHeader /> */}
      <div className="container py-5">
        <h1 className="text-center mb-5">Features of our Project</h1>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
