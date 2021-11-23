const { mongoose, Schema } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    since: {
        type: Date,
        default: Date.now()
    }
})

global.User = global.User || model("User", UserSchema)
module.exports = global.User