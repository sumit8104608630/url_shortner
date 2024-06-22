const nanoid=require("shortid")
const url=require("../model/url")

async function handle_post(req,res){
    const shortId=nanoid()
    
    const body=req.body;
    if(!body.url){
        res.status(404).json({err:"url is not found"})
    }
    url.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],
    })
    res.status(201).json({id:shortId})
}
module.exports={
    handle_post,
}