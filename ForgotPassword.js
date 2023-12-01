import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './index1.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword(){

  const navigate3 = useNavigate();

  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
    confirmPassword: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
     
    const response1 =  fetch('http://localhost:8080/forgot',{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    // Handle registration submission here (will be done through API).
    console.log(formData);
    navigate3("/login");
  };






    return(<>

<div className='model-container1'></div>
<Nav />
    <div className='login'>
<h1 style={{color:'blue'}}> forgot Password</h1>
    <form onSubmit={handleSubmit}>
       <h5>Email</h5>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br></br>
        <h5>Password</h5>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        /><br>
        </br>
        <h5>confirmPassword</h5>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        /><br>
        </br><br></br>
        <button type="submit" class="btn btn-primary btn-lg mr-10">Forogot</button>
      </form>
      <br></br>
      <Link to="/registration"><h5>Registration</h5></Link>
    <Link to="/login"><h5>Login</h5></Link>
     
    </div>
    </>)
}
export default ForgotPassword;