import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

const userDetails = async (req, res) => {
    const { id } = req.query
    req.method === "GET" ? 

    try {
        const user = await User.findOne({ id })
        return !user ?
            res.status(500).json("user not exit") :
            res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
    :
return res.status(500).json("rq_method_not_required")
}

export default connectDB(userDetails)