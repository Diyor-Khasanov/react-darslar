import express from "express";
import { verifyToken, isAdmin } from "../middleware/auth.js";

const router = express.Router();

// Public route
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ]);
});

// Protected route
router.post("/", verifyToken, isAdmin, (req, res) => {
  res.json({ msg: "Product created by admin" });
});

export default router;
