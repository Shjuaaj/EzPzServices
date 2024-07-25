import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import serviceRouter from "./routes/serviceRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
// app config
const app = express()

// middleware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
        credentials: true,
}))

// db connection
connectDB();

// api endpoint
app.use("/api/service", serviceRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("Working")
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})