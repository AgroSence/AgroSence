import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center text-center mb-4">
      <img
        src={image}
        alt={title}
        className="img-fluid mb-3 rounded"
        style={{
          maxWidth: "100%",
          maxHeight: "250px",
          objectFit: "cover",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      />
      <h5 className="mb-3">{title}</h5>
      <p className="text-muted">{description}</p>
    </div>
  );
};

export default FeatureCard;
