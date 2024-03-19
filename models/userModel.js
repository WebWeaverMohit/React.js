const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "username is required"],
        minLength: [3, "username must be at least 3 characters"]
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "email is required"],
        minLength: [3, "email must be at least 3 characters"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [3, "password must be at least 3 characters"],
        maxLength: [15, "password must be at most 15 characters"]   
    },
},
{timestamps: true})

module.exports = mongoose.model("user", userModel)