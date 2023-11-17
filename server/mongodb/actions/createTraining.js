import connectDB from '../index.js'
import Training from '../models/Training.js'

export default async function createTraining(data) {
    try {
        await connectDB()
        const newTraining = new Training(data)
        await newTraining.save()
    } 
    catch (e) {
        console.log(e)
        throw new Error("Unable to create training log")

    }
}