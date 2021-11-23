import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'



const userDetails = async (req, res) => {
    const { id } = req.query
    try {
        const user = await User.findOne({ id })
        return !user ?
            res.status(500).json("user not exit") :
            res.status(200).json(user)
        // if (!user) {
        //     return res.status(500).json("User not exit")
        // } else {
        //     return res.status(200).json(user)
        // }
    } catch (error) {
        console.log(error)
    }
}

export default userDetails