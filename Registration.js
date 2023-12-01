import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index1.css';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

;

function Registration(){
  const navigate1 =useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  



  const handleChange=(e) =>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
     
    const response1 =  fetch('http://localhost:8080/registration',{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    // Handle registration submission here (will be done through API).
    console.log(formData);
     navigate1("/login")
  




    
  };






    return(<>
    
    <div className='model-container1'></div>
    <Nav />
    <br></br>
    <div className='login'>
      <br></br>
<h1  style={{color:'blue'}}> Registration</h1>
    <form onSubmit={handleSubmit}>
      <h5>FirstName</h5>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
        /><br></br>
        <h5>LastName</h5>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
        /><br></br>
        <h5>Email</h5>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        /><br></br>
        <h5>Password</h5>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        /><br></br>
        <h5>confirmPassword</h5>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br></br><br></br>
        <button type="submit" class="btn btn-primary btn-lg mr-10">Register</button>
      </form>
      <br></br>
      <Link to="/forgot"><h5>ForgotPassword</h5></Link>
    <Link to="/login"><h5>Login</h5></Link>
      
    </div>
    
    </>)

 
}
export default Registration;