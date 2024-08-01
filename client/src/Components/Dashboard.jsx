import LeftSubDashboard from "./LeftSubDashboard";
import RightSubDashboard from "./RightSubDashboard"
function Dashboard(){
    return( 
        <div className="TA_dashboard">
            <LeftSubDashboard></LeftSubDashboard>
            <RightSubDashboard></RightSubDashboard>
        </div>
    )
};
export default Dashboard;