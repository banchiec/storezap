import connectDB from "../../services/mongoose.services"
import User from '../../models/user.model'

const loginUser = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, password } = req.body
        console.log(name, email, password)
        console.log(req.method)
        if (name && email && password) {
            try {
                const user = new User({
                    name,
                    email,
                    password
                })
                const usercreated = await user.save()
                return res.status(200).send(usercreated)
            } catch (error) {
                return res.status(500).send(error)
            }
        } else {
            res.status(422).send('data_imcomplete')
        }
    }
    else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(loginUser)