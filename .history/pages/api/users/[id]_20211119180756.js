import connectDB from "../../../services/mongoose.services"


const details = (req, res) => {

    console.log(req.query)
    res.send(req.id)

}

export default details