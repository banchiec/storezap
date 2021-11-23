import connectDB from "../../../services/mongoose.services"


const details = (req, res) => {

    console.log(req)
    res.send(req.id)

}

export default details