const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const OrdersController = require ('../controllers/orders');

// Handle incoming GET requests to /orders
router.get("/", checkAuth, OrdersController.get_all_orders);

router.post("/", checkAuth, OrdersController.create_order);

router.get("/:orderId", OrdersController.get_order);

router.patch("/:orderId", OrdersController.update_order);

router.delete("/:orderId", checkAuth, OrdersController.delete_order);

module.exports = router;
