import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        // console.log(mongoose.connection.readyState);
        // console.log('connected................');
        return mongoose.connection.readyState
    }
    catch (err) {
        throw new Error("Connection failed and ", err as ErrorOptions)
    }
}

export default connect