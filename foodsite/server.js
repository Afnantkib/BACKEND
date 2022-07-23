const express=require("express");
const app=express();
const userModel=require("./userModel");
app.use(express.json())

app.post('/signup',(req,res)=>{

    let data=req.body;
    console.log(data);
    userModel.create((data),(err,newUser)=>{
        console.log("hello11111");
    });
    res.end("data received");
})
app.listen(3000,(err)=>{
    if(err){
        console.log("Error");
        return;
    }
    console.log("Running Successfully");
})


