import mongoose from "mongoose";

const trainingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    animalName: {
        type: String,
        required: true
    },
    animalBreed: {
        type: String,
        required: true
    },
    hoursLogged: {
        type: double,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export default mongoose.models?.Training || mongoose.model("Training", trainingSchema)