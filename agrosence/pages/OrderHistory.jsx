import { useState } from "react";
import OrderTable from "../components/product/OrderTable";
import Layout from "../components/dashboard/Layout";

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    {
      id: "15267",
      date: "Mar 1, 2023",
      type: "SELL",
      item: "RICE",
      price: "200",
      qty: 1,
      subtotal: "20000",
    },
    {
      id: "12436",
      date: "Feb 12, 2033",
      type: "BUY",
      item: "SWEET PATATO",
      price: "100",
      qty: 2,
      subtotal: "30000",
    },
    {
      id: "16879",
      date: "Jan 26, 2023",
      type: "SELL",
      item: "COTTON",
      price: "500",
      qty: 1,
      subtotal: "50000",
    },
    {
      id: "14334",
      date: "Mar 7, 2021",
      type: "SELL",
      item: "TOMATO",
      price: "200",
      qty: 3,
      subtotal: "60000",
    },
    {
      id: "11445",
      date: "Jan 17, 2023",
      type: "BUY",
      item: "STRAWBERRY",
      price: "100",
      qty: 2,
      subtotal: "150000",
    },
    {
      id: "23567",
      date: "Jan 20, 2020",
      type: "BUY",
      item: "COTTON",
      price: "500",
      qty: 1,
      subtotal: "50000",
    },
    {
      id: "65987",
      date: "Sep 17, 2019",
      type: "BUY",
      item: "WHEAT",
      price: "600",
      qty: 1,
      subtotal: "60000",
    },
    {
      id: "22459",
      date: "Aug 20, 2022",
      type: "SELL",
      item: "ALMOND",
      price: "100",
      qty: 1,
      subtotal: "200000",
    },
    {
      id: "56874",
      date: "Jul 27, 2018",
      type: "SELL",
      item: "SUGARCANE",
      price: "500",
      qty: 3,
      subtotal: "70000",
    },
  ]);

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <Layout>
      <div className="container-fluid p-4">
        <h2 className="mb-4">Order History</h2>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <OrderTable orders={orders} onDeleteOrder={handleDeleteOrder} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderHistory;
