const mongoose = require('mongoose')


const ClientSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    role: {
        type:String,
        default:'user'
    }
})

const UserModel =mongoose.model('users',ClientSchema)
module.exports = UserModel