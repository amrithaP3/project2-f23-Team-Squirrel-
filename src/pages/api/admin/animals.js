import Animal from '../../../../server/mongodb/models/Animal.js';
import connectDB from "../../../../server/mongodb/index.js";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === 'GET') {
        try {
            const animals = await Animal.find();
            res.status(200).json(animals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
