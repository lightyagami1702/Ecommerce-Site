import express from "express";
import { requireSignIn, forAdmin } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controller/categoryController.js";
const router = express.Router();

//routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  forAdmin,
  createCategoryController
);
//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  forAdmin,
  updateCategoryController
);

//get All category
router.get("/get-category", categoryController);
//single category
router.get("/single-category/:slug", singleCategoryController);
//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  forAdmin,
  deleteCategoryController
);
export default router;
