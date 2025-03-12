import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/farmresource/ResourceHeader";
import CategoryGrid from "../components/farmresource/CategoryGrid";

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <Header />
      <HeroBanner />
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="mb-3">We Promise To Find You The Right Equipment</h2>
          <h1 className="display-4 fw-bold">Browse Machinery Categories</h1>
        </div>
        <CategoryGrid />
      </Container>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
