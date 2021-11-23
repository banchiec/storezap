import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

export const allUsers = async (req, res) => {
    if (req.method === "GET") {
        try {
            const users = await User.find({})
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(500).json("re_method_not_supported")
    }
    // User.find()
    //     .then((data) => {
    //         res.status(200).json(data)
    //     })
    //     .catch((error) => {
    //         res.status(500).json(error)
    //     })
}
export default connectDB(allUsers)
