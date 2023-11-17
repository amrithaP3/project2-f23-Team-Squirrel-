import Animal from '../models/Animal.js'

export default async function updateAnimalHours(data) {
    try {
        await Animal.findByIdAndUpdate(data.animalID, { 'hoursTrained': data.hours })
    } 
    catch (e) {
        console.log(e)
    }
}