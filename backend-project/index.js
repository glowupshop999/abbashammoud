const express = require('express');
const app = express();
// no () for no excute in connectDB
const DB = require("./database1").connectDB;

DB();

//respond must be json and req also jason
//midlware run auto without calling it on every req or rep
app.use(express.json())
//built in fn open http port
app.listen(3000,() => {
console.log("server is running on port 3000");
} );