import deleteUser from '../../../server/mongodb/actions/deleteUser.js';

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            const { userId } = req.query;
            await deleteUser(userId);
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete user" });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
