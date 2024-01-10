import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import connectDB from "./config/data.js";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import adminProductRoutes from "./routes/adminProductRoute.js";
import adminOrderRoutes from "./routes/adminOrderRoute.js";
import cartRoutes from "./routes/cartRoute.js";
import cartItemRoutes from "./routes/cartItemRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import ratingRoutes from "./routes/ratingRoute.js";
import reviewRoutes from "./routes/reviewRoute.js";

dotenv.config();
const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Mern app</h1>')
});

app.use("/api/v1/auth", authRoutes, bodyParser.json());
app.use("/api/v1/users", userRoutes, bodyParser.json());
app.use("/api/v1/products", productRoutes, bodyParser.json());
app.use("/api/v1/admin/products", adminProductRoutes, bodyParser.json());
app.use("/api/v1/admin/orders", adminOrderRoutes, bodyParser.json());
app.use("/api/v1/cart", cartRoutes, bodyParser.json());
app.use("/api/v1/cartItems", cartItemRoutes, bodyParser.json());
app.use("/api/v1/orders", orderRoutes, bodyParser.json());
app.use("/api/v1/ratings", ratingRoutes, bodyParser.json());
app.use("/api/v1/reviews", reviewRoutes, bodyParser.json());

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(colors.yellow(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white));
});