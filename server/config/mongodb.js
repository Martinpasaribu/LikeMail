import mongoose from "mongoose";

mongoose.connect('mongodb+srv://martin12082000:Martin1208__+@likemail.5hj9qj8.mongodb.net/?retryWrites=true&w=majority&appName=LikeMail',{
    user:'martin12082000',
    pass:'Martin1208__+',
})

  export const mongodb = mongoose.connection;

  mongodb.on('error',(err)=>{
        console.log('MongoDB Terputus', err)
    })

    mongodb.once('open',()=>{
        console.log(" MongoDB Terhubung")
    })
