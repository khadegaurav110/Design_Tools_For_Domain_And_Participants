import { Link } from 'react-router-dom'
import './Login.css';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

import './index1.css';
import { useEffect, useState } from 'react';
function Login() 
{ 

  const navigate = useNavigate();
  const [form,setForm] =useState({})
  const[ users,setUsers]=useState([]);
  
  const handleform=(e)=>{
    console.log(e.target.value,e.target.name);
    setForm(
      {
        ...form,
        [e.target.name ]: e.target.value
      }
    )}

    const handleSubmit= async(e)=>
    {
      e.preventDefault();
     const response = await fetch('http://localhost:8080/demo',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
          'Content-Type':'application/json'
        }
      })
console.log(form);
//const data = await response.text();
const data1 = await response.json();

console.log(response);
//console.log(data);
console.log(data1);
navigate("/systemrti");
    }
  


    const getUsers=async()=>{
      const response=await fetch('http://localhost:8080/demo',{
        method:'GET',
        
      })
      const data = await response.json();
      const data1 =await response.text();
      console.log(data1)
      setUsers(data);
      console.log(data);

    }

    //useEffect(()=>{ getUsers();},[])
   
  return(<>
  <body>
    <div className='model-container1'></div>
    <Nav />
   <div className='login'>
    <h1 style={{color:'blue'}}>LoginPage</h1>
    <form onSubmit={handleSubmit}>
      <p>{JSON.stringify(form)}</p>
      <h5>Username</h5>
      <input type='text' name='username' onChange={handleform}>
      </input><br/>
      <h5>Password</h5>
<input type='password' name='password' onChange={handleform}></input><br/><br/>
<input type='submit' class="btn btn-primary btn-lg mr-10" style={{marginRight:50}}></input>

    </form>

    <br></br>
      <Link to="/forgot"><h5>ForgotPassword</h5></Link>
    <Link to="/registration"><h5>Registration</h5></Link>
    <div>
      <ul>
       { users.map(user=><li>{user.username},{user.password}</li>)}
      </ul>
    </div>
   </div>
    </body>
  
  </>

  );
     
      
        
  
           
    
}
export default Login;