import verifyLogin from "../../../../server/mongodb/actions/verifyLogin.js"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const verified = await verifyLogin(req.body); // requesting verification from /api/verifyLogin
    return res.status(200).json({success: true, message: verified})

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });

  }
}