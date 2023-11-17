import Training from '../../../../server/mongodb/models/Training.js';
import connectDB from "../../../../server/mongodb/index.js";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === 'GET') {
        try {
            const training = await Training.find();
            res.status(200).json(training);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
