import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: String,
    caption: String,
    selectedFile: {
        type: String,
        // required: true,
    },
    likes: {
        type:[String],
        default: [],
    }
})

export const Post = mongoose.model('Post',postSchema);

