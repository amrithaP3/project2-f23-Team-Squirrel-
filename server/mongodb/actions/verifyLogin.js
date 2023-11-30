import bcrypt from 'bcryptjs';
import connectDB from '../index.js';
import User from '../models/User.js';

export default async function verifyLogin(data) {
  try {
    await connectDB();
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    
    // Use bcrypt's compare function to check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return user;
    } else {
      throw new Error('Invalid password');
    }
  } catch (error) {
    console.error('Error in verifying login:', error);
    throw new Error('Internal Server Error');
  }
}