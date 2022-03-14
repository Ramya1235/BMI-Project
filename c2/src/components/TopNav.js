import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const TopNav = () => {

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory()

  // const logout = () => {
  //   dispatch({
  //     type: 'LOGOUT',
  //     payload: null,
  //   });
  //   window.localStorage.removeItem('auth');
  //   history.push("/login");
  // };

  return (

    <div className="nav">
      <div>
        <img src="https://img.freepik.com/free-vector/indikator-bmi-white-background-chart-concept-vector-icon_100456-6270.jpg" alt=""></img>
      </div>
      {/* <h3 class="logo">BMI Calculator</h3> */}
      <Link className='nav-link' to="/Subnav">Home</Link>
      <Link className='nav-link' to="/">Login</Link>
      <Link className='nav-link' to="/register">Register</Link>

      {/* {auth !== null && (
        <a className='nav-link' onClick={logout}>Logout</a>
      )} */}
      {auth === null && (
        <>
          <Link className='nav-link' to="/login">Login</Link>
          {/* <Link className='nav-link' to="/register">Register</Link> */}
        </>
      )}
    </div>
    

  )
};


export default TopNav;