import connectDB from "../../../services/mongoose.services"


const details = (req, res) => {
    res.end(req)
}

export default connectDB(details)