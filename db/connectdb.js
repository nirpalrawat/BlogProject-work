const mongoose = require ('mongoose')
const localurl = 'mongodb://127.0.0.1:27017/blogproject'
const liveurl = 'mongodb+srv://ansh9754:ansh123@cluster0.a2zclkg.mongodb.net/BlogProject'


const connectDB =()=>{
    return mongoose.connect(liveurl)

    .then(()=>{
        console.log("mongoose connected succefully")


    })
    .catch((error)=>{
        console.log(error)

    })
}
module.exports = connectDB