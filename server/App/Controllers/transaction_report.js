const {connection}=require("../Config/database_config");
const sql_queires=require("../Contants/sql_qurey");
const get_report_id_query=sql_queires.get_report_id_query;

const report_data_query=sql_queires.report_data_query;
async function getTransactionReportDaily(req,res){
    try{
        const {user_id,start_date}=req.body;
        // console.log(start_date,user_id);
        connection.query(get_report_id_query,[user_id,"daily",start_date],async (err,result)=>{
            if(err){
                return res.status(500).json(
                    {
                        success:false,
                        message:err.message,
                    }
                )
            }
            if(result.length==0){
                return res.status(200).json({
                    success:true,
                    code:"1",
                    message:"No report Present in tht DataBase"
                })
            }
            const report_id=result[0]?.report_id;
            console.log(report_id);
            connection.query(report_data_query,[report_id],async (err,result)=>{
                if(err){
                    return res.status(500).json({
                        success:false,
                        message:err.message,
                    })
                }
                if(result.length==0){
                    return res.status(400).json({
                        success:true,
                        code:"1",
                        message:"No report is present in DataBase"
                    })
                }
                return res.status(200).json({
                    success:true,
                    report_data:result,
                })
            })

        })
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({
            success:false,
            message:err.message,
        }
        )
    }
}

async function getTransactionReportWeekly(req,res){
    try{
        const {user_id,start_date}=req.body;
        console.log(start_date,user_id);
        connection.query(get_report_id_query,[user_id,"weekly",start_date],async (err,result)=>{
            if(err){
                return res.status(500).json(
                    {
                        success:false,
                        message:err.message,
                    }
                )
            }
            if(result.length==0){
                return res.status(200).json({
                    success:true,
                    code:"1",
                    message:"No report Present in tht DataBase"
                })
            }
            const report_id=result[0]?.report_id;
            console.log(report_id);
            connection.query(report_data_query,[report_id],async (err,result)=>{
                if(err){
                    return res.status(500).json({
                        success:false,
                        message:err.message,
                    })
                }
                if(result.length==0){
                    return res.status(400).json({
                        success:true,
                        code:"1",
                        report_data:[],
                    })
                }
                return res.status(200).json({
                    success:true,
                    report_data:result,
                })
            })

        })
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({
            success:false,
            message:err.message,
        }
        )
    }
}
async function getTransactionReportMonthly(req,res){
    try{
        const {user_id,start_date}=req.body;
        console.log(start_date,user_id);
        connection.query(get_report_id_query,[user_id,"monthly",start_date],async (err,result)=>{
            if(err){
                return res.status(500).json(
                    {
                        success:false,
                        message:err.message,
                    }
                )
            }
            if(result.length==0){
                return res.status(200).json({
                    success:true,
                    code:"1",
                    message:"No report Present in tht DataBase"
                })
            }
            const report_id=result[0]?.report_id;
            console.log(report_id);
            connection.query(report_data_query,[report_id],async (err,result)=>{
                if(err){
                    return res.status(500).json({
                        success:false,
                        message:err.message,
                    })
                }
                if(result.length==0){
                    return res.status(400).json({
                        success:true,
                        code:"1",
                        report_data:[],
                    })
                }
                return res.status(200).json({
                    success:true,
                    report_data:result,
                })
            })

        })
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({
            success:false,
            message:err.message,
        }
        )
    }
}
module.exports={getTransactionReportDaily,getTransactionReportMonthly,getTransactionReportWeekly};

// function getDateAfter30Days() {
//     // Get the current date
//     const currentDate = new Date();

//     // Add 30 days to the current date
//     currentDate.setDate(currentDate.getDate() + 30);

//     // Extract year, month, and day from the resulting date
//     const year = currentDate.getFullYear();
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     const day = String(currentDate.getDate()).padStart(2, '0');

//     // Format the date as 'YYYY-MM-DD'
//     return `${year}-${month}-${day}`;
// }