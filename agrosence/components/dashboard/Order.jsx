const MostOrdered = () => {
  const foods = [
    {
      name: "Coconut",
      price: "IDR 45.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-XKQdig21vNE0qS7fPEfMwhSFK46kaf.png",
    },
    {
      name: "Rice",
      price: "IDR 75.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-XKQdig21vNE0qS7fPEfMwhSFK46kaf.png",
    },
    {
      name: "Wheat",
      price: "IDR 45.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-XKQdig21vNE0qS7fPEfMwhSFK46kaf.png",
    },
    {
      name: "Cotton",
      price: "IDR 45.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-XKQdig21vNE0qS7fPEfMwhSFK46kaf.png",
    },
    {
      name: "Tomato",
      price: "IDR 45.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-XKQdig21vNE0qS7fPEfMwhSFK46kaf.png",
    },
    {
      name: "Onion",
      price: "IDR 75.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-XKQdig21vNE0qS7fPEfMwhSFK46kaf.png",
    },
    {
      name: "Potato",
      price: "IDR 45.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-XKQdig21vNE0qS7fPEfMwhSFK46kaf.png",
    },
  ]

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">Most Ordered Food</h5>
        <p className="text-muted small">Adipiscing elit, sed do eiusmod tempor</p>

        <div className="list-group list-group-flush overflow-auto" style={{ maxHeight: "400px" }}>
          {foods.map((food, index) => (
            <div
              key={index}
              className="list-group-item border-0 px-0 py-2 d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img
                  src={food.image || "/placeholder.svg"}
                  alt={food.name}
                  className="rounded-circle me-3"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <span className="text-truncate">{food.name}</span>
              </div>
              <span className="text-muted ms-2">{food.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MostOrdered

