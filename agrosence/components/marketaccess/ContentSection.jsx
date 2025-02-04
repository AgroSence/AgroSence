import React from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";

const ContentSection = ({ type, text }) => {
  const isBuyer = type === "buyer";

  return (
    <div className="content-section py-5 text-white text-center position-relative">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="icon-wrapper mb-4">
              {isBuyer ? (
                <FaShoppingCart size={40} className="" />
              ) : (
                <FaStore size={40} className="" />
              )}
            </div>
            <p
              className="lead mb-4 fw-medium fs-4"
              style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
            >
              {text}
            </p>
            <button className="btn btn-success btn-lg px-5 py-3">
              {isBuyer ? "BUY" : "SELL"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
