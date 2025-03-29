import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Card,
  Badge,
  Button,
} from "react-bootstrap";
import { FiSearch, FiStar, FiUser, FiCalendar } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { resource } from "../resource";

const AgriculturalExperts = () => {
  const experts = [
    {
      id: 1,
      name: "Dr. Jeet Jani",
      title: "Agricultural Scientist, PhD",
      image: resource.Jeet.src, // Replace with actual image path
      status: "Available Now",
      rating: 4.8,
      reviews: 145,
      specialties: ["Soil Health", "Crop Rotation", "Sustainable Farming"],
      available: true,
    },
    {
      id: 2,
      name: "Dr. Herin Patel",
      title: "Organic Farming Specialist",
      image: resource.Herin.src, // Replace with actual image path
      status: "Busy",
      rating: 4.6,
      reviews: 98,
      specialties: ["Organic Certification", "Pest Management", "Composting"],
      available: false,
    },
    {
        id: 3,
        name: "Dr. Dhruv Shere",
        title: "Agricultural Scientist, PhD",
        image: resource.Dhruv.src, // Replace with actual image path
        status: "Available Now",
        rating: 4.8,
        reviews: 145,
        specialties: ["Soil Health", "Crop Rotation", "Sustainable Farming"],
        available: true,
      },
  ];

  return (
    <div>
      <Header />
      <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="mb-3">Connect with Agricultural Experts</h2>
            <p className="text-muted mb-4">
              Get personalized advice and solutions from our network of
              qualified agricultural professionals.
            </p>

            <Form className="d-flex justify-content-center">
              <InputGroup className="mb-3" style={{ maxWidth: "600px" }}>
                <InputGroup.Text className="bg-white border-end-0">
                  <FiSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search by name, specialty, or expertise..."
                  aria-label="Search experts"
                  className="border-start-0"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>

        {/* Experts Section */}
        <Container>
          <Row className="mb-4 align-items-center">
            <Col>
              <h3 className="mb-0">Our Experts</h3>
            </Col>
            <Col xs="auto">
              <div className="d-flex gap-3">
                <Button
                  variant="link"
                  className="text-dark text-decoration-none"
                >
                  All Experts
                </Button>
                <Button
                  variant="link"
                  className="text-dark text-decoration-none"
                >
                  Available Now
                </Button>
              </div>
            </Col>
          </Row>

          {/* Expert Cards */}
          {experts.map((expert) => (
            <Card key={expert.id} className="mb-4 border-0 shadow-sm">
              <Row className="g-0">
                <Col xs={12} md={3} lg={3}>
                  <div className="position-relative h-100">
                    <Card.Img
                      src={expert.image}
                      alt={expert.name}
                      className="h-100 w-100"
                      style={{ objectFit: "cover", minHeight: "250px" }}
                    />
                    <Badge
                      bg={expert.available ? "success" : "secondary"}
                      className="position-absolute top-0 start-0 m-2"
                    >
                      {expert.status}
                    </Badge>
                  </div>
                </Col>
                <Col xs={12} md={9} lg={9}>
                  <Card.Body className="d-flex flex-column h-100">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h4 className="mb-1">{expert.name}</h4>
                        <p className="text-muted mb-2">{expert.title}</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <FiStar className="text-warning me-1" />
                        <span className="fw-bold me-1">{expert.rating}</span>
                        <span className="text-muted">({expert.reviews})</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      {expert.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          bg="light"
                          text="dark"
                          className="me-2 mb-2 py-2 px-3 rounded-pill"
                          style={{ backgroundColor: "#f0f0f0" }}
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Row className="g-2">
                        <Col xs={12} md={6}>
                          <Button
                            variant="outline-secondary"
                            className="w-100 d-flex align-items-center justify-content-center"
                          >
                            <FiUser className="me-2" /> View Profile
                          </Button>
                        </Col>
                        <Col xs={12} md={6}>
                          <Button
                            variant={expert.available ? "success" : "secondary"}
                            className="w-100 d-flex align-items-center justify-content-center"
                            style={{
                              backgroundColor: expert.available
                                ? "#4CAF50"
                                : "#8bc34a",
                            }}
                          >
                            <FiCalendar className="me-2" />
                            {expert.available
                              ? "Book Consultation"
                              : "Book Later"}
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default AgriculturalExperts;
