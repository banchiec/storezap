import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

const createUser = async (req, res) => {
    if (req.method === 'POST') {

        const { name, email, password } = req.body

        if (name && email && password) {
            try {

                // check is exist User
                const user = await User.findOne({ email })

                if (!user) {
                    const newUser = new User({ name, email, password })
                    await User
                        .create(newUser)
                        .then((data) => {
                            return res.status(200).json(data)
                        })
                        .catch((error) => {
                            return res.status(500).json(error)
                        })
                }
                else {
                    return res.status(500).json("Usuario ya registrado")
                }

            } catch (error) {
                return res.status(500).json(error)
            }
        } else {
            res.status(422).json('data_imcomplete')
        }
    }
    else {
        res.status(422).send('req_method_not_supported')
    }
}
export default connectDB(createUser)