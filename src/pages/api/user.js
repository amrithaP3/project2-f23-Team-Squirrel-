import createUser from "../../../server/mongodb/actions/createUser.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      const user = await createUser(req.body);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}