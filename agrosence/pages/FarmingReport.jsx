import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/dashboard/Layout";

const MarketAccessHistory = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const userId = localStorage.getItem("userId");

        if (!token || !userId) {
          console.error("No auth token or user ID found");
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/auth/users/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:5000/api/orders/user/${user._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <Layout>
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title fs-3">Farming Report and Order Status</h5>
          <p className="text-muted small">Your transaction history</p>

          <div
            className="list-group list-group-flush overflow-auto"
            style={{ maxHeight: "400px" }}
          >
            {orders.length > 0 ? (
              orders
                .filter((order) => order.status !== "Accepted") // 🔹 Hide Accepted Orders
                .map((order, index) => (
                  <div
                    key={index}
                    className="list-group-item border-0 px-0 py-2 d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center">
                      <div>
                        <strong>Order ID:</strong> {order._id} <br />
                        <strong>Date:</strong>{" "}
                        {new Date(order.createdAt).toLocaleDateString()} <br />
                        <strong>Type:</strong> {order.status} <br />
                        <strong>Crop:</strong> {order.cropId?.cropName} <br />
                        <strong>Quantity:</strong> {order.quantity}{" "}
                        {order.cropId?.cropUnit} <br />
                        <strong>Price:</strong> {order.cropId?.cropSellingPrice}{" "}
                        ₹ <br />
                        {order.status === "Accepted" && (
                          <strong>
                            {user._id === order.sellerId._id
                              ? `Buyer: ${order.buyerId.name}`
                              : `Seller: ${order.sellerId.name}`}
                          </strong>
                        )}
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-center text-muted">
                No market access history available.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MarketAccessHistory;
