const express = require("express");
const router = express.Router();
const Order = require("../models/OrderModel");
const Crop = require("../models/CropModel");

// ✅ Get Orders for a Specific User (Seller or Buyer)
router.get("/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid User ID format" });
        }

        const orders = await Order.find({
            $or: [{ sellerId: userId }, { buyerId: userId }],
        })
            .populate("cropId", "cropName cropUnit cropQuantity cropCategory cropSellingPrice")
            .populate("sellerId", "name")
            .populate("buyerId", "name");

        if (!orders.length) {
            return res.status(200).json([]); // Return empty array instead of error
        }

        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

// ✅ Update Order Status (Accept/Reject)
router.put("/:orderId/status", async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        if (!orderId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid Order ID format" });
        }

        const order = await Order.findById(orderId).populate("cropId");
        if (!order) return res.status(404).json({ message: "Order not found" });

        // ✅ If rejected, delete order
        if (status === "Rejected") {
            await Order.findByIdAndDelete(orderId);
            return res.json({ message: "Order rejected and removed", orderId });
        }

        // ✅ Update order status
        order.status = status;
        await order.save();

        // ✅ If accepted, update the crop status directly in MongoDB
        if (status === "Accepted") {
            const cropId = order.cropId._id;
            const crop = await Crop.findById(cropId);
            if (crop) {
                crop.cropStatus = "Sold";
                await crop.save();
                console.log("✅ Crop status updated to Sold");
            } else {
                console.error("🚨 Crop not found for status update");
            }
        }

        res.json({ message: `Order ${status.toLowerCase()} successfully`, order });
    } catch (error) {
        console.error("🚨 Server Error:", error);
        res.status(500).json({ message: "Server Error", error });
    }
});

// ✅ GET - Fetch all orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("buyerId", "name email phone")
            .populate("sellerId", "name email phone")
            .populate("cropId", "cropName cropUnit cropType cropQuantity cropCategory cropSellingPrice");

        if (!orders.length) {
            return res.status(404).json({ message: "No orders found" });
        }

        res.json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


router.get("/user/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const orders = await Order.find({
        $or: [{ buyerId: userId }, { sellerId: userId }],
      }).populate("cropId").populate("buyerId", "name").populate("sellerId", "name");
  
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  });
  
module.exports = router;