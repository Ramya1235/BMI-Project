import { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { register } from "../actions/auth";


const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      });
      console.log('REGISTER USER ====>', res);
      toast.success('Register success.Please login.');
      history.push('/');
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };
  return (
    <>

      {/* <Link className='nav-link Reg' to="/">Home</Link> */}
      <div className="imageback" >
        {/* <div className="nav d-inline">
        <img src="https://img.freepik.com/free-vector/indikator-bmi-white-background-chart-concept-vector-icon_100456-6270.jpg" alt=""></img>
        
      </div> */}
        <Link className='nav-link d-inline Reg' to="/">Home</Link>
        <div className="Register">
          <h1>Register</h1>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <RegisterForm
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Register;


