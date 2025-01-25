import { resource } from "../../resource";

const ContactHero = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center hero-section position-relative text-white text-center py-5"
      style={{
        backgroundImage: `url(${resource.WelcomeHomeImg.src})`,
        backgroundPosition: "bottom", // Default: image aligned at the bottom
        backgroundSize: "cover", // Image scales to cover the section
        backgroundRepeat: "no-repeat", // Prevents background tiling
        height: "450px", // Default height for larger screens
      }}
    >
      <h1
        className="text-white position-relative m-auto px-3 display-5 fw-bold"
        style={{ zIndex: 2 }}
      >
        Welcome to the World of Agriculture
      </h1>
    </div>
  );
};

export default ContactHero;
