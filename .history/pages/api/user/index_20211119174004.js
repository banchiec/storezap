import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

export const index = async (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((error) => console.log(error))
}
export default connectDB(index)
