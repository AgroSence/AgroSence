import { BsCartPlus } from "react-icons/bs"

const ProductCard = ({ product }) => {
  const { name, price, location, image } = product

  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="position-relative">
        <img
          src={image || "/placeholder.svg"}
          className="card-img-top"
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2">{name}</h5>
        <p className="card-text text-success mb-2">₹ {price}/kg</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="text-muted">
            <small>
              <i className="bi bi-geo-alt me-1"></i>
              {location}
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

