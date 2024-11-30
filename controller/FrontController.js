
const AboutModel = require("../models/About")
const BlogModel = require("../models/Blog")
const CategoryModel = require("../models/Category")

class FrontController {
    //method
    static home = async(req , res)=>{
       try{
        const blogs= await BlogModel.find().sort({_id:-1}).limit(6)
        // console.log(blogs)
        res.render('home',{b:blogs})

       }catch(error){
        console.log(error)
       }
    }

    static about = async(req , res)=>{
        try{
            const about= await AboutModel.findOne()
            // console.log(about)
            res.render('about',{a:about})
    
           }catch(error){
            console.log(error)
           }
    }

    static blog = async(req , res)=>{
        try{
            const blogs= await BlogModel.find().sort({_id:-1})
            // console.log(blogs)
            res.render('blog',{b:blogs})
    
           }catch(error){
            console.log(error)  
           }
    }
    
    static contact =(req , res)=>{
        res.render('contact')
    }

    static details =async(req , res)=>{
        try{
            const details= await BlogModel.findById(req.params.id)
            const recentblogs=await BlogModel.find().limit(6)
            const category = await CategoryModel.find()
            
            res.render ('details',{d:details, r:recentblogs, c:category})

        }catch(error){
            console.log(error)
        }
        

    }

    static login =async (req , res)=>{
        try{
        res.render('login',{message:req.flash('error')})
        }catch(error){
            console.log(error)
        }    
                
    }

    static ragister =(req , res)=>{
        res.render('ragister',{message:req.flash('error')})
    }


    

}

module.exports = FrontController