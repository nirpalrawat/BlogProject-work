const mongoose = require ('mongoose')
const Local_url = 'mongodb://127.0.0.1:27017/blogprojact';
const live_url = 'mongodb+srv://nirpalrawat:LHQXtw6MVi6suedl@cluster0.1simf.mongodb.net/blogportal?retryWrites=true&w=majority&appName=Cluster0'

const connectDB =()=>{
    return mongoose.connect(live_url)

    .then(()=>{
        console.log("mongoose connected succefully")


    })
    .catch((error)=>{
        console.log(error)

    })
}
module.exports = connectDB