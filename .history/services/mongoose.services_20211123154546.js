import mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        console.log("connection success")
        return handler(req, res)
    }
    await mongoose.connect(process.env.mongodburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        //bufferMaxEntries: 0,
        //useFindAndModify: true,
        // useCreateIndex: true
    })
    return handler(req, res)
}
export default connectDB