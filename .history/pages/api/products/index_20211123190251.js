import connectDB from "../../../services/mongoose.services"

const products = async (req, res) => {
    return res.status(200).json("Products")
}
export default connectDB(products)