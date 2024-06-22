const express =require("express");
const app=express();
const {connection}=require("./connection")
const url=require("./model/url")
const routes=require("./routes/index")
// declare the port 
const port =5000;
// middleware
app.use(express.json());
// let connection to mongoDB
connection("mongodb://localhost:27017/urlShort_ner");
app.use("/url",routes);


app.get("/:shortID",async(req,res)=>{
    const shortid=req.params.shortid;
  const entry= await url.findOneAndUpdate({shortid},{$push:{visitHistory:{timestamps:Date.now()}}})
  res.redirect(entry.redirectURL);
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})