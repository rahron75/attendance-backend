const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser")
const cors=require("cors");
//routes

const loginroutes=require("./Routes/login")


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/",loginroutes);


const port = 5000;
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});