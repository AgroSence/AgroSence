import { resource } from "../../resource";

const HeroSection = () => {
  return (
    <div
      className="position-relative text-white text-center py-5 mb-5"
      style={{
        backgroundImage: `url(${resource.AboutHeader.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      ></div>
      <div className="position-relative container h-100 d-flex align-items-center justify-content-center">
        <h1 className="display-3 fw-bold">Features</h1>
      </div>
    </div>
  );
};

export default HeroSection;