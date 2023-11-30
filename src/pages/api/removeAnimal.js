import deleteAnimal from '../../../server/mongodb/actions/deleteAnimal.js';

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            const { animalId } = req.query;
            await deleteAnimal(animalId);
            res.status(200).json({ message: 'Animal deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete animal" });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}