import connectDB from '../index.js';
import Training from '../models/Training.js';
import Animal from '../models/Animal.js';
import User from '../models/User.js';

export default async function readTraining(data) {
  try {
    await connectDB();
    const { id } = data;
    const userExists = await User.exists({ _id: id });
    
    if (!userExists) {
      return false;
    }
    const trainingData = await Training.find({ user: id });
    const animalData = await Animal.find({ owner: id });

    return { trainingData, animalData };
  } catch (e) {
    console.error('Error reading training data:', e);
    throw e;
  }
}
