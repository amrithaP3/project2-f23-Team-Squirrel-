import connectDB from '../index.js'
import Animal from '../models/Animal.js'
import User from '../models/User.js'

export default async function readAnimals(data) {
    try {
        await connectDB()
        const { id } = data
        if (User.exists({_id: id}) === null) return false
        return await Animal.find({ "owner": id })
    } 
    catch (e) {
        console.log(e)
    }
}