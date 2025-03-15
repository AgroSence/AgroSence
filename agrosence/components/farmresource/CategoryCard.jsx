import { Card } from "react-bootstrap"

const CategoryCard = ({ category }) => {
  return (
    <Card className="h-100 category-card border-0 shadow-sm">
      <div className="card-img-container" style={{ height: "200px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={category.image 
            ? `http://localhost:5000/uploads/${category.image}` 
            : "NO image Found"
          }          
          alt={category.name}
          className="img-fluid"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <Card.Body className="text-center bg-light py-3">
        <Card.Title className="fw-bold mb-0">{category.name}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CategoryCard

