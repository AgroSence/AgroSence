import React from "react";
import Hero from "../components/marketaccess/MarketHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentSection from "../components/marketaccess/ContentSection";
import { resource } from "../resource";

const MarketAccess = () => {
  const buyerText =
    "AgroSense offers buyers a user-friendly platform to explore a wide range of agricultural products, including fresh produce, seeds, fertilizers, and farming tools. Buyers can easily browse product listings with detailed descriptions, images, and prices, making it simple to compare options and choose the best quality items.";

  const sellerText =
    "AgroSense empowers farmers and sellers to reach a broader market by listing their agricultural products directly on the platform. Sellers can upload product details, including descriptions, prices, and images, making it easy for buyers to find and purchase their goods. The app simplifies the selling process, helping farmers get fair prices by cutting out middlemen and connecting them directly with interested buyers. ";

  return (
    <>
      <Header />
      <div className="market-access-page">
        <Hero />
        <div
          className="content-wrapper"
          style={{
            backgroundImage: `url(${resource.MarketAccessHeroBG.src})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div className="dark-overlay"></div>
          <div className="content-container">
          <div className="dark-overlay position-absolute top-0 start-0 w-100 h-100"
                   style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
            <ContentSection type="buyer" text={buyerText} />
            <ContentSection type="seller" text={sellerText} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketAccess;
