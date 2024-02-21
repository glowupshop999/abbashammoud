const express = require('express');
const app = express();

//no() for no excute in connectDB

const DB = require("./database").connectDB;

DB();
//respond must be json and req also jason
//midlwar run auto without calling it on every req or rep

app.use(express.json())

//built in fn open http port
app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
//implementation 
const Inventory = require('./models/inventory');
const Order = require('./models/order');
const Product = require('./models/product');
const Promotion = require('./models/promotion');
const User = require('./models/user');