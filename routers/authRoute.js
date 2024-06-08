import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  getOrdersController,
  getAllOrdersController,
  updateProfileController,
  orderStatusController,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

// router object
const router = express.Router();

//routing
//Register || methods post
router.post("/register", registerController);

//login || post method
router.post("/login", loginController);

//forget password || post
router.post("/forgot-password", forgotPasswordController);

//test constroller || get method
router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth
router.get("/admin-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default router;
