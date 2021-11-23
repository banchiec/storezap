const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
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

const global.User = global.User || model("User", UserSchema)
export default global.User