import Animal from '../models/Animal.js'

export default async function updateAnimalHours(data) {
    try {
        await Animal.findByIdAndUpdate(data.animalId, { 'hoursTrained': data.hours })
    } 
    catch (e) {
        console.log(e)
    }
}