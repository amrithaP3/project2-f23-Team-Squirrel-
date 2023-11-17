
import connectDB from '../../../../server/mongodb/index.js'; 
import User from '../../../../server/mongodb/models/User.js'; 

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    await connectDB();
    
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && user.password == password) {
      return res.status(200).json({
        userId: user._id,
        admin: user.admin || false,
      });
    } else {
      return res.status(500).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error in verify API:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
