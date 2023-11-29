import createUser from "../../../server/mongodb/actions/createUser.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await createUser(req.body);   
      res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
