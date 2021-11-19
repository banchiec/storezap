import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

export const index = async (req, res) => {
    res.send("usuarios")

}
