import connectDB from '../index.js';
import Training from '../models/Training.js';

export default async function deleteTraining(trainingId) {
    try {
        await connectDB();
        await Training.findByIdAndDelete(trainingId);
    } catch (e) {
        console.log(e);
        throw new Error("Unable to delete training");
    }
}
