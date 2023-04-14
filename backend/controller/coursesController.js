import Course from "../models/coursemodel.js";
import asyncHandler from "express-async-handler";
export const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});

  if (courses) {
    res.json({
      courses,
    });
  } else {
    res.status(401);
    throw new Error("No data");
  }
});
