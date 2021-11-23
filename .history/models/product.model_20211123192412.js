import { Schema, model } from 'mongoose'

const productSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }

})
global.Product = global.Product || model("Product", productSchema)
export default global.Product