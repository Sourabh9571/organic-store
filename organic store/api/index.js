import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import cookieParser from 'cookie-parser';


import authRouter from './Routes/auth.js'
import categoriesRouter from './Routes/category.js';
import productRouter from './Routes/product.js';
import imageRouter from './Routes/image.js'
import trendingProudctRouter from './Routes/trendingproduct.js';
import sellingProductRouter from './Routes/sellingproducts.js';
import bestSellingProductRouter from './Routes/bestsellingproducts.js';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(cookieParser());


app.use("/api/auth",authRouter);
app.use("/api/categories",categoriesRouter);
app.use("/api/products",productRouter);
app.use("/api/image",imageRouter);
app.use("/api/trendingproducts",trendingProudctRouter);
app.use("/api/sellingproducts",sellingProductRouter);
app.use("/api/bestsellingproducts",bestSellingProductRouter);





app.listen(8888,()=>{
    console.log("Server is running");
});