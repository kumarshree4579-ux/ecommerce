import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import UserRoute from "./routes/userRoute.js"
import ProductRoute from "./routes/productRoute.js";
dotenv.config();  
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;

// Routes==============
app.get("/",(req,res)=>{
    res.send(" health API is running....");
})

app.use("/api/user",UserRoute)
app.use("/api/product", ProductRoute)

app.listen(PORT, () => {
    connectDB()
  console.log("server is running... Port : ", PORT);
});
