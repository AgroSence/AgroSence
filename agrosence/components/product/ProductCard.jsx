import { BsCartPlus } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const { name, price, location, image } = product

  return (
    <div className="card h-100 border-0 shadow-lg p-1 ">
      <div className="position-relative p-1">
        <img
          src={image || "/placeholder.svg"}
          className="card-img-top"
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2 fw-bold fs-4">{name}</h5>
        <p className="card-text text-success fw-bold mb-2">₹ {price}/kg</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="text-muted">
            <small>
              <i className="bi bi-geo-alt me-1"></i>
              <FaLocationDot size={18} /> {location}
            </small>
          </div>
          <button className="btn btn-success rounded-circle p-2">
            <BsCartPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

