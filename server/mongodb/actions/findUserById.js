import connectDB from "../index.js"
import User from "../models/User.js"

export default async function readUsers(data) {
    try {
        await connectDB()
        const { userId } = data;
        return await User.findById(userId).exec();
    } catch (e) {
        console.log(e)
        throw new Error("Unable to read userId.")
    }
}