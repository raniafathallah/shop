const express =require("express");
const User =require("./Models/UserModel.js");
const users =require("./data/users.js");
const Product =require("./Models/ProductModel.js");
const products =require ("./data/Products.js");
const asyncHandler=require("express-async-handler");

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

//export default ImportData;
module.exports=ImportData;