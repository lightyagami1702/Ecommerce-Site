import express from "express";
import { forAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productFilterController,
  productPhotoController,
  updateProductController,
} from "../controller/productController.js";
import formidable from "express-formidable";
const router = express.Router();
//routes
router.post(
  "/create-product",
  requireSignIn,
  forAdmin,
  formidable(),
  createProductController
);
//Update routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  forAdmin,
  formidable(),
  updateProductController
);
//get Products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete Product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.get("/product-filter", productFilterController);
export default router;
