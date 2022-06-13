import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: String,
    caption: String,
    creatorId: String,
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

