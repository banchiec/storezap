import connectDB from "../../services/mongoose.services"
import User from '../../models/user.model'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, password } = req.body
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
                return res.status(500).send(error.message)
            }
        }
    }
    return (
        <div>

        </div>
    )
}
