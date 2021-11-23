import connectDB from "../../../services/mongoose.services"


const details = (req, res) => {
    res.send(req)
}

export default connectDB(details)