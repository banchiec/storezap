import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

const createUser = async (req, res) => {
    if (req.method === 'POST') {

        const { name, email, password } = req.body

        if (name && email && password) {
            try {
                // check is exist User

                const user = await User.findOne({ email })

                console.log(user)
                if (!user) {
                    await User
                        .create(newUser)
                        .then((data) => {
                            console.log(data)
                            return res.status(200).json(data)
                        })
                        .catch((error) => {
                            res.status(500).json(error)
                        })   const newUser = new User({ name, email, password })
                } catch (error) {
                    return res.status(500).json(error)
                }

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