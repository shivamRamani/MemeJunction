import express from 'express';
import mongoose from 'mongoose';
import { Post } from './Models/Post.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import { auth } from './middleware/auth.js';
import { User } from './Models/User.js';

const app = express();
const PORT= process.env.PORT || 5000;



//intializing middleware to get request body data
app.use(express.json({extended: false}));

//middleware for different routes
app.use('/posts',postRoutes);
app.use('/users',userRoutes);

app.get('/users',auth,async (req,res)=>{
    res.json(await User.find({_id: req.userId}));
})




mongoose
    .connect("mongodb://localhost:27017/meme", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log("Error");
        console.log(err);
    });


    
    
    app.get('/',(req,res)=>{
        res.send('Home');
    });
    
    app.listen(PORT,()=>console.log(`listing to ${PORT}`));
// const test1 = new Post({name: 'joker',likes: 6});
// // console.log(test1);
// test1.save(()=>console.log(test1));
// Post.find({}).then(data=>console.log(data));
// const count = await Post.count({name : 'joker'});
// console.log(count);
// Post.findOneAndDelete({name: 'joker'});