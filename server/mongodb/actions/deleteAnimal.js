import connectDB from '../index.js';
import Animal from '../models/Animal.js';

export default async function deleteAnimal(animalId) {
    try {
        await connectDB();
        await Animal.findByIdAndDelete(animalId);
    } catch (e) {
        console.log(e);
        throw new Error("Unable to delete animal");
    }
}