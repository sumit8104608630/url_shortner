const mongoose=require("mongoose")
let schema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp:{type:Number}}],
},    {timestamps:true}
)
const url=mongoose.model("url",schema);
module.exports=url;  //exporting the model to be used in other files.  //url
