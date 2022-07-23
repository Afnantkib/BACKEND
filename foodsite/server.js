const express=require("express");
const app=express();
const userModel=require("./userModel");
const cookieParser=require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
//we will use JWT web tokken
//home work create user , delete user etc etc 
app.post('/signup',(req,res)=>{

    let data=req.body;
    console.log(data);
    userModel.create((data),(err,newUser)=>{
        console.log("hello11111");
    });
    res.end("data received");
})

app.post('/login',(req,res)=>{
    let{email,password}=req.body;
    console.log(email+" "+password);
if(email&&password){
        userModel.findOne({email:email},(err,user)=>{
        if(err){
         return  res.end("Invalid user/ password");
         
        }
        if(user){
            if(user.password==password){
                // res.cookie("toksken","this is my tokken");   
                return res.end("Loggesssssd in successfully");
              
               
            }
            return  res.end("Password entered is wrong ");
                
            
            
        }
    })
}else{

    return res.end("Kindly enter email and password both");
}


    

})

//get all users
//protectRoute is a middleware which will be responsible for some checks from the request itself
app.get("/users",protectRoute,(req,res)=>{
    userModel.find({},(err,users)=>{
        if(err){
            res.end("Error in accessing users");
        }
        res.end(JSON.stringify(users));
    })
});

function protectRoute(req,res,next){
    // req.cookie("token","sample tokken");
console.log(req.cookies);
next();
}


app.listen(3000,(err)=>{
    if(err){
        console.log("Error");
        return;
    }
    console.log("Running Successfully");
})


