import connectDB from "../../../services/mongoose.services"


const details = (req, res) => {
    const { id } = req.query

    console.log(req.query)
    res.send(req.id)

}

export default details