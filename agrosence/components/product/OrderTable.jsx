import { BsX } from "react-icons/bs"

const OrderTable = ({ orders, onDeleteOrder }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="bg-light">
          <tr>
            <th>ORDER ID</th>
            <th>DATE</th>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.date}</td>
              <td>{order.item}</td>
              <td>{order.price}/Kg</td>
              <td>{order.qty}</td>
              <td>{order.subtotal}</td>
              <td>
                <button className="btn btn-link text-danger p-0" onClick={() => onDeleteOrder(order.id)}>
                  <BsX size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable

