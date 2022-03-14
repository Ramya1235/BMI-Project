import {Link} from 'react-router-dom';
import Navlogout from './Navlogout';
// import TopNav from './TopNav';

const DashboardNav = () => {
    const active = window.location.pathname;
    // console.log(active);
    return(
        <ul className='nav nav-tabs '>
            <li className="nav-item desh">
                <Link className={`nav-link bg ${active === '/dashboard' && "active"}`} to="/dashboard">Profile</Link>
            </li>
            
            <li className="nav-item pull-left">
                <Link className={`nav-link bg ${active === '/dashboarduser' && "active"}`} to="/dashboard/seller">Check Your BMI</Link>
            </li>
            <Navlogout />
        </ul>
    );
};

export default DashboardNav;