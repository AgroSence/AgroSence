// FeaturesPage.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from "../components/feature/FeatureHeader";
import FeatureCard from "../components/feature/FeatureCard";
import { resource } from "../resource";

const FeaturesPage = () => {
  const features = [
    {
      title: "Crop detection report",
      description:
        "The Crop Detection tool uses advanced machine learning algorithms to identify diseases, pests, and nutrient deficiencies in crops by analyzing images.",
      image: `${resource.CropDetection.src}`,
    },
    {
      title: "AI chat bot",
      description:
        "Our AI-powered chatbot offers round-the-clock assistance to farmers, providing real-time answers to their queries related to farming practices, pest control, crop management, and weather updates.",
      image: `${resource.Aichatbot.src}`,
      isReversed: true,
    },
    {
      title: "Resources",
      description:
        "This feature offers a comprehensive library of farming resources, including step-by-step guides, video tutorials, and expert tips.",
      image: `${resource.CropDetection.src}`,
    },
    {
      title: "Government schemes",
      description:
        "Stay up-to-date with the latest government schemes and benefits specifically tailored for farmers.",
      image: `${resource.GovScheme.src}`,
      isReversed: true,
    },
    {
      title: "Market access",
      description:
        "Farmers can use this platform to showcase their crops to a wider audience by listing them with detailed descriptions, images, and pricing.",
      image: `${resource.MarketAccess.src}`,
    },
  ];

  return (
    <>
    <Header />
      <HeroSection />
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          index={index}
        />
      ))}
      <Footer />
    </>
  );
};

export default FeaturesPage;
