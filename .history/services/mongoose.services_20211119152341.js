import mongoose from 'mongoose'

mongoose
    .connect(process.env.mongodburl)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name:"${x.connections[0].name}"`
        )
    })

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        console.log("connection success")
        return handler(req, res)
    }

    await mongoose.connect(process.env.mongodburl, {
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
        // useNewUrlParser: true,
    })
    return handler(req, res)
}
export default connectDB