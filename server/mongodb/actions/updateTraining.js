import TrainingLog from '../models/TrainingLog';
import connectDB from '..';
import Animal from '../models/Animal';

export default async function updateTrainingLog(data) {
    if (!data || typeof data !== 'object' || !data.identifier) {
        throw new Error('No information or identifier passed.');
    }

    try {
        await connectDB();

        const { identifier, ...updateData } = data;
        const lastLog = await TrainingLog.findById(identifier);

        if (!lastLog) {
            throw new Error('No such Training Log exists.');
        }
        await TrainingLog.findByIdAndUpdate(identifier, updateData);
        if ('hours' in updateData && typeof updateData.hours === 'number') {
            const animal = await Animal.findById(lastLog.animal);
            if (animal) {
                const newHours = animal.hoursTrained - lastLog.hours + updateData.hours;
                await Animal.findByIdAndUpdate(lastLog.animal, { hoursTrained: newHours });
            }
        }

        return await TrainingLog.findById(identifier);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update Training Log.');
    }
}
