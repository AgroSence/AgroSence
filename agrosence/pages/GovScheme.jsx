import React from "react";
import SchemeCard from "../components/govscheme/SchemeCard";
import QuickReports from "../components/govscheme/QuickReport";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { resource } from "../resource";

const GovSchemes = () => {
  const states = [
    { name: "Gujarat", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Maharashtra", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Punjab", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Kerala", mapUrl: `${resource.FarmingResources.src}` },
    { name: "U.P", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Delhi", mapUrl: `${resource.FarmingResources.src}` },
    { name: "J & K", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Kolkata", mapUrl: `${resource.FarmingResources.src}` },
    { name: "U.P", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Delhi", mapUrl: `${resource.FarmingResources.src}` },
    { name: "J & K", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Kolkata", mapUrl: `${resource.FarmingResources.src}` },
    { name: "U.P", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Delhi", mapUrl: `${resource.FarmingResources.src}` },
    { name: "J & K", mapUrl: `${resource.FarmingResources.src}` },
    { name: "Kolkata", mapUrl: `${resource.FarmingResources.src}` },
  ];

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center hero-section position-relative text-white text-center py-5"
        style={{
          backgroundImage: `url(${resource.GovBG.src})`,
          backgroundSize: "cover", // Image scales to cover the section
          backgroundRepeat: "no-repeat", // Prevents background tiling
          height: "400px", // Default height for larger screens
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
        <h1 className="text-white position-relative display-2 fw-bold">
          Government Schemes
        </h1>
      </div>
      <Header />
      <Container fluid className="py-4 bg-light">
        <div className="text-center mb-4">
          <p className="lead">
            Access state-wise government schemes and benefits for farmers
          </p>
        </div>
        <Row>
          <Col lg={9}>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {states.map((state, index) => (
                <Col key={index}>
                  <SchemeCard state={state.name} imageUrl={state.mapUrl} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={3}>
            <QuickReports />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default GovSchemes;
