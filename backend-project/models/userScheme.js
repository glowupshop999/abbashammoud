const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First Name is Requid"],
        trim: true,
        minLength:3,
        maxLength: 50,

    },
    lastName:{
        type: String,
        required: [true, "First Name is Requid"],
        trim: true,
        minLength:3,
        maxLength: 50,
    },
    username: {
        type: String,
        unique: true,
        required: [true, "Useername is required"],
        trim: true,
        maxLength: 20,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"],
        trim: true,
        maxLength: 150,
        lowercase: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: [true, "Useername is required"],
        trim: true,
        maxLength: 20,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
],
followers: [
    {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
],
following: [
    {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
],

},
{timestamps: true}
);
//only one user
module.exports = mongoose.model("User", userSchema)


