const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 6
    },
    id: {
        type: String,
        maxlength: 50,
        minlength: 5
    },
    role: {
        type: Number,
        default: 0
    },
    cart : {
        type: Array,
        default:[]
    },
    history : {
        type: Array,
        default:[]
    },
    address : String,
    phone : String,
    post : Number,
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}