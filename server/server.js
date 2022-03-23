
const express =require("express");
const app = express();
const dotenv=require("dotenv");
const connectDatabase=require('./config/MongoDb');
const  ImportData =require("./DataImport.js");
const  productRoute =require("./Routes/ProductRoutes.js");
const { errorHandler, notFound } =require("./Middleware/Errors.js");
const userRouter =require ("./Routes/UserRoutes.js");
const orderRouter =require("./Routes/orderRoutes.js");

dotenv.config();

connectDatabase();
// const products=require('./data/Products');

// app.get("/",(req,res)=>{
//     res.send("api is running");
// });
// app.get("/api/products",(req,res)=>{
//     res.json(products);
// });
// app.get("/api/products/:id",(req,res)=>{
//     const product =products.find((p)=>p.id===req.params.id);
//     res.json(product);
// });


app.use(express.json());


// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
// app.get("/api/config/paypal", (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID);
// });

// ERROR HANDLER
app.use(notFound); 
app.use(errorHandler);

const port =process.env.PORT||1000
app.listen(port,console.log( ` server running on port ${port}`));