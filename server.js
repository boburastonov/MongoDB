import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

const MongoURI = process.env.MONGO_URI;

// MongoDB ni ulash
mongoose
  .connect(MongoURI)
  .then(() => console.log("MongoDB ga ulanish muvaffaqiyatli!"))
  .catch((err) => console.error("MongoDB ga ulanishda xatolik:", err));

app.use("/users", userRoutes);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi! http://localhost:${PORT}`);
});
