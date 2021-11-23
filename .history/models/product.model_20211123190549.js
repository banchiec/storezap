import { Schema, model } from 'mongoose'

const productSchema = new Schema({

})
const product = model("Product", productSchema)
export default product