import connectDB from "../index.js"
import User from "../models/User.js"

export default async function readUsers(data) {
    try {
        await connectDB()
        return await Ticket.find();
    } catch (e) {
        console.log(e)
        throw new Error("Unable to read userId.")
    }
}