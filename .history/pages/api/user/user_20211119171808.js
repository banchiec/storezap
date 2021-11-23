import connectDB from "../../../services/mongoose.services"
import User from '../../../models/user.model'

const loginUser = (req, res) => {
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
                // const usercreated = user.save()

                User
                    .create(user)
                    .then((data) => {
                        console.log(data)
                        return res.status(200).send(data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            } catch (error) {
                return res.status(500).send(error)
            }
        } else {
            res.status(422).send('data_imcomplete')
        }
    }
    else if (req.method === "GET") {
        console.log("este metodo es get")
        res.send("Este metodo es Get")
    }
    else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(loginUser)