const jwt=require('jsonwebtoken');
require("dotenv").config();
const {connection}=require("../Config/database_config");
const sql_query=require("../Contants/sql_qurey");
const selectAllFromUser=sql_query.selectAllFromUser;
async function isAuth(req,res,next){
    try{
        // console.log(req.body);
        const token=req.headers?.authorization.replace("Bearer ","");
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token is not available",
            })
        }
        try{
        const payload=jwt.verify(token,process.env.JWT_SECRET);
        // console.log("This is payload from user",payload);
        //----------------------------
        const {user_id,account_id}=payload;
        connection.query(selectAllFromUser,[user_id],async (err,result)=>{
            if(err){
                console.log("Database query error:", err.message);
                return res.status(500).json({
                  success: false,
                  message: "Database query error"
                });
            }
            if(result.length==0){
                console.log("User not found");
                return res.status(401).json({
                success: false,
                message: "User not found"
                });
            }
            if(result[0]?.account_id!=account_id){
                console.log("Unauthorized access");
                return res.status(401).json({
                success: false,
                message: "Unauthorized access"
                });
            }
            
            req.body.user_id=user_id;
            // console.log("I am in auth middleware",req.body);
            next();
        })
        //----------------------------
        }catch(err){
            console.log("Eroor in verifying token",err.message);
            return res.status(400).json({
                success:false,
                message:err.message
            })
        }
    }catch(err){
        console.log("Error in isAuth Middleware",err.message);
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
module.exports={isAuth};