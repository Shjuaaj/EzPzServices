import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: false },
    image: { type: String, required: false },
    description: { type: String, required: false },
    date: { type: Date, required: false },
    time: { type: String, required: false }
});

const serviceModel = mongoose.models.service || mongoose.model("service", serviceSchema);

export default serviceModel;