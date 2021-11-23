import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

export const index = async (req, res) => {
    User.find()
        .then((users) => {
            console.log(users)
        })
        .catch((error) => console.log(error))
    res.send("usuarios")
}
export default connectDB(index)
