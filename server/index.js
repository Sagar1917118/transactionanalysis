
const express = require("express");
const path = require("path");

const cors=require('cors');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("dotenv").config();
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
}))



// connecting to mysql database
const {connection}=require("./App/Config/database_config");
connection.connect((error)=>{
  if(error){
  console.error('Error connecting to MySQL database:', error);
  }else{
  console.log('Connected to MySQL database!');
  }
  });

//routesi
const userRouter =require("./App/Routes/user");
const transactionAnalysisRouter=require("./App/Routes/transaction_analysis");
app.use("/api/user/",userRouter);
app.use("/api/report/",transactionAnalysisRouter);


const PORT = process.env.PORT || 3001;
app.listen(PORT, (_) => {
    console.log(`Server started on port ${PORT}`);
    // console.log(app.get('env')); 
  });
