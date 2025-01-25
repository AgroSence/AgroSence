import { useState } from "react";
import OrderTable from "../components/product/OrderTable";
import Layout from "../components/dashboard/Layout";

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    {
      id: "15267",
      date: "Mar 1, 2023",
      item: "RICE",
      price: "200",
      qty: 1,
      subtotal: "200",
    },
    {
      id: "12436",
      date: "Feb 12, 2033",
      item: "SWEET PATATO",
      price: "100",
      qty: 2,
      subtotal: "300",
    },
    {
      id: "16879",
      date: "Jan 26, 2023",
      item: "COTTON",
      price: "500",
      qty: 1,
      subtotal: "500",
    },
    {
      id: "14334",
      date: "Mar 7, 2021",
      item: "TOMATO",
      price: "200",
      qty: 3,
      subtotal: "600",
    },
    {
      id: "11445",
      date: "Jan 17, 2023",
      item: "STRAWBERRY",
      price: "100",
      qty: 2,
      subtotal: "200",
    },
    {
      id: "23567",
      date: "Jan 20, 2020",
      item: "COTTON",
      price: "500",
      qty: 1,
      subtotal: "500",
    },
    {
      id: "65987",
      date: "Sep 17, 2019",
      item: "WHEAT",
      price: "600",
      qty: 1,
      subtotal: "600",
    },
    {
      id: "22459",
      date: "Aug 20, 2022",
      item: "ALMOND",
      price: "100",
      qty: 1,
      subtotal: "100",
    },
    {
      id: "56874",
      date: "Jul 27, 2018",
      item: "SUGARCANE",
      price: "500",
      qty: 3,
      subtotal: "1500",
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
