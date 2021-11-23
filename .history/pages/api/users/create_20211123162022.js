import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

const createUser = async (req, res) => {
    if (req.method === 'POST') {

        const { name, email, password } = req.body

        if (name && email && password) {
            try {
                const user = new User({ name, email, password })
                await User
                    .create(user)
                    .then((data) => {
                        console.log(data)
                        return res.status(200).json(data)
                    })
                    .catch((error) => {
                        res.status(500).json(error)
                    })
            } catch (error) {
                return res.status(500).json(error)
            }
        } else {
            res.status(422).json('data_imcomplete')
        }
    }
    else {
        res.status(422).json('req_method_not_supported')
    }
}
export default connectDB(createUser)