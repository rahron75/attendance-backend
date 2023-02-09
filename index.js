const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser")
const cors=require("cors");
// const mydb = require('.../Config/db')

//db connection 
const sql = require("./Models/db.js")

//routes

const loginroutes=require("./Routes/login")
// const dbroutes = require("./Routes/db")


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/",loginroutes);
// app.use("/home",dbroutes);


const port = 5000;
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});