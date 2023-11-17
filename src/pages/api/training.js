import createTraining from "../../../server/mongodb/actions/createTraining.js"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await createTraining(req.body)
        } catch (e) {
            return res.status(500).send("Failed")
        }
        return res.status(200).send("Success")
    }
}