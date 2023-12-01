
import { useState } from "react";
import { useNavigate } from 'react-router-dom';




function Project(){
   
    const [form, setForm] = useState({});
    const navigate1 =useNavigate();




    const handleSubmit= async(e)=>
    {
      e.preventDefault();
     const response = await fetch('http://localhost:8080/project',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
          'Content-Type':'application/json'
        }
      })
console.log(form);
//const data = await response.text();
//const data1 = await response.json();
navigate1("/systemrti");
console.log(response);

navigate1("/systemrti")
//console.log(data);
//console.log(data1);

    }
    


    const handleform=(e)=>{
        console.log(e.target.value,e.target.name);
        setForm(
          {
            ...form,
            [e.target.name ]: e.target.value
          }
        )}
    
    return(<>





<form  onSubmit={handleSubmit} >
     
     
     <br></br>
      <input type='text' name='name'  value={form.name} onChange={handleform} required>
      </input>
      
      <input type='submit' className="btn btn-secondary" style={{marginLeft:10}} ></input>
       

</form>

    
        
        </>)
}
export default Project;