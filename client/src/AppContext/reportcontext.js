import { useEffect,useState ,createContext} from "react";
const ReportContext=createContext();
export const ReportContextProvider=({children})=>{
    const [report,setReport]=useState([]);
    const [loading,setLoading]=useState(false);
    return (
        <ReportContext.Provider value={{report,setReport,loading,setLoading}}>
            {children}
        </ReportContext.Provider>
      );
}
export default ReportContext;
