import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";
import autRoutes from  "./routes/auth.route.js"


dotenv.config()
const app = express();
app.use(express.json());

app.use("/api/auth" , autRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{ connectDB(), console.log("server Work on Port : " , PORT);
 });


