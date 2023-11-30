import connectDB from '../index.js';
import User from '../models/User.js';

export default async function deleteUser(userId) {
    try {
        await connectDB();
        await User.findByIdAndDelete(userId);
    } catch (e) {
        console.log(e);
        throw new Error("Unable to delete user");
    }
}
