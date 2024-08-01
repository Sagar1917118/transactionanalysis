const {connection}=require("../Config/database_config");
const jwt = require("jsonwebtoken");
const loginQuery = `
SELECT * FROM user WHERE email = ?
`;
async function login(req,res){
    try{
        const {email,password}=req.body;
        if(!email || !password){                             
            return res.status(403). json({
                success:false,
                message:'Please Fill up All the Required Fields',
            });
        }
        console.log(email,password);
        connection.query(loginQuery, [email], async (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(400).json({
                    "error":err.message,
                });
            }
            // console.log(results);
            if (results.length === 0) {
                console.log('No user found with this email.');
                return res.status(400).json({
                    "message":"No user found with this email",
                });
            }
        
            const user = results[0];
            
            // const passwordMatch = await bcrypt.compare(password, user.password);
            
            if (!password==user.password) {
                return res.status(400).json({
                    message:"Password is incorrect",
                })
            } 
            //
            const payload = {                                                 // generate payload;
                email: user.email,
                user_id: user.user_id,
                account_id:user.account_id,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {         // generate token (combination of header , payload , signature) 
                expiresIn:"24h",                                               // set expiry time;
            });
            user.token = token;
            user.password= undefined;
            const options = {                                               //create cookie and send response
                expires: new Date(Date.now() + 1*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'Logged in successfully',
            })
        });

    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            message:err.message,
        })
    }
}
module.exports={login};