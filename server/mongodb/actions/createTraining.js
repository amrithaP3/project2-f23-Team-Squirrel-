// actions/createTraining.js

import connectDB from '../index.js';
import Training from '../models/Training.js';

export default async function createTraining(data) {
  try {
    // Connect to the database
    await connectDB();

    // Create a new training log instance
    const newTraining = new Training(data);

    // Save the training log to the database
    await newTraining.save();

    // Return the newly created training log
    return newTraining;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to create training log');
  }
}
