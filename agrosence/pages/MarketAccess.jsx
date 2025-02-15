"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import MarketHero from "../components/marketaccess/MarketHero";
import Sidebar from "../components/marketaccess/MarketAccessSidebar";
import ContentArea from "../components/marketaccess/ContentArea";
import "bootstrap/dist/css/bootstrap.min.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <MarketHero />

      <Container fluid>
        <Row>
          {/* Sidebar - Always Visible After Hero */}
          <Col
            xs={12}
            md={4}
            lg={3}
            className="mt-2 vh-50 overflow-y-auto"
            style={{
              position: "relative",
              top: "0",
              left: "0",
            }}
          >
            <Sidebar />
          </Col>

          {/* Content Area */}
          <Col xs={12} md={8} lg={9} className="content-area px-3 mt-2">
            <ContentArea />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainLayout;
