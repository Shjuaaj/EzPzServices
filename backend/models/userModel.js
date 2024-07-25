import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true }
}, { _id: false });

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Map, of: cartItemSchema, default: {} }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
