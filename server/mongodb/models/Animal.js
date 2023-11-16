import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    animalName: {
        type: String,
        required: true
    },
    alertnimalBreed: {
        type: String,
        required: true
    },
    hoursTrained: {
        type: double,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema)