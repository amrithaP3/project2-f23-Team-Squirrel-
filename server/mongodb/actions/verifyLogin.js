import connectDB from '../index.js';
import User from '../models/User.js';
//TODO: implement bcrypt
//TODO: implement jwt auth

export default async function verifyLogin(data) {
  try {
    await connectDB();
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    if (password == user.password) {
      return user;
    } else {
      throw new Error('Invalid password');
    }
  } catch (error) {
    console.error('Error in verifying login:', error);
    throw new Error('Internal Server Error');
  }
}
