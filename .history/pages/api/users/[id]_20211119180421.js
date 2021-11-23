import connectDB from "../../../services/mongoose.services"


const details = (req, res) => {
    console.log(req)
    res.end(req)
}

export default connectDB(details)