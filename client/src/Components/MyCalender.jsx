import Calendar from 'react-calendar';
import {useEffect, useState} from 'react';
import "./Login.css";
import 'react-calendar/dist/Calendar.css';
function MyCalender({setQueriedDate}){
    const [date,setDate]=useState(new Date());
    useEffect(()=>{
        setQueriedDate(date);
    },[date]);
    return(
        <div>
        <Calendar className="react-calender"  maxDate={new Date()} onChange={setDate} value={date}/>
        </div>
    )
}
export default MyCalender;