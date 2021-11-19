const { Schema, mongoose } = require('mongoose')

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
        default: Date.now
    }
}, { timestamps: true })
mongoose.model = {}

const User = mongoose.model('User', UserSchema)
export default User