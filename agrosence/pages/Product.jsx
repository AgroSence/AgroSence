import ProductGrid from "../components/product/ProductGrid";
import Layout from "../components/dashboard/Layout";
const Products = () => {
  const products = [
    {
      name: "Rice",
      price: "20",
      location: "Mehsana",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Potato",
      price: "20",
      location: "Mehsana",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Corn",
      price: "50",
      location: "Ahmedabad",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Strawberry",
      price: "40",
      location: "Rajkot",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Wheat",
      price: "50",
      location: "Patan",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Cotton",
      price: "60",
      location: "Vadodara",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <Layout>
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Products</h4>
        </div>
        <ProductGrid products={products} />
      </div>
    </Layout>
  );
};

export default Products;
