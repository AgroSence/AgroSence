import React from 'react';
import { Card } from "react-bootstrap"
import { FaMapMarkerAlt } from "react-icons/fa"

const SchemeCard = ({ state, imageUrl }) => {
  return (
    <Card className="scheme-card mb-3 position-relative overflow-hidden" style={{ minHeight: "150px" }}>
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <FaMapMarkerAlt className="mb-2" size={24} />
        <Card.Title className="text-center fw-bold">{state}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SchemeCard

