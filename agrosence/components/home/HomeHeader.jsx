import { resource } from "../../resource";

const ContactHero = () => {
  return (
    <div
      className="hero-section position-relative d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${resource.WelcomeHomeImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "400px",
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
