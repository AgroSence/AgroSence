import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return ( 
    <div className="col-md-4 text-center mb-4 ">
      <img
        src={image}
        alt={title}
        className="img-fluid mb-3 rounded"
        style={{ maxWidth: "300px", boxShadow: "1 1 20px rgb(0, 0, 0)" }}
      />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
