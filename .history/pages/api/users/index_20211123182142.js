import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

export const allUsers = (req, res) => {
    fetch('https://fakestoreapi.com/users')
        .then(res => {
            return res.status(500).send(res.json())
        })
        .catch(error => console.log(error))
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
