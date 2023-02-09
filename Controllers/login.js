exports.login=(req,res)=>{
console.log(req.body)
 const   {
        username,password
    }=req.body




if(username=="rahil"){
    return res.status(200).json({
        message: "successful"
        
    });
}else{
    return res.status(400).json({
        error:"invalid user"
    });
}



   
 };
