const express=require("express");
const mongoose=require("mongoose");
async function connection(url){
   return await mongoose.connect(url).then(()=>{console.log("successfully connected to mongoDB")}).catch((err)=>{console.log("something went wrong")})
}
module.exports={
    connection,
}