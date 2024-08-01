
import { useState,useContext } from "react";
import TransactionRow from "./TransactionRow";
import MessageContext from "../AppContext/reportcontext";
import Loading from "./Loading";
function RightSubDashboard(){
    const {report,loading}=useContext(MessageContext);
    console.log("This is report data",report);
    return(
        <div className="TA_rightsubdashboard">
            {loading && (<Loading></Loading>)}
            <div className="sub_TA_rightsubdashboard">
           <TransactionRow transaction_id={"Transaction Id"} amount={"Amount"} currency={"Currency"} transaction_status={"Trnasaction Status"} transaction_time={"Transaction Time"} 
                initiating_bank={"Initiating Bank"} receiving_bank={"Receiving bank"} class_name={"grid_item_1"}></TransactionRow>
           {report && (
            report.map((report,index)=>{
                return(
                <TransactionRow key={index} idx={index} transaction_id={report?.transaction_id_bank} amount={report?.amount} currency={report?.currency} transaction_status={report?.transaction_status} transaction_time={report?.transaction_time} 
                initiating_bank={report?.initiating_bank} receiving_bank={report?.receiving_bank} class_name={"grid_item_2"}></TransactionRow>
            )
            }
           ))}
           </div>
        </div>
    )
};
export default RightSubDashboard;