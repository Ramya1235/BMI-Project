



import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import Navlogout from "../components/Navlogout"

const Dashboard =() => {
    return(
        <>
         {/* <div className="container-fluid p-4">
                <Navlogout />
            </div> */}
            <div className="container-fluid  p-3">
                <ConnectNav/>
            </div>

            <div className="container-fluid p-4">
                <DashboardNav />
            </div>
           
            <div className="container">
                <p>Show</p>
            </div>
        </>
    );
};

export default Dashboard;