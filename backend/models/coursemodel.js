import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseTitle: {
    type: String,
    required: true,
  },
  courseType: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
