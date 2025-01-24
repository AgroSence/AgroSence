import React from "react";
import { resource } from "../../resource";

const AboutSection = () => {
  return (
    <section className="overflow-x-hidden bg-white">
      {/* Indian Agriculture Section */}
      <div className="row align-items-center justify-content-center mx-0 my-5 px-3">
        <div className="col-md-6 col-lg-4 text-center mb-4 mb-lg-0">
          <img
            src={resource.IndianAgriculture.src}
            alt={resource.IndianAgriculture.alt}
            className="img-fluid rounded-circle"
            style={{ maxWidth: "100%", maxHeight: "300px" }} // Responsive image
          />
        </div>
        <div className="col-md-10 col-lg-6 text-center text-lg-start">
          <h2 className="mb-3 fw-bold">Indian Agriculture</h2>
          <p className="fs-5">
            Explore our carefully curated selection of plants, ranging from
            exotic tropicals to hardy succulents, flowering perennials to
            majestic trees. Our team of experts meticulously sources and
            nurtures each plant to ensure they are healthy, well-rooted, and
            ready to thrive in your environment.
          </p>
        </div>
      </div>

      {/* About Our Project Section */}
      <div className="row align-items-center justify-content-center mx-0 my-5 px-3">
        <div className="col-md-6 col-lg-4 order-lg-2 text-center mb-4 mb-lg-0">
          <img
            src={resource.AboutOurProject.src}
            alt={resource.AboutOurProject.alt}
            className="img-fluid rounded-circle"
            style={{ maxWidth: "100%", maxHeight: "300px" }} // Responsive image
          />
        </div>
        <div className="col-md-10 col-lg-6 order-lg-1 text-center text-lg-start">
          <h2 className="mb-3 fw-bold">About Our Project</h2>
          <p className="fs-5">
            AgroSense is a cutting-edge platform designed to revolutionize the
            way farmers sell their crops. By connecting farmers directly to
            buyers, we eliminate the need for middlemen, empowering farmers to
            set their own prices and maximize their profits. Our goal is to
            create a fair, efficient, and farmer-friendly ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
