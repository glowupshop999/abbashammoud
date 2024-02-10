const mongoose = require("mongoose");
require("dotenv").config();
//bring the funtion global one
exports.connectDB = async () => {
try{
    // stop block for excute
    await mongoose.connect(process.env.MongoDB_URI);
    console.log("MongoDb connected !!");

}catch(err){
    console.error(err);
    process.exit(1);
}


}