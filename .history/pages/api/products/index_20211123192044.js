import connectDB from "../../../services/mongoose.services"
import Product from '../../../models/product.model'

const products = async (req, res) => {
    const products = await Product.find({})

    return res.status(200).json(products)
}
export default connectDB(products)