import Calc from "../components/Calc";
import DashboardNav from "../components/DashboardNav";

const Dashboarduser =() => {
    return(
        <>
            <div className="container-fluid bg-secondary ">
                <h1>Dashboard</h1>
            </div>

            <div className="container-fluid p-1">
                <DashboardNav />
            </div>

            <div className="container">
                <Calc />
            </div>
        </>
    );
};

export default Dashboarduser;