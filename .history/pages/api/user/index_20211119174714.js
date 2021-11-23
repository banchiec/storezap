import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

export const index = (req, res) => {
    User.find()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
}
export default connectDB(index)
