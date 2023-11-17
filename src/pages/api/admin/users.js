import User from '../../../../server/mongodb/models/User.js';
import connectDB from "../../../../server/mongodb/index.js";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === 'GET') {
        try {
            // Fetch all users without returning their passwords
            const users = await User.find().select('-password');
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
