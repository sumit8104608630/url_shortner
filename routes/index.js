const express=require("express");
const routes=express.Router();
const {handle_post}=require("../controller/controller")
routes.post("/",handle_post);
module.exports=routes;