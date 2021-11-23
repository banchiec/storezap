import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

export const allUsers = async (req, res) => {
    const dataUsr = await fetch('https://fakestoreapi.com/users')
        .then(data => {
            return res.status(500).send(data.json())
        })
        .catch(error => {
            return res.send(error)
        })
    return res.send(dataUsr)
    // if (req.method === "GET") {
    //     try {
    //         const users = await User.find({})
    //         return res.status(200).json(users)
    //     } catch (error) {
    //         return res.status(500).json(error)
    //     }
    // } else {
    //     return res.status(500).json("re_method_not_supported")
    // }
}
export default connectDB(allUsers)
