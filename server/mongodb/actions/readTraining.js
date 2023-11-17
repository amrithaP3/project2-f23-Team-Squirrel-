import connectDB from '../index.js'
import Training from '../models/Training.js'
import Animal from '../models/Animal.js'
import User from '../models/User.js'

export default async function readTraining(data) {
    try {
        await connectDB()
        const { id } = data
        if (User.exists({_id: id}) === null) return false
        return await Training.find({ "user": id })
    } 
    catch (e) {
        console.log(e)
    }
}