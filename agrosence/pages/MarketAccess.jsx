"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import MarketHero from "../components/marketaccess/MarketHero";
import ProductCards from "../components/marketaccess/CropBuyCard";
import "bootstrap/dist/css/bootstrap.min.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <MarketHero />

      <Container fluid>
          <ProductCards/>
      </Container>
    </>
  );
};

export default MainLayout;
