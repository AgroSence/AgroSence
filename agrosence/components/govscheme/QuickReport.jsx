import { Card } from "react-bootstrap"
import { FaBell, FaNewspaper } from "react-icons/fa"

const QuickReports = () => {
  const news = [
    { id: 1, title: "New Agricultural Scheme Launched", date: "2024-02-01" },
    { id: 2, title: "Farmer Support Program Update", date: "2024-01-30" },
    { id: 3, title: "Crop Insurance Deadline Extended", date: "2024-01-28" },
  ]

  return (
    <Card className="quick-reports">
      <Card.Header className="bg-primary text-white d-flex align-items-center">
        <FaNewspaper className="me-2" />
        <h5 className="mb-0">Quick Reports</h5>
      </Card.Header>
      <Card.Body>
        {news.map((item) => (
          <div key={item.id} className="news-item mb-3 p-2 border-bottom">
            <div className="d-flex align-items-start">
              <FaBell className="me-2 mt-1 text-warning" />
              <div>
                <h6 className="mb-1">{item.title}</h6>
                <small className="text-muted">{item.date}</small>
              </div>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  )
}

export default QuickReports

