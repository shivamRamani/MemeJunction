import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: String,
    text: String,
    image: {
        type: String,
        required: true,
    },
    likes: {
        type:Number,
        default: 0,
    }
})

export const Post = mongoose.model('Post',postSchema);

