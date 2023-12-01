import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Project from './Project';

import './index1.css';
import Library from './Library';
import Domain from './Domain';
function Systemrti()
{
    
    const [showModel,setshowModel]=useState(false);
    const [showModel1,setshowModel1]=useState(false);
    const [showModel2,setshowModel2]=useState(false);
    const [showModel3,setshowModel3]=useState(false);

    const Mymodel=()=>{
        return(<>
        <div className='modal-wrapper' > </div>
        <div className='model-container'>
        <h1>Enter Project Name</h1>
        <Project />
      
        <br>
        </br>
        <button className='btn btn-danger' onClick={()=>setshowModel(false)}> Close</button>
        </div>
        
        </>)
    }
    const Mymodel1=()=>{
        return(<>
        <div className='modal-wrapper' > </div>
        <div className='model-container'>
        <h1>Open Project</h1>
        <Project />
      
        <br>
        </br>
        <button className='btn btn-danger' onClick={()=>setshowModel1(false)}> Close</button>
        </div>
        
        </>)
    }
    const Mymodel2=()=>{
        return(<>
        <div className='modal-wrapper' > </div>
        <div className='model-container'>
        <h1>Add Library</h1>
        <Library />
      
        <br>
        </br>
        <button className='btn btn-danger' onClick={()=>setshowModel2(false)}> Close</button>
        </div>
        
        </>)
    }
    const Mymodel3=()=>{
        return(<>
        <div className='modal-wrapper' > </div>
        <div className='model-container'>
        <h1>Add Domain</h1>
        <Domain/>
      
        <br>
        </br>
        <button className='btn btn-danger' onClick={()=>setshowModel3(false)}> Close</button>
        </div>
        
        </>)
    }

    return(<>
    <div className='container-fluid'>
        <div className='row' style={{backgroundColor:'blue',height:70,
    alignItemText:'center'}}>
<h2>Domain And Participants</h2>
        </div><br></br>
        <div className='row'  style={{height:150}}>
            <div className='col-12'>

          
            <button type="button" class="btn btn-primary btn-lg mr-10" style={{marginRight:50}} onClick={()=>setshowModel(true)}>Create Project</button>
            {showModel && <Mymodel />}
            <button type='button' className='btn btn-primary btn-lg ' style={{marginRight:1250}} onClick={()=>setshowModel1(true)}>Open Project</button> 
            {showModel1 && <Mymodel1 />} 
            <Link to="/login">Login</Link>
            <button type='butoon' className='btn btn-secondary btn-lg' style={{marginLeft:10}} >Login/Logout</button>
            <br></br><br></br>
            <div>
            <h6>Project Name:</h6>
            <h6>Project1</h6>
            </div>
 
  </div>

            </div>
            <div className='row' >
                <div className='col-3 bgcolor:red' style={{height:700}}>
            
            <button type="button" class="btn btn-primary btn-lg mr-10" style={{marginRight:10}}>Domain</button>
            <button type='button' className='btn btn-primary btn-lg ' style={{marginRight:10}} >Participants</button>
            <br></br>
            <br></br>

            <buttion className="btn btn-secondary" style={{marginRight:10}}  onClick={()=>setshowModel2(true)} >Add Library</buttion>
            {showModel2 && <Mymodel2 />} 
            <buttion className="btn btn-secondary" style={{marginRight:10}} onClick={()=>setshowModel3(true)}> Add Domain</buttion>
            {showModel3 && <Mymodel3 />} 
           
      
        
                </div>
                <div className='col 'style={{backgroundColor: "white",height:700}}  >
                    
                    <button type="button" class="btn btn-primary btn-lg mr-10" style={{marginRight:10}}>Structure</button>
            <button type='button' className='btn btn-primary btn-lg ' style={{marginRight:10}} >XML</button>

           
           

                    <br></br>
                    <br></br>
            <div className='row'>
                <div className='col' style={{backgroundColor:"white",height:100}}>
                    <br></br>
                    <h6 style={{marginRight:10}}>Domain Name:</h6><p></p>
                    <h6  style={{marginRight:10}}> Domain ID:</h6>
                </div>
            </div>
                </div>
               
            </div>
            
        </div>
    
   
    


    
    </>)
}
export default Systemrti;