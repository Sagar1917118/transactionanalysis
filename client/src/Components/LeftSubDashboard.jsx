import {useEffect, useState,useContext} from "react";
import MyCalender from "./MyCalender";
import axios from 'axios';
import ReportContext from "../AppContext/reportcontext";
import { API_ENDPOINTS } from "../Constants/api_endpoints";
import toast from 'react-hot-toast';
function LeftSubDashboard(){
    //setting report data fetched fromAPI
    const {setReport,setLoading}=useContext(ReportContext);
    const [date,setQueriedDate]=useState("");
    const [displayCalende,setDisplayCalender]=useState(false);
    const [reportType,setReportType]=useState("");
    //function to get cookie from document
    const getCookie = (name) => {
        const cookies = document.cookie
          .split("; ")
          .find((row) => row.startsWith(`${name}=`));
       
        return cookies ? cookies.split("=")[1] : null;
       };
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    async function getReportDataFromApi(){
        if(date==""||reportType=="")
            return;
         const token = getCookie("my_token");
         const start_date=formatDate(date);
        console.log(start_date,token,reportType);
        try{
             setLoading(true);
            const response=await axios.post(`${API_ENDPOINTS.report}-${reportType}`,
                {start_date:start_date},
                {
                    headers:{
                        'Authorization':`Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response);
            var toast_id;
            if(response?.data?.success){
                if(response?.data?.code==="1"){
                    toast_id=toast.error("No transaction Data is Available");
                }
                else{
                    toast_id=toast.success("Transaction Report generated successfully");
                }
            }
            setReport(response?.data?.report_data);
            setLoading(false);
        }
        catch(err){
            setLoading(false);
            console.log(err.message);
        }
    }
    useEffect(()=>{
        getReportDataFromApi();
        setDisplayCalender(false);
    },[date]);
    function ClickedButton(){
        setDisplayCalender(true);
    }
    return(
        <div className="TA_leftsubdashboard">
            <span className="get_transaction_report_span">Get Transaction Report</span>
            <button className="button-36" onClick={()=>{setReportType("daily");ClickedButton()}}>Daily</button>
            <button className="button-36" onClick={()=>{setReportType("weekly");ClickedButton()}}>Weekly</button>
            <button className="button-36" onClick={()=>{setReportType("monthly");ClickedButton()}}>Monthly</button>
            <div className={`${displayCalende?"calender_container":"calender_no_diplay"}`}>
            <MyCalender setQueriedDate={setQueriedDate}></MyCalender>
            </div>
        </div>
    )
};
export default LeftSubDashboard;