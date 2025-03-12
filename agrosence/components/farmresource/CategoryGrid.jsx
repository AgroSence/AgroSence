import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <Row className="g-4">
      {categories.map((category) => (
        <Col key={category._id} xs={12} sm={6} md={4} lg={4} xl={4}>
          <CategoryCard category={category} />
        </Col>
      ))}
    </Row>
  );
};

export default CategoryGrid;
