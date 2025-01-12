import React from "react";
import FeatureCard from "./FeatureCard";
import { resource } from "../../resource";

const Features = () => {
  const features = [
    {
      image: `${resource.Aichatbot.src}`,
      title: `${resource.Aichatbot.alt}`,
      description: "Our AI-powered chatbot offers round-the-clock assistance to farmers, providing real-time answers to their queries related to farming practices, pest control, crop management, and weather updates. This feature ensures farmers can always access reliable information to make informed decisions, no matter the time of day."
    },
    {
      image: `${resource.CropDetection.src}`,
      title: `${resource.CropDetection.alt}`,
      description: "The Crop Detection tool uses advanced machine learning algorithms to identify diseases, pests, and nutrient deficiencies in crops by analyzing images. Farmers can easily upload pictures of their crops, and the system will provide detailed feedback on any issues, along with practical solutions and preventative measures."
    },
    {
      image: `${resource.FarmingResources.src}`,
      title: `${resource.FarmingResources.alt}`,
      description: "This feature offers a comprehensive library of farming resources, including step-by-step guides, video tutorials, and expert tips. Farmers can access valuable content on various topics like sustainable farming practices, irrigation techniques, soil health, and pest management to improve crop yield and farm productivity."
    },
    {
      image: `${resource.GovScheme.src}`,
      title: `${resource.GovScheme.alt}`,
      description: "Stay up-to-date with the latest government schemes and benefits specifically tailored to farmers. This feature helps farmers access detailed information about subsidies, financial support, and agricultural schemes, ensuring they don't miss out on opportunities that could enhance their farming activities."
    },
    {
      image: `${resource.MarketAccess.src}`,
      title: `${resource.MarketAccess.alt}`,
      description: "Farmers can use this platform to showcase their crops to a wider audience by listing them with detailed descriptions, images, and pricing. This feature simplifies the process of connecting with potential buyers, helping farmers reach local and national markets and increase their sales potential."
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
