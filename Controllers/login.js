


exports.login=(req,res)=>{
console.log(req.body)
 const   {
        username,password
    }=req.body




if(username=="rahil"){
    return res.status(200).json({
        message: "successfull"
    })
    
}else{
    return res.status(400).json({
        error:"invalid user"
    });
}



   
 };
