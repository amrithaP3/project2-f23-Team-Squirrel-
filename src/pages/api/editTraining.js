import updateTrainingLog from '../../../server/mongodb/actions/updateTrainingLog';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const data = req.body;
            const updatedLog = await updateTrainingLog(data);
            res.status(200).json({ message: 'Training log updated successfully', updatedLog });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
