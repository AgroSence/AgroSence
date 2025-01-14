// FeaturesPage.js
import Header from '../components/Header'
import Footer from '../components/Footer'
// import HeroSection from "../components/feature/FeatureHeader";
import FeatureCard from "../components/feature/FeatureCard";
import { resource } from "../resource";

const Features= () => {
  const features = [
    {
      title: "Crop detection report",
      description:
        "The Crop Detection tool uses advanced machine learning algorithms to identify diseases, pests, and nutrient deficiencies in crops by analyzing images.",
      image: `${resource.CropDetection2.src}`,
    },
    {
      title: "AI chat bot",
      description:
        "Our AI-powered chatbot offers round-the-clock assistance to farmers, providing real-time answers to their queries related to farming practices, pest control, crop management, and weather updates.",
      image: `${resource.Aichatbot2.src}`,
      isReversed: true,
    },
    {
      title: "Resources",
      description:
        "This feature offers a comprehensive library of farming resources, including step-by-step guides, video tutorials, and expert tips.",
      image: `${resource.FarmingResource2.src}`,
    },
    {
      title: "Government schemes",
      description:
        "Stay up-to-date with the latest government schemes and benefits specifically tailored for farmers.",
      image: `${resource.GovScheme2.src}`,
      isReversed: true,
    },
    {
      title: "Market access",
      description:
        "Farmers can use this platform to showcase their crops to a wider audience by listing them with detailed descriptions, images, and pricing.",
      image: `${resource.MarketAccess2.src}`,
    },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column overflow-x-hidden ">
      <Header />
      <main>
        <div className="container-fluid p-0">
          <div 
            className="position-relative text-white text-center py-5 mb-5"
            style={{
              backgroundImage: `url(${resource.FeatureBG.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px'
            }}
          >
            <div 
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            ></div>
            <div className="position-relative container h-100 d-flex align-items-center justify-content-center">
              <h1 className="display-3 fw-bold">Features</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid px-md-5">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;

