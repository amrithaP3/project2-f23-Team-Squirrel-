import createAnimal from "../../../server/mongodb/actions/createAnimal.js"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await createAnimal(req.body)
        } catch (e) {
            return res.status(500).send("Failed")
        }
        return res.status(200).send("Success")

    } else if (req.method === "PATCH") {
        try {
            await updateAnimalHours(req.body)
        } catch (e) {
            return res.status(500).send("Failed")
        }
        return res.status(200).send("Success")
    }
}