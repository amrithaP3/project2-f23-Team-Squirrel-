
import connectDB from '../../../../index.js'; 
import User from '../../../../models/User.js'; 

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await connectDB();
    
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (user && user.comparePassword(password)) {
      return res.status(200).json({
        userId: user._id,
        isAdmin: user.isAdmin || false,
      });
    } else {
      return res.status(500).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error in verify API:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
