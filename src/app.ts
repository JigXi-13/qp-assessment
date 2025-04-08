import express, { Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import adminRoutes from "./routes/admin.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("GET / hit!");
  res.status(200).send("Grocery Booking API is live!");
});

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

export default app;
