import connectDB from "../index.js"
import User from "../models/User.js"

export default async function createUser(data) {
    try {
        await connectDB()
        const user = new User(data)
        await user.save()
        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Unable to create user");
    }
}