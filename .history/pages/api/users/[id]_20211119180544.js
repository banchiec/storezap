import connectDB from "../../../services/mongoose.services"


const details = (req, res) => {
    console.log(req.id)
    res.send(req.id)

}

export default details