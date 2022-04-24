const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        minlength:10,
        maxlength:10,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    posts: {type: [], deafult: []}
}, { timestamps: true });

module.exports = mongoose.model('newUser', userSchema)
