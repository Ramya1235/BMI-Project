//import those pages in App.js
//then based on the path show each components using react-router components
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from './components/TopNav';
import Footer from './pages/Footer';
import PrivateRoute from './components/PrivateRoute';
//components
import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './user/Dashboard';
import DashboardSeller from './user/Dashboarduser';
import './index.css';
import Admin from './components/Admin';
import Subnav from './pages/Subnav';





function App() {
  return (
    <div class="containerBody">
      
    <BrowserRouter>
   
    <ToastContainer position='top-center'/>

      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/subnav" component={Subnav} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/seller" component={DashboardSeller} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
