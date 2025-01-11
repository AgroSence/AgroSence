import React from "react";
import FeatureCard from "./FeatureCard";
import { resource } from "../../resource";

const Features = () => {
  const features = [
    {
      image: `${resource.Aichatbot.src}`,
      title: `${resource.Aichatbot.alt}`,
      description: "24/7 AI assistance for farmers."
    },
    {
      image: `${resource.CropDetection.src}`,
      title: `${resource.CropDetection.alt}`,
      description: "Identify crop issues and get actionable solutions."
    },
    {
      image: `${resource.FarmingResources.src}`,
      title: `${resource.FarmingResources.alt}`,
      description: "Guides and tutorials to enhance farming knowledge."
    },
    {
      image: `${resource.GovScheme.src}`,
      title: `${resource.GovScheme.alt}`,
      description: "Easy access to the latest schemes and benefits."
    },
    {
      image: `${resource.MarketAccess.src}`,
      title: `${resource.MarketAccess.alt}`,
      description:
        "Farmers can list their crops with images, descriptions, and prices."
    }
  ];

  return (
    <section className="container mt-3 rounded mb-3 py-5 text-dark overflow-x-hidden shadow-sm border" >
      {/* style={{ backgroundColor: "#EEEEEE" }} */}
      <h2 className="text-center mb-5">Features of our Project</h2>
      <div className="row d-flex justify-content-center align-content-center p-2">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
