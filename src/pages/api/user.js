import createUser from "../../../server/mongodb/actions/createUser.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
    await createUser(req.body)   
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Failed to create user" });
    }
  }

  // Handle other HTTP methods
  return res.status(200).send("Sucess"); // Method Not Allowed
}
