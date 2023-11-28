import connectDB from '../index.js';
import User from '../models/User.js';
//TODO: implement bcrypt
//TODO: implement jwt auth

export default async function verifyLogin(data) {
  try {
    const { email, password } = data;
    await connectDB();
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const existingHash = user.password;
    const verified = password == user.password

    if (verified) {
      return user;
    } else {
      throw new Error('Invalid password');
    }
  } catch (error) {
    console.error('Error in verifying login:', error);
    throw new Error('Internal Server Error');
  }
}
