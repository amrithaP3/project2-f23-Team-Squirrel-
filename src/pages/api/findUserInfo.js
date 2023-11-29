import findUserById from "../../../server/mongodb/actions/findUserById.js"

export default async function handler(req, res) {
    if (req.method == "GET") {
        try {
            const result = await findUserById(req.query)
            return res.status(200).send(result)
        } catch (e) {
            return res.status(500).send("Failed")
        }
    }
}

