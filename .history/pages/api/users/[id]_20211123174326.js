import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'



const userDetails = async (req, res) => {
    const { id } = req.query
    try {
        const user = await User.findOne({ id })
        console.log(user)

    } catch (error) {
        console.log(error)
    }
    console.log(req.query)
    res.send(id)

}

export default userDetails