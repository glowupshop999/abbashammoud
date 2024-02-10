const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendRequestSchema = new Schema({
sender: {
    type: Schema.Types.ObjectId,
    ref: "user",
},

reciever: {
    type: Schema.Types.ObjectId,
    ref: "user",
},
requestStatus:{
    type: String,
    default: "pending",
    enum: ["pending", "accepted", "rejected", "cancelled"]
},

},
{timestamps: true}
);
module.exports = mongoose.model("FriendRequest", friendRequestSchema);