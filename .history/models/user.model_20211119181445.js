const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        Unique: true,
        required: true
    },
    email: {
        type: String,
        Unique: true,
        required: true
    },
    password: {
        type: String,
        Unique: true,
        required: true
    },
    since: {
        type: Date,
        default: Date.now()
    }
})

global.User = global.User || model("User", UserSchema)
export default global.User