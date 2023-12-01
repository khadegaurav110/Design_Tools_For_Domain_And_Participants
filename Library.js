
import { useEffect, useState } from 'react';
function Library(){
    const [form,setForm] =useState({});
    const handleSubmit= async(e)=>{
        console.log("hello")
    }
    return(<>



<form  onSubmit={handleSubmit}>
     
     <h6>Enter Library Namee</h6>
     <input type='text' name='libraryname' >
      </input>
      <br></br>
      <h6>Select File</h6>
      <input type="file" name='file'></input>
      <br></br>
      <br></br>
      <button className="btn btn-secondary">New</button>
      <br></br>
      <br></br>
      
      <input type='submit' className="btn btn-primary"></input>
       

</form>

    
        
        </>)
}
export default Library;