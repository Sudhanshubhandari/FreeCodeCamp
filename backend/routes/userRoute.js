import express from "express";
import {
    authUser,
    googleAuthUser,
    registerUser,
  } from "../controller/UserController.js";
import { protectRoute } from "../middleware/authMiddleware.js";
const router = express.Router();


router.route("/").post(registerUser).get(protectRoute)
router.post('/google', googleAuthUser);
router.post("/login", authUser);
export default router;