import bcrypt from 'bcryptjs';
import connectDB from '../index.js';
import User from '../models/User.js';

const createUser = async (data) => {
    await connectDB();
    const { fullName, email, password, admin } = data;
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      admin,
    });
  
    await user.save();
    return user;
  };
  
  export default createUser;
  