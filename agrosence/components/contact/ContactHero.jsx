import { resource } from "../../resource";
const ContactHero = () => {
  return (
    <div
      className="hero-section position-relative d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${resource.ContactBg.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "400px",
      }}
    >
      <h1 className="text-white position-relative display-2 fw-bold">
        Contact us
      </h1>
    </div>
  );
};

export default ContactHero;
