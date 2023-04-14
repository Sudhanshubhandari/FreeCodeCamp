import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoute.js"
import courseRoutes from "./routes/coursesRoute.js";
import { errorHandler, notFoundHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/config/google", (req, res) =>
  res.send(process.env.GOOGLE_CLIENT_ID)
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "frontend/build/index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("API is running"));
}


app.use(notFoundHandler);
app.use(errorHandler);
app.listen(5000, console.log("Server running on port 5000"));
