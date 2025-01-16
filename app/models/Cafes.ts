import mongoose, { Document, Schema } from "mongoose";

export interface ICafes extends Document {
 name: string,
 address: string,
 description:string,
 images: string[]
}

const cafesSchema:Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: []
    }
    
})

const Cafes = mongoose.models.Cafes || mongoose.model<ICafes>("Cafes" , cafesSchema);

export default Cafes;


