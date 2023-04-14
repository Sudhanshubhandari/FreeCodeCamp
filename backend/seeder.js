import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import courses from "./data/data.js";
import Course from "./models/coursemodel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Course.deleteMany();

   const insertedCourses = await Course.insertMany(courses);
   console.log("Data Imported")
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};


const destroyData = async () => {
  try {
    await Course.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
