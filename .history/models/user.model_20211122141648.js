const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
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
export default global.User