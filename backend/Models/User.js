import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    id:{
        type: String,
    },
    avatar: {
        type: Object
    }

})

export const User = mongoose.model('User',UserSchema);
