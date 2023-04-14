import express from "express";
import { getCourses } from "../controller/coursescontroller.js";
const router = express.Router();

router.route("/").get(getCourses);
export default router;
