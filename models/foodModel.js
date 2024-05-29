import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid'; // Import UUID

const foodSchema = new mongoose.Schema({
    food_id: { type: String, default: uuidv4 }, // Add this line
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
export default foodModel;
