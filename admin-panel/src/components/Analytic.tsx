import React, { useEffect, useState } from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:5000/api/orders", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
                }

                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>📦 Order Management</h1>

            {loading ? (
                <p>Loading orders...</p>
            ) : (
                <div style={{ overflowX: "auto" }}>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            border: "1px solid #ddd",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                                <th style={thStyle}>Order ID</th>
                                <th style={thStyle}>Crop</th>
                                <th style={thStyle}>Category</th>
                                <th style={thStyle}>Quantity</th>
                                <th style={thStyle}>Price</th>
                                <th style={thStyle}>Seller</th>
                                <th style={thStyle}>Buyer</th>
                                <th style={thStyle}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id} style={{ borderBottom: "1px solid #ddd", textAlign: "left" }}>
                                        <td style={tdStyle}>{order._id.slice(-6).toUpperCase()}</td>
                                        <td style={tdStyle}>{order.cropId?.cropName || "N/A"}</td>
                                        <td style={tdStyle}>{order.cropId?.cropCategory || "N/A"}</td>
                                        <td style={tdStyle}>
                                            {order.cropId?.cropQuantity} {order.cropId?.cropUnit}
                                        </td>
                                        <td style={tdStyle}>₹{order.cropId?.cropSellingPrice}</td>
                                        <td style={tdStyle}>{order.sellerId?.name || "N/A"}</td>
                                        <td style={tdStyle}>{order.buyerId?.name || "N/A"}</td>
                                        <td style={{ ...tdStyle, fontWeight: "bold", color: getStatusColor(order.status) }}>
                                            {order.status}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" style={{ textAlign: "center", padding: "15px" }}>
                                        No orders available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

// 🟢 Status Color Function
const getStatusColor = (status) => {
    switch (status) {
        case "Accepted":
            return "green";
        case "Pending":
            return "orange";
        case "Rejected":
            return "red";
        default:
            return "black";
    }
};

// 🏗️ Table Header Style
const thStyle = {
    padding: "12px",
    borderBottom: "2px solid #ddd",
};

// 📦 Table Data Style
const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
};

export default OrderList;
