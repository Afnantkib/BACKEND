const express=require("express");
const app=express();
app.post("/",(req,res)=>{
    res.end("i am first");
})
app.get("/",(req,res)=>{
    res.end("Hello");
});

app.listen(3000,(err)=>{
    if(err){
        console.log(err," Error occured ");
        }

console.log("Code running successfully");

});