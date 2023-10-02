import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controller/authController.js";
import { forAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();
//routing
//register method post
router.post("/register", registerController);
//login
router.post("/login", loginController);
//forgot Password
router.post("/forgot-password", forgotPasswordController);
//test
router.get("/test", requireSignIn, forAdmin, testController);
//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, forAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
