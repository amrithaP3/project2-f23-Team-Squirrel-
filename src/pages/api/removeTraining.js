import deleteTraining from '../../../server/mongodb/actions/deleteTraining.js';

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            const { trainingId } = req.query;
            await deleteTraining(trainingId);
            res.status(200).json({ message: 'Training deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete training" });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
