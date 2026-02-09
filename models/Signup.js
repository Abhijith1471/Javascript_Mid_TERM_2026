const { type } = require("node:os");

//models/Signup.js
const mongoose = required("mongoose");

const signupSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
    notes: { type: String},
    createdAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model("Signup", signupSchema)