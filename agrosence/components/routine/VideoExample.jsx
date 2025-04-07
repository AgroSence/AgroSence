"use client"
import { Row, Col, Card } from "react-bootstrap"
import { FaPlay, FaWater, FaSeedling, FaLeaf, FaBug } from "react-icons/fa"

const VideoExampleSection = () => {
  const videos = [
    {
      id: 1,
      title: "Proper Irrigation Techniques",
      description: "Learn the most efficient watering methods to conserve water while maximizing crop health.",
      videoId: "Z9HAy9EYKKs?si=x2TPxA0uhTixlXSX", // Replace with real YouTube IDs
      duration: "8:24",
      icon: <FaWater />,
    },
    {
      id: 2,
      title: "Seasonal Fertilization Guide",
      description: "Detailed walkthrough of when and how to apply different fertilizers throughout the growing season.",
      videoId: "siel1Bt6tP0?si=jR4vbZZttbffUSn0",
      duration: "12:05",
      icon: <FaSeedling />,
    },
    {
      id: 3,
      title: "Efficient Harvesting Methods",
      description: "Techniques to harvest crops at the optimal time while minimizing damage and maximizing yield.",
      videoId: "IYLMyVpoxo8?si=jLy43Uq-jYQNojtf",
      duration: "10:17",
      icon: <FaLeaf />,
    },
    {
      id: 4,
      title: "Integrated Pest Management",
      description: "Environmentally friendly approaches to managing pests and diseases in your crops.",
      videoId: "-c6OuXMSWeE?si=sw-abtL-QYvjSq5P",
      duration: "15:42",
      icon: <FaBug />,
    },
  ]

  return (
    <Row>
      {videos.map((video) => (
        <Col lg={4} className="mb-4" key={video.id}>
          <Card className="h-100 shadow-sm border-success">
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <Card.Body>
              <Card.Title className="d-flex align-items-center">
                <span className="text-success me-2">{video.icon}</span> {video.title}
              </Card.Title>
              <Card.Text>{video.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {/* Featured Video Section */}
      {/* <Col xs={12} className="mt-4">
        <Card className="border-success">
          <Card.Header className="bg-success text-white">
            <h3 className="mb-0">Featured Video: Complete Daily Farm Routine</h3>
          </Card.Header>
          <Card.Body>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your featured video ID
                title="Featured Daily Farm Routine"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-3">
              <h4>Complete Farm Daily Routine Walkthrough</h4>
              <p>
                This comprehensive video guides you through a complete day on a productive farm, from sunrise to sunset.
              </p>
              <p>
                Topics covered include early morning inspections, optimal watering times, efficient harvesting techniques,
                midday maintenance tasks, afternoon fertilization, and evening preparations for the next day.
              </p>
            </div>
          </Card.Body>
        </Card>
      </Col> */}
    </Row>
  )
}

export default VideoExampleSection
