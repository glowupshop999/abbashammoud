const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postOwner:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
img: {
    type: String,
    default: "",
    maxlength:1000,
},
video: {
    type: String,
    default: "",
},

likes: [
    {
        type: Schema.Types.ObjectId,
        ref:"User",
},
],
comments: [
    {
        type: Schema.Types.ObjectId,
        ref:"Comment",
},
],
},
{timestamps: true}
);
module.exports = mongoose.model("Post", postSchema);